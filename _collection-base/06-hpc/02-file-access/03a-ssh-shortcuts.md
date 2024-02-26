---
title: "SSH shortcuts and password-less login"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../00-IntroToHPC-LandingPage.md) / [2. Remote Access to HPC Resources](01-remote-data-access.md) / [2.2 Secure Shell Connection (SSH)](03-secure-shell-connection.md) / **2.2.1 SSH shortcuts and password-less login**

---


# Introduction

# Setup password-less login for HPC

Most HPC resources should now require double authentication which will make this type of password-less login not possible.  For those that don't have double authentication, this will work.

To login automatically from your machine to the remote host, you can save the private/public key pair in both machines. This way, you don't have to enter password each time you login.

## Step 1: Create public and private keys (local computer)

```
ssh-keygen
```

## Step 2: Copy the public key to remote-host

```
ssh-copy-id -i ~/.ssh/id_rsa.pub userid@MACHINENAME
```

## Step 3: Login  

```
ssh userid@MACHINENAME
# Ensure file permissions for ~/.ssh/.id_rsa (local) and ~/.ssh/authorized_keys (remote) are such that it is only readable by you!
```


# Shortcuts for SSH hosts

Are you tired of typing full length host-names while connecting via SSH? Do you frequently `scp` files from one server to another and have to lookup what the host-names are? Do you want to `rsync` between local and remote host easily with a simple command? Then, read-on.

The hard-way:

```bash
# connect
ssh username@login.scinet.science
# scp
scp yourfile usename@login.scinet.science:/path/to/destination/
# rsync
rsync -e 'ssh -c aes128-ctr' -rts your_folder username@login.scinet.science:/path/to/destination/
```

As you can see, if you have a bunch of hosts, it gets really hairy to retype them every time you want to do any of these things.

## The Solution

Create a `config` file under the `~/.ssh` directory, with the short name for these host-names. Then you can simply connect to the server by using the short name instead of the full host-name!


First, edit the file

```bash
vi ~/.ssh/config
```

and add the details:

```bash
Host ceres
  Hostname login.scinet.science
  User username
  ForwardX11 yes
  ServerAliveInterval 300
Host condo
  Hostname condo2017.its.iastate.edu
  User username
  ForwardX11 yes
```

Set permissions straight:

```bash
chmod 600 ~/.ssh/config
```

Now, have fun! the above commands can now be done using:

```bash
# connect
ssh ceres
# scp
scp yourfile ceres:/path/to/destination/
# rsync
rsync -e 'ssh -c aes128-ctr' -rts your_folder ceres:/path/to/destination/
```

You can read more about the config by opening the man page:

```bash
man ssh-config
```

Now, combine this with [password-less login](#setup-password-less-login-for-HPC) and work smart!



___
# Further Reading
* [2.3 Open On Demand (OOD) Connection](04-open-on-demand.md)
* learn more about [Remote Data Access in section 7: Data Acquisition](../../07-DataParsing/01-FILE-ACCESS/01-remote-data-access)

* [3. Setting up Your Home Directory for Data Analysis](../03-HOME-DIRECTORY/00-setting-up-home-directory)
* [4. Software Available on HPC](../04-SOFTWARE/01-software-available-on-HPC)
* [5. Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [6. Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](03-secure-shell-connection){: .btn  .btn--primary}
[Next](04-open-on-demand){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
