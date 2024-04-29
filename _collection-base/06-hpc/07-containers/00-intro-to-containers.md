---
title: "Introduction to containers"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "intro"
order: 670
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

## What are Containers?
Containers are a form of operating system virtualization that allows multiple applications to run on a single host system. At its core, container is a technology that enables you to package and run applications in isolated environments.

<div class="note" markdown="1">
A container image is a file that contains the application code, libraries, and dependencies required to run an application. It can be used directly via a container platform to run an application without installation.
</div>

Containers are a powerful tool that are widely used in various fields including Genomics, High-performance Computing and Machine Learning.
<div class="example before" data-before="" markdown="1">
For example, a researcher might use containers for doing a simple blast locally or for running an entire genome assembly pipeline.
</div>

*This page provides an introduction to container technology and you can refer to the <a class="t-links" href="671.1">Apptainer (singularity rebranding)</a> and <a class="t-links" href="672.1">Docker</a> tutorial pages in this <a href="https://datascience.101workbook.org" target="_blank">workbook  ⤴</a> to get started with using containers with these platforms.*
<br>


## Benefits of Containers
* <b>Platform independent</b>: The best benefit of using containers is the portability between different systems. Containers can be used on any system that supports the container runtime without making changes to the container.
* <b>Consistency</b>: Provide a consistent environment for an application, including its dependencies, ensuring that it runs the same way on different systems.
* <b>Efficiency</b>: Reduced hardware requirements as they do not require a separate operating system (OS) for each application making them efficient and fast.
* <b>Isolation</b>: Provide isolation between applications, ensuring that they do not interfere with each other and do not have access to each other's resources. If one container fails, it does not affect others running on the same system.
* <b>Scalability</b>: Containers are easily scalable, making them ideal for application development.
<br>


## Container Platforms
A container platform is a software platform that provides an environment for running and managing containerized applications. Some of these are also workflow management tools that are used to automate tasks, improve efficiency, and ensure consistency in processes.

<table>
  <tr><td><a class="t-links" href="671.2">Singularity</a>(archival)</td> <td>is an open-source platform for high-performance computing clusters. It is designed to meet the specific needs of HPC, providing improved performance, security, and compatibility with HPC environments.</td> </tr>
  <tr><td><a class="t-links" href="672.1">Docker</a></td> <td>is an open-source platform that automates the deployment of applications inside containers. It provides a way to package, deploy, and run applications in isolated environments using containers.</td> </tr>
  <tr><td><a href="https://bioinformaticsworkbook.org/dataAnalysis/nextflow/01_introductionToNextFlow.html#gsc.tab=0" target="_blank"><b>Nextflow</b> ⤴</a></td> <td>is a workflow platform for automating data-driven pipelines. It provides a way to define and execute pipelines using a simple, high-level language, and provides built-in support for containers and cloud computing.</td> </tr>
  <tr><td><a href="https://kubernetes.io/" target="_blank"><b>Kubernetes</b> ⤴</a></td> <td>is an open-source platform for automating the deployment, scaling, and management of containerized applications. It provides a unified platform for deploying, scaling, and managing containers, and provides a way to orchestrate and manage the entire container lifecycle.</td> </tr>
  <tr><td></td> <td>Other tools used for containers include <a href="https://linuxcontainers.org/lxd/" target="_blank">LXD ⤴</a>, <a href="https://github.com/rkt/rkt" target="_blank">rkt ⤴</a>, <a href="https://podman.io/" target="_blank">Podman ⤴</a>, etc.</td> </tr>
</table>


## Virtual Machines vs Containers
Virtual Machines (VMs) and Containers are software technologies that can be used to run software in isolated environments and manage applications. Container sofware examples like Docker were discussed above, some examples of VM software include VMWare, VirtualBox, Parallels Desktop, Citrix, and Hyper-V.

**VMs and containers differ in several key ways:**

<table>
  <tr><th>Resource Utilization</th> <td>Virtual machines run a complete OS for each application, which can consume a large amount of system resources such as memory and storage. In contrast, containers share the host operating system making them much more resource-efficient.</td></tr>
  <tr><th>Isolation</th> <td>VMs provide full isolation, as each machine has its own OS and file system. Containers provide process-level isolation, meaning they share the host OS kernel but have their isolated file system.</td></tr>
  <tr><th>Portability</th> <td>Containers are much more portable, as can run on any system that supports container runtime, compared to VMs which require a compatible hypervisor/Virtual Machine Monitor (VMM) to run.</td></tr>
  <tr><th>Start-up Time</th> <td>Virtual machines have longer start-up time, as they need to boot a complete OS but Containers do not need an OS boot.</td></tr>
  <tr><th>Scalability</th> <td>Containers are designed to be easily scalable, making it simple to add more resources to an application as it grows but Virtual machines can be more challenging to scale.</td></tr>
</table>

In summary, containers offer a more resource-efficient and portable solution, with faster start-up times and easier scalability than virtual machines. However, virtual machines provide a higher level of isolation, as they run a complete operating system for each application. The choice between containers and virtual machines depends on the specific requirements of the application and the deployment environment.
<br>
<br>
