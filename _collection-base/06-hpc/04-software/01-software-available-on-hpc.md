---
title: "Software Available on HPC"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 641
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Software on HPC - overview

The software available on a high-performance computing (HPC) system can vary depending on the specific system and its intended use. However, some common types of software that are typically available on HPC systems include:

**1. compilers** <br>
<i><span style="color: #3f5a8a;">[ a special program that translates a programming language's source code into machine code ]</span></i><br>
*HPC systems often have a variety of compilers installed, such as <a href="https://gcc.gnu.org" target="_blank">GCC  ⤴</a> and <a href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/fortran-compiler.html#gs.m93oa8" target="_blank">Intel Fortran  ⤴</a>, that can be used to compile and optimize code for the system's architecture.*

**2. programming languages** <br>
<i><span style="color: #3f5a8a;">[ a system of syntax and semantics for writing instructions that can be executed by a computer ]</span></i><br>
*HPC systems often have a wide range of programming languages installed, such as <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C  ⤴</a>, <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C++  ⤴</a>, <a href="https://en.wikipedia.org/wiki/Fortran" target="_blank">Fortran  ⤴</a>, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python  ⤴</a>, and <a href="https://en.wikipedia.org/wiki/R_(programming_language)" target="_blank">R  ⤴</a>, which can be used to write and run code on the system.*

**3. libraries and frameworks** <br>
<i><span style="color: #3f5a8a;">[ ready-made code (functions and classes) to solve common tasks and boost development ]</span></i><br>
*HPC systems often have a variety of libraries and frameworks available, such as the <a href="https://www.open-mpi.org" target="_blank">MPI library  ⤴</a> for parallel programming and the <a href="https://developer.nvidia.com/gpu-accelerated-libraries" target="_blank">CUDA library  ⤴</a> for GPU programming.*

**4. basic visualization software** <br>
<i><span style="color: #3f5a8a;">[ remote visualization to display data and derive meaningful insights  ]</span></i><br>
*HPC systems often have software for visualizing and analyzing data, such as <a href="https://hpc.llnl.gov/software/visualization-software/paraview" target="_blank">ParaView  ⤴</a>, <a href="https://hpc.llnl.gov/software/visualization-software/visit" target="_blank">VisIt  ⤴</a>, <a href="https://hpc.llnl.gov/software/visualization-software/gnuplot" target="_blank">gnuplot  ⤴</a>, <a href="https://hpc.llnl.gov/software/visualization-software/vmd" target="_blank">VMD  ⤴</a>, and <a href="https://hpc.llnl.gov/software/visualization-software" target="_blank">other  ⤴</a>.*

**5. job schedulers** <br>
<i><span style="color: #3f5a8a;">[ a computer application for controlling resources and execution of jobs ]</span></i><br>
*HPC systems often have a job scheduler installed, such as <a href="https://slurm.schedmd.com/documentation.html" target="_blank">Slurm  ⤴</a>, <a href="https://en.wikipedia.org/wiki/Portable_Batch_System" target="_blank">PBS  ⤴</a> or <a href="https://www.ibm.com/docs/en/spectrum-lsf/10.1.0?topic=lsf-session-scheduler" target="_blank">LSF  ⤴</a>, which is responsible for managing the allocation of resources and scheduling jobs to run on the system.*

**6. data management** <br>
*HPC systems have data management software, including:*
* <b>distributed file systems</b> <i>(e.g., <a href="https://www.lustre.org" target="_blank">Lustre  ⤴</a>, <a href="https://www.gluster.org" target="_blank">GlusterFS  ⤴</a>, and <a href="https://www.ibm.com/docs/en/gpfs/4.1.0.4?topic=guide-introducing-general-parallel-file-system" target="_blank">GPFS  ⤴</a>) that enable efficient data sharing and collaboration among multiple users</i>

* <b>backup and archiving software</b> <i>(e.g., <a href="http://www.amanda.org" target="_blank">Amanda  ⤴</a>, <a href="https://www.baculasystems.com" target="_blank">Bacula  ⤴</a>, and <a href="https://www.ibm.com/docs/en/tsm/7.1.0?topic=servers-tivoli-storage-manager-overview" target="_blank">Tivoli Storage Manager  ⤴</a>) that protect data by creating regular backups and archiving older data to long-term storage</i>

* <b>data transfer software</b> <i>(e.g., <a href="https://www.globus.org/data-transfer" target="_blank">Globus  ⤴</a>, <a href="https://docs.nersc.gov/services/gridftp/" target="_blank">GridFTP  ⤴</a>, and <a href="https://www.ibm.com/products/aspera" target="_blank">Aspera  ⤴</a>) that transfer large amounts of data quickly and efficiently between HPC systems and other storage or computing machines</i>

* <b>data cataloging and metadata management software</b> <i>(e.g., <a href="https://irods.org" target="_blank">iRODS  ⤴</a>, <a href="https://dataverse.org" target="_blank">Dataverse  ⤴</a>, and <a href="https://www.xnat.org" target="_blank">XNAT  ⤴</a>) that manage and organize large amounts of data, and provide search capabilities</i>

* <b>database management software</b> <i>(e.g., <a href="https://www.mysql.com" target="_blank">MySQL  ⤴</a> and <a href="https://www.mongodb.com" target="_blank">MongoDB  ⤴</a>) that store, manage, and analyze large amounts of structured data</i>


# How to find available software?

There are several ways to **find available software** on a high-performance computing (HPC) system. For some of them you can find the hands-on mini tutorials in the following subsections:

* A. [Software as built-in commands](#software-as-built-in-commands)
* B. [Software as built-in modules](#software-as-built-in-modules)
* C. [Software via package manager](#software-via-package-manager)
* D. [Check the documentation](#check-the-documentation)
* E. [Ask the system administrator](#ask-the-system-administrator)

<div class="warning" markdown="1">
It's worth noting that **each HPC system can have a different way of managing and organizing the software<**, so it's best to consult the documentation or <u>ask the system administrator for specific instructions</u>. <base class="mb">
Additionally, in some cases a software is not publicly available and may require to go through a software request process, so it's best to <u>clarify the availability and access rights of the software</u>.
</div>

## **Software as built-in commands**
There are many different types of software that may be available as built-in commands on a high-performance computing (HPC) system. Some examples include:
1. System utilities, [see more](#1-system-utilities)
2. Text processing and manipulation tools, [see more](#2--text-processing-and-manipulation-tools)
3. Compression and archiving tools, [see more](#3--compression-and-archiving-tools)
4. Job management tools, [see more](#4--job-management-tools)
5. Remote access tools, [see more](#5--remote-access-tools)
6. File transfer tools, [see more](#6--file-transfer-tools)

### • *How to check built-in commands?*
There are a few ways to check the list of available built-in commands on a high-performance computing (HPC) system:

* **Using the `help` command** <br>
Many HPC systems have a `help` command that can be used to view a list of built-in commands. <br>
<i>For example: `help` or `man` will give a list of all the commands.</i>

```bash
help
man
```

* **Using the `builtin` command** <br>
Some HPC systems have a `builtin` command that can be used to view a list of built-in commands. <br>
<i>Try these commands on your HPC system:</i>

```bash
builtin
compgen -b
```

* **Using the alias command** <br>
The `alias` command can be used to view a list of all currently defined aliases, which are often used to create custom built-in commands. Learn more from subsection {% include target_link href=320 section="#34-define-aliases" text="Define aliases" %} in the practical {% include target_link href=320 text="Introduction to UNIX Shell" %} tutorial in this workbook.

```bash
alias
```

<ul><li> <b>Examining shell initialization files</b> <br>
Some HPC systems may define built-in commands in shell initialization files such as <span class="code-inline">.bashrc</span>, <span class="code-inline">.bash_profile</span>, <span class="code-inline">.bash_aliases</span> or similar. The user can check these files for custom built-in commands. Learn more from hands-on tutorials available in this workbook:
  <ul>
  <li> <p>section</p> {% include target_link href=320 section="#3-unix-shell-configuration" text="Unix Shell Configuration: .bashrc & .bash_profile" %} in the tutorial {% include target_link href=320 text="Introduction to UNIX Shel" %} </li>
  <li> <p>tutorial</p> {% include target_link href=631 text="Setting up your home directory for data analysis" %} </li>
  <li> <p>tutorial</p> {% include target_link href=632 text="Example .bashrc file configuration" %} </li>
  </ul>
</li></ul>

* **Trying to use the desired command** <br>
If you know what the command corresponding to the program could be called, you can always try calling it in the terminal window. If such a command exists then usually calling it with the `-h` flag will display the available options. <br>
<i>For example:</i>
```bash
chmod -h
```
![Check if command exists]({{ images_path }}/04_hpc_check_command_true.png) <br><br>
If such a command does not exist then an error message will be printed.
```bash
random_command
```
![Check if command exists]({{ images_path }}/04_hpc_check_command_false.png) <br>

---

<span style="color: #ff3870;font-weight: 500; font-size: 20px;">Explore example software typically available as built-in commands:</span>

### *1. System utilities*
Basic system utilities, such as `ls`, `cd`, and `mkdir`, are often available as built-in commands. These utilities allow users to:
* navigate the file system,
* manage files and directories,
* and perform other basic tasks.

Learn more from the practical tutorial {% include target_link href=321 text="Basic Commands: navigation, file creation & preview" %}, available in section {% include target_link href=300 text="03: Introduction to Command Line" %} of this workbook.

### *2.  Text processing and manipulation tools*
Some common text processing and manipulation tools like `sed`, `awk`, `grep` and `cut` are often available, which allow users to manipulate and extract data from text files or command-line text streams. Learn more from the practical tutorial {% include target_link href=330 text="Useful text manipulation programs" %}, available in section {% include target_link href=300 text="03: Introduction to Command Line" %} of this workbook. <br><br>

There are also a built-in command-line text editors with basic graphical interface, such as `nano` or `vim`, which allow to write a script, edit a configuration file, modify data file, or create a quick note or documentation. Learn more from the practical tutorial {% include target_link href=322 text="Command Line text files editors: nano, vim" %}, available in section {% include target_link href=300 text="03: Introduction to Command Line" %} of this workbook.

### *3.  Compression and archiving tools*
Tools like `gzip`, `tar` and `zip` are often available, which allow users to compress and archive large files and directories.

<details><summary><i>Quick cheatsheet</i></summary>

<br>
<i>Compress a single file:</i><br>
<pre class="code-block">gzip -c filename > filename.gz</pre><br>

<i>Compress all files in a directory:</i><br>
<pre class="code-block">gzip -r directory</pre><br>

<i>Decompress a single file:</i><br>
<pre class="code-block">gzip -d filename.gz</pre><br>

<i>Decompress all files in a directory:</i><br>
<pre class="code-block">gzip -dr directory.gz</pre><br>

<i>Compress an entire directory or a single file to `.tar.gz` archive:</i><br>
<pre class="code-block">tar -czvf archive_name.tar.gz /path/to/directory-or-file</pre><br>

<i>Extract the `.tar.gz` archive:</i><br>
<pre class="code-block">tar -xzvf archive.tar.gz</pre>
</details>


### *4.  Job management tools*
The <a href="https://en.wikipedia.org/wiki/Portable_Batch_System" target="_blank">PBS  ⤴</a> or <a href="https://slurm.schedmd.com/documentation.html" target="_blank">Slurm  ⤴</a> tools are commonly used on HPC systems to submit and manage jobs on the system. These tools allow users to submit jobs, monitor the status of their jobs, and view the job queue.

<u>Useful job management commands:</u>

| SLURM tools         | PBS tools            | description |
|---------------------|----------------------|-------------|
| squeue -u {user}    | qstat -u {user}      | gives info about user's jobs |
| sbatch {job_script} | qsub {job_script}    | submits job to the queue |
| scancel {jobID}     | qdel {jobID}         | stops and removes job |
| sinfo -N -l         | pbsnodes -l          | gives info about queues, partitions, or nodes |
| scontrol show       | pbsnodes -l          | provides details about jobs `job jobID`, partitions `partition pID`, or nodes `nodes` |
| seff {job_ID}       | qstat -fxw {job_ID}  | provides resource usage report for a finished job |
| salloc              | qsub -I {job_script} | starts interactive session |

Learn more from the practical {% include target_link href=650 text="Introduction to job scheduling" %} tutorials ( including {% include target_link href=651.1 text="SLURM" %} and {% include target_link href=652.1 text="PBS" %}) in the section {% include target_link href=600 text="06: High-Performance Computing (HPC)" %} of this workbook. For more, see also <a href="https://www.msi.umn.edu/slurm/pbs-conversion" target="_blank">PBS to Slurm Conversion Cheat Sheet  ⤴</a>.

### *5.  Remote access tools*
Tools like `ssh`, `telnet` and `rlogin` are often available, which allow users to remotely access and control other systems on the network. Learn more about SSH connection from the practical tutorial {% include target_link href=623 text="Secure Shell Connection (SSH)" %} available in section {% include target_link href=600 text="06: High-Performance Computing (HPC)" %} of this workbook.

### *6.  File transfer tools*
Tools such as `scp` and `rsync` are often available as built-in commands, which allow users to securely transfer files to and from the HPC system.

*Copy data from local to remote machine (while being on a local machine):*
```bash
# syntax:
scp <path_on_local>/<transferred_file_name> <user>@<hostname_to_remote>:<path_on_remote>

# example:
scp ~/.bashrc alex.badacz@atlas-dtn.hpc.msstate.edu:/project/90daydata/
```

*Copy data from remote to local machine (while being on a local machine):*
```bash
# syntax:
scp <user>@<hostname_to_remote>:<path_on_remote>/<transferred_file_name> <path_on_local>/

# example:
scp alex.badacz@atlas-dtn.hpc.msstate.edu:/project/90daydata/file.txt ~/DATA/
```

<div class="protip" markdown="1">
To copy directories use:
```bash
scp -r {path_to_the source} {path_to_the_destination}
```
<base class="mt">
To synchronize the content in both locations, recursively transfer the data using `rsync` command:
```bash
rsync -avz --no-p --no-g {path_to_the source} {path_to_the_destination}
```
</div>

Learn more from the practical tutorials about {% include target_link href=712 text="Remote data transfer" %} available in section {% include target_link href=700 text="07: Data Acquisition and Wrangling" %} of this workbook. <br>
If you seek for a guide about transferring data to {% include target_link href=612.1 text="SCINet Scientific Computing" %}, see tutorials:
* {% include target_link href=612.2 section="#command-line-data-transfer" text="Command line data transfer to Atlas" %} and
* {% include target_link href=612.4 section="#copy-your-data-to-juno" text="Copy your data to Juno" %}


## **Software as built-in modules**
Many HPC systems use a **system of software modules** to manage and organize the software that is available. The <a href="https://modules.sourceforge.net" target="_blank">Environment Modules  ⤴</a> package can help to make an HPC system more user-friendly, efficient, and accessible for a wide range of users. It allows users to manage and access software in a more flexible way, and can help to make the system more efficient.

The `module` command can be used to list the available modules, and to see which modules are currently loaded.
```bash
module avail            # List available packages
module avail <name>     # List available variants of a given package
module list             # List currently loaded modules
```

Learn more from the practical tutorial {% include target_link href=642 text="Accessing pre-installed modules" %} available in section {% include target_link href=600 text="06. High-Performance Computing (HPC)" %} of this workbook.

## **Software via package manager**
The centralized package manager enables searching for and listing the available software packages on HPC systems. Different package managers match various operating systems. So first, check the operating system (OS) on your HPC infrastructure and identify the package manager in use. Then follow the cheatsheet below to search for the software needed. Learn more from the practical tutorial  {% include target_link href=643 text="Accessing software via package manager" %} available in section {% include target_link href=600 text="06. High-Performance Computing (HPC)" %} of this workbook.

* for Ubuntu / Debian: *.deb* packages managed by `apt` and `dpkg` <br>
```bash
# List installed and available packages:
apt list
```
```bash
# Search apt list for a given package:
apt search <software_name>
```
* for RHEL / Fedora / Rocky: *.rpm* packages managed by `yum` <br>*(yum has been supplanted by `dnf`)* <br>
```bash
# List installed and available packages:
yum list all
```
```bash
# List only available packages:
yum list available
```
```bash
# Search dnf list for a given package:
yum search <software_name>
```
* for FreeBSD: *.txz* packages managed by `pkg` <br>
```bash
# Search pkg list for a given package:
pkg search <software_name>
```

Learn more from external resources:
* <a href="https://www.digitalocean.com/community/tutorials/package-management-basics-apt-yum-dnf-pkg" target="_blank">Package Management Essentials  ⤴</a> *by DigitalOcean*
* <a href="https://www.baeldung.com/linux/yum-and-apt" target="_blank">A Guide to Yum and Apt  ⤴</a> *by Baeldung*
* <a href="https://www.redhat.com/sysadmin/how-manage-packages/" target="_blank">Linux package management with YUM and RPM  ⤴</a> *by RedHat*

## **Check the documentation**
HPC systems often have extensive documentation available, including information on the software that is available. Users can consult the documentation to find a list of the software packages that are available. Primarily, such a list should contain:
* the **licensed software**, which may be available only for selected users
* the **software with graphical interface** (GUI) only, which may require the user to log on to the HPC via a web-based interface (instead of command line)

Software available on the **SCINet HPC systems**:
* <a href="https://scinet.usda.gov/guides/software#scinet-software" target="_blank">SCINet Software  ⤴</a>

Software available on the **ISU HPC systems**:
* <a href="https://www.hpc.iastate.edu/guides/nova/software" target="_blank">Software on Nova  ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/condo-2017/software" target="_blank">Software on Condo  ⤴</a>

## **Ask the system administrator**
The HPC administrator have access to the information on all the software installed, thus in case of any doubts, it's best to reach out to them for assistance.

* regarding SCINet HPC, contact VRSC team: <b>scinet_vrsc@usda.gov</b>
* regarding ISU HPC, contact administrators: <b>hpc-help@iastate.edu</b>

### • *How to get new software installed?*

**1.** Check that the software is not already installed *(follow the guide in this tutorial)*

**2.** Consider the following criteria:
  * if you think that the new software will be useful to many more users <br>
<i>or</i>
  * the software is licensed <br>
<i>or</i>
  * installation requires superuser privileges <br><br>
If the answer to any is yes, contact the HPC administrator and submit a request for software installation. <br>
Otherwise, go to step 3.

**3.** Go to the {% include target_link href=644 text="Installing custom programs in user space" %} tutorial to learn how to install the necessary software yourself.
