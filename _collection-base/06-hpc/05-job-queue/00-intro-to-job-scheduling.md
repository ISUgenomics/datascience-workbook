---
title: "Introduction to job scheduling"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 650
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

A **workload manager** is a critical component of a cluster or grid computing environment that manages the allocation and distribution of computing resources to user jobs. **Job scheduling** is a key function of the workload manager, which ensures that resources are allocated efficiently and jobs are executed in a timely and fair manner.


## Workload Manager

**Workload managers are used in high-performance computing (HPC) environments** where multiple users or groups of users need to run computationally intensive applications simultaneously. These applications may require a large number of processors, a large amount of memory, and access to specialized hardware. A workload manager ensures that the **available resources are allocated in an efficient and fair manner**, and that jobs are executed as quickly as possible.

<div class="note" markdown="1">
A workload manager is a software system that manages the allocation and distribution of computing resources, such as processors, memory, and storage, to user jobs in a cluster or grid computing environment. It is responsible for scheduling, monitoring, and tracking the execution of user jobs on the computing resources available in the cluster.
</div>

There are several workload managers commonly used in high-performance computing (HPC) environments. Here are some of the most popular ones:

### *SLURM*

<a href="https://slurm.schedmd.com/" target="_blank">Slurm  ⤴</a> *(Simple Linux Utility for Resource Management)* is an **open-source workload manager** that is widely used in HPC environments. It is designed to manage and schedule jobs on clusters of Linux nodes, and supports a wide range of job types, including batch, interactive, and parallel jobs.

**SLURM is a workload manager used on the SCINet HPC (Atlas, Ceres) and ISU HPC clusters (Condo, Nova).**

<span style="color: #ff3870;font-weight: 500;"> Learn more about SLURM workload manager and job scheduling from the hands-on tutorials available in section</span> {% include target_link href=651.1 text="SLURM: basics of workload manager" %}

### *PBS*

<a href="https://www.openpbs.org" target="_blank">OpenPBS  ⤴</a> *(Portable Batch System)* is another popular **open-source workload manager** that is used to manage and schedule jobs on HPC clusters. It provides a set of commands and interfaces that allow users to submit, monitor, and control the execution of jobs, and administrators to manage the resources and configure the system.

<span style="color: #ff3870;font-weight: 500;"> Learn more about PBS workload manager and job scheduling from the hands-on tutorials available in section</span> {% include target_link href=652.1 text="PBS: Portable Batch System" %}

### *LSF*

<a href="https://www.ibm.com/products/hpc-workload-management" target="_blank">LSF  ⤴</a> *(Load Sharing Facility)* is a **commercial workload manager** that is used in a wide range of HPC environments, including academic research, government, and industry. It provides a comprehensive set of features for managing and scheduling jobs, including support for batch, interactive, and parallel jobs.

There are also other options, including <a href="https://research.cs.wisc.edu/htcondor/" target="_blank">HTCondor  ⤴</a>, <a href="http://docs.adaptivecomputing.com/maui/" target="_blank">Maui Cluster Scheduler  ⤴</a>, <a href="https://en.wikipedia.org/wiki/TORQUE" target="_blank">Torque  ⤴</a>, and more.

## Job Scheduling

Job scheduling is a key component of workload management. **When a user submits a job to the cluster, the workload manager assigns it a priority and schedules it for execution** based on the availability of the required resources, the priority of the job, and any user-defined constraints. Job scheduling is typically done using policies that optimize resource utilization and job throughput. **Policies can be based on factors such as job size, job priority, and user permissions.**

Job scheduling is an essential aspect of managing a computational cluster. Overall, effective job scheduling on a computational cluster requires careful planning, advanced software tools, and expert knowledge of HPC concepts and techniques.

<div class="note" markdown="1">
By implementing a robust and efficient job scheduling strategy, cluster managers can improve the productivity of their users and maximize the use of their cluster resources.
</div>

### *Basic terms*

Here are some important things to know about job scheduling on a computational cluster:

* **Queue management** <br>
A job scheduler must be able to manage multiple job queues and ensure that jobs are assigned to the appropriate queue based on their requirements and priorities.

* **Prioritization** <br>
Different jobs may have different priorities based on their size, runtime, and importance. A job scheduler must be able to prioritize jobs according to their requirements and ensure that high-priority jobs are given preference over low-priority jobs.

* **Job dependencies** <br>
Jobs may have dependencies on other jobs or resources, such as data or software. A job scheduler must be able to manage dependencies and ensure that all required resources are available before a job can be scheduled.

* **Resource allocation** <br>
A job scheduler must be able to allocate resources such as CPU cores, memory, and disk space, in a way that maximizes resource utilization while minimizing wait times and job slowdowns.

* **Fairness** <br>
A job scheduler must be able to ensure that all users and groups have equal access to cluster resources and that no single user or group monopolizes the cluster.

### *How it works?*

Job scheduling is like managing a to-do list. Just as you prioritize and schedule tasks on a to-do list, a job scheduler prioritizes and schedules computational tasks on a cluster.

When a **user submits a job to the cluster**, the job scheduler checks the job's requirements such as the amount of CPU, memory, and time needed to run the job. The **scheduler then finds available resources** that match the job's requirements **and assigns the job** to those resources.

If the cluster is busy and there are no immediate resources available to run the job, **the scheduler may place the job in a queue to wait until resources become available**. When a resource becomes free, the scheduler checks the queue for the next job that matches the resource's requirements and assigns the job to that resource.

The scheduler continuously monitors the resources and the running jobs, and **if a running job exceeds its allocated time** or uses more resources than specified, **the scheduler may suspend or kill the job** to prevent it from interfering with other jobs.


# How do I know which workload manager is on the cluster?

To check which workload manager is being used on a cluster, you can **use the command-line interface** to connect to the cluster and run a command **to query the system information**. The specific command may vary depending on the operating system and the workload manager used on the cluster.

**1.** For the **Slurm** workload manager, you can use the following command:
```bash
sinfo -V
```
*This will display the version of Slurm installed on the cluster, along with other system information.*

**2.** For the **PBS** workload manager, you can use the following command:
```bash
qstat --version
```
*This will display the version of PBS installed on the cluster, along with other system information.*

**3.** For the **LSF** workload manager, you can use the following command:
```bash
lsb_release -a
```
*This will display the version of LSF installed on the cluster, along with other system information.*

<div class="protip" markdown="1">
If the above commands do not work, you can also check with the system administrator or refer to the <u>cluster documentation</u> to find out which workload manager is being used.
</div>
