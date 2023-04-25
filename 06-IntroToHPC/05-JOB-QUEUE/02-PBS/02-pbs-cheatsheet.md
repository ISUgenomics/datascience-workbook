---
title: "PBS Cheatsheet"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [5. Introduction to Job Scheduling](../00-introduction-to-job-scheduling.md) / [5.2 PBS: Portable Batch System](01-pbs-basics.md) / **PBS Commands CheatSheet**

---


# Introduction

This PBS cheatsheet provides a quick reference guide to commonly used PBS commands, as well as explanations of the different PBS directives and their usage.

**Quick reference sheet for PBS resource manager**

These PBS commands allow users to **manage their jobs in the queue and monitor their status**. Users can use these commands to:
* check the progress of their jobs,
* make modifications to the job parameters,
* and cancel or hold jobs if necessary.

By using these PBS commands, users can efficiently manage their jobs on the cluster and ensure that they are using the resources effectively.

## Job control commands

| Commands | Function | Basic Usage | Example |
|----------|----------|-------------|---------|
| `qsub`   | submit a job | qsub [script] | *qsub job.pbs* |
| `qsub -I`| submits an interactive job | qsub -I | *qsub -I* |
| `qdel`   | deletes a job from the queue | qdel [job_id] | *qdel 123456* |
| `qhold`  | puts a job on hold, preventing it from running | qhold [job_id] | *qhold 123456* |
| `qrls`   | releases a job from hold, allowing it to run | qrls [job_id] | *qrls 123456* |
| `qreturn`| return a batch job | qreturn [job_id] | *qreturn 123456*|
| `qmove`  | move a batch job to another queue | qmove [job_id] [new_queue] | *qmove 123456 short* |


## Job monitoring commands

| Commands | Function | Example |
|----------|----------|---------|
| `qstat`  | show status of batch jobs | *qstat* |
| `qstat -u [user]` | displays the status of all jobs submitted by a specific user | *qstat -u myuser* |
| `qstat [job_id]` | display the status of a specific job | *qstat 123456* |
| `qstat -f [job_id]`| displays more detailed information about a specific job | *qstat -f 123456* |
| `qstat -q [queue_name]` | display the status of jobs in a specific queue | *qstat -q short* |
||||
| `qselect` | select a specific subset of jobs | *qselect* |
| `qselect -u [user]` | select all job IDs submitted by a specific user | *qselect -u myuser* |
| `qselect -N [jobname]` | select all job IDs with a specific job name | *qselect -N job_name* |
| `qselect -s R` | select all job IDs that are currently running <br>The `-s` option specifies the job state to filter by. "R" stands for "Running". | *qselect -s R* |


## Node status commands

| Commands   | Function | Example |
|------------|----------|---------|
| `pbsnodes` | display the status of all nodes in the cluster | *pbsnodes* |
| `pbsnodes [node_name]` | display the status of a specific node | *pbsnodes nova-123456* |
| `pbsnodes -a [node_name]` | display more detailed information about a specific node | *pbsnodes -a nova-123456* |
| `pbsnodes -s [state]` | display the status of nodes in a specific state | *pbsnodes -s down* |
| `pbsnodes -l property=value` | display the status of nodes with specific properties | *pbsnodes -l mem=16gb* |


## PBS environment variables

| variable        | description |
|-----------------|-------------|
| PBS_ENVIRONMENT | set to PBS_BATCH to indicate that the job is a batch job; otherwise, set to PBS_INTERACTIVE to indicate that the job is a PBS interactive job |
| **PBS_JOBID**   | the job identifier assigned to the job by the batch system |
| PBS_JOBNAME     | the job name supplied by the user |
| PBS_NODEFILE    | the name of the file that contains the list of the nodes assigned to the job |
| PBS_QUEUE       | the name of the queue from which the job is executed |
| PBS_O_HOME      | value of the HOME variable in the environment in which qsub was executed |
| PBS_O_LANG      | value of the LANG variable in the environment in which qsub was executed |
| PBS_O_LOGNAME   | value of the LOGNAME variable in the environment in which qsub was executed |
| PBS_O_PATH      | value of the PATH variable in the environment in which qsub was executed |
| PBS_O_MAIL      | value of the MAIL variable in the environment in which qsub was executed |
| PBS_O_SHELL     | value of the SHELL variable in the environment in which qsub was executed |
| PBS_O_TZ        | value of the TZ variable in the environment in which qsub was executed |
| PBS_O_HOST      | the name of the host upon which the qsub command is running |
| PBS_O_QUEUE     | the name of the original queue to which the job was submitted |
|**PBS_O_WORKDIR**| the absolute path of the current working directory of the qsub command |

[source: <a href="https://albertsk.files.wordpress.com/2011/12/pbs.pdf" target="_blank">Quick Tutorial for Portable Batch System (PBS)  ⤴</a>]

## PBS submission script

Here's a template PBS script with commonly used `#PBS` directives:

`template_script.pbs`

```
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


### `#PBS` *directives*
The table provides a brief explanation of the commonly used `#PBS` directives in the PBS submission script.

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


___
# Further Reading
* [6. Introduction to GNU Parallel](../../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../../07-CONTAINERS/00-introduction-to-containers)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](04-pbs-2-tutorial-submitting-dependency){: .btn  .btn--primary}
[Next](../../06-PARALLEL/01-introduction-to-gnu-parallel){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
