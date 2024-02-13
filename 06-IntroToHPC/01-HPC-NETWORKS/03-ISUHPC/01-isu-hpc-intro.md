---
title: "ISU HPC"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [1. Introduction to HPC infrastructure](../01-introduction-to-hpc-infrastructure.md) / **1.3 ISU HPC**

---


# HPC Clusters at ISU
**High Performance Computing** (HPC) refers to a cluster of interconnected computers or servers used to perform complex computational tasks. HPC clusters can process large amounts of data in a short time and can handle large computationally intensive jobs. General information about HPC clusters available at Iowa State University can be found at the <a href="https://www.hpc.iastate.edu/" target="_blank">ISU HPC Website ⤴</a>. <br>

**Components of HPC Clusters at ISU**
* **headnode** or **login node** - used to log in, submit jobs, and view output
* **data transfer node** - used for data transfers
* **compute nodes** - different types including regular, fat, GPU, etc. are used for computations
* **Infiniband switch** - connects all nodes


## Research Clusters
* **Condo Computing Cluster** - Free access cluster
* **Nova Computing Cluster** - Faculty can purchase nodes and storage on this cluster


## Education Cluster
* **HPC Class** - These are partitions on Nova cluster dedicated to class use
  * Check the <a href="https://www.hpc.iastate.edu/guides/nova/hpc-class" target="_blank">Guide to HPC Class ⤴</a> from ISU for more details


## Storage
* **Large Scale Storage** - Storage service for ISU researchers
<br>
<br>

# Logging in
To log in to Nova/Condo Clusters, you need to be connected to ISU network on-campus or use <a href="https://vpn.iastate.edu/+CSCOE+/logon.html#form_title_text" target="_blank">ISU VPN ⤴</a> if you are off-campus. The first time you try to log in to Nova or Condo, a new Google Authenticator (GA) account is created. You will need to use GA for login. The first time you use the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/03-secure-shell-connection" target="_blank">Secure Shell ⤴</a> connection to Nova/Condo, it will respond with:

```
"host key not found, generate hostkey?(yes/no)"
```

You need to answer yes to continue.
<br>
<br>

## Condo vs Nova Cluster

| Feature | Condo | Nova |
|--- | --- | ---- |
Login node | @condo2017.its.iastate.edu | @nova.its.iastate.edu
Data Transfer node | @condodtn.its.iastate.edu | @novadtn.its.iastate.edu
Cores per node | 16/20/32/40 | 36/48/64/96
Home directory space | 5 GB | 5 GB
Workload Manager | SLURM | SLURM
Partitions | <a href="https://www.hpc.iastate.edu/guides/condo-2017/queue-configuration" target="_blank">Partitions List ⤴</a> | <a href="https://www.hpc.iastate.edu/guides/nova/partition-configuration" target="_blank">Partitions List ⤴</a>

<br>

# Best Practices: Tips

* Test your code/job on a small scale before submitting it to the cluster, if possible. This can help save time and resources as submitting a job often takes longer due to queue times and uses more resources. For example, you can use interactive nodes to find and fix errors before submitting a job.
* Make sure your script is optimized for the cluster such that it uses the available resources efficiently.
* Use proper documentation and version control such as Git to track changes and ease of reproducibility.
* Manage your files appropriately on the cluster. Cleaning up unnecessary files and organising data/files is important.

Also check out the <a href="https://datascience.101workbook.org/09-ProjectManagement/00-RESEARCH-PROJECT/01-project-management-overview" target="_blank">Project Management overview⤴</a> and <a href="https://datascience.101workbook.org/09-ProjectManagement/00-RESEARCH-PROJECT/02-intro-to-project-management" target="_blank">Project Management guide ⤴</a> for additional tips.
<br>
<br>

## Where to find help?
* <a href="https://www.hpc.iastate.edu/faq" target="_blank">FAQs ⤴</a> - List of Frequently asked questions such as:
  * <a href="https://www.hpc.iastate.edu/faq#R" target="_blank">How to use R on a cluster? ⤴</a>
  * <a href="https://www.hpc.iastate.edu/faq#python" target="_blank">How to use Python on a cluster? ⤴</a>
  * <a href="https://www.hpc.iastate.edu/faq#compile" target="_blank">How to compile a software for use on a cluster? ⤴</a>
* <b>Contact</b>: hpc-help@iastate.edu
<br>
<br>

# Explore hands-on tutorials
Tutorials to get you started on different HPC Clusters are available in this workbook.
* <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/02-isu-hpc-condo-cluster" target="_blank">Condo Computing Cluster ⤴</a>
* <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" target="_blank">Nova Computing Cluster ⤴</a>
* <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage" target="_blank">Large Scale Storage ⤴</a>
* <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC" target="_blank">Software Available on HPC ⤴</a>
* Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics ⤴</a> and <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/03-slurm-1-tutorial-job-submission" target="_blank">Creating SLURM Job Submission Scripts ⤴</a> for running your jobs on any HPC cluster.
* It is useful to have some basic knowledge about command line before using HPC. Check this <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started" target="_blank">Unix tutorial ⤴</a> to learn the basics.
<br>
<br>

# Guides provided by ISU
## General guides

* <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters" target="_blank">Intro to HPC clusters ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/nova" target="_blank">Intro to Nova cluster ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">Nova OnDemand ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/virtual-environments" target="_blank">Virtual Environments ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/sample-job-scripts" target="_blank">Sample Job Scripts ⤴</a>
<br>

## Data Transfers

* For transferring data, use the <a href="https://www.hpc.iastate.edu/guides/file-transfers" target="_blank">File Transfers ⤴</a> guide. Each cluster has its own data transfer node, for example, Nova cluster has novadtn.
* Use <a href="https://www.hpc.iastate.edu/guides/rclone" target="_blank">Rclone ⤴</a> guide to sync data between HPC Clusters and Google Drive.
* <a href="https://www.hpc.iastate.edu/guides/globus-online" target="_blank">Globus Connect ⤴</a> online data transfer system. Use Globus Connect Personal to copy data between a cluster and your personal computer.
<br>

## Additional guides

* <a href="https://www.hpc.iastate.edu/guides/unix-introduction" target="_blank">Unix Introduction ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/scslab" target="_blank">SCSLab ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/using-matlab-parallel-server" target="_blank">Matlab Parallel Server ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/using-ddt-parallel-debugger--map-profiler-and-performance-reports" target="_blank">ARM DDT Parallel Debugger, MAP profiler and Performance Reports ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/using-ansys-rsm" target="_blank">ANSYS RSM ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/containers" target="_blank">Containers ⤴</a>
* <a href="https://researchit.las.iastate.edu/guides/pronto/machine_learning/" target="_blank">Machine Learning Container ⤴</a>
<br>
<br>

___
# Further Reading
* [1.3.1 Condo Computing Cluster](02-isu-hpc-condo-cluster)
* [1.3.2 Nova Computing Cluster](03-isu-hpc-nova-cluster)
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
[Previous](../02-SCINET/04-scinet-juno-storage){: .btn  .btn--primary}
[Next](02-isu-hpc-condo-cluster){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
