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
categories: ["HPC, computing", "command-line", "computing-tools"]
tags: ["SSH", "windows", "macOS", "remote-access"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

### *What is ssh?*

* <span class="c-exercise">SSH</span> is short for <b class="c-exercise">S</b>ecure <b class="c-exercise">SH</b>ell

<div class="note" markdown="1">
ssh (SSH client) is a program for logging into a remote machine and for
     executing commands on a remote machine.  It is intended to provide secure
     encrypted communications between two untrusted hosts over an insecure
     network.  X11 connections, arbitrary TCP ports and UNIX-domain sockets
     can also be forwarded over the secure channel.
</div>


### On a Mac (OS)

1. Use the Finder <img class="inline pa-s" src="{{ images_path }}/MagnifyingGlass.png"> and search for and open the Terminal program <img class="inline pa-s" src="{{ images_path }}/Terminal.png">.

2. Type `ssh username@hostname`
  * Example1:  `ssh andrew.severin@login.scinet.science`
  * Example2: `ssh severin@bridges.psc.edu`

3. Hit by <button class="btn">&#8629;</button> (`return`) key and enter your password and verification code. <br>
  <em class="footnote">^ Note: as you type the password, you will not see your typing.</em>


### On a PC (Windows)

On Windows, it will be easier for you to login first to a linux based system for the rest of this tutorial (remote machine).  You will first need to open up the `command prompt` which is similar to a terminal in the Mac OS operating system.

<table class="mb-">
  <tr> <th class="center-h" width="55%">approach 1</th> <th class="center-h">approach 2</th> </tr>
  <tr>
    <td><p markdown="1">Press <button class="btn">⊞ Win</button> (`windows key`) + <button class="btn">r</button> ; type `cmd` and click <button class="btn">OK</button>.</p></td>
    <td><p markdown="1">Search for ```cmd``` using Window's search.</p></td>
  </tr>
  <tr> <td class="no-border"><img src="{{ images_path }}/WindowsRun.png"></td> <td class="no-border"><img src="{{ images_path }}/WindowsSearch.png"></td> </tr>
</table>

In the terminal window that appears, type:
```bash
ssh usename@hostname
```
providing the credentials for your user:
* Example1: ```ssh andrew.severin@login.scinet.science```
* Example2: ```ssh severin@bridges.psc.edu```

Hit by <button class="btn">&#8629;</button> (`Enter`) key and enter your password and verification code. <br>
<em class="footnote">^ Note: as you type the password, you will not see your typing.</em>

<div class="protip" markdown="1">
The window can be resized with the mouse and the font text can be increased by pressing `cmd +` or `control +` on Mac or Windows, respectively.
</div>
