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



## Your home folder

When a new users are added to an HPC resource, a home folder is assigned to you.  You are the only non-admin user that has permission to access this folder.  Here are some home directory location examples:

* /home/first.lastname      #linux
* /Users/loginname          #macOS

Let's make sure everyone is in their home directories and take a look at what is in there.

```
cd
ls -lha
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


## Your Project Folder

A project folder or project space is where a user can perform data analysis. Your home folder is not a good location to do data analysis as it usually is capped to a small amount of storage (ie 5 Gigabytes). If you do not know or do not have a project folder, contact the admins for the HPC resource. Once you know your project folder you can create a softlink in your home folder to make it easy to get to.

First let's create a PROJECTFOLDER variable where `/PATH/To/Working/Directory` is the path to your project folder you just identified. Then, we can make a folder that will act as your HPC notebook where you will perform all of your analyses. We make a new folder to separate your analyses from another user in the same group using the same project folder space.

```
export PROJECTFOLDER=/PATH/To/Working/Directory
cd
mkdir $PROJECTFOLDER/${USER}_notebook
ln -s $PROJECTFOLDER/${USER}_notebook
```

Now if you list the contents of your home folder you should see a folder with the same name as your working directory

## .bashrc

Copy the contents of [this file to your .bashrc](.bashrc)

Be sure to update this line `export PROJECTFOLDER=/PATH/To/Working/Directory` with your project folder

```
cp .bashrc .bashrc.orig
nano .bashrc
```

Next time you login it will use the new `.bashrc` file.  If you don't want to login again you can execute this command.

```
source .bashrc
```


## Create softlinks for common folders

Home directories tend to be small in size, meaning they shouldn't be used for data analysis or for installing programs. Unfortunately, many programs use the home directory as a default location for installation.  To Avoid running into an issue where you exceed your home directory storage quota, it is strongly recommended to create softlinks for these folders in your main project folder.

Step1: export the path to your projectfolder so that we can softlink folders there
```
export PROJECTFOLDER=/PATH/To/Working/Directory
mkdir $PROJECTFOLDER/${USER}_notebook
```


```
mkdir $PROJECTFOLDER/${USER}_notebook/.config
mkdir $PROJECTFOLDER/${USER}_notebook/.nextflow
mkdir $PROJECTFOLDER/${USER}_notebook/.singularity
mkdir $PROJECTFOLDER/${USER}_notebook/.irods
mkdir $PROJECTFOLDER/${USER}_notebook/.cache
mkdir $PROJECTFOLDER/${USER}_notebook/.spack
mkdir $PROJECTFOLDER/${USER}_notebook/.plotly
mkdir $PROJECTFOLDER/${USER}_notebook/.conda  
mkdir $PROJECTFOLDER/${USER}_notebook/.local
mkdir $PROJECTFOLDER/${USER}_notebook/.lmod.d
mkdir $PROJECTFOLDER/${USER}_notebook/.ncbi
ls -d $PROJECTFOLDER/${USER}_notebook/.* | sort | awk 'NR>2' | xargs -I xx ln -s xx

```
