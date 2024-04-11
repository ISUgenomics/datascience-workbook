---
title: "Downloading online repos using GIT: <i>[GitHub, Bitbucket, SourceForge]</i>"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 713.4
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

**<a href="https://git-scm.com" target="_blank">Git  ⤴</a> is a free and open source distributed version control system** that allows you to manage various repositories and collaborate with other people on a project. Online repositories have long ceased to be dedicated only to code development. Now, you can create or **download a variety of different types of repositories**, including:

* standalone software and libraries
* web developments: websites, web servers, web applications
* data science projects: workflows, pipelines, datasets, and databases
* configuration files
* documentation and tutorials
* books and personal notebooks

In general, online repositories can be used for any type of project that involves multiple files that change over time. Git is a powerful tool that facilitates management and version control of these repositories. In particular, **you can use `git` to download the repository you need**. That's what you will learn in this practical tutorial [ *go to the [hands-on section](#hands-on-tutorial)* ].

To learn more about project storage and version control, explore the <a class="t-links" href="932.1">09. Project Management / Storage & Version Control</a> section in this workbook. Specifically, you can **get started with a few popular online hosting platforms** that allow you to version control using Git:

<ul><li><a class="t-links" href="932.3"></a></li>
  <ul><li> <a class="t-links" href="932.4"></a></li>
  <li> <a class="t-links" href="932.5"></a></li></ul>
</ul>

<span style="color: #ff3870; font-weight: 500;">If you are planning to contribute to any repository</span>, it is worthwhile for you to learn more about the useful options offered by `Git`. In this case, use the hands-on tutorials that provide **instructions for more advanced git commands**:

<ul><li> <a class="t-links" href="932.2"></a></li>
  <ul><li> <a class="t-links" href="932.21">GIT Commands <i>cheatsheet</i></a></li></ul>
<li> <a class="t-links" href="932.41"></a></li></ul>


# Hands-on tutorial

In this tutorial, you will learn how to **download online repositories using the Git command-line interface**. <br>
Whether you are a seasoned developer or just starting out with Git, this tutorial will help you understand the basics of working with Git repositories and provide you with the tools and knowledge you need to effectively manage your code and data. <br>
*You can also follow these instructions if you simply want to download resources from any public repository to use them locally.*

<div class="note" markdown="1">
<a href="https://git-scm.com" target="_blank">Git  ⤴</a> is a popular and powerful version control system that is widely used for managing software development projects and other types of data. You can use command-line `git` to download the repository hosted on any remote server, including:
<a href="https://github.com" target="_blank">GitHub  ⤴</a>,
<a href="https://bitbucket.org" target="_blank">Bitbucket  ⤴</a>,
<a href="https://gitlab.com" target="_blank">GitLab  ⤴</a>,
<a href="https://sourceforge.net" target="_blank">SourceForge  ⤴</a>,
<a href="https://www.gitkraken.com" target="_blank">GitKraken  ⤴</a>.
</div>


## 1. Install Git

First, make sure you have Git installed on your computer. The easiest way is to check the installed version of git:

```bash
git --version
```

![01-git_download_version.png]({{ images_path }}/01-git_download_version.png)

**If you see a similar output on the screen, you have already everything you need. Skip to step [2. Clone the repository](#2-clone-the-repository).**

In case `git` is not installed on your machine, an error message will appear on the screen: `git: command not found`. Then, you need to install `git` manually. Follow the instructions given for the specific operating system:

**Linux** <br>
The easiest way to install Git on Linux is through your distribution's package manager. Here are the steps to install Git on some of the most popular Linux distributions. *Copy-paste commands to your terminal window.*

<details markdown="1"><summary>Ubuntu/Debian:</summary>

```bash
sudo apt-get update
sudo apt-get install git
```
</details>

<details markdown="1"><summary>Fedora:</summary>

```bash
sudo dnf update
sudo dnf install git
```
</details>

<details markdown="1"><summary>CentOS:</summary>

```bash
sudo yum update
sudo yum install git
```
</details><br>

For more information, please see the official Git documentation: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git ⤴</a>


**MacOS** <br>
There are a few ways to install Git on MacOS, including using:

<details markdown="1"><summary><b>A.</b> the Homebrew package manager</summary>

<i>Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a>
 if you don't already have it, then:</i>
```bash
brew update
brew install git
```
</details>

<details markdown="1"><summary><b>B.</b> the MacPorts software package</summary>

<i>Install <a href="https://www.macports.org/" target="_blank">MacPorts  ⤴</a>
 if you don't already have it, then:</i>
```bash
sudo port install git
```
</details><br>


For more information, please see the official Git documentation: <a href="https://git-scm.com/download/mac" target="_blank">https://git-scm.com/download/mac</a>


**Windows** <br>

The easiest way to install Git on Windows is to download the official Git for Windows installer from the Git website: <a href="https://git-scm.com/download/windows" target="_blank">https://git-scm.com/download/windows  ⤴</a>

*Follow the instructions in the installer to complete the installation process. After installation, you can access Git from the Windows command prompt or from Git Bash, which is included with the Git for Windows installation.*

## 2. Clone the repository

Know that you can use a command line Git to **download a repository from any platform that supports Git**, including GitHub, Bitbucket, GitKraken, SourceForge, and others. The command works the same way regardless of the platform you are using. All you need to do is specify the URL of the repository you want to clone, and Git will take care of the rest.

<div class="protip" markdown="1">
It's worth noting that while Git is a distributed version control system, and you can use it to clone a repository from any Git server, some platforms like **GitHub and Bitbucket offer additional features and services that are specifically designed for Git**, such as issue tracking, pull requests, and continuous integration and deployment. So, depending on your needs, you may want to consider using a platform like GitHub or Bitbucket for your Git work.
</div>


### `git clone` *command*

The `git clone` command is one of the most basic and essential Git commands. It allows you to download (or "clone") an entire Git repository from a remote server to your local computer. *This can be useful when you want to start working with an existing project or contribute to an open-source project.*

The basic syntax of the git clone command is as follows:
```bash
git clone <repository-url>
```

where `<repository-url>` is the URL of the Git repository you want to clone. <br>
*Replace `<repository_url>` with the URL of the repository you want to download.*


### *Example: download from GitHub*

For example, let's clone the Git repository hosted at <a href="https://github.com" target="_blank">GitHub  ⤴</a>.

Open any web browser and navigate to <a href="https://github.com" target="_blank">https://github.com  ⤴</a>.

![01-github_website.png]({{ images_path }}/01-github_website.png)

Use the searching key `ISUgenomics/data_wrangling` in the upper right corner to find a **data_wrangling** repository.

![01-github_website.png]({{ images_path }}/01-github_website_search.png)

When you land on the target repository page, you can:
* copy the URL from the browser address box on the top of the page
or
* click on the green `code` button. This will display the dialog box from which you can also copy the correct URL for the repo.

![01-github_website.png]({{ images_path }}/01-github_website_clone.png)

Open your terminal or command prompt and navigate to the directory where you want to store the repository. Then, run the `git clone` command followed by the copied URL:

```bash
git clone https://github.com/ISUgenomics/data_wrangling.git
```

![01-git_download_repo.png]({{ images_path }}/01-git_download_repo.png)

After the repository is cloned, check it. Navigate into the repository's directory using `cd` command:

```bash
cd data_wrangling
```

![01-git_download_repo_content.png]({{ images_path }}/01-git_download_repo_content.png)

**That's it!** You now have a local copy of the remote repository and can start using it (e.g., analyzing data, running software, reading docs). If you are planning to become a contributor to the repository, start making changes, committing your work, and pushing your changes back to the remote server.

For example, you can run:
* `git log` to see a list of all the commits made to the repository
* `git status` to see a list of local changes which are not yet sent to the online repository

![01-git_download_repo_status.png]({{ images_path }}/01-git_download_repo_status.png)

Also, you can also use the `git status` command to check the current branch, as it will show you the branch you are currently on in the output.

<div class="warning" markdown="1">
When cloning a repository, Git automatically creates a remote named 'origin' that points to the URL you cloned from. You can interact with the remote using Git commands such as: <br>
`git pull` - to download changes from a remote Git repository to your local machine, <br>
`git add` - to add files to the staging area, which is where you prepare changes to be committed to the Git repo, <br>
`git commit` - to create a new commit in the Git repository, which is a snapshot of the current state of the code, <br>
`git push` - to upload changes from your local machine to a remote Git repository.
</div>

If you are planning to contribute to any GIT-based repository, it is worthwhile for you to learn more about the useful options offered by git. In this case, use the hands-on tutorials that provide **instructions for more advanced git commands**:

<ul><li> <a class="t-links" href="932.2"></a></li>
  <ul><li> <a class="t-links" href="932.21">GIT Commands <i>cheatsheet</i></a></li></ul>
</ul>
