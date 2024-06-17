---
title: "Installing custom programs in user space"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 644
level: 2
categories: ["hpc", "computing-tools", "command-line", "programming", "library-package-module", "virtual-environment"]
tags: ["terminal", "remote-machine", "hpc-cluster", "home-dir", "project-dir", "source-code", "file-decompression", ".tar.gz", ".rpm", ".configure", "Makefile", "cmake", "custom-software", "module", ".bashrc", "alias", "python", "conda", "virtual-env", "R", "Bioconductor", "perl", "java", ".jar", "workdir"]
attributes: ["installation", "user-guide", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Installing programs on a high-performance computing (HPC) system can be different from installing software on a personal computer due to the complex nature of HPC systems and limited privileges for regular users.

<div class="protip" markdown="1">
If you need a **specific software package**, first check whether this software is already pre-installed on HPC.
</div>

Typically, compilers, programming languages, libraries and frameworks, basic visualization software, text editors, and job schedulers are all available. What's more, popular software for specialized analysis (*such as* `blast` *for bioinformatics*) is often not only available but also regularly upgraded to the latest release.

<div class="more" markdown="1">
See tutorial <a class="t-links" href="641" section="#how-to-find-available-software">*How to find available software?*</a> to learn more about: <base class="mb">
* <a class="t-links" href="642">software available as pre-installed modules</a>
* <a class="t-links" href="643">software available via package manager</a>
* <a class="t-links" href="644">installing custom programs in user space</a>
* <a class="t-links" href="641" section="#check-the-documentation">other methods of accessing the software</a>
</div>


# Installing custom programs on HPC

Most HPC systems run on Linux-based operating system, so **installing custom programs is done on the command line**.

<div class="protip" markdown="1">
If you would like to learn more about the command line interface and Linux-based operating systems start with the tutorials:
* <a class="t-links" href="310"></a>
* <a class="t-links" href="320"></a>
</div>

<b class="c-bad">What you can NOT do as a regular user on HPC:</b>
<p class="cons">install new packages using the package manager, such as YUM, APT, DNF, ZYpp, or Pacman</p>
<p class="cons">install software for the system-wide use</p>
<p class="cons">install software that requires superuser privileges</p>


<b class="c-good mt mb">What you can DO as a regular user on HPC:</b>
<em class="pros"></em>[install custom software](#install-custom-software) <br>
<b class="prefix-2 level-1"></b>in the [user space](#-install-for-user-only-access) <br>
<b class="prefix-2 level-1"></b>in the [group-wide](#-install-for-group-wide-access) accessible location <br>
<em class="pros"></em>[add custom software to the `module` manager](#create-custom-module) <br>
<em class="pros"></em>[create `virtual environments` and install custom software](#create-virtual-environment-using-conda)

<div class="required mt" markdown="1">
This handy guide is for installing programs in `UNIX` environment on HPC systems.<base class="mb">
Most of these steps assume that you:
1. are installing package in a user or group accessible location,
2. without root privilages, and
3. utilizing
  * the environment module systems or
  * virtual environment systems for package management.
</div>


## Install custom software

### ***Where to install the software?***
If you need to install software on a high-performance computing (HPC) system, there are several methods you can use, depending on the software and the HPC system.

<div class="warning" markdown="1">
Note that global installations are not possible when you are not the superuser (root, administrator), and personal directory installations are only available to one person (see [user-only access](#-install-for-user-only-access)).
</div>
<div class="protip" markdown="1">
If the software will be used by members of a particular group, it is a good idea to install one copy of the software available to all (see [group-wide access](#-install-for-group-wide-access)).
</div>

Finally, if there is a chance that the software can serve a larger number of users from different groups, it is reasonable to ask the cluster administrators for system-wide installations (see <a class="t-links" href="641" section="#ask-the-system-administrator">How to get new software installed?</a>).

### *Install for user-only access*
Some HPC systems allow users to install software in their home directory. This is typically done by downloading the software, compiling it from source code, and installing it in a directory within the user's home directory. This method is often used for small programs because of the **limited storage space in the home directory**.

<div class="warning" markdown="1">
Installing all the software in the home directory will quickly fill the available space, and this will result in serious dysfunctions in the operation of user's account.
</div>
<div class="protip" markdown="1">
The recommended solution is to install programms elsewhere (i.e., in the working directory) and soft-link the installation location to the home directory.
</div>
<div class="more" markdown="1">
Explore section <a class="t-links" href="320" section="#2-home-directory">Home directory</a> tutorial, to find out: <base class="mb">
* <a class="t-links" href="320" section="#21-what-is-the-home-folder-used-for">*What is the HOME folder used for?*</a>
* <a class="t-links" href="320" section="#22-is-home-a-working-directory">*Is HOME a working directory?*</a>
* <a class="t-links" href="320" section="#23-good-practices-for-home-organization">Good practices for HOME organization</a>

<base class="mt">
Follow the guide in the tutorial <a class="t-links" href="631">Setting up your home directory for data analysis</a> to learn about the file system organization on the HPC, including the principles for <a class="t-links" href="631">home directory</a>, <a class="t-links" href="631">working directory</a>, and storage space.
</div>

**Quick Guide**
<div class="example before" markdown="1" data-before="MOVE USER-ONLY INSTALLATION FROM HOME TO PROJECT WORKDIR">

<div class="warning before" markdown="1" data-before="WARNING">
Avoid installing anything in your **home directory**. This is your default location when you log in, accesed with a shortcut `cd ~`. <base class="mb">

On HPC systems, when you install or start using software like **Python** or **R** libraries, or **Jupyter Lab**, the files are typically saved in your `home` directory by default, which can quickly fill up; therefore, it's crucial to move these files to a directory like `/project` that has a higher space quota to avoid running out of space.
</div>

**1.** The **working directory** *(or workdir)* is usually on a path directly inherited from root, `/`. Typically it is called `/work` or `/project` or similar. Further on, there are directories of particular groups or projects, and subdirectories of individual users or tasks. <base class="mb">

You can list directories on a path using the `ls` command:
```bash
ls /project/<group-wide folder>
```

If you are a new user, your subdirectory may not yet exist. Create it in a group/project you have access to:
```bash
mkdir /project/<group-wide folder>/user_name
```

**2.** Export the path to your folder in the working space as the environmental variable:
```bash
export PROJECTFOLDER=/project/<group-wide folder>/user_name
```

**3.** Create a subfolder to store all installation settings:
```bash
mkdir $PROJECTFOLDER/${USER}_software
```

Then, create subfolders for most common configuration types and soft-link them to the home directory:
```bash
for i in .config .nextflow .singularity .cache .spack .conda .local .lmod.d
do
    mkdir $PROJECTFOLDER/${USER}_software/$i
done
ls -d $PROJECTFOLDER/${USER}_software/.* | sort | awk 'NR>2' | xargs -I xx ln -s xx
```

From now on, all installation processes attempting to save files in the home directory will be redirected to the corresponding subdirectories in the working directory. At the same time, all processes looking for software in the home directory will find it via symbolic links. <base class="mb">

**4.** If you want to **download the source code to install it manually**, you should also go to the working directory, create a subdirectory, and do the installation there. <br>*To follow a practical guide, go to the section [How to install regular packages?](#how-to-install-regular-packages)*
</div>


### *Install for group-wide access*
It is recommended to install only once all programs commonly used in your group/lab. In this case, it is necessary to have the **group's working directory** available to all lab members. Such a shared location is a good place for a group-wide installation, **making software accessible by all qualifying users**.

**1.** Create a `SOFTWARE` folder in your group's working directory on the cluster:

```bash
mkdir /project/<group-wide folder>/SOFTWARE
```

**2.** For any future software, create a subdirectory there, where you download the source code and perform the installation.


### ***How to get the software?***

Finding and acquiring software typically involves a few different methods depending on the type of software you're looking for, its source *(commercial, free, open-source)* and the platform you're using (*Windows*, *macOS*, *Linux* or mobile).

Here's a general overview of how you can find and get software:

<table class="mb-0">
<tr> <th colspan="2">1. App Stores and Digital Distribution Platforms</th> </tr>
<tr> <th width="20%">Windows:</th> <td>Microsoft Store provides apps and games for Windows users.</td> </tr>
<tr> <th>macOS:</th> <td>The Mac App Store is the official source for macOS apps.</td> </tr>
<tr> <th>Linux:</th> <td>Linux distributions often come with a package manager and associated app store (like Ubuntu Software Center) that offers a vast array of software from official repositories.</td> </tr>
</table>

<table class="mt-0">
<tr> <th>2. Official Websites</th> </tr>
<tr> <td>For most commercial and many free applications, the safest and most straightforward method is to download software directly from the official website of the developer or company. <br>
         <span class="bc-protip pa-s">This ensures you're getting the genuine article and often the latest version.</span></td></tr>
<tr> <th>3. Third-Party Download Sites</th> </tr>
<tr> <td><span markdown="1">Websites like **SourceForge**, **Tucows**, **SciCrunch**, **Bioinformatics.org** and others offer a wide range of software.</span> <br><span class="bc-warning">However, you should be cautious with these as they may bundle software with unwanted extras or adware.</span><br> <span class="bc-protip">Always opt for custom installation to avoid installing unnecessary or potentially harmful add-ons.</span></td></tr>
<tr> <th>4. Open Source Repositories</th> </tr>
<tr> <td><p class="mb-0" markdown="1">For open-source software, platforms like **GitHub**, **GitLab**, and **Bitbucket** are common. These sites host the source code, and often compiled versions, of the software. Downloading from these sources sometimes requires a bit more technical know-how, especially if you need to compile the software yourself.</p></td></tr>
<tr> <th>5. Software-as-a-Service (SaaS)</th> </tr>
<tr> <td><p class="mb-0" markdown="1">Many applications, especially in business or institutional environments are available directly through a web browser. Services like **Adobe Creative Cloud**, **Microsoft Office 365**, and **Google Workspace** operate on a subscription model and don't require traditional downloads.</p></td></tr>
<tr> <th>6. Specialty Software Stores or Services</th> </tr>
<tr> <td class="no-border">Certain types of software, especially those catering to specific professions (like engineering, design, or geospatial analysis), might be available through specialized platforms or stores dedicated to those industries.</td></tr>
</table>

<div class="more" markdown="1">
Explore the following tutorials in this workbook: <base class="mb">
* <a class="t-links" href="642"></a>
* <a class="t-links" href="643"></a>
</div>

### ***How to decompress the archive?***

Packages are usually compressed in many different ways for easy handling. Typically before proceeding to installation, it must be unpacked. <br>For most cases `tar -xf` will do the trick:

```bash
tar -xf package.tar.gz
```

Although `tar` can auto detect the compression type and decompress the archive with the `-xf` options, you can also specify what type compressed files you're providing.
Look at the archive extension to recognize the type of compression. Then use the corresponding commands to unpack.

<table>
  <tr> <th>.tar</th> <th>.rar</th> <th>zip</th> </tr>
  <tr> <td><code>tar -xvf package.tar</code></td> <td><code>unrar -x package.rar</code></td> <td><code>unzip package.zip</code></td> </tr>
  <tr> <th>.tar.gz</th> <th>.tgz</th> <th>.gz</th> </tr>
  <tr> <td><code>tar -xvzf package.tar.gz</code></td> <td><code>tar -xvzf package.tgz</code></td> <td><code>gunzip package.gz</code></td> </tr>
  <tr> <th>.tar.bz2</th> <th>.tbz2</th> <th>.bz2</th> </tr>
  <tr> <td><code>tar -xvjf package.tar.bz2</code></td> <td><code>tar -xvjf package.tbz2</code></td> <td><code>bunzip2 package.bz2</code></td> </tr>
  <tr> <th>.Z</th> <th>.7z</th> </tr>
  <tr> <td><code>uncompress package.Z</code></td> <td><code>7z x package.7z</code></td> </tr>
</table>


### ***How to install regular packages?***

**The <a href="http://pkgs.org" target="_blank">http://pkgs.org  ⤴</a> website lists all RPMs available for all Unix-based operating systems.**

<div class="note" markdown="1">
On Linux-based HPC systems, the most common format is `.rpm` for Red Hat-based systems, such as CentOS and Fedora with `YUM` package manager. The `.tar.gz` file format is also commonly used on HPC systems to install software from the source code. This process can be more time-consuming and complex than installing packages from a package manager, but it provides more control over the installation process, and can be the only option for installing software that is not available in the package manager's repositories.
</div>

*The table contains a list of the most common package file formats with corresponding package managers and operating systems.*

| package file format | package manager     | operating system           | notes |
|---------------------|---------------------|----------------------------|-------|
| <b>.rpm</b>         | YUM                 | RHEL, Fedora, CentOS       | Unix-based, typically on HPC |
| <b>.deb</b>         | APT                 | Debian, Ubuntu, Linux Mint | Unix-based, typically on personal machine |
| <b>.pkg</b>         | MacOS Installer     | MacOS                      | typically on personal machine |
| <b>.msi</b>         | Microsoft Installer | Microsoft Windows          | typically on personal machine |
| <b>.tar.gz</b>      | installed manually  | any                        | compressed archive files of the source code |


### *use package file:* `.rpm`

<div class="note" markdown="1">
The `.rpm` package files are a type of software distribution format used by some Linux-based operating systems. It is a single file of the compressed archive that contain the software package and its dependencies, as well as installation instructions for the package manager appropriate for the operating system.
</div>

These all-in-one `.rpm` files allow users to easily install, manage, and update software on their systems, without having to manually download, compile, and install software from source code.

The `YUM` package manager extracts the contents of the `.rpm` archive, verifies that all dependencies are satisfied, and installs the software in the appropriate location on the system. The package manager also keeps track of the installed packages, so that they can be easily updated or removed as needed.

**Follow the steps to extract and install software from `.rpm` file:**

**1.** Find the RPM package correct for your system. <i>The <a href="http://pkgs.org" target="_blank">http://pkgs.org  ⤴</a> website lists all RPMs available, and they are free to download.</i>


<div class="protip" markdown="1">
All CentOS and Fedora RPM's work on Red Hat (RHEL). <br>
Download the **Source Package** (not Binary) because as a reugular user you can't use the `yum install` command. Instead, you can extract the source package and use a custom installation.
</div>

**2.** Extract the package:
```bash
rpm2cpio package.rpm | cpio -idmv
```
*You should see a* `*tar.gz` *or other type of compressed program, if this completes successfully.*

**3.** Change into the directory containing the extracted files:
```bash
cd path/to/extracted/files
```

<div class="warning" markdown="1">
In rare cases, when you have patches (extracted from RPM), you might have to apply them before you install.
```bash
patch -Np1 -i path/to/file.patch
```
</div>

**4.** Configure the package with a custom installation prefix:
```bash
./configure --prefix=$HOME/local
```

**5.** Build and install the package:
```bash
make
make install
```
*This installs the package into the* `$HOME/local` *directory. **This allows you to install the software without root access.** However, keep in mind that the installed software will only be accessible from within your home directory and may not be visible to other users on the system.*

<div class="protip" markdown="1">
You can install software to another location in the file system (where you have write access to) and then create symbolic links (**sym-links**) to the executables in your home directory, allowing you to easily access them. <base class="mb">
**4'-5'.** Configure the package with a custom installation prefix:
```bash
./configure --prefix=/project/{group-wide folder}/SOFTWARE/package_name
make
make install
```
<base class="mt">
**6.** Create sym-links to the executables in your $HOME directory:
```bash
cd $HOME
ln -s project/{group-wide folder}/SOFTWARE/
```
</div>


### *use* `.configure` *file*

Many programs are distributed as a compressed archive (`.tar.gz`) that contains the source code of the software package. To install software packaged in this form, you will typically need to extract the files and **compile the source code manually on the HPC system**. Such software distributions usualy comes with a standard set of files that lets you install programs with ease. After unpacking, if you see the `.configure` file in decompressed directory, use the following approach.

**0.** Enter the desired location on HPC (e.g., preferred subdirectory in the working directory).

**1.** Download the source code for "myprogram", e.g., using the `wget` command followed by the link:
```bash
wget [download-link]
```

**2.** Extract the source code, if needed.
```bash
tar xvf myprogram-1.0.tar.gz
```

<button class="btn more mr"></button> *...about decompressing archive in section:* *[How to decompress the archive?](#how-to-decompress-the-archive)*

**3.** Change to the directory containing the source code:
```bash
cd myprogram-1.0
```

**4.** Compile the program [*configure the buid, build the software, install the software*]:
```bash
./configure --prefix=$HOME/myprogram
make
make install
```

**5.** Add the following line to your shell startup file (e.g., ~/.bashrc or ~/.bash_profile):
```bash
export PATH=$HOME/myprogram/bin:$PATH
```

**6.** Reload the `.bashrc` to update the changes in the environment:
```bash
source ~/.bashrc
```

**7.** Now you should be able to run `myprogram` from the terminal.
```bash
myprogram -help
```

<base class="mt">
Follow the aletrantive steps 5-8 (below), if you want to create a custom module for a new software.

<button class="btn more mr"></button> *...in section [Create custom module](#create-custom-module)*

**5'.**  Create a module file for "myprogram" in your environment modules directory (e.g., `~/custom_modules`):
```bash
# myprogram modulefile

setenv MYPROGRAM_HOME $HOME/myprogram
prepend-path PATH $MYPROGRAM_HOME/bin
```

**6'.** Add *(only once)* the following line to your shell startup file (e.g., ~/.bashrc):
```bash
module use ~/custom_modules
```
**7'.** Reload the `.bashrc` to update the changes in the environment:
```bash
source ~/.bashrc
```

**8'.** Now you should be able to load the "myprogram" module using the following command:
```bash
module load myprogram
```

<div class="warning" markdown="1">
In case something goes wrong or you get an error saying that you need 'package x' before installing, then you can undo these steps before attempting installation again, using: <br>
```bash
make clean
```
<base class="mt">
If the program doesn't work as intended or something goes wrong after installation, many programs can be safely uninstalled:<br>
```bash
make uninstall
```
</div>

<div class="protip" markdown="1">
It is good idea to run all the above commands in a `build` **directory** inside the package directory, so that if something doesn't work you can easily delete the `build` **directory** to start over.
</div>


### *use* `Makefile` *file*

Some programs don't have `.configure` but they already have a `Makefile`. These programs do not need the first step *(i.e., executing* `.configure`*)*, and you can simply install them by typing:
```bash
make
make install
```

The executables are generally created either in the same directory or in the `bin` directory, within the package directory. Sometimes these packages will allow you to install other locations as well.

Consult the `README` or `INSTALL` files that came with the program or edit the `Makefile` to hard code the installation directory. In some cases, setting `PREFIX` variable to the desired installation location will also do the trick.

```bash
PREFIX=/custom/installation/location  make
```


### *use* `cmake` *command*

If the `README` file says that you need to use `camke` command, then use these steps to install:
```bash
# after extraction, cd to the package
cd package
mkdir build
cd build
cmake ..
# if you want it in a different directory, then
cmake -DCMAKE_INSTALL_PREFIX:PATH=/location/for/installation ..
make
# if this completes successfully, you will see a bin folder above this current directory
# that will have the executables
```


## Create custom module

You can install software packages in your **home directory** or in the **group's working directories**.  Then you can create your own *module file* to set environment variables, update `PATH` and `LD_LIBRARY_PATH`, and perform any other necessary setup. The ***module file*** is a simple script that can be written in any scripting language such as *bash*, *tcl*, or *python*. <br>

**1.** Create directory for all custom modules:
```bash
mkdir /path/to/custom_modules
```

**2.** In the *custom_modules* directory, make a directory for each software:
```bash
mkdir /path/to/custom_modules/app_name
```

**3.** In the *app_name* directory, create a text file, i.e., custom *module file*: <br>
^<i>file name should indicate version number and, if applicable, the compiler version</i>

```bash
#!/bin/bash

#-- Example custom module file --#

# Set environment variables:
export MY_APP_DIR=/absolute/path/to/your/software

# Update PATH:
prepend-path PATH $MY_APP_DIR/bin

# Update LD_LIBRARY_PATH:
prepend-path LD_LIBRARY_PATH $MY_APP_DIR/lib

# Other setup:
alias myapp='$MY_APP_DIR/bin/my_app.sh'
```
*This custom module file sets an* ***environment variable*** `MY_APP_DIR` *to the location of your personal installation of the* ***software***. *It also updates* `PATH` *and* `LD_LIBRARY_PATH` *to include the* `bin` *and* `lib` *directories in* `MY_APP_DIR`. *Finally, it sets an <a class="t-links" href="320" section="#34-define-aliases">alias</a> for running the* `my_app.sh` *script in the bin directory.*

**4.** Once you have your custom modules, you can add the directory containing the modules to your module search path using the `module use` command. Then use the `module load` command to load the module, which is the name of the directory for selected software in the *custom_modules* location.
```bash
module use /path/to/custom_modules
module load app_name
```
*By using the* `module use` *command, you can temporarily modify the* `module search` *path for your current shell session without affecting the module search path for other users.*

<div class="note" markdown="1">
The `module use` command in a high performance computing system allows you to temporarily modify the search path for modules. This command allows you to add or prepend one or more directories to the existing module search path, so that when you run the `module avail` or `module load` commands, it will search the newly added directories first. This can be useful if you have your own custom modules or if you want to use a different version of a module than what is available in the default module search path.
</div>

**5.** To set the modules path to be available on login, add the `module use` command to your **~/.bashrc** file:
```bash
module use /path/to/custom_modules
```



# Install language-dedicated packages


## **Python packages**

Using our own `python` will allow writing/installing modules to it as needed. After unpacking, `cd` to the package, and install it as follows:
```bash
module load python
python setup.py install # all executables will be stored in python/bin (not in package directory)
```
If in case if you need to test out something and not install it as module, you can install in a personal location as well:
```bash
python setup.py install --local=/home/username/mydir
```
or simply as
```bash
python setup.py install --user # executable's will be in ~/.local/bin directory
```

Any package available at [PyPi](https://pypi.python.org/pypi) can be managed using these commands as well:
```bash
module load python
pip install SomePackage # installs a python package
pip show --files SomePackage # shows what files are installed for the particular package
pip list --outdated # lists what packages are outdated
pip install --upgrade SomePackage # upgrades a package
pip uninstall SomePackage # uninstalls a package
pip freeze # lists all the packages that are currently installed and their version
```

### *Conda*

One of the easiest ways you can install custom Python software in your home or project directory is through the [Conda package manager](https://conda.io/docs/user-guide/getting-started.html). Thousands of biological packages and their dependencies can be installed with a single command using the [Bioconda repository](https://bioconda.github.io/) for the Conda package manager.


## **R packages**

Installing `R` libraries for the group is really easy since you don't have to do anything different from the way you install packages to your home directory. HPC infrastructure typically has its own `R` version installed as module and it is configured such that it will automatically install the R-related package in the correct location, when you are using this module.

```bash
module avail r
```
<pre class="output">
---------------------- /apps/modulefiles/core ----------------------
   r/4.0.2
   r/4.2.0
   r/4.3.2          (D)
   rstudio/1.3.1073

-------------------- /apps/licensed/modulefiles --------------------
Where:
 D:  Default Module
</pre>

To load the selected `R` version, type:
```bash
module load r/4.3.2
```

To activate the interactive `R` session, type:
```
R
```

The `R` command prompt will appear:

<pre class="output">
<b class="prompt-1 before" data-before="[alex.badacz@Atlas-login-1 ~]$"></b> R

<b class="prompt-1 before" data-before="R version 4.3.2 (2023-10-31) -- Eye Holes"></b>
<b class="prompt-1 before" data-before="Copyright (C) 2023 The R Foundation for Statistical Computing"></b>
<b class="prompt-1 before" data-before="Platform: x86_64-pc-linux-gnu (64-bit)"></b>

<b class="prompt-1 before" data-before="R is free software and comes with ABSOLUTELY NO WARRANTY."></b>
<b class="prompt-1 before" data-before="You are welcome to redistribute it under certain conditions."></b>
<b class="prompt-1 before" data-before="Type 'license()' or 'licence()' for distribution details."></b>

<b class="prompt-1 before" data-before="Type 'demo()' for some demos, 'help()' for on-line help, or"></b>
<b class="prompt-1 before" data-before="'help.start()' for an HTML browser interface to help."></b>
<b class="prompt-1 before" data-before="Type 'q()' to quit R."></b>

<b class="prompt-1"></b>
</pre>

If you are the novice to `R`, start with exploring `demo()` and `help.start()`:
<code class="code-block"><b class="prompt-1"></b>demo()</code>

<pre class="output">
Demos in package ‘base’:

error.catching          More examples on catching and handling errors
is.things               Explore some properties of R objects and
                        is.FOO() functions. Not for newbies!
recursion               Using recursion for adaptive integration
scoping                 An illustration of lexical scoping.
<b class="prompt-2"></b>

Use ‘demo(package = .packages(all.available = TRUE))’
to list the demos in all *available* packages.
</pre>


### *Installing CRAN R Packages*

CRAN packages are by far the easiest. From within R prompt, type:
```bash
module load r
R
# R command prompt will appear
```
<code class="code-block"><b class="prompt-1"></b>install.packages(<span class="s2">"some_package"</span>)</code>
*If it prompts to select the closest mirror, choose IA, which is* `77`.

Once installed, you will be back at `R` prompt. <br>
Load the installed package to see is everything is fine.
<code class="code-block"><b class="prompt-1"></b>library(<span class="s2">some_package</span>)</code>
*This should load the package and return without any error message.*

### *Install manually downloaded R Package*

Some packages that aren't in CRAN but are available from the author directly, can be installed for group as well. Download the the `package.tar.gz` from the author's website.
```bash
module load r
R CMD INSTALL package.tar.gz
```
*This will install the package for the group.* <base class="mb">
Check to see if it works:
```r
R
# R command prompt will appear
```
<code class="code-block"><b class="prompt-1"></b>library(<span class="s2">package</span>)</code>

*This should load the package and return without any error message.*


### *Installing Bioconductor Modules*

For Bioconductor packages, follow these steps:
```r
module load R
R
# R command prompt will appear
```
<code class="code-block"><b class="prompt-1"></b>source(<span class="s2">"http://www.bioconductor.org/biocLite.R"</span>)
<b class="prompt-1"></b>biocLite(c(<span class="s2">"package_name"</span>), dependencies=TRUE)
<b class="prompt-1 before" data-before="# check if package is installed"></b>
<b class="prompt-1"></b>library(<span class="s2">package_name</span>)
</code>
*This should load the package and return without any error message.*


### *Managing R packages*

*List available packages*

To get a complete list of packages that are already installed, load the `R` module and enter the R prompt. From there, type the following command:
<code class="code-block"><b class="prompt-1"></b>library()</code>

To get all packages installed along with their version number, type
<code class="code-block"><b class="prompt-1"></b>installed.packages()[,c(<span class="s2">"Package","Version"</span>)]</code>


### *Upgrade R packages*
For the R packages that you installed from `CRAN` can all be upgrades in single commands:
* upgrades all packages:
<code class="code-block"><b class="prompt-1"></b>update.packages()</code>
* chack package status:
<code class="code-block"><b class="prompt-1"></b>package.status()</code>
*Says if 'ok' (no updates), 'upgrade' (needs update) or 'unavailable' (package removed from repository).*

Other useful option to check the status of all packages currently installed is:
<code class="code-block"><b class="prompt-1"></b>inst <- packageStatus()$inst</code>
<code class="code-block"><b class="prompt-1"></b>inst[inst$Status != <span class="s2">"ok"</span>, c(<span class="s2">"Package", "Version", "Status"</span>)]</code>


### *Uninstall R package*
Packages can be uninstalled easily using `remove.packages` command:
<code class="code-block"><b class="prompt-1"></b>remove.packages(<span class="s2">"package_name"</span>)</code>


### **Perl modules**
Once the module is loaded, use the following set of commands to install any `perl` modules.
```bash
module load perl
```

* If there is a `Makefile.PL`:

```bash
perl Makefile.PL PREFIX=/home/users/dag   # makes the system specific makefile
make          # builds all the libaries
make test     # runs a short test
make install  # installs the package correctly.
```

* If there is a `Build.PL`:

```bash
perl Buil.PL
./Build test
./Build install
```

The module will be installed in the group's perl folder (not in the package directory). So, like you did in `Python` you need to set up a dummy module file that load `Perl`.


### **Java programs**
Precompiled java programs that come as `.jar` files, can be placed in any directory and can be called from there. For using it with environment modulefile, you need to follow these steps:

1. First, create directory (program name) and sub-directory (version number).
2. Place the `.jar` file in this sub-directory. <brWithin this create another directory and call it as `bin`.
3. For all `.jar` files in `/programname/version/` create a text file in `/programname/version/bin`. <br>
*This text file will just have a single line, something like:*
```bash
java program_name.jar
```

4. Change permission for these text files so that they can be executed.
```bash
chmod +x -R /programname/version/bin
```

5. In your module file, you need to add this line:
```bash
prepend-path PATH /programname/version/bin
```

6. Now the `.jar` files can be simply called as `programname` (once module is loaded). <br>No need to add `java` in front.
