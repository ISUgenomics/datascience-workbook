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
  <tr> <th>Cloud Storage Platforms</th>      <td>iRODS allows for the replication of data across different storage devices or geographical locations, ensuring data redundancy and reliability for disaster recovery and high availability.</td> </tr>
  <tr> <th>High-Performance Computing (HPC)  </th> <td>iRODS excels in environments where large computational and data storage resources are networked, facilitating data transfers between HPC clusters and other storage systems.</td> </tr>
  <tr> <th>Research Institution Servers</th> <td>Many academic and research institutions use iRODS to manage and transfer data between different institutional servers, supporting collaborative research projects across different domains.</td> </tr>
  <tr> <th>Personal Machines</th>            <td>iRODS can be set up to transfer data between personal workstations and larger, more secure data repositories, aiding researchers in managing their data from initial creation through to publication and archiving.</td> </tr>
</table>


## iRODS commands<button class="btn bold c-good ml">cheatsheet</button>

You can use any of the standard UNIX command by adding `i` as prefix (eg., `icp` to copy, `imv` to move, `ipwd` to print working directory *etc.*).

A full list of irods commands can be found <a href="https://docs.irods.org/master/icommands/user/" target="_blank">here</a>.


# ***What you need to use iRODS?***

To use iRODS for transferring data, you need:
* an **[iRODS client](#irods-client)** installed on your computer,
* access to an **[iRODS server](#irods-server)** where your data will be stored or retrieved,
* and an internet connection.

Essentially, iRODS organizes your data transfers by following predefined rules and policies, automating the process to ensure your data is where you need it, when you need it, securely and efficiently.


## iRODS Client

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
This command lists the directories and files in your iRODS data space. If your environment is correctly configured, you should see the contents listed. If not, you may be prompted to run `iinit` to set up your connection settings (see instructions in the **[Set up iRODS environment](#set-up-irods-environment)** section).
</div>


<div class="warning plain" markdown="1">
<details class="l-frame" markdown="1"><summary><p markdown="1">**If the** `irods` **module is unavailable...**</p></summary>

<pre class="output">
<b class="prompt-3"></b>module avail irods
No module(s) or extension(s) found!
</pre>

You can either install it yourself following the guidelines <a href="https://docs.irods.org/master/getting_started/installation/#irods-setup" target="_blank">here</a> or skip installation by using the apptainer (singularity) container *(and run* `irods` *commands within the container)*. <base class="mt">

To pull (download) the `irods` container from the (archival) Singularity Hub:
<base class="mb">
**1.** First, load the `apptainer` (or `singularity`) module:
```bash
module load apptainer
```
<base class="mb">
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
<base class="mb">
**3.** Start by checking if the container itself is operational. <br>
You can do this by running a simple command that executes within the container:
```bash
apptainer exec irods.sif ls /
```
*This command will list the contents of the root directory inside the container. If the container is working, you should see output listing directories like* `/bin`, `/home`, `/usr`, *etc.*
<base class="mb">
Next, you can test specific iRODS functionality to make sure the iRODS commands work:
```bash
apptainer exec irods.sif ils
```
*This command should output the contents of your iRODS directory or prompt you to initialize your iRODS environment if it hasn't been set up yet (using* `iinit`*).*
<pre class="output">
<b class="c-alert">ERROR:</b> environment_properties::capture: missing environment file. should be at [/home/alex.badacz/.irods/irods_environment.json]
<b class="c-alert">ERROR:</b> _rcConnect: setRhostInfo error, IRODS_HOST is probably not set correctly status = -302000 USER_RODS_HOST_EMPTY
</pre>
*When you see these errors thrown to your console, it means you need to initialize your iRODS environment for a specific iRODS server, such as CyVerse.*
<base class="mb">
Refer to the [next section](#irods-server)  to correctly set up your iRODS client, ensuring that all necessary server and user details are accurately provided.
</details></div>


## iRODS Server

<div class="required" markdown="1">
You must register for an account on the specific iRODS server, such as <a href="https://cyverse.org/" target="_blank">CyVerse</a>. This typically involves signing up through their online portal or website. Once your registration is approved, you will receive a username and a password. These credentials are essential for [setting up your iRODS environment](#set-up-irods-environment) using the `iinit` iRODS command.
</div>

**Sign up for CyVerse account online**

<p class="pl-d mb-0" markdown="1">**1. Visit the CyVerse Website:** Go to the CyVerse official website at <a href="https://cyverse.org/" target="_blank">https://cyverse.org/</a>.</p>
<details class="l-frame" markdown="1"><summary><b>2. Navigate to the Registration Page:</b></summary>

Click on the `Sign Up` tab, usually found at the top right corner of the homepage or in the main navigation menu bar.
![]({{ images_path }}/01-irods-cyverse-website.png)
</details>
<details class="l-frame" markdown="1"><summary><b>3. Fill Out the Registration Form:</b></summary>

Enter all required information in the registration form. This typically includes your full name, email address, institutional affiliation, etc.
![]({{ images_path }}/01-irods-cyverse-account.png)
</details>
<p class="pl-d mb-0" markdown="1">**4. Submit Your Registration:** Click the <button class="btn">submit</button> button to complete your registration.</p>
<details class="l-frame" markdown="1"><summary><b>5. Email Verification:</b></summary>

Check your email for a verification message from CyVerse. Follow the instructions in the email to verify your account. *This may involve clicking a verification link.*
![]({{ images_path }}/01-irods-cyverse-verify.png)
</details>
<details class="l-frame" markdown="1"><summary><b>6. Complete Your Profile:</b> <i>(optional)</i></summary>

Once your email is verified, you may be asked to log in and complete your profile, adding any additional required (e.g., set password) or optional information.
![]({{ images_path }}/01-irods-cyverse-password.png)
</details>
<details class="l-frame" markdown="1"><summary><b>7. Wait for Approval:</b> <i>(optional)</i></summary>

Some accounts may require manual approval, especially if they provide access to significant computational resources. Wait for an approval email before attempting to log in and use CyVerse services.
![]({{ images_path }}/01-irods-cyverse-approval.png)
</details>
<details class="l-frame" markdown="1"><summary><b>8. Start Using CyVerse:</b></summary>

Once your account is approved and activated, you can log in to CyVerse and explore the available tools and services.
![]({{ images_path }}/01-irods-cyverse-login.png)
<div class="protip" markdown="1">
It’s important to remember your CyVerse login credentials: `username` and `password`. These are necessary to access the CyVerse **iRODS server**, allowing you to manage and manipulate data stored there. Keep these credentials secure but accessible for when you need to [set up or update your iRODS configuration](#set-up-irods-environment).
</div>
</details>

# Set up iRODS environment

<div class="warning" markdown="1">
Having an [iRODS Server](#irods-server) account with known `username` and `password` is crucial because without these, the `iinit` iRODS command cannot proceed to authenticate and configure the connection to the iRODS server such as CyVerse. Therefore, the first step before using [iRODS client](#irods-client) tools is always to ensure you have valid credentials by registering with the iRODS server provider.
</div>

<h3>0. Make sure you completed steps from sections:</h3>
* [iRODS client](#irods-client) to have iRODS tool on your computing machine or HPC system
* [iRODS Server](#irods-server) to have your CyVerse account and related user credentials

### 1. Start interactive iRODS session

Use the `iinit` command to log in to the iRODS server of CyVerse platform. *This setup is necessary only once per cluster, as it saves your authentication details for future sessions.*

**A. if irods module available and loaded:**

* initiate interactive irods session
```bash
iinit
```

**B. if irods module unavailable:** *(and apptainer or singularity is loaded)*

* initiate interactive container session
```bash
apptainer shell --bind $PWD irods.sif
```
<pre class="output level-1">
<b class="prompt-1 before" data-before="Singularity>  "></b>
<b class="prompt-1 before" data-before="Singularity>  "></b>iinit
</pre>


### 2. Enter CyVerse credentials

When prompted, enter the CyVerse credentials:
* hostname: `data.cyverse.org`
* port number: `1247`
* iRODS zone: `iplant`
* and your CyVerse `username` and `password`

*Ensure that all information is entered correctly to avoid authentication issues.*

<div class="warning" markdown="1">
Based on the current documentation (May 2024) and information available from CyVerse, the updated host name (DNS) to connect to the CyVerse iRODS server is `data.cyverse.org` (instead of depreciated: *data.iplantcollaborative.org*), and the iRODS zone remains `iplant`. Port Number is `1247`, as a standard iRODS port.
</div>

<pre class="output">
<b class="prompt-3"></b>iinit
ERROR: environment_properties::capture: missing environment file. should be at [/home/alex.badacz/.irods/irods_environment.json]
One or more fields in your iRODS environment file (.irodsEnv) are missing; please enter them.

Enter the host name (DNS) of the server to connect to: <b class="c-example">data.cyverse.org</b>
Enter the port number: <b class="c-example">1247</b>
Enter your irods user name: <b class="c-example">abadacz</b>    <em class="c-gray"># use your own CyVerse user name</em>
Enter your irods zone: <b class="c-example">iplant</b>
Those values will be added to your environment file (for use by other i-commands) if the login succeeds.

Enter your current iRODS password:     <em class="c-gray"># password won't be displayed when typed</em>
</pre>

<div class="protip" markdown="1">
When prompted for `your irods user name` or `your current iRODS password`, it referrs to your CyVerse account credentials. This is required to access private files from the CyVerse data store via the iRODS server. You only need this authentication once per cluster/computing machine. <br>As it involves data transfer, **the best practice recommends using the data transfer nodes on HPC.**
</div>


**Alternatively, you can save this configuration into** `~/.irods/irods_environment.json` **file.** <br>
*This will let you connect automatically each time you want to login by just typing in* `iinit` *command.*

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>see the step-by-step instructions</i></b></summary>

The configuration file format for iRODS has transitioned from the older `~/.irods/irodsEnv` to the newer `~/.irods/irods_environment.json`. If you are running iRODS **version 4.0 or later**, it is recommended to use this config file for configuring your environment.

<div class="note" markdown="1">
**irods_environment.json:** This is the current standard configuration file for iRODS 4.x and later versions. It uses a JSON format, which is more structured and versatile compared to the older format. This file should be placed in the `~/.irods/` directory and contains necessary configuration details such as host, port, user name, and zone, among other settings. <base class="mb">
**irodsEnv:** This was the configuration file used in older versions of iRODS (prior to version 4.0). It was typically located in the `~/.irods/` directory. The format is more straightforward, using a key-value pair structure, but it lacks the flexibility and readability of JSON.
</div>

**Example of irods_environment.json**
```json
{
    "irods_host": "data.cyverse.org",
    "irods_port": 1247,
    "irods_user_name": "your_username",
    "irods_zone": "iplant",
    "irods_default_resource": "",
    "irods_authentication_scheme": "native"
}
```

**Example of irodsEnv** *(obsolete)*
```bash
irodsHost data.cyverse.org
irodsPort 1247
irodsUserName {username}
irodsZone iplant
irodsPassword {your password}
```
*You can also exclude the last line (password), so that it will prompt only password for logging in.*
</details>

<base class="mt">
*Now you are logged in.*

<div class="protip mt" markdown="1">
You can **logout** anytime by typing `iexit` command.
</div>

Although your working directory doesn't change, all `irods` commands can now access the remote CyVerse datastore.
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>ils
/iplant/home/abadacz:
</pre><base class="mt">


### 3. Explore your CyVerse file system

When you run `ils` and see `/iplant/home/<username>`, it indicates that you are successfully connected to the iRODS server at CyVerse.
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>ils
/iplant/home/abadacz:
</pre>
*It lists the directories and files in your iRODS user directory. The output would be empty if you haven't yet uploaded any files.*

#### *How to find the corresponding location via website interface?*

Once you logged in to your <a href="https://cyverse.org/" target="_blank">CyVerse account</a>, your default landing page is **Services** *(could be also selected as a tab on the left)*. Under section **My Services**, find <button class="btn">Discovery Environment</button> and click this card to `LAUNCH` the service in a new browser tab.

![]({{ images_path }}/01-irods-cyverse-my-services.png)

You will get redirected to the <a href="https://de.cyverse.org/dashboard" target="_blank">CyVerse Discovery Environment</a> service.

![]({{ images_path }}/01-irods-cyverse-discovery-env.png)

1. **First, log in to this service.**
2. **Navigate to Data Store:** Once logged in, navigate to the **Data** section (accessible in the menu on the left) where you can manage your files and folders.

![]({{ images_path }}/01-irods-cyverse-denv-datastore.png)


#### *How to upload files via website interface?*

By default, you will see the `Community Data` storage space, but you can easily switch to your user `home` directory *(i.e., **abadacz** in my case )*. You can browse and upload new data there.

![]({{ images_path }}/01-irods-cyverse-denv-upload.png)

Specifically, you can upload files from your local machine *(the one you have web browser on)*.
<div class="protip" markdown="1">
You can create new folders and organize files as needed directly through the web interface. <br>
**Avoid uploading individually large files or batches with countless files.** Instead, [Add files via iRODS](#add-files-via-irods-iput).
</div>
![]({{ images_path }}/01-irods-cyverse-denv-uploaded.png)

The uploaded file will be immediately visible in your file system while accessed in the CLI via iRODS.
*(Return to your terminal window where you have your [iRODS session](#set-up-irods-environment) initiated.)*

When you run `ils` again, it will now display the updated state of your CyVerse datastore:
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>ils
/iplant/home/abadacz:
    input.csv
</pre>


### 4. Transfer data via iRODS

<div class="note" markdown="1">
When you're in an interactive iRODS session, you **retain access to your local file system**, allowing you to use both relative and absolute paths to locate files on your computing machine with CLI access. <br>
Similarly, **your remote storage on CyVerse is accessible** at the path `/iplant/home/username`.
</div>

With this knowledge of your source and destination paths, *i.e., local system and remote CyVerse data store*, you can seamlessly transfer files back and forth. Simply use the **iput** command to upload files to CyVerse and the **iget** command to download files to your local system, ensuring smooth data exchange between your CLI environment and CyVerse.

## *Add files via iRODS* `iput`

1. **Prepare Your Files** <br>
  Ensure that the files you want to upload are accessible on the system where your [iRODS client](#irods-client) is installed, such as your local computer or HPC environment.

2. **Use iRODS Commands** <br>
  `iput` : to upload files to CyVerse using iRODS. <br>
  &nbsp; use `-K` flag : to request checksum verification to ensure data integrity during the transfer

Here’s how you can use it:
```
iput -K local_file /iplant/home/<username>/destination_file
```
*For example:*
```
iput -K /project/isu_gif_vrsc/alex/my_data.txt /iplant/home/abadacz/
```
*This command uploads* `my_data.txt` *from local system to iRODS home directory at CyVerse.*

![]({{ images_path }}/01-irods-cyverse-denv-uploaded-irods.png)

After uploading, you can run `ils` again to see if your file appears in the directory listing:
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>ils
/iplant/home/abadacz:
  input.csv
  my_data.txt
</pre>

<div class="protip" markdown="1">
Be mindful of **file permissions** and sharing settings, especially if you are collaborating with others through CyVerse. You can manage permissions via the web interface or using iRODS commands like `ichmod`.
</div>

<h3>Uploading a Directory</h3>

The iput command in iRODS is not limited to uploading just a single file; it can also be used to upload entire directories. This flexibility makes it highly useful for managing larger datasets or multiple files at once.

To upload an entire directory, including all its contents and subdirectories, you can use the `-r` option, which stands for recursive. <br>
Here’s how to do it:
```
iput -rK local_directory /iplant/home/username/remote_directory
```
*For example:*
```
iput -rK /project/isu_gif_vrsc/alex/test_data /iplant/home/abadacz/samples
```

![]({{ images_path }}/01-irods-cyverse-denv-uploaded-dir.png)

<div class="warning" markdown="1">
Be mindful of the size of the data being transferred, especially when uploading large directories. It is recommended to **always use transfer node** for exchanging data with remote iRODS servers.
</div>


## *Get files via iRODS* `iget`

The **iget** command in iRODS is used to download files or entire directories from your iRODS data store to your local file system.

<h3>Downloading a Single File</h3>

To download a single file from the iRODS data store to your local machine, specify the source path in your iRODS space and the destination path on your local machine.
```
iget -K /iplant/home/username/remote_file.txt local_file.txt
```
*For example:*
```
iget -K /iplant/home/abadacz/my_data.txt data.txt
```

<div class="warning" markdown="1">
In an iRODS session, the `ils` command lists the contents of directories in your remote iRODS data store.
<pre class="output plain">
<b class="prompt-1 before" data-before="Singularity>  "></b>ils
/iplant/home/abadacz:
</pre>
Conversely, the `ls` command used in an IRODS session, lists the contents of directories on your local machine.  It operates outside of the iRODS-specific commands and works just like the standard Unix ls command, showing local files and directories.
<pre class="output plain">
<b class="prompt-1 before" data-before="Singularity>  "></b>ls
data.txt  irods.sif
</pre>
</div>

<h3>Downloading a Directory</h3>

To download an entire directory, including all its contents and subdirectories, use the `-r` option for recursive download. <br>
Here’s the command:
```
iget -rK /iplant/home/username/remote_directory local_directory
```
*For example:*
```
iget -rK /iplant/home/abadacz/samples
```
<pre class="output">
<b class="prompt-1 before" data-before="Singularity>  "></b>ls
data.txt  irods.sif  samples
</pre>

<div class="warning mb-0" markdown="1">
Before downloading large directories, ensure that you have enough storage space available on your local machine.
</div>
<div class="protip" markdown="1">
1. Organize your local directory structure in a way that makes it easy to integrate the downloaded data.
2. Downloading large amounts of data can be time-consuming and may impact network performance. <br>Consider performing large transfers during off-peak hours if possible.
3. After the download is complete, especially for important data, verify that all files have been correctly transferred and are intact. *This can be done by checking file sizes, using checksums, or simply opening and reviewing a few files.*
</div>


## *Synchronize with* `irsync`

The **irsync** command in iRODS is a powerful tool used to synchronize data <u>between your local file system and the remote data store</u>, or even <u>between two different locations within iRODS server</u>. The `-r` flag indicates the recursive operation, to include all subdirectories and files. This functionality is especially useful for ensuring that large numbers of files are kept up to date across different storage environments.

Assuming we have the following file structure, where:
* `foo1` : the local directory you want to synchronize
* `foo2` : the remote iRODS server, prefixed with `i:` to indicate an iRODS path
* `foo3` : the other data collection on the remote iRODS server

we can perform the following:

**1. Synchronize from Local to iRODS server** <br>
To synchronize data from a local directory *(source)* to an iRODS server *(destination)*, ensuring that the remote iRODS datastore matches the local directory:
```
irsync -r foo1 i:foo2
```
<base class="mt">
**2. Synchronize from iRODS to Local** <br>
To pull data from an iRODS server *(source)* to a local directory *(destination)*, ensuring your local directory mirrors the iRODS datastore:
```
irsync -r i:foo2 foo1
```
<base class="mt">
**3. Synchronize Between iRODS Collections** <br>
For synchronizing data directly between two iRODS collections:
```
irsync -r i:foo2 i:foo3
```
Both paths are prefixed with `i:`, indicating that both the *source* (foo2) and the *destination* (foo3) are within iRODS.
