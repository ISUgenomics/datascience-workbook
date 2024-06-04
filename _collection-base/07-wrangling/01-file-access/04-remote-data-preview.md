---
title: "Remote data preview"
note: (without downloading)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 714
level: 2
categories: ["HPC, computing", "data-preview", "command-line", "computing-tools", "data-types"]
tags: ["graphic-files", "PDF", "text-files"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Remote data preview refers to the ability to **view data that is stored in a remote location** without having to download or transfer the entire dataset to a local machine. In general, there are two main approaches for remote data preview:
* **using Graphical Interfaces (GUI)**, including:
  * **web-based interfaces:** <br>
    *Many cloud-based platforms and data storage systems offer web-based interfaces that allow users to preview data stored remotely through a web browser. These interfaces may include visualizations, charts, or other tools for exploring the data in real-time.* <br>
    <button class="btn more mr"></button> *...from the <a class="t-links" href="624">web-based Open OnDemand (OOD) connection to HPC</a>*
  * **remote desktop** <br>
    *Users can remotely access a desktop or computer that is physically located where the data is stored, allowing them to work with the data as if it were stored locally. This requires a stable internet connection and may require additional software or configs.*
  * **virtual machines:** <br>
    *Some cloud-based platforms offer virtual machines that allow users to access and interact with data stored remotely through a virtual desktop. This can be especially useful for users who need to work with large datasets or complex analysis tools that require significant processing power.*
* **using Command Line Interfaces (CLI)**, including:
  * <a class="t-links" href="714.1">Viewing text files</a> **using UNIX commands on a remote machine**
  * <a class="t-links" href="714.2">Viewing PDF files</a> **using X11 SSH connection**
  * <a class="t-links" href="714.3">Viewing graphic files</a> **on remote machine as the ASCII art in the terminal**
  * <a class="t-links" href="714.4">Mounting remote folder</a> **on local machine using SSH connection**


<b class="c-alert">This section will focus on command line approaches for previewing remote data</b>, as they are universally applicable and reliable for accessing data stored across a variety of High-Performance Computing (HPC) systems. We encourage readers to explore these command line approaches by participating in hands-on tutorials listed in the [Further Reading](#further-reading) section.

## *Why it's good to preview remotely?*

Command line approaches for **previewing remote data can be especially useful** for users in scientific fields, where large datasets are common, and access to High-Performance Computing (HPC) systems is necessary. Remote viewing offers significant advantages in terms of speed, efficiency, and security. Here are some examples of cases where using command line approaches for previewing data stored remotely can be practical:

* **Previewing PDF files** <br>
    *In scientific research, it's common to generate reports, publications, and other documents in PDF format. Command line approaches like X11 SSH connection allow users to preview PDF files remotely without downloading or transferring them to a local machine.* <br>
    <button class="btn more mr"></button> *...from the tutorial <a class="t-links" href="714.2"></a>.*

* **Previewing graphic files** <br>
    *Graphics are often used in scientific research, including charts, graphs, and images. Command line approaches like mounting a remote folder using `sshfs` allow users to view graphic files remotely without downloading or transferring them to a local machine.* <br>
    <div class="more" markdown="1">
    To learn more visit the tutorials: <br>- <a class="t-links" href="714.3"></a><br>- <a class="t-links" href="714.4"></a>
    </div>

* **Quick view to find information needed** <br>
    *When working on remote HPC systems, it can be challenging to find the specific information needed quickly. Command line approaches allow users to preview the data and code and use text processing tools to quickly search and extract relevant information.*

* **Distant collaboration** <br>
    *When collaborating with colleagues in remote locations, it can be difficult to share and access data. Command line approaches allow users to preview data stored remotely and collaborate in real-time on the same data copy.*

* **Exploring large datasets** <br>
    *When working with large datasets, downloading or transferring the entire dataset to a local machine for analysis can be impractical or impossible. Command line approaches allow users to quickly preview and explore the data without downloading or transfer of the entire dataset.*

* **Working with sensitive data** <br>
    *Some datasets may be sensitive and cannot be transferred or downloaded to a local machine. Command line approaches allow users to access and preview the data remotely.*

* **Viewing remote logs or error messages** <br>
    *When running jobs on HPC systems, you may want to review job status, issues, or error messages remotely to troubleshoot issues or resubmit the task.*
