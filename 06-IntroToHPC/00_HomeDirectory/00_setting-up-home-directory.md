---
title: "Home Directory Setup"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

{% include toc %}




## Creating a working directory

Every HPC resource you use should designate you a folder for you to perform data analysis. Some examples of locations of home directories include

* /home/first.lastname      #linux
* /Users/loginname          #macOS

Let's make sure everyone is in their home directories.

```
cd
```

## Example Default Home folder

Often you will find the following files in a new user's home directory upon creation on a linux machine

* `.bash_logout`
  * sourced by bash upon exit. The file makes it possible to run commands upon exiting shell.
    * cleanup, fetchmail
* `.bash_profile`
  * This file is read and commands executed upon login
  * Often contains a command to execute `.bashrc` so that the login and non-login shells have the same environment.
* `.bashrc`
  * This file is read and commands executed for non-login interactive shells (SLURM jobs etc)
* `.mozilla`
  * Linux has a web browzer called mozilla and this is the folder that contains extensions and plugins
* `.ssh`
  * This folder contains authorized keys and known hosts

It may also contain empty files that admins set up to determine if the user has completed a task.  For example, these two files let the admin know that this isn't a new account (.first-time-setup-complete) and that the user provided a phone number for resetting password or double authentication if the user lost it.

* `.first-time-setup-complete`
* `.phone-collect-complete`


## .bashrc

Copy the contents of [this file to your .bashrc](.bashrc)

```
cp .bashrc .bashrc.orig
nano .bashrc
```

## Create softlinks for common folders

Home directories tend to be small in size, meaning they shouldn't be used for data analysis or for installing programs. Unfortunately, many programs use the home directory as a default location for installation.  To Avoid running into an issue where you exceed your home directory storage quota, it is strongly recommended to create softlinks for these folders in your main project folder.

Step1: export the path to your projectfolder so that we can softlink folders there
```
export PROJECTFOLDER=/PATH/To/Working/Directory
mkdir $PROJECTFOLDER/$USER
```


```
mkdir $PROJECTFOLDER/$USER/.config
mkdir $PROJECTFOLDER/$USER/.nextflow
mkdir $PROJECTFOLDER/$USER/.singularity
mkdir $PROJECTFOLDER/$USER/.irods
mkdir $PROJECTFOLDER/$USER/.cache
mkdir $PROJECTFOLDER/$USER/.spack
mkdir $PROJECTFOLDER/$USER/.plotly
# mkdir $PROJECTFOLDER/$USER/.conda  # do not create if using a BeeGFS parallel file system
mkdir $PROJECTFOLDER/$USER/.cpan
mkdir $PROJECTFOLDER/$USER/.local
mkdir $PROJECTFOLDER/$USER/.lmod.d
mkdir $PROJECTFOLDER/$USER/.ncbi
ls -d $PROJECTFOLDER/$USER/.* | sort | awk 'NR>2' | xargs -I xx ln -s xx

```
