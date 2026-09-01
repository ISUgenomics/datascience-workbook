---
title: "Configuring your Linux system"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "tutorial"
order: 213
level: 2
categories: ["system-setup", "command-line"]
tags: ["local-machine", "operating-system", "linux", "ubuntu", "unix", "bash"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


## Introduction

Ubuntu is a Linux distribution that can be used on a personal computer or workstation for research and data analysis. Ubuntu Desktop provides both a graphical desktop and a command-line environment, so you can choose the interface that fits the task. This tutorial provides practical orientation for a newly installed Linux machine: completing the first setup, finding important locations, opening Terminal, and checking that the system is ready for use.

## Getting started with Ubuntu

Ubuntu can be installed from a bootable USB drive or tested first without changing the computer. Use Ubuntu's [official installation guide](https://ubuntu.com/desktop/docs/en/latest/tutorial/install-ubuntu-desktop/) for the current installer screens and hardware-specific notes.

<div class="protip" markdown="1">
If you plan to keep Windows or another operating system on the computer, first review [Several OSs on the same computer](/02-computing-machine/01-operating-system-installation/#several-oss-on-the-same-computer). It explains the general multi-boot, disk-space, and boot-menu considerations that apply before starting the Ubuntu-specific steps below.
</div>


### Install Ubuntu

Before starting:

1. Back up files from the computer. Choosing an option that erases the disk permanently removes the existing operating system and data.
2. Connect the computer to power and make sure the installation USB is available.
3. Download the Ubuntu Desktop image from the [official download page](https://ubuntu.com/download/desktop).
4. Create a bootable USB drive using the method described in the [Ubuntu installation guide](https://ubuntu.com/desktop/docs/en/latest/tutorial/install-ubuntu-desktop/). Writing an image to a USB drive is different from copying the downloaded file; the process also erases the USB drive.

To begin the installation:

1. Insert the bootable USB drive and restart the computer.
2. Open the boot menu using the key shown by the computer manufacturer. Common keys include <code>F12</code>, <code>Esc</code>, <code>F2</code>, and <code>F10</code>.
3. Select the USB drive and choose **Try or Install Ubuntu**.
4. Test the desktop, keyboard, network, display, and trackpad if you are unsure whether the hardware is supported.
5. Start the installer and select the language, keyboard layout, network, and installation type.
6. Choose whether to install Ubuntu alongside another operating system or erase the disk. Read the disk summary carefully before continuing.
7. Create your user account and a strong password. Keep automatic login disabled on a shared or portable computer.
8. Complete the installation, remove the USB drive when prompted, and restart the computer.

<div class="warning" markdown="1">
The **Erase disk and install Ubuntu** option removes the selected disk contents. Confirm that your backups are complete and that you have selected the intended disk before starting the installation.
</div>

### Update Ubuntu

After the first login, install available updates before setting up research software. You can use the graphical updater or Terminal.

1. Open **Activities**, search for **Software Updater**, and install the offered updates.
2. Alternatively, open Terminal and run:
   ```bash
   sudo apt update
   sudo apt upgrade
   ```
   *The <code>apt</code> commands update package information and then upgrade installed packages.*
   Detailed software installation is explained in [Installations on Linux](/02-computing-machine/03c-installations-linux/).
   <div class="warning" markdown="1">
   Keep the system connected to the internet while updates are being installed.
   </div>
3. Restart if Ubuntu requests it.



## Ubuntu interfaces

Ubuntu Desktop provides two complementary interfaces:
- a [**graphical user interface (GUI)**](#gui); and
- a [**command-line interface (CLI)**](#cli).

Both interfaces work with the same user account, files, and installed applications.

### GUI

The graphical user interface (GUI) is the desktop with windows, menus, icons, and panels. Use **Activities** to search for applications and open workspaces. Use **Files** to browse folders, **Settings** to configure the computer, and **Software** or **App Center** to install graphical applications.

Common actions include:

* open **Activities** and type an application name;
* open **Files** to browse the home folder and external drives;
* press <code>Ctrl+L</code> in **Files** to enter a location directly;
* press <code>Ctrl+H</code> in **Files** to show or hide hidden files; and
* right-click a file or folder to see available actions.

### CLI

The command-line interface (CLI) accepts text commands in a terminal window. It is useful for repeatable tasks, scripts, software documented for Linux, and connections to remote systems. The command line and GUI are not separate storage spaces: a folder created in Terminal appears in **Files**, and a folder created in **Files** can be used from Terminal.

#### Open Terminal

1. Open **Activities** and search for **Terminal**.
2. Select the **Terminal** application.
3. Optionally press <code>Ctrl+Alt+T</code> if this shortcut is enabled by your Ubuntu desktop.
4. Keep Terminal in the Dock for quick access by right-clicking its icon and choosing **Add to Favorites**.

When Terminal opens, the shell prompt indicates that it is ready for input. Do not copy the prompt itself when following a command example. For detailed command-line terminology and navigation, continue to [Terminal Basics](/03-command-line/01-terminal-basics/).

## Linux file system

The graphical **Files** application and Terminal use the same file system. Linux organizes files in a single directory tree that starts at the **root directory**, written as <code>/</code>. A path to a specific location is a sequence of directory names separated by <code>/</code>. An absolute path starts at the root, while a relative path is interpreted from the current location.

Use `ls` with an absolute or relative path to list directory contents:

```bash
ls /
# ls /path/to/nested/location
ls ../
```
- The command `ls /` lists the top-level directories.
- `/path/to/nested/location` shows the syntax of an *absolute* path.
- The *relative* path `../` refers to the directory one level above your current location.

### User account and home directory

Your personal files belong in your home directory:
- the shortcut <code>~</code> refers to the current user's home directory;
- for a user named <code>alex</code>, the home directory is usually <code>/home/alex</code>;
- `$HOME` is a built-in shell variable that stores a path to your home directory;

Check the location of your home directory and move to it with:
```bash
cd ~              # navigate to your home dir
pwd               # display current path
echo "$HOME"      # display path to your home dir
```
*The final command should print the same path shown by `pwd`.*

<div class="protip mb-0" markdown="1">
Use `~` or `$HOME` when you want to refer to your home directory without typing its full path.
</div>
<div class="warning" markdown="1">
Avoid storing personal work directly in system directories (e.g., `/usr`, `/var`, `/bin`).
On a personal Linux machine, keep research projects, scripts, configuration files, and downloaded data in your home directory or in a separate data drive.
</div>

### Important locations

| location | purpose |
|----------|---------|
| <code>/</code> | The root of the entire file system. |
| <code>/home/&lt;username&gt;</code> | Personal files for a user account. |
| <code>~</code> | Shortcut for the current user's home directory. |
| <code>/tmp</code> | Temporary files; contents may be removed automatically. |
| <code>/etc</code> | System-wide configuration files. |
| <code>/usr</code> | Installed programs, libraries, and shared read-only data. |
| <code>/var</code> | Variable data such as logs and package-management files. |
| <code>/mnt</code> | A conventional location for mounted drives and file systems. |
| <code>/media</code> | A conventional location for removable media mounted by the desktop. |

<div class="warning mb-0" markdown="1">
Do not edit or delete files in <code>/etc</code>, <code>/usr</code>, or <code>/var</code> unless instructions specifically require it and you understand the consequences.
</div>

### Hidden files

Linux hides files and folders whose names begin with a period, such as <code>.config</code> or <code>.bashrc</code>. These files usually store application or shell settings.

In **Files**, press <code>Ctrl+H</code> to show hidden files. In Terminal, use:

```bash
ls -lha
```

<div class="protip mb-0" markdown="1">
Hidden does not mean protected. Treat configuration files carefully, and do not delete them just because they are not normally visible.
</div>

## Basic settings

Open **Activities**, search for **Settings**, and review the following areas:

| Settings area | What to check or configure |
|---|---|
| **Wi-Fi** or **Network** | Confirm internet access. |
| **Displays** | Set resolution and arrange multiple monitors. |
| **Keyboard** and **Mouse/Touchpad** | Adjust layouts, shortcuts, and pointer behavior. |
| **Region & Language** | Select language, formats, and input sources. |
| **Date & Time** | Verify the time zone for accurate logs and scheduled tasks. |
| **Users** | Review accounts and administrator privileges. |
| **Power** | Configure sleep and battery behavior on a laptop. |

### Checks for CLI setup

Open Terminal and run these commands:

1. Identify the installed Linux distribution and release:
   ```bash
   cat /etc/os-release
   ```
2. Identify the processor architecture:
   ```bash
   uname -m
   ```
3. Confirm the current shell:
   ```bash
   echo "$SHELL"
   ```
4. Confirm that your home directory is available:
   ```bash
   echo "$HOME"
   ```

Typical architecture output is <code>x86_64</code> for most Intel or AMD computers and <code>aarch64</code> for many ARM-based computers. The exact output and available software depend on the hardware and Ubuntu release.

<div class="protip" markdown="1">
Record the Ubuntu release, processor architecture, and major software versions when beginning a project. This information helps diagnose installation problems and supports reproducibility. For broader storage, memory, network, and permission checks, explore [Unix system information and permissions](/03-command-line/02c-unix-system-info-permissions/).
</div>

<div class="more" markdown="1">
For more about shell variables and shell configuration, continue to [Introduction to Unix shell](/03-command-line/02-intro-to-unix-shell/).  
For detailed Linux software installation instructions, continue to [Installations on Linux](/02-computing-machine/03c-installations-linux/).  
For command-line navigation and file operations, continue to [Introduction to Command Line](/03-command-line/00-landing-page-command-line/).
</div>
