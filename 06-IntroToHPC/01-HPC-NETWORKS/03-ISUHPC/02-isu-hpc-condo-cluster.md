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

The condo cluster is out of support since July 1, 2021. It is now under Free Tier model and available to all ISU researchers. A detailed guide is available from ISU: <br>
* <a href="https://www.hpc.iastate.edu/guides/condo-2017" target="_blank">ISU Condo Cluster</a> <br>

## Getting Started
Using Condo cluster has same requirements as the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" target="_blank">Nova Cluster</a> except Condo is free tier. The difference in using Condo is the login hostname:

```
 ssh <ISU NetID>@condo2017.its.iastate.edu
```

Use the login hostname (condo2017) to log in to Condo and submit jobs, but use the data transfer node for data transfers (condodtn).

```
# Data transfer example
Login:
ssh <ISU NetID>@condodtn.its.iastate.edu

Copy data:
cp /home/$USER/test.txt /myfiles/Users/$USER/
```

* Check the <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters/getting-data-to-and-from-the-cluster" target="_blank">Data Transfer guide</a> for more information about data transfers
* SLURM job <a href="https://www.hpc.iastate.edu/guides/condo-2017/slurm-job-script-generator-for-condo" target="_blank">script generator for Condo</a>
* Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics</a> to learn about running your job on Condo or any other HPC Cluster
* The <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" target="_blank">Nova Cluster tutorial</a> page has more information that applies to Condo cluster as well, such as submitting a job


___
# Further Reading
* [Nova Computing Cluster](03-isu-hpc-nova-cluster)
* [LSS Storage](04-isu-hpc-lss-storage)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](01-isu-hpc-intro){: .btn  .btn--primary}
[Next](03-isu-hpc-nova-cluster){: .btn  .btn--primary}
