---
title: "Accessing software via package manager"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 643
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

A package manager is a tool for managing software packages and their dependencies on a computer system. On HPC systems, package managers are commonly used to install, update, and remove software packages, as well as manage dependencies between packages.

<div class="note" markdown="1">
The package manager maintains a database of available packages and their versions, as well as the dependencies between packages. When you install a package, the package manager automatically resolves any dependencies, downloading and installing any necessary packages. When you remove a package, the package manager ensures any dependent packages are also removed or updated to a version not requiring the removed package.
</div>

<div class="warning" markdown="1">
**Many package managers like APT and YUM require <a class="t-links" href="324">superuser privileges</a> to install new packages system-wide.** In these cases, a regular users can NOT use a package manager to install new packages on HPC system. However, they can use all the packages already installed.
</div>


# Access software using package manager


## Check OS and package manager

Some of the most commonly used Linux-based operating systems in HPC include:

<table>
  <tr> <th>operating system</th> <th>package manager</th> <th>cluster example</th> </tr>
  <tr> <td>Red Hat Enterprise Linux (RHEL)</td> <td><b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td><a class="t-links" href="613.3">Nova</a> [RHEL 7.6], <a class="t-links" href="613.2">Condo</a> [RHEL 7.5]</td> </tr>
  <tr> <td>CentOS</td> <td><b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td><a class="t-links" href="612.2">Atlas</a> [CentOS 7.8], <a class="t-links" href="612.3">Ceres</a> [AlmaLinux 9.3]</td> </tr>
  <tr> <td>Fedora</td> <td><b>DNF</b> <i>(Dandified YUM)</i>; <br> for older than Fedora22: <b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td></td> </tr>
  <tr> <td>Ubuntu</td> <td><b>APT</b> <i>(Advanced Package Tool)</i> </td> <td></td> </tr>
  <tr> <td>OpenSUSE</td> <td><b>ZYpp</b></td> <td></td> </tr>
  <tr> <td>Arch Linux</td> <td><b>Pacman</b></td> <td></td> </tr>
</table>


These operating systems have been optimized and tested for performance and reliability in HPC environments, and they typically include a wide range of tools and software packages that are commonly used in HPC. Different operating systems have different methods for installing software, for example, they may use different package managers (*see table above*). Some Linux distributions may use multiple package managers to support different use cases.

**To find out what package manager is in use**, first check what the operating sytem is on the HPC. Usually such information is displayed automatically as a welcome note when you log in to HPC.

<pre class="output">
<span class="prompt-1 before" data-before="[alex.badacz@Atlas-login-1 ~]$"></span> ssh atlas-login
********** N O T I C E **********
Atlas is a cluster system running CentOS 7.8 configured as follows.

240 nodes, 480 processors, 11,520 processor cores
</pre>

**A.** You can check at any time, which operating system (OS) is running on an HPC system using the commands:

```bash
lsb_release -a
```
<pre class="output">
<span class="prompt-1 before" data-before="[alex.badacz@Atlas-login-1 ~]$"></span> lsb_release -a
LSB Version:	:core-4.1-amd64:core-4.1-noarch:cxx-4.1-amd64:cxx-4.1-noarch:desktop-4.1-amd64:desktop-4.1-noarch:languages-4.1-amd64:languages-4.1-noarch:printing-4.1-amd64:printing-4.1-noarch
Distributor ID:	CentOS
Description:	CentOS Linux release 7.8.2003 (Core)
Release:	7.8.2003
Codename:	Core
</pre>

*In this example, the HPC system is running CentOS 7.8.2003.*

B. If the `lsb_release` command is not available on your HPC system, you can also check the OS by looking at the contents of the `/etc/os-release` file:

```bash
cat /etc/os-release
```

<pre class="output">
<span class="prompt-1 before" data-before="[alex.badacz@ceres ~]$"></span> cat /etc/os-release
NAME="AlmaLinux"
VERSION="9.3 (Shamrock Pampas Cat)"
ID="almalinux"
ID_LIKE="rhel centos fedora"
VERSION_ID="9.3"
PLATFORM_ID="platform:el9"
PRETTY_NAME="AlmaLinux 9.3 (Shamrock Pampas Cat)"
ANSI_COLOR="0;34"
LOGO="fedora-logo-icon"
CPE_NAME="cpe:/o:almalinux:almalinux:9::baseos"
HOME_URL="https://almalinux.org/"
DOCUMENTATION_URL="https://wiki.almalinux.org/"
BUG_REPORT_URL="https://bugs.almalinux.org/"

ALMALINUX_MANTISBT_PROJECT="AlmaLinux-9"
ALMALINUX_MANTISBT_PROJECT_VERSION="9.3"
REDHAT_SUPPORT_PRODUCT="AlmaLinux"
REDHAT_SUPPORT_PRODUCT_VERSION="9.3"
</pre>

*In this example, the HPC system is running AlmaLinux 9.3.*

Once you know what operating system you are working on, find the corresponding package manager in the table above. You can use the command line to confirm which package manager is installed on the HPC system. For example, you can use `which` command followed by the name of the package manager:

| APT | YUM | DNF | Pacman | ZYpp |
|-----|-----|-----|--------|------|
|`which apt`|`which yum`|`which dnf`|`which pacman`|`which zypper`|

<pre class="output">
<span class="prompt-1 before" data-before="[alex.badacz@Atlas-login-1 ~]$"></span> which apt
-bash: type: apt: not found

<span class="prompt-1 before" data-before="[alex.badacz@Atlas-login-1 ~]$"></span> which yum
yum is /bin/yum
</pre>

*If the package manager is not installed, you will receive an error message indicating that the command is not found. If the package manager is installed, you will receive the path to the executable file for the package manager.*

### *Search for packages*

Some package managers, such as YUM or APT, do not have a specific option for installing packages for the current user only. By default, packages installed with YUM by a superuser are installed system-wide, which means that they are available for all users on the system.

The centralized package manager can be used to search for and list the available software packages.

### **YUM**

for RHEL / Fedora / Rocky: *.rpm* packages managed by `yum` <br><em class="footnote">(yum has been supplanted by <code>dnf</code>)</em> <br>

**# List installed and available packages:**
```bash
yum list all
```
**# List only available packages:**
```bash
yum list available
```
**# Search dnf list for a given package:**
```bash
yum search <software_name>
```

### **APT**

for Ubuntu / Debian: *.deb* packages managed by `apt` and `dpkg` <br>

**# List installed and available packages:**
```bash
apt list
```
**# Search apt list for a given package:**
```bash
apt search <software_name>
```

### *Use packages*

Once a package is found using package manager, you can use the software provided by that package by simply executing the corresponding command in your terminal. The exact way to use the software may vary depending on the software itself, but typically you will be able to run the software by typing its name in the terminal and hitting enter.

For example, if you searched for the `gcc` package, you can use the GCC compiler by simply typing `gcc` followed by the name of the source code file you want to compile, and any necessary command line options.

<div class="protip" markdown="1">
If you don't know how to use the program, you can always preview the available options and instructions for use by calling the name of the program along with the `--help` flag.
</div>
