---
title: "Software Available on HPC"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
type: "tutorial"
level: 1
categories: []
tags: []
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../00-IntroToHPC-LandingPage.md) / **4. Software Available on HPC**

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

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It's worth noting that <b>each HPC system can have a different way of managing and organizing the software</b>, so it's best to consult the documentation or <b>ask the system administrator for specific instructions</b>.
<br><br>
Additionally, in some cases a software is not publicly available and may require to go through a software request process, so it's best to <b>clarify the availability and access rights of the software</b>.
</span>
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
```
help
man
```

* **Using the `builtin` command** <br>
Some HPC systems have a `builtin` command that can be used to view a list of built-in commands. <br>
<i>Try these commands on your HPC system:</i>
```
builtin
compgen -b
```

* **Using the alias command** <br>
The `alias` command can be used to view a list of all currently defined aliases, which are often used to create custom built-in commands. Learn more from subsection <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell#34-define-aliases" target="_blank">3.4 Define aliases  ⤴</a> in the practical <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell" target="_blank">Introduction to UNIX Shell  ⤴</a> tutorial in this workbook.
```
alias
```

* **Examining shell initialization files** <br>
Some HPC systems may define built-in commands in shell initialization files such as `.bashrc`, `.bash_profile`, `.bash_aliases` or similar. The user can check these files for custom built-in commands. Learn more from hands-on tutorials available in this workbook:
  * section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell#3-unix-shell-configuration" target="_blank">3. Unix Shell Configuration: 3.1 .bashrc & .bash_profile
  ⤴</a> in the tutorial <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell" target="_blank">Introduction to UNIX Shell  ⤴</a>
  * tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/00-HOME-DIRECTORY/00-setting-up-home-directory" target="_blank">Setting up your home directory for data analysis  ⤴</a>
  * tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/00-HOME-DIRECTORY/01-bashrc" target="_blank">.bashrc example file  ⤴</a>


* **Trying to use the desired command** <br>
If you know what the command corresponding to the program could be called, you can always try calling it in the terminal window. If such a command exists then usually calling it with the `-h` flag will display the available options. <br>
<i>For example:</i>
```
chmod -h
```
![Check if command exists](../assets/images/04_hpc_check_command_true.png) <br><br>
If such a command does not exist then an error message will be printed.
```
random_command
```
![Check if command exists](../assets/images/04_hpc_check_command_false.png) <br>

---

<span style="color: #ff3870;font-weight: 500; font-size: 20px;">Explore example software typically available as built-in commands:</span>

### *1. System utilities*
Basic system utilities, such as `ls`, `cd`, and `mkdir`, are often available as built-in commands. These utilities allow users to:
* navigate the file system,
* manage files and directories,
* and perform other basic tasks.

Learn more from the practical tutorial <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02A-basic-commands" target="_blank">Basic Commands: Navigation, File Creation & Preview  ⤴</a>, available in section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a> of this workbook.

### *2.  Text processing and manipulation tools*
Some common text processing and manipulation tools like `sed`, `awk`, `grep` and `cut` are often available, which allow users to manipulate and extract data from text files or command-line text streams. Learn more from the practical tutorial <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03-text-manipulation-programs" target="_blank">Useful Text Manipulation Programs  ⤴</a>, available in section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a> of this workbook.

There are also a built-in command-line text editors with basic graphical interface, such as `nano` or `vim`, which allow to write a script, edit a configuration file, modify data file, or create a quick note or documentation. Learn more from the practical tutorial <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02B-text-files-editors" target="_blank">Text Files Editors  ⤴</a>, available in section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a> of this workbook.

### *3.  Compression and archiving tools*
Tools like `gzip`, `tar` and `zip` are often available, which allow users to compress and archive large files and directories.

<details><summary><i>Quick cheatsheet</i></summary>

<br>
<i>Compress a single file:</i><br>
<code style="background-color: #e4f0f0; width:100%;">gzip -c filename > filename.gz</code><br><br>

<i>Compress all files in a directory:</i><br>
<code style="background-color: #e4f0f0; width:100%;">gzip -r directory</code><br><br>

<i>Decompress a single file:</i><br>
<code style="background-color: #e4f0f0; width:100%;">gzip -d filename.gz</code><br><br>

<i>Decompress all files in a directory:</i><br>
<code style="background-color: #e4f0f0; width:100%;">gzip -dr directory.gz</code><br><br>

<i>Compress an entire directory or a single file to `.tar.gz` archive:</i><br>
<code style="background-color: #e4f0f0; width:100%;">tar -czvf archive_name.tar.gz /path/to/directory-or-file</code><br><br>

<i>Extract the `.tar.gz` archive:</i><br>
<code style="background-color: #e4f0f0; width:100%;">tar -xzvf archive.tar.gz</code><br><br>

</details><br>


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

Learn more from the practical <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/00-introduction-to-job-scheduling" target="_blank">Introduction to Job Scheduling  ⤴</a> tutorials (*including <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/01-SLURM/01-slurm-basics" target="_blank">SLURM  ⤴</a> and <a href="https://datascience.101workbook.org/06-IntroToHPC/05-JOB-QUEUE/02-PBS/01-pbs-basics" target="_blank">PBS  ⤴</a>*) in the section <a href="https://datascience.101workbook.org/06-IntroToHPC/00-IntroToHPC-LandingPage" target="_blank">06. High-Performance Computing (HPC)  ⤴</a> of this workbook. For more, see also <a href="https://www.msi.umn.edu/slurm/pbs-conversion" target="_blank">PBS to Slurm Conversion Cheat Sheet  ⤴</a>.

### *5.  Remote access tools*
Tools like `ssh`, `telnet` and `rlogin` are often available, which allow users to remotely access and control other systems on the network. Learn more about SSH connection from the practical tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-SSH/01-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a>, available in section <a href="https://datascience.101workbook.org/06-IntroToHPC/00-IntroToHPC-LandingPage" target="_blank">06. High-Performance Computing (HPC)  ⤴</a> of this workbook.

### *6.  File transfer tools*
Tools such as `scp` and `rsync` are often available as built-in commands, which allow users to securely transfer files to and from the HPC system.

*Copy data from local to remote machine (while being on a local machine):*
```
# syntax:
scp <path_on_local>/<transferred_file_name> <user>@<hostname_to_remote>:<path_on_remote>

# example:
scp ~/.bashrc alex.badacz@atlas-dtn.hpc.msstate.edu:/project/90daydata/
```

*Copy data from remote to local machine (while being on a local machine):*
```
# syntax:
scp <user>@<hostname_to_remote>:<path_on_remote>/<transferred_file_name> <path_on_local>/

# example:
scp alex.badacz@atlas-dtn.hpc.msstate.edu:/project/90daydata/file.txt ~/DATA/
```

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
To copy directories use: <br>
<code>scp -r {path_to_the source} {path_to_the_destination} </code><br><br>
To synchronize the content in both locations, recursively transfer the data using <code>rsync</code> command: <br>
<code>rsync -avz --no-p --no-g {path_to_the source} {path_to_the_destination} </code><br><br>
</span>
</div><br>

Learn more from the practical tutorials about <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/02-0-remote-data-transfer" target="_blank">Remote Data Transfer  ⤴</a>, available in section <a href="https://datascience.101workbook.org/07-DataParsing/00-DataParsing-LandingPage" target="_blank">07. Data Acquisition and Wrangling  ⤴</a> of this workbook. <br>
If you seek for a guide about transferring data to <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a>, see tutorials: <br>
•  <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#command-line-data-transfer" target="_blank">Command line data transfer to Atlas  ⤴</a> and <br>
• <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/04-scinet-juno-storage#copy-your-data-to-juno" target="_blank">Copy your data to Juno  ⤴</a>.


## **Software as built-in modules**
Many HPC systems use a **system of software modules** to manage and organize the software that is available. The <a href="https://modules.sourceforge.net" target="_blank">Environment Modules  ⤴</a> package can help to make an HPC system more user-friendly, efficient, and accessible for a wide range of users. It allows users to manage and access software in a more flexible way, and can help to make the system more efficient.

The `module` command can be used to list the available modules, and to see which modules are currently loaded.
```
module avail            # List available packages
module avail <name>     # List available variants of a given package
module list             # List currently loaded modules
```

Learn more from the practical tutorial  <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/02-accessing-preinstalled-modules" target="_blank">Accessing pre-Installed Modules  ⤴</a>, available in section <a href="https://datascience.101workbook.org/06-IntroToHPC/00-IntroToHPC-LandingPage" target="_blank">06. High-Performance Computing (HPC)  ⤴</a> of this workbook.

## **Software via package manager**
The centralized package manager enables searching for and listing the available software packages on HPC systems. Different package managers match various operating systems. So first, check the operating system (OS) on your HPC infrastructure and identify the package manager in use. Then follow the cheatsheet below to search for the software needed. Learn more from the practical tutorial  <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/03-accessing-package-manager" target="_blank">Accessing Software via Package Manager  ⤴</a>, available in section <a href="https://datascience.101workbook.org/06-IntroToHPC/00-IntroToHPC-LandingPage" target="_blank">06. High-Performance Computing (HPC)  ⤴</a> of this workbook.

* for Ubuntu / Debian: *.deb* packages managed by `apt` and `dpkg` <br>
```
# List installed and available packages:
apt list
```
```
# Search apt list for a given package:
apt search <software_name>
```
* for RHEL / Fedora / Rocky: *.rpm* packages managed by `yum` <br>*(yum has been supplanted by `dnf`)* <br>
```
# List installed and available packages:
yum list all
```
```
# List only available packages:
yum list available
```
```
# Search dnf list for a given package:
yum search <software_name>
```
* for FreeBSD: *.txz* packages managed by `pkg` <br>
```
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

1. Check that the software is not already installed *(follow the guide in this tutorial)*
2. Consider the following criteria:
  * if you think that the new software will be useful to many more users <br>
<i>or</i>
  * the software is licensed <br>
<i>or</i>
  * installation requires superuser privileges <br><br>
If the answer to any is yes, contact the HPC administrator and submit a request for software installation. <br>
Otherwise, go to step 3.


3. Go to the <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/03-installing-custom-programs" target="_blank">Installing Custom Programs in User Space  ⤴</a> tutorial to learn how to install the necessary software yourself.


___
# Further Reading
* [4.1 Accessing pre-Installed Modules](02-accessing-preinstalled-modules)
* [4.2 Accessing Software using Package Manager](03-accessing-package-manager)
* [4.3 Installing Custom Programs in User Space](04-installing-custom-programs)

* [5. Introduction to Job Scheduling](../05-JOB-QUEUE/00-introduction-to-job-scheduling)
* [6. Introduction to GNU Parallel](../06-PARALLEL/01-introduction-to-gnu-parallel)
* [7. Introduction to Containers](../07-CONTAINERS/00-introduction-to-containers)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](../03-HOME-DIRECTORY/01-bashrc){: .btn  .btn--primary}
[Next](02-accessing-preinstalled-modules){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
