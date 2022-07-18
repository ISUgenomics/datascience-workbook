# Home Directory Setup



## Creating a working directory

Every HPC resource you use should designate you a folder for you to perform data analysis.

cd


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

## softlinks

* .config
* .singularity
* .irods
* .nextflow
* .Xauthority
* .
