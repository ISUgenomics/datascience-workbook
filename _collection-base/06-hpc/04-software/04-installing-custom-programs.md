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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

Installing programs on a high-performance computing (HPC) system can be different from installing software on a personal computer due to the complex nature of HPC systems and limited privileges for regular users. <br>
If you need a **specific software package**, first check whether this software is already pre-installed on HPC. Typically, compilers, programming languages, libraries and frameworks, basic visualization software, text editors, and job schedulers are all available. What's more, popular software for specialized analysis (*such as `blast` for bioinformatics*) is often not only available but also regularly upgraded to the latest release. See tutorial {% include target_link href=641 section="#how-to-find-available-software" text="How to find available software?" %} to learn more about:
* {% include target_link href=642 text="software available as pre-installed modules" %}
* {% include target_link href=643 text="software available via package manager" %}
* {% include target_link href=644 text="installing custom programs in user space" %}
* {% include target_link href=641 section="#check-the-documentation" text="other methods of accessing the software" %}


# Installing custom programs on HPC

Most HPC systems run on Linux-based operating system, so **installing custom programs is done on the command line**.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> If you would like to learn more about the command line interface and Linux-based operating systems start with the tutorials:
<li>{% include target_link href=310 text="Terminal - an interface for command-line operations" %}</li>
<li>{% include target_link href=320 text="Introduction to UNIX Shell" %}</li></span>
</div><br>

<b>What you can NOT do as a regular user on HPC:</b>
* install new packages using the package manager, such as YUM, APT, DNF, ZYpp, or Pacman
* install software for the system-wide use
* install software that requires superuser privileges


<b>What you can DO as a regular user on HPC:</b>
* [install custom software](#install-custom-software)
  * in the [user space](#-install-for-user-only-access)
  * in the [group-wide](#-install-for-group-wide-access) accessible location
* [add custom software to the `module` manager](#create-custom-module)
* [create `virtual environments` and install custom software](#create-virtual-environment-using-conda)

<span style="color: #ff3870;font-weight: 500;">This handy guide is for installing programs in `UNIX` environment on HPC systems.</span><br>
Most of these steps assume that you: <br>1) are installing package in a user or group accessible location, <br>2) without root privilages, and <br>3) utilizing a) the environment module systems or b) virtual environment systems for package management.

## Install custom software

### ***Where to install the software?***
If you need to install software on a high-performance computing (HPC) system, there are several methods you can use, depending on the software and the HPC system. Note that global installations are not possible when you are not the superuser (root, administrator), and personal directory installations are only available to one person (see [user-only access](#-install-for-user-only-access)). If the software will be used by members of a particular group, it is a good idea to install one copy of the software available to all (see [group-wide access](#-install-for-group-wide-access)). Finally, if there is a chance that the software can serve a larger number of users from different groups, it is reasonable to ask the cluster administrators for system-wide installations ( see {% include target_link href=641 section="#ask-the-system-administrator" text="How to get new software installed?" %})

### • *Install for user-only access*
Some HPC systems allow users to install software in their home directory. This is typically done by downloading the software, compiling it from source code, and installing it in a directory within the user's home directory. This method is often used for small programs because of the **limited storage space in the home directory**. Installing all the software in the home directory will quickly fill the available space, and this will result in serious dysfunctions in the operation of user's account. The recommended solution is to install programms elsewhere (i.e., in the working directory) and soft-link the installation location to the home directory.

Explore section {% include target_link href=320 section="#2-home-directory" text="Home directory" %} tutorial, to find out:
* {% include target_link href=320 section="#21-what-is-the-home-folder-used-for" text="What is the HOME folder used for?" %}
* {% include target_link href=320 section="#22-is-home-a-working-directory" text="Is HOME a working directory?" %}
* {% include target_link href=320 section="#23-good-practices-for-home-organization" text="Good practices for HOME organization." %}

<br><br>
Follow the guide in the tutorial {% include target_link href=631 text="Setting up your home directory for data analysis" %} to learn about the file system organization on the HPC, including the principles for {% include target_link href=631 section="#your-home-folder" text="home directory" %}, {% include target_link href=631 section="#your-project-folder" text="working directory" %}, and storage space.

<br>
**Quick Guide**

**0.** Avoid installing anything in your **home directory**. This is your default location when you log in, accesed with a shortcut `cd ~`.

**1.** The **working directory** *(or workdir)* is usually on a path directly inherited from root, `/`. Typically it is called `/work` or `/project` or similar. Further on, there are directories of particular groups or projects, and subdirectories of individual users or tasks. <br><i>You can list directories on a path using the `ls` command: </i>

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

From now on, all installation processes attempting to save files in the home directory will be redirected to the corresponding subdirectories in the working directory. At the same time, all processes looking for software in the home directory will find it via symbolic links.

**4.** If you want to **download the source code to install it manually**, you should also go to the working directory, create a subdirectory, and do the installation there. To follow a practical guide, go to the section [How to install regular packages?](#how-to-install-regular-packages)


### • *Install for group-wide access*
It is recommended to install only once all programs commonly used in your group/lab. In this case, it is necessary to have the **group's working directory** available to all lab members. Such a shared location is a good place for a group-wide installation, **making software accessible by all qualifying users**.

**1.** Create a `SOFTWARE` folder in your group's working directory on the cluster:

```bash
mkdir /project/<group-wide folder>/SOFTWARE
```

**2.** For any future software, create a subdirectory there, where you download the source code and perform the installation.


### ***How to get the software?***

### ***How to decompress the archive?***

Packages are usually compressed in many different ways for easy handling. Typically before proceeding to installation, it must be unpacked. <br>For most cases `tar -xf` will do the trick:

```bash
tar -xf package.tar.gz
```

Although `tar` can auto detect the compression type and decompress the archive with the `-xf` options, you can also specify what type compressed files you're providing.
Look at the archive extension to recognize the type of compression. Then use the corresponding commands to unpack.

| <b>.tar</b>           | <b>.rar</b>          | <b>.zip</b>        |
|-----------------------|----------------------|--------------------|
|`tar -xvf package.tar` |`unrar -x package.rar`|`unzip package.zip` |

| <b>.tar.gz</b>            | <b>.tgz</b>            | <b>.gz</b>         |
|---------------------------|------------------------|--------------------|
|`tar -xvzf package.tar.gz` |`tar -xvzf package.tgz` |`gunzip package.gz` |


| <b>.tar.bz2</b>            | <b>.tbz2</b>            | <b>.bz2</b>          |
|----------------------------|-------------------------|----------------------|
|`tar -xvjf package.tar.bz2` |`tar -xvjf package.tbz2` |`bunzip2 package.bz2` |

| <b>.Z</b>             | <b>.7z</b>       |
|-----------------------|------------------|
|`uncompress package.Z` |`7z x package.7z` |

### ***How to install regular packages?***

*The table contains a list of the most common package file formats with corresponding package managers and operating systems.*

| package file format | package manager     | operating system           | notes |
|---------------------|---------------------|----------------------------|-------|
| <b>.rpm</b>         | YUM                 | RHEL, Fedora, CentOS       | Unix-based, typically on HPC |
| <b>.deb</b>         | APT                 | Debian, Ubuntu, Linux Mint | Unix-based, typically on personal machine |
| <b>.pkg</b>         | MacOS Installer     | MacOS                      | typically on personal machine |
| <b>.msi</b>         | Microsoft Installer | Microsoft Windows          | typically on personal machine |
| <b>.tar.gz</b>      | installed manually  | any                        | compressed archive files of the source code |

On Linux-based HPC systems, the most common format is `.rpm` for Red Hat-based systems, such as CentOS and Fedora with `YUM` package manager. The `.tar.gz` file format is also commonly used on HPC systems to install software from the source code. This process can be more time-consuming and complex than installing packages from a package manager, but it provides more control over the installation process, and can be the only option for installing software that is not available in the package manager's repositories.

<span style="color: #ff3870;font-weight: 500;">The <a href="http://pkgs.org" target="_blank">http://pkgs.org  ⤴</a> website lists all RPMs available for all Unix-based operating systems.</span>


### • *use package file: `.rpm`*

The `.rpm` package files are a type of software distribution format used by some Linux-based operating systems. It is a single file of the compressed archive that contain the software package and its dependencies, as well as installation instructions for the package manager appropriate for the operating system. These all-in-one files allow users to easily install, manage, and update software on their systems, without having to manually download, compile, and install software from source code.

The `YUM` package manager extracts the contents of the `.rpm` archive, verifies that all dependencies are satisfied, and installs the software in the appropriate location on the system. The package manager also keeps track of the installed packages, so that they can be easily updated or removed as needed.

**Follow the steps to extract and install software from `.rpm` file:**

**1.** Find the RPM package correct for your system. <i>The <a href="http://pkgs.org" target="_blank">http://pkgs.org  ⤴</a> website lists all RPMs available, and they are free to download.</i><br>
<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
All CentOS and Fedora RPM's work on Red Hat (RHEL). <br>
Download the <b>Source Package</b> (not Binary) because as a reugular user you can't use the <code>yum install</code> command. Instead, you can extract the source package and use a custom installation.
</span>
</div><br>

**2.** Extract the package:
```bash
rpm2cpio package.rpm | cpio -idmv
```
<i>You should see a `*tar.gz` or other type of compressed program, if this completes successfully.</i>

**3.** Change into the directory containing the extracted files:
```bash
cd path/to/extracted/files
```
<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
In rare cases, when you have patches (extracted from RPM), you might have to apply them before you install. <br><br> <code>patch -Np1 -i path/to/file.patch</code>
</span>
</div><br>

**4.** Configure the package with a custom installation prefix:
```bash
./configure --prefix=$HOME/local
```

**5.** Build and install the package:
```bash
make
make install
```

This installs the package into the <b>$HOME/local</b> directory. This allows you to install the software without root access. However, keep in mind that the installed software will only be accessible from within your home directory and may not be visible to other users on the system.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can install software to another location in the file system (where you have write access to) and then create symbolic links (sym-links) to the executables in your home directory, allowing you to easily access them. <br><br>
**4'-5'.** Configure the package with a custom installation prefix: <br>
<pre><code>
./configure --prefix=/project/{group-wide folder}/SOFTWARE/package_name
make
make install
</code></pre>
**6.** Create sym-links to the executables in your $HOME directory: <br>
<pre><code>
cd $HOME
ln -s project/{group-wide folder}/SOFTWARE/
</code></pre>
</span>
</div><br>


### • *use .configure file*

Many programs are distributed as a compressed archive (.tar.gz) that contains the source code of the software package. To install software packaged in this form, you will typically need to extract the files and compile the source code manually on the HPC system. Such software distributions usualy comes with a standard set of files that lets you install programs with ease. After unpacking, if you see the `.configure` file in decompressed directory, use the following approach.

**0.** Enter the desired location on HPC (e.g., preferred subdirectory in the working directory).

**1.** Download the source code for "myprogram", e.g., using the `wget` command followed by the link:
```bash
wget [download-link]
```

**2.** Extract the source code, if needed. See more options for decompressing archive in section: [How to decompress the archive?](#how-to-decompress-the-archive)
```bash
tar xvf myprogram-1.0.tar.gz
```

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

Follow the aletrantive steps 5-8, if you want to create a custom module for a new software. Learn more in section [Create custom module](#create-custom-module).

**5'.**  Create a module file for "myprogram" in your environment modules directory (e.g., ~/custom_modules):
```bash
# myprogram modulefile
#
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

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
In case something goes wrong or you get an error saying that you need 'package x' before installing, then you can undo these steps before attempting installation again, using: <br>
<code>make clean</code><br><br>
If the program doesn't work as intended or something goes wrong after installation, many programs can be safely uninstalled:<br>
<code>
make uninstall
</code>
</span>
</div><br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It is good idea to run all the above commands in a <b>build</b> directory inside the package directory, so that if something doesn't work you can easily delete the <b>build</b> directory to start over.
</span>
</div><br>


### • *use Makefile file*

Some programs don't have `.configure` but they already have a `Makefile`. These programs do not need the first step *(i.e., executing `.configure`)*, and you can simply install them by typing:
```bash
make
make install
```

The executables are generally created either in the same directory or in the `bin` directory, within the package directory. Sometimes these packages will allow you to install other locations as well. Consult the `README` or `INSTALL` files that came with the program or edit the `Makefile` to hard code the installation directory. In some cases, setting `PREFIX` variable to the desired installation location will also do the trick.

```bash
PREFIX=/custom/installation/location  make
```

### • *use cmake command*

If the README file says that you need to use `camke` command, then use these steps to install:
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

<i>This custom module file sets an <b>environment variable MY_APP_DIR</b> to the location of your personal installation of the <b>software</b>. It also updates PATH and LD_LIBRARY_PATH to include the <b>bin</b> and <b>lib</b> directories in MY_APP_DIR. Finally, it sets an {% include target_link href=320 section="#34-define-aliases" text="alias" %} for running the my_app.sh script in the bin directory.</i>

**4.** Once you have your custom modules, you can add the directory containing the modules to your module search path using the `module use` command. Then use the `module load` command to load the module, which is the name of the directory for selected software in the *custom_modules* location.
```bash
module use /path/to/custom_modules
module load app_name
```

<i>By using the `module use` command, you can temporarily modify the `module search` path for your current shell session without affecting the module search path for other users.</i>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
The <code>module use</code> command in a high performance computing system allows you to temporarily modify the search path for modules. This command allows you to add or prepend one or more directories to the existing module search path, so that when you run the <code>module avail</code> or <code>module load</code> commands, it will search the newly added directories first. This can be useful if you have your own custom modules or if you want to use a different version of a module than what is available in the default module search path.
</span>
</div><br>

**5.** To set the modules path to be available on login, add the `module use` command to your **~/.bashrc** file:
```bash
module use /path/to/custom_modules
```

## Create virtual environment using Conda


### **Conda**

One of the easiest ways you can install your own software in your home or project directory is through the [Conda package manager](https://conda.io/docs/user-guide/getting-started.html). Thousands of biological packages and their dependencies can be installed with a single command using the [Bioconda repository](https://bioconda.github.io/) for the Conda package manager.


### *Python packages*
Using our own `python` will allow writing/installing modules to it as needed. After unpacking, `cd` to the package, and install it as follows:
```bash
module load python
python setup.py install # all executables will be stored in python/bin (not in package directory)
```
If in case if you need to test out something and not install it as module, you can install in a personal location as well:
```bash
python setup.py install --local=/home/username/mydir
# or simply as
python setup.py install --user # executable's will be in ~/.local/bin directory
```

Any package available at [[https://pypi.python.org/pypi | PyPi ]] can be managed using these commands as well
```bash
module load python
pip install SomePackage # installs a python package
pip show --files SomePackage # shows what files are installed for the particular package
pip list --outdated # lists what packages are outdated
pip install --upgrade SomePackage # upgrades a package
pip uninstall SomePackage # uninstalls a package
pip freeze # lists all the packages that are currently installed and their version
```

### **R packages**

Installing `R` libraries for the group is really easy since you don't have to do anything different from the way you install packages to your home directory. GIF has its own `R` version installed as module and it is configured such that it will automatically install the package in the correct location, when you are using this module.
```bash
module load R
R
# R command prompt will appear
>
```

### *Installing CRAN R Packages*
CRAN packages are by far the easiest. From within R prompt, type:
```r
module load R
R
# R command prompt will appear
> install.packages("some_package") # include quotes!
# if it prompts to select the closest mirror, choose IA, which is `77`
```
Once installed, you will be back at `R` prompt, load the installed package to see is everything is fine.
```bash
library(some_package)
# this should load the package and return without any error message
```
### *Install manually downloaded R Package*
Some packages that aren't in CRAN but are available from the author directly, can be installed for group as well. Download the the `package.tar.gz` from the author's website.
```r
module load R
R CMD INSTALL package.tar.gz
# This will install the package for the group.
# Check to see if it works
R
# R command prompt will appear
> library(package)
# this should load the package and return without any error message
```

### *Installing Bioconductor Modules*
For Bioconductor packages, follow these steps:
```r
module load R
R
# R command prompt will appear
> source("http://www.bioconductor.org/biocLite.R")
> biocLite(c("package_name"), dependencies=TRUE)
# check if package is installed
> library(package_name)
# this should load the package and return without any error message
```

### *Managing R packages*

*List available packages*

To get a complete list of packages that are already installed, load the `R` module and enter the R prompt. From there, type the following command:
```r
> library()
```
To get all packages installed along with their version number, type
```r
> installed.packages()[,c("Package","Version")]
```

### *Upgrade R packages*
For the R packages that you installed from `CRAN` can all be upgrades in single command
```r
update.packages() # upgrades all packages
package.status() # says if 'ok' (no updates), 'upgrade' (needs update) or 'unavailable' (package removed from repository)
```
Other useful option to check the status of all packages currently installed is:
```r
> inst <- packageStatus()$inst
> inst[inst$Status != "ok", c("Package", "Version", "Status")]
```
### *Uninstall R package*

Packages can be uninstalled easily using `remove.packages` command
```r
> remove.packages("package_name")
```

### **Perl modules**
Once the module is loaded, use the following set of commands to install any `perl` modules.
```bash
module load perl
```
If there is a `Makefile.PL`
```bash
perl Makefile.PL PREFIX=/home/users/dag   # makes the system specific makefile
make          # builds all the libaries
make test     # runs a short test
make install  # installs the package correctly.
```
If there is a `Build.PL`
```bash
perl Buil.PL
./Build test
./Build install
```
The module will be installed in the group's perl folder (not in the package directory). So, like you did in `Python` you need to set up a dummy module file that load `Perl`

### **Java programs**
Precompiled java programs that come as `.jar` files, can be placed in any directory and can be called from there. For using it with environment modulefile, you need to do these steps. First, create directory (program name) and sub-directory (version number). Place the `.jar` file in this sub-directory. Within this create another directory and call it as bin. For all `.jar` files in `/programname/version/` create a text file in `/programname/version/bin`. This text file will just have a single line, something like:
```bash
java program_name.jar
```
Change permission for these text files so that they can be executed.
```bash
chmod +x -R /programname/version/bin
```
In your module file, you need to add this line:
```bash
prepend-path PATH /programname/version/bin
```
Now the `.jar` files can be simply called as `programname` (once module is loaded). No need to add `java` in front.
