---
title: "PBS: Portable Batch System"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 652.1
level: 2
categories: ["hpc", "job-scheduling", "command-line", "computing-tools"]
tags: ["remote-machine", "hpc-cluster", "workload-manager", "PBS", "job-script", "job-submission", "qsub", "job-management", "qstat", "qdel", "qhold"]
attributes: ["example", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

The **Portable Batch System** (<a href="https://www.openpbs.org" target="_blank">PBS  ⤴</a>) is a popular workload manager used for **job scheduling and resource management** on high-performance computing (HPC) clusters. It allows users to submit and manage jobs on a cluster of computers, ensuring efficient utilization of resources and maximizing the throughput of the system. It is a powerful tool that enables users to run complex and resource-intensive applications and simulations.

**PBS is an open-source system** that is widely used in research computing, scientific computing, and high-performance computing environments. It provides a flexible and scalable environment for running parallel and distributed applications across a large number of compute nodes.

<div class="note" markdown="1">
PBS has two main components: the PBS server and the PBS client. The **PBS server** manages the resources on the cluster, including nodes, queues, and jobs, while the **PBS client** is used by users to submit and manage their jobs.
</div>

## PBS features

One of the key features of PBS is its ability to **handle large-scale and complex job submissions**. *PBS allows users to submit jobs with multiple tasks and dependencies, and it can automatically manage the resources needed to run these jobs efficiently.*

Another important feature of PBS is its **support for heterogeneous environments**. *PBS can manage clusters with different hardware architectures and operating systems, allowing users to run their applications on a variety of platforms and environments.*

PBS also provides a range of **job scheduling policies, including priority-based scheduling**, fairshare scheduling, and backfill scheduling. *These policies help to ensure that resources are allocated fairly and efficiently, and that high-priority jobs receive the resources they need to run quickly.*

PBS also provides **robust security features** to ensure that the cluster is protected against unauthorized access and usage. *Users can be authenticated and authorized to access specific resources and perform specific actions, and PBS can log all activities for auditing purposes.*

# PBS job scheduling

Creating a script for PBS workload manager is essential for submitting and managing jobs on a cluster. **A PBS script is a text file containing a set of commands** that specify the requirements of the job, such as:
* the resources needed,
* the location of input and output files,
* and the commands to be executed.

Once a PBS script is created, it can be submitted to the queue using the `qsub` command. The job is added to the PBS queue and its status can be monitored. Various PBS commands allow users to manage their jobs, for example check the progress of their jobs, make modifications to the job parameters, and cancel or hold jobs if necessary.

## *Why to create a PBS script?*

Here are some reasons why creating a script for PBS is important

* **Resource management** <br>
A PBS script specifies the resources needed for the job, such as the number of nodes, CPUs, and memory, which helps to manage the resources efficiently on the cluster.

* **Reproducibility** <br>
A PBS script ensures that the job is submitted with the same requirements each time, ensuring reproducibility of results.

* **Customization** <br>
A PBS script allows users to customize their jobs by specifying the specific commands to be executed and the order in which they should be executed.

## *How to create & submit a PBS script?*

By following the steps 1-7, users can create a PBS script and submit their jobs to the cluster.

1. Open a text editor such as `nano`, `vim`, or `mcedit`.

2. Start with the shebang line, which specifies the interpreter to be used. For PBS, this is usually `#!/bin/bash` or `#!/bin/sh`.

3. Specify the PBS directives, which are special comments that begin with `#PBS`. These directives specify the resources required for the job, such as the number of nodes, CPUs, memory, and walltime. <br> *For example:*
```bash
#PBS -l nodes=1:ppn=8
#PBS -l mem=16gb
#PBS -l walltime=1:00:00
```

4. Specify the working directory where the job will be executed:
```bash
#PBS -d /path/to/working/directory
```

5. Specify the commands to be executed:
```bash
echo "Hello, world!"
```

6. Save the script with a `.pbs` extension.

7. Submit the job using the `qsub` command:
```bash
qsub myjob.pbs
```

## **Template PBS script**

Here's a template PBS script with commonly used `#PBS` directives:

`template_script.pbs`

```bash
#!/bin/bash
#PBS -N job_name
#PBS -o output_file
#PBS -e error_file
#PBS -l nodes=1:ppn=8
#PBS -l mem=16gb
#PBS -l walltime=1:00:00
#PBS -M user_email@domain.com
#PBS -m abe

cd /path/to/working/directory

# Your commands go here
echo "Hello, world!"
```

<div class="protip" markdown="1">
Users can modify this template to suit their specific needs by changing the job name, output and error file names, resource requirements, email address, and commands to be executed.
</div>

### `#PBS` *directives*
The table provides a brief explanation of the commonly used PBS directives in this template script.

| directives | description |
|------------|-------------|
| `#!/bin/bash` | specifies the interpreter to be used for the script |
| `#PBS -N job_name` | sets the name of the job |
| `#PBS -o output_file` | specifies the name of the file to which standard output will be written |
| `#PBS -e error_file`  | specifies the name of the file to which standard error will be written  |
| `#PBS -l nodes=1:ppn=8` | specifies the number of nodes and processors per node needed for the job |
| `#PBS -l mem=16gb` | specifies the amount of memory needed for the job |
| `#PBS -l walltime=1:00:00` | specifies the maximum wall time for the job |
| `#PBS -M user_email@domain.com` | specifies the email address to which notifications should be sent |
| `#PBS -m abe` | specifies the types of notifications to be sent. <br>The **a** option sends email when the job is aborted, <br>**b** sends email when the job begins, <br>and **e** sends email when the job ends. |
| `#PBS -d /path/to/working/directory` | specify the working directory where the job will be executed |


# PBS commands

PBS provides a set of commands and interfaces that allow users to submit, monitor, and control the execution of jobs, and administrators to manage the resources and configure the system.

<div class="note" markdown="1">
By using PBS commands, users can efficiently manage their jobs on the cluster and ensure that they are using the resources effectively.
</div>

Here are some common PBS commands with examples:

## `qsub` - submit a job

The `qsub` command is used to submit a job to the queue.
```bash
qsub myjob.pbs
```
*This will submit the job script "myjob.pbs" to the queue.*

---

Explore the most common usage scenarios:
* **add job requirements** <br>
The `-l` flag is used with the `qsub` command to specify job requirements such as the number of nodes, CPUs, memory, and walltime.
```bash
qsub -l nodes=2:ppn=4,mem=16gb,walltime=1:00:00 myjob.pbs
```
*This will submit a job requesting 2 nodes with 4 CPUs each, 16GB of memory, and a walltime of 1 hour.*

* **specify a name for the job** <br>
The `-N` flag is used with the `qsub` command to specify a name for the job.
```bash
qsub -N myjob myjob.pbs
```
*This will submit the job script "myjob.pbs" with the name "myjob".*

* **redirect the output and error** <br>
The `-o` and `-e` flags are used with the `qsub` command to redirect the output and error messages of the job to a file.
```bash
qsub -o myjob.out -e myjob.err myjob.pbs
```
*This will submit the job script "myjob.pbs" and redirect the output to "myjob.out" and errors to "myjob.err".*

* **specify the queue** <br>
The `-q` flag is used with the `qsub` command to specify the queue where the job should be submitted.
```bash
qsub -q myqueue myjob.pbs
```
*This will submit the job script "myjob.pbs" to the queue named "myqueue".*


## `qstat` - status of a job

The `qstat` command is used to check the status of a job.
```bash
qstat -u myuser
```
*This will show the status of all jobs submitted by the user "myuser".*

<base class="mt">
* **display job info** <br>
The `-f` flag is used used with the `qstat` command to display detailed information about a job, including its resource requirements, priority, and status.
```bash
qstat -f 123456
```
*This will show the detailed information for job ID 123456.*


## `qdel` - delete a job

The `qdel` command is used to delete a job from the queue.
```bash
qdel 123456
```
*This will delete the job with ID 1234 from the queue.*

## `qhold` - hold a job

The `qhold` command is used to put a job on hold.
```bash
qhold 123456
```
*This will put the job with ID 1234 on hold.*

<base class="mt">
* **set of jobs on hold** <br>
The `-j` flag is used with the `qhold` command to put a set of jobs on hold.
```bash
qhold -j 1234,5678,9101
```
*This will put the jobs with IDs 1234, 5678, and 9101 on hold.*

## `qrls` - release a job

The `qrls` command is used to release a job from hold.
```bash
qrls 123456
```
*This will release the job with ID 1234 from hold.*


### <button class="btn more"></button>
<div class="more before" data-before="" markdown="1">
If you want to learn more about PBS commands, a useful resource to explore is the <a class="t-links" href="652.2">PBS commands (cheatsheet)</a>.
</div>
