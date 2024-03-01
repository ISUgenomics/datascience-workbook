---
title: "Secure Shell Connection (SSH)"
note: (command line)
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 623
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

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

1. Use the Finder ![]({{ images_path }}/MagnifyingGlass.png) and search for and open the Terminal program ![]({{ images_path }}/Terminal.png).
2. Type ```ssh username@hostname```
  * Example1:  ```ssh andrew.severin@login.scinet.science```
  * Example2: ```ssh severin@bridges.psc.edu```
3. Hit by &#8629; (`Enter`) key and enter your password and verification code.
  * Note: as you type the password, you will not see your typing.

### On a PC (Windows)

On Windows, it will be easier for you to login first to a linux based system for the rest of this tutorial (remote machine).  You will first need to open up the command prompt which is similar to a terminal in the Mac OS operating system.

1. Press windows key + r, type cmd and enter

  ![]({{ images_path }}/WindowsRun.png)

* Type ssh usename@hostname
  * Example1:  ```ssh andrew.severin@login.scinet.science```
  * Example2: ```ssh severin@bridges.psc.edu```
  * Hit by &#8629; (`Enter`) key and enter your password and verification code.
    * Note: as you type the password, you will not see your typing.

2. Search for ```cmd``` using Window's search.

  ![]({{ images_path }}/WindowsSearch.png)

**Note:** The window can be resized with the mouse and the font text can be increased by pressing `cmd +` or `control +` on Mac or Windows, respectively.
