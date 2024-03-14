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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

Remote data preview refers to the ability to **view data that is stored in a remote location** without having to download or transfer the entire dataset to a local machine. In general, there are two main approaches for remote data preview:
<ul>
<li><b>using graphical interfaces</b>, including:</li>
  <ul>
  <li><b>web-based interfaces:</b> <br>
  <i>Many cloud-based platforms and data storage systems offer web-based interfaces that allow users to preview data stored remotely through a web browser. These interfaces may include visualizations, charts, or other tools that allow users to explore the data in real-time.</i> <br> <span style="color: #ff3870; font-weight: 500;">To learn more visit the tutorial</span> {% include target_link href=624 text="web-based Open OnDemand (OOD) connection to HPC" %}</li>
  <li><b>remote desktop</b> <br>
  <i>Users can remotely access a desktop or computer that is physically located where the data is stored, allowing them to work with the data as if it were stored locally. This requires a stable internet connection and may require additional software or configurations.</i></li>
  <li><b>virtual machines:</b> <br>
  <i>Some cloud-based platforms offer virtual machines that allow users to access and interact with data stored remotely through a virtual desktop. This can be especially useful for users who need to work with large datasets or complex analysis tools that require significant processing power.</i></li>
  </ul>
<li><b>using command line interfaces</b>, including:</li>
  <ul>
  <li> {% include target_link href=714.1 text="<b>Viewing text files</b>" %} <b>using UNIX commands on a remote machine</b></li>
  <li> {% include target_link href=714.2 text="<b>Viewing PDF files</b>" %} <b>using X11 SSH connection</b></li>
  <li> {% include target_link href=714.3 text="<b>Viewing graphic files</b>" %} <b>on remote machine as the ASCII art in the terminal</b></li>
  <li> {% include target_link href=714.4 text="<b>Mounting remote folder</b>" %} <b>on local machine using SSH connection</b></li>
  </ul>
</ul>


<span style="color: #ff3870; font-weight: 500;">This section will focus on command line approaches for previewing remote data</span>, as they are universally applicable and reliable for accessing data stored across a variety of High-Performance Computing (HPC) systems. We encourage readers to explore these command line approaches by participating in hands-on tutorials listed in the [Further Reading](#further-reading) section.

## *Why it's good to preview remotely?*

Command line approaches for **previewing remote data can be especially useful** for users in scientific fields, where large datasets are common, and access to High-Performance Computing (HPC) systems is necessary. Remote viewing offers significant advantages in terms of speed, efficiency, and security. Here are some examples of cases where using command line approaches for previewing data stored remotely can be practical:

* **Previewing PDF files** <br>
<i>In scientific research, it's common to generate reports, publications, and other documents in PDF format. Command line approaches like X11 SSH connection allow users to preview PDF files remotely without downloading or transferring them to a local machine.</i> <br> <span style="color: #ff3870; font-weight: 500;">To learn more visit the tutorial</span> {% include target_link href=714.2 text="Viewing PDF files using X11 SSH connection" %}

* **Previewing graphic files** <br>
*Graphics are often used in scientific research, including charts, graphs, and images. Command line approaches like mounting a remote folder using `sshfs` allow users to view graphic files remotely without downloading or transferring them to a local machine.* <br> <span style="color: #ff3870; font-weight: 500;">To learn more visit the tutorials:</span>
<ul><ul>
<li> {% include target_link href=714.3 text="Viewing Graphic Files on remote machine as the ASCII art in the terminal" %} </li>
<li> {% include target_link href=714.4 text="Mounting remote folder on a local machine" %} </li>
</ul></ul>

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
