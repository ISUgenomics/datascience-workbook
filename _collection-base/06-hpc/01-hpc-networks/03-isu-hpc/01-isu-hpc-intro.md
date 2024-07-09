---
title: "ISU HPC Network"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "intro"
order: 613.1
level: 2
categories: ["hpc", "computing-tools", "documentation"]
tags: ["HPC-system", "ISU-HPC", "super-computer", "computer-power", "hpc-cluster", "nova-cluster", "condo-cluster", "LSS-storage", "HPC-tasks", "scientific-computing"]
attributes: ["user-guide"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


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


## LSS Storage
* **Large Scale Storage** (LSS) - Storage service for ISU researchers


# Logging in
To log in to Nova/Condo Clusters, you need to be connected to ISU network on-campus or use <a href="https://vpn.iastate.edu/+CSCOE+/logon.html#form_title_text" target="_blank">ISU VPN ⤴</a> if you are off-campus. The first time you try to log in to Nova or Condo, a new Google Authenticator (GA) account is created. You will need to use GA for login.

The first time you use the <a class="t-links" href="623"></a> to Nova/Condo, it will respond with:

<pre class="output">
"host key not found, generate hostkey?(yes/no)"
</pre>

You need to answer `yes` to continue.


## Condo vs Nova Cluster

| Feature              | Condo                      | Nova                     |
|----------------------|----------------------------|--------------------------|
| Login node           | @condo2017.its.iastate.edu | @nova.its.iastate.edu    |
| Data Transfer node   | @condodtn.its.iastate.edu  | @novadtn.its.iastate.edu |
| Cores per node       | 16/20/32/40                | 36/48/64/96              |
| Home directory space | 5 GB                       | 5 GB                     |
| Workload Manager     | SLURM                      | SLURM                    |
| Partitions           | <a href="https://www.hpc.iastate.edu/guides/condo-2017/queue-configuration" target="_blank">Partitions List ⤴</a> | <a href="https://www.hpc.iastate.edu/guides/nova/partition-configuration" target="_blank">Partitions List ⤴</a> |

Tutorials to get you started on different HPC Clusters are available in this workbook.
* <a class="t-links" href="613.2">Condo computing cluster</a>
* <a class="t-links" href="613.3">Nova computing cluster</a>
* <a class="t-links" href="613.4">Large Scale Storage (LLS) system</a>

<div class="more" markdown="1">
...about <a class="t-links" href="641">Software available on ISU HPC</a> <base class="mb">
Check out the <a class="t-links" href="651.1">SLURM Basics</a> and <a class="t-links" href="651.4"></a> for running your jobs on HPC cluster. <base class="mb">
It is useful to have some basic knowledge about command line before using HPC. <br>Check this <a class="t-links" href="325">Getting started with UNIX (video + exercises)</a> to learn the basics.
</div>


# Best Practices: Tips

* Test your code/job on a small scale before submitting it to the cluster, if possible. This can help save time and resources as submitting a job often takes longer due to queue times and uses more resources. For example, you can use interactive nodes to find and fix errors before submitting a job.
* Make sure your script is optimized for the cluster such that it uses the available resources efficiently.
* Use proper documentation and version control such as Git to track changes and ease of reproducibility.
* Manage your files appropriately on the cluster. Cleaning up unnecessary files and organising data/files is important.

<div class="more" markdown="1">
Also check out the <a class="t-links" href="911">Introduction to Project Management</a> and <a class="t-links" href="933.2">A Practical guide to managing research documentation</a> for additional tips.
</div>


### *Where to find help?*

* <a href="https://www.hpc.iastate.edu/faq" target="_blank">FAQs ⤴</a> - List of Frequently asked questions such as:
  * *<a href="https://www.hpc.iastate.edu/faq#R" target="_blank">How to use R on a cluster? ⤴</a>*
  * *<a href="https://www.hpc.iastate.edu/faq#python" target="_blank">How to use Python on a cluster? ⤴</a>*
  * *<a href="https://www.hpc.iastate.edu/faq#compile" target="_blank">How to compile a software for use on a cluster? ⤴</a>*

* <b>Contact</b>: hpc-help@iastate.edu


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
