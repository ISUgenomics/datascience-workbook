---
title: "Remote Access to HPC resources"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
type: "intro"
level: 1
categories: []
tags: []
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../00-IntroToHPC-LandingPage.md) / **2. Remote Access to HPC Resources**

---


# Introduction

Remote access to the contents stored on remote machines refers to the ability for a user to **access, view, and manipulate files, data, and software available on another computer**, including servers, databases, and HPC systems. This can be accomplished **from anywhere over a network connection** such as the Internet. Though, the user **must have the necessary permissions** and credentials to access the remote machine and its contents. In particular, there are several ways to access remotely the resources available on high-performance computing (HPC) clusters.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It is important to note that <b>accessing data on an HPC cluster remotely can be slower</b> than accessing data locally, due to the added latency of transmitting data over the network. <br><br>In addition, users may <b>need to be granted access</b> to the HPC cluster in order to use it remotely.
</span>
</div>


## **1. VPN (Virtual Private Network)**

<i>VPN is a technology that allows users to securely access a private network over the Internet. VPNs can be used to access remote files and data stored on remote computers within the same network. VPNs protect users data from being intercepted or monitored by unauthorized parties <b>while login from off-campus</b>. Learn more from the hands-on tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/02-virtual-private-network" target="_blank">Virtual Private Network (VPN) Connection  ⤴</a> in this workbook.</i>

**Jump to solution to get started with:**
* <a href="https://scinet.usda.gov/guides/access/vpn#scinet-vpn" target="_blank">VPN access to Atlas and Ceres  ⤴</a> computing clusters of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
* <a href="http://vpn.iastate.edu/" target="_blank">VPN access to Nova and Condo  ⤴</a> computing clusters of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>

## **2. SSH (Secure Shell connection)**

*With SSH, a cryptographic network protocol, users can connect to the cluster and then browse, manipulate, and execute files as if they were sitting at the terminal of a computer on the cluster. Learn more from the hands-on tutorials in the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/03-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a> section of this workbook.*

**Jump to solution to get started with:**
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#3-terminal-access" target="_blank">SSH access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">SSH access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster#access-and-login" target="_blank">SSH access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>


## **3. Remote web-based access**

*Some HPC clusters may also provide web-based interfaces (e.g., <a href="https://openondemand.org" target="_blank">Open OnDemand  ⤴</a>) for remotely accessing and managing data. It also allows users to submit computing jobs to the HPC queueing system through a web interface or API, without the need for command line login to the underlying infrastructure. Learn more from the hands-on tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/04-open-on-demand" target="_blank">Open On Demand (OOD) Connection  ⤴</a> in this workbook.*

**Jump to solution to get started with:**
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#open-ondemand-login" target="_blank">OOD access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>

## **4. Remote desktop software**

<i>VNC (<a href="https://en.wikipedia.org/wiki/Virtual_Network_Computing" target="_blank">Virtual Network Computing  ⤴</a>) or RDP (<a href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" target="_blank">Remote Desktop Protocol  ⤴</a> by Microsoft) allow users to remotely access and control a desktop (graphical user interface) on another computer, including some clusters.</i>

## **5. RFS (Remote File System)**

<i><a href="https://en.wikipedia.org/wiki/Remote_File_Sharing" target="_blank">RFS protocol  ⤴</a> is often used in computing clusters to connect multiple nodes together over a high-speed network. By using an RFS protocol, nodes in a cluster can access data stored on other nodes as if it were stored locally, which simplifies data access and eliminates the need to physically transfer large amounts of data between nodes. This can improve the performance and scalability of the cluster, and allows the nodes to work together more efficiently.</i>

<b>RFS protocol allows users to access files stored on a remote computer</b>, without having to physically transfer the files to their local machine. Users can remotely access, read, write, and modify files as if they were stored locally on their own computer. <b>Some HPC systems may have the Remote File System (RFS) pre-installed and configured, while others may not.</b>

Learn more from the hands-on tutorials in the <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-0-remote-data-preview" target="_blank">07. Data Acquisition and Wrangling: Remote Data Access: <b>Remote Data Preview</b> (without Downloading)  ⤴</a> section of this workbook:
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-1-tutorial-view-text-files-unix" target="_blank">Viewing Text Files using UNIX commands  ⤴</a>
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-2-tutorial-view-pdf-files-x11" target="_blank">Viewing PDF Files using X11 SSH connection  ⤴</a>
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-3-tutorial-mount-remote-folder" target="_blank">Mounting Remote Folder on Local Machine  ⤴</a>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If the HPC system already has RFS pre-configured, the user may simply need to follow the appropriate steps to access the remote file system, such as <b>mounting the file system and logging in with their credentials</b>. The specific steps and commands required to access the RFS will vary depending on the operating system and RFS implementation being used.
</span>
</div><br>

---

<span style="color: #ff3870;font-weight: 500;">To learn more about remote access and data manipulation, go to Section <a href="https://datascience.101workbook.org/07-DataParsing/00-DataParsing-LandingPage" target="_blank">07. Data Acquisition and Wrangling  ⤴</a> in this workbook:</span>
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/01-remote-data-access" target="_blank">1. Remote Data Access  ⤴</a>
* <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-data-manipulation" target="_blank">2. Data Manipulation  ⤴</a>
* <a href="https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/00-data-wrangling-apps" target="_blank">3. Data Wrangling: ready-made apps  ⤴</a>

___
# Further Reading
* [2.1 Virtual Private Network (VPN) Connection](02-virtual-private-network.md)
* [2.2 Secure Shell Connection (SSH)](03-secure-shell-connection.md)
* [2.3 Open On Demand (OOD) Connection](04-open-on-demand.md)
* <i>learn more about [Remote Data Access in section 7: Data Acquisition and Wrangling](../../07-DataParsing/01-FILE-ACCESS/01-remote-data-access)</i>

* [3. Setting up Your Home Directory for Data Analysis](../03-HOME-DIRECTORY/00-setting-up-home-directory)
* [4. Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [5. Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [6. Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](../01-HPC-NETWORKS/01-introduction-to-hpc-infrastructure){: .btn  .btn--primary}
[Next](02-virtual-private-network){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
