---
title: "Remote Data Preview without Downloading"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / **1.3 Remote Data Preview without Downloading**

---


# Introduction

Remote data preview refers to the ability to **view data that is stored in a remote location** without having to download or transfer the entire dataset to a local machine. In general, there are two main approaches for remote data preview:
* **using graphical interfaces**, including:

  * **web-based interfaces:** <br>
  <i>Many cloud-based platforms and data storage systems offer web-based interfaces that allow users to preview data stored remotely through a web browser. These interfaces may include visualizations, charts, or other tools that allow users to explore the data in real-time.</i> <br> <span style="color: #ff3870;font-weight: 500;">To learn more visit the tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/04-open-on-demand" target="_blank">web-based Open OnDemand (OOD) Connection to HPC</a></span>

  * **remote desktop** <br>
  <i>Users can remotely access a desktop or computer that is physically located where the data is stored, allowing them to work with the data as if it were stored locally. This requires a stable internet connection and may require additional software or configurations.</i>

  * **virtual machines:** <br>
  <i>Some cloud-based platforms offer virtual machines that allow users to access and interact with data stored remotely through a virtual desktop. This can be especially useful for users who need to work with large datasets or complex analysis tools that require significant processing power.</i>

* **using command line interfaces**, including:

  * **[Viewing Text Files](04-1-tutorial-view-text-files-unix) using UNIX commands on a remote machine**
  * **[Viewing PDF Files](04-2-tutorial-view-pdf-files-x11) using X11 SSH connection**
  * **[Viewing Graphic Files](04-3-tutorial-view-graphic-files-terminal) on remote machine as the ASCII art in the terminal**
  * **[Mounting Remote Folder](04-4-tutorial-mount-remote-folder) on local machine using SSH connection**


<span style="color: #ff3870;font-weight: 500;">This section will focus on command line approaches for previewing remote data</span>, as they are universally applicable and reliable for accessing data stored across a variety of High-Performance Computing (HPC) systems. We encourage readers to explore these command line approaches by participating in hands-on tutorials listed in the [Further Reading](#further-reading) section.

## *Why it's good to preview remotely?*

Command line approaches for **previewing remote data can be especially useful** for users in scientific fields, where large datasets are common, and access to High-Performance Computing (HPC) systems is necessary. Remote viewing offers significant advantages in terms of speed, efficiency, and security. Here are some examples of cases where using command line approaches for previewing data stored remotely can be practical:

* **Previewing PDF files** <br>
<i>In scientific research, it's common to generate reports, publications, and other documents in PDF format. Command line approaches like X11 SSH connection allow users to preview PDF files remotely without downloading or transferring them to a local machine.</i> <br> <span style="color: #ff3870;font-weight: 500;">To learn more visit the tutorial <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-2-tutorial-view-pdf-files-x11" target="_blank">Viewing PDF Files using X11 SSH connection  ⤴</a></span>

* **Previewing graphic files** <br>
<i>Graphics are often used in scientific research, including charts, graphs, and images. Command line approaches like mounting a remote folder using sshfs allow users to view graphic files remotely without downloading or transferring them to a local machine.</i> <br> <span style="color: #ff3870;font-weight: 500;">To learn more visit the tutorials:
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-3-tutorial-view-graphic-files-terminal" target="_blank">Viewing Graphic Files on remote machine as the ASCII art in the terminal  ⤴</a></span>
* <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-4-tutorial-mount-remote-folder" target="_blank">Mounting Remote Folder on Local Machine  ⤴</a></span>

* **Quick view to find information needed** <br>
<i>When working on remote HPC systems, it can be challenging to find the specific information needed quickly. Command line approaches allow users to preview the data and code, and use text processing tools to quickly search and extract relevant information.</i>

* **Distant collaboration** <br>
<i>When collaborating with colleagues in remote locations, it can be difficult to share and access data. Command line approaches allow users to preview data stored remotely and collaborate in real-time on the same data copy.</i>

* **Exploring large datasets** <br>
<i>When working with large datasets, downloading or transferring the entire dataset to a local machine for analysis can be impractical or impossible. Command line approaches allow users to quickly preview and explore the data without the need to download or transfer the entire dataset.</i>

* **Working with sensitive data** <br>
<i>Some datasets may be sensitive and cannot be transferred or downloaded to a local machine. Command line approaches allow users to access and preview the data remotely.</i>

* **Viewing remote logs or error messages** <br>
<i>When running jobs on HPC systems, you may want to review job status, issues, or error messages remotely to troubleshoot issues or resubmit the task.</i>


___
# Further Reading
* [1.3.1 Viewing Text Files using UNIX commands](04-1-tutorial-view-text-files-unix)
* [1.3.2 Viewing PDF Files using X11 SSH connection](04-2-tutorial-view-pdf-files-x11)
* [1.3.3 Viewing Graphic Files using ASCII art in the termianl](04-3-tutorial-view-graphic-files-terminal)
* [1.3.4 Mounting Remote Folder on Local Machine](04-4-tutorial-mount-remote-folder)

* [2. Data Manipulation](../02-DATA-MANIPULATION/01-data-manipulation)
* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](03-4-tutorial-download-github-folders-svn){: .btn  .btn--primary}
[Next](04-1-tutorial-view-text-files-unix){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
