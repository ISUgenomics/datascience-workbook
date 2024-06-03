---
title: "Installations on Windows"
layout: single
author: Sharu Paul
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
module: "03. Computing Machine Setup"
type: "tutorial"
order: 232
level: 2
categories: ["operating-system", "installation", "developer-tools"]
tags: ["windows", "conda", "R", "python", "IDE", "git"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

This is a guide for setup of a windows machine for bioinformatics data analysis. I list here some important tools useful for most bioinformatics analyses and the process to install them. Check out the <a class="t-links" href="900">Project Management</a>.

## General guide to software installation

Installing any software on Windows usually involves some common steps:
- Download the installation file(s)
- Open the downloaded setup file (usually an .exe file). The file will be located in downloads folder by default
- Accept the default setting (click next, next, next..)
- Finish installation

`Tip:` Just google *'[software name] for windows'* to find installation files. Works for most programs.

## Reset an old laptop

+ Get password from previous account holder to login
+ Reset Windows
  * Go to settings
  * Search: Reset this PC
  * Click 'Get started' or 'Reset' under 'Reset this PC'  
  * You can choose to keep the files or delete all data
+ Log in with new account
+ Download a better internet browser


# Developer tools

## Atom editor (now archived)

Try <a class="t-links" href="411">VSCode</a>.

Atom is a text editor with `git` version control integrated in it and is compatible with <a class="t-links" href="933.5">Markdown</a> syntax. It makes working with Git and GitHub more efficient.

<a href="https://atom.io/" target="_blank">Download ⤴</a> and install Atom following general guide to installation, and then install packages to improve function. To install packages on Atom, use the package manager in settings (`File` -> `Settings` -> `Install`). <br>

![Settings]({{ images_path }}/01Atom.png)

There are many options in settings, for installing new packages click on install option:

![Install Packages]({{ images_path }}/02Atom.png)

Recommended packages:
- markdown-folding
- language-swift-89
- markdown-pdf
- minimap
- wordcount
- drag-relative-path
- markdown-scroll-sync
- autocomplete-python
- autocomplete-swift
- autocomplete-R

When installing a package, if you get the following error, just try installing the package again. Click <a href="https://github.com/atom/atom/issues/3841" target="_blank">here ⤴</a> for more info.

```
Request for package information failed: Application error
```

### Important command

`ctrl-shift-p` opens command palette, where you can search all Atom commands


## Git for Windows

<a href="https://git-scm.com/download/win" target="_blank">Install Git ⤴</a>

- Click on the right version to download setup file, I selected 64-bit Git for Windows Setup <br>

![setup]({{ images_path }}/01Git.png)

- Open downloaded file and install Git (with default options)
- To set up a GitHub account check the <a class="t-links" href="932.4">GitHub tutorial</a>

## Linux on Windows

Windows Subsystem for Linux (WSL) is a compatibility layer for running Linux binary executables natively on Windows.
Run either PowerShell or Command Prompt as an administrator. For example, you can find Command Prompt from the start menu and click on Run as an administrator.

![cmd]({{ images_path }}/WSL-cmd-from-start-menu.png)

or search it from the search box on lower left corner of screen on windows. The options also appear on right (without right click) if you use the search box.

![startmenu]({{ images_path }}/WSL-Search-cmd.png)

Type the following command and press enter to install WSL:

```bash
wsl --install
```

![installwsl]({{ images_path }}/WSL-install.png)

Restart your computer to finish installation. This will install Ubuntu distribution by default but can be changed. It is possible to run multiple Linux distributions with WSL. For setting up the Linux system and more options, check Microsoft documentation <a href="https://docs.microsoft.com/en-us/windows/wsl/install" target="_blank">here ⤴</a>.


# Programming Languages and IDE

If you are not familiar with command line, the best way to install and manage IDEs and programming languages like Python and R is through Anaconda Navigator. First, <a href="https://docs.anaconda.com/anaconda/install/windows/" target="_blank">install Anaconda and Anaconda Navigator ⤴</a> on your computer. You can now install and then use different IDEs through Anaconda Navigator (search anaconda navigator from search bar).
Alternatively, see following sections to download IDEs and programming languages independently (you may need to set path variables).

## IDE

An Integrated Development Environment (IDE) is a program developed for coding/programming with your language of choice. There are several good IDE options available: <br>
- <a href="https://www.spyder-ide.org/" target="_blank">Spyder ⤴</a> is used for scientific programming in python. It is a user friendly IDE.
- RStudio is an IDE for programming in R. There are two options for using RStudio; <a href="https://www.rstudio.com/products/rstudio/#rstudio-server" target="_blank">RStudio Server ⤴</a> is online version and <a href="https://www.rstudio.com/products/rstudio/download/#download" target="_blank">RStudio Desktop ⤴</a> is a desktop application run locally. Check out the <a class="t-links" href="431">RStudio tutorial</a> for more details.
- <a href="https://jupyter.org/" target="_blank">Jupyter ⤴</a> supports multiple programming languages. Check out the <a class="t-links" href="412">Jupyter tutorial</a> for more details.

## Python

Python is a high-level, general-purpose programming language. It is one of the best languages to learn for a beginner in coding.

- <a href="https://www.python.org/downloads/windows/" target="_blank">Install Python ⤴</a> locally.
- Follow general guidelines for installation.
- Check out the <a class="t-links" href="420" title="true"></a> and <a class="t-links" href="531">Intro to Python</a> pages of this workbook for more details.

## R

R is a programming language for statistical computing and graphics. It is one of the most popular tools used for data mining, data modeling and generating graphics.

<a href="https://mirror.las.iastate.edu/CRAN/" target="_blank">Install R here ⤴</a> locally and check out the tutorials for <a class="t-links" href="430" title="true"></a> in this workbook for more details including installing R libraries.

Use RStudio and plot to test if R is working. Open RStudio, type following command in console and press enter.

```r
plot(1:50)
```

<table><tr>
  <td class="no-border"><img width="390" src="{{ images_path }}/01RStudio.png"></td>
  <td class="no-border">On the right side, you should see a scatter plot like this: <br> <img width="510" src="{{ images_path }}/02RStudio.png"></td>
</tr></table>


## Java

Java is also a High-level programming language. \
<a href="https://www.java.com/download/ie_manual.jsp" target="_blank">Download Java ⤴</a>

`Note:` If you are using Windows Subsystem for Linux (WSL), java installation on the Linux system will be different.\
Type `java` in command line (Linux) to get installation commands such as following:

```bash
sudo apt install default-jre                 # version 2:1.11-72, or
sudo apt install openjdk-11-jre-headless     # version 11.0.7+10-3ubuntu1
sudo apt install openjdk-8-jre-headless      # version 8u252-b09-1ubuntu1
```

## Perl

Perl is a High-level programming language. \
<a href="https://www.perl.org/get.html" target="_blank">Install Perl ⤴</a>

## Conda

Conda is an open-source package and environment manager. <a href="https://github.com/conda-forge/miniforge" target="_blank">Miniforge ⤴</a> is a minimalistic installer for conda.

## Docker

Docker is a platform used to deliver software in packages called containers. Check out the tutorials <a class="t-links" href="672.1">Docker basics</a> and <a class="t-links" href="670">Intro to Containers</a> for more details.

## NextFlow

Check out the <a href="https://bioinformaticsworkbook.org/dataAnalysis/nextflow/01_introductionToNextFlow.html" target="_blank">Intro to NextFlow ⤴</a> in our Bioinformatics Workbook for detailed information.

When using `nextflow` if you get following error:
```bash
nextflow: command not found
```
move nextflow in a directory into $PATH or use `./nextflow` if it is in your current path.


# More useful tools

- <a href="https://jbrowse.org/jb2/download/" target="_blank">Jbrowse ⤴</a> genome browser
- Connect to campus network from off-campus location: <a href="https://iastate.service-now.com/it?id=kb_article&sysparm_article=KB0011105&sys_kb_id=b45109171ba8d590ecc3fe6e034bcba0" target="_blank">VPN instructions ⤴</a> from Iowa State University
- For transferring data between HPC clusters and your laptop: <a href="https://www.hpc.iastate.edu/guides/globus-online" target="_blank">Globus instructions ⤴</a> from ISU
- <a href="https://slack.com/downloads/windows" target="_blank">Slack ⤴</a> messaging app for groups
- <a href="https://support.zoom.us/hc/en-us/articles/207373866-Zoom-Installers" target="_blank">Zoom ⤴</a> video platform for meetings, webinars, and online events
- <a href="https://www.webex.com/downloads.html" target="_blank">Webex ⤴</a> another video platform

## Great tools to have on a computer

- <a href="https://notepad-plus-plus.org/downloads/" target="_blank">Notepad++ ⤴</a> is a text and source code editor for Windows
- <a href="http://windowgrid.net/" target="_blank">Windowgrid ⤴</a> allows the user to quickly and easily layout their windows on screen
- <a href="https://getgreenshot.org/downloads/" target="_blank">Greenshot ⤴</a> is a screenshot tool with useful features
