---
title: "ISU HPC: LSS System"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}


# Large Scale Storage (LSS)
The LSS is a storage service for Iowa State faculty and staff. It is useful for research labs that need to store large amounts of data including sequencing data, images, and other large files. 

## Access
Space on LSS can be requested from <a href="https://lss.apps.it.iastate.edu/" target="_blank">ISU LSS website ⤴</a>.
<br>
Once you have purchased space on LSS, folders can be mounted to your computer directly. Check out this guide on <a href="https://researchit.las.iastate.edu/guides/lss/mount_folders/" target="_blank">how to mount folders from LSS ⤴</a>.

## Data Transfer
LSS is mounted on data transfer nodes of each cluster meaning you can use data transfer node of the cluster you are using to transfer data from that cluster to LSS. Other options can be found on the data transfers section of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro#data-transfers" target="_blank">ISU HPC ⤴</a> intro page.

### How to copy data from Nova to LSS

```
# Login to novadtn:
ssh <ISU-NetID>@novadtn.its.iastate.edu
The /lss/research directory contains directories of different research groups/labs. Store files in your lab directory. 

# Copy your files to LSS:
scp /home/$USER/myfile /lss/research/your-lab/
```

The same method applies to other clusters as well, move data to LSS using data transfer node of the cluster in use.


___
# Further Reading
* [Secure Shell Connection](../../02-SSH/01-secure-shell-connection)
* [Remote Data Access](../../03-FILE-ACCESS/01-remote-data-acces)
* [Software Available on HPC](../../04-SOFTWARE/01-software-available-on-HPC)
* [Introduction to Job Scheduling](../../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [Introduction to GNU Parallel](../../06-PARALLEL/01-introduction-to-gnu-parallel)
* [Introduction to Containers](../../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](03-isu-hpc-nova-cluster){: .btn  .btn--primary}
[Next](../../02-SSH/01-secure-shell-connection){: .btn  .btn--primary}
