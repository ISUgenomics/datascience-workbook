---
title: "Remote Access to HPC resources"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "intro"
order: 621
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Remote access to the contents stored on remote machines refers to the ability for a user to **access, view, and manipulate files, data, and software available on another computer**, including servers, databases, and HPC systems. This can be accomplished **from anywhere over a network connection** such as the Internet. Though, the user **must have the necessary permissions** and credentials to access the remote machine and its contents. In particular, there are several ways to access remotely the resources available on high-performance computing (HPC) clusters.

<div class="warning" markdown="1">
It is important to note that **accessing data on an HPC cluster remotely can be slower** than accessing data locally, due to the added latency of transmitting data over the network.
<base class="mb"> In addition, users may **need to be granted access** to the HPC cluster in order to use it remotely.
</div>


## **1. VPN (Virtual Private Network)**

<div class="note" markdown="1">
VPN is a technology that allows users to securely access a private network over the Internet. VPNs can be used to access remote files and data stored on remote computers within the same network. VPNs protect users data from being intercepted or monitored by unauthorized parties <b>while login from off-campus</b>.
</div>

<button class="btn more"></button> *...from the hands-on tutorial <a class="t-links" href="622"></a>* <base class="mt">

**Jump to solution to get started with:**
* <a href="https://scinet.usda.gov/guides/access/vpn#scinet-vpn" target="_blank">VPN access to Atlas and Ceres  ⤴</a> computing clusters of the <a class="t-links" href="612.1">SCINet Scientific Computing</a>
* <a href="http://vpn.iastate.edu/" target="_blank">VPN access to Nova and Condo  ⤴</a> computing clusters of the <a class="t-links" href="613.1"></a>


## **2. SSH (Secure Shell connection)**

<div class="note" markdown="1">
With SSH, a cryptographic network protocol, users can connect to the cluster and then browse, manipulate, and execute files as if they were sitting at the terminal of a computer on the cluster.
</div>

<button class="btn more"></button> *...from the hands-on tutorials in the <a class="t-links" href="623"></a>* <base class="mt">

**Jump to solution to get started with:**
  * <a class="t-links" href="612.2" section="#3-terminal-access">SSH access to Atlas</a> computing cluster of the <a class="t-links" href="612.1">SCINet HPC system</a>
  * <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">SSH access to Ceres</a> computing cluster of the <a class="t-links" href="612.1">SCINet HPC system</a>
  * <a class="t-links" href="613.3" section="#access-and-login">SSH access to Nova</a> computing cluster of the <a class="t-links" href="613.1">ISU HPC system</a>


## **3. Remote web-based access**

<div class="note" markdown="1">
Some HPC clusters may also provide web-based interfaces (e.g., <a href="https://openondemand.org" target="_blank">Open OnDemand  ⤴</a>) for remotely accessing and managing data. It allows users to submit computing jobs to the HPC queueing system through a web interface or API, without the need for command line login to the underlying infrastructure.
</div>

<button class="btn more"></button> *...from the hands-on tutorial <a class="t-links" href="624"></a>* <base class="mt">

**Jump to solution to get started with:**
  * <a class="t-links" href="612.2" section="#open-ondemand-login">OOD access to Atlas</a> computing cluster of the <a class="t-links" href="612.1">SCINet HPC system</a>
  * <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres</a> computing cluster of the <a class="t-links" href="612.1">SCINet HPC system</a>
  * <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the <a class="t-links" href="613.1">ISU HPC system</a>


## **4. Remote desktop software**

<div class="note" markdown="1">
VNC (<a href="https://en.wikipedia.org/wiki/Virtual_Network_Computing" target="_blank">Virtual Network Computing  ⤴</a>) or RDP (<a href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" target="_blank">Remote Desktop Protocol  ⤴</a> by Microsoft) allow users to remotely access and control a desktop (graphical user interface) on another computer, including some clusters.
</div>


## **5. RFS (Remote File System)**

<div class="note" markdown="1">
<a href="https://en.wikipedia.org/wiki/Remote_File_Sharing" target="_blank">RFS protocol  ⤴</a> is often used in computing clusters to connect multiple nodes together over a high-speed network. By using an RFS protocol, nodes in a cluster can access data stored on other nodes as if it were stored locally, which simplifies data access and eliminates the need to physically transfer large amounts of data between nodes. This can improve the performance and scalability of the cluster, and allows the nodes to work together more efficiently.
</div>

<b>RFS protocol allows users to access files stored on a remote computer</b>, without having to physically transfer the files to their local machine. Users can remotely access, read, write, and modify files as if they were stored locally on their own computer. <b>Some HPC systems may have the Remote File System (RFS) pre-installed and configured, while others may not.</b>

<div class="more" markdown="1">
...from the hands-on tutorials in the <a class="t-links" href="714">Remote data preview (without downloading)</a> section of this workbook:
* <a class="t-links" href="714.1"></a>
* <a class="t-links" href="714.2"></a>
* <a class="t-links" href="714.3"></a>
* <a class="t-links" href="714.4"></a>
</div>

<div class="protip" markdown="1">
If the HPC system already has RFS pre-configured, the user may simply need to follow the appropriate steps to access the remote file system, such as **mounting the file system and logging in with their credentials**. The specific steps and commands required to access the RFS will vary depending on the operating system and RFS implementation being used.
</div>


<div class="more" markdown="1">
...about remote access and data manipulation, go to section <a class="t-links" href="700"></a> in this workbook:
* <a class="t-links" href="711">1. Remote data access</a>
* <a class="t-links" href="720">2. Data manipulation</a>
* <a class="t-links" href="731">3. Data wrangling: use ready-made apps</a>
</div>
