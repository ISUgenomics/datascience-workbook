---
title: "XSEDE supercell storage"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [1. Introduction to HPC infrastructure](../01-introduction-to-hpc-infrastructure.md) / [1.1 XSEDE Supercomputer](01-supercomputer-intro) / **1.1.1 XSEDE Supercell Storage**

---


# Introduction

<span style="color: #ff3870;font-weight: 500;"> XSEDE has been replaced by ACCESS. Check the [ACCESS guide ⤴](01-supercomputer-intro.md) for more information. </span>

## Using Supercell-Storage server for backing up and restoring data from PSC servers

 This guide will help you getting started and using the Supercell. If you haven't already gotten a username/password for PSC systems (eg., Blacklight), you need to do it now. Use the [password reset link](http://psc.edu/index.php/resources-for-users/allocations "password reset link").

### Accessing Supercell ###

SFTP is the best method to browse the files and create the directory structure you want.
```
sftp username@data.psc.xsede.org
Warning: Permanently added the RSA host key for IP address '128.182.112.126' to
username@data.psc.xsede.org's password:
Connected to data.psc.xsede.org.
sftp> ls
TIL11_FULL
sftp> cd TIL11_FULL/
sftp> exit
```

### Transferring files ###

Use  `rsync` to sync the directories that you need to keep in sync

```
rsync -e 'ssh -c aes128-ctr' -avP source_dir username@data.psc.xsede.org:target_dir
```

That's it! You can retrieve the data anytime by reversing the  `rsync` command.



___
# Further Reading
* [1.2 SCINet Network](../02-SCINET/01-scient-network-intro)
* [1.3 ISU HPC](../03-ISUHPC/01-isu-hpc-intro)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](01-supercomputer-intro){: .btn  .btn--primary}
[Next](../02-SCINET/01-scient-network-intro){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
