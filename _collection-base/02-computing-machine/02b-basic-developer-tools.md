---
title: "Basic developer tools"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "article"
order: 222
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [03. Setting Up Computing Machine](00-SetUpComputingMachine-LandingPage.md) / [2. Must-Have Software](02-must-have-software.md) / **2.2 Basic Developer Tools**

---


# Introduction

Developer tools are a set of software and applications that are used by programmers and developers to **create, debug, and optimize the application's code**. Some of the most basic developer tools include:

1. [Integrated Development Environment (IDE)](#integrated-development-environment-ide) <br>*An IDE is a comprehensive tool that combines text editing, debugging, and other features in one unified interface. Examples include Visual Studio Code and Eclipse.*

2. [Text editor](#text-editor) <br>*A text editor is a basic tool used to write and edit code. Examples include Notepad, Sublime Text, and Atom.*

3. [Compiler](#compiler) <br>*A compiler is used to convert source code into machine code, which can be executed by a computer. Examples include GCC and Clang.*

4. [Debugger](#debugger) <br> *A debugger is used to identify and fix errors in code. It allows developers to step through the execution of a program, line by line, to identify where issues occur. Examples include GDB and LLDB.*

5. [Version control](#version-control) <br>*Version control systems are used to manage and track changes to code over time. Examples include Git and SVN.*

6. [Other tools](#other-tools)

## 1. Integrated Development Environment (IDE)

Integrated development environments (IDEs) provide many benefits to programmers and developers, including increased productivity and efficiency. IDEs offer a comprehensive set of tools, such as **code editing, debugging, and project management, in one unified interface**. Typically, it also includes **markdown editor**, which is a must-have for documentation of research projects to go along with your *GitHub* repo.

### VSC editor

With its powerful tools and flexibility, **V**isual **S**tudio **C**ode (<a href="https://code.visualstudio.com/download" target="_blank">VSC website  ⤴</a>) is a widely used and well-regarded IDE for programmers and developers of all skill levels. It offers an intuitive and user-friendly interface that allows for easy code editing, debugging, and project management. VSC supports multiple programming languages, including C++, C#, Python, and JavaScript, and has built-in libraries and frameworks that can be easily integrated into projects. Additionally, VSC offers a wide range of extensions and plugins that can be used to customize and enhance the development experience. Get started with the VSC by following the hands-on tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">Introduction to Visual Studio Code  ⤴</a>.


## 2. Text editor

Text editors are a fundamental tool for developers as they are used to write and edit code. They provide a basic interface for programmers to write, edit, and save their code files. Text editors are typically used to write code in a variety of programming languages such as JavaScript, Python, C++ and many more. Advanced text editors often include additional features such as code completion, code snippets, and built-in debugging tools, that help developers to write and test their code more efficiently.

Many text editors now offer **built-in markdown rendering** that is used to format text in a way that is reader-friendly. It is a valuable feature for developers because it allows them to write structured documents easily and preview the final result in real-time. The markdown documents are easy to read, share, and understand, which is essential for creating software documentation, blog posts, or README files.

### Atom Editor

**Atom** is a free and open-source text and source code editor available for download at <a href="https://atom.io" target="_blank">https://atom.io  ⤴</a>. This editor was the core of every developer’s toolbox for a long time now. It allows for cross-platform editing, smart autocompletion for multiple programming languages, find-preview-replace actions, browsing file system, editing code in multiple panes, managing built-in packages, and versioning code using `git`. Although the development of this distribution stopped in 2018, using it can still bring many benefits in your work.


## 3. Compiler

Compilers are a type of software that are used by developers to convert source code into machine code. Machine code is a set of instructions that can be executed by a computer's central processing unit (CPU). Compilers take the source code, which is written in a high-level programming language like C++ (*which is easier to understand by the developer*) and translate it into machine code that can be executed by the computer.

### GCC

GCC (GNU Compiler Collection) is a well-known open-source compiler that supports a wide range of programming languages, including C, C++, Objective-C, Fortran, Ada, and others. GCC is developed and maintained by the GNU Project and is available for Windows, macOS, and Linux platforms at <a href="https://gcc.gnu.org/install/index.html" target="_blank">https://gcc.gnu.org/install/index.html  ⤴</a>. The HPC systems have usually the GCC pre-installed. This compiler provides a set of command-line tools that can be used to compile and link source code into executable programs. It also includes a number of debugging and optimization options that can be used to identify and fix errors, and improve the performance of the final program.


## 4. Debugger

Debuggers are an essential tool for developers, allowing them to quickly and efficiently identify and fix errors in their code. These tools come equipped with a wide range of features, such as breakpoints, watchpoints, and call stacks. These advanced options enable developers to step through the execution of their program line by line, carefully examining the state of variables and identifying any bugs that may exist. Additionally, debuggers provide the ability to inspect the memory and registers of the program, providing even more insight into the inner workings of the code. They come in various forms, from basic command-line tools like GDB, to more advanced graphical debuggers built-in to IDEs, like the Visual Studio Debugger.

### Visual Studio Debugger

The Visual Studio Debugger is a powerful and feature-rich debugging tool that is integrated into the Visual Studio Integrated Development Environment ([VSC](#vsc-editor)). Some of the key features of the Visual Studio Debugger include:
* **breakpoints:** allows developers to pause the execution of a program at a specific line of code, so they can examine the state of the program and variables;
* **watchpoints:** allows developers to monitor specific variables or expressions and be notified when their values change;
* **call stack:** provides a view of the function call history, allowing developers to see the sequence of function calls that led to the current location in the program;
* **step-by-step execution:** allows developers to step through the execution of a program, line by line, to identify where errors are occurring;
* **reverse debugging:** allows developers to step backwards through the execution of a program, which can be useful for identifying the root cause of a problem;
* **data visualizers:** allows developers to view data in a variety of formats such as text, hexadecimal, and graphic, to make it easier to understand the values of variables;

Get started with the Visual Studio Debugger by following the hands-on tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">Introduction to Visual Studio Code  ⤴</a>.

## 5. Version control

Version control is a system that allows developers to track and manage changes to their code over time. It is a way to keep a history of all the changes made to the codebase, and it allows developers to roll back to previous versions of the code if necessary. <br>
There are different types of version control systems, but the most commonly used are:
* centralized version control systems (CVCS), for example **Subversion** and **Perforce**, which store all the code and its history in a central repository
* distributed version control systems (DVCS), for example **Git** and **Mercurial**, which allow developers to have a local copy of the codebase on their own computer

The DVCS allows developers to work on the code locally and then push their changes to a central repository. This improves collaboration, as developers can work on the code simultaneously without having to worry about conflicts.

### Git

Git is a widely-used distributed version control system, created by Linus Torvalds in 2005, that allows developers to track and manage changes to their code over time. It offers a wide range of features such as branching, merging and command-line tools, that allows for better collaboration between team members. This enables contributors to work on new features, bug fixes, and experiments without affecting the main codebase. The official website for Git is <a href="https://git-scm.com/" target="_blank">https://git-scm.com/  ⤴</a>.

Git also has several graphical user interfaces (GUIs) available to make it more user-friendly, including:
* **<a href="https://git-scm.com/downloads" target="_blank">Git GUI  ⤴</a>:** a simple and easy to use Git GUI that comes with Git (basic Git commands on a simple interface with a menu bar and buttons)
* **<a href="https://desktop.github.com/" target="_blank">GitHub Desktop  ⤴</a>:** a free Git client for Windows and Mac (visual branch management, and built-in merge conflict resolution, ability to connect to GitHub)
* **<a href="https://www.sourcetreeapp.com/" target="_blank">SourceTree  ⤴</a>, <a href="https://www.collab.net/downloads/giteye" target="_blank">GitEye  ⤴</a>, <a href="https://www.gitkraken.com/" target="_blank">GitKraken  ⤴</a>:** a cross-platform Git clients (visual branch management, built-in merge conflict resolution, ability to connect to GitHub)

## 6. Other tools

### Midnight Commander file menager

Midnight Commander (**mc**) is a free cross-platform visual file manager that can be used as a primary file manager in a terminal session. By default, it consists of two panels, allowing simultaneous viewing from a terminal of two locations in the file system. That can also be a remote location (e.g., sshfs mounted HPC cluster), which allows you to view graphical files with your favorite programs without downloading the files to your local machine.

### VPN client

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
