---
title: "Setting up your home directory for data analysis"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 631
level: 1
categories: ["hpc", "resources", "system-setup", "command-line"]
tags: ["remote-machine", "hpc-cluster", "storage-quota", "file-system", "home-dir", "workdir", "project-dir", ".bashrc", "softlink", "alias", "first-time-setup"]
attributes: ["user-guide", "ready-made-solution", "automation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Your home folder

When a new users are added to an HPC resource, a home folder is assigned to you.  You are the only non-admin user that has permission to access this folder.  Here are some home directory location examples:

* linux: `/home/first.lastname`
* macOS: `/Users/loginname`

Let's make sure everyone is in their home directories and take a look at what is in there.

```bash
cd
ls -lha
```

Part of the expected output should look like this:
<pre class="output">
total 99232
-rw-------    1 severin  staff    21K Apr 23 17:29 <span class="c-exercise">.bash_history</span>
-rw-r--r--    1 severin  staff   1.6K Oct 12  2023 <span class="c-exercise">.bash_profile</span>
-rw-r--r--    1 severin  staff   2.9K Feb  9 17:58 <span class="c-exercise">.bashrc</span>
drwx------    5 severin  staff   160B Nov 14 12:46 <span class="c-exercise">.ssh</span>
drwxr-xr-x    3 severin  staff    96B Mar  2  2023 <span class="c-header">bin</span>
<b class="prompt-2"></b>
</pre>


## Example Default Home folder

Often you will find the following files in a new user's home directory upon creation on a linux machine

| file            | description |
|-----------------|-------------|
| `.bash_logout`  | It is sourced by bash upon exit. The file makes it possible to run commands upon exiting shell. |
| `.bash_profile` | This file is read and commands executed upon login. <br>Often contains a command to execute `.bashrc` so that the login and non-login shells have the same environment. |
| `.bashrc`       | This file is read and commands executed for non-login interactive shells (SLURM jobs etc). |
| `.mozilla`      | Linux has a web browzer called mozilla and this is the folder that contains extensions and plugins. |
| `.ssh`          | This folder contains authorized keys and known hosts. |

It may also contain empty files that admins set up to determine if the user has completed a task.  For example, these two files let the admin know that this isn't a new account (.first-time-setup-complete) and that the user provided a phone number for resetting password or double authentication if the user lost it.

* `.first-time-setup-complete`
* `.phone-collect-complete`


## Your Project Folder

A project folder or project space is where a user can perform data analysis.

<div class="warning" markdown="1">
Your home folder is not a good location to do data analysis as it usually is capped to a small amount of storage (i.e., 5 Gigabytes).
</div>

If you do not know or do not have a project folder, contact the admins for the HPC resource.

<div class="protip" markdown="1">
Once you know your project folder you can create a softlink in your home folder to make it easy to get to.
</div>

First let's create a `PROJECTFOLDER` variable where `/PATH/To/Working/Directory` is the path to your project folder you just identified. Then, we can make a folder that will act as your HPC notebook where you will perform all of your analyses. We make a new folder to separate your analyses from another user in the same group using the same project folder space.

```bash
export PROJECTFOLDER=/PATH/To/Working/Directory
cd
mkdir $PROJECTFOLDER/${USER}_notebook
ln -s $PROJECTFOLDER/${USER}_notebook
```

Now if you list the contents of your home folder you should see a folder with the same name as your working directory.

<pre class="output">
<b class="prompt-3"></b>ls -lha
<b class="prompt-2"></b>
<span class="c-example">severin_notebook</span>   ->  /PATH/To/Working/Directory/severin_notebook
<b class="prompt-2"></b>
</pre>


## .bashrc

There is an example of a `.bashrc` file that you can use as a starter file.

First, make a backup of your original `.bashrc` file *(if any)*:

```bash
cp .bashrc .bashrc.orig
```

Then, check out the <a class="t-links" href="632">.bashrc tutorial</a> and *(manually)* copy the contents of <a class="t-links" href="632" section="#example-bashrc">this file</a> to your `.bashrc`.

Be sure to update the following lines in the file:

```bash
export PROJECTFOLDER=/PATH/To/Working/Directory
alias gclone='git clone git clone git@github.com:GITHUBID/$1'  # update your gitorganization or ID here
```

Finally, replace your existing `.bashrc` with the new one:

```bash
cp .bashrc .bashrc.orig
nano .bashrc
```

<base class="mt">
Next time you login it will use the new `.bashrc` file.  <br>
If you don't want to login again you can execute the following command in your current session:

```bash
source .bashrc
```


## Create softlinks for common folders

<div class="warning" markdown="1">
Home directories tend to be small in size, meaning they shouldn't be used for data analysis or for installing programs.
</div>

Unfortunately, many programs use the home directory as a default location for installation.  To Avoid running into an issue where you exceed your home directory storage quota, it is strongly recommended to **create softlinks** for these folders in your main project folder.

**Step 1:** export the path to your projectfolder so that we can softlink folders there:

```bash
export PROJECTFOLDER=/PATH/To/Working/Directory
mkdir $PROJECTFOLDER/${USER}_notebook
```

**Step 2:** Make new directories in your `$PROJECTFOLDER/${USER}_notebook/` and then softlink those folders in your `home` directory:

```bash
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
