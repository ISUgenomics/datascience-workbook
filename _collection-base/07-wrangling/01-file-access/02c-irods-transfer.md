---
title: "File transfer using irods"
layout: single
author: Aleksandra Badaczewska
author2: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 712.3
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<button class="btn note mr"></button><em class="c-good">This tutorial has been upgraded to incorporate Apptainer and the latest versions of CyVerse and iRODS, building on the foundational guide originally created by Arun Seetharam.</em>

<div class="required" markdown="1">
**<a href="https://cyverse.org/" target="_blank">CyVerse</a>** (previously known as iPlant Collaborative) is a cloud-based infrastructure for life sciences research, providing computational resources to store, share, and analyze large data sets. It supports collaborative science and aims to enable data-driven discoveries through the use of advanced computing infrastructure.
<base class="mb">
**<a href="https://irods.org/" target="_blank">iRODS</a>** (Integrated Rule-Oriented Data System) is an open-source data management software used to organize, share, and protect large sets of data across distributed locations. It allows users to automate data management tasks through a set of predefined rules and policies.
<base class="mb">
**<a href="https://apptainer.org/" target="_blank">Apptainer</a>**  (formerly Singularity) is an open-source container platform designed to securely execute applications in a reproducible and portable manner, particularly in high-performance computing (HPC) and scientific computing environments. It allows users to build containers that can run across different computational systems.
</div>

*This quick tutorial explains how to download data from <a href="https://cyverse.org/" target="_blank">CyVerse  ⤴</a> (formerly known as iPlant) onto HPC clusters using <a href="https://irods.org/" target="_blank">iRODS  ⤴</a>.*


# Getting started with iRODS

iRODS is an adaptable and robust system ideal for managing complex data workflows in scientific research, offering practical solutions for data transfer and management across a wide range of platforms and services.

### Types of transfers allowed by iRODS

<table>
  <tr> <th>Data Replication</th>         <td>iRODS allows for the replication of data across different storage devices or geographical locations, ensuring data redundancy and reliability for disaster recovery and high availability.</td> </tr>
  <tr> <th>Data Synchronization</th>     <td>Users can synchronize data across various systems, ensuring that copies of datasets in different locations are kept up-to-date.</td> </tr>
  <tr> <th>Data Movement</th>            <td>iRODS supports moving large datasets seamlessly between different storage systems or computational facilities, a common requirement in large-scale scientific projects.</td> </tr>
  <tr> <th>Automated Data Workflows</th> <td>iRODS can automate data management tasks through its rule engine, which can automatically transfer, archive, or transform data based on predefined policies.</td> </tr>
</table>

### Types of platforms connected by iRODS

<table>
  <tr> <th>Cloud Storage Platforms</th> <td>iRODS allows for the replication of data across different storage devices or geographical locations, ensuring data redundancy and reliability for disaster recovery and high availability.</td> </tr>
  <tr> <th>High-Performance Computing (HPC) Clusters</th> <td>iRODS excels in environments where large computational and data storage resources are networked, facilitating data transfers between HPC clusters and other storage systems.</td> </tr>
  <tr> <th>Research Institution Servers</th> <td>Many academic and research institutions use iRODS to manage and transfer data between different institutional servers, supporting collaborative research projects across different domains.</td> </tr>
  <tr> <th>Personal Machines</th> <td>iRODS can be set up to transfer data between personal workstations and larger, more secure data repositories, aiding researchers in managing their data from initial creation through to publication and archiving.</td> </tr>
</table>


### ***What you need to use iRODS?***

To use iRODS for transferring data, you need:
* an **[iRODS client](#irods-client)** installed on your computer,
* access to an **[iRODS server](#irods-server)** where your data will be stored or retrieved,
* and an internet connection.

Essentially, iRODS organizes your data transfers by following predefined rules and policies, automating the process to ensure your data is where you need it, when you need it, securely and efficiently.


#### iRODS Client

<div class="required" markdown="1">
You need to load irods module *(on HPC)* or install *(on your local machine)* and configure an **iRODS client**, using the details provided by your **[iRODS server](#irods-server)** adminss to set up and confirm your connection.
</div>


**iRODS** might not be available as a module on your cluster. If it is available, you can load the module to use `irods` commands without installation.

To check if the `irods` module is accessible on your HPC system, you can use the commands `module avail` or `module spider`.
```bash
module spider irods
# or
module spider icommands
```
*These commands will list available modules, including* `irods`*, if it is installed.*
<pre class="output">
--------------------------- /software/el9/modulefiles ---------------------------
   irods/4.2.8    irods/4.2.10 (D)

  Where:
   D:  Default Module
</pre>

You can load the selected module like this:
```bash
module load {module name}     # e.g., module load irods/4.2.10
```
<div class="protip" markdown="1">
When iRODS is loaded as a module on a system, such as on an HPC cluster, you typically gain access to all the iRODS commands directly from the command line. <base class="mb">
To test specific iRODS functionality to make sure the iRODS commands work:
```bash
ils
```
This command lists the directories and files in your iRODS data space. If your environment is correctly configured, you should see the contents listed. If not, you may be prompted to run `iinit` to set up your connection settings (see instructions in the **[iRODS server](#irods-server)** section).
</div>


<base class="mt">
<details class="l-frame" markdown="1"><summary><p markdown="1" class="c-alert">**If the** `irods` **module is unavailable...**</p></summary>

<pre class="output">
<b class="prompt-3"></b>module avail irods
No module(s) or extension(s) found!
</pre>

You can either install it yourself following the guidelines <a href="https://docs.irods.org/master/getting_started/installation/#irods-setup" target="_blank">here</a> or skip installation by using the apptainer (singularity) container *(and run* `irods` *commands within the container)*.

To pull (download) the `irods` container from the (archival) Singularity Hub:

**1.** First, load the `apptainer` (or `singularity`) module:
```bash
module load apptainer
```

**2.** Then, pull the `irods` image:
```bash
apptainer pull --name irods.sif shub://mjstealey/singularity-irods-icommands
```
<pre class="output">
INFO:    Environment variable SINGULARITY_CACHEDIR is set, but APPTAINER_CACHEDIR is preferred
INFO:    Downloading shub image
166.4MiB / 166.4MiB [=============================================================================] 100 % 61.0 MiB/s 0s

<b class="prompt-3"></b>ls
<span class="c-pros">irods.sif</span>
</pre>
*This will download the container to your current location in the file system.*

**3.** Start by checking if the container itself is operational. <br>
You can do this by running a simple command that executes within the container:
```bash
apptainer exec irods.sif ls /
```
*This command will list the contents of the root directory inside the container. If the container is working, you should see output listing directories like* `/bin`, `/home`, `/usr`, *etc.*

Next, you can test specific iRODS functionality to make sure the iRODS commands work:
```bash
apptainer exec irods.sif ils
```
*This command should output the contents of your iRODS directory or prompt you to initialize your iRODS environment if it hasn't been set up yet (using* `iinit`*).*
<pre class="output">
<b class="c-bad">ERROR:</b> environment_properties::capture: missing environment file. should be at [/home/alex.badacz/.irods/irods_environment.json]
<b class="c-bad">ERROR:</b> _rcConnect: setRhostInfo error, IRODS_HOST is probably not set correctly status = -302000 USER_RODS_HOST_EMPTY
</pre>
*When you see these errors thrown to your console, it means you need to initialize your iRODS environment for a specific iRODS server, such as CyVerse.*

Refer to the [next section](#irods-server)  to correctly set up your iRODS client, ensuring that all necessary server and user details are accurately provided.
</details>


#### iRODS Server

<div class="required" markdown="1">
You must register for an account on the specific iRODS server, such as <a href="https://cyverse.org/" target="_blank">CyVerse</a>. This typically involves signing up through their online portal or website. Once your registration is approved, you will receive a username and a password. These credentials are essential for [setting up your iRODS environment](#set-up-irods-environment) using the `iinit` iRODS command.
</div>

**Sign up for CyVerse account online**

1. **Visit the CyVerse Website:** Go to the CyVerse official website at <a href="https://cyverse.org/" target="_blank">https://cyverse.org/</a>.
2. **Navigate to the Registration Page:** Click on the `Sign Up` tab, usually found at the top right corner of the homepage or in the main navigation menu bar.
3. **Fill Out the Registration Form:** Enter all required information in the registration form. This typically includes your full name, email address, institutional affiliation, etc.
4. **Submit Your Registration:** Click the submit button to complete your registration.
5. **Email Verification:** Check your email for a verification message from CyVerse. Follow the instructions in the email to verify your account. *This may involve clicking a verification link.*
6. *(optional)* **Complete Your Profile:** Once your email is verified, you may be asked to log in and complete your profile, adding any additional required or optional information.
7. *(optional)* **Wait for Approval:** Some accounts may require manual approval, especially if they provide access to significant computational resources. Wait for an approval email before attempting to log in and use CyVerse services.
8. **Start Using CyVerse:** Once your account is approved and activated, you can log in to CyVerse and explore the available tools and services.


# Set up iRODS environment

<div class="warning" markdown="1">
Having an [iRODS Server](#irods-server) account with known `username` and `password` is crucial because without these, the `iinit` iRODS command cannot proceed to authenticate and configure the connection to the iRODS server such as CyVerse. Therefore, the first step before using [iRODS client](#irods-client) tools is always to ensure you have valid credentials by registering with the iRODS server provider.
</div>


### 1. Start interactive iRODS session

```bash
# use container
singularity shell --bind $PWD irods.sif
```
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>
<b class="prompt-1 before" data-before="Singularity>  "></b>iinit
</pre>

### 2. Enter your CyVerse credentials

Sometimes also referred as iRODS account, this is required to access private files from the CyVerse data store. This is done by logging in via `iinit` command. You only need this once per cluster. As it involves data transfer, the best practice recommends using the data transfer nodes on HPC.

```bash
$ iinit
One or more fields in your iRODS environment file (.irodsEnv) are
missing; please enter them.
Enter the host name (DNS) of the server to connect to: data.iplantcollaborative.org
Enter the port number: 1247
Enter your irods user name: <username>
Enter your irods zone: iplant
Those values will be added to your environment file (for use by
other i-commands) if the login succeeds.
Enter your current iRODS password:
#password won't be displayed
```

Now you are logged in. Although your working directory doesn't change, all `iCommands` can now access the CyVerse datastore.
You can `logout` anytime by typing `iexit` command.

Alternatively, you can save this information in `~/.irods/irodsEnv` file as follows:

```
irodsHost data.iplantcollaborative.org
irodsPort 1247
irodsUserName <username>
irodsZone iplant
irodsPassword <your password>
```

This will let you connect automatically each time you want to login by just typing in `iinit` command. You can also exclude the last line (password), so that it will prompt only password for logging in.


### 3. Download files

Navigate to the desired location/directory and use `iget` command to download the desired file. You can also use any of the standard UNIX command by using `i` as prefix (eg., `icp` for copy, `imv` to move, `ipwd` to print working directory etc.,)

```bash
iget path/to/filename
```

 If there are large number of files to be copied or you just want to sync 2 directories (local and iplant), you can also use `rsync` command. `rsync`
synchronize the data between a local copy (local file system) and the copy stored in iRODS or between two iRODS copies. You can use `rsync` to either:
- synchronization of data from the client's local file system to iRODS
- from iRODS to the local file system
- from one iRODS path to another iRODS path

To synchronize (recursively) the data from the local directory foo1 to the iRODS collection foo2

```bash
irsync -r foo1 i:foo2
```

To synchronize (recursively) the data from the iRODS collection foo1 to the local directory foo2

```bash
irsync -r i:foo1 foo2
```

To synchronize (recursively) the data from the iRODS collection foo1 to another iRODS collection foo2

```bash
irsync -r i:foo1 i:foo2
```

Finally, if you want to transfer a single file from local host to remote (iplant), you can do it using `iput` command.

```bash
iput filename
```

A full list of irods commands can be found [here](https://docs.irods.org/master/icommands/user/)


## References

For more information, follow these links:

* [iRODS](https://www.irods.org/index.php/icommands)
* [CyVerse](https://pods.iplantcollaborative.org/wiki/display/start/Using+icommands)
