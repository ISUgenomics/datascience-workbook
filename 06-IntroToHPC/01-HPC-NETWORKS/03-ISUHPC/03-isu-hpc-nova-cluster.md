---
title: "ISU HPC: Nova Computing Cluster"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

Nodes and storage can be purchased on the Nova cluster for use by the researchers at ISU. For details about the Nova cluster, <a href="https://www.hpc.iastate.edu/guides/nova" target="_blank">click here.</a> <br>


## Getting Started
For logging in the first time, check the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">Intro to ISU HPC ⤴</a> page for information about getting started. Once connected to ISU network, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) and input following command to log in to Nova:

```
 ssh <ISU NetID>@nova.its.iastate.edu
```

Use the login hostname (@nova.its.iastate.edu) to log in to Nova and submit jobs, but use the data transfer node for data transfers (@novadtn.its.iastate.edu).

```
# Data transfer example
Login:
ssh <ISU NetID>@novadtn.its.iastate.edu

Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

Once logged in you can start using Nova cluster and submit jobs using <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-introduction" target="_blank">SLURM Workload Manager ⤴</a>. SLURM is used to allocate memory and processors to an input job on Nova. If not familiar with the script, use this <a href="https://www.hpc.iastate.edu/guides/nova/slurm-script-generator-for-nova" target="_blank">Script generator for Nova ⤴</a>, input your requirements and it will generate a text script. You can then copy this script in a text file, add your commands at the bottom and then submit the job. Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics ⤴</a> to learn about running your job on Nova or any other HPC Cluster.




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
squeue -u <your_netID> 
```


<br>

___
# Further Reading
* [LSS Storage](04-isu-hpc-lss-storage)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](02-isu-hpc-condo-cluster){: .btn  .btn--primary}
[Next](04-isu-hpc-lss-storage){: .btn  .btn--primary}
