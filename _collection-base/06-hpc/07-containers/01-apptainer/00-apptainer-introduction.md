---
title: "Apptainer: the container system for secure HPC"
note: (singularity rebranding)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [7. Introduction to Containers](../00-introduction-to-containers.md) / **7.1 Apptainer**

---


# Introduction

<b><a href="https://apptainer.org" target="_blank">Apptainer  ⤴</a></b> is, in fact, the evolution and rebranding of <a href="https://en.wikipedia.org/wiki/Singularity_(software)" target="_blank">Singularity  ⤴</a>. In late 2021, the decision was made to reflect a broader mission and vision for the project. While <b>Singularity originated as a container solution for HPC</b>, it has since grown to serve more use cases beyond just HPC, including Edge and IoT (Internet of Things) Computing, Enterprise IT and Cloud, Data Mobility and Reproducibility. So now, <b>Apptainer aims to serve a broader audience by addressing the needs of various computing environments and scenarios beyond just HPC.</b>

![06_apptainer_announcement.png]({{ images_path }}/06_apptainer_announcement.png)

Explore the journey from Singularity to Apptainer and uncover the expanded features and capabilities by visiting the official <a href="https://apptainer.org/news/community-announcement-20211130/" target="_blank">Apptainer website  ⤴</a>.

## Useful Resources

* <a href="https://join.slack.com/t/apptainer/shared_invite/zt-z95o8dg3-_URQItov5W_8djlR2hNZWw" target="_blank">Apptainer Slack  ⤴</a>
* email lists: <a href="singularity@lbl.gov" target="_blank">singularity@lbl.gov  ⤴</a>
* <a href="https://apptainer.org/help" target="_blank">community help  ⤴</a>
* <a href="https://apptainer.org/docs" target="_blank">documentation  ⤴</a>
* Apptainer GitHub repo: <a href="https://github.com/apptainer/apptainer" target="_blank">https://github.com/apptainer/apptainer  ⤴</a>
* Singularity GitHub repo (archival): <a href="https://github.com/apptainer/singularity" target="_blank">https://github.com/apptainer/singularity  ⤴</a>
* <a href="https://apptainer.org/news/community-announcement-20211130/" target="_blank">Frequently Asked Questions:  ⤴</a>
  * *What will the first version be?*
  * *Sylabs still has a Singularity, how does Apptainer relate to that?*
  * *What immediate changes will be implemented?*
  * *What about backwards compatibility?*
  ```
  Apptainer will provide singularity as a command line link
  and will maintain as much of the CLI and environment functionality as possible.
  From the user's perspective, very little, if anything, will change.
  ```

# Apptainer User Guide

<b>To get started with Apptainer, it's highly recommended to follow the latest <a href="https://apptainer.org/docs/user/latest/#apptainer-user-guide" target="_blank">Apptainer User Guide  ⤴</a>.</b> This comprehensive manual offers ordered and detailed instructions, ensuring users can easily navigate and utilize the features of Apptainer effectively and efficiently.

* <a href="https://apptainer.org/docs/user/latest/introduction.html" target="_blank">Introduction to Apptainer</a>
* <a href="https://apptainer.org/docs/user/latest/quick_start.html" target="_blank">Quick Start</a>
* <a href="https://apptainer.org/docs/user/latest/#building-containers" target="_blank">Building Containers</a>
* <a href="https://apptainer.org/docs/user/latest/#advanced-usage" target="_blank">Advanced Usage</a>
* <a href="https://apptainer.org/docs/user/latest/#compatibility" target="_blank">Compatibility</a>

## Apptainer as container technology

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Containers, like Apptainer, address the challenge of installing and configuring custom software in the user space of Unix systems, HPC in particular, where regular user does not have root privileges. <br><br>
Containers are lightweight, standalone units designed to package software, its dependencies, and runtime environment into a single entity, ensuring consistent behavior across diverse systems. <br><br> Apptainer, formerly known as Singularity, offers unique advantages tailored for high-performance computing and scientific workflows.
</span>
</div><br>

Apptainer <i>(previously Singularity)</i> offers some features that make it distinct from other container technologies like Docker, such as:
* run complex applications on HPC clusters
* ability to run containers without root privileges
* seamless compatibility with specialized HPC configurations
* focus on security, reproducibility, and portability
* open-source project

## **Apptainer on a local machine**

Follow the guide provided in section <a href="https://apptainer.org/docs/user/latest/quick_start.html#quick-start" target="_blank">Quick Start</a> in the official Apptainer Documenattion, which is intended for running Apptainer on a computer where you will install Apptainer yourself.

If you want to use the Apptainer on the HPC infrastructure, see [next section](#apptainer-on-the-HPC-clusters).

## **Apptainer on the HPC clusters**

Apptainer provides a streamlined solution for running containers in high-performance computing (HPC) clusters, offering compatibility, security, and efficiency. Regular users can easily deploy, manage, and execute applications encapsulated in custom containers, ensuring consistency and reproducibility across complex computational environments.

### *Load Apptainer module*
Apptainer is usually preconfigured by HPC administrators, allowing regular users to activate and utilize it simply by loading the corresponding module. To check if the Apptainer module is available on an HPC system, users can typically use the command:
```
module avail apptainer
```
to list available modules and search for Apptainer in the output:

![06_apptainer_module.png]({{ images_path }}/06_apptainer_module.png)

Users should choose the specific version of the Apptainer module they wish to work with, and activate it by loading the module using the command:
```
module load apptainer/<version>         # e.g., module load apptainer/1.1.9-py310-wsbt4ge
```

Once the desired Apptainer module version is loaded, users can then directly execute `apptainer` commands and manage their containers within the HPC environment.

### *Apptainer temporary files*
In the context of jobs in HPC environments, **controlling the cache location** can be crucial to ensure that jobs do not run out of space or hit quotas during execution. By setting the cache directory paths, users can:
* optimize performance by placing the cache on a fast filesystem
* and manage storage by avoiding directories with space constraints (such as `home`).

The `APPTAINER_CACHEDIR` and `SINGULARITY_CACHEDIR` are environment variables that determine where Apptainer (formerly Singularity) caches its temporary files during operations like image builds or container pulls.

|variable|description|
|----|----|
|`SINGULARITY_CACHEDIR`| This environment variable was used in Singularity versions to specify the directory where Singularity should cache images and layers during operations. Setting this variable allows users to control the caching location, especially useful in HPC environments where home directories might have quota limits. |
|`APPTAINER_CACHEDIR`| Given the rebranding from Singularity to Apptainer, it's logical to infer that this environment variable serves a similar purpose for Apptainer as SINGULARITY_CACHEDIR did for Singularity. |

If a user doesn't manually set these variables and there's no default set by the admin, **the Apptainer will use its own default caching location, which is typically in the user's home directory** or a temporary directory. By default, without setting `$APPTAINER_CACHEDIR`, Apptainer might use a directory like `~/.apptainer` (in the user's home directory) for its cache, similar to how Singularity used `~/.singularity` by default.

**Move `.apptainer` dir outside `home` location** <br>
You can relocate the `.apptainer` directory from your `home` to a location without storage limits *(e.g., /project path on SCINet clusters)*, and then create a symbolic link in your `home` pointing to the new location, ensuring that the cache remains accessible from the `home` directory without additional modifications.

<i>For example, at Atlas or Ceres (SCINet clusters), you can do:</i>
```
cd ~
mkdir /project/<your_project_dir>/<account_name>
mv .apptainer /project/<your_project_dir>/<account_name>/
chmod -R g+s /project/<your_project_dir>/<account_name>/.apptainer
ln -s /project/<your_project_dir>/<account_name>/.apptainer .apptainer
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
HPC admins might set default values for these variables to optimize system-wide performance or to prevent users from filling up specific filesystems with cache data. These defaults can be set in global configuration files or through module environments. When an admin sets these, users on the system will typically inherit these values automatically unless they override them.
</span>
</div>

In practice, it's always a good idea for users to check whether these variables are set by default on their HPC system and to be aware of how to set them if needed.

**Check the current value** <br>
To see what is currently set for these environment variables, you can use the `echo` command:
```
echo $APPTAINER_CACHEDIR
```

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Individual users can override the default settings by specifying their own values for these environment variables in their session or job scripts. This can be useful if a user has a specific directory they want to use for caching or if they're encountering space issues with the default cache location.
</span>
</div>

If you've set `$APPTAINER_CACHEDIR` to a custom location, that directory will be used for caching instead of the default `~/.apptainer`. However, if `$APPTAINER_CACHEDIR` points directly to `~/.apptainer`, then they are functionally the same.

**Set the value in a current session** <br>
Before running any Apptainer or Singularity command, you can export the desired cache directory by setting the environment variable in your shell or within a job script. *For example:*
```
export APPTAINER_CACHEDIR=/path/to/custom/cache
```
**Permanent Setting** <br>
If you find yourself frequently setting these variables, you can add the `export` command to your shell's startup scripts (e.g., `.bashrc` or `.bash_profile`) to set them automatically whenever you start a new session.

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Remember that setting these variables will direct Apptainer or Singularity to use the specified directory for caching. Make sure the path you provide has enough space, especially if you're pulling large images or frequently building containers. It's also wise to periodically clean up old cache files to free up space using the command <b>apptainer cache clean</b>.
</span>
</div>

## **Apptainer Commands**

Apptainer *(formerly Singularity)* provides a variety of commands to manage and interact with containers.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
<b>With the rebranding from Singularity to Apptainer</b>, the command-line keyword changed from "singularity" to "apptainer." However, the structure and many of the <b>options and arguments for the commands remained consistent</b>, allowing for a familiar experience for those who had previously used Singularity.
</span>
</div>

Apptainer commands follow the structure of:
```
apptainer [command] [options] [arguments]
```
where:
* **[command]** represents the action to perform,
* **[options]** are specific settings or modifiers, and
* **[arguments]** are inputs or targets for the command.

The `apptainer help` command gives an overview of Apptainer options and subcommands:
```
Linux container platform optimized for High Performance Computing (HPC) and
Enterprise Performance Computing (EPC)

Usage:
  apptainer [global options...]

Description:
  Apptainer containers provide an application virtualization layer enabling
  mobility of compute via both application and environment portability. With
  Apptainer one is capable of building a root file system that runs on any
  other Linux system where Apptainer is installed.

Options:
  -d, --debug     print debugging information (highest verbosity)
  -h, --help      help for apptainer
      --nocolor   print without color output (default False)
  -q, --quiet     suppress normal output
  -s, --silent    only print errors
  -v, --verbose   print additional information

Available Commands:
  build       Build an Apptainer image
  cache       Manage the local cache
  capability  Manage Linux capabilities for users and groups
  exec        Run a command within a container
  help        Help about any command
  inspect     Show metadata for an image
  instance    Manage containers running as services
  key         Manage OpenPGP keys
  oci         Manage OCI containers
  plugin      Manage apptainer plugins
  pull        Pull an image from a URI
  push        Upload image to the provided URI
  remote      Manage apptainer remote endpoints
  run         Run the user-defined default command within a container
  run-help    Show the user-defined help for an image
  search      Search a Container Library for images
  shell       Run a shell within a container
  sif         siftool is a program for Singularity Image Format (SIF) file manipulation
  sign        Attach a cryptographic signature to an image
  test        Run the user-defined tests within a container
  verify      Verify cryptographic signatures attached to an image
  version     Show the version for Apptainer

Examples:
  $ apptainer help <command> [<subcommand>]
  $ apptainer help build
  $ apptainer help instance start


For additional help or support, please visit https://www.apptainer.org/docs/
```

Learn more about example commands and options fronm the official docs: <a href="https://apptainer.org/docs/user/latest/quick_start.html#overview-of-the-apptainer-interface" target="_blank">Overview of the Apptainer Interface</a>.

---

**Dive into tutorials focused on specific tasks related to creating and managing containers;** even if they were crafted for Singularity, you can seamlessly adapt them by simply replacing the `singularity` keyword with `apptainer`. *The list of tutorials is provided below.*

___
# Further Reading
* [7.1 Singularity (archival)](01-singularity-basics)
* [7.1.1 Creating Containers using Singularity](02-singularity-1-tutorial-creating-containers)
* [7.1.2 Modifying Existing Containers](03-singularity-2-tutorial-modyfying-containers)
* [7.1.3 Singularity on your Mac via Vagrant](04-singularity-3-tutorial-vagrant)

* [7.2 Docker](../02-DOCKER/01-docker-basics)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../00-introduction-to-containers){: .btn  .btn--primary}
[Next](01-singularity-basics){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
