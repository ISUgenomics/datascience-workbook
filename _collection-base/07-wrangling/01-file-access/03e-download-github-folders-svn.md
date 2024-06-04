---
title: "Downloading a single folder or file from GitHub"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 713.5
level: 3
categories: ["HPC, computing", "data-management", "data-transfer", "command-line", "computing-tools"]
tags: ["GitHub", "download", "command", "get-github-folder", "get-github-file"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Sometimes you may need to **download a specific folder from a repository** hosted on GitHub, but does not want to download the entire repository due to its large size. *For example, you may only need a particular folder that contains documentation or script related to a specific project.*

Downloading a single folder can be particularly useful if the repository is large and contains a lot of files that are not relevant to the task at hand, as cloning the entire repository can be time-consuming and take up a lot of storage space on the local machine. In this case, the users can download only the specific folder that they need, rather than the entire repository, using:

* [SVN version control system](#get-started-with-svn), to **download from the command line** <br>
    *This can be done on any local or remote machine, including HPC systems.*

* [online code editors](#download-from-a-browser), such as built-in <a href="https://github.dev/" target="_blank">GitHub VS Code  ⤴</a> or <a href="https://codesandbox.io" target="_blank">CodeSandbox  ⤴</a>, to **download in the browser** <br>
    *This can be done on a local machine and HPC cluser that has the Open OnDemand interface.*

<div class="protip" markdown="1">
These approches can save time and resources and allow the developer to work more efficiently.
</div>


# Download using CLI

<p class="footnote mt-0 mb-">(command line on a local or remote machine)</p>

## *Get started with SVN*

Subversion (SVN) is a popular **open-source centralized version control** system that allows developers to manage and track changes to their codebase. SVN is widely used in software development, as it allows teams to collaborate and maintain a single, up-to-date version of their codebase.
<div class="note" markdown="1">
SVN can be considered as an **alternative for Git** *(distributed version control tool)* and may be a better choice for smaller teams or for organizations with a more centralized development structure.
</div>
<div class="more" markdown="1">
...about version control systems such as SVN or Git, follow the tutorials provided in section <a class="t-links" href="932.1">09. Project Management / Storage & Version Control</a>.
</div>

To get started with SVN, check if it pre-installed on your computing machine, either local one or remote HPC system. In the terminal window type the following command:
```bash
svn --version
```
*This command checks if SVN is installed and displays the version number of SVN.* <br>
<em class="footnote">^ if it is installed on the system</em>
<pre class="output">
svn, version 1.14.3 (r1914484)
   compiled Dec  9 2023, 13:27:10 on arm-apple-darwin23.2.0

Copyright (C) 2023 The Apache Software Foundation.
This software consists of contributions made by many people;
see the NOTICE file for more information.
Subversion is open source software, see http://subversion.apache.org/
</pre>

*If the command is not recognized, it means that SVN is not installed on the system.*
<pre class="output">
svn: command not found
</pre>

<div class="warning" markdown="1">
If SVN is not installed on the HPC system, you may need to contact your system administrator to request that it be installed.
</div>

If SVN is not installed on your local machine, you will first need to download and install it on your system. SVN is available for Windows, macOS, and Linux, and can be downloaded from the Apache Subversion website: <a href="https://subversion.apache.org/download/" target="_blank">https://subversion.apache.org/download/  ⤴</a>.

<details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

Open a terminal and run the following command to update the package list. <br>
Then install SVN by running the following command:
```bash
sudo apt-get update
sudo apt-get install subversion
```
</details>

<details class="l-frame" markdown="1"><summary>Windows:</summary>

1. Download the SVN client for Windows from the official Apache website, <a href="https://www.apache.org/dyn/closer.lua/subversion/" target="_blank">https://www.apache.org/dyn/closer.lua/subversion/  ⤴</a>.
2. Choose the appropriate version of SVN for your Windows system (32-bit or 64-bit) and click on the download link to start the download.
3. Once the download is complete, double-click on the downloaded file to start the installation.
4. Follow the on-screen instructions to complete the installation.
</details>

<details class="l-frame mb" markdown="1"><summary>macOS:</summary>

Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a> if you don't already have it. <br>
Then install SVN using Homebrew by running the following command in a terminal:
```bash
brew install svn
```
</details>

**Once you have installed SVN, you can start using it!**

## **GitHub Folder**

One common use case is to download a single folder from a GitHub repository or other remote repository using the `svn export` command.

1. First, navigate to the location in your file system where you want to download. <br>
*You can do this by using the* `cd` *command in your terminal to navigate to the parent folder, and then using the* `ls` *command to list the contents of the folder.*
    ```bash
    cd path/to/destination/location
    ```

2. Go to the online repository and find a folder you want to download. Copy the URL from the address bar in the web browser. <br>
*Let's use the **bin_data** folder in the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">https://github.com/ISUgenomics/data_wrangling  ⤴</a>* GitHub repo as an example:
    ![01-svn_download_repo_folder.png]({{ images_path }}/01-svn_download_repo_folder.png)

3. Now, go back to the terminal window to download only the selected folder. <br>First, type `svn export` and paste the copied URL:
    ```bash
    svn export https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
    ```
    **NOTE:** Before you execute the command, replace `tree/main` with `trunk` keyword. <br>*Now, you can run the command:*
    ```
    svn export https://github.com/ISUgenomics/data_wrangling/trunk/bin_data
    ```

**3'.** To make it easier for future use, create an empty script file, e.g., `get_folder.sh` and copy-paste the code snippet:

```bash
#!/bin/bash

echo "----------------"
echo "USAGE:"
echo "       . ./get_GitHub_folder.sh <URL to the GitHub folder>"
echo "       . ./get_GitHub_folder.sh https://github.com/ISUgenomics/common_scripts/tree/master/get_GitHub_file"
echo "----------------"
echo ""

URL=`echo $1`
folder=`echo $URL | sed 's|tree/master|trunk|g'`

svn export $folder
```

Make the script executable:
```bash
chmod u+rwx get_folder.sh
```
*From now on, you do not need to replace keywords in the copy-pasted URL because it will be done automatically using the script.*

So, to download the folder from the example above, simply type in the command line:
```bash
get_folder.sh https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
```

<div class="protip mt" markdown="1">
Ideally, you should place the script in a directory with your all universal scripts, such as `~/SCRIPTS`. This way the path will be easy to remember. You can also add it to the $PATH environment variable to make it easier to execute the script.
```bash
export PATH=$PATH:~/SCRIPTS
```
<base class="mt">
For this change to be applied to every shell you open, add it to the file that the shell will source when it is invoked.
```bash
source ~/.bashrc
```
<base class="mt">
Then you can execute the script by its name from any location in the file syetem:
```bash
get_folder.sh https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
```
</div>


## **GitHub File**

If you need to download a single file from the GitHub repository you can use `svn export` or `wget`command in the terminal. This solution can be useful if you want to have the file downloaded directly to the remote machine such as HPC cluster.

## *use* `wget` *command*

The simplest solution to download a single file from the GitHub repository is the `wget` command.

<div class="protip" markdown="1">
You can use the `wget` command to download any type of file from online repository.
</div>

1. Open selected GitHub repository in any web browser and navigate to the file that you want to download.

2. Click the file name to open the preview of the GitHub rendering. Then, click the `Raw` button *(top-right corner)* to open the source code of the file.
    ![01-svn_download_repo_file2.png]({{ images_path }}/01-svn_download_repo_file2.png)

3. Copy the URL address of the raw file.

4. Open the terminal window and navigate to the desired location in the file system (on a local or remote machine).

5. Use the `wget` command followed by the copied URL:
    ```bash
    wget https://raw.githubusercontent.com/ISUgenomics/data_wrangling/main/bin_data/app/bin_data.py
    ```


## *use* `svn export` *command*

<div class="required" markdown="1">
To get started with the SVN tool (e.g., to check if you have it installed) see section [Get started with SVN](#get-started-with-svn) in this tutorial. To learn more about version control systems, including SVN and Git, explore tutorials in section <a class="t-links" href="932.1">09. Project Management / Storage & Version Control</a> of this workbook.
</div>

**Once you have installed SVN, you can use it to download a single file from the GitHub!**

1. First, navigate to the location in your file system where you want to download. <br> *You can do this by using the* `cd` *command in your terminal to navigate to the parent folder, and then using the* `ls` *command to list the contents of the folder.*
    ```bash
    cd path/to/destination/location
    ```

2. Go to the online repository, find a file you want to download and click on it to open its preview. Copy the URL from the address bar in the web browser. <br>
    *As an example, let's use the* `bin_data.py` *file located in the <a href="https://github.com/ISUgenomics/data_wrangling/bin_data/app" target="_blank">bin_data/app  ⤴</a> folder of the **data_wrangling** GitHub repo:*
    ![01-svn_download_repo_file.png]({{ images_path }}/01-svn_download_repo_file.png)

3. Now, go back to the terminal window to download only the selected file. First, type `svn export` and paste the copied URL.
    ```bash
    svn export https://github.com/ISUgenomics/data_wrangling/blob/main/bin_data/app/bin_data.py
    ```
    **NOTE:** Before you execute the command, replace `blob/master` or `blob/main` with `trunk` keyword.
    ```bash
    svn export https://github.com/ISUgenomics/data_wrangling/trunk/bin_data/app/bin_data.py
    ```

**3'.** To make it easier for future use, create an empty script file, e.g., `get_file.sh` and copy-paste the code snippet:

```bash
#!/bin/bash

echo "----------------"
echo "USAGE:"
echo "       . ./get_GitHub_file.sh <URL to the GitHub file>"
echo "e.g.,  . ./get_GitHub_file.sh https://github.com/ISUgenomics/common_scripts/blob/master/get_GitHub_file/get_GitHub_file.sh"
echo "----------------"
echo ""

URL=`echo $1`
file=`echo $URL | sed 's|blob/master|trunk|g' | sed 's|blob/main|trunk|g'`

svn export $file
get_GitHub_file.sh (END)
```

Make the script executable:
```bash
chmod u+rwx get_file.sh
```
*From now on, you do not need to replace keywords in the copy-pasted URL because it will be done automatically using the script.*

So, to download the file from the example above, simply type in the command line:
```bash
get_file.sh https://github.com/ISUgenomics/data_wrangling/blob/main/bin_data/app/bin_data.py
```


# Download from a browser

<p class="footnote mt-0 mb-">(manual download from the web-based GUI)</p>

<div class="warning" markdown="1">
These approach require browser access directly on the machine where the download will take place. <br>
If you want **to download a single folder from a GitHub repository to a remote HPC system** that doesn't have a browser-based GUI, such as Open On Demand, then you need to <br>
**1) download the folder to a local machine** and further <br>
**2) transfer it to the cluster** <br> using, for example, an `ssh` connection and the `scp` or `rsync` commands.
</div>


## **GitHub Folder**

## *Edge | Opera | Chrome | Chromium*

If you have one of the browsers: Edge, Opera, Chrome, or Chromium...

1. use it to open the GitHub repository of your choice, and

2. navigate to the folder in the repo that you want to download.

3. Press `.` *(dot)* on your keyboard or replace manually `.com` with `.dev` in URL <br>
    *This will open the repo in the GitHub's internal editor directly in the browser window*

4. On the left-hand side, you can see the `Explorer` menu. Find the folder and `right-click` on it to display the dialog box. Then click on the `Download` option and select the directory on your file system as a location to save the content. <br>
<p align="center"><img width="800" src="{{ images_path }}/01-github_in-browser_editor.gif"></p>


## *Any browser: Safari, Firefox*

So far, the most robust and easiest way to download a single folder from a GitHub repository is to do it through an online editor such as **codesandbox**, which works reliably regardless of browser.

1. Open selected GitHub repository in any web browser and navigate to the folder in the repo that you want to download

2. In the URL address, replace ***github*** with ***githubbox*** <br>
    *This will open the repo in the codesandbox online editor directly in the browser window*

3. On the left-hand side, you can see the **File System** browser. Find the folder and `click` on the **Export to ZIP** option <button class="btn">&darr;</button>. This will download the zipped folder automatically and save it in your default location. <br>
    <p align="center"><img width="800" src="{{ images_path }}/github_in-browser_editor2.gif"></p>
    *To decompress the archive, use* `unzip` *or* `tar -xf` *command followed by the name of the downloaded file:*
    ```bash
    unzip isugenomics-data-wrangling-bin-data.zip
    ```


## **GitHub File**

If you need to download a single file from the GitHub repository to your local machine, you can do that directly from a web browser.

1. Open selected GitHub repository in any web browser and navigate to the file that you want to download.

2. Click the file name to open the preview of the GitHub rendering. Then, in the upper right corner you should see the horizontal menu with several buttons, including `Raw`, `Blame`, `Edit`, `Copy raw contents`, and `Delete this file`.
  * Right-click on the `Raw button` and select `Download linked File` from the pop-up dialog box. <br>
    *Navigate to the location where you save downloads by default to find the file.*
  or
  * Click-on the `Copy raw contents` button to copy the contents of the file to the clipboard. <br>
    *You can then paste the copied contents into any text file.*

![01-svn_download_repo_file3.png]({{ images_path }}/01-svn_download_repo_file3.png)
