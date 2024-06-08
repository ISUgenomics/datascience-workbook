---
title: "Introduction to HPC infrastructure"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "intro"
order: 610
level: 1
categories: ["hpc", "command-line", "computing-tools", "parallel-computing"]
tags: ["HPC-system", "HPC-tasks", "hpc-cluster", "super-computer", "computer-power", "terminal", "SSH", "node", "core", "CPU", "GPU", "job-script", "queue", "batch", "SLURM"]
attributes: ["user-guide"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

High-performance computing (**HPC**) is a type of **computing infrastructure** that involves using specialized systems and software **to solve complex problems that require a lot of computing power**. The tasks are often too large or too complex to be solved on a single computer or with traditional computing methods. To tackle these problems, HPC systems use advanced techniques such as **parallel processing**, which involves dividing a computational task into smaller pieces and solving them simultaneously on different computers or processors.

### *HPC Terminology*

Here are some terms commonly used in the field of high-performance computing (HPC):

| term | definition |
|------|------------|
| terminal | an application that make it possible to execute programs using text-like commands |
| shell    | a shell is what provides you an interface to the unix operating system |
| SSH      | Secure Shell is a network protocol that allows remote access to the HPC system |
| cluster  | a group of computers that are connected together and work in parallel to solve a problem |
| node     | a single computer in a cluster; a set of nodes compose an HPC system <br> • login node is the node/server that users are sent to when they SSH to the system<br> • compute nodes (typically the bulk of the HPC nodes) are designed for running the computationally intensive tasks<br> • transfer nodes are designed for efficient data transmission|
| core / CPU | the computational processing unit; modern cores have hyperthreading, which allow a single core to process two tasks simultaneously (1 physical core = 2 logical cores) |
| GPU      | graphics processing unit; a specialized type of processor that is designed to accelerate graphics rendering and certain types of computations |
| job      | a computational task submitted to the batch; a unit of work that is submitted to an HPC system |
| queue    | a list of jobs that are waiting to be processed by an HPC system |
| batch    | workflows (in the queue) that require no user interaction once they are submitted to the computing node |
| slurm    | a job scheduler used to allocate resources (nodes, cores, memory) on an HPC system; the scheduler determines & optimizes which jobs should be run on which nodes |
| parallel processing | the use of multiple processors or computers to solve a problem simultaneously |

<div class="protip" markdown="1">
Taking tutorials from the section <a class="t-links" href="300"></a> is helpful before starting to use high-performance computing (HPC) systems because many HPC systems are based on Unix or a Unix-like operating system. Unix is a powerful and flexible operating system that is widely used in HPC and other technical fields. For more details, see <a class="t-links" href="320"></a> and <a class="t-links" href="325">Getting started with UNIX (video + exercises)</a>. <base class="mb">
Overall, familiarity with Unix can help users get the most out of their HPC systems and make it easier to use these systems effectively.
</div>


# HPC infrastructure

HPC infrastructure often consists of **clusters of computers** that are connected together and **work in parallel** to solve a problem, and they may also **use specialized hardware** such as graphics processing units (GPUs) or field-programmable gate arrays (FPGAs) **to accelerate performance**. Some HPC systems are **located in specialized facilities called "*data centers*"**, which are designed to house and maintain large numbers of computers and other equipment. These data centers may be owned and operated by research institutions, government agencies, or private companies. In some cases, HPC systems may be distributed across multiple locations (*e.g., SCINet HPC*), with each location contributing its own resources to the network (*e.g., computing nodes, large scale storage, high-speed network*).

![]({{ images_path }}/01_hpc_system.png)
*The figure shows the data center of computing clusters, where thousands of computing processors are organized in properly cooled and secured cabinets. Many HPC systems are accessed via the internet with a web browser-based interface. The outsourced tasks are referred to as cloud computing which provides many benefits.*

### *Why use an HPC System?*

There are several benefits to using high-performance computing (HPC) systems:

<table>
  <tr> <th>infrastructure</th> <td>provide the configured infrastructure that allow researchers to improve or make possible computationally intensive workflows</td> </tr>
  <tr> <th>speed</th> <td>much faster than traditional computers, and they can solve complex problems much more quickly</td> </tr>
  <tr> <th>accuracy</th> <td>ability to perform calculations with greater accuracy and precision than traditional computers</td> </tr>
  <tr> <th>capacity</th> <td>much larger capacity than traditional computers, which means they can handle larger datasets and more complex problems</td> </tr>
  <tr> <th>versatility</th> <td>ability to solve a wide range of problems, from analyzing financial data to simulating complex physical phenomena</td> </tr>
  <tr> <th>collaboration</th> <td>allow researchers and scientists from different locations to work together and share resources, which can facilitate collaboration and accelerate the pace of research and discovery</td> </tr>
  <tr> <th>cost savings</th> <td>using an HPC system may be more cost-effective than buying and maintaining multiple traditional computers to solve a complex problem</td> </tr>
</table>

<div class="protip" markdown="1">
Using high-performance computing (HPC) systems can be challenging for beginners, especially those who never used the command line or Linux operating system. Before deciding to use HPC for your research, consider whether it is a suitable platform for your needs. Typically, analyses that are well-suited for HPC are:
* CPU intensive workloads
* high memory workloads
<base class="mt">
Additionally, consider whether your analyses are already **optimized**, and whether you will need to **parallelize** your analyses or require distributed <u>computing with multiple nodes</u>.
</div>

## HPC system access

To access an HPC system, users will typically need to **create an account** and authenticate themselves using a username and password. Then, there are a few different ways to access high-performance computing (HPC) systems:
* **on-site access:** *Some HPC systems are located in facilities that are open to researchers and scientists, who can use the system in person. In these cases, users will typically need to apply for access and may need to meet certain eligibility requirements.*
* **remote access:** *Many HPC systems can be accessed remotely via the internet. In these cases, users can submit jobs to the system and access the results from their own computers using secure shell connection* (see tutorial <a class="t-links" href="623"></a>).
* **cloud computing:** *Additionally, some HPC systems are available for use by researchers and scientists via cloud computing platforms, which allow users to access computing resources over the internet (e.g., Open On Demand access, <a href="https://cloud.google.com" target="_blank">Google Cloud Platform  ⤴</a>).*

There are some national or international research and education HPC networks that provide access to a wide range of computing resources (<i>see section <a class="t-links" href="610" section="#examples-of-hpc-infrastructure">Examples of HPC infrastructure</a>. Usually, researchers and scientists may be able to access it for free as part of a research project or grant. <br>
<em class="footnote c-alert">^ In commercial cases, users may need to pay a fee to use an HPC system.</em>


## HPC tasks

HPC systems are an essential tool for solving many of the most challenging computational problems facing society today. They are used in a variety of fields, including science, engineering, finance, and government, to analyze and model data and phenomena that are large and complex. Some examples include:

<table>
  <tr> <th>Bioinformatics</th>                 <td>HPC systems are used to analyze and interpret large amounts of data from genome sequencing projects, which can help researchers understand the genetic basis of diseases and develop new treatments.</td> </tr>
  <tr> <th>Protein folding</th>                <td>HPC systems are used to simulate the folding of proteins, which is important for understanding how proteins function in the body and for drug discovery.</td> </tr>
  <tr> <th>Drug discovery</th>                 <td>HPC systems are used to analyze large amounts of data and perform complex simulations to help discover new drugs and treatments.</td> </tr>
  <tr> <th>Medicine and population health</th> <td>HPC systems are used to analyze and interpret medical images, such as CT scans and MRI scans, which can help doctors diagnose and treat diseases. They are also used o analyze data from clinical trials and help researchers understand the effectiveness and safety of new drugs and treatments. HPC systems are used to store, manage, and analyze electronic medical records, which can help improve patient care.</td> </tr>
  <tr> <th>Geospatial applications</th>        <td>HPC systems are used to analyze data from satellites and other Earth observation instruments to study the Earth's land, oceans, and atmosphere. They are also used to process, analyze, and visualize large datasets from geographic information systems (GIS), GPS and other positioning systems to create maps, enable navigation, and help researchers understand spatial patterns and trends.</td> </tr>
  <tr> <th>Climate modeling</th>               <td>HPC systems are used to simulate and predict the Earth's climate and weather patterns, as well as estimate the impact of earthquakes and other natural disasters.</td> </tr>
  <tr> <th>Astronomy</th>                      <td>HPC systems are used to analyze data from telescopes and other instruments to study celestial objects and phenomena.</td> </tr>
  <tr> <th>Aeronautical design</th>            <td>HPC systems are used to design and test new aircraft and aerospace systems.</td> </tr>
  <tr> <th>Financial modeling</th>             <td>HPC systems are used to analyze large amounts of financial data and build complex models to make predictions and inform investment decisions.</td> </tr>
</table>

HPC systems are also used extensively in artificial intelligence (AI) and machine learning, including:
* **Natural language processing**, *to process and analyze large amounts of text data to improve natural language processing tasks such as language translation and text classification.*
* **Speech recognition**, *to analyze and interpret large amounts of data from audio recordings to improve speech recognition systems.*
* **Computer vision**, *to analyze and interpret large amounts of data from images and video to improve tasks such as object recognition and image classification.*
* **Robotics**, *to analyze and interpret data from sensors and cameras to enable robots to navigate and interact with their environment.*
* **Running simulations**, *to train large machine learning models and run simulations to test and optimize machine learning algorithms.*



# Examples of HPC Infrastructure

### *XSEDE*
**The Extreme Science and Engineering Discovery Environment, NSF funded project**

* go to [XSEDE Supercomputer](01-XSEDE/01-supercomputer-intro)

### *SCINet*
**Scientific Computing Network, USDA ARS funded project**

* go to [SCINet Network](02-SCINET/01-scient-network-intro)

### *ISU HPC*
**HPC clusters at Iowa State University**

* go to [ISU HPC](03-ISUHPC/01-isu-hpc-intro)
