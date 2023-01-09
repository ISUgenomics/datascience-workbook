---
title: "ISU HPC: Condo Computing Cluster"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

The condo cluster is out of support since July 1, 2021. It is now under Free Tier model and available to all ISU researchers for free. A detailed guide is available from ISU: * <a href="https://www.hpc.iastate.edu/guides/condo-2017" target="_blank">ISU Condo Cluster ⤴</a> 
<br>

# Getting Started
## Access and Login
If logging in the first time, check the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro#logging-in" target="_blank">Logging in ⤴</a> section of intro to HPC page. Using Condo cluster has same requirements as the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" target="_blank">Nova Cluster ⤴</a> except Condo is free. Faculty can fill out <a href="https://iastate.service-now.com/it?id=sc_cat_item&sys_id=4c36cbaedb65a8546870467239961913&sysparm_category=7e68285cdb0b77406870467239961980" target="_blank">this form ⤴</a> to request access for their group. Use Google Authenticator on <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-android" target="_blank">Android ⤴</a>, <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-iphone-ipad-ipod" target="_blank">iPhone ⤴</a> or <a href="https://www.hpc.iastate.edu/guides/condo-2017/access-and-login/google-auth-on-windows" target="_blank">Windows ⤴</a> devices for authentication. 


To log in to Condo, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) to ssh with the login hostname:

```
 ssh <ISU NetID>@condo2017.its.iastate.edu
```

## Data Transfer and Jobs
Use the login hostname (@condo2017.its.iastate.edu) to log in to Condo and submit jobs, but use the data transfer node for data transfers (@condodtn.its.iastate.edu).

```
# Data transfer example
Login:
ssh <ISU NetID>@condodtn.its.iastate.edu

Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

* Check the <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters/getting-data-to-and-from-the-cluster" target="_blank">Data Transfer guide ⤴</a> for more information about data transfers
* SLURM job <a href="https://www.hpc.iastate.edu/guides/condo-2017/slurm-job-script-generator-for-condo" target="_blank">script generator for Condo ⤴</a>
* Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics ⤴</a> to learn about running your job on Condo or any other HPC Cluster
<br>


## Example job script

```
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

``` 
sbatch filename 
```

Check your queued jobs:

```
squeue -u your_netID 
```



___
# Further Reading
* [Nova Computing Cluster](03-isu-hpc-nova-cluster)
* [LSS Storage](04-isu-hpc-lss-storage)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](01-isu-hpc-intro){: .btn  .btn--primary}
[Next](03-isu-hpc-nova-cluster){: .btn  .btn--primary}
