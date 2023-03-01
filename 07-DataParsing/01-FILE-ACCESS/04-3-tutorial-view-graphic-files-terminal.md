---
title: "Viewing graphics in a terminal as the text-based ASCII art"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / [1.3 Remote Data Preview without Downloading](04-0-remote-data-preview.md) / **1.3.3 Viewing graphics in a terminal as the text-based ASCII art**

---


# Introduction

**Using command line approaches for previewing remotely HPC resources** offers advantages in terms of speed, efficiency, and convenience. Users can quickly and easily access and manipulate remote files without having to download or transfer the entire dataset, making it an essential tool for data-intensive scientific research.


Graphics are often used in scientific research, including **charts, graphs, and images**. They **can be successfully generated on computing clusters** either as an output of some software or custom user's scripts. However, the problem arises when the user wants to quickly view any graphic files in the command line interface.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
When it comes to previewing graphic files, it's important to note that the <b>command line interface itself does not support displaying graphics</b>. This is because the command line interface is primarily text-based and lacks the graphical capabilities necessary for displaying images, charts, and other visual elements.
</span>
</div><br>

## *What's the issue?*

Typically, **when users need to view graphic files on the HPC system, they have to download the files onto their local machine first** and open them in a graphical interface like an image viewer or graphics editor. This process can be time-consuming and inconvenient, particularly for large or complex graphic files.

In scientific research, it's common for users to iteratively optimize the software settings to generate graphical output from large datasets on an HPC cluster. *For example, a user might configure gnuplot settings to create automatically repetitive plots for various dataset. Typically, they run multiple iterations to refine the settings and generate better visualizations.*

In such cases, **the process of downloading intermediate graphic files from the HPC cluster to the local machine can be particularly painful**. Each time the user wants to view an intermediate chart, they have to download the file onto their local machine and open it in a graphical interface. This process can be time-consuming and disruptive to the user's workflow, slowing down the process of refining their visualizations.

## *What's the solution?*

**Using command line approaches** for previewing graphic files can help alleviate this bottleneck by allowing users **to view the files remotely without having to download them** to their local machine. There are several approaches that users can take to preview graphic files using the command line.

##  • mount a remote folder using sshfs

`sshfs` is a tool that allows you to mount a remote HPC folder on your local machine over secure SSH connection, allowing you to browse, view, and modify files stored remotely as if they were stored locally. <br>
For example, you can use the command:
```
sshfs user@hostname:/remote/folder /local/folder
```
to mount a remote folder on your local machine, and then browse and open files in that folder using your local graphical file explorer or command line.

<span style="color: #ff3870;font-weight: 500;">To learn more visit the tutorial <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-3-tutorial-mount-remote-folder" target="_blank">Mounting Remote Folder on Local Machine  ⤴</a></span>

##  • remote desktop or X11 forwarding

One approach is to use a remote desktop or X11 forwarding to display the graphic files on a local machine. In this case, the remote system that is hosting the graphic files will need to have a graphical desktop environment installed, and the user will need to establish a remote connection using tools like VNC or SSH with X11 forwarding.

```
ssh -X user@hostname
```

<span style="color: #ff3870;font-weight: 500;">To learn more visit the tutorial <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-2-tutorial-view-pdf-files-x11" target="_blank">Viewing PDF Files using X11 SSH connection  ⤴</a></span>

##  • convert the graphic files into text-based formats (ASCII art)

Another approach is to use command line tools to **convert the graphic files into text-based formats that can be viewed on the command line**. This solution can be the most robust since it does not require a graphical desktop environment installed on the HPC system or configuration permissions for remote folder mounting.

One technique is **converting graphics to ASCII art** displayed directly in the terminal. Converting graphics to ASCII art in the terminal can be a useful technique when working on a remote machine, as it allows you to view images without requiring a graphical user interface or transferring the file to your local machine.

![01-remote_preview_ascii_art.png](../assets/images/01-remote_preview_ascii_art.png)<br>
*The figure shows the Linux logo in PNG format (left panel) and two variants of its conversion to ASCII art displayed directly in the terminal window (middle and right panels). The tool used was an ascii-image-converter.*

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
ASCII stands for American Standard Code for Information Interchange, which is a <b>character encoding standard</b> that assigns unique numeric codes to represent letters, numbers, punctuation marks, and other characters commonly used in the English language. ASCII defines 128 different characters, each of which is represented by a unique 7-bit binary code.
</span>
</div><br>

***How it works?*** <br>
When <b>converting graphics to text-based ASCII art in the terminal</b>, the image is first divided into small sections called "tiles". Each tile corresponds to a block of text characters in the output ASCII art. The brightness or color of the pixels in each tile is then analyzed, and a character is selected from a predefined set of ASCII characters based on how closely it matches the brightness or color of the tile. This process is repeated for each tile in the image, resulting in a text-based representation of the original image.

![01-remote_preview_ascii_art2.png](../assets/images/01-remote_preview_ascii_art2.png)<br>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Depending on the complexity and size of the original graphic, the resulting text output may be quite lengthy and difficult to interpret.
</span>
</div><br>


# Hands-on tutorial (ASCII art)

<span style="color: #ff3870;font-weight: 500;">In this tutorial, we will explore how to convert graphics to ASCII art using various command-line tools.</span> <br>
The primary focus of this tutorial is to help users get the required software installed on an HPC system to display graphics, even without X11 forwarding.

There are many tools available that can be used to **convert graphics to ASCII art in the terminal**. Some of these tools may be preinstalled on the remote machine, while others can be installed in the user's local space or even in their home directory. This means that **users can often set up and use these tools without requiring administrative privileges** or the installation of additional software on the remote HPC system.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
When working on an HPC system, it can be challenging to install custom software because users typically do not have the necessary privileges to install packages using the system's package manager. In such cases, the best options are either to <b>use container of the software image or to build the executable from source code</b> in the user space.
</span>
</div><br>

**In this tutorial, we will focus on providing a unified and robust way of custom software installation on HPC systems, primarily by using source code available from trusted repositories such as <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a>.** There will be also provided a quick guide for installing the required tools on Linux or macOS, in case the user want these tools also on a local machine.

<span style="color: #ff3870;font-weight: 500;">To learn more about installations on HPC visit the tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/04-installing-custom-programs" target="_blank">Installing Custom Programs in User Space  ⤴</a></span> available in section <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC" target="_blank">06. High-Performance Computing (HPC): Software Available on HPC  ⤴</a> of this workbook.


| TOOL | LICENSE | AUTHOR | GitHub | DOCS |
|------|---------|--------|--------|------|
| [jp2a](#jp2a) | GNU General | C.S. Larsen | <a href="https://github.com/cslarsen/jp2a" target="_blank">https://github.com/cslarsen/jp2a</a> | <a href="https://manpages.ubuntu.com/manpages/xenial/man1/jp2a.1.html#author" target="_blank">ubuntu manuals: jp2a</a> |
| [asciiview](#asciiview-or-aview) | GNU General | J. Hubicka | | <a href="https://manpages.ubuntu.com/manpages/kinetic/en/man1/aview.1.html" target="_blank">ubuntu manuals: aview</a>|
| [img2txt](#img2txt)  | <a href="http://www.wtfpl.net" target="_blank">WTFPL</a> | S. Hocevar <br>J.-Y. Lamoureux | <a href="https://github.com/cacalabs/libcaca" target="_blank">https://github.com/cacalabs/libcaca</a> | <a href="https://manpages.ubuntu.com/manpages/jammy/en/man1/img2txt.1.html" target="_blank">ubuntu manuals: img2txt</a> |
| [ascii-image-converter](#ascii-image-converter-recommended) | Apache-2.0 | Z. Hassan | <a href="https://github.com/TheZoraiz/ascii-image-converter" target="_blank">https://github.com/TheZoraiz/ascii-image-converter</a> | <a href="https://github.com/TheZoraiz/ascii-image-converter#cli-usage" target="_blank">CLI usage & flags</a> |
| [ascii-python](#ascii-python-python) | MIT License |A. Bhouri| <a href="https://github.com/Adam-BH/ascii_py" target="_blank">https://github.com/Adam-BH/ascii_py</a>| <a href="https://github.com/Adam-BH/ascii_py#docs" target="_blank">docs: ascii-python</a>|


## **Getting started**

Regardless of the tool you choose, you need to follow some preliminary steps:

**1.** Log in to the HPC system:
```
ssh user@hostname
```

**2.** Check the operating system (OS) on the HPC system:
```
cat /etc/os-release
```
The first few rows of the output displayed on the terminal screen should looks something like:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;"><br>
NAME="AlmaLinux" <br>
VERSION="9.1 (Lime Lynx)" <br>
ID="almalinux" <br>
ID_LIKE="rhel centos fedora" <br>
</code><br>
<i>This means the HPC uses a Linux operating system called <b>Alma</b> which is similar to RHEL, CentOS, and Fedora.</i><br><br>

You will use this name to find the appropriate category of operating systems at <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a>.

![01-install_custom_software_pkgs.png](../assets/images/01-install_custom_software_pkgs.png)

**3.** Check also the operating system architecture for the HPC system:
```
uname -i
```
The result should look like `x86_64` *(this case)* or `arch64` or `amd64` or `arm64`, etc.

You will use this info to select the correct variant of the software package.

![01-install_custom_software_pkgs2.png](../assets/images/01-install_custom_software_pkgs2.png)

**4.** Use the search box located in the top-right corner of the website to find the software package you need, for example `jp2a`.

This will take you to the subpage for the software package in the dedicated configuration. Scroll down to the **Download** section and copy the URL in the `Source Package` category. *As a regular user on the HPC system you can NOT install software using package manager but you can build executables from the source code.*

![01-install_custom_software_pkgs3.png](../assets/images/01-install_custom_software_pkgs3.png)

**5.** In the command line on the HPC system navigate to the location dedicated to your custom software storage (e.g., `/work/SOFTWARE`) and use the `wget command` to download the source package archive:

```
wget https://download-ib01.fedoraproject.org/pub/epel/7/SRPMS/Packages/j/jp2a-1.0.7-1.el7.src.rpm
```

Now, extract the package:
```
rpm2cpio jp2a-1.0.7-1.el7.src.rpm | cpio -idmv
```

to get a compressed archive, e.g., `jp2a-1.0.7.tar.gz` that you need further to extract using the command appropriate for the compression format: [see a quick guide <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/04-installing-custom-programs#how-to-decompress-the-archive" target="_blank">How to decompress the archive?  ⤴</a>]
```
tar -xvzf jp2a-1.0.7.tar.gz
```

Finally, you should get a folder *(in this case **jp2a-1.0.7**)* with a source code that can be installed in your user space on the HPC system.

For further instructions, follow the **INSTALLATION: HPC system** section for the specific tool provided below in this tutorial.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
<b>Remember to indicate the custom location <i>(--prefix=PATH)</i> during installation where the executables will be created</b>. On HPC system it should NOT be the <b>'/usr/local/bin'</b> path because as a regular user you will get an error: <i>Permission denied</i>. Also, it would be better if it was not a path in your home directory, because you will quickly run out of quota.<br>
It is recommended to create a SOFTWARE directory in the workspace, where all the executables will be collected and <b>add this directory to the environment variable $PATH</b> or create symbolic links to the home directory.
</span>
</div><br>


## jp2a

This is a tool for viewing images in the terminal as ASCII art that **supports JPEG format only**.
* options: <a href="https://manpages.ubuntu.com/manpages/xenial/man1/jp2a.1.html#author" target="_blank">ubuntu manuals: jp2a</a>
* download package: <a href="https://pkgs.org/download/jp2a" target="_blank">https://pkgs.org/download/jp2a</a>
* devel GitHub: <a href="https://github.com/cslarsen/jp2a" target="_blank">https://github.com/cslarsen/jp2a</a>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can use an ImageMagick built-in <b>convert</b> tool to convert other formats (e.g., PNG, TIFF) to JPEG first. See a quick guide below.
</span>
</div><br>

**INSTALLATION**

<details><summary>HPC system:</summary>

1. Perform STEPS 1-5 provided in section [Getting started](#getting-started) using the <b>jp2a</b> keyword for software searching at <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a>
or try this link: <a href="https://pkgs.org/download/jp2a" target="_blank">https://pkgs.org/download/jp2a  ⤴</a><br>
<i>*If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands directly:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://download-ib01.fedoraproject.org/pub/epel/7/SRPMS/Packages/j/jp2a-1.0.7-1.el7.src.rpm <br>
rpm2cpio jp2a-1.0.7-1.el7.src.rpm | cpio -idmv <br>
tar -xvzf jp2a-1.0.7.tar.gz <br>
rm jp2a.spec  jp2a-1.0.7.tar.gz  jp2a-1.0.7-1.el7.src.rpm
</code><br>

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder and create the configure script:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
cd jp2a-1.0.7 <br>
automake --add-missing --copy --no-force <br>
</code><br>

3. Run configure script while adjusting value for arguments: <br>
<b>--with-jpeg-prefix=</b>, <i>provide custom path to which you have writing permission</i><br>
<b>--prefix=</b>, <i>provide custom path to which you have writing permission</i><br><br>
<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">You can use the current directory or create a directory a level up from where the script is executed. It is best to specify an absolute path.</span>
</div>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./configure --with-jpeg-prefix=/work/gif/Alex/software/jp2a --with-curl-config=`which curl-config` --prefix=/work/gif/Alex/software/jp2a
</code><br>

4. Create the executables: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
make -j install
</code><br>
This will create a bin directory on the custom path that will contain software executables. In this case, it is a single program: <b>jp2a</b>.
</details>

<details><summary>Ubuntu/Debian:</summary>

Open terminal on a local machine and use the following commands:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update <br>
sudo apt install jp2a
</code><br>
</details>

<details><summary>macOS:</summary>

Open terminal on a local machine and use the following commands:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install jp2a
</code><br>
</details><br>

**jp2a USAGE:**

Here's an example command to view an image using asciiview:
```
jp2a fancy-cat.jpeg --colors
```
<p align="center"><img width="800" src="../assets/images/01-remote_view_jp2a.png"></p>

If you have <b>imagemagick</b> suite available on your system you can convert other formats to JPEG and stream it for jp2a. You first need to load `imagemagick` module and then use `convert` tool:
```
module load imagemagick
convert linux-logo.png jpg:- | jp2a -
```

<p align="center"><img width="800" src="../assets/images/01-remote_view_jp2a_2.png"></p>


## asciiview or aview

This is a tool for viewing images in the terminal as ASCII art. `aview` can only show files in the PNM file format. `asciiview` automatically converts the file formats (including PNG, JPEG, BMP, and GIF) to PNM with extern programs like ImageMagic (so remember to `module load imagemagick`) and then runs aview.
* options: <a href="https://manpages.ubuntu.com/manpages/kinetic/en/man1/aview.1.html" target="_blank">ubuntu manuals: aview & asciiview</a>
* download package: <a href="https://pkgs.org/download/aview" target="_blank">https://pkgs.org/download/aview</a>
* devel sourceForge: <a href="https://aa-project.sourceforge.net/aalib/" target="_blank">https://aa-project.sourceforge.net/aalib/</a>


**INSTALLATION**

<details><summary>HPC system:</summary>

The <b>asciiview</b> requires the <b>aalib</b>, so we need to install the dependency first. On the <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a> find and download both packages. For each, perform STEPS 1-5 provided in section [Getting started](#getting-started). <br>
<i>*If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands directly:</i><br>
<b>aalib:</b> <a href="https://pkgs.org/download/aalib" target="_blank">https://pkgs.org/download/aalib</a><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://download-ib01.fedoraproject.org/pub/epel/8/Everything/SRPMS/Packages/a/aalib-1.4.0-0.37.rc5.el8.src.rpm <br>
rpm2cpio aalib-1.4.0-0.37.rc5.el8.src.rpm | cpio -idmv <br>
tar -xvzf aalib-1.4rc5.tar.gz <br>
rm aalib.spec  aalib-1.4rc5.tar.gz  aalib-&ast;.patch aalib-1.4.0-0.37.rc5.el8.src.rpm <br>
./configure --prefix=/work/gif/Alex/software/aview <br>
make <br>
make install
</code>
This will create a bin directory on the custom path that will contain software executables: <br>
aafire  aaflip  aainfo  aalib-config  aasavefont  aatest  asciiview.<br><br>
<b>Remember to add the aalib to the $PATH variable:</b><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
export PATH=/work/gif/Alex/software/aview/bin:$PATH
</code><br>

<b>aview:</b> <a href="https://pkgs.org/download/aview" target="_blank">https://pkgs.org/download/aview</a><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://github.com/rpmsphere/source/raw/master/a/aview-1.3.0rc1-1.1.src.rpm <br>
rpm2cpio aview-1.3.0rc1-1.1.src.rpm | cpio -idmv <br>
tar -xvzf aview-1.3.0rc1.tar.gz <br>
rm aview.spec  aview-1.3.0rc1.tar.gz  aview-1.3.0rc1-1.1.src.rpm <br
./configure --prefix=/work/gif/Alex/software/aview <br>
make <br>
make install
</code><br>
<i>This will create a bin directory on the custom path that will contain software executables:</i> <br>
<b>asciiview</b>, <b>aview</b>.
<br><br>
</details>

<details><summary>Ubuntu/Debian:</summary>

Open terminal on a local machine and use the following commands:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update <br>
apt-get install aview
</code><br>
</details>

<details><summary>macOS:</summary>

Open terminal on a local machine and use the following commands:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install aview
</code><br>
</details><br>

**asciiview USAGE:**

Here's an example command to view an image using asciiview:
```
module load imagemagick
asciiview fancy-cat.jpeg
```
*In this example, fancy-cat.jpeg is the input file. Once you run the command, the image will be displayed in the terminal window as ASCII art that you can adjust in real-time using controls on the keyboard.*

<p align="center"><img width="800" src="../assets/images/01-remote_view_asciiview.gif"></p>

## img2txt

This is a tool for converting various image formats to ASCII art. It supports formats such as PNG, JPEG, GIF, and BMP.

* options: <a href="https://manpages.ubuntu.com/manpages/jammy/en/man1/img2txt.1.html" target="_blank">ubuntu manuals: img2txt </a>
* download package: <a href="https://pkgs.org/download/libcaca" target="_blank">https://pkgs.org/download/libcaca</a>
* devel GitHub: <a href="https://github.com/cacalabs/libcaca" target="_blank">https://github.com/cacalabs/libcaca</a>


**INSTALLATION**

<details><summary>HPC system:</summary>

The <b>img2txt</b> tool is a part of the <b>libcaca</b> package.
1. Perform STEPS 1-5 provided in section [Getting started](#getting-started) using the <b>libcaca</b> keyword for software searching at <a href="https://pkgs.org/" target="_blank">pkgs.org</a>
or try this link: <a href="https://pkgs.org/download/libcaca" target="_blank">https://pkgs.org/download/libcaca</a><br>
<i>*If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands directly:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://download-ib01.fedoraproject.org/pub/epel/8/Everything/SRPMS/Packages/l/libcaca-0.99-0.59.beta20.el8.src.rpm <br>
tar -xvzf libcaca-0.99.beta19.tar.gz
</code><br>

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder and run configure script while adjusting value for arguments:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
cd libcaca-0.99.beta19 <br>
./configure --prefix=/work/gif/Alex/software/libcaca
</code><br>

3. Create the executables: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
make <br>
make install
</code><br>
This will create a bin directory on the custom path that will contain software executables: <br>
<b>img2txt</b>, cacaview, cacaclock  cacademo  cacafire  cacaplay  cacaserver.<br><br>
<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
In my case, the program has NOT been built with Imlib2 support, since this graphics library was not natively pre-installed on my HPC system. This results in only BMP loading is supported. So, note that when you face the same issue and try to convert JPEG or PNG you will get the <b>error message</b>: <i>"unable to load image-filename"</i>.</span>
</div><br>
</details>


<details><summary>Ubuntu/Debian:</summary>

Run the following command in the terminal:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get install libcaca-utils
</code><br>
</details>

<details><summary>macOS:</summary>

Run the following command in the terminal:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install libcaca
</code><br>
</details><br>

**img2txt USAGE:**

Here's an example command to convert an image to ASCII art using img2txt:
```
img2txt linux-logo.png
```

*In this example, linux-logo.png and fancy-cat.jpeg are the input files. Once you run the command, the images will be displayed in the terminal window.*

<p align="center"><img width="1200" src="../assets/images/01-remote-view-img2txt.gif"></p>


## ascii-image-converter (*recommended*)

`ascii-image-converter` is a command-line tool, available on Windows, Linux and macOS, that converts images into ASCII art and prints them out onto the console. The supported image formats include: JPEG, PNG, BMP, WEBP, TIFF, GIF, and as a unique feature it can also create a braille art.

* options: <a href="https://github.com/TheZoraiz/ascii-image-converter#flags" target="_blank">GitHub docs: ascii-image-converter </a>
* download package: <a href="https://github.com/TheZoraiz/ascii-image-converter/releases" target="_blank">https://github.com/TheZoraiz/ascii-image-converter/releases</a>
* devel GitHub: <a href="https://github.com/TheZoraiz/ascii-image-converter" target="_blank">https://github.com/TheZoraiz/ascii-image-converter</a>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
I recommend this software because it is easy to install on any local or remote machine, and it is also easy to use while providing many built-in options that allow fine-tuning the output. In my tests on the HPC, it gave the best effect of ASCII art without additional configuration.
</span>
</div><br>

**INSTALLATION**

<details><summary>HPC system:</summary>

The <b>ascii-image-converter</b> is not available at <a href="https://pkgs.org/search/?q=ascii-image-converter" target="_blank">pkgs.org  ⤴</a> for any OS other than Arch. However, you can browse the available pre-compiled releases for various operating systems and architectures at <a href="https://github.com/TheZoraiz/ascii-image-converter/releases" target="_blank">GitHub releases  ⤴</a>.<br><br>
1. Select and download the release that matches best the configuration of your HPC system. In my case, there were no <b>x86_64</b> version, so I tried with <b>i386_32</b> and it worked.<br>
<i>*If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands directly:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://github.com/TheZoraiz/ascii-image-converter/releases/download/v1.13.1/ascii-image-converter_Linux_i386_32bit.tar.gz <br>
tar -xvzf ascii-image-converter_Linux_i386_32bit.tar.gz
</code><br>

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder <i>(you can change its name optionally)</i> and you should see the ready-made executable:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
ascii-image-converter
</code><br>

3. It is just ready to use if the downloaded version was correct. Try it by printing help message: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./ascii-image-converter -h
</code><br>
You should see the help message on your screen <i>"This tool converts images into ascii art and prints them on the terminal."</i><br><br>
<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Remember that you must add the location of this executable file to the $PATH environment variable: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
export PATH="abolute/path/to-ascii-image:$PATH"
</code><br>
Otherwise, you must always precede the file name with the exact path:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./ascii-image-converter
</code>
or
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
/absolute/path/ascii-image-converter
</code>
</span>
</div><br>
</details>


<details><summary>Ubuntu/Debian:</summary>

Run the following command in the terminal:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
echo 'deb [trusted=yes] https://apt.fury.io/ascii-image-converter/ /' | sudo tee /etc/apt/sources.list.d/ascii-image-converter.list <br>
sudo apt update <br>
sudo apt install -y ascii-image-converter
</code><br>
</details>

<details><summary>macOS:</summary>

Run the following command in the terminal:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install TheZoraiz/ascii-image-converter/ascii-image-converter
</code><br>
</details><br>


**ascii-image-converter USAGE:**

Once installed, you can use `ascii-image-converter` to convert an image to ASCII art by running the simple command:
```
ascii-image-converter linux-logo.png
```

*In this example, `linux-logo.png` is the input file. The `-C` flag enables colors in the output. There are multiple built-in flags and options to cutomize your ASCII art (see table below).*

![01-remote_view_ascii_std.png](../assets/images/01-remote_view_ascii_std.png)

Commands corresponding to ASCII arts from top-left to right-bottom *(in the figure above)*:
```
ascii-image-converter linux-logo.png                            # 1
ascii-image-converter linux-logo.png -C                         # 2 (color)
ascii-image-converter linux-logo.png -C -b                      # 3 (braille)
ascii-image-converter linux-logo.png -C -m "#*@ "               # 4 (custom chars)
ascii-image-converter linux-logo.png -C --color-bg              # 5 (background color)
ascii-image-converter linux-logo.png -C --color-bg -m ". "      # 6 (background + custom chars)
```

**OPTIONS CheatSheet**

| option     | description |
|------------|-------------|
| -C         | colors from original image |
| -m ""      | pass a string of your own ascii characters to map against, e.g., `-m " .-=#@"` |
| -b         | use braille characters instead of ascii |
| --threshold {0:255}| set threshold value to compare for braille art when converting each pixel into a dot |
| --dither   | apply dithering on image to make braille art more visible |
| --color-bg | transfer color to each character's background instead of foreground |

See more options at <a href="https://github.com/TheZoraiz/ascii-image-converter#flags" target="_blank">https://github.com/TheZoraiz/ascii-image-converter#flags  ⤴</a>.



## ascii-python (Python)

`ascii-python` is a light-weight Python module that provides function for converting images to ASCII art in the terminal. It is an open-source project that converts various images formats to ASCII art using a specified character set.

* options: <a href="https://github.com/Adam-BH/ascii_py#docs" target="_blank">GitHub docs: ascii-py </a>
* download package: <a href="https://pypi.org/project/ascii-python/" target="_blank">https://pypi.org/project/ascii-python/</a>
* devel GitHub: <a href="https://github.com/Adam-BH/ascii_py" target="_blank">https://github.com/Adam-BH/ascii_py</a>


**INSTALLATION**

You can install this python module directly in a terminal on your local machine - then it will always be accessible from the command line. On a remote HPC machine, first activate the <a href="https://" target="_blank">Conda virtual environment  ⤴</a> (or create a new one) and install the module the same way using the `pip` Python package manager.

```
pip install ascii-python
```

**ascii_py USAGE:**

Once installed, you can use the module to convert an image to ASCII art using the following commands directly in your terminal:

```
python
import ascii_py
chars = ascii_py.asciiImage()
asciiImg = chars.img2ascii('linux-logo.png')
print(asciiImg)
```

*In this example, linux-logo.png is the input file. The `python` keyword will activate the Python console in your terminal window. Once you run the remaining commands, the image will be displayed in the terminal window. You can also skip `python` keyword and save the code snippet in the script file with `.py` extension. Then run in the command line:*
```
python my_script.py
```

<p align="center"><img width="800" src="../assets/images/01-remote_view_ascii_py.png"></p>


The default characters used to create the ASCII art are: `["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]` *(see left panel)*. You can customize the settings by providing the adjusted list in the `chars` variable *(see right panel)*:

```
chars = ascii_py.asciiImage(["*", ":", ".", " "])
```
The last provided character is used as a background. There are no color options available.


___
# Further Reading
* [1.3.4 Mounting Remote Folder on Local Machine](04-4-tutorial-mount-remote-folder)

* [2. Data Manipulation](../02-DATA-MANIPULATION/01-data-manipulation)
* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](04-2-tutorial-view-pdf-files-x11){: .btn  .btn--primary}
[Next](04-4-tutorial-mount-remote-folder){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
