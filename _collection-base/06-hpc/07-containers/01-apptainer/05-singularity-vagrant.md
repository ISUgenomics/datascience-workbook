---
title: "Singularity on your Mac via Vagrant"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 671.5
level: 4
categories: ["hpc", "computing-tools", "command-line", "virtual-environment", "containers", "library-package-module"]
tags: ["local-machine", "macOS", "virtual-env", "container", "apptainer", "singularity", "Vagrant"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


<span style="color: #ff3870;font-weight: 800;">NOTE:</span>
In late 2021, **Singularity underwent a rebranding to Apptainer**, changing the command keyword from`singularity` to `apptainer`, though the majority of subsequent commands and options retained their functionality. <i>Learn more about the changes in the tutorial</i> <a class="t-links" href="671.1">Apptainer: the container system for secure HPC</a>{

Before diving into container tasks on HPC infrastructure:
* ensure you checked the available module using the commands:
```bash
module avail apptainer
module avail singularity
```
* load a module of your choice:
```bash
module load apptainer/<version>       # e.g., module load apptainer/1.1.9-py310-wsbt4ge
```
* and consistently use the appropriate keyword for your commands *(in this example: apptainer)*.

<span style="color: #ff3870;font-weight: 500;"><b>Apptainer is the recommended module</b> for container management, and users are advised to transition to it for enhanced functionality and support.</span>

# Introduction

# Singularity on your Mac via Vagrant

This recipe demonstrates how to run Singularity on your Mac via Vagrant and Ubuntu. The recipe requires access to brew which is a package installation subsystem for OS X. This recipe may take anywhere from 5-20 minutes to complete.

Note: this content was taken directly from http://singularity.lbl.gov/install-mac#setup which no longer exists.
## Setup
First, install brew if you do not have it already.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, install Vagrant and the necessary bits.

```bash
brew cask install virtualbox
brew cask install vagrant
brew cask install vagrant-manager
```

Option 1: Singularityware Vagrant Box
We are maintaining a set of Vagrant Boxes via Vagrant Cloud, one of Hashicorp many tools that likely you’ve used and haven’t known it. The current stable version of Singularity is available here:

singularityware/singularity-2.4
For other versions of Singularity see our Vagrant Cloud repository.
```bash
mkdir singularity-vm
cd singularity-vm
```
Note that if you have installed a previous version of the vm, you can either destroy it first, or create a new directory.
```bash
vagrant destroy
```
Then issue the following commands to bring up the Virtual Machine:
```bash
vagrant init singularityware/singularity-2.4
vagrant up
vagrant ssh
You are then ready to go with Singularity 2.4!

vagrant@vagrant:~$ which singularity
/usr/local/bin/singularity
vagrant@vagrant:~$ singularity --version
2.4-dist

vagrant@vagrant:~$ sudo singularity build growl-llo-world.simg shub://vsoch/hello-world
Cache folder set to /root/.singularity/shub
Progress |===================================| 100.0%
Building from local image: /root/.singularity/shub/vsoch-hello-world-master.simg
Building Singularity image...
Singularity container built: growl-llo-world.simg
Cleaning up...
vagrant@vagrant:~$ ./growl-llo-world.simg
RaawwWWWWWRRRR!!
```
Note that when you do vagrant up you can also select the provider, if you use vagrant for multiple providers. For example:
```bash
vagrant up --provider virtualbox
although this isn’t entirely necessary if you only have it configured for virtualbox.
```
Option 2: Vagrant Box from Scratch (more advanced alternative)
If you want to get more familiar with how Vagrant and VirtualBox work, you can instead build your own Vagrant Box from scratch. In this case, we will use the Vagrantfile for bento/ubuntu-16.04, however you could also try any of the other bento boxes that are equally delicious. As before, you should first make a separate directory for your Vagrantfile, and then init a base image.
```
mkdir singularity-2.4
cd singularity-2.4
vagrant init bento/ubuntu-16.04
```

Next, build and start the vagrant hosted VM, and you will install Singularity by sending the entire install script as a command (with the -c argument). You could just as easily shell into the box first with vagrant ssh, and then run these commands on your own. To each bento, his own.
```bash
vagrant up --provider virtualbox

# Run the necessary commands within the VM to install Singularity
vagrant ssh -c /bin/sh <<EOF
    sudo apt-get update
    sudo apt-get -y install build-essential curl git sudo man vim autoconf libtool
    git clone https://github.com/singularityware/singularity.git
    cd singularity
    ./autogen.sh
    ./configure --prefix=/usr/local
    make
    sudo make install
EOF
```

At this point, Singularity is installed in your Vagrant Ubuntu VM! Now you can use Singularity as you would normally by logging into the VM directly

```bash
vagrant ssh
```

Remember that the VM is running in the background because we started it via the command vagrant up. You can shut the VM down using the command vagrant halt when you no longer need it.
