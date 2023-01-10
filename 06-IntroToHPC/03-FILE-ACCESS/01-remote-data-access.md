---
title: "Remote Data Access"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

Remote data access refers to the ability to **access data that is stored on a remote machine**, such as a server, database, or HPC system rather than on a local machine. This allows users to access and **manipulate data from anywhere with an internet connection**. In particular, there are several ways to access data stored on high-performance computing (HPC) clusters remotely.

## **1. SSH (Secure Shell connection)**
*With SSH, users can connect to the cluster and then browse, manipulate, and execute files as if they were sitting at the terminal of a computer on the cluster. Learn more from the hands-on tutorials in the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a> section of this workbook.*
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#3-terminal-access" target="_blank">SSH access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">SSH access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster#access-and-login" target="_blank">SSH access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>


## **2. Remote desktop software**
<i>VNC (<a href="https://en.wikipedia.org/wiki/Virtual_Network_Computing" target="_blank">Virtual Network Computing  ⤴</a>) or RDP (<a href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" target="_blank">Remote Desktop Protocol  ⤴</a> by Microsoft) allow users to remotely access and control a desktop environment on the cluster.</i>


## **3. Remote web-based access**
*Some HPC clusters may also provide web-based interfaces (e.g., <a href="https://openondemand.org" target="_blank">Open OnDemand  ⤴</a>) for remotely accessing and managing data.*
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#open-ondemand-login" target="_blank">OOD access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It is important to note that <b>accessing data on an HPC cluster remotely can be slower</b> than accessing data locally, due to the added latency of transmitting data over the network. <br><br>In addition, users may <b>need to be granted access</b> to the HPC cluster in order to use it remotely.
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;">To learn more about remote access and data manipulation, go to Section <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/01-remote-data-access" target="_blank">07. Data Acquisition and Wrangling: Remote Data Access  ⤴</a> in this workbook.</span>


___
# Further Reading
* learn more about [Remote Data Access in section 7: Data Acquisition](../../07-DataParsing/01-FILE-ACCESS/01-remote-data-access)

* [Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Prior](../02-SSH/03-password-less-ssh){: .btn  .btn--primary}
[Next](../04-SOFTWARE/01-software-available-on-HPC){: .btn  .btn--primary}
