---
title: "Introduction to Visual Studio Code"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /04-DevelopmentEnvironment/assets/images/04_development_envir_banner.png
---

{% include toc %}

# Visual Studio Code
VSCode is an editor made for coding and debugging. It supports multiple programming languages and includes features such as syntax highlighting, autocomplete, and debugging tools. In addition to its powerful editing capabilities, VSCode also offers integrated support for Git, the popular version control system. This allows user to manage code and collaborate with other team members. In this tutorial, we will get you started with using Visual Studio Code and using some of its useful features. <br>

## Installation
VSCode can be downloaded from <a href="https://code.visualstudio.com/download" target="_blank">VSCode website</a>. Once the download is complete, run the installer to install VSCode on your system. <br>
<br>
![logo](assets/images/VSC_logo.png)


## Shortcuts
The most useful shortcut you need to learn is `ctrl+shift+p` (or `cmd+shift+p` on mac) which opens the search bar for all commands. You can search for all available commands and their shortcuts. Below is a list of some useful shortcuts and the commands:
<br>
<table>
<thead><tr><th>Shortcut</th><th>Command</th></tr></thead><tbody>
 <tr><td><blockcode>ctrl+k v</blockcode></td><td>open markdown preview to the side</td></tr>
  <tr><td><blockcode>ctrl+shift+v</blockcode></td><td>open Markdown preview</td></tr>
 <tr><td><blockcode>shift+alt+c </blockcode></td><td>copy path of active file</td></tr>
 <tr><td><blockcode>ctrl+s</blockcode></td><td>file: save</td></tr>
 <tr><td><blockcode>ctrl+shift+s</blockcode></td><td>file: save as..</td></tr>
</tbody></table>

## Open a project
To open a project, go to `File` menu and select the `Open Folder` option. Select the folder containing your project files. <br>
<br>
![open](assets/images/VSC_open.png) <br>
<br>
The project folder, subfolders and files will appear in the `Explorer` pane on the left side of the editor. <br>
<br>
![explorer](assets/images/VSC_explorer.png) <br>
<br>
You can select a file from the opened folder, or create a new file. <br>
<br>
![newfile](assets/images/VSC_newfile.png) <br>
<br>
A new file opens up and you can start writing in it. VSCode is Markdown compatible. Check out the <a href="https://datascience.101workbook.org/09-ProjectManagement/02-DOCUMENTATION/02-intro-to-markdown" target="_blank">Intro to Markdown</a> page to learn more about Markdown. <br>
<br>
![text](assets/images/VSC_text.png)
<br>

## Terminal
The integrated terminal allows you to run command-line tools and scripts directly within the editor. If the terminal does not appear automatically at the bottom of the editor, it can be opened from the "View" menu and selecting "Terminal" or using the  ``ctrl+` `` shortcut keys. <br>
<br>
![terminal](assets/images/VSC_terminal.png)
<br>

## Debugging
VSCode has powerful tools to help you find and fix errors in your code. To start debugging, open the file containing the code, click `Run and Debug` button on the left side. This will open the `Debug` pane that lets you configure your debug settings and start the process. <br>
<br>
![debug](assets/images/VSC_debug.png)
<br>

## Version Control
If you are not familiar with Git, check out this tutorial about <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/02-intro-to-github" target="_blank">Intro to GitHub</a>. It is possible to work with Git repositories directly from the VSC editor. You can clone a repo, or initialize a repo for your project from the terminal. `Source Control` pane on the left is used to manage your Git repositories. The common Git operations such as Pull, Push, Commit, and creating branches can be performed from here. <br>
<br>
![VC](assets/images/VSC_sourcecontrol.png) <br>
<br>
If this is not already a git repo, VSC will ask you to initialize the repository. You will need to log in to your github account the first time you use git. <br>
<br>
![init](assets/images/VSC_initialize.png) <br>
<br>
Once you initialize, the contents of the open project folder will appear. You can now stage changes by clicking on the plus sign next to the file you are working with, <br>
<br>
![stage](assets/images/VSC_stage.png) <br>
<br>
or stage all changed files together by clicking on plus sign next to Changes. <br>
<br>
![Allstage](assets/images/VSC_Allchanges.png) <br>
<br>
You can now either first Commit and then Push the staged changes or do both steps together by clicking on the dropdown menu. <br>
<br>
![commit](assets/images/VSC_commit.png)
<br>

___
# Further Reading
* [Python Programming Environment](02-python-programming-environment)
* [R Programming Environment](03-r-programming-environment.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-DevelopmentEnvironment-LandingPage){: .btn  .btn--primary}
[Previous](01-integrated-development-environment){: .btn  .btn--primary}
[Next](02-python-programming-environment){: .btn  .btn--primary}
