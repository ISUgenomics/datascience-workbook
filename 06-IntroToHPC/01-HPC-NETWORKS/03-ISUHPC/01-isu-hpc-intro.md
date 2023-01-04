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

High Performance Computing (HPC) refers to a cluster of interconnected computers or servers used to perform complex computational tasks. HPC clusters can process large amounts of data in a short time and can handle large computationally intensive jobs. General information about HPC clusters available at Iowa State University can be found at the <a href="https://www.hpc.iastate.edu/" target="_blank">ISU HPC Website.</a> <br>

## Guides
* <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters" target="_blank">Intro to HPC clusters</a> 
* <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters" target="_blank">Condo cluster</a> 
* <a href="https://www.hpc.iastate.edu/guides/introduction-to-hpc-clusters" target="_blank">Nova cluster</a> 
* <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage" target="_blank">Large Scale Storage</a> 

* Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics</a> and <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/03-slurm-1-tutorial-job-submission" target="_blank">Creating SLURM Job Submission Scripts</a> pages of this workbook for running your jobs on any HPC cluster. Some additional job scripts for specific applications are available as <a href="https://www.hpc.iastate.edu/guides/sample-job-scripts" target="_blank">sample job scripts</a>
* <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">Nova OnDemand</a>
* <a href="https://www.hpc.iastate.edu/guides/virtual-environments" target="_blank">Virtual Environments</a>
<br>

### Data Transfers
* For transferring data, use the <a href="https://www.hpc.iastate.edu/guides/file-transfers" target="_blank">File Transfers</a> guide. This uses Condo Data Transfer Node as an example (condodtn). Each cluster has its own data transfer node, for example, Nova cluster has novadtn. <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage" target="_blank">Large Scale Storage</a> (LSS) is mounted on data transfer nodes of all clusters.
* Use <a href="https://www.hpc.iastate.edu/guides/rclone" target="_blank">Rclone</a> guide to sync data between HPC Clusters and Google Drive
* <a href="https://www.hpc.iastate.edu/guides/globus-online" target="_blank">Globus Connect</a> online data transfer system. Use Globus Connect Personal to copy data between a cluster and your personal computer
<br>

### Additional guides
* <a href="https://www.hpc.iastate.edu/guides/nova/hpc-class" target="_blank">HPC Class</a> - These are partitions on Nova cluster dedicated to class use.
* <a href="https://www.hpc.iastate.edu/guides/unix-introduction" target="_blank">Unix Introduction</a> from ISU and <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started" target="_blank">Unix tutorial</a> in this workbook
* <a href="https://www.hpc.iastate.edu/guides/scslab" target="_blank">SCSLab</a>
* <a href="https://www.hpc.iastate.edu/guides/using-matlab-parallel-server" target="_blank">Matlab Parallel Server</a>
* <a href="https://www.hpc.iastate.edu/guides/using-ddt-parallel-debugger--map-profiler-and-performance-reports" target="_blank">ARM DDT Parallel Debugger, MAP profiler and Performance Reports</a>
* <a href="https://www.hpc.iastate.edu/guides/using-ansys-rsm" target="_blank">ANSYS RSM</a>
* <a href="https://www.hpc.iastate.edu/guides/containers" target="_blank">Containers</a>
* <a href="https://researchit.las.iastate.edu/guides/pronto/machine_learning/" target="_blank">Machine Learning Container</a>
<br>

## Good Practices: Tips

* Test your code/job on a small scale before submitting it to the cluster, if possible. This can help save time and resources as submitting a job often takes longer due to queue times and uses more resources. For example, you can use interactive nodes to find and fix errors before submitting a job.
* Make sure your script is optimized for the cluster such that it uses the available resources efficiently.
* Use proper documentation and version control such as Git to track changes and ease of reproducibility. 
* Manage your files appropriately on the cluster. Cleaning up unnecessary files and organising data/files is important.

Also check out the <a href="https://datascience.101workbook.org/09-ProjectManagement/01-intro-to-project-management" target="_blank">Project Management</a> guide for additional tips. <br>


___
# Further Reading
* [Condo Computing Cluster](02-isu-hpc-condo-cluster)
* [Nova Computing Cluster](03-isu-hpc-nova-cluster)
* [LSS Storage](04-isu-hpc-lss-storage)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../02-SCINET/04-scinet-juno-storage){: .btn  .btn--primary}
[Next](02-isu-hpc-condo-cluster){: .btn  .btn--primary}
