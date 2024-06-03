---
title: "SLURM: basics of workload manager"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 651.1
level: 2
categories: ["HPC, computing", "job-scheduling", "command-line", "computing-tools"]
tags: ["slurm", "workload-manager", "job-script", "job-submission", "job-management", "alias", ".bashrc", "interactive", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# SLURM: Simple Linux Utility for Resource Management

The SLURM workload manager uses a **job submission file** that includes `SLURM directives` to set up the execution environment *(like memory, CPU, and time limits)* followed by the actual commands. This file is submitted to a **job queue**, where SLURM schedules and allocates the job to an available node, optimizing resource use across the cluster.

A **job submission file** or **job script** is a simple text file with all the requirements for running your job:
  * Memory requirement
  * Desired number of processors
  * Length of time you want to run the job
  * Type of queue you want to use (optional)
  * Where to write output and error files
  * Name foryour job while running on HPC


## Job Script Basics

A typical job script will look like this:

```bash
#!/bin/bash
#SBATCH --nodes=1
#SBATCH --cpus-per-task=8
#SBATCH --time=02:00:00
#SBATCH --mem=128G
#SBATCH --mail-user=netid@gmail.com
#SBATCH --mail-type=begin
#SBATCH --mail-type=end
#SBATCH --error=JobName.%J.err
#SBATCH --output=JobName.%J.out

cd $SLURM_SUBMIT_DIR

module load modulename

# your_commands_goes_here
```

Lines starting with `#SBATCH` are for `SLURM` resource manager to request resources for HPC. Some important options are as follows:

| Option            | Examples                              | Description      |
|-------------------|---------------------------------------|------------------|
| `--nodes`         | `#SBATCH --nodes=1`                   | Number of nodes  |
| `--cpus-per-task` | `#SBATCH --cpus-per-task=16`          | Number of CPUs per node             |
| `--time`          | `#SBATCH --time=HH:MM:SS`             | Total time requested for your job   |
| `--output`        | `#SBATCH -output filename`            | STDOUT to a file |
| `--error`         | `#SBATCH --error filename`            | STDERR to a file |
| `--mail-user`     | `#SBATCH --mail-user user@domain.edu` | Email address to send notifications |


### Job Management Commands

| Job Status         | Commands             |
|--------------------|----------------------|
| `sinfo -a`         | list all queues      |
| `squeue`           | list all jobs        |
| `squeue -u userid` | list jobs for userid |
| `squeue -t R`      | list running jobs    |


### <button class="btn example">Try SLURM commands</button>

Let's go ahead and give these job management commands a try. Use them one-by-one:

<div class="example font-1 before" data-before="SINFO" markdown="1">
```bash
sinfo -a
```
*This command displays detailed information about all nodes and partitions in the SLURM cluster, including their availability, allocated and idle states.*
<pre class="output mb-0 before" data-before="EXPECTED OUTPUT">
PARTITION        AVAIL  TIMELIMIT  NODES  STATE NODELIST
priority-gpu        up 14-00:00:0      1    mix ceres18-gpu-0
priority-mem768     up 14-00:00:0      3   idle ceres18-mem768-0,ceres19-mem768-[0-1]
priority-mem        up 14-00:00:0      1   drng ceres20-mem-10
priority            up 14-00:00:0      1   comp ceres18-compute-1
<b class="prompt-2"></b>
</pre></div>

<div class="example font-1 before" data-before="SQUEUE" markdown="1">
```bash
squeue
```
*This command lists the current job queue, showing information about all jobs that are submitted, including their job ID, status, and allocated resources.*
<pre class="output before" data-before="EXPECTED OUTPUT">
   JOBID PARTITION     NAME     USER ST        TIME  NODES NODELIST(REASON)
12357784     short    blast alex.bad  R  1-17:46:11      1 ceres19-compute-37
12357783     short    blast alex.bad  R  1-17:53:13      1 ceres19-compute-32
12377208   gpu-low Guppy.sh brett.sh  R       25:38      1 ceres18-gpu-0
12178975 scavenger     bash pat.reev  R 14-04:23:31      1 ceres20-compute-23
12377270 brief-low snakejob anser.ma PD        0:00      1 (QOSMaxMemoryPerUser)
12182853      long 3d-etoac elliot.r PD        0:00      1 (Priority)
</pre>

```bash
squeue -t R
```
*The command displays information about jobs that are currently running on the system <br>(only jobs with a status of "Running").*
<pre class="output before" data-before="EXPECTED OUTPUT">
   JOBID PARTITION     NAME     USER ST        TIME  NODES NODELIST(REASON)
12357784     short    blast alex.bad  R  1-17:46:11      1 ceres19-compute-37
12357783     short    blast alex.bad  R  1-17:53:13      1 ceres19-compute-32
12377208   gpu-low Guppy.sh brett.sh  R       25:38      1 ceres18-gpu-0
12178975 scavenger     bash pat.reev  R 14-04:23:31      1 ceres20-compute-23
</pre></div>

Now, pick a name you saw when you typed squeue and specify all the jobs by that person with the following option:
```bash
squeue -u first.lastname          # e.g. squeue -u alex.badacz
```
<pre class="output before" data-before="EXPECTED OUTPUT">
   JOBID PARTITION     NAME     USER ST        TIME  NODES NODELIST(REASON)
12357784     short    blast alex.bad  R  1-17:46:11      1 ceres19-compute-37
12357783     short    blast alex.bad  R  1-17:53:13      1 ceres19-compute-32
</pre>


There can be a lot of information using those two commands (`sinfo`, `squeue` *used with different params*), depending on the size of the cluster, the number of active users, and the complexity of scheduled tasks.

### *Usful aliases*

I have created some useful alias that change the output to something more informative.

```bash
alias sq='squeue -o "%8i %12j %4t %10u %20q %20a %10g %20P %10Q %5D %11l %11L %R"'
alias si='sinfo -o "%20P %5D %14F %8z %10m %10d %11l %16f %N"'
```

where `(A/I/O/T)` = `available/idle/other/total`

<div class="protip" markdown="1">
You can place those alias' into your `~/.bashrc` file and it will automatically load every time you log in.
</div>

### <button class="btn exercise mr"></button>Add alias to .bashrc

<div class="exercise" markdown="1">
Add these two alias above to your `~/.bashrc` file.

1. **Edit .bashrc:**
To add aliases to your `.bashrc` file and use the `nano` editor. Open the terminal and type the command provided below:
```bash
nano ~/.bashrc
```
2. **Add Aliases:**
Scroll to the end of the file and add the following lines:
```bash
alias sq='squeue -o "%8i %12j %4t %10u %20q %20a %10g %20P %10Q %5D %11l %11L %R"'
alias si='sinfo -o "%20P %5D %14F %8z %10m %10d %11l %16f %N"'
```
3. **Save and Exit:**
Press `Ctrl + O` to save the changes, then `Ctrl + X` to exit nano.
4. **Activate Changes:**
Type `source ~/.bashrc` and press <button class="btn">return</button> to reload the `.bashrc` file and activate the new aliases.

Now, you can use the commands `sq` for a detailed `squeue` display and `si` for a detailed `sinfo` display in your terminal sessions.
</div>

### Job scheduling commands

| Commands  | Function               | Basic Usage        | Example            |
|-----------|------------------------|--------------------|--------------------|
| `sbatch`  | submit a slurm job     | `sbatch [script]`  | `$ sbatch job.sub` |
| `scancel` | delete slurm batch job | `scancel [job_id]` | `$ scancel 123456` |



### Interactive Session

To start a interactive session execute the following:

```bash
salloc -N 1 -n 1 -p brief-low -t 00:01:00
```
*This command will give 1 Node with 1 cpu in the brief-low queue for a time of 00 hours: 01 minutes: 00 seconds.*

You can exit out of an interactive node by typing `exit` and hitting <button class="btn">return</button>
```bash
exit
```

<div class="protip" markdown="1">
Interactive sessions are very helpful when you need more computing power than your laptop or desktop to wrangle the data or to test new software prior to submitting a full batch script.
</div>
