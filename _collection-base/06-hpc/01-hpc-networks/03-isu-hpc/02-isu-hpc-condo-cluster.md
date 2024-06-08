---
title: "ISU HPC: Condo computing cluster"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 613.2
level: 3
categories: ["hpc", "computing-tools", "documentation", "remote-access", "data-transfer", "job-scheduling"]
tags: ["HPC-system", "ISU-HPC", "super-computer", "computer-power", "hpc-cluster", "condo-cluster", "HPC-tasks", "scientific-computing", "access-point", "authentication-MFA", "CLI-login", "job-script"]
attributes: ["user-guide", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="warning" markdown="1">
**The condo cluster is out of support since July 1, 2021.** It is now under Free Tier model and available to all ISU researchers for free. A detailed guide is available from ISU: <a href="https://www.hpc.iastate.edu/guides/condo-2017" target="_blank">ISU Condo Cluster ⤴</a>
</div>

# Getting Started

## Access and Login

<div class="required" markdown="1">
**Condo login node:** @condo2017.its.iastate.edu <base class="mt">
If logging in the first time, check the <a class="t-links" href="613.1" section="#logging-in">Logging in</a> section of intro to HPC page.
</div>

Using Condo cluster has same requirements as the [Nova Computing Cluster ⤴](03-isu-hpc-nova-cluster) except Condo is free. Faculty can fill out the Cluster Access Request on <a href="https://www.hpc.iastate.edu/" target="_blank">HPC webpage ⤴</a> to request access for their group. Use Google Authenticator on <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-android" target="_blank">Android ⤴</a>, <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-iphone-ipad-ipod" target="_blank">iPhone ⤴</a> or <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-windows" target="_blank">Windows ⤴</a> devices for authentication.


To log in to Condo, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) to ssh with the login hostname:

```bash
 ssh <ISU NetID>@condo2017.its.iastate.edu
```

## Data Transfer and Jobs

<div class="required" markdown="1">
**Condo transfer node:** @condodtn.its.iastate.edu
</div>

<div class="protip" markdown="1">
Use the login hostname: @**condo2017**.its.iastate.edu to log in to Condo and submit jobs, <br>
but use the data transfer node for data transfers: @**condodtn**.its.iastate.edu
</div>


###  <button class="btn example">Data transfer example</button>

```bash
# Login:
ssh <ISU NetID>@condodtn.its.iastate.edu

# Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

<div class="more" markdown="1">
* Check the <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters/getting-data-to-and-from-the-cluster" target="_blank">Data Transfer guide ⤴</a> for more information about data transfers.
* SLURM job <a href="https://www.hpc.iastate.edu/guides/condo-2017/slurm-job-script-generator-for-condo" target="_blank">script generator for Condo ⤴</a>.
* Check out the <a class="t-links" href="651.1"></a> to learn about running your job on Condo or any other HPC Cluster.
</div>


###  <button class="btn example">Example job script</button>

```bash
#!/bin/bash

#SBATCH --time=01:00:00   # walltime limit (HH:MM:SS)
#SBATCH --nodes=1   # number of nodes
#SBATCH --ntasks-per-node=16   # 16 processor core(s) per node
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
* <a href="https://www.hpc.iastate.edu/guides/condo-2017/software" target="_blank">System and Application Software ⤴</a> guide for Condo from ISU.
* <a class="t-links" href="641"></a> in this workbook.
</div>
