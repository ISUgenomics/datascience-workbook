---
title: "Creating SLURM job submission scripts"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 651.4
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Creating SLURM job submission scripts

For a quick list of frequently used SLURM commands/options, take a look at this [cheat sheet](https://gif.biotech.iastate.edu/slurm-slurm-job-management-cheat-sheet "SLURM job management cheat sheet"). This guide will show you how to generate SLURM job submission scripts for your commands, easily and efficiently!

## 1. Generate commands

<div class="note" markdown="1">
Job submission scripts are configured to run frequently used programs with settings that are tailored to fit user needs. The idea is to make it simple to run frequently used programs without having to read the entire manual.
</div>

Some of the common bioinformatics job scripts are `runBWA.sh`, `runGSNAP.sh`, `runBLASTn`, etc. Here we will take <a href="https://github.com/ISUgenomics/common_analyses/blob/master/runBLASTn.sh" target="_blank">runBLASTn.sh</a> as an example, but you can use this for almost any of the other run scripts as well as your own commands.

*First, lets generate the commands!* <br>
Let's assiume we have 5 fasta files: `file0.fsa`, `file1.fsa`, `file2.fsa`, `file3.fsa` and `file4.fsa` (each with 1000 sequences) for which we need to run BLAST against `nr` database.

For the purpose of this exercise, simply create 5 empty files like this:
```
touch file0.fsa file1.fsa file2.fsa file3.fsa file4.fsa
```
*You can use the* `ls` *command to confirm the files exist now.*
<pre class="output">
<b class="prompt-3"></b>ls
file0.fsa       file1.fsa       file2.fsa       file3.fsa       file4.fsa
</pre>


Then we can generate the BLAST execution commands as follows:
```bash
for file in file?.fsa; do
    echo ./runBLASTn.sh $file;
done > blastn.cmds
```
*The* `blastn.cmds` *now contains 5 lines, each set to run* `blastn` *on each of the file.*

<pre class="output">
<b class="prompt-3"></b>less blastn.cmds

./runBLASTn.sh file0.fsa
./runBLASTn.sh file1.fsa
./runBLASTn.sh file2.fsa
./runBLASTn.sh file3.fsa
./runBLASTn.sh file4.fsa
</pre>


## 2. Create submission files

To create slurm script for each one of the lines in the `blastn.cmds` file, we run the (downloaded) <a href="https://github.com/ISUgenomics/common_scripts/blob/master/makeSLURMs.py" target="_blank">makeSLURMs.sh</a> script as follows:
```bash
makeSLURMs.py 1 blastn.cmds
```
*Here,* `1` *is to tell that put one job per submission file, and* `blastn.cmds` *is the commands file, generated in the previous step.*

Once the `makeSLURMs.py` command is executed, you should see 5 `.sub` files, each identified by numbers corresponding to input files.

The content should look like this:
```bash
#!/bin/bash
#SBATCH -N 1
#SBATCH -n 36
#SBATCH -t 96:00:00
#SBATCH -J blastn_0
#SBATCH -o blastn_0.o%j
#SBATCH -e blastn_0.e%j
#SBATCH --mail-user=arnstrm@gmail.com
#SBATCH --mail-type=begin
#SBATCH --mail-type=end

cd $SLURM_SUBMIT_DIR
ulimit -s unlimited
module purge
module use /opt/rit/spack-modules/lmod/linux-rhel7-x86_64/Core
module use /opt/rit/spack-modules/lmod/linux-rhel7-x86_64/gcc/7.3.0
#module use /work/GIF/software/modules

./runBLASTn.sh file1.fsa

scontrol show job $SLURM_JOB_ID
```


## 3. Submit the jobs

The next step is to submit the jobs to the cluster. It is seamless when using the for loop:
```bash
for f in blastn*.slurm; do
    sbatch $f;
done
```
*All commands will be submitted to the queue and will start running as per the availability of nodes.*
