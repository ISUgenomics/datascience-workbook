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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

The condo cluster is out of support since July 1, 2021. It is now under Free Tier model and available to all ISU researchers for free. A detailed guide is available from ISU: <a href="https://www.hpc.iastate.edu/guides/condo-2017" target="_blank">ISU Condo Cluster ⤴</a>
<br>

# Getting Started
## Access and Login
If logging in the first time, check the {% include target_link href=613.1 section="#logging-in" text="Tutorial" %} section of intro to HPC page. Using Condo cluster has same requirements as the [Nova Computing Cluster ⤴](03-isu-hpc-nova-cluster) except Condo is free. Faculty can fill out the Cluster Access Request on <a href="https://www.hpc.iastate.edu/" target="_blank">HPC webpage ⤴</a> to request access for their group. Use Google Authenticator on <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-android" target="_blank">Android ⤴</a>, <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-iphone-ipad-ipod" target="_blank">iPhone ⤴</a> or <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-windows" target="_blank">Windows ⤴</a> devices for authentication.


To log in to Condo, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) to ssh with the login hostname:

```bash
 ssh <ISU NetID>@condo2017.its.iastate.edu
```

## Data Transfer and Jobs
Use the login hostname (@condo2017.its.iastate.edu) to log in to Condo and submit jobs, but use the data transfer node for data transfers (@condodtn.its.iastate.edu).

* Data transfer example

```bash
# Login:
ssh <ISU NetID>@condodtn.its.iastate.edu

# Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

* Check the <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters/getting-data-to-and-from-the-cluster" target="_blank">Data Transfer guide ⤴</a> for more information about data transfers.
* SLURM job <a href="https://www.hpc.iastate.edu/guides/condo-2017/slurm-job-script-generator-for-condo" target="_blank">script generator for Condo ⤴</a>.
* Check out the {% include target_link href=651.1 text="SLURM: basics of workload manager" %} to learn about running your job on Condo or any other HPC Cluster.
<br>
<br>

## Example job script

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

<br>

# Available Software
Check out the following:
* <a href="https://www.hpc.iastate.edu/guides/condo-2017/software" target="_blank">System and Application Software ⤴</a> guide for Condo from ISU.
* {% include target_link href=641 text="Software available on HPC" %} in this workbook.
<br>
<br>
