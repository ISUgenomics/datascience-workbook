---
title: "SCINet: Juno Storage"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [1. Introduction to HPC infrastructure](../01-introduction-to-hpc-infrastructure.md) / [1.2 SCINet Network](01-scinet-network-intro.md) / **1.2.3 Juno Storage**

---


# Introduction

# Juno Archive Storage

**Juno is a Storage Device** located in Beltsville (MD), being part of **SCINet HPC System**, funded by USDA-ARS. The SCINet initiative's mission is to grow USDA’s research capacity by providing scientists with high-performance computing and professional training support. <br>
Explore the resources to learn more:
* SCINet website: <a href="https://scinet.usda.gov" target="_blank">https://scinet.usda.gov  ⤴</a>
* USDA-ARS website: <a href="https://www.ars.usda.gov/" target="_blank">https://www.ars.usda.gov/  ⤴</a>
* Introduction to SCINet HPC in this workbook: <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">What is SCINet?  ⤴</a>

## **What is Juno used for?**

In addition to its powerful computing capabilities, the SCINet HPC system also offers data storage solutions to efficiently manage and store data and results:
* **Tier 1 Storage**, short-term, <u>not backed up</u> storage on each computing cluster (<a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster" target="_blank">Atlas  ⤴</a>, <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/03-scinet-ceres-cluster" target="_blank">Ceres  ⤴</a>) for storing code, data, and intermediate results while performing a series of computational jobs
* **Juno storage**, with a large, multi-petabyte ARS long-term storage, periodically backed up to tape device.

Learn more about SCINet Data and Storage **recommended procedures** from the <a href="https://scinet.usda.gov/guides/data/data-management#data-and-storage-sop" target="_blank">guide  ⤴</a>, provided by SCINet VRSC.

### *Benefits of using Juno*
There are a few reasons why it is a good practice to move final results that are difficult to easily recreate to backed up **Juno archive storage**:

1. **Data security:** <br> *Archiving final results in a backed up storage system helps to protect against data loss due to hardware failure or other unforeseen events.*

2. **Data preservation:** <br> *Archiving final results ensures that the data will be preserved for long-term use and will not be lost due to changes in technology or file formats.*

3. **Collaboration:** <br> *Archiving final results allows for easier sharing and collaboration with other researchers, as the data will be stored in a centralized location that is easily accessible.*

4. **Reproducibility:** <br> *Archiving final results helps to ensure the reproducibility of research findings, as other researchers will be able to access the original data and results.*

# Juno access points

Juno transfer node: <b>@nal-dtn.scinet.usda.gov</b> <br>
Juno end point via Globus: <b>“NAL DTN 0”</b> (*recommended*) <br>
<i><span style="color: #ff3870;font-weight: 500;">*SCINet account is required to get access</span></i>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
To obtain a SCINet account, a <b>SCINet Account Request</b> must be submitted. To learn more, visit the official <a href="https://scinet.usda.gov/about/signup#sign-up-for-a-scinet-account" target="_blank">Sign up for a SCINet account  ⤴</a> guide or use links provided below: <br>
<li> for ARS-affiliated users: <a href="https://scinet.usda.gov/about/signup#ars-employees" target="_blank">SCINet Account Request  ⤴</a></li>
<li> for non-ARS users: <a href="https://scinet.usda.gov/about/signup#non-ars-employees" target="_blank">Non-ARS SCINet Account Request  ⤴</a></li>
</span>
</div><br>

## **Copy your data to Juno**

> <a href="https://www.globus.org/" target="_blank">Globus Online  ⤴</a> is the recommended method for transferring data to and from the SCINet clusters. It provides faster data transfer speeds compared to `scp`, has a graphical interface, and does not require a GA verification code for every file transfer.

### • *using Globus (preferred)*

Follow the step-by-step guide: <a href="https://scinet.usda.gov/guides/data/data-management#detailed-instructions-using-globus-preferred" target="_blank">Globus Data Transfer  ⤴</a> to learn how to transfer data to and from Juno storage.

<span style="color: #ff3870;font-weight: 500;">Juno end point via Globus:</span> <b>“NAL DTN 0”</b>

<iframe width="560" height="315" src="https://www.youtube.com/embed/I3lnsCAfx3Q" title="Globus File Transfer by SCINet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br>

### • *using command line*

For small datat transfers it is allowed to move data to Juno storage using command line approches, such as `scp` and `rsync`.

0. First, use terminal window on your local machine to **log in to the transfer node** on one of the SCINet clusters:

* Atlas: `ssh <user.name>@atlas-login.hpc.msstate.edu`
* Ceres: `ssh <user.name>@ceres-dtn.scinet.usda.gov`

1. Then, use `rsync` command to synchronize (move new content or update changes) in your `project_name` directory:

```
rsync -avz --no-p --no-g ttt nal-dtn.scinet.usda.gov:/LTS/project/<project_name>/
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> Note, the organization of the file system is slightly different on computing clusters: <b>/project/project_name</b> and Juno storage: <b>/LTS/project/project_name</b> .</span>
</div><br>

___
# Further Reading
* [1.3 ISU HPC](../03-ISUHPC/01-isu-hpc-intro)

* [2. Remote Access to HPC Resources](../02-FILE-ACCESS/01-remote-data-access)
* [3. Setting up Your Home Directory for Data Analysis](../03-HOME-DIRECTORY/00-setting-up-home-directory)
* [4. Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [5. Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [6. Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](03-scinet-ceres-cluster){: .btn  .btn--primary}
[Next](../03-ISUHPC/01-isu-hpc-intro){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
