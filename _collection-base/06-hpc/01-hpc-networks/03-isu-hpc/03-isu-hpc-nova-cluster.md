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
categories: ["hpc", "computing-tools", "documentation", "remote-access", "data-transfer", "job-scheduling"]
tags: ["HPC-system", "ISU-HPC", "super-computer", "computer-power", "hpc-cluster", "nova-cluster", "HPC-tasks", "scientific-computing", "access-point", "authentication-MFA", "CLI-login", "job-script"]
attributes: ["user-guide", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="note" markdown="1">
Nodes and storage can be purchased on the Nova cluster for use <u>by the researchers at ISU</u>. <br>For details about the Nova cluster, check out the <a href="https://www.hpc.iastate.edu/guides/nova" target="_blank">ISU HPC webpage</a>.
</div>

# Getting Started

## Access and Login

<div class="required" markdown="1">
**Nova login node:** @nova.its.iastate.edu <base class="mt">
Before logging in the first time, check the Loging in section of the <a class="t-links" href="613.1">Intro to ISU HPC</a> page for information about getting started. <base class="mb">
Install Google Authenticator on <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-android" target="_blank">Android ⤴</a>, <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-iphone-ipad-ipod" target="_blank">iPhone ⤴</a> or <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login/google-auth-on-windows" target="_blank">Windows ⤴</a> devices for authentication.
</div>

Once connected to ISU network, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) and input following command to log in to Nova:

```bash
 ssh <ISU NetID>@nova.its.iastate.edu
```

## Data Transfer and Jobs

<div class="required" markdown="1">
**Nova transfer node:** @novadtn.its.iastate.edu
</div>
<div class="protip" markdown="1">
Use the login hostname @**nova**.its.iastate.edu to log in to Nova and submit jobs, <br>
but use the data transfer node for data transfers @**novadtn**.its.iastate.edu
</div>

### <button class="btn example">Data transfer example</button>

```bash
# Login:
ssh Your-ISU-NetID@novadtn.its.iastate.edu

# Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

Once logged in you can start using Nova cluster and submit jobs using <a class="t-links" href="651.1">SLURM workload manager</a>.

<div class="note" markdown="1">
SLURM is used to allocate memory and processors to an input job on Nova.
</div>

If not familiar with the SLURM syntax, use this <a href="https://research.it.iastate.edu/slurm-script-generator" target="_blank">Script generator for Nova ⤴</a>, input your requirements and it will generate a text script. You can then copy this script in a text file, add your commands at the bottom and then submit the job.

<div class="more" markdown="1">
Check out the <a class="t-links" href="651.2">Introduction to SLURM</a> to learn about running your job on Nova or any other HPC Cluster.
</div>


### <button class="btn example">Example job script</button>

```bash
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

```bash
sbatch filename
```

Check your queued jobs:

```bash
squeue -u your_netID
```


# Available Software

<div class="more" markdown="1">
Check out the following:
* <a href="https://research.it.iastate.edu/getting-started-with-modules" target="_blank">Getting Started with Software Modules ⤴</a> guide for Nova from ISU
* <a class="t-links" href="641"></a> in this workbook
</div>
