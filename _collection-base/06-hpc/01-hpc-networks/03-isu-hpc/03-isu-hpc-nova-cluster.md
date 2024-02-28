---
title: "ISU HPC: Nova computing cluster"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 613.3
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [1. Introduction to HPC infrastructure](../01-introduction-to-hpc-infrastructure.md) / [1.3 ISU HPC](01-isu-hpc-intro.md) / **1.3.2 Nova Computing Cluster**

---


# Introduction

Nodes and storage can be purchased on the Nova cluster for use by the researchers at ISU. For details about the Nova cluster, check out the <a href="https://www.hpc.iastate.edu/guides/nova" target="_blank">ISU HPC webpage</a>.
<br>
<br>

# Getting Started
## Access and Login
Before logging in the first time, check the Loging in section of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro#logging-in" target="_blank">Intro to ISU HPC ⤴</a> page for information about getting started. Install Google Authenticator on <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-android" target="_blank">Android ⤴</a>, <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-iphone-ipad-ipod" target="_blank">iPhone ⤴</a> or <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-windows" target="_blank">Windows ⤴</a> devices for authentication.

Once connected to ISU network, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) and input following command to log in to Nova:

```
 ssh <ISU NetID>@nova.its.iastate.edu
```

## Data Transfer and Jobs
Use the login hostname (@nova.its.iastate.edu) to log in to Nova and submit jobs, but use the data transfer node for data transfers (@novadtn.its.iastate.edu).

```
# Data transfer example
Login:
ssh Your-ISU-NetID@novadtn.its.iastate.edu

Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

Once logged in you can start using Nova cluster and submit jobs using <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-introduction" target="_blank">SLURM Workload Manager ⤴</a>. SLURM is used to allocate memory and processors to an input job on Nova. If not familiar with the script, use this <a href="https://www.hpc.iastate.edu/guides/nova/slurm-script-generator-for-nova" target="_blank">Script generator for Nova ⤴</a>, input your requirements and it will generate a text script. You can then copy this script in a text file, add your commands at the bottom and then submit the job. Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics ⤴</a> to learn about running your job on Nova or any other HPC Cluster.
<br>


## Example job script

```
#!/bin/bash

#SBATCH --time=01:00:00   # walltime limit (HH:MM:SS)
#SBATCH --nodes=1   # number of nodes
#SBATCH --ntasks-per-node=36   # 36 processor core(s) per node
#SBATCH --mail-user=netid@iastate.edu
#SBATCH --mail-type=begin
#SBATCH --mail-type=end

# LOAD MODULES, INSERT CODE, AND RUN YOUR PROGRAMS HERE
module load modulename
your code/commands
```

Copy/paste the above job script into a text file, add your modules and commands, and submit with the following command:

```
sbatch filename
```

Check your queued jobs:

```
squeue -u your_netID
```

<br>

# Available Software
Check out the following:
* <a href="https://www.hpc.iastate.edu/guides/nova/software" target="_blank">System and Application Software ⤴</a> guide for Nova from ISU
* <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC" target="_blank">Software Available on HPC ⤴</a> in this workbook
<br>
<br>

___
# Further Reading
* [1.3.3 LSS Storage](04-isu-hpc-lss-storage)

* [2. Remote Access to HPC Resources](../../02-FILE-ACCESS/01-remote-data-access.md)
* [3. Setting up Your Home Directory for Data Analysis](../../03-HOME-DIRECTORY/00-setting-up-home-directory.md)
* [4. Software Available on HPC](../../04-SOFTWARE/01-software-available-on-HPC.md)
* [5. Introduction to Job Scheduling](../../05-JOB-QUEUE/00-introduction-to-job-scheduling.md)
* [6. Introduction to GNU Parallel](../../06-PARALLEL/01-introduction-to-gnu-parallel.md)
* [7. Introduction to Containers](../../07-CONTAINERS/00-introduction-to-containers.md)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](02-isu-hpc-condo-cluster){: .btn  .btn--primary}
[Next](04-isu-hpc-lss-storage){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
