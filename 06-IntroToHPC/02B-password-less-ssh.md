---
title: "Password-less SSH"
layout: single
author:
author_profile: false
header:
  overlay_color: "444444"
  overlay_image: /assets/images/pattern.png
---

{% include toc %}

# Setup password-less login for HPC

Most HPC resources should now require double authentication which will make this type of password-less login not possible.  For those that don't have double authentication, this will work.

To login automatically from your machine to the remote host, you can save the private/public key pair in both machines. This way, you don't have to enter password each time you login.

## Step 1: Create public and private keys (local computer)

```
ssh-keygen
```

## Step 2: Copy the public key to remote-host

```
ssh-copy-id -i ~/.ssh/id_rsa.pub userid@MACHINENAME
```

## Step 3: Login  

```
ssh userid@MACHINENAME
# Ensure file permissions for ~/.ssh/.id_rsa (local) and ~/.ssh/authorized_keys (remote) are such that it is only readable by you!
```







___
# Further Reading
* [Remote Data Access](03-remote-data-access)
* [Software Available on HPC](04-software-available-on-HP)
* [Introduction to Job Scheduling](05-introduction-to-job-scheduling)
* [Introduction to GNU Parallel](06-introduction-to-gnu-parallel)
* [Introduction to Containers](07-introduction-to-containers)
* [Example HPC Infrastructure](08-example-hpc-infrastructure)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](02A-ssh-shortcuts){: .btn  .btn--primary}
[Next](03-remote-data-access){: .btn  .btn--primary}
