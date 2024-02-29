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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../00-IntroToHPC-LandingPage.md) / **1. Introduction to HPC infrastructure**

---


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

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Taking tutorials from the section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a> is helpful before starting to use high-performance computing (HPC) systems because many HPC systems are based on Unix or a Unix-like operating system. Unix is a powerful and flexible operating system that is widely used in HPC and other technical fields. For more details, see <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell" target="_blank">Introduction to UNIX Shell  ⤴</a> and <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started" target="_blank">Tutorial: Getting Started with UNIX + VIDEO  ⤴</a>.<br><br>
Overall, familiarity with Unix can help users get the most out of their HPC systems and make it easier to use these systems effectively.
</span>
</div><br>


# HPC infrastructure

HPC infrastructure often consists of **clusters of computers** that are connected together and **work in parallel** to solve a problem, and they may also **use specialized hardware** such as graphics processing units (GPUs) or field-programmable gate arrays (FPGAs) **to accelerate performance**. Some HPC systems are **located in specialized facilities called "*data centers*"**, which are designed to house and maintain large numbers of computers and other equipment. These data centers may be owned and operated by research institutions, government agencies, or private companies. In some cases, HPC systems may be distributed across multiple locations (*e.g., SCINet HPC*), with each location contributing its own resources to the network (*e.g., computing nodes, large scale storage, high-speed network*).

![]({{ images_path }}/01_hpc_system.png)<br>
*The figure shows the data center of computing clusters, where thousands of computing processors are organized in properly cooled and secured cabinets. Many HPC systems are accessed via the internet with a web browser-based interface. The outsourced tasks are referred to as cloud computing which provides many benefits.*

### *Why use an HPC System?*

There are several benefits to using high-performance computing (HPC) systems:

* **infrastructure** - provide the configured infrastructure that allow researchers to improve or make possible computationally intensive workflows;
* **speed** - much faster than traditional computers, and they can solve complex problems much more quickly;
* **accuracy**  - ability to perform calculations with greater accuracy and precision than traditional computers;
* **capacity** - much larger capacity than traditional computers, which means they can handle larger datasets and more complex problems;
* **versatility** - ability to solve a wide range of problems, from analyzing financial data to simulating complex physical phenomena;
* **collaboration** - allow researchers and scientists from different locations to work together and share resources, which can facilitate collaboration and accelerate the pace of research and discovery;
* **cost savings** - using an HPC system may be more cost-effective than buying and maintaining multiple traditional computers to solve a complex problem.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Using high-performance computing (HPC) systems can be challenging for beginners, especially those who never used the command line or Linux operating system. Before deciding to use HPC for your research, consider whether it is a suitable platform for your needs. Typically, analyses that are well-suited for HPC are:
<li>CPU intensive workloads</li>
<li>high memory workloads</li> <br>
Additionally, consider whether your analyses are already <b>optimized</b>, and whether you will need to <b>parallelize</b> your analyses or require distributed computing with <b>multiple nodes</b>.
</span>
</div>

## HPC system access

To access an HPC system, users will typically need to **create an account** and authenticate themselves using a username and password. Then, there are a few different ways to access high-performance computing (HPC) systems:
* **on-site access:** *Some HPC systems are located in facilities that are open to researchers and scientists, who can use the system in person. In these cases, users will typically need to apply for access and may need to meet certain eligibility requirements.*
* **remote access:** *Many HPC systems can be accessed remotely via the internet. In these cases, users can submit jobs to the system and access the results from their own computers using secure shell connection (<a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">SSH protocol  ⤴</a>).*
* **cloud computing:** Additionally, some HPC systems are available for use by researchers and scientists via cloud computing platforms, which allow users to access computing resources over the internet (*e.g., Open On Demand access, <a href="https://cloud.google.com" target="_blank">Google Cloud Platform  ⤴</a>*).

There are some national or international research and education HPC networks that provide access to a wide range of computing resources (*see section [Examples of HPC Infrastructure
](https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/01-introduction-to-hpc-infrastructure#examples-of-hpc-infrastructure)*). Usually, researchers and scientists may be able to access it for free as part of a research project or grant. In commercial cases, users may need to pay a fee to use an HPC system.


## HPC tasks

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






___
# Further Reading
* [1.1 XSEDE Supercomputer](01-XSEDE/01-supercomputer-intro)
* [1.2 SCINet Network](02-SCINET/01-scient-network-intro)
* [1.3 ISU HPC](03-ISUHPC/01-isu-hpc-intro)

* [2. Remote Access to HPC Resources](../02-FILE-ACCESS/01-remote-data-access)
* [3. Setting up Your Home Directory for Data Analysis](../03-HOME-DIRECTORY/00-setting-up-home-directory)
* [4. Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [5. Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [6. Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)
