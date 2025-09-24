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
categories: ["data-acquisition", "computing-tools", "resources", "remote-access"]
tags: ["hosting-platform", "GitHub", "repository", "git", "clone-repo", "download"]
attributes: ["example", "user-guide", "installation", "command", "ready-made-solution"]
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

<div class="note" markdown="1">
In general, online repositories can be used for any type of project that involves multiple files that change over time. Git is a powerful tool that facilitates management and version control of these repositories. <br>In particular, **you can use** `git` **to download the repository you need**. <br>That's what you will learn in this practical tutorial [ *go to the [hands-on section](#hands-on-tutorial)* ].
</div>

<div class="more" markdown="1">
...about project storage and version control, explore the <a class="t-links" href="932.1">09. Project Management / Storage & Version Control</a> section in this workbook. Specifically, you can **get started with a few popular online hosting platforms** that allow you to version control using Git:
* <a class="t-links" href="932.3"></a>
  * <a class="t-links" href="932.4"></a>
  * <a class="t-links" href="932.5"></a>
</div>

<div class="protip" markdown="1">
If you are planning to contribute to any repository, it is worthwhile for you to learn more about the useful options offered by `Git`. In this case, use the hands-on tutorials that provide **instructions for more advanced git commands**:
* <a class="t-links" href="932.2">
  * <a class="t-links" href="932.21">GIT Commands <i>cheatsheet</i></a>
* <a class="t-links" href="932.41"></a>
</div>


# Hands-on tutorial

In this tutorial, you will learn how to **download online repositories using the Git command-line interface**.
*Whether you are a seasoned developer or just starting out with Git, this tutorial will help you understand the basics of working with Git repositories and provide you with the tools and knowledge you need to effectively manage your code and data.*
<div class="protip" markdown="1">
You can also follow these instructions if you simply want to download resources from any public repository to use them locally.
</div>

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
<pre class="output">
<b class="prompt-3"></b><b class="prompt-1 before" data-before="git --version"></b>
git version 2.39.3 (Apple Git-145)
</pre>
*If you see a similar output on the screen, you have already everything you need.* <br>**Skip to step [2. Clone the repository](#2-clone-the-repository).**

<div class="warning" markdown="1">
In case `git` is not installed on your machine, an error message will appear on the screen:
<pre class="output plain" style="font-size:0.8em;">
git: command not found
</pre>
Then, you need to install `git` manually. Follow the instructions given for the specific operating system:

<details class="l-frame mb" markdown="1"><summary><b>LINUX</b></summary>

The easiest way to install Git on Linux is through your distribution's package manager. <base class="mb">
Here are the steps to install Git on some of the most popular Linux distributions. <br>*Copy-paste commands to your terminal window.*

* **Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install git
```

* **Fedora:**
```bash
sudo dnf update
sudo dnf install git
```

* **CentOS:**
```bash
sudo yum update
sudo yum install git
```

For more information, please see the official Git docs: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git ⤴</a>
</details>
<details class="l-frame mb" markdown="1"><summary><b>MacOS</b></summary>

There are a few ways to install Git on MacOS, including using:

* **A. the Homebrew package manager** <br>
  *Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a> if you don't already have it, then:*
  ```bash
brew update
brew install git
```

* **B. the MacPorts software package** <br>
  *Install <a href="https://www.macports.org/" target="_blank">MacPorts  ⤴</a> if you don't already have it, then:*
  ```bash
sudo port install git
```

For more information, please see the official Git documentation: <a href="https://git-scm.com/download/mac" target="_blank">https://git-scm.com/download/mac</a>
</details>
<details class="l-frame" markdown="1"><summary><b>Windows</b></summary>

The easiest way to install Git on Windows is to download the official Git for Windows installer from the Git website: <a href="https://git-scm.com/downloads/win" target="_blank">https://git-scm.com/download/windows  ⤴</a> <base class="mb">
*Follow the instructions in the installer to complete the installation process. After installation, you can access Git from the Windows command prompt or from Git Bash, which is included with the Git for Windows installation.*
</details>
</div>


## 2. Clone the repository

Know that you can use a command line Git to **download a repository from any platform that supports Git**, including GitHub, Bitbucket, GitKraken, SourceForge, and others. The command works the same way regardless of the platform you are using. All you need to do is specify the URL of the repository you want to clone, and Git will take care of the rest.

<div class="protip" markdown="1">
It's worth noting that while Git is a distributed version control system, and you can use it to clone a repository from any Git server, some platforms like **GitHub and Bitbucket offer additional features and services that are specifically designed for Git**, such as issue tracking, pull requests, and continuous integration and deployment. So, depending on your needs, you may want to consider using a platform like GitHub or Bitbucket for your Git work.
</div>


## `git clone` *command*

The `git clone` command is one of the most basic and essential Git commands. It allows you to download (or "clone") an entire Git repository from a remote server to your local computer. <br>
*This can be useful when you want to start working with an existing project or contribute to an open-source project.*

The basic syntax of the git clone command is as follows:
```bash
git clone <repository-url>
```

where `<repository-url>` is the URL of the Git repository you want to clone. <br>
*Replace* `<repository_url>` *with the URL of the repository you want to download.*


### <button class="btn example">Download from GitHub</button>
<div class="example before" data-before="" markdown="1">
For example, let's clone the Git repository hosted at <a href="https://github.com" target="_blank">GitHub  ⤴</a>.
</div>

Open any web browser and navigate to <a href="https://github.com" target="_blank">https://github.com  ⤴</a>.

![01-github_website.png]({{ images_path }}/01-github_website.png)

Use the searching key `ISUgenomics/data_wrangling` in the upper right corner to find a **data_wrangling** repository.

![01-github_website.png]({{ images_path }}/01-github_website_search.png)

When you land on the target repository page, you can:
* copy the URL from the browser address box on the top of the page
or
* click on the green `code` button. This will display the dialog box from which you can also copy the correct URL for the repo.

![01-github_website.png]({{ images_path }}/01-github_website_clone.png)

<a class="t-links" href="310" section="#open-terminal-window">Open your terminal</a> or command prompt and navigate to the directory where you want to store the repository. Then, run the `git clone` command followed by the copied URL:

```bash
git clone https://github.com/ISUgenomics/data_wrangling.git
```

![01-git_download_repo.png]({{ images_path }}/01-git_download_repo.png)

After the repository is cloned, check it. Navigate into the repository's directory using `cd` command:

```bash
cd data_wrangling
```
and list the contents using `ls` command:
```bash
ls
```

![01-git_download_repo_content.png]({{ images_path }}/01-git_download_repo_content.png)

**That's it!** You now have a local copy of the remote repository and can start using it (e.g., analyzing data, running software, reading docs).

For example, you can run:
* `git log` to see a list of all the commits made to the repository
* `git status` to see a list of local changes which are not yet sent to the online repository

![01-git_download_repo_status.png]({{ images_path }}/01-git_download_repo_status.png)

Also, you can also use the* `git status` *command to check the current branch, as it will show you the branch you are currently on in the output.

<div class="warning" markdown="1">
When cloning a repository, Git automatically creates a remote named 'origin' that points to the URL you cloned from. You can interact with the remote using Git commands such as: <br>
`git pull` - to download changes from a remote Git repository to your local machine, <br>
`git add` - to add files to the staging area, which is where you prepare changes to be committed to the Git repo, <br>
`git commit` - to create a new commit in the Git repository, which is a snapshot of the current state of the code, <br>
`git push` - to upload changes from your local machine to a remote Git repository.
</div>
<div class="protip" markdown="1">
If you are planning to become a contributor to the repository, start making changes, committing your work, and pushing your changes back to the remote server.
</div>
<div class="more" markdown="1">
If you are planning to contribute to any GIT-based repository, it is worthwhile for you to learn more about the useful options offered by git. In this case, use the hands-on tutorials that provide **instructions for more advanced git commands**:
* <a class="t-links" href="932.2"></a>
  * <a class="t-links" href="932.21">GIT Commands</a> *(cheatsheet)*
</div>
