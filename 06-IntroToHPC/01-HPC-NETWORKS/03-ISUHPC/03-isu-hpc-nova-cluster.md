---
title: "ISU HPC: Nova Computing Cluster"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

Nodes and storage can be purchased on the Nova cluster for use by the researchers at ISU. For details about the Nova cluster, <a href="https://www.hpc.iastate.edu/guides/nova" target="_blank">click here.</a> <br>


## Getting Started
To log in to Nova, you need to be connect to ISU network on-campus or use <a href="https://vpn.iastate.edu/+CSCOE+/logon.html#form_title_text" target="_blank">ISU VPN</a> if you are off-campus. Check out the <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login" target="_blank">access guide</a> for more detailed information.
Once connected to ISU network, use any Terminal (Terminal on Linux/Mac and Powershell on Windows) and input following command:

```
 ssh <ISU NetID>@nova.its.iastate.edu
```

The first time you use the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">Secure Shell</a> connection to nova, it will respond with 

```
"host key not found, generate hostkey?(yes/no)"
```

You need to answer yes to continue. You will also need to use Google Authenticator for logging in to Nova. More device specific information about Google Authenticator can be found in the <a href="https://www.hpc.iastate.edu/guides/nova/access-and-login" target="_blank">access guide</a>. Once logged in you can start using Nova cluster and submit jobs using <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-introduction" target="_blank">SLURM Workload Manager</a>. SLURM is used to allocate memory and processors to an input job on Nova. If not familiar with the script, use this <a href="https://www.hpc.iastate.edu/guides/nova/slurm-script-generator-for-nova" target="_blank">script generator for Nova.</a> Input your requirements and it will generate a text script. You can then copy this script in a text file, add your commands at the bottom and then submit the job. Check out the <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM Basics</a> to learn about running your job on Nova or any other HPC Cluster.

<br>

___
# Further Reading
* [LSS Storage](04-isu-hpc-lss-storage)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](02-isu-hpc-condo-cluster){: .btn  .btn--primary}
[Next](04-isu-hpc-lss-storage){: .btn  .btn--primary}
