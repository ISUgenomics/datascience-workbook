---
title: "SSH: Secure Shell Connection"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}

## What is ssh?

* <span style="color:Blue">SSH</span> is short for **S**ecure <span style="color:Blue">SH</span>ell

```
ssh (SSH client) is a program for logging into a remote machine and for
     executing commands on a remote machine.  It is intended to provide secure
     encrypted communications between two untrusted hosts over an insecure
     network.  X11 connections, arbitrary TCP ports and UNIX-domain sockets
     can also be forwarded over the secure channel.
```

### On a Mac (OS)

1. Use the Finder ![](assets/MagnifyingGlass.png) and search for and open the Terminal program ![](assets/terminal.png).
2. Type ```ssh username@hostname```
  * Example1:  ```ssh andrew.severin@login.scinet.science```
  * Example2: ```ssh severin@bridges.psc.edu```
3. Hit by &#8629; (`Enter`) key and enter your password and verification code.
  * Note: as you type the password, you will not see your typing.

### On a PC (Windows)

On Windows, it will be easier for you to login first to a linux based system for the rest of this tutorial (remote machine).  You will first need to open up the command prompt which is similar to a terminal in the Mac OS operating system.

1. Press windows key + r, type cmd and enter

  ![](assets/WindowsRun.png)

* Type ssh usename@hostname
  * Example1:  ```ssh andrew.severin@login.scinet.science```
  * Example2: ```ssh severin@bridges.psc.edu```
  * Hit by &#8629; (`Enter`) key and enter your password and verification code.
    * Note: as you type the password, you will not see your typing.

2. Search for ```cmd``` using Window's search.

  ![](assets/WindowsSearch.png)

**Note:** The window can be resized with the mouse and the font text can be increased by pressing `cmd +` or `control +` on Mac or Windows, respectively.







___
# Further Reading
* [SSH Shortcuts](02-ssh-shortcuts)
* [Password-less SSH](03-password-less-ssh)

* [Remote Data Access](../03-FILE-ACCESS/01-remote-data-acces)
* [Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../01-HPC-NETWORKS/03-ISUHPC/04-isu-hpc-lss-storage){: .btn  .btn--primary}
[Next](02-ssh-shortcuts){: .btn  .btn--primary}
