---
title: "Submitting dependency jobs using PBS"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 652.4
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Submitting dependency jobs using PBS-Torque

To submit jobs one after the other (i.e., run second job after the completion of first), we can use `depend` function of `qsub`.

Submit the first job, like usual:
```bash
qsub first_job.sub
```

You will get the output (jobid#):
<pre class="output">
1234567.computername
</pre>

Then, submit the second job like this:
```bash
qsub -W depend=afterok:1234567 second_job.sub
```
*Both job will be queued, but second job won't start till the first job is finished.*

### *other dependency types*

The other dependencies that can be used with `-W depend=dependency:jobid` include:

| Argument    | Description                                                      |
|-------------|------------------------------------------------------------------|
| after       | this job can be scheduled after job jobid begins execution       |
| afterok     | this job can be scheduled after job jobid finishes successfully  |
| afternotok  | this job can be scheduled after job jobid finishes unsucessfully |
| afterany    | this job can be scheduled after job jobid finishes in any state  |
| before      | this job must begin execution before job jobid can be scheduled  |
| beforeok    | this job must finish successfully before job jobid begins        |
| beforenotok | this job must finish unsuccessfully before job jobid begins      |
| beforeany   | this job must finish in any state before job jobid begins        |


### *automate the process*

here is an example on how to automate the sequence of job execution within a bash script:

```bash
#!/bin/bash
FIRST=`qsub first_job.sub`
SECOND=`qsub -W depend=afterok:$FIRST second_job.sub`
THIRD=`qsub -W depend=afterok:$SECOND third_job.sub`
FOURTH=`qsub -W depend=afterok:$THIRD fourth_job.sub`
```
