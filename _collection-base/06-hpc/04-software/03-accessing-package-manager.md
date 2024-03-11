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

---


# Introduction

A package manager is a tool for managing software packages and their dependencies on a computer system. On HPC systems, package managers are commonly used to install, update, and remove software packages, as well as manage dependencies between packages.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
The package manager maintains a database of available packages and their versions, as well as the dependencies between packages. When you install a package, the package manager automatically resolves any dependencies, downloading and installing any necessary packages. When you remove a package, the package manager ensures that any packages that depend on it are also removed or updated to a version that no longer requires the removed package.
</span>
</div><br>

<b>Many package managers like APT and YUM require {% include target_link href=324 text="superuser privileges" %} to install new packages system-wide.</b> <span style="color: #ff3870; font-weight: 500;">In these cases, a regular users can NOT use a package manager to install new packages on HPC system.</span> <b>However, they can use all the packages already installed.</b>

# Access software using package manager


## Check OS and package manager

Some of the most commonly used Linux-based operating systems in HPC include:

<table>
  <tr> <th>operating system</th> <th>package manager</th> <th>cluster example</th> </tr>
  <tr> <td>Red Hat Enterprise Linux (RHEL)</td> <td><b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td>{% include target_link href=613.3 text="Nova" %} [RHEL 7.6], {% include target_link href=613.2 text="Condo" %} [RHEL 7.5]</td> </tr>
  <tr> <td>CentOS</td> <td><b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td>{% include target_link href=612.2 text="Atlas" %}, {% include target_link href=612.3 text="Ceres" %} [CentOS 7.8]</td> </tr>
  <tr> <td>Fedora</td> <td><b>DNF</b> <i>(Dandified YUM)</i>; <br> for older than Fedora22: <b>YUM</b> <i>(Yellowdog Updater, Modified)</i></td> <td></td> </tr>
  <tr> <td>Ubuntu</td> <td><b>APT</b> <i>(Advanced Package Tool)</i> </td> <td></td> </tr>
  <tr> <td>OpenSUSE</td> <td><b>ZYpp</b></td> <td></td> </tr>
  <tr> <td>Arch Linux</td> <td><b>Pacman</b></td> <td></td> </tr>
</table>


These operating systems have been optimized and tested for performance and reliability in HPC environments, and they typically include a wide range of tools and software packages that are commonly used in HPC. Different operating systems have different methods for installing software, for example, they may use different package managers (*see table above*). Some Linux distributions may use multiple package managers to support different use cases.

**To find out what package manager is in use**, first check what the operating sytem is on the HPC. Usually such information is displayed automatically as a welcome note when you log in to HPC.

![Operating System]({{ images_path }}/04_hpc_software_os.png)


A. You can check at any time, which operating system (OS) is running on an HPC system using the commands:

```
lsb_release -a
```
![Operating System]({{ images_path }}/04_hpc_software_os_version.png)<br>
*In this example, the HPC system is running CentOS 7.8.2003.*

B. If the `lsb_release` command is not available on your HPC system, you can also check the OS by looking at the contents of the `/etc/os-release` file:

```
cat /etc/os-release
```
![Operating System]({{ images_path }}/04_hpc_software_os_version2.png)<br>
*In this example, the HPC system is running CentOS 7.*

Once you know what operating system you are working on, find the corresponding package manager in the table above. You can use the command line to confirm which package manager is installed on the HPC system. For example, you can use `which` command followed by the name of the package manager:

| APT | YUM | DNF | Pacman | ZYpp |
|-----|-----|-----|--------|------|
|`which apt`|`which yum`|`which dnf`|`which pacman`|`which zypper`|

![Package Manager]({{ images_path }}/04_hpc_software_package_manager.png)<br>
*If the package manager is not installed, you will receive an error message indicating that the command is not found. If the package manager is installed, you will receive the path to the executable file for the package manager.*

### *Search for packages*

Some package managers, such as YUM or APT, do not have a specific option for installing packages for the current user only. By default, packages installed with YUM by a superuser are installed system-wide, which means that they are available for all users on the system.

The centralized package manager can be used to search for and list the available software packages.

### • ***YUM***

for RHEL / Fedora / Rocky: *.rpm* packages managed by `yum` <br>*(yum has been supplanted by `dnf`)* <br>

**# List installed and available packages:**
```
yum list all
```
**# List only available packages:**
```
yum list available
```
**# Search dnf list for a given package:**
```
yum search <software_name>
```

### • ***APT***

for Ubuntu / Debian: *.deb* packages managed by `apt` and `dpkg` <br>

**# List installed and available packages:**
```
apt list
```
**# Search apt list for a given package:**
```
apt search <software_name>
```

### *Use packages*

Once a package is found using package manager, you can use the software provided by that package by simply executing the corresponding command in your terminal. The exact way to use the software may vary depending on the software itself, but typically you will be able to run the software by typing its name in the terminal and hitting enter.

For example, if you searched for the `gcc` package, you can use the GCC compiler by simply typing `gcc` followed by the name of the source code file you want to compile, and any necessary command line options.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If you don't know how to use the program, you can always preview the available options and instructions for use by calling the name of the program along with the <code>--help</code> flag.
</span>
</div><br>
