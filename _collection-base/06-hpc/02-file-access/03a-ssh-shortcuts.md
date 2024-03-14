---
title: "SSH shortcuts and password-less login"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 623.1
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Setup password-less login for HPC

Most HPC resources should now require double authentication which will make this type of password-less login not possible.  For those that don't have double authentication, this will work.

To login automatically from your machine to the remote host, you can save the private/public key pair in both machines. This way, you don't have to enter password each time you login.

## Step 1: Create public and private keys (local computer)

```bash
ssh-keygen
```

## Step 2: Copy the public key to remote-host

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub userid@MACHINENAME
```

## Step 3: Login  

```bash
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
