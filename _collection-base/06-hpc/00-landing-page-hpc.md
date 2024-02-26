---
title: "06:  High-Performance Computing (HPC)"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "landing-page"
level: 0
categories: []
tags: []
---


{% include toc %}
{% include images_path %}

Although today's handy laptops perform many advanced and computationally intensive tasks, projects involving Big Data require significantly more resources. That need is satisfied by the HPC infrastructure, built from a network of computing clusters combined with immense memory. Access to these resources is remote, so job submission and data preview occurs through an interface on any local computing machine from any (allowed) geolocation. The HPC infrastructure is a shared community space, so you might want to familiarize yourself with the usage policy to avoid disrupting peer work.


## <span style="color: #8997c1;">Table of contents</span>

### **<a href="01-HPC-NETWORKS/01-introduction-to-hpc-infrastructure" style="color: #24376b;">1. Introduction to HPC infrastructure</a>**
* <a href="01-HPC-NETWORKS/01-XSEDE/01-supercomputer-intro" style="color: #3f5a8a;">1.1 ACCESS Program</a>
  * <a href="01-HPC-NETWORKS/01-XSEDE/02-supercell-storage" style="color: #3f5a8a;">1.1.1 XSEDE Supercell Storage</a>
* <a href="01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" style="color: #3f5a8a;">1.2 SCINet Network</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster" style="color: #3f5a8a;">1.2.1 Atlas Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/03-scinet-ceres-cluster" style="color: #3f5a8a;">1.2.2 Ceres Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/02-SCINET/04-scinet-juno-storage" style="color: #3f5a8a;">1.2.3 Juno Storage</a>
* <a href="01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" style="color: #3f5a8a;">1.3 ISU HPC</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/02-isu-hpc-condo-cluster" style="color: #3f5a8a;">1.3.1 Condo Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" style="color: #3f5a8a;">1.3.2 Nova Computing Cluster</a>
  * <a href="01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage" style="color: #3f5a8a;">1.3.3 LSS Storage</a>

### **<a href="02-FILE-ACCESS/01-remote-data-access" style="color: #24376b;">2. Remote Access to HPC Resources</a>**
* <a href="02-FILE-ACCESS/02-virtual-private-network" style="color: #24376b;">2.1 Virtual Private Network (VPN) Connection</a>
* <a href="02-FILE-ACCESS/03-secure-shell-connection" style="color: #24376b;">2.2 Secure Shell Connection (SSH)</a>
  * <a href="02-FILE-ACCESS/03A-ssh-shortcuts" style="color: #3f5a8a;">2.2.1 SSH shortcuts and password-less login</a>
* <a href="02-FILE-ACCESS/04-open-on-demand" style="color: #3f5a8a;">2.3 Open On Demand (OOD) Connection</a>

<span style="color: #a9bbd1;"><i>(see more in section <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/01-remote-data-access" target="_blank">7: Data Acquisition: Remote Data Access  ⤴</a>)</i></span>

### **<a href="03-HOME-DIRECTORY/00-setting-up-home-directory" style="color: #24376b;">3. Setting up Your Home Directory for Data Analysis</a>**
* <a href="03-HOME-DIRECTORY/01-bashrc" style="color: #3f5a8a;">3.1 .bashrc example file</a>

### **<a href="04-SOFTWARE/01-software-available-on-HPC" style="color: #24376b;">4. Software Available on HPC</a>**
* <a href="04-SOFTWARE/02-accessing-preinstalled-modules" style="color: #3f5a8a;">4.1 Accessing pre-Installed Modules</a>
* <a href="04-SOFTWARE/03-accessing-package-manager" style="color: #3f5a8a;">4.2 Accessing Software via Package Manager</a>
* <a href="04-SOFTWARE/04-installing-custom-programs" style="color: #3f5a8a;">4.3 Installing Custom Programs in User Space</a>

### **<a href="05-JOB-QUEUE/00-introduction-to-job-scheduling" style="color: #24376b;">5. Introduction to Job Scheduling</a>**
* <a href="05-JOB-QUEUE/01-SLURM/01-slurm-basics" style="color: #3f5a8a;">5.1 SLURM: Basics of Workload Manager</a>
  * <a href="05-JOB-QUEUE/01-SLURM/01-slurm-introduction" style="color: #3f5a8a;">5.1.1 Introduction to SLURM</a>
  * <a href="05-JOB-QUEUE/01-SLURM/03-slurm-1-tutorial-job-submission" style="color: #3f5a8a;">5.1.2 Creating SLURM Job Submission Scripts</a>
  * <a href="05-JOB-QUEUE/01-SLURM/04-slurm-2-tutorial-submitting-dependency-jobs" style="color: #3f5a8a;">5.1.3 Submitting Dependency Jobs using SLURM</a>
  * <a href="05-JOB-QUEUE/01-SLURM/02-slurm-cheatsheet" style="color: #3f5a8a;">SLURM Commands CheatSheet</a>
* <a href="05-JOB-QUEUE/02-PBS/01-pbs-basics" style="color: #3f5a8a;">5.2 PBS: Portable Batch System</a>
  * <a href="05-JOB-QUEUE/02-PBS/03-pbs-1-tutorial-job-submission" style="color: #3f5a8a;">5.2.1 Creating PBS Job Submission Scripts</a>
  * <a href="05-JOB-QUEUE/02-PBS/04-pbs-2-tutorial-submitting-dependency" style="color: #3f5a8a;">5.2.2 Submitting Dependency Jobs using PBS</a>
  * <a href="05-JOB-QUEUE/02-PBS/02-pbs-cheatsheet" style="color: #3f5a8a;">PBS Commands CheatSheet</a>

### **<a href="06-PARALLEL/01-introduction-to-gnu-parallel" style="color: #24376b;">6. Introduction to GNU Parallel</a>**

### **<a href="07-CONTAINERS/00-introduction-to-containers" style="color: #24376b;">7. Introduction to Containers</a>**
* <a href="07-CONTAINERS/01-SINGULARITY/00-apptainer-introduction" style="color: #3f5a8a;">7.1 Apptainer</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/01-singularity-basics" style="color: #3f5a8a;">7.1 Singularity (archival)</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/02-singularity-1-tutorial-creating-containers" style="color: #3f5a8a;">7.1.1 Creating Containers using Singularity</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/03-singularity-2-tutorial-modyfying-containers" style="color: #3f5a8a;">7.1.2 Modifying Existing Containers</a>
  * <a href="07-CONTAINERS/01-SINGULARITY/04-singularity-3-tutorial-vagrant" style="color: #3f5a8a;">7.1.3 Singularity on your Mac via Vagrant</a>
* <a href="07-CONTAINERS/02-DOCKER/01-docker-basics" style="color: #3f5a8a;">7.2 Docker</a>


---

[Homepage](../index.md){: .btn  .btn--primary}
[Prior Section](../05-IntroToProgramming/00-IntroToProgramming-LandingPage){: .btn  .btn--primary}
[Next Section](../07-DataParsing/00-DataParsing-LandingPage){: .btn  .btn--primary}
