---
title: "Viewing graphics in a terminal as the text-based ASCII art"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 714.3
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

**Using command line approaches for previewing remotely HPC resources** offers advantages in terms of speed, efficiency, and convenience. Users can quickly and easily access and manipulate remote files without having to download or transfer the entire dataset, making it an essential tool for data-intensive scientific research.


Graphics are often used in scientific research, including **charts, graphs, and images**. They **can be successfully generated on computing clusters** either as an output of some software or custom user's scripts. However, the problem arises when the user wants to quickly view any graphic files in the command line interface.

<div class="warning" markdown="1">
When it comes to previewing graphic files, it's important to note that the **command line interface itself does not support displaying graphics**. This is because the command line interface is primarily text-based and lacks the graphical capabilities necessary for displaying images, charts, and other visual elements.
</div>

## *What's the issue?*

Typically, **when users need to view graphic files on the HPC system, they have to download the files onto their local machine first** and open them in a graphical interface like an image viewer or graphics editor. This process can be time-consuming and inconvenient, particularly for large or complex graphic files.

<div class="example" markdown="1">
In scientific research, it's common for users to iteratively optimize the software settings to generate graphical output from large datasets on an HPC cluster. *For example, a user might configure gnuplot settings to create automatically repetitive plots for various dataset. Typically, they run multiple iterations to refine the settings and generate better visualizations.*
</div>

In such cases, **the process of downloading intermediate graphic files from the HPC cluster to the local machine can be particularly painful**. Each time the user wants to view an intermediate chart, they have to download the file onto their local machine and open it in a graphical interface. This process can be time-consuming and disruptive to the user's workflow, slowing down the process of refining their visualizations.

## *What's the solution?*

**Using command line approaches** for previewing graphic files can help alleviate this bottleneck by allowing users **to view the files remotely without having to download them** to their local machine. There are several approaches that users can take to preview graphic files using the command line.

## mount a remote folder using sshfs

`sshfs` is a tool that allows you to mount a remote HPC folder on your local machine over secure SSH connection, allowing you to browse, view, and modify files stored remotely as if they were stored locally. <br>
For example, you can use the command:
```bash
sshfs user@hostname:/remote/folder /local/folder
```
This command mounts a remote folder on your local machine, allowing you to browse and open remote files within your local folder using your local graphical file explorer or command line tools.

<button class="btn more"></button> *...from the tutorial <a class="t-links" href="714.4"></a>*


## remote desktop or X11 forwarding

One approach is to use a remote desktop or X11 forwarding to display the graphic files on a local machine. In this case, the remote system that is hosting the graphic files will need to have a graphical desktop environment installed, and the user will need to establish a remote connection using tools like VNC or SSH with X11 forwarding.

```bash
ssh -Y user@hostname
```

<button class="btn more"></button> *...from the tutorial <a class="t-links" href="714.2"></a>*


## convert the graphic files into text-based formats (ASCII art)

Another approach is to use command line tools to **convert the graphic files into text-based formats that can be viewed on the command line**. This solution can be the most robust since it does not require a graphical desktop environment installed on the HPC system or configuration permissions for remote folder mounting.

One technique is **converting graphics to ASCII art** displayed directly in the terminal. Converting graphics to ASCII art in the terminal can be a useful technique when working on a remote machine, as it allows you to view images without requiring a graphical user interface or transferring the file to your local machine.
![01-remote_preview_ascii_art.png]({{ images_path }}/01-remote_preview_ascii_art.png)
<p class="footnote center-h mt-">The figure shows the Linux logo in PNG format (left panel) and two variants of its conversion to ASCII art displayed directly in the terminal window (middle and right panels). The tool used was an ascii-image-converter.</p>

<div class="note" markdown="1">
ASCII stands for American Standard Code for Information Interchange, which is a **character encoding standard** that assigns unique numeric codes to represent letters, numbers, punctuation marks, and other characters commonly used in the English language. ASCII defines 128 different characters, each of which is represented by a unique 7-bit binary code.
</div>

***How it works?*** <br>
When <b>converting graphics to text-based ASCII art in the terminal</b>, the image is first divided into small sections called "tiles". Each tile corresponds to a block of text characters in the output ASCII art. The brightness or color of the pixels in each tile is then analyzed, and a character is selected from a predefined set of ASCII characters based on how closely it matches the brightness or color of the tile. This process is repeated for each tile in the image, resulting in a text-based representation of the original image.
![01-remote_preview_ascii_art2.png]({{ images_path }}/01-remote_preview_ascii_art2.png)
<div class="warning" markdown="1">
Depending on the complexity and size of the original graphic, the resulting text output may be quite lengthy and difficult to interpret.
Additionally, the original text within the graphic may become unrecognizable in the ASCII representation, especially if the text was intricately styled or particularly small (e.g., see the title of the plot).
</div>


# ASCII art <button class="btn c-good">HANDS-ON TUTORIAL</button>

<b class="c-header">In this tutorial, we will convert graphics to ASCII art using various command-line tools.</b> <br>
*This tutorial is designed to guide you through installing the necessary software on an HPC system to display graphics, even without relying on X11 forwarding.*

There are many tools available that can be used to **convert graphics to ASCII art in the terminal**. Some of these tools may be preinstalled on the remote machine, while others can be installed in the user's local space or even in their home directory. This means that **users can often set up and use these tools without requiring administrative privileges** or the installation of additional software on the remote HPC system.

<div class="protip" markdown="1">
When working on an HPC system, it can be challenging to install custom software because users typically do not have the necessary privileges to install packages using the system's package manager. In such cases, the best options are either to **use container of the software image or to build the executable from source code** in the user space.
</div>

**In this tutorial, we will focus on providing a unified and robust way of custom software installation on HPC systems, primarily by using source code available from trusted repositories such as <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a>.** There will be also provided a quick guide for installing the required tools on Linux or macOS, in case the user want these tools also on a local machine.

| TOOL | LICENSE | AUTHOR | GitHub | DOCS |
|------|---------|--------|--------|------|
| [jp2a](#jp2a) | GNU General | C.S. Larsen | <a href="https://github.com/cslarsen/jp2a" target="_blank">https://github.com/cslarsen/jp2a</a> | <a href="https://manpages.ubuntu.com/manpages/xenial/man1/jp2a.1.html#author" target="_blank">ubuntu manuals: jp2a</a> |
| [asciiview](#asciiview-or-aview) | GNU General | J. Hubicka | | <a href="https://manpages.ubuntu.com/manpages/kinetic/en/man1/aview.1.html" target="_blank">ubuntu manuals: aview</a>|
| [img2txt](#img2txt)  | <a href="http://www.wtfpl.net" target="_blank">WTFPL</a> | S. Hocevar <br>J.-Y. Lamoureux | <a href="https://github.com/cacalabs/libcaca" target="_blank">https://github.com/cacalabs/libcaca</a> | <a href="https://manpages.ubuntu.com/manpages/jammy/en/man1/img2txt.1.html" target="_blank">ubuntu manuals: img2txt</a> |
| [ascii-image-converter](#ascii-image-converter-recommended) | Apache-2.0 | Z. Hassan | <a href="https://github.com/TheZoraiz/ascii-image-converter" target="_blank">https://github.com/TheZoraiz/ascii-image-converter</a> | <a href="https://github.com/TheZoraiz/ascii-image-converter#cli-usage" target="_blank">CLI usage & flags</a> |
| [ascii-python](#ascii-python-python) | MIT License |A. Bhouri| <a href="https://github.com/Adam-BH/ascii_py" target="_blank">https://github.com/Adam-BH/ascii_py</a>| <a href="https://github.com/Adam-BH/ascii_py#docs" target="_blank">docs: ascii-python</a>|

<div class="more" markdown="1">
...about custom installations on HPC from the practical tutorial <a class="t-links" href="644"></a> available in section <a class="t-links" href="641">06. High-Performance Computing (HPC) / Software available on HPC</a> in this workbook.
</div>


## **Getting started**

Regardless of the tool you choose, you need to follow some preliminary steps:

**1.** Log in to the HPC system:
```bash
ssh user@hostname
```

**2.** Check the operating system (OS) on the HPC system:
```bash
cat /etc/os-release
```
The first few rows of the output displayed on the terminal screen should looks something like:

<pre class="output">
NAME="AlmaLinux"
VERSION="9.1 (Lime Lynx)"
ID="almalinux"
ID_LIKE="rhel centos fedora"
</pre>
*This means the HPC uses a Linux operating system called **Alma** which is similar to RHEL, CentOS, and Fedora.*

You will use this name to find the appropriate category of operating systems at <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a>.

![01-install_custom_software_pkgs.png]({{ images_path }}/01-install_custom_software_pkgs.png)

**3.** Check also the operating system architecture for the HPC system:
```bash
uname -i
```
*The result should look like* `x86_64` *(this case) or* `arch64` *or* `amd64` *or* `arm64`, *etc.*
<pre class="output">
x86_64
</pre>

You will use this info to select the correct variant of the software package.

![01-install_custom_software_pkgs2.png]({{ images_path }}/01-install_custom_software_pkgs2.png)

**4.** Use the search box located in the top-right corner of the website to find the software package you need, for example `jp2a`.

This will take you to the subpage for the software package in the dedicated configuration. Scroll down to the **Download** section and copy the URL in the `Source Package` category.
![01-install_custom_software_pkgs3.png]({{ images_path }}/01-install_custom_software_pkgs3.png)
<div class="protip" markdown="1">
As a regular user on the HPC system you can NOT install software using package manager but you can build executables from the source code.
</div>

**5.** In the command line on the HPC system navigate to the location dedicated to your custom software storage (e.g., `/work/SOFTWARE`) and use the `wget command` to download the source package archive:

```bash
wget https://download-ib01.fedoraproject.org/pub/epel/7/SRPMS/Packages/j/jp2a-1.0.7-1.el7.src.rpm
```

Now, extract the package:
```bash
rpm2cpio jp2a-1.0.7-1.el7.src.rpm | cpio -idmv
```

to get a compressed archive, e.g., `jp2a-1.0.7.tar.gz` that you need further to extract using the command appropriate for the compression format: <br>
[*see a quick guide <a class="t-links" href="644" section="#how-to-decompress-the-archive">How to decompress the archive?</a>*]
```bash
tar -xvzf jp2a-1.0.7.tar.gz
```

Finally, you should get a folder *(in this case **jp2a-1.0.7**)* with a source code that can be installed in your user space on the HPC system.

<div class="warning" markdown="1">
**Remember to indicate the custom location** [ `--prefix=PATH` ] **during installation where the executables will be created.** On HPC system it should NOT be the `/usr/local/bin` path because as a regular user you will get an error: <em class="c-bad">Permission denied</em>. Also, it would be better if it was not a path in your home directory, because you will quickly run out of quota.<br>
It is recommended to create a `SOFTWARE` **directory** in the workspace, where all the executables will be collected and **add this directory to the environment variable** `$PATH` or create symbolic links to the home directory.
</div>
<div class="required" markdown="1">
The above demonstration outlined the general steps required for installing any tool from source code. For detailed, tool-specific installation instructions, please refer to the **"Installation → HPC system"** section <u>corresponding to each tool</u> mentioned in this tutorial:
* [jp2a](#jp2a)
* [asciiview or aview](#asciiview-or-aview)
* [img2txt](#img2txt)
* [ascii-image-converter (recommended)](#ascii-image-converter-recommended)
* [ascii-python (Python)](#ascii-python-python)
</div>


## jp2a

This is a tool for viewing images in the terminal as ASCII art that **supports JPEG format only**.
* options: <a href="https://manpages.ubuntu.com/manpages/xenial/man1/jp2a.1.html#author" target="_blank">ubuntu manuals: jp2a</a>
* download package: <a href="https://pkgs.org/download/jp2a" target="_blank">https://pkgs.org/download/jp2a</a>
* devel GitHub: <a href="https://github.com/cslarsen/jp2a" target="_blank">https://github.com/cslarsen/jp2a</a>

<div class="protip" markdown="1">
You can use an **ImageMagick** built-in `convert` tool to convert other formats (e.g., PNG, TIFF) to JPEG first. <br>See a quick guide below.
</div>

**INSTALLATION**

<details class="l-frame" markdown="1"><summary>HPC system:</summary>

1. Perform STEPS 1-5 provided in section <a class="t-links" href="714.3" section="#getting-started">Getting started</a> using the <b>jp2a</b> keyword for software searching at <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a> or try this link: <a href="https://pkgs.org/download/jp2a" target="_blank">https://pkgs.org/download/jp2a  ⤴</a><br>
    *If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands:*
    ```bash
    wget https://download-ib01.fedoraproject.org/pub/epel/7/SRPMS/Packages/j/jp2a-1.0.7-1.el7.src.rpm
    rpm2cpio jp2a-1.0.7-1.el7.src.rpm | cpio -idmv
    tar -xvzf jp2a-1.0.7.tar.gz
    rm jp2a.spec  jp2a-1.0.7.tar.gz  jp2a-1.0.7-1.el7.src.rpm
    ```

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder and create the configure script:
    ```bash
    cd jp2a-1.0.7
    automake --add-missing --copy --no-force
    ```

3. Run configure script while adjusting value for arguments: <br>
    **--with-jpeg-prefix=** - *provide custom path to which you have writing permission* <br>
    **--prefix=** - *provide custom path to which you have writing permission* <br>
    <div class="protip" markdown="1">
    You can use the current directory or create a directory a level up from where the script is executed. It is best to specify an absolute path.
    </div>
    ```bash
    ./configure --with-jpeg-prefix=/work/gif/Alex/software/jp2a --with-curl-config=`which curl-config` --prefix=/work/gif/Alex/software/jp2a
    ```

4. Create the executables: <br>
    ```bash
    make -j install
    ```
    *This will create a bin directory on the custom path that will contain software executables. In this case, it is a single program:* `jp2a`.
</details>

<details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

Open terminal on a local machine and use the following commands:
```bash
sudo apt-get update
sudo apt install jp2a
```
</details>

<details class="l-frame" markdown="1"><summary>macOS:</summary>

Open terminal on a local machine and use the following commands:
```bash
brew install jp2a
```
</details><base class="mt">

**jp2a USAGE:**

Here's an example command to view an image using asciiview:
```bash
jp2a fancy-cat.jpeg --colors
```
<img width="800" src="{{ images_path }}/01-remote_view_jp2a.png">

If you have <b>imagemagick</b> suite available on your system you can convert other formats to JPEG and stream it for jp2a. You first need to load `imagemagick` module and then use `convert` tool:
```bash
module load imagemagick
convert linux-logo.png jpg:- | jp2a -
```
<img width="800" src="{{ images_path }}/01-remote_view_jp2a_2.png">


## asciiview or aview

This is a tool for viewing images in the terminal as ASCII art. `aview` can only show files in the PNM file format. `asciiview` automatically converts the file formats (including PNG, JPEG, BMP, and GIF) to PNM with extern programs like ImageMagic (so remember to `module load imagemagick`) and then runs aview.
* options: <a href="https://manpages.ubuntu.com/manpages/kinetic/en/man1/aview.1.html" target="_blank">ubuntu manuals: aview & asciiview</a>
* download package: <a href="https://pkgs.org/download/aview" target="_blank">https://pkgs.org/download/aview</a>
* devel sourceForge: <a href="https://aa-project.sourceforge.net/aalib/" target="_blank">https://aa-project.sourceforge.net/aalib/</a>


**INSTALLATION**

<details class="l-frame" markdown="1"><summary>HPC system:</summary>

The `asciiview` requires the `aalib`, so we need to install the dependency first. <br>
On the <a href="https://pkgs.org/" target="_blank">pkgs.org  ⤴</a> find and download both packages. For each, perform STEPS 1-5 provided in section <a class="t-links" href="714.3" section="#getting-started">Getting started</a>. <br>
*If your HPC uses Enterprise Linux OS with x86_64 architecture, you can use these commands:*
* **aalib:** <a href="https://pkgs.org/download/aalib" target="_blank">https://pkgs.org/download/aalib</a><br>
    ```bash
    wget https://download-ib01.fedoraproject.org/pub/epel/8/Everything/SRPMS/Packages/a/aalib-1.4.0-0.37.rc5.el8.src.rpm <br>
    rpm2cpio aalib-1.4.0-0.37.rc5.el8.src.rpm | cpio -idmv
    tar -xvzf aalib-1.4rc5.tar.gz
    rm aalib.spec  aalib-1.4rc5.tar.gz  aalib-&ast;.patch aalib-1.4.0-0.37.rc5.el8.src.rpm
    ./configure --prefix=/work/gif/Alex/software/aview
    make
    make install
    ```
    *This will create a bin directory on the custom path that will contain software executables:*
    <pre class="output">aafire  aaflip  aainfo  aalib-config  aasavefont  aatest  asciiview</pre>
    <div class="protip" markdown="1">
    Remember to add the `aalib` to the `$PATH` variable:
    ```bash
    export PATH=/work/gif/Alex/software/aview/bin:$PATH
    ```
    </div>
* **aview:** <a href="https://pkgs.org/download/aview" target="_blank">https://pkgs.org/download/aview</a>
    ```bash
    wget https://github.com/rpmsphere/source/raw/master/a/aview-1.3.0rc1-1.1.src.rpm
    rpm2cpio aview-1.3.0rc1-1.1.src.rpm | cpio -idmv
    tar -xvzf aview-1.3.0rc1.tar.gz
    rm aview.spec  aview-1.3.0rc1.tar.gz  aview-1.3.0rc1-1.1.src.rpm
    ./configure --prefix=/work/gif/Alex/software/aview
    make
    make install
    ```
    *This will create a bin directory on the custom path that will contain software executables:*
    <pre class="output">asciiview aview</pre>
</details>

<details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

Open terminal on a local machine and use the following commands:
```bash
sudo apt-get update
apt-get install aview
```
</details>

<details class="l-frame" markdown="1"><summary>macOS:</summary>

Open terminal on a local machine and use the following commands:
```bash
brew install aview
```
</details><base class="mt">

**asciiview USAGE:**

Here's an example command to view an image using asciiview:
```bash
module load imagemagick
asciiview fancy-cat.jpeg
```
*In this example,* `fancy-cat.jpeg` *is the input file. Once you run the command, the image will be displayed in the terminal window as ASCII art that you can adjust in real-time using controls on the keyboard.*
<img width="800" src="{{ images_path }}/01-remote_view_asciiview.gif">


## img2txt

This is a tool for converting various image formats to ASCII art. It supports formats such as PNG, JPEG, GIF, and BMP.

* options: <a href="https://manpages.ubuntu.com/manpages/jammy/en/man1/img2txt.1.html" target="_blank">ubuntu manuals: img2txt </a>
* download package: <a href="https://pkgs.org/download/libcaca" target="_blank">https://pkgs.org/download/libcaca</a>
* devel GitHub: <a href="https://github.com/cacalabs/libcaca" target="_blank">https://github.com/cacalabs/libcaca</a>


**INSTALLATION**

<details class="l-frame" markdown="1"><summary>HPC system:</summary>

The `img2txt` tool is a part of the `libcaca` package.
1. Perform STEPS 1-5 provided in section <a class="t-links" href="714.3" section="#getting-started">libcaca</a> using the **libcaca** keyword for software searching at <a href="https://pkgs.org/" target="_blank">pkgs.org</a> or try this link: <a href="https://pkgs.org/download/libcaca" target="_blank">https://pkgs.org/download/libcaca</a><br>
    *If your HPC uses Enterprise Linux OS with x86_64 architecture, use these commands:*
    ```bash
    wget https://download-ib01.fedoraproject.org/pub/epel/8/Everything/SRPMS/Packages/l/libcaca-0.99-0.59.beta20.el8.src.rpm
    tar -xvzf libcaca-0.99.beta19.tar.gz
    ```

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder and run configure script while adjusting value for arguments:
    ```bash
    cd libcaca-0.99.beta19
    ./configure --prefix=/work/gif/Alex/software/libcaca
    ```

3. Create the executables:
    ```bash
    make
    make install
    ```
    *This will create a bin directory on the custom path that will contain software executables:*
    <pre class="output">img2txt cacaview cacaclock  cacademo  cacafire  cacaplay  cacaserver</pre>
    <div class="warning" markdown="1">
    In my case, the program has NOT been built with `Imlib2` support, since this graphics library was not natively pre-installed on my HPC system. This results in only BMP loading is supported. So, note that when you face the same issue and try to convert JPEG or PNG you will get the **error message**: <em class="c-bad">"unable to load image-filename"</em>.
    </div>
</details>


<details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

Run the following command in the terminal:
```bash
sudo apt-get install libcaca-utils
```
</details>

<details class="l-frame" markdown="1"><summary>macOS:</summary>

Run the following command in the terminal:
```bash
brew install libcaca
```
</details><base class="mt">

**img2txt USAGE:**

Here's an example command to convert an image to ASCII art using img2txt:
```bash
img2txt linux-logo.png
```
*In this example,* `linux-logo.png` *and* `fancy-cat.jpeg` *are the input files. Once you run the command, the images will be displayed in the terminal window.*
<img width="1200" src="{{ images_path }}/01-remote-view-img2txt.gif">


## ascii-image-converter (*recommended*)

`ascii-image-converter` is a command-line tool, available on Windows, Linux and macOS, that converts images into ASCII art and prints them out onto the console. The supported image formats include: JPEG, PNG, BMP, WEBP, TIFF, GIF, and as a unique feature it can also create a braille art.

* options: <a href="https://github.com/TheZoraiz/ascii-image-converter#flags" target="_blank">GitHub docs: ascii-image-converter </a>
* download package: <a href="https://github.com/TheZoraiz/ascii-image-converter/releases" target="_blank">https://github.com/TheZoraiz/ascii-image-converter/releases</a>
* devel GitHub: <a href="https://github.com/TheZoraiz/ascii-image-converter" target="_blank">https://github.com/TheZoraiz/ascii-image-converter</a>

<div class="protip" markdown="1">
I recommend this software because it is easy to install on any local or remote machine, and it is also easy to use while providing many built-in options that allow fine-tuning the output. In my tests on the HPC, it gave the best effect of ASCII art without additional configuration.
</div>

**INSTALLATION**

<details class="l-frame" markdown="1"><summary>HPC system:</summary>

The `ascii-image-converter` is not available at <a href="https://pkgs.org/search/?q=ascii-image-converter" target="_blank">pkgs.org  ⤴</a> for any OS other than Arch. However, you can browse the available pre-compiled releases for various operating systems and architectures at <a href="https://github.com/TheZoraiz/ascii-image-converter/releases" target="_blank">GitHub releases  ⤴</a>.
1. Select and download the release that matches best the configuration of your HPC system. In my case, there were no **x86_64** version, so I tried with **i386_32**and it worked. <br>
    *If your HPC uses Enterprise Linux OS with x86_64 architecture, use these commands:*
    ```bash
    wget https://github.com/TheZoraiz/ascii-image-converter/releases/download/v1.13.1/ascii-image-converter_Linux_i386_32bit.tar.gz
    tar -xvzf ascii-image-converter_Linux_i386_32bit.tar.gz
    ```

2. Once you have the source code downloaded and extracted on the HPC system, enter the package folder *(you can change its name optionally)* and you should see the ready-made executable:
    ```bash
    ascii-image-converter
    ```

3. It is just ready to use if the downloaded version was correct. Try it by printing help message:
    ```bash
    ./ascii-image-converter -h
    ```
    *You should see the help message on your screen:* <em class="footnote">"This tool converts images into ascii art and prints them on the terminal."</em>
    <div class="warning" markdown="1">
    Remember that you must add the location of this executable file to the `$PATH` environment variable:
    ```bash
    export PATH="abolute/path/to-ascii-image:$PATH"
    ```
    <base class="mb">
    Otherwise, you must always precede the file name with the exact path:
    ```bash
    ./ascii-image-converter
    ```
    or
    ```bash
    /absolute/path/ascii-image-converter
    ```
    </div>
</details>


<details class="l-frame" markdown="1"><summary>Ubuntu/Debian:</summary>

Run the following command in the terminal:
```bash
echo 'deb [trusted=yes] https://apt.fury.io/ascii-image-converter/ /' | sudo tee /etc/apt/sources.list.d/ascii-image-converter.list
sudo apt update
sudo apt install -y ascii-image-converter
```
</details>

<details class="l-frame" markdown="1"><summary>macOS:</summary>

Run the following command in the terminal:
```
brew install TheZoraiz/ascii-image-converter/ascii-image-converter
```
</details><base class="mt">


**ascii-image-converter USAGE:**

Once installed, you can use `ascii-image-converter` to convert an image to ASCII art by running the simple command:
```bash
ascii-image-converter linux-logo.png
```
*In this example,* `linux-logo.png` *is the input file. The* `-C` *flag enables colors in the output. There are multiple built-in flags and options to cutomize your ASCII art (see table below).*
![01-remote_view_ascii_std.png]({{ images_path }}/01-remote_view_ascii_std.png)

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

<button class="btn more mr"></button>see more options at <a href="https://github.com/TheZoraiz/ascii-image-converter#flags" target="_blank">https://github.com/TheZoraiz/ascii-image-converter#flags  ⤴</a>


## ascii-python (Python)

`ascii-python` is a light-weight Python module that provides function for converting images to ASCII art in the terminal. It is an open-source project that converts various images formats to ASCII art using a specified character set.

* options: <a href="https://github.com/Adam-BH/ascii_py#docs" target="_blank">GitHub docs: ascii-py </a>
* download package: <a href="https://pypi.org/project/ascii-python/" target="_blank">https://pypi.org/project/ascii-python/</a>
* devel GitHub: <a href="https://github.com/Adam-BH/ascii_py" target="_blank">https://github.com/Adam-BH/ascii_py</a>


**INSTALLATION**

You can install this python module directly in a terminal on your local machine - then it will always be accessible from the command line. On a remote HPC machine, first activate the <a href="https://" target="_blank">Conda virtual environment  ⤴</a> (or create a new one) and install the module the same way using the `pip` Python package manager.

```bash
pip install ascii-python
```

**ascii_py USAGE:**

Once installed, you can use the module to convert an image to ASCII art using the following commands directly in your terminal:

```python
python
import ascii_py
chars = ascii_py.asciiImage()
asciiImg = chars.img2ascii('linux-logo.png')
print(asciiImg)
```
*In this example, linux-logo.png is the input file. The* `python` *keyword will activate the Python console in your terminal window. Once you run the remaining commands, the image will be displayed in the terminal window. You can also skip* `python` *keyword and save the code snippet in the script file with* `.py` *extension. Then run in the command line:*
```bash
python my_script.py
```
<img width="800" src="{{ images_path }}/01-remote_view_ascii_py.png">

The default characters used to create the ASCII art are:<br>
`["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]` *(see left panel)*. <br>
Customize the settings by providing the adjusted list in the `chars` variable *(see right panel)*:
```python
chars = ascii_py.asciiImage(["*", ":", ".", " "])
```
*The last provided character is used as a background. There are no color options available.*
