---
title: "High-Performance Computing (HPC)"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

Today's laptops may be able to handle many advanced tasks, but projects involving Big Data require significantly more resources. This is where the High-Performance Computing infrastructure comes in. It is a network of powerful computing clusters with a massive amount of memory, designed specifically to handle these types of projects.  The HPC infrastructure can be accessed remotely from any allowed location, allowing users to submit jobs and preview data from their own local computing machines. As a shared community resource, it is important to familiarize yourself with the usage policy to avoid disrupting the work of others.


## <span style="color: #8997c1;">Table of contents</span>

### **<a href="00-HOME-DIRECTORY/00-setting-up-home-directory" style="color: #24376b;">1. Setting up your home directory for data analysis</a>**
* <a href="00-HOME-DIRECTORY/01-bashrc" style="color: #3f5a8a;">.bashrc example file</a>

### **<a href="01-HPC-NETWORKS/01-introduction-to-hpc-infrastructure" style="color: #24376b;">2. Introduction to HPC infrastructure</a>**
* <a href="01-HPC-NETWORKS/01-XSEDE/01-supercomputer-intro" style="color: #3f5a8a;">2.1 XSEDE Supercomputer</a>
  * <a href="01-HPC-NETWORKS/01-XSEDE/02-supercell-storage" style="color: #3f5a8a;">XSEDE Supercell Storage</a>
* <a href="01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" style="color: #3f5a8a;">2.2 SCINet Network</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster" style="color: #3f5a8a;">Atlas Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/03-scinet-ceres-cluster" style="color: #3f5a8a;">Ceres Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/04-scinet-juno-storage" style="color: #3f5a8a;">Juno Storage</a>
* <a href="01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" style="color: #3f5a8a;">2.3 ISU HPC</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/02-isu-hpc-condo-cluster" style="color: #3f5a8a;">Condo Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" style="color: #3f5a8a;">Nova Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage" style="color: #3f5a8a;">LSS Storage</a>

### **<a href="02-SSH/01-secure-shell-connection" style="color: #24376b;">3. Secure Shell Connection (SSH)</a>**
* <a href="02-SSH/02-ssh-shortcuts" style="color: #3f5a8a;">3.1 SSH Shortcuts</a>
* <a href="02-SSH/03-password-less-ssh" style="color: #3f5a8a;">3.2 Password-less SSH</a>

### **<a href="03-FILE-ACCESS/01-remote-data-access" style="color: #24376b;">4. Remote Data Access</a>** <br><span style="color: #a9bbd1;">_(see more in section 7: Data Acquisition)_</span>

### **<a href="04-SOFTWARE/01-software-available-on-HPC" style="color: #24376b;">5. Available Software</a>**
* <a href="04-SOFTWARE/02-accessing-preinstalled-modules" style="color: #3f5a8a;">5.1 Accessing pre-Installed Modules</a>
* <a href="04-SOFTWARE/03-installing-custom-programs" style="color: #3f5a8a;">5.2 Installing Custom Programs in User Space</a>

### **<a href="05-JOB-QUEUE/00-introduction-to-job-scheduling" style="color: #24376b;">6. Introduction to Job Scheduling</a>**
* <a href="05-JOB-QUEUE/01-SLURM/01-slurm-basics" style="color: #3f5a8a;">6.1 SLURM</a>
  * <a href="05-JOB-QUEUE/01-SLURM/02-slurm-cheatsheet" style="color: #3f5a8a;">SLURM Cheatsheet</a>
  * <a href="05-JOB-QUEUE/01-SLURM/03-slurm-1-tutorial-job-submission" style="color: #3f5a8a;">Tutorial: Creating SLURM Job Submission Scripts</a>
  * <a href="05-JOB-QUEUE/01-SLURM/04-slurm-2-tutorial-submitting-dependency-jobs" style="color: #3f5a8a;">Tutorial: Submitting Dependency Jobs using SLURM</a>
* <a href="05-JOB-QUEUE/02-PBS/01-pbs-basics" style="color: #3f5a8a;">6.2 PBS</a>
  * <a href="05-JOB-QUEUE/02-PBS/02-pbs-cheatsheet" style="color: #3f5a8a;">PBS Cheatsheet</a>
  * <a href="05-JOB-QUEUE/02-PBS/03-pbs-1-tutorial-job-submission" style="color: #3f5a8a;">Tutorial: Creating PBS Job Submission Scripts</a>
  * <a href="05-JOB-QUEUE/02-PBS/04-pbs-2-tutorial-submitting-dependency" style="color: #3f5a8a;">Tutorial: Submitting Dependency Jobs using PBS</a>

### **<a href="06-PARALLEL/01-introduction-to-gnu-parallel" style="color: #24376b;">7. Introduction to GNU Parallel</a>**

### **<a href="07-CONTAINERS/00-introduction-to-containers" style="color: #24376b;">8. Introduction to Containers</a>**
* <a href="07-CONTAINERS/01-SINGULARITY/01-singularity-basics" style="color: #3f5a8a;">8.1 Singularity</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/02-singularity-1-tutorial-creating-containers" style="color: #3f5a8a;">Tutorial: Creating Containers using Singularity</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/03-singularity-2-tutorial-modyfying-containers" style="color: #3f5a8a;">Tutorial: Modifying Existing Containers</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/04-singularity-3-tutorial-vagrant" style="color: #3f5a8a;">Tutorial: Singularity on your Mac via Vagrant</a>
* <a href="07-CONTAINERS/02-DOCKER/01-docker-basics" style="color: #3f5a8a;">8.2 Docker</a>


---

[Homepage](../index.md){: .btn  .btn--primary}
[Prior Section](../05-IntroToProgramming/00-IntroToProgramming-LandingPage){: .btn  .btn--primary}
[Next Section](../07-DataParsing/00-DataParsing-LandingPage){: .btn  .btn--primary}
