---
title: "Introduction to Unix"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /02-IntroToCommandLine/assets/images/02_command_line_banner.png
---

{% include toc %}

# Introduction


<iframe width="560" height="315" src="https://www.youtube.com/embed/OAAdLMZvk1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## What is Unix?
* Multiuser operating system
* Linux: free version of this type of operating system
  * Red Hat Enterprise Linux, Ubuntu, and CentOS
* Used on high-end workstations, database servers, web servers and managing shared resources
* Standard features include: Security, reliability, scalability
  * Can supports 100s of users at a time


## Can I learn Unix?

* **Yes!** Absolutely. It is just another way of operating your computer
* No more difficult than learning Word, Excel or Powerpoint
* Biggest difference
  * In Linux:  You type the command to execute
  * In Windows and Mac: You use your mouse to execute a command

`Remember!` **In the Terminal, “Don’t use the mouse.”**

___

# 1. Unix Shell

## 1.1 Unix Shell Terminology

|*TERM*|*DEFINITION*|*NOTES*|
|-------|------|-------|
|**filename**| the name of a file |  In Unix it is better to not include spaces in names for directories. <br>The underscore "_" can be used to replace any spaces you might want. |
|**path**| location in the file system | |
|**alias**| the shortcut for a more complex set of commands| aliases can be defined in the **.bashrc** file |


## 1.2 Unix Shell Variables

For getting more information about the environment, you can type `env`, which lists all the variables currently set. If you want to know specifically about a variable, you can do:

```
echo $VARIABLE
```
Some variables that are useful are:

| *VARIABLE* | *DEFINITION*                       |
|:-----------|:-----------------------------------|
| `HOSTNAME` | hostname for the system            |
| `TERM`     | terminal                           |
| `SHELL`    | Shell type (bash, csh, ksh etc)    |
| `USER`     | Username                           |
| `PATH`     | paths where executables are stored |
| `PWD`      | present working directory          |
| `EDITOR`   | default text editor                |
| `HOME`     | path for home                      |
| `DISPLAY`  | where to route the display         |
| `HISTFILE` | file where the history is saved    |

## 1.3 Unix Shell Configuration

### **.bashrc**

### **.bash_profile**

### Terminal Coloring

___
# Further Reading
* [Unix Basic Commands](02A-basic-commands.md)
* [System Info and Access Parmisions](02B-unix-system-info-permissions.md)
* [Text Files Editors](02C-text-files-editors.md)
* [Unix Admin Commands](02D-admin-commands.md)
* [Tutorial: Unix Getting Started](02E-tutorial-unix-getting-started.md)
* [Summary of Unix Commands](04-unix-cheat-sheet.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-IntroToCommandLine-LandingPage.md){: .btn  .btn--primary}
[Previous](01-terminal-basics.md){: .btn  .btn--primary}
[Next](02A-basic-commands.md){: .btn  .btn--primary}
