---
title: "Copying Data via SSH using Command Line: <b>scp, rsync</b>"
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
{% include page-sourcing.html %}


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

<div class="note" markdown="1">
A `hostname` is a label that is assigned to a computer on a network, and it is used to identify the computer and its location on the network. The specific format of a hostname can vary, but it must be unique on the network in order to function correctly. <br>Here are some examples of hostnames:
* **example.com**, A domain name that is used to identify a website or a network of computers.
* **www.example.com**, The hostname of the web server that serves a website at the domain example.com.
* **ftp.example.com**, The hostname of the FTP server that serves files for the domain example.com.
* **mail.example.com**, The hostname of the mail server that handles email for the domain example.com.
* **192.168.1.100**, An IP address that is used to identify a computer on a local network.
* **my-computer**>, A hostname that is assigned to a computer on a local network.

</div>

## Command SYNTAX

The command syntax for both command line tools, `scp` and `rsync`, are very similar and use similar components:

`scp <source> <destination>`  or  `rsync <source> <destination>`

*e.g.,* <br>

```bash
scp /local/directory/file.txt username@remote-hostname:/remote/directory/
```

*where:* <br>
* `file.txt` - is a data file you want to transfer
* `/local/directory/` - is a relative or absolute path on your local machine to data location
* `username` - is the name of your user account on the remote machine
* `@` - is a linker in the username@hostname syntax
* `remote-hostname` - is the a label that is assigned to a remote computer
* `/remote/directory/` - is the relative or absolute path on a remote machine

<div class="protip" markdown="1">
A file path is used to specify the location of a file or directory on the computer's file system. There are two types of file paths: absolute paths and relative paths.
* **absolute path:** <br>
An absolute path is a complete path to a file or directory that starts from the root directory of the file system. Absolute paths provide a complete and unambiguous reference to a file or directory, and they always **start with a** `/` **character**. <br>
For example, `/home/user/documents/file.txt` is <u>an absolute path</u> to a file in a directory on the file system.
* **relative path:** <br>
A relative path, on the other hand, is a path to a file or directory that is relative to the current working directory. Relative paths do **NOT start with a** `/` **character**, and they are interpreted relative to the current working directory. <br>
For example, `./documents/file.txt` is <u>a relative path</u> to a file in a directory that is located in the current working directory.
  * current directory: `./`
  * one directory above: `../`
  *  two directories above: `../../`
...and so on
</div>


# SCP (secure copy)

**`scp` (secure copy) is a command line tool** for copying files between computers using SSH (Secure Shell) protocol for data transfer. It works by establishing an encrypted `ssh` connection between two computers and copying the data over this connection.

<span style="color: #ff3870;font-weight: 500;">SCP is usually available on Linux and Mac in terminal, and on Windows 10 in Windows PowerShell.</span><br>

**Getting started:** <br>
Open terminal window on your local machine and copy-paste the command example (provided below), while adjusting paths and credentials to your needs *(according to directions from the [Command SYNTAX](#command-syntax) section)*.

### <i>Copy file: <b>local to remote</b></i>

```bash
scp /local/directory/file.txt username@remote-hostname:/remote/directory/
```

### <i>Copy file: <b>remote to local</b></i>

```bash
scp username@remote-hostname:/remote/directory/file.txt /local/directory/
```

### <i>Copy a directory</i>

If you want to copy the entire directory, use the `scp -r` command, where the `-r` flag tells copy the directory and its contents recursively.

**- from local to remote**

```bash
scp -r /local/directory/file.txt username@remote-hostname:/remote/directory/
```

**- from remote to local**

```bash
scp -r username@remote-hostname:/remote/directory/file.txt /local/directory/
```

<div class="warning" markdown="1">
Admins of some HPC systems, e.g. <a class="t-links" href="612.1">SCINet Scientific Computing</a> <base>
<p class="inline" markdown="1">recommend to use `scp` **to transfer a single file only**. So please be aware of this note: </p><base class="mb">
<blockquote class="mb-0 mt-0">"It is not advised to use <code class="code-inline">scp -r</code> command to transfer directories to Ceres, since the setgid bit on directories at destination is not inherited. This is not a problem if directories are copied to <code class="code-inline">/home/$USER</code> but is a problem when copying to <code class="code-inline">/project</code> area and usually results in quota exceeded errors." </blockquote><base class="mb">
If you decide to use `scp` to transfer directories to **Ceres cluster** follow the instructions provided at <a href="https://scinet.usda.gov/guides/data/datatransfer#small-data-transfer-using-scp-and-rsync" target="_blank">SCINet website: Small Data Transfer Using scp  ⤴</a>.
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

<div class="note" markdown="1">
`rsync` works by comparing the source and destination files and only transferring the differences, making it **much more efficient than other file transfer tools**, such as `cp` or `scp`, when the source and destination files are similar. This makes rsync particularly useful **for transferring large files or large collections of files** that change only slightly over time, as it can significantly reduce the amount of data that needs to be transferred. <base class="mb">
In addition to its efficiency, rsync also **provides a number of features** that make it a versatile tool for file transfer and synchronization, such as:
* support for preserving file permissions and attributes,
* excluding files based on patterns,
* and transferring files over an encrypted ssh connection.
</div>

<span style="color: #ff3870;font-weight: 500;">RSYNC is usually available on Linux and Mac in terminal, and on Windows 10 in Windows PowerShell.</span><br>


**Getting started:** <br>
Open terminal window on your local machine and copy-paste the command example (provided below), while adjusting paths and credentials to your needs *(according to directions from the [Command SYNTAX](#command-syntax) section)*.

The general syntax for synchronization requires to provide the source and destination locations. You can synchronize locations on a single machine or between different computers.
```bash
rsync <source> <destination>
```

It can be practical to use the `rsync` command with `-avz` flags:
* `-a` - preserves file attributes such as permissions and ownership
* `-v` -  provides verbose output
* `-z` - compresses the data during transfer

<span style="color: #ff3870;font-weight: 500;">On the first transfer with <code>rsync</code> all data will be copied, while on future uses only the differences will be updated.</span>

### <i>Synchronize <b>local to remote</b></i>

```bash
rsync -avz /local/directory username@remote-hostname:/remote/directory
```

### <i>Synchronize <b>remote to local</b></i>

```bash
rsync -avz username@remote-hostname:/remote/directory /local/directory
```

### <i>Synchronize <b>File or Dir</b></i>

<b>Example 1:</b> if you wanted to **synchronize the file** `file.txt` stored in your home directory (`~/`) from your local computer to a remote computer with the hostname `example-hostname` and place it in the directory `~/backup`, you could run the following command:

```bash
rsync ~/file.txt user@example-hostname:~/backup
```

<b>Example 2:</b> if you wanted to **synchronize the directory** `~/data` from your local computer to a remote computer with the hostname `example-hostname` and place it in the directory `~/backup`, you could run the following command:

```bash
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
