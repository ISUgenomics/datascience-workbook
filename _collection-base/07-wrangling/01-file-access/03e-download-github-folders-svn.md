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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / [1.2 Remote Data Download](03-0-remote-data-download.md) / **1.2.4 Downloading Single Folder from GitHub using SVN**

---

# Introduction

Sometimes you may need to **download a specific folder from a repository** hosted on GitHub, but does not want to download the entire repository due to its large size. *For example, you may only need a particular folder that contains documentation or script related to a specific project.*

Downloading a single folder can be particularly useful if the repository is large and contains a lot of files that are not relevant to the task at hand, as cloning the entire repository can be time-consuming and take up a lot of storage space on the local machine. In this case, the users can download only the specific folder that they need, rather than the entire repository, using:

* [SVN version control system](#download-using-svn), to **download from the command line** <br>
<i>This can be done on any local or remote machine, including HPC systems.</i>

* [online code editors](#download-from-a-browser), such as built-in <a href="https://github.dev/" target="_blank">GitHub VS Code  ⤴</a> or <a href="https://codesandbox.io" target="_blank">CodeSandbox  ⤴</a>, to **download from the browser** <br>
<i>This can be done on a local machine and HPC cluser that has the Open OnDemand interface.</i>

This can save time and resources and allow the developer to work more efficiently.


# Download using CLI

<span style="color: #ff3870;font-weight: 500;">(command line on a local or remote machine)</span>

## *Get started with SVN*

Subversion (SVN) is a popular **open-source centralized version control** system that allows developers to manage and track changes to their codebase. SVN is widely used in software development, as it allows teams to collaborate and maintain a single, up-to-date version of their codebase. SVN can be considered as an **alternative for Git** *(distributed version control tool)* and may be a better choice for smaller teams or for organizations with a more centralized development structure.

<span style="color: #ff3870;font-weight: 500;">To learn more about version control systems such as SVN or Git, follow the tutorials provided in section <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/01-storage-version-control" target="_blank">09. Project Management: Storage & Version Control  ⤴</a>.</span>

To get started with SVN, check if it pre-installed on your computing machine, either local one or remote HPC system. In the terminal window type the following command:
```
svn --version
```

*This command will check if SVN is installed and display the version number of SVN if it is installed on the system. If the command is not recognized, it means that SVN is not installed on the system.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
If SVN is not installed on the HPC system, you may need to contact your system administrator to request that it be installed.
</span>
</div><br>

If SVN is not installed on your local machine, you will first need to download and install it on your system. SVN is available for Windows, macOS, and Linux, and can be downloaded from the Apache Subversion website: <a href="https://subversion.apache.org/download/" target="_blank">https://subversion.apache.org/download/  ⤴</a>.

<details><summary>Ubuntu/Debian:</summary>

<i>Open a terminal and run the following command to update the package list. <br>
Then install SVN by running the following command:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
sudo apt-get update <br>
sudo apt-get install subversion
</code><br>
</details>

<details><summary>Windows:</summary>

<i>1. Download the SVN client for Windows from the official Apache website, <a href="https://www.apache.org/dyn/closer.lua/subversion/" target="_blank">https://www.apache.org/dyn/closer.lua/subversion/  ⤴</a>. <br>
2. Choose the appropriate version of SVN for your Windows system (32-bit or 64-bit) and click on the download link to start the download. <br>
3. Once the download is complete, double-click on the downloaded file to start the installation. <br>
4. Follow the on-screen instructions to complete the installation.</i><br>
</details>

<details><summary>macOS:</summary>

<i>Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a>
 if you don't already have it. <br>Then install SVN using Homebrew by running the following command in a terminal:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
brew install svn
</code><br>
</details><br>

**Once you have installed SVN, you can start using it!**

## **GitHub Folder**

One common use case is to download a single folder from a GitHub repository or other remote repository using the `svn export` command.

**1.** First, navigate to the location in your file system where you want to download. <br> *You can do this by using the `cd` command in your terminal to navigate to the parent folder, and then using the `ls` command to list the contents of the folder.*
```
cd path/to/destination/location
```

**2.** Go to the online repository and find a folder you want to download. Copy the URL from the address bar in the web browser. <br>
*Let's use the **bin_data** folder in the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">https://github.com/ISUgenomics/data_wrangling  ⤴</a>* GitHub repo as an example:

![01-svn_download_repo_folder.png]({{ images_path }}/01-svn_download_repo_folder.png)

**3.** Now, go back to the terminal window to download only the selected folder. First, type `svn export` and paste the copied URL.

```
svn export https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
```

Before you execute the command, replace **tree/main** with **trunk** keyword.

```
svn export https://github.com/ISUgenomics/data_wrangling/trunk/bin_data
```

**3'.** To make it easier for future use, create an empty script file, e.g., `get_folder.sh` and copy-paste the code snippet:

```
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
```
chmod u+rwx get_folder.sh
```

From now on, you do not need to replace keywords in the copy-pasted URL because it will be done automatically using the script. So, to download the folder from the example above, simply type in the command line:
```
get_folder.sh https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
```

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Ideally, you should place the script in a directory with your all universal scripts, such as ~/SCRIPTS. This way the path will be easy to remember. You can also add it to the $PATH environment variable to make it easier to execute the script. <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
export PATH=$PATH:~/SCRIPTS
</code> <br>
For this change to be applied to every shell you open, add it to the file that the shell will source when it is invoked.
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
source ~/.bashrc
</code> <br>
Then you can execute the script by its name from any location in the file syetem:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
get_folder.sh https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data
</code> <br>
</span>
</div><br>


## **GitHub File**

If you need to download a single file from the GitHub repository you can use `svn export` or `wget`command in the terminal. This solution can be useful if you want to have the file downloaded directly to the remote machine such as HPC cluster.

## • *use `wget` command*

If you need to download a single file from the GitHub repository, the simplest solution is to use `wget` command.

**1.** Open selected GitHub repository in any web browser and navigate to the file that you want to download.

**2.** Click the file name to open the preview of the GitHub rendering. Then, click the `Raw` button *(top-right corner)* to open the source code of the file.

![01-svn_download_repo_file2.png]({{ images_path }}/01-svn_download_repo_file2.png)

**3.** Copy the URL address of the raw file.

**4.** Open the terminal window and navigate to the desired location in the file system (on a local or remote machine).

**5.** Use the `wget` command followed by the copied URL:
```
wget https://raw.githubusercontent.com/ISUgenomics/data_wrangling/main/bin_data/app/bin_data.py
```

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can use the <b>wget</b> command to download any type of file from online repository.
</span>
</div><br>


## • *use `svn export` command*

<span style="color: #ff3870;font-weight: 500;">To get started with the SVN tool (e.g., to check if you have it installed) see section [Get started with SVN](#get-started-with-svn) in this tutorial.</span> To learn more about version control systems, including SVN and Git, explore tutorials in section <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/01-storage-version-control" target="_blank">09. Project Management: Storage & Version Control  ⤴</a> of this workbook.

**Once you have installed SVN, you can use it to download a single file from the GitHub!**

**1.** First, navigate to the location in your file system where you want to download. <br> *You can do this by using the `cd` command in your terminal to navigate to the parent folder, and then using the `ls` command to list the contents of the folder.*
```
cd path/to/destination/location
```

**2.** Go to the online repository, find a file you want to download and click on it to open its preview. Copy the URL from the address bar in the web browser. <br>
<i>As an example, let's use the **bin_data.py** file located in the <a href="https://github.com/ISUgenomics/data_wrangling/bin_data/app" target="_blank">bin_data/app  ⤴</a> folder of the **data_wrangling** GitHub repo:</i>

![01-svn_download_repo_file.png]({{ images_path }}/01-svn_download_repo_file.png)

**3.** Now, go back to the terminal window to download only the selected file. First, type `svn export` and paste the copied URL.

```
svn export https://github.com/ISUgenomics/data_wrangling/blob/main/bin_data/app/bin_data.py
```

Before you execute the command, replace **blob/master** or **blob/main** with **trunk** keyword.

```
svn export https://github.com/ISUgenomics/data_wrangling/trunk/bin_data/app/bin_data.py
```

**3'.** To make it easier for future use, create an empty script file, e.g., `get_file.sh` and copy-paste the code snippet:

```
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
```
chmod u+rwx get_file.sh
```

From now on, you do not need to replace keywords in the copy-pasted URL because it will be done automatically using the script. So, to download the file from the example above, simply type in the command line:
```
get_file.sh https://github.com/ISUgenomics/data_wrangling/blob/main/bin_data/app/bin_data.py
```

# Download from a browser

<span style="color: #ff3870;font-weight: 500;">(manual download from the web-based GUI)</span>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
These approach require browser access directly on the machine where the download will take place. <br>
If you want <b>to download a single folder from a GitHub repository to a remote HPC system</b> that doesn't have a browser-based GUI, such as Open On Demand, then you need to <b>1) download the folder to a local machine</b> and further <b> 2) transfer it to the cluster</b> using, for example, an ssh connection and the scp or rsync command.
</span>
</div><br>

## **GitHub Folder**

## • *Edge | Opera | Chrome | Chromium*

If you have one of the browsers: Edge, Opera, Chrome, or Chromium...

**1.** use it to open the GitHub repository of your choice, and

**2.** navigate to the folder in the repo that you want to download

**3.** Press `.` *(dot)* on your keyboard or replace manually `.com` with `.dev` in URL <br>
*This will open the repo in the GitHub's internal editor directly in the browser window*

**4.** On the left-hand side, you can see the `Explorer` menu. Find the folder and `right-click` on it to display the dialog box. Then click on the `Download` option and select the directory on your file system as a location to save the content.

<p align="center"><img width="800" src="{{ images_path }}/01-github_in-browser_editor.gif"></p>


## • *Any browser: Safari, Firefox*

So far, the most robust and easiest way to download a single folder from a GitHub repository is to do it through an online editor such as codesandbox, which works reliably regardless of browser.

**1.** Open selected GitHub repository in any web browser and navigate to the folder in the repo that you want to download

**2.** In the URL address, replace ***github*** with ***githubbox*** <br>
*This will open the repo in the codesandbox online editor directly in the browser window*

**3.** On the left-hand side, you can see the **File System** browser. Find the folder and `click` on the **Export to ZIP** option &darr;. This will download the zipped folder automatically and save it in your default location.

<p align="center"><img width="800" src="{{ images_path }}/github_in-browser_editor2.gif"></p>

*To decompress the archive, use `unzip` or `tar -xf` command followed by the name of the downloaded file:*
```
unzip isugenomics-data-wrangling-bin-data.zip
```

## **GitHub File**

If you need to download a single file from the GitHub repository to your local machine, you can do that directly from a web browser.

**1.** Open selected GitHub repository in any web browser and navigate to the file that you want to download.

**2.** Click the file name to open the preview of the GitHub rendering. Then, in the upper right corner you should see the horizontal menu with several buttons, including `Raw`, `Blame`, `Edit`, `Copy raw contents`, and `Delete this file`.

* Right-click on the `Raw button` and select `Download linked File` from the pop-up dialog box. <br>
<i>Navigate to the location where you save downloads by default to find the file.</i>

or

* Click-on the `Copy raw contents` button to copy the contents of the file to the clipboard. <br>
<i>You can then paste the copied contents into any text file.</i>


![01-svn_download_repo_file3.png]({{ images_path }}/01-svn_download_repo_file3.png)
