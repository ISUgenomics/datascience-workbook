---
title: "SLURM commands"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
type: "cheatsheet"
level: 3
categories: []
tags: []
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [5. Introduction to Job Scheduling](../00-introduction-to-job-scheduling.md) / [5.1 SLURM: Basics of Workload Manager](01-slurm-basics.md) / **SLURM Commands CheatSheet**

---


# Introduction

**Quick reference sheet for SLURM resource manager**

### Job scheduling commands
<table>
<thead><tr><th>Commands</th><th>Function</th><th>Basic Usage</th><th>Example</th></tr></thead><tbody>
 <tr><td><blockcode>sbatch</blockcode></td><td>submit a slurm job</td><td>sbatch [script]</td><td>$ sbatch job.sub</td></tr>
 <tr><td><blockcode>scancel</blockcode></td><td>delete slurm batch job</td><td>scancel [job_id]</td><td>$ scancel 123456</td></tr>
 <tr><td><blockcode>scontrol hold</blockcode></td><td>hold slurm batch jobs</td><td>scontrol hold [job_id]</td><td>$ scontrol hold 123456</td></tr>
 <tr><td><blockcode>scontrol release </blockcode></td><td>release hold on slurm batch jobs</td><td>scontrol release  [job_id]</td><td>$ scontrol release  123456</td></tr>
</tbody></table>

### Job management commands

<table>
<thead><tr><th>Job Status</th><th>Commands</th></tr></thead><tbody>
 <tr><td><blockcode>sinfo -a</blockcode></td><td>list all queues</td></tr>
 <tr><td><blockcode>squeue </blockcode></td><td>list all jobs</td></tr>
 <tr><td><blockcode>squeue -u userid</blockcode></td><td>list jobs for userid</td></tr>
 <tr><td><blockcode>squeue -t R</blockcode></td><td>list running jobs</td></tr>
 <tr><td><blockcode>smap</blockcode></td><td> show jobs, partitions and nodes in a graphical network topology</td></tr>
</tbody></table>

### Job script basics

A typical job script will look like this:

```
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

your_commands_goes_here
```

Lines starting with `#SBATCH` are for `SLURM` resource manager to request resources for HPC. Some important options are as follows:


<table >
<thead><tr><th>Option</th><th>Examples</th><th>Description</th></tr></thead><tbody>
 <tr><td><blockcode>--nodes</blockcode></td><td><blockcode>#SBATCH --nodes=1</blockcode></td><td>Number of nodes</td></tr>
 <tr><td><blockcode>--cpus-per-task</blockcode></td><td><blockcode>#SBATCH --cpus-per-task=16</blockcode></td><td>Number of CPUs per node</td></tr>
 <tr><td><blockcode>--time</blockcode></td><td><blockcode>#SBATCH --time=HH:MM:SS</blockcode></td><td>Total time requested for your job</td></tr>
 <tr><td><blockcode>--output</blockcode></td><td><blockcode>#SBATCH -output filename</blockcode></td><td>STDOUT to a file</td></tr>
 <tr><td><blockcode>--error</blockcode></td><td><blockcode>#SBATCH --error filename</blockcode></td><td>STDERR to a file</td></tr>
 <tr><td><blockcode>--mail-user </blockcode></td><td><blockcode>#SBATCH --mail-user user@domain.edu</blockcode></td><td>Email address to send notifications</td></tr>
</tbody></table>

### Interactive session

To start a interactive session execute the following:

```
#this command will give 1 Node for a time of 4 hours

srun -N 1 -t 4:00:00 --pty /bin/bash
```
### Getting information on past jobs

You can use slurm database to see how much memory your previous jobs used, e.g. the following command will report requested memory and used residential and virtual memory for job <JOBID>

```
sacct -j <JOBID> --format JobID,Partition,Submit,Start,End,NodeList%40,ReqMem,MaxRSS,MaxRSSNode,MaxRSSTask,MaxVMSize,ExitCode

```

### Aliases that provide useful information parsed from the SLURM commands

Place these alias' into your .bashrc
```
alias si="sinfo -o \"%20P %5D %14F %8z %10m %10d %11l %16f %N\""
alias sq="squeue -o \"%8i %12j %4t %10u %20q %20a %10g %20P %10Q %5D %11l %11L %R\""
```
More information about Slurm can be found here:

- [Slurm Cheat Sheat](https://www.chpc.utah.edu/presentations/SlurmCheatsheet.pdf)
- [Slurm Basics](http://researchit.las.iastate.edu/slurm-basics)
- [Slurm cluster commands](https://sites.google.com/a/case.edu/hpc-upgraded-cluster/slurm-cluster-commands)







___
# Further Reading
* [5.2 PBS: Portable Batch System](../02-PBS/01-pbs-basics)

* [6. Introduction to GNU Parallel](../../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](04-slurm-2-tutorial-submitting-dependency-jobs){: .btn  .btn--primary}
[Next](../02-PBS/01-pbs-basics){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
