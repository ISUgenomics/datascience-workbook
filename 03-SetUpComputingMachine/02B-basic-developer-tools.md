---
title: "Basic Developer Tools"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /assets/images/pattern.png
---

{% include toc %}


## Basic Developer Tools

### Integrated Development Environment (IDE)

### Atom editor
Having a great markdown editor to go along with your *GitHub* repo is a must for documentation of bioinformatic projects.
<br>**Atom** is a free and open-source text and source code editor available for download at [https://atom.io](https://atom.io). This editor should be at the core of every developer’s toolbox. It allows for cross-platform editing, smart autocompletion for multiple programming languages, find-preview-replace actions, browsing file system, editing code in multiple panes, managing built-in packages, and versioning code using `git`.

### Midnight Commander file menager

Midnight Commander (**mc**) is a free cross-platform visual file manager that can be used as a primary file manager in a terminal session. By default, it consists of two panels, allowing simultaneous viewing from a terminal of two locations in the file system. That can also be a remote location (e.g., sshfs mounted HPC cluster), which allows you to view graphical files with your favorite programs without downloading the files to your local machine.

### Install VPN client

Virtual Private Network (VPN) is a technology that encrypts your internet traffic improve your online privacy. This means the data you transfer between your MacBook Pro and the HPC infrastructure is protected. Many computing networks, including SCINet and ISU HPC, require a secure connection via VPN to access resources and schedule your computations.

If you need a VPN to access your HPC you will need to download the software suggested by the administrator of the resource you wish to access. For us at Iowa State University, we use the [Cisco AnyConnect client](https://www.cisco.com/). The details of the installation and your first connection can be found at [https://it.engineering.iastate.edu/how-to/install-and-connect-to-vpn-pc](https://it.engineering.iastate.edu/how-to/install-and-connect-to-vpn-pc).

### File Transfer software

File transfer is the translocation or transport of data, usually stored in the file, through a communication channel from one computer system to another. Every time you connect via VPN to a computing infrastructure and want to put your input there, you will be transferring files. If your data is large, it's worth equipping yourself with a tool that will make file transfer easier, faster, and more secure. Consider the following options for your new MacBook Pro:
* [filezilla](https://filezilla-project.org/download.php)
  * Copy over any site information you need before formatting your old computer.
* [Globus](https://www.globus.org/data-transfer)
  * Move, sync, and share large amounts of data between GridFTP server and a user's computer.
* **sshfs**
  * Mount a remote filesystem from another server locally on your machine using SFTP. This is very useful for viewing files held on the cluster with your local graphics programs (e.g., charts, text files both *.docx* and *.pdf*).




___
# Further Reading
* [Basic Developer Libraries](02C-basic-developer-libraries.md)
* [Various Methods of Software Installation](03-various-methods-of-software-installation.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-SetUpComputingMachine-LandingPage.md){: .btn  .btn--primary}
[Previous](02A-basic-office-software.md){: .btn  .btn--primary}
[Next](02C-basic-developer-libraries.md){: .btn  .btn--primary}
