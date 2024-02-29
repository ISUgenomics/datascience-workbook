---
title: "Mounting remote folder on a local machine"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 714.4
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / [1.3 Remote Data Preview without Downloading](04-0-remote-data-preview.md) / **1.3.4 Mounting Remote Folder on Local Machine**

---


# Introduction

**Using command line approaches for previewing remotely HPC resources** offers advantages in terms of speed, efficiency, and convenience. Users can quickly and easily access and manipulate remote files without having to download or transfer the entire dataset, making it an essential tool for data-intensive scientific research.

## *When to mount a remote folder?*

Mounting a remote High-Performance Computing (HPC) folder locally can be useful in a number of scenarios, such as:

* **improved security** <br>
<i>Mounting a remote HPC folder locally can improve security by reducing the need for data to be copied to and from the remote cluster. This can help to minimize the risk of data breaches or other security issues that can arise when data is transferred over the network.</i>

* **faster access to data** <br>
<i>If you are working with large data sets on a remote HPC cluster, accessing the data over the network can be slow and inefficient. Mounting the remote folder locally allows you to access the data as if it were stored on your local machine, which can greatly speed up data access and processing.</i>

* **display graphic files** <br>
<i>Graphics are often used in scientific research, including charts, graphs, and images. They can be successfully generated on computing clusters either as an output of some software or custom user's scripts. When you mount the remote folder locally, you can use local graphic software to open and view files that are stored on the remote cluster, as if they were stored locally. </i>

* **improved workflow** <br>
<i>Mounting a remote HPC folder locally can allow you to integrate your HPC workflows more seamlessly with your local workflows. For example, you may have local scripts or tools that you use to process data, and being able to access the remote data as if it were local can simplify your workflow and make it more efficient.</i>

* **better collaboration** <br>
<i>Mounting a remote HPC folder locally can make it easier to collaborate with colleagues who may be working on the same data set or project. By having access to the same data set locally, you can share code, scripts, and workflows more easily, and work together more efficiently.</i>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
However, it is important to note that mounting a remote HPC folder locally may NOT always be the best option. In some cases, it may be more appropriate to <b>work with the data directly on the remote cluster</b>, particularly if: <br>
<li>the data is too large to be easily transferred to a local machine,</li>
<li>there are concerns about data security.</li>
Additionally, the process of <b>mounting a remote folder may require some technical expertise</b>, and may not be appropriate for all users or workflows.
</span>
</div><br>


## Mount using SSH connection

SSH (Secure Shell) is a secure network protocol that allows users to securely access and manage remote computers over an unsecured network. It encrypts all data transmitted between the client and server, ensuring that sensitive information is protected.

<span style="color: #ff3870;font-weight: 500;">To learn more about SSH visit the tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/03-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a></span> available in section <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/01-remote-data-access" target="_blank">06. High-Performance Computing (HPC): Remote Access to HPC Resources  ⤴</a> of this workbook.

**SSHFS is a command-line tool** that allows you to mount a remote file system using SSH. It uses the SSH protocol to securely connect to the remote server and mount the remote file system on your local machine, allowing you to view and access files as if they were stored locally.

## **Hands-on tutorial**

##  • mount folder

Here's a practical guide to mounting a remote HPC folder on a local machine using the `sshfs` command:

**1.** Open a terminal on your local machine and check if you have the `sshfs` already installed:
```
sshfs --version
```

*The expected output should looks like this:*
![01-remote_preview_sshfs.png]({{ images_path }}/01-remote_preview_sshfs.png)

In case the command returned an error message <i>"Command not found"</i>, you need to install the `sshfs` tool on your local machine.

<details><summary>Ubuntu/Debian:</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update <br>
sudo apt-get install sshfs
</code><br>
</details>

<details><summary>Windows:</summary>

<i>To install SSHFS on Windows, you will need to follow these steps: <br>
1. Download the latest version of WinFsp from the following website: <a href="https://github.com/billziss-gh/winfsp/releases" target="_blank">https://github.com/billziss-gh/winfsp/releases  ⤴</a> <br>

* Click on the latest release and download the appropriate package for your version of Windows (32-bit or 64-bit).
* Make sure to download both the "WinFsp" and "WinFsp SSHFS" packages.

2. Install WinFsp by running the downloaded executable file and following the installation wizard.

3. Once WinFsp is installed, install the SSHFS package by running the downloaded executable file and following the installation wizard.

4. After installation, you should be able to mount a remote folder using SSHFS by opening a Command Prompt window and running the <b>sshfs</b> command.
</i><br>
</details>

<details><summary>macOS:</summary>

<i>Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a>
 if you don't already have it. <br>Then install SVN using Homebrew by running the following command in a terminal:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install sshfs
</code><br>
</details><br>

**2.** Once SSHFS is installed, you can mount a remote folder using the following command:

```
sshfs user@hostname:/remote/folder /local/folder [options]
```

*where:* <br>
* `user` is your username on the remote server,
* `hostname` is the hostname or IP address of the remote server,
* `/remote/folder` is he path to the remote folder you want to mount,
* `/local/folder` is the mountpoint on your local machine  where you want to mount the remote folder.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that you may be prompted to enter your credentials: password and MFA (authentication) code for the remote server after running this command.
</span>
</div><br>

**3.** Navigate to the **mountpoint** on your local machine:

```
cd /local/folder
```

**That's it! You should now be able to access the remote HPC folder as if it were stored locally on your macOS machine.**

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
<b>Remember to always unmount a remote folder when your task is done.</b><br>
To mount a remote folder again the next time you need to use it, you can use the same sshfs command that you used to mount it the first time. <br><br>
However, if you want to avoid having to type the command again every time you want to mount the remote folder, you can create a shell script (e.g., mount_hpc_folder.sh) that automates the process for you.

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
#!/bin/bash <br>
sshfs user@hostname:/remote/folder /local/folder
</code><br>

Make the file executable by entering the following command in the terminal:

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
chmod +x mount_remote_folder.sh
</code><br>

To mount the remote folder using the script, simply run the script from the terminal:

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./mount_remote_folder.sh
</code><br>

This will mount the remote folder to the local directory specified in the script. With this script, you can easily mount the remote folder with a single command, without having to remember the sshfs command, its arguments, and additional options.
</span>
</div><br>


##  • unmount folder

To unmount a remote folder that you have mounted using SSHFS, you can use the `umount` command:
```
umount /local/folder
```

where <b>/local/folder</b> is a mountpoint on your local machine where the remote folder is currently mounted.


For example, if you mounted a remote folder to the `~/Documents/HPC` directory using SSHFS, you can unmount it using the following command:
```
umount ~/Documents/HPCumount
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that <b>you may need to use sudo before the umount command</b> if you do not have sufficient permissions to unmount the directory. In that case, the command would be:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo umount mountpoint
</code><br>
</span>
</div><br>


## SSHFS options CheatSheet

The `sshfs` command has several additional options that can be used to customize the behavior of the mount. The table contains some of the most common options.

| option         | description |
|----------------|-------------|
| -f             |runs sshfs in the foreground, rather than detaching it as a background process|
| -o             |specify additional options to be passed to the underlying ssh command|
| -o Port=1234   |specify a custom SSH port|
| -o reconnect   |enables auto-reconnection to the server in case the connection is lost|
| -o cache       |enables caching of directory and file information to improve performance|
| -o compression |enables compression of data transferred over the SSH connection to reduce bandwidth usage|
| -o allow_other |allows other users on the system to access the mounted directory|
| -o IdentityFile=filename |specifies the SSH private key file to use for authentication|

These options can be combined together as needed, for example:
```
sshfs -o IdentityFile=mykey.pem -o compression -o allow_other user@hostname:/path/to/remote/folder ~/Documents/HPC
```

*In this example, we specify the SSH private key file to use for authentication, enable compression, and allow other users on the system to access the mounted directory.*
