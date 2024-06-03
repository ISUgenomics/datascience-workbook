---
title: "Creating PBS job submission scripts"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 652.3
level: 3
categories: ["HPC, computing", "job-scheduling", "command-line", "computing-tools"]
tags: ["PBS", "job-script", "job-submission"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="required" markdown="1">
For a quick list of frequently used PBS commands/options, take a look at this <a class="t-links" href="652.2">commands (cheatsheet)</a>.
</div>

*This guide will show you how to generate PBS job submission scripts for your commands, easily and efficiently!*

# Create PBS job submission script

## 1. Create submission file

First, open a text editor such as `nano`, `vim`, or `mcedit`.

Then, start with the header line, which specifies the interpreter to be used. For PBS, this is typically:
```bash
#!/bin/bash
```
or
```bash
#!/bin/sh
```


## 2. Add #PBS directives

The `#PBS` directives are commands that are used in a PBS job script to provide information to the PBS scheduler about how to run the job.
These directives are placed at the beginning of the job script, and start with the `#PBS` prefix followed by a keyword or flag and sometimes a value.
The PBS scheduler reads these directives and uses the information provided to allocate resources and manage the job.

**There are many `#PBS` directives each serving a different purpose.**

<div class="note" markdown="1">
Using `#PBS` **directives** in a job script is important because it **allows the user to request specific resources** and provide information about the job that can be used by the PBS scheduler to optimize the allocation of resources and **manage the job efficiently**.
</div>

<details class="l-frame mb" markdown="1"><summary class="c-header"><b><i>see the PBS directives (cheatsheet)</i></b></summary>
Here are some examples of commonly used PBS directives:

| #PBS directives                      | description                                                              |
|--------------------------------------|--------------------------------------------------------------------------|
| `#PBS -N job_name`                   | sets the name of the job                                                 |
| `#PBS -o output_file`                | specifies the name of the file to which standard output will be written  |
| `#PBS -e error_file`                 | specifies the name of the file to which standard error will be written   |
| `#PBS -q queue_name`                 | specifies the name of the queue where the job should be submitted        |
| `#PBS -l nodes=1:ppn=8`              | specifies the number of nodes and processors per node needed for the job |
| `#PBS -l mem=16gb`                   | specifies the amount of memory needed for the job                        |
| `#PBS -l walltime=1:00:00`           | specifies the maximum wall time for the job                              |
| `#PBS -M user_email@domain.com`      | specifies the email address to which notifications should be sent        |
| `#PBS -m abe`                        | specifies the types of notifications to be sent. <br>The **a** option sends email when the job is aborted, <br>**b** sends email when the job begins, <br>and **e** sends email when the job ends. |
| `#PBS -d /path/to/working/directory` | specify the working directory where the job will be executed             |

</details>

Here's an example of how to specify `#PBS` directives in a real-world PBS job script:
```bash
#!/bin/bash
#PBS -N my_job
#PBS -l nodes=2:ppn=8
#PBS -l walltime=00:30:00
#PBS -o output_file.txt
#PBS -e error_file.txt
#PBS -q batch
```
In this example, we have specified several `#PBS` directives at the top of the script:
* `#PBS -N my_job` - sets the name of the job to "my_job"
* `#PBS -l nodes=2:ppn=8` - requests 2 nodes, each with 8 processors, for the job
* `#PBS -l walltime=00:30:00` - sets the maximum walltime for the job to 30 minutes
* `#PBS -o output_file.txt` - redirects standard output to a file named "output_file.txt"
* `#PBS -e error_file.txt` - redirects standard error to a file named "error_file.txt"
* `#PBS -q batch` - specifies that the job should be submitted to the "batch" queue


## 3. Adjust environment variables

PBS provides a number of environment variables that can be useful for scripts running under PBS workload scheduler. These variables provide information about the job and the environment in which it is running.

Here are a few of the most commonly used PBS environment variables:

| PBS variable    | description                                           |
|-----------------|-------------------------------------------------------|
| `PBS_O_WORKDIR` | the directory in which the job was submitted (i.e., the current working directory of the submission script)   |
| `PBS_NODEFILE`  | a file that lists the nodes assigned to the job       |
| `PBS_JOBID`     | the job ID assigned to the current job by PBS         |
| `PBS_NUM_NODES` | the number of nodes assigned to the job               |
| `PBS_NUM_PPN`   | the number of processors per node assigned to the job |
| `PBS_ARRAYID`   | if the current job is part of an array job, this variable gives the index of the current job within the array |

Here's an example of how these environment variables might be used in a PBS job script:
```bash
#!/bin/bash
#PBS -N my_job
#PBS -l nodes=2:ppn=8
#PBS -l walltime=00:30:00
#PBS -o output_file.txt
#PBS -e error_file.txt
#PBS -q batch

# USE SOME PBS VARIABLES (if needed)
cd $PBS_O_WORKDIR

# get a list of the nodes assigned to the job
nodes=$(cat $PBS_NODEFILE | uniq)

echo "Nodes assigned to job:"
echo "$nodes"

# print some job information
echo "Job ID: $PBS_JOBID"
echo "Array ID: $PBS_ARRAYID"
echo "Number of nodes: $PBS_NUM_NODES"
echo "Processors per node: $PBS_NUM_PPN"
```
*In this example, we're using the* `$PBS_NODEFILE` *variable to get a list of the nodes assigned to the job, which we then print out. We're also using the* `$PBS_JOBID`, `$PBS_ARRAYID`, `$PBS_NUM_NODES`, *and* `$PBS_NUM_PPN` *variables to print out some basic job information.*

<div class="warning" markdown="1">
Note, the `$PBS_O_WORKDIR` environment variable is used to change the current working directory to the directory in which the job was submitted. This is done using the `cd` command.
```bash
cd $PBS_O_WORKDIR
```
*This is a common practice in PBS job scripts, since the working directory of the submission script is typically not the same as the working directory of the job itself. **By changing the working directory to the directory in which the job was submitted**, we ensure that any input files, output files, or other data referenced by the job are located in the correct place.*
</div>

<div class="protip" markdown="1">
PBS variables can be very useful for debugging and monitoring jobs running under PBS.
</div>

## 4. Generate commands for the tasks

 In a PBS script, the **user commands to execute typically come after the #PBS directives**. These directives specify various parameters of the job, such as the job name, number of nodes, walltime, and output files. Once these directives are specified, the user can include the commands to run in the section of the script that follows.

<div class="note" markdown="1">
**This section of the script can include any commands that the user wishes to execute on the compute nodes allocated to the job.**
</div>
<div class="protip" markdown="1">
The user can also use PBS environment variables within this section of the script. For example, you might use the `$PBS_NODEFILE` variable to get a list of nodes assigned to the job, or the `$PBS_O_WORKDIR` variable to set the working directory to the directory in which the job was submitted.
</div>

Assuming we have the header section with the #PBS directives like this:
<code class="code-block bc-template">#!/bin/bash
#PBS -N my_job
#PBS -l nodes=2:ppn=8
#PBS -l walltime=00:30:00
#PBS -o output_file.txt
#PBS -e error_file.txt
#PBS -q batch
cd $PBS_O_WORKDIR
echo "Running on host `hostname`"
echo "Starting run at: `date`"
</code>

in the next section of the job script, we can add commands for our computing tasks:
```bash
# PROVIDE COMMANDS TO BE EXECUTED

my_command --input data_file.txt --output results.txt --param1 10 --param2 20

echo "Program finished with exit code $? at: `date`"
```
*In this example, we're using the* `my_command` *command to process some data. The command takes several arguments, including an input file* (`data_file.txt`), *an output file* (`results.txt`), *and two parameters* (`param1` *and* `param2`). *We're also using the* `$?` *variable to print the exit code of the command after it finishes running.*


# Submit the job

To submit a PBS script to the queue, you can use the qsub command followed by the name of your script.
```bash
qsub my_job.pbs
```
*This will submit the job to the default queue, and you should see a message indicating that the job has been submitted, along with a job ID number.*

If you want to submit the job to a specific queue, you can use the `-q` option followed by the name of the queue. <br>
*For example:*
```bash
qsub -q my_queue my_job.pbs
```
*This will submit the job to a queue called my_queue.*

Once the job has been submitted, you can use various `qstat` commands to check the status of the job, such as:
* `qstat -a` - to see all jobs in the queue, or
* `qstat -u username` - to see all jobs submitted by a particular user.

<div class="more" markdown="1">
If you want to learn more about PBS commands for monitoring submitted jobs, a useful resource to explore is the <a class="t-links" href="652.2">PBS commands (cheatsheet)</a>.
</div>
