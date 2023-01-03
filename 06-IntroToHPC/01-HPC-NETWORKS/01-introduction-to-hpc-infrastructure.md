---
title: "Introduction to HPC infrastructure"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

## Introduction

High-performance computing (**HPC**) is a type of **computing infrastructure** that involves using specialized systems and software **to solve complex problems that require a lot of computing power**. The tasks are often too large or too complex to be solved on a single computer or with traditional computing methods. To tackle these problems, HPC systems use advanced techniques such as **parallel processing**, which involves dividing a computational task into smaller pieces and solving them simultaneously on different computers or processors.

### HPC infrastructure

HPC infrastructure often consists of **clusters of computers** that are connected together and **work in parallel** to solve a problem, and they may also **use specialized hardware** such as graphics processing units (GPUs) or field-programmable gate arrays (FPGAs) **to accelerate performance**. Some HPC systems are **located in specialized facilities called "*data centers*"**, which are designed to house and maintain large numbers of computers and other equipment. These data centers may be owned and operated by research institutions, government agencies, or private companies. In some cases, HPC systems may be distributed across multiple locations (*e.g., SCINet HPC*), with each location contributing its own resources to the network (*e.g., computing nodes, large scale storage, high-speed network*).

![](../assets/images/01_hpc_system.png)<br>
*The figure shows the data center of computing clusters, where thousands of computing processors are organized in properly cooled and secured cabinets. Many HPC systems are accessed via the internet with a web browser-based interface. The outsourced tasks are referred to as cloud computing which provides many benefits.*

There are several benefits to using high-performance computing (HPC) systems:

* **speed** - much faster than traditional computers, and they can solve complex problems much more quickly;
* **accuracy**  - ability to perform calculations with greater accuracy and precision than traditional computers;
* **capacity** - much larger capacity than traditional computers, which means they can handle larger datasets and more complex problems;
* **versatility** - ability to solve a wide range of problems, from analyzing financial data to simulating complex physical phenomena;
* **collaboration** - allow researchers and scientists from different locations to work together and share resources, which can facilitate collaboration and accelerate the pace of research and discovery;
* **cost savings** - using an HPC system may be more cost-effective than buying and maintaining multiple traditional computers to solve a complex problem.

### HPC system access

To access an HPC system, users will typically need to **create an account** and authenticate themselves using a username and password. Then, there are a few different ways to access high-performance computing (HPC) systems:
* **on-site access:** *Some HPC systems are located in facilities that are open to researchers and scientists, who can use the system in person. In these cases, users will typically need to apply for access and may need to meet certain eligibility requirements.*
* **remote access:** *Many HPC systems can be accessed remotely via the internet. In these cases, users can submit jobs to the system and access the results from their own computers using secure shell connection (<a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">SSH protocol  ⤴</a>).*
* **cloud computing:** Additionally, some HPC systems are available for use by researchers and scientists via cloud computing platforms, which allow users to access computing resources over the internet (*e.g., Open On Demand access*).

There are some national or international research and education HPC networks that provide access to a wide range of computing resources (*see section [Examples of HPC Infrastructure
](https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/01-introduction-to-hpc-infrastructure#examples-of-hpc-infrastructure)*). Usually, researchers and scientists may be able to access it for free as part of a research project or grant. In commercial cases, users may need to pay a fee to use an HPC system.



### HPC tasks

HPC systems are an essential tool for solving many of the most challenging computational problems facing society today. They are used in a variety of fields, including science, engineering, finance, and government, to analyze and model data and phenomena that are large and complex. Some examples include:

* **Bioinformatics** <br>*HPC systems are used to analyze and interpret large amounts of data from genome sequencing projects, which can help researchers understand the genetic basis of diseases and develop new treatments.*
* **Protein folding** <br>*HPC systems are used to simulate the folding of proteins, which is important for understanding how proteins function in the body and for drug discovery.*
* **Drug discovery** <br>*HPC systems are used to analyze large amounts of data and perform complex simulations to help discover new drugs and treatments.*
* **Medicine and population health** <br>*HPC systems are used to analyze and interpret medical images, such as CT scans and MRI scans, which can help doctors diagnose and treat diseases. They are also used o analyze data from clinical trials and help researchers understand the effectiveness and safety of new drugs and treatments. HPC systems are used to store, manage, and analyze electronic medical records, which can help improve patient care.*
* **Geospatial applications** <br>*HPC systems are used to analyze data from satellites and other Earth observation instruments to study the Earth's land, oceans, and atmosphere. They are also used to process, analyze, and visualize large datasets from geographic information systems (GIS), GPS and other positioning systems to create maps, enable navigation, and help researchers understand spatial patterns and trends.*
* **Climate modeling** <br> *HPC systems are used to simulate and predict the Earth's climate and weather patterns, as well as estimate the impact of earthquakes and other natural disasters.*
* **Astronomy** <br>*HPC systems are used to analyze data from telescopes and other instruments to study celestial objects and phenomena.*
* **Aeronautical design** <br>*HPC systems are used to design and test new aircraft and aerospace systems.*
* **Financial modeling** <br>*HPC systems are used to analyze large amounts of financial data and build complex models to make predictions and inform investment decisions.*

HPC systems are also used extensively in artificial intelligence (AI) and machine learning, including:
* **Natural language processing**, *to process and analyze large amounts of text data to improve natural language processing tasks such as language translation and text classification.*
* **Speech recognition**, *to analyze and interpret large amounts of data from audio recordings to improve speech recognition systems.*
* **Computer vision**, *to analyze and interpret large amounts of data from images and video to improve tasks such as object recognition and image classification.*
* **Robotics**, *to analyze and interpret data from sensors and cameras to enable robots to navigate and interact with their environment.*
* **Running simulations**, *to train large machine learning models and run simulations to test and optimize machine learning algorithms.*



## Examples of HPC Infrastructure

### XSEDE
**The Extreme Science and Engineering Discovery Environment, NSF funded project**

* go to [XSEDE Supercomputer](01-XSEDE/01-supercomputer-intro)

### SCINet
**Scientific Computing Network, USDA ARS funded project**

* go to [SCINet Network](02-SCINET/01-scient-network-intro)

### ISU HPC
**HPC clusters at Iowa State University**

* go to [ISU HPC](03-ISUHPC/01-isu-hpc-intro)






___
# Further Reading
* [XSEDE Supercomputer](01-XSEDE/01-supercomputer-intro)
* [SCINet Network](02-SCINET/01-scient-network-intro)
* [ISU HPC](03-ISUHPC/01-isu-hpc-intro)

* [SSH: Secure Shell Connection](../02-SSH/01-secure-shell-connection)
* [Remote Data Access](../03-FILE-ACCESS/01-remote-data-acces)
* [Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../00-HOME-DIRECTORY/01-bashrc){: .btn  .btn--primary}
[Next](01-XSEDE/01-supercomputer-intro){: .btn  .btn--primary}
