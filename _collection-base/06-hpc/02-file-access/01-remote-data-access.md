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

---


# Introduction

Remote access to the contents stored on remote machines refers to the ability for a user to **access, view, and manipulate files, data, and software available on another computer**, including servers, databases, and HPC systems. This can be accomplished **from anywhere over a network connection** such as the Internet. Though, the user **must have the necessary permissions** and credentials to access the remote machine and its contents. In particular, there are several ways to access remotely the resources available on high-performance computing (HPC) clusters.

<div class="warning" markdown="1">
It is important to note that **accessing data on an HPC cluster remotely can be slower** than accessing data locally, due to the added latency of transmitting data over the network.
<base class="mb"> In addition, users may **need to be granted access** to the HPC cluster in order to use it remotely.
</div>


## **1. VPN (Virtual Private Network)**

<i>VPN is a technology that allows users to securely access a private network over the Internet. VPNs can be used to access remote files and data stored on remote computers within the same network. VPNs protect users data from being intercepted or monitored by unauthorized parties <b>while login from off-campus</b>. Learn more from the hands-on tutorial</i> {% include target_link href=622 text="Virtual Private Network (VPN) Connection" %}

<br><br>
**Jump to solution to get started with:**
* <a href="https://scinet.usda.gov/guides/access/vpn#scinet-vpn" target="_blank">VPN access to Atlas and Ceres  ⤴</a> computing clusters of the {% include target_link href=612.1 text="SCINet Scientific Computing (HPC)" %}
* <a href="http://vpn.iastate.edu/" target="_blank">VPN access to Nova and Condo  ⤴</a> computing clusters of the {% include target_link href=613.1 text="ISU HPC Network" %}

## **2. SSH (Secure Shell connection)**

<i>With SSH, a cryptographic network protocol, users can connect to the cluster and then browse, manipulate, and execute files as if they were sitting at the terminal of a computer on the cluster. Learn more from the hands-on tutorials in the</i> {% include target_link href=623 text="Secure Shell Connection (SSH)" %}

<br><br>
**Jump to solution to get started with:**
  * {% include target_link href=612.2 section="#3-terminal-access" text="SSH access to Atlas" %} computing cluster of the {% include target_link href=612.1 text="SCINet HPC system" %}
  * <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">SSH access to Ceres</a> computing cluster of the {% include target_link href=612.1 text="SCINet HPC system" %}
  * {% include target_link href=613.3 section="#access-and-login" text="SSH access to Nova" %} computing cluster of the {% include target_link href=613.1 text="ISU HPC system" %}


## **3. Remote web-based access**

<i>Some HPC clusters may also provide web-based interfaces (e.g., <a href="https://openondemand.org" target="_blank">Open OnDemand  ⤴</a>) for remotely accessing and managing data. It also allows users to submit computing jobs to the HPC queueing system through a web interface or API, without the need for command line login to the underlying infrastructure. Learn more from the hands-on tutorial</i> {% include target_link href=624 text="Open On Demand (OOD) Connection" %}

<br><br>
**Jump to solution to get started with:**
  * {% include target_link href=612.2 section="#open-ondemand-login" text="OOD access to Atlas" %} computing cluster of the {% include target_link href=612.1 text="SCINet HPC system" %}
  * <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres</a> computing cluster of the {% include target_link href=612.1 text="SCINet HPC system" %}
  * <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the {% include target_link href=613.1 text="ISU HPC system" %}

## **4. Remote desktop software**

<i>VNC (<a href="https://en.wikipedia.org/wiki/Virtual_Network_Computing" target="_blank">Virtual Network Computing  ⤴</a>) or RDP (<a href="https://en.wikipedia.org/wiki/Remote_Desktop_Protocol" target="_blank">Remote Desktop Protocol  ⤴</a> by Microsoft) allow users to remotely access and control a desktop (graphical user interface) on another computer, including some clusters.</i>

## **5. RFS (Remote File System)**

<i><a href="https://en.wikipedia.org/wiki/Remote_File_Sharing" target="_blank">RFS protocol  ⤴</a> is often used in computing clusters to connect multiple nodes together over a high-speed network. By using an RFS protocol, nodes in a cluster can access data stored on other nodes as if it were stored locally, which simplifies data access and eliminates the need to physically transfer large amounts of data between nodes. This can improve the performance and scalability of the cluster, and allows the nodes to work together more efficiently.</i>

<b>RFS protocol allows users to access files stored on a remote computer</b>, without having to physically transfer the files to their local machine. Users can remotely access, read, write, and modify files as if they were stored locally on their own computer. <b>Some HPC systems may have the Remote File System (RFS) pre-installed and configured, while others may not.</b>

Learn more from the hands-on tutorials in the {% include target_link href=714 text="Remote data preview (without downloading)" %} section of this workbook:
* {% include target_link href=714.1 text="Viewing text files using UNIX commands" %}
* {% include target_link href=714.2 text="Viewing PDF files using X11 SSH connection" %}
* {% include target_link href=714.3 text="Viewing graphics in a terminal as the text-based ASCII art" %}
* {% include target_link href=714.4 text="Mounting remote folder on a local machine" %}

<div class="protip" markdown="1">
If the HPC system already has RFS pre-configured, the user may simply need to follow the appropriate steps to access the remote file system, such as **mounting the file system and logging in with their credentials**. The specific steps and commands required to access the RFS will vary depending on the operating system and RFS implementation being used.
</div>

---

<span style="color: #ff3870;font-weight: 500;">To learn more about remote access and data manipulation, go to section</span> {% include target_link href=700 text="07: Data Acquisition and Wrangling" %} in this workbook:
* {% include target_link href=711 text="1. Remote data access" %}
* {% include target_link href=720 text="2. Data manipulation" %}
* {% include target_link href=731 text="3. Data wrangling: use ready-made apps" %}
