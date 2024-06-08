---
title: "Introduction to GNU parallel"
layout: single
author: Siva Chudalayandi
author1: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 661
level: 1
categories: ["hpc", "command-line", "computing-tools", "parallel-computing", "library-package-module"]
tags: ["hpc-cluster", "module", "module-load",  "parallel", "computer-power", "CPU", "scalable", "use-multiple-cores", "zipping-files", "feeding-inputs", "bioinformatics", "blast-in-parallel"]
attributes: ["example", "command", "automation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction


Certain analyses can be time-consuming when they run on a single processor, especially when dealing with large datasets. A task is deemed trivially **parallelizable** if the data can be divided into chunks and processed independently.

### *Examples of data that can be easily parallelized*

* in general scenario:
  * when each line of a file can be processed individually
  * individual records in a database file
  * each section/module/subset of a large dataset
* domain-specific examples:
  * each chromosome of a genome can be processed individually
  * each scaffold of an assembly can be processed individually
  * each image in a collection
  * individual transactions in financial data


### Examples of problems that are **trivially parallelizable**  

* zipping or unzipping 10s to 100s of files
* counting the number of lines in a large file
* aligning raw sequencing data files of many samples to a genome
* resizing a large batch of images
* converting multiple video files to different formats
* running simulations with different parameters on separate cores or nodes


### Examples of problems that are **not** trivially parallelizable

* Genome assembly is **not** trivially parallelizable because the first step requires alignment of each read to each other read in order to find which ones are similar and should be joined (assembled).  Take a subset of the reads would result in a bunch of small poor assemblies.
* Training a machine learning model on a single large dataset is not trivially parallelizable because the process typically involves iterating over the entire dataset multiple times to update model parameters, and breaking up the dataset could result in suboptimal model performance due to lack of global context.
* Processing a large database query involving complex joins and aggregations is not trivially parallelizable because the relationships between different tables need to be preserved, and breaking up the query could lead to incorrect results or incomplete analysis.
* Running a complex simulation with interdependent variables is not trivially parallelizable because each step of the simulation relies on the results of previous steps, and parallelizing it could introduce race conditions or synchronization issues.


## GNU `parallel` for trivially parallelizable problems

The program that we use to parallelize a bioinformatics problem is **GNU parallel**. It is *"a shell tool for executing jobs in parallel using one or more compute nodes"*.
<div class="note" markdown="1">
GNU parallel helps you run jobs that you would have otherwise run sequentially one by one or in a loop.
</div>
You can check the <a href="https://www.gnu.org/software/parallel/" target="_blank">GNU parallel website  ⤴</a> to determine how to install parallel on your cluster and/or learn how to use it.

<div class="protip" markdown="1">
On SCINet/Ceres, you can load parallel in version 20230222 *(as of April 2024)*. <br>
On SCINet/Atlas, you can load parallel in version 20200722 *(as of April 2024)*.
</div>

Here, we load the module and look at the version

```bash
module load parallel
parallel --version
```
<pre class="output">
GNU parallel 20230222
Copyright (C) 2007-2023 Ole Tange, http://ole.tange.dk and Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
GNU parallel comes with no warranty.

Web site: https://www.gnu.org/software/parallel

When using programs that use GNU Parallel to process data for publication
please cite as described in 'parallel --citation'.
</pre>


# getting-started `parallel`

<div class="required" markdown="1">

Before proceeding with the hands-on example of using GNU Parallel, it's essential to follow these steps to set up your environment on the HPC cluster.
1. To log in to the <a class="t-links" href="623">HPC cluster in a terminal</a>, use `ssh user.name@hostname` with your user credentials and specific hostname at your HPC infrastructure. Alternatively, use the <a class="t-links" href="624">ODM access</a>.
2. Start an interactive session on a computing node using the command:
  ```
salloc -N1 -n10 -t 1:00:00 -A <account>
```
  *This command will give 1 Node with 10 cpu for a time of 1 hour.* <base class="mb">
  <span class="c-bad">**NOTE:** If you see your granted allocation *(e.g., salloc: Nodes Atlas-0025 are ready for job)* but still on the login node, try `ssh Atlas-0025` replacing "Atlas-0025" with your granted node.</span>
3. Navigate to your working directory with sufficient storage quota using `cd` command.
4. Finally, check the availability of the parallel module with `module avail parallel` and load it with:
  ```
module load parallel
```
</div>


## Example dataset

We will be using COVID-19 data collated by <a href="https://github.com/nytimes/covid-19-data" target="_blank">New York Times github repository  ⤴</a>.

```bash
mkdir GNU-parallel
cd GNU-parallel
wget https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv
```
<pre class="output">
--2024-04-26 16:23:24--  https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 185.199.111.133, 185.199.110.133, 185.199.108.133, ...
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|185.199.111.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 104795654 (100M) [text/plain]
Saving to: ‘us-counties.csv’

100%[=======================================================================================>] 104,795,654 54.7MB/s   in 1.8s   
</pre>

This (`us-counties.csv`) is a comma separated file so let's convert it to a tab delimitated format:

```bash
more us-counties.csv  | tr ',' '\t' > us-counties.tab
```
<pre class="output">
<b class="prompt-3"></b>ls
us-counties.csv  us-counties.tab
</pre>

As you can see, this data contains the county and state information about the pandemic over time.

<pre class="output">
<b class="prompt-3"></b>head us-counties.tab

date    county  state   fips    cases   deaths
2020-01-21      Snohomish       Washington      53061   1       0
2020-01-22      Snohomish       Washington      53061   1       0
2020-01-23      Snohomish       Washington      53061   1       0
2020-01-24      Cook    Illinois        17031   1       0
2020-01-24      Snohomish       Washington      53061   1       0
2020-01-25      Orange  California      06059   1       0
2020-01-25      Cook    Illinois        17031   1       0
2020-01-25      Snohomish       Washington      53061   1       0
2020-01-26      Maricopa        Arizona 04013   1       0
</pre>

**Instead of one large file let's split this data by county-state.**

Using `sort` and `awk` we can first sort the file by county/state and then use `awk` to print each line (`$0`) to a file named `county-state.tab`.
```bash
sort -k 2,3 us-counties.tab | awk '{print $0 > $2"-"$3".tab"}'
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>

This command pipeline performs two operations. <br>
First, it sorts the lines of the file "us-counties.tab" based on fields 2 *(country)* and 3 *(state)* using the `sort` command. <br>
Then, it uses `awk` to print each line into a file named after the concatenation of the values in fields 2 and 3, with a `.tab` extension. <base class="mb">
So, for each unique combination of values in fields 2 and 3, a separate file is created containing the corresponding lines from the original file.
<pre class="output">
<b class="prompt-3"></b>head Adair-Iowa.tab

2020-03-17	Adair	Iowa	19001	1	0
2020-03-18	Adair	Iowa	19001	1	0
2020-03-19	Adair	Iowa	19001	1	0
2020-03-20	Adair	Iowa	19001	1	0
2020-03-21	Adair	Iowa	19001	1	0
2020-03-22	Adair	Iowa	19001	1	0
2020-03-23	Adair	Iowa	19001	1	0
2020-03-24	Adair	Iowa	19001	1	0
2020-03-25	Adair	Iowa	19001	1	0
2020-03-26	Adair	Iowa	19001	1	0
</pre>
</details><base class="mt">

This will generate 3241 files + the original 2 files we downloaded:
<pre class="output">
<b class="prompt-3"></b>ls | wc
   3243    3243   62968
</pre>


## GNU examples

## <button class="btn example mr"></button>Gzipping N text files using `gzip`

**Learning objectives**
  * *How to use parallel with gzip to zip many files simultaneously?*
  * The anatomy of a `parallel` command.

Let's make a copy of the data and compare how long it takes to run gzip using a for loop vs using parallel

```bash
mkdir -p gzip/parallel
mkdir -p gzip/forloop
cp *.tab gzip/parallel
cp *.tab gzip/forloop
```

### *Gzip using a* `for` *loop*
We can do this using a `for` loop as follows: <br>
*your expected location on the HPC:* `GNU-parallel/gzip/forloop`
```bash
cd gzip/forloop
time for f in *.tab; do gzip $f; done
```
<pre class="output">
real    0m15.801s
user    0m1.414s
sys     0m5.045s
</pre>

### *Gzip using* `parallel`

However, we can make better use of all the available CPUs by using GNU parallel. The syntax of the function is as follows:
<table>
  <tr> <td><code>parallel</code></td>  <td>command keyword</td> </tr>
  <tr> <td><code>-j10</code></td>      <td>number of jobs or cpus to use for processing. <i>Here we are using 10 cpus.</i></td> </tr>
  <tr> <td><code>"command"</code></td> <td>in this case <code>gzip {}</code> where <code>{}</code> is a place holder for substituting a list of files defined after the delimiter</td> </tr>
  <tr> <td><code>:::</code></td>       <td>the delimiter</td> </tr>
  <tr> <td><code>.tab</code></td>      <td>is a wildcard (<code>*</code>) pattern that matches all filenames in the current directory with a ".tab" extension</td> </tr>
</table>

```bash
cd ../parallel
time parallel -j10 "gzip {}" ::: *.tab
```
<pre class="output">
real    0m6.405s
user    0m6.872s
sys     0m11.623s
</pre>

As you can see this sped up the gziping command by a factor of 2.3.  *This may vary depending on the number of cpus you have and their speed.*

Here is how you can **unzip** all the files with the `parallel` speedup. *It takes about the same amount of time.*
```bash
parallel -j10 "gunzip {}" ::: *.tab.gz
```
<pre class="output">
real    0m5.519s
user    0m0.376s
sys     0m1.367s
</pre>

If you want to unzip them you can run this command
```bash
time parallel -j10 "gunzip {}" ::: *.tab.gz
```

## <button class="btn example mr"></button>listing all the files using `ls`

**Learning objectives**
  * `parallel` has a time overhead when it starts and as it runs

The `ls` is a simple command and shouldn't take very long to run in parallel.

```bash
cd ../..
time parallel -j10 "ls {}" ::: *.tab > /dev/null
```
*Interestingly, this is about the same amount of time it takes to run a simple* `ls` *command on each file using* `parallel`.
<pre class="output">
real    0m5.955s
user    0m6.713s
sys     0m10.994s
</pre>

Above, I am redirecting the output to the null device, so it doesn't print the output to standard output *(i.e., terminal console)*.

However, if we add the `-X` parameter it finishes in a fraction of the time.

```bash
time parallel -X -j10 "ls {}" ::: *.tab > /dev/null
```
<pre class="output">
real    0m0.333s
user    0m0.210s
sys     0m0.214s
</pre>

This is because there is some overhead from the parallel command starting a new shell and opening files for buffering.  The `-X` will tell parallel not to do this as it is all on the same node.  

As you can compare below, the `parallel` is actually slower than just typing `ls *.gz`.
```bash
time ls *.gz > /dev/null
```
<pre class="output">
real    0m0.277s
user    0m0.017s
sys     0m0.079s
</pre>

<div class="note" markdown="1">
So, `parallel` is great when you have lots of data and lots of files in the data or if a task is taking a really long time using a single processor but overhead of the command will make it slower if the dataset is too small.
</div>

Unfortunately, repeating the gzipping example from above using this parameter does not give as significant of an improvement as the `ls` example.

```bash
time parallel -X -j10 "gzip {}" ::: *.tab
```
<pre class="output">
real    0m5.438s
user    0m0.492s
sys     0m1.398s
</pre>

Some of the difference may be due to IO speed writing to a JBOD on your HPC.  You may get improved results if you are running this example on local scratch space on a node or are testing this on your local laptop.



## <button class="btn example mr"></button>feeding more input files with `parallel`

**Learning objectives**
* *How to use parallel with programs that take more than one input?*
* `:::+`

A good example of this in bioinformatics is aligning paired-end reads to a genome. Every sample has a forward (Left) and reverse (right) read pair.

For this example, we will be aligning several small sample files to a genome using `bowtie2`. <br>
*Let's download a toy example from Arabidopsis.* <br>
<em class="footnote">I grabbed the first 250 sequences from four Arabidposis samples taken from NCBI's SRA database.</em>

**Download the example raw data**
<!-- wget www.bioinformaticsworkbook.org/Appendix/GNUparallel/fastqfiles.tar.gz -->
```bash
mkdir bowtie
cd bowtie
wget https://datascience.101workbook.org/_collection-base/06-hpc/assets/data/fastqfiles.tar.gz
tar -zxvf fastqfiles.tar.gz
```

The reads are in a directory named `fastqfiles`:

**Left Reads:**
<pre class="output">
fastqfiles/SRR4420295_1.fastq.gz
fastqfiles/SRR4420293_1.fastq.gz
fastqfiles/SRR4420294_1.fastq.gz
</pre>

**Right reads**
<pre class="output">
fastqfiles/SRR4420294_2.fastq.gz
fastqfiles/SRR4420293_2.fastq.gz
fastqfiles/SRR4420295_2.fastq.gz
</pre>

**Download Arabidopsis genome:**

```bash
wget https://www.arabidopsis.org/download_files/Genes/TAIR10_genome_release/TAIR10_chromosome_files/TAIR10_chr_all.fas.gz
gunzip TAIR10_chr_all.fas.gz
```

**Create the bowtie2 alignment database for the Arabidopsis genome**
```bash
module load bowtie2

# this next command will build a bowtie2 database named tair
bowtie2-build  TAIR10_chr_all.fas tair tair

mkdir bwt_index
mv tair.*bt2 bwt_index
```
*The genome index files* `*.bt2` *are located in a directory called* `bwt_index`.

We decide to write the output SAM and log files to `sam_out`:
```bash
mkdir sam_out
```

We can design a bash script with the `bowtie2` command for each pair separately. *Obviously if dealing with hundreds of files this could become cumbersome!*

```bash
module load bowtie2
bowtie2 --threads 4 -x bwt_index/tair -k1 -q -1 fastqfiles/SRR4420293_1.fastq.gz -2 fastqfiles/SRR4420293_2.fastq.gz -S sam_out/third_R1.sam >& sam_out/third.log
bowtie2 --threads 4 -x bwt_index/tair -k1 -q -1 fastqfiles/SRR4420294_1.fastq.gz -2 fastqfiles/SRR4420294_2.fastq.gz -S sam_out/fourth_R1.sam >& sam_out/fourth.log
bowtie2 --threads 4 -x bwt_index/tair -k1 -q -1 fastqfiles/SRR4420295_1.fastq.gz -2 fastqfiles/SRR4420295_2.fastq.gz -S sam_out/fifth_R1.sam >& sam_out/fifth.log
```

GNU parallel let's us automate this task by using a combination of `substitution` and `separators` notably `:::` and `:::+`. We can also make optimum use of the available threads.

```bash
module load bowtie2
module load parallel

mkdir sam_parallel
time parallel -j2 "bowtie2 --threads 4 -x bwt_index/tair -k1 -q -1 {1} -2 {2} -S sam_parallel/{1/.}.sam >& sam_parallel/{1/.}.log" ::: fastqfiles/*_1.fastq.gz :::+ fastqfiles/*_2.fastq.gz
```

You may have also noticed some new syntax where we are using `{1}`, `{2}`, `{1/.}` and `{2/.}`.  
* The `{1}` will give us the first file and `{2}` the second from the list taking two at a time.  
* The `{1/.}` and `{2/.}` will take the prefix of the file name before the ".".


## <button class="btn example mr"></button>splitting a large task to utilize all CPUs

Let's consider a large file named `test.fa`. Our objective is to count the number of lines in this FASTA file.

You can download the example Trinity file using the following commands:
<!-- wget www.bioinformaticsworkbook.org/Appendix/GNUparallel/test.fa -->
```bash
mkdir trinity
cd trinity
wget  https://datascience.101workbook.org/_collection-base/06-hpc/assets/data/test.fa
```

The file should look something like this:
<pre class="output">
<b class="prompt-3"></b>head test.fa
>TRINITY_DN22368_c0_g1_i1 len=236 path=[427:0-235] [-1, 427, -2]
ATTGGTTTTCTACGGAGAGAGAGAAAATGGAGACGGCGAGTGTCTAAAGCTAGAGCTTGT
GTTGGAGAAGGAAACGGAGATTTGCGTAGTAGTGGAAGCTTTAGGTATTTGTTGTGGTTA
CTCACGGCGGCGATATTTGACGGCGGGAGGAGGAAAAGAGAGAGGAAAGAACAGAGGAAG
AAGATGAGAGGAAACATTGAGAGAGAGTGAGAAGGGTTTTGTGATTTTTGTGTCTG
>TRINITY_DN22345_c0_g1_i1 len=615 path=[593:0-614] [-1, 593, -2]
GCCGGATTCAGATACGCAAGGAGAATCTGAGCAGGTCGAATGTTGATGGTATGCTTTCAT
CGGCACTTCCAGGTGGTCAGGAGAAGATCCCCATACGACTGCACTCTCTTTGCTATATGA
TGAAGCAGGAACTGTCACAAGAGGCAGAGAAGTACTGGACTCTGCCATTTGCTCATTTGT
AGCATGATTTCCTTCCCCATTCTCAGTTCCGGGAGTGCAGTGAAAGCAACAATCATTATT
</pre>

We have reserved a node and are making use of 10 cpus on Ceres and we decide to run the `wc -l` command to find the number of lines. We can also use the unix command `time` to see how much time it takes to run the command.

```bash
time wc -l test.fa
```
<pre class="output">
1082567 test.fa

real	0m1.237s
user	0m0.025s
sys	0m0.057s
</pre>

Now using `parallel` we can take advantage of the 10 cpus and spread this job over all the cpus:

```bash
parallel -a test.fa --pipepart --block -1  time wc -l
```
**Note:**
* `-a` option means input is read from a file            
* `--pipepart`: pipe parts of a file****

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>see the expected output</i></b></summary>
<pre class="output mb-0">
111748
real	0m0.021s
user	0m0.005s
sys	0m0.002s

104450
real	0m0.023s
user	0m0.002s
sys	0m0.005s

111050
real	0m0.026s
user	0m0.002s
sys	0m0.005s

108797
real	0m0.023s
user	0m0.005s
sys	0m0.002s

108114
real	0m0.021s
user	0m0.005s
sys	0m0.002s

109001
real	0m0.021s
user	0m0.003s
sys	0m0.003s

106528
real	0m0.022s
user	0m0.002s
sys	0m0.004s

109069
real	0m0.019s
user	0m0.002s
sys	0m0.005s

104735
real	0m0.020s
user	0m0.003s
sys	0m0.003s

109075
real	0m0.021s
user	0m0.003s
sys	0m0.003s
</pre></details>

Notice that less time is required when each block is counted by each CPU. *In this case, the longest time is* `0.026 seconds`, *compared to* `1.237 seconds` *when parallel processing is not utilized.*


### *other useful parameters*

The `--joblog` option of the `parallel` command creates a log file that records information about the jobs executed by `parallel`. This log file typically includes details such as the command executed, the start and end times of each job, and any errors encountered during execution. It provides a record of the parallel processing tasks for later analysis or reference.


## <button class="btn example mr"></button>executing Blast in parallel

See <a href="https://bioinformaticsworkbook.org/dataAnalysis/blast/running-blast-jobs-in-parallel.html" target="_blank">Running NCBI-BLAST jobs in parallel</a>.
