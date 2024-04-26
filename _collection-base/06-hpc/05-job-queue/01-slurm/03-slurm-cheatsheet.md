---
title: "SLURM commands"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "cheatsheet"
order: 651.3
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

**Quick reference sheet for SLURM resource manager**

### Job scheduling commands

| Commands           | Function                         | Basic Usage                  | Example                      |
|--------------------|----------------------------------|------------------------------|------------------------------|
| `sbatch`           | submit a slurm job               | `sbatch [script]`            | `$ sbatch job.sub`          |
| `scancel`          | delete slurm batch job           | `scancel [job_id]`           | `$ scancel 123456`           |
| `scontrol hold `   | hold slurm batch jobs            | `scontrol hold [job_id]`     | `$ scontrol hold 123456`     |
| `scontrol release` | release hold on slurm batch jobs | `scontrol release  [job_id]` | `$ scontrol release  123456` |


### Job management commands

| Job Status         | Commands                  |
|--------------------|---------------------------|
| `sinfo -a`         | list all queues           |
| `squeue`           | list all jobs             |
| `squeue -u userid` | list jobs for userid      |
| `squeue -t R`      | list running jobs         |
| `smap`             | show jobs, partitions and nodes in a graphical network topology |


## Job script basics

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

module load <modulename>

# your commands goes below
```

<div class="note" markdown="1">
Lines starting with `#SBATCH` are for `SLURM` resource manager to request resources for HPC. Some important options are as follows:
<div class="mb- bc-white" markdown="1">

| Option            | Examples                               | Description                         |
|-------------------|----------------------------------------|-------------------------------------|
| `--nodes`         | `#SBATCH --nodes=1`                    | Number of nodes                     |
| `--cpus-per-task` | `#SBATCH --cpus-per-task=16`           | Number of CPUs per node             |
| `--time`          | `#SBATCH --time=HH:MM:SS`              | Total time requested for your job   |
| `--output`        | `#SBATCH -output filename`             | STDOUT to a file                    |
| `--error`         | `#SBATCH --error filename`             | STDERR to a file                    |
| `--mail-user`     | `#SBATCH --mail-user user@domain.edu<` | Email address to send notifications |

</div></div>


## Interactive session

To start a interactive session execute the following:
```bash
srun -N 1 -t 4:00:00 --pty /bin/bash
```
*This command will give 1 Node for a time of 4 hours.*


## Getting info on past jobs

You can use slurm database to see how much memory your previous jobs used"
```bash
sacct -j <JOBID> --format JobID,Partition,Submit,Start,End,NodeList%40,ReqMem,MaxRSS,MaxRSSNode,MaxRSSTask,MaxVMSize,ExitCode
```
*The following command will report requested memory and used residential and virtual memory for job* `JOBID`.


## Useful aliases

Here you have a few aliases that provide useful information parsed from the SLURM commands.

Place these aliases into your `.bashrc`. *Follow the [instructions](#add-alias-to-bashrc) in this <a class="t-links" href="651.1">practical tutorial</a>.*
```bash
alias si="sinfo -o \"%20P %5D %14F %8z %10m %10d %11l %16f %N\""
alias sq="squeue -o \"%8i %12j %4t %10u %20q %20a %10g %20P %10Q %5D %11l %11L %R\""
```

### <button class="btn more mr"></button> Resources
<div class="more before" data-before="" markdown="1">
More information about Slurm can be found in external resources:
- [Slurm Cheat Sheat](https://www.chpc.utah.edu/presentations/SlurmCheatsheet.pdf)
- [Slurm Basics](http://researchit.las.iastate.edu/slurm-basics)
- [Slurm cluster commands](https://sites.google.com/a/case.edu/hpc-upgraded-cluster/slurm-cluster-commands)
</div>
