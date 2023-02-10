---
title: "Remote Access to HPC resources"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

# Overview

Remote access to the contents stored on remote machines refers to the ability for a user to **access, view, and manipulate files, data, and software available on another computer**, including servers, databases, and HPC systems. This can be accomplished **from anywhere over a network connection** such as the Internet. Though, the user **must have the necessary permissions** and credentials to access the remote machine and its contents. In particular, there are several ways to access remotely the resources available on high-performance computing (HPC) clusters.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It is important to note that <b>accessing data on an HPC cluster remotely can be slower</b> than accessing data locally, due to the added latency of transmitting data over the network. <br><br>In addition, users may <b>need to be granted access</b> to the HPC cluster in order to use it remotely.
</span>
</div>


## **1. VPN (Virtual Private Network)**

<i>VPN is a technology that allows users to securely access a private network over the Internet. VPNs can be used to access remote files and data stored on remote computers within the same network. VPNs protect users data from being intercepted or monitored by unauthorized parties <b>while login from off-campus</b>.</i>

* learn about <a href="https://scinet.usda.gov/guides/access/vpn#scinet-vpn" target="_blank">VPN access to Atlas and Ceres  ⤴</a> computing clusters of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
* learn about <a href="http://vpn.iastate.edu/" target="_blank">VPN access to Nova and Condo  ⤴</a> computing clusters of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>

## **2. SSH (Secure Shell connection)**

*With SSH, a cryptographic network protocol, users can connect to the cluster and then browse, manipulate, and execute files as if they were sitting at the terminal of a computer on the cluster. Learn more from the hands-on tutorials in the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a> section of this workbook.*
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#3-terminal-access" target="_blank">SSH access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">SSH access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster#access-and-login" target="_blank">SSH access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>


## **3. Remote web-based access**

*Some HPC clusters may also provide web-based interfaces (e.g., <a href="https://openondemand.org" target="_blank">Open OnDemand  ⤴</a>) for remotely accessing and managing data.*
  * learn about <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#open-ondemand-login" target="_blank">OOD access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>
  * learn about <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a>

## **4. Remote desktop software**

<i>VNC (<a href="https://en.wikipedia.org/wiki/Virtual_Network_Computing" target="_blank">Virtual Network Computing  ⤴</a>) or RDP (<a href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" target="_blank">Remote Desktop Protocol  ⤴</a> by Microsoft) allow users to remotely access and control a desktop (graphical user interface) on another computer, including some clusters.</i>

## **5. RFS (Remote File System)**

<i><a href="https://en.wikipedia.org/wiki/Remote_File_Sharing" target="_blank">RFS protocol  ⤴</a> is often used in computing clusters to connect multiple nodes together over a high-speed network. By using an RFS protocol, nodes in a cluster can access data stored on other nodes as if it were stored locally, which simplifies data access and eliminates the need to physically transfer large amounts of data between nodes. This can improve the performance and scalability of the cluster, and allows the nodes to work together more efficiently.

<b>RFS protocol allows users to access files stored on a remote computer</b>, without having to physically transfer the files to their local machine. Users can remotely access, read, write, and modify files as if they were stored locally on their own computer. <b>Some HPC systems may have the Remote File System (RFS) pre-installed and configured, while others may not.</b></i>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If the HPC system already has RFS pre-configured, the user may simply need to follow the appropriate steps to access the remote file system, such as <b>mounting the file system and logging in with their credentials</b>. The specific steps and commands required to access the RFS will vary depending on the operating system and RFS implementation being used.
</span>
</div><br>

---

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
