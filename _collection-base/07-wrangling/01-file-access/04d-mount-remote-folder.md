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
{% include page-sourcing.html %}


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

<div class="warning" markdown="1">
However, it is important to note that mounting a remote HPC folder locally may NOT always be the best option. In some cases, it may be more appropriate to **work with the data directly on the remote cluster**, particularly if:
* the data is too large to be easily transferred to a local machine,
* there are concerns about data security.
<base class="mb">
Additionally, the process of **mounting a remote folder may require some technical expertise**, and may not be appropriate for all users or workflows.
</div>


## Mount using SSH connection

SSH (Secure Shell) is a secure network protocol that allows users to securely access and manage remote computers over an unsecured network. It encrypts all data transmitted between the client and server, ensuring that sensitive information is protected.

<div class="more" markdown="1">
...about SSH from the tutorial <a class="t-links" href="623"></a> available in section <a class="t-links" href="621">06. High-Performance Computing (HPC) / Remote Access to HPC Resources</a> in this workbook.
</div>

**SSHFS is a command-line tool** that allows you to mount a remote file system using SSH. It uses the SSH protocol to securely connect to the remote server and mount the remote file system on your local machine, allowing you to view and access files as if they were stored locally.


# <button class="btn c-good">HANDS-ON TUTORIAL</button>

##  mount remote folder

Here's a practical guide to mounting a remote HPC folder on a local machine using the `sshfs` command:

1. Open a terminal on your local machine and check if you have the `sshfs` already installed:
    ```bash
    sshfs --version
    ```
    *The expected output should looks like this:*
    ![01-remote_preview_sshfs.png]({{ images_path }}/01-remote_preview_sshfs.png)
    In case the command returned an error message <em class="c-bad">"Command not found"</em>, you need to install the `sshfs` tool on your local machine.
    <details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

    ```bash
    sudo apt-get update <br>
    sudo apt-get install sshfs
    ```
    </details>

    <details class="l-frame" markdown="1"><summary>Windows:</summary>

    *To install SSHFS on Windows, you will need to follow these steps:*
    1. Download the latest version of WinFsp from the following website: <a href="https://github.com/billziss-gh/winfsp/releases" target="_blank">https://github.com/billziss-gh/winfsp/releases  ⤴</a>
    * Click on the latest release and download the appropriate package for your version of Windows (32-bit or 64-bit).
    * Make sure to download both the "WinFsp" and "WinFsp SSHFS" packages.

    2. Install **WinFsp** by running the downloaded executable file and following the installation wizard.

    3. Once WinFsp is installed, install the SSHFS package by running the downloaded executable file and following the installation wizard.

    4. After installation, you should be able to mount a remote folder using SSHFS by opening a Command Prompt window and running the `sshfs` command.
    </details>

    <details class="l-frame" markdown="1"><summary>macOS:</summary>

    *Install <a href="https://brew.sh/" target="_blank">homebrew  ⤴</a> if you don't already have it.* <br>
    Then install SVN using Homebrew by running the following command in a terminal:
    ```bash
    brew install sshfs
    ```
    </details>


2. Once SSHFS is installed, you can mount a remote folder using the following command:
    ```bash
    sshfs user@hostname:/remote/folder /local/folder [options]
    ```
    *where:*
    * `user` is your username on the remote server,
    * `hostname` is the hostname or IP address of the remote server,
    * `/remote/folder` is he path to the remote folder you want to mount,
    * `/local/folder` is the mountpoint on your local machine  where you want to mount the remote folder.
    <div class="warning" markdown="1">
    Note that you may be prompted to enter your credentials: `password` and `MFA` (authentication) code for the remote server after running this command.
    </div>


3. Navigate to the **mountpoint** on your local machine:
   ```bash
   cd /local/folder
   ```

**That's it!** <br>
You should now be able to access the remote HPC folder as if it were stored locally on your macOS machine.

<div class="protip" markdown="1">
**Remember to always unmount a remote folder when your task is done.** <br>
To mount a remote folder again the next time you need to use it, you can use the same `sshfs` command that you used to mount it the first time. <base class="mb">
However, if you want to avoid having to type the command again every time you want to mount the remote folder, you can create a shell script (e.g., `mount_hpc_folder.sh`) that automates the process for you.
```bash
#!/bin/bash
sshfs user@hostname:/remote/folder /local/folder
```
<base class="mb">
Make the file executable by entering the following command in the terminal:
```bash
chmod +x mount_remote_folder.sh
```
<base class="mb">
To mount the remote folder using the script, simply run the script from the terminal:
```bash
./mount_remote_folder.sh
```
<base class="mb">
This will mount the remote folder to the local directory specified in the script. With this script, you can easily mount the remote folder with a single command, without having to remember the `sshfs` command, its arguments, and additional options.
</div>


##  unmount folder

To unmount a remote folder that you have mounted using SSHFS, you can use the `umount` command:
```bash
umount /local/folder
```

where `/local/folder` is a **mountpoint** on your local machine where the remote folder is currently mounted.


For example, if you mounted a remote folder to the `~/Documents/HPC` directory using SSHFS, you can unmount it using the following command:
```bash
umount ~/Documents/HPCumount
```

<div class="warning" markdown="1">
Note that **you may need to use sudo before the umount command** if you do not have sufficient permissions to unmount the directory. In that case, the command would be:
```bash
sudo umount mountpoint
```
</div>


## SSHFS options CheatSheet

The `sshfs` command has several additional options that can be used to customize the behavior of the mount. The table contains some of the most common options.

| option           | description |
|------------------|-------------|
| `-f`             |runs sshfs in the foreground, rather than detaching it as a background process|
| `-o`             |specify additional options to be passed to the underlying ssh command|
| `-o Port=1234`   |specify a custom SSH port|
| `-o reconnect`   |enables auto-reconnection to the server in case the connection is lost|
| `-o cache`       |enables caching of directory and file information to improve performance|
| `-o compression` |enables compression of data transferred over the SSH connection to reduce bandwidth usage|
| `-o allow_other` |allows other users on the system to access the mounted directory|
| `-o IdentityFile=filename` |specifies the SSH private key file to use for authentication|

These options can be combined together as needed, for example:
```bash
sshfs -o IdentityFile=mykey.pem -o compression -o allow_other user@hostname:/path/to/remote/folder ~/Documents/HPC
```

*In this example, we specify the SSH private key file to use for authentication, enable compression, and allow other users on the system to access the mounted directory.*
