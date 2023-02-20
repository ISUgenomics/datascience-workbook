---
title: "Introduction to Containers"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../00-IntroToHPC-LandingPage.md) / **7. Introduction to Containers**

---

# Introduction

## What are Containers?
Containers are a technology used to package and run applications in isolated environments. Containers are a form of operating system virtualization that allows multiple applications to run on a single host system, isolated from one another. Each container includes the application code, libraries, and dependencies required to run the application. Containers are widely used in various fields, providing a convenient and efficient way to package, distribute, and deploy applications. Some common areas where containers are used are: Software Development, Microservices, Cloud Computing, Continuous Integration and Deployment (CI/CD), Big Data Analytics, and Internet of Things (IoT).


## Benefits of Containers
* <b>Platform independent</b>: The best benefit of using containers is the portability between different systems. Containers can be used on any system that supports the container runtime without making changes to the container.
* <b>Consistency</b>: Provide a consistent environment for an application, including its dependencies, ensuring that it runs the same way on different systems.
* <b>Efficiency</b>: Reduced hardware requirements as they do not require a separate operating system (OS) for each application making them efficient and fast.
* <b>Isolation</b>: Provide isolation between applications, ensuring that they do not interfere with each other and do not have access to each other's resources. If one container fails, it does not affect others running on the same system.
* <b>Scalability</b>: Containers are easily scalable, making them ideal for application development.


## Virtual Machines vs Containers
Virtual Machines (VMs) and containers are both ways to run software in isolated environments, but they differ in several key ways:
* <b>Resource Utilization</b>: Virtual machines run a complete OS for each application, which can consume a large amount of system resources such as memory and storage. In contrast, containers share the host operating system and only include the libraries and dependencies required for the specific application, making them much more resource-efficient.
* <b>Isolation</b>: Virtual machines provide full isolation, as each machine has its own OS, file system, and network stack. Containers provide process-level isolation, meaning they share the host OS kernel but have their isolated file system and network stack.
* <b>Portability</b>: Virtual machines are less portable, requiring a compatible hypervisor/Virtual Machine Monitor (VMM) to run. Containers, on the other hand, can run on any system that supports container runtime, making them much more portable.
* <b>Start-up Time</b>: Virtual machines have longer start-up time, as they need to boot a complete OS but Containers do not need an OS boot.
* <b>Scalability</b>: Containers are designed to be easily scalable, making it simple to add more resources to an application as it grows but Virtual machines can be more challenging to scale.

In summary, containers offer a more resource-efficient and portable solution, with faster start-up times and easier scalability than virtual machines. However, virtual machines provide a higher level of isolation, as they run a complete operating system for each application. The choice between containers and virtual machines depends on the specific requirements of the application and the deployment environment.



## Container Platforms and Workflows

* <a href="https://datascience.101workbook.org/06-IntroToHPC/07-CONTAINERS/01-SINGULARITY/01-singularity-basics" target="_blank"><b>Singularity</b> ⤴</a>: is an open-source platform for high-performance computing clusters. It is designed to meet the specific needs of HPC, providing improved performance, security, and compatibility with HPC environments.

* <a href="https://datascience.101workbook.org/06-IntroToHPC/07-CONTAINERS/02-DOCKER/01-docker-basics" target="_blank"><b>Docker</b> ⤴</a>: is an open-source platform that automates the deployment of applications inside containers. It provides a way to package, deploy, and run applications in isolated environments using containers.

*  <a href="https://bioinformaticsworkbook.org/dataAnalysis/nextflow/01_introductionToNextFlow.html#gsc.tab=0" target="_blank"><b>Nextflow</b> ⤴</a>: is a workflow platform for automating data-driven pipelines. It provides a way to define and execute pipelines using a simple, high-level language, and provides built-in support for containers and cloud computing.

* <b>Kubernetes</b>: is an open-source platform for automating the deployment, scaling, and management of containerized applications. It provides a unified platform for deploying, scaling, and managing containers, and provides a way to orchestrate and manage the entire container lifecycle.

* Other tools used for running containers include LXD, rkt, Podman, Docker Compose, Helm, etc.




___
# Further Reading
* [7.1 Singularity](01-SINGULARITY/01-singularity-basics)
* [7.2 Docker](02-DOCKER/01-docker-basics)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../06-PARALLEL/01-introduction-to-gnu-parallel){: .btn  .btn--primary}
[Next](01-SINGULARITY/01-singularity-basics){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
