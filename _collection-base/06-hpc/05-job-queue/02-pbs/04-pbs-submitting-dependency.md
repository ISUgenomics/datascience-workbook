---
title: "Submitting dependency jobs using PBS"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
type: "tutorial"
level: 3
categories: []
tags: []
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [5. Introduction to Job Scheduling](../00-introduction-to-job-scheduling.md) / [5.2 PBS: Portable Batch System](01-pbs-basics.md) / **5.2.2 Submitting Dependency Jobs using PBS**

---


# Introduction

# Submitting dependency jobs using PBS-Torque

To submit jobs one after the other (i.e., run second job after the completion of first), we can use `depend` function of `qsub`.

First submit the firstjob, like normal

```
qsub first_job.sub
```

You will get the output (jobid#)

```
1234567.computername
```

Second submit the second job following way,

```
qsub -W depend=afterok:1234567 second_job.sub
```

Both job will be queued, but second job won't start till the first job is finished.

The other dependencies that can be used with `-W depend=dependency:jobid` are

| Argument | Description |
| --- | --- |
| after | this job can be scheduled after job jobid begins execution. |
| afterok | this job can be scheduled after job jobid finishes successfully. |
| afternotok | this job can be scheduled after job jobid finishes unsucessfully. |
| afterany | this job can be scheduled after job jobid finishes in any state. |
| before | this job must begin execution before job jobid can be scheduled. |
| beforeok | this job must finish successfully before job jobid begins |
| beforenotok | this job must finish unsuccessfully before job jobid begins |
| beforeany | this job must finish in any state before job jobid begins |



Simple way to automate this with a bash script:

```
#!/bin/bash
FIRST=`qsub first_job.sub`
SECOND=`qsub -W depend=afterok:$FIRST second_job.sub`
THIRD=`qsub -W depend=afterok:$SECOND third_job.sub`
FOURTH=`qsub -W depend=afterok:$THIRD fourth_job.sub`
```



___
# Further Reading
* [PBS Commands CheatSheet](02-pbs-cheatsheet)

* [6. Introduction to GNU Parallel](../../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](03-pbs-1-tutorial-job-submission){: .btn  .btn--primary}
[Next](02-pbs-cheatsheet){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
