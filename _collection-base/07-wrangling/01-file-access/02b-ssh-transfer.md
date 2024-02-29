---
title: "Copying data using SSH"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 712.2
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / [1.1 Remote Data Transfer](02-0-remote-data-transfer.md) / **1.1.2 Copying Data via SSH using Command Line: scp, rsync**

---


# Introduction

Copying data using SSH (Secure Shell connection) provides a **secure way to transfer data between two computers**. The **data is encrypted while it is being transmitted**, providing protection against eavesdropping and tampering. By establishing an encrypted connection and verifying the identity of the user, SSH protocol ensures that the data is transmitted securely.

**The data can be copied or synchronized between two computers** using a command line tools such as:
* **`scp` (secure copy)**, recommended for transferring individual files [[go to the section](#scp-secure-copy)]

or

* **`rsync` (secure synchronization)**, recommended to update the differences between the corresponding directories [[go to the section](#rsync-secure-synchro)]

## *What you need to start?*

All you need is a terminal window providing the **command line interface and your access credentials** to the remote machine. Typically, these include:

* `hostname` of the remote machine
* your `username`
* your access `password`
* multifactor `authentication code`

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
A <b>hostname</b> is a label that is assigned to a computer on a network, and it is used to identify the computer and its location on the network. The specific format of a hostname can vary, but it must be unique on the network in order to function correctly. <br>Here are some examples of hostnames:
<li><b>example.com</b>, A domain name that is used to identify a website or a network of computers.</li>
<li><b>www.example.com</b>, The hostname of the web server that serves a website at the domain example.com.</li>
<li><b>ftp.example.com</b>, The hostname of the FTP server that serves files for the domain example.com.</li>
<li><b>mail.example.com</b>, The hostname of the mail server that handles email for the domain example.com.</li>
<li><b>192.168.1.100</b>, An IP address that is used to identify a computer on a local network.</li>
<li><b>my-computer</b>, A hostname that is assigned to a computer on a local network.</li>
</span>
</div>

## Command SYNTAX

The command syntax for both command line tools, `scp` and `rsync`, are very similar and use similar components:

`scp <source> <destination>`  or  `rsync <source> <destination>`

*e.g.,* <br>

```
scp /local/directory/file.txt username@remote-hostname:/remote/directory/
```

*where:* <br>
* `file.txt` - is a data file you want to transfer
* `/local/directory/` - is a relative or absolute path on your local machine to data location
* `username` - is the name of your user account on the remote machine
* `@` - is a linker in the username@hostname syntax
* `remote-hostname` - is the a label that is assigned to a remote computer
* `/remote/directory/` - is the relative or absolute path on a remote machine

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
A file path is used to specify the location of a file or directory on the computer's file system. There are two types of file paths: absolute paths and relative paths. <br>
<li><b>absolute path:</b></li>
An absolute path is a complete path to a file or directory that starts from the root directory of the file system. Absolute paths provide a complete and unambiguous reference to a file or directory, and they always <b>start with a / character</b>. <br>
For example, <code>/home/user/documents/file.txt</code> is an absolute path to a file in a directory on the file system.<br><br>
<li><b>relative path:</b></li>
A relative path, on the other hand, is a path to a file or directory that is relative to the current working directory. Relative paths do <b>NOT start with a / character</b>, and they are interpreted relative to the current working directory. <br>
For example, <code>./documents/file.txt</code> is a relative path to a file in a directory that is located in the current working directory. <br>
- current directory:<b> ./ </b><br>
- one directory above: <b> ../ </b><br>
- two directories above: <b> ../../ </b><br>
...and so on
</span>
</div><br>


# SCP (secure copy)

**`scp` (secure copy) is a command line tool** for copying files between computers using SSH (Secure Shell) protocol for data transfer. It works by establishing an encrypted `ssh` connection between two computers and copying the data over this connection.

<span style="color: #ff3870;font-weight: 500;">SCP is usually available on Linux and Mac in terminal, and on Windows 10 in Windows PowerShell.</span><br>

**Getting started:** <br>
Open terminal window on your local machine and copy-paste the command example (provided below), while adjusting paths and credentials to your needs *(according to directions from the [Command SYNTAX](#command-syntax) section)*.

### <i>Copy file: <b>local to remote</b></i>

```
scp /local/directory/file.txt username@remote-hostname:/remote/directory/
```

### <i>Copy file: <b>remote to local</b></i>

```
scp username@remote-hostname:/remote/directory/file.txt /local/directory/
```

### <i>Copy a directory</i>

If you want to copy the entire directory, use the `scp -r` command, where the `-r` flag tells copy the directory and its contents recursively.

**- from local to remote**

```
scp -r /local/directory/file.txt username@remote-hostname:/remote/directory/
```

**- from remote to local**

```
scp -r username@remote-hostname:/remote/directory/file.txt /local/directory/
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Admins of some HPC systems, e.g. <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet infrastructure  ⤴</a> recommend to use <b><code>csp</code> to transfer a single file only</b>.<br>
So please be aware of this note: <br>
"It is not advised to use “scp -r” command to transfer directories to Ceres, since the setgid bit on directories at destination is not inherited. This is not a problem if directories are copied to /home/$USER but is a problem when copying to /project area and usually results in quota exceeded errors." <br>
If you decide to use scp to transfer directories to <b>Ceres cluster</b> follow the instructions provided at <a href="https://scinet.usda.gov/guides/data/datatransfer#small-data-transfer-using-scp-and-rsync" target="_blank">SCINet website: Small Data Transfer Using scp  ⤴</a>.
</span>
</div>

### Example Options

<i>To learn more about scp command and all available options <b>type “man scp”</b> in the command line.</i>

Here are some options most commonly used with the `scp` command:

* `-r` - **Recursively copy** the entire contents of a directory, including subdirectories and files.
* `-v` - **Verbose output.** Display the progress of the transfer and any error messages.
* `-P 8080` - **Specify the port** to use for the connection, *8080* is just an example.
* `-C` - **Compression** during transfer.
* `-q` - **Quiet mode.** Suppress output, including error messages.

<details><summary><b>Example 1:</b> Recursively copy a directory and its contents</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
scp -r ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 2:</b> Display verbose output during the transfer</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
scp -v ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 3:</b> Specify the port to use for the connection</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
scp -p 8080 ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 4:</b> Enable data compression during transfer</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
scp -C ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 5:</b> Suppress output, including error messages</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
scp -q ~/data user@example-hostname:~/backup
</code><br>
</details><br>


# RSYNC (secure synchro)

**`rsync` (secure synchronization) is a command line tool** for efficiently transferring and synchronizing files between computers using SSH (Secure Shell) protocol for data transfer. It works by establishing an encrypted `ssh` connection between two computers and copying the data over this connection. This tool is commonly used for backup, data replication, and file distribution.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
<b>rsync</b> works by comparing the source and destination files and only transferring the differences, making it <b>much more efficient than other file transfer tools</b>, such as cp or scp, when the source and destination files are similar. This makes rsync particularly useful <b>for transferring large files or large collections of files</b> that change only slightly over time, as it can significantly reduce the amount of data that needs to be transferred. <br><br>
In addition to its efficiency, rsync also <b>provides a number of features</b> that make it a versatile tool for file transfer and synchronization, such as: <br>
<li>support for preserving file permissions and attributes,</li>
<li>excluding files based on patterns,</li>
<li>and transferring files over an encrypted ssh connection.</li>
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;">RSYNC is usually available on Linux and Mac in terminal, and on Windows 10 in Windows PowerShell.</span><br>


**Getting started:** <br>
Open terminal window on your local machine and copy-paste the command example (provided below), while adjusting paths and credentials to your needs *(according to directions from the [Command SYNTAX](#command-syntax) section)*.

The general syntax for synchronization requires to provide the source and destination locations. You can synchronize locations on a single machine or between different computers.
```
rsync <source> <destination>
```

It can be practical to use the `rsync` command with `-avz` flags:
* `-a` - preserves file attributes such as permissions and ownership
* `-v` -  provides verbose output
* `-z` - compresses the data during transfer

<span style="color: #ff3870;font-weight: 500;">On the first transfer with <code>rsync</code> all data will be copied, while on future uses only the differences will be updated.</span>

### <i>Synchronize <b>local to remote</b></i>

```
rsync -avz /local/directory username@remote-hostname:/remote/directory
```

### <i>Synchronize <b>remote to local</b></i>

```
rsync -avz username@remote-hostname:/remote/directory /local/directory
```

### <i>Synchronize <b>File or Dir</b></i>

<b>Example 1:</b> if you wanted to **synchronize the file** `file.txt` stored in your home directory (`~/`) from your local computer to a remote computer with the hostname `example-hostname` and place it in the directory `~/backup`, you could run the following command:

```
rsync ~/file.txt user@example-hostname:~/backup
```

<b>Example 2:</b> if you wanted to **synchronize the directory** `~/data` from your local computer to a remote computer with the hostname `example-hostname` and place it in the directory `~/backup`, you could run the following command:

```
rsync -avz ~/data user@example-hostname:~/backup
```
*Using -avz* flags will also 1) preserve file attributes, 2) provide verbose output, and 3) compress the data during transfer.


### Example Options

<i>To learn more about scp command and all available options <b>type “man rsync”</b> in the command line.</i>

Here are some options most commonly used with the `rsync` command:

* `-a` - **Archive mode.** A shorthand for a set of options that preserve file attributes such as permissions, ownership, timestamps, and symbolic links.
* `-v` - **Verbose output.** Display the progress of the transfer and a list of the files being transferred.
* `-z` - **Compress** the data during transfer.
* `-r` - **Recursively copy** the entire contents of a directory, including subdirectories and files.
* `-n` - **Dry run.** Perform a test run without actually transferring any files.
* `-u` - **Update only.** Transfer only files that are newer on the source than on the destination.
* `--exclude='*.log'` - **Exclude files** or directories from the transfer based on a pattern, *'*.log'* is an example value for the option.

<details><summary><b>Example 1:</b> Transfer files in archive mode</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -a ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 2:</b> Display verbose output during the transfer</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -v ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 3:</b> Compress the data during transfer</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -z ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 4:</b> Recursively copy a directory and its contents</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -r ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 5:</b> Perform a dry run without transferring any files</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -n ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 6:</b> Update only files that are newer on the source than on the destination</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync -u ~/data user@example-hostname:~/backup
</code><br>
</details>

<details><summary><b>Example 6:</b> Exclude files or directories based on a pattern</summary>

<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
rsync --exclude='*.log' ~/data user@example-hostname:~/backup
</code><br>
</details>

___
# Further Reading
* [1.1.3 File Transfer using irods](02-3-tutorial-transfer-irods)

* [1.2 Remote Data Download](03-0-remote-data-download)
* [1.3 Remote Data Preview without Downloading](04-0-remote-data-preview)

* [2. Data Manipulation](../02-DATA-MANIPULATION/01-data-manipulation)
* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)
