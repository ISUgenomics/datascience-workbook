---
title: "Getting started with macOS"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "tutorial"
order: 211
level: 2
categories: ["system-setup", "command-line"]
tags: ["local-machine", "operating-system", "macOS", "unix", "bash"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


## Introduction

macOS is the operating system installed on Apple computers. A Mac can be used through its graphical desktop in the same way as other personal computers, but it also provides a Unix-like command-line environment that is particularly useful for research computing. Keeping macOS current and learning how to access its command-line environment are useful first steps when preparing a Mac for research work.

## Install or reinstall macOS

Before installing or reinstalling an operating system, back up research data, project files, credentials, and any files stored only on the computer. Reinstallation normally preserves personal files when performed from macOS Recovery, but an erase-and-reinstall operation removes the contents of the selected storage device.

Apple provides the following supported routes:

* **New Mac:** follow the setup assistant displayed when the computer starts for the first time.
* **Reinstall without erasing personal files:** start [macOS Recovery](https://support.apple.com/en-us/102655), select **Reinstall macOS**, and follow the onscreen instructions.
* **Erase before reinstalling:** use this only when intentionally preparing the Mac for a clean start, transfer, sale, or disposal. Follow Apple’s instructions for [erasing and reinstalling macOS](https://support.apple.com/guide/mac-help/erase-and-reinstall-macos-mh27903/mac).

The Recovery procedure depends on whether the Mac is Apple silicon or Intel-based, as described in the [Hardware](#hardware-apple-vs-intel) section below:

* On a Mac with **Apple silicon**, shut down the Mac, press and hold the power button until the startup options appear, select **Options**, and click **Continue**.
* On an Intel-based Mac, restart the computer and immediately hold `Command-R` until the Recovery screen appears. Apple documents additional key combinations when a different macOS version is required.

<div class="warning" markdown="1">
Do not erase a disk simply because macOS is behaving slowly or displaying an error. First back up your files and consult Apple’s recovery instructions. If you need only a normal version update, use [Software Update](#keep-macos-up-to-date) instead.
</div>

### Keep macOS up to date

macOS updates include bug fixes, security improvements, compatibility changes, and sometimes new features. An **update** is usually a smaller release within the current macOS series; an **upgrade** moves to a newer major release. Software Update shows only releases compatible with the Mac model.

1. Open **Apple menu → System Settings → General → Software Update**.
2. Review the available release and its requirements.
3. Back up important files, connect a laptop to power, and select **Update Now** or **Upgrade Now**.

To configure automatic updates, open **Apple menu → System Settings → General → Software Update** and select the information button beside **Automatic Updates**. Enable the options appropriate for your work, including security responses and system files. App Store applications have a separate update mechanism in the **App Store**.

<div class="protip" markdown="1">
For a research computer, do not begin a major upgrade immediately before a deadline or a long analysis. Check that essential software, drivers, programming environments, and institutional security tools support the new macOS version first. Keep a record of the macOS version used for a project when reproducibility matters.
</div>


## Hardware: Apple vs Intel

Mac computers use one of two processor families relevant to software installation:

* **Apple silicon** includes Apple’s M-series chips and uses the `arm64` architecture.
* **Intel-based Macs** use Intel processors and the `x86_64` architecture.

To identify the processor without opening Terminal, choose **Apple menu → About This Mac**. An Apple silicon computer displays **Chip** followed by a name such as Apple M1, M2, or M3. An Intel-based computer displays **Processor** followed by the Intel processor name. You can also use the command `uname -m`, which returns `arm64` or `x86_64` (see [Terminal in practice](#terminal-in-practice)).

This distinction matters when downloading software, because an installer compiled for one architecture may not run natively on the other. Some Intel applications can run on Apple silicon through [Apple’s Rosetta 2](/02-computing-machine/03a-installations-mac/#install-rosetta-2) translation environment, but native software is generally preferred when it is available. Always check the software provider’s instructions before choosing an installer.

<div class="more" markdown="1">
Learn more in [Installations on MacBook Pro](/02-computing-machine/03a-installations-mac/), which differentiates installation approaches for key developer tools and software environments, including [Rosetta 2](/02-computing-machine/03a-installations-mac/#install-rosetta-2) and [Conda](/02-computing-machine/03a-installations-mac/#install-conda).
</div>

## macOS system basics

macOS combines a graphical desktop environment with a Unix-based operating-system foundation. The graphical tools make it easy to manage applications, files, and system settings, while the command-line tools provide a practical interface for scripting and research software. The hardware generation of the Mac also affects which software installers and compiled tools can be used.


**GUI: Graphical User Interface**

The macOS GUI is the desktop environment that includes Finder, the Dock, menus, windows, icons, and System Settings. It is convenient for browsing files, opening applications, changing preferences, and performing one-off tasks.

**CLI: Command-Line Interface**

The macOS CLI accepts text commands through a terminal application. It is useful for repeating operations, running scripts, connecting to remote machines, processing many files, and using tools that are not available through a graphical application.

macOS is built on the Unix-based Darwin foundation. Consequently, many commands and conventions used on Linux or HPC systems are also available on macOS. They are not identical systems, however: some commands have different options, some utilities are different versions, and research software may need a macOS-specific installation. Treat a command written for Linux or an HPC cluster as an example to check, not as something to copy blindly.

For instructions on working in the command-line environment, continue to [CLI on macOS](#cli-on-macos).

## CLI on macOS

### Find and launch Terminal

**Terminal** is the standard macOS application for opening a command-line session. It is located in `Applications → Utilities → Terminal`. The fastest way to launch it is to press `Command-Space`, type `Terminal`, and press `Return`. You can also open it from Finder or keep it in the Dock for regular use.

When Terminal opens, it displays a **shell prompt**. The prompt indicates that the shell is ready to receive a command; it is not itself a command and should not be copied when following examples. macOS uses `zsh` as its default shell on current systems. The shell interprets commands, while Terminal is the application that displays the session.

### Why use Terminal?

Terminal provides access to the same local files and applications that are available through Finder, but in a form that can be scripted and repeated. Typical research tasks include:

* organizing project folders and inspecting file names ([command-line file operations](/03-command-line/02a-basic-commands/));
* running Python, R, Bash, and other scripts ([programming environments](/04-devel-environment/00-landing-page-devel-environment/));
* installing or using command-line research software ([Mac installations](/02-computing-machine/03a-installations-mac/));
* connecting to an HPC or other remote machine with `ssh` ([Secure Shell connection](/06-hpc/02-file-access/03-secure-shell-connection/));
* transferring or synchronizing files ([remote data transfer](/07-wrangling/01-file-access/02-remote-data-transfer/));
* recording commands used to process a dataset ([reproducible research](/09-project-management/04-quality-assurance/03-reproducibility/)); and
* automating repetitive operations across many files ([Bash scripting](/05-programming/02-bash/01-introduction-to-bash-scripting/)).

The terminal is not a separate computer and it does not automatically provide additional storage or computing power. Commands entered run on the local Mac and use its files and resources.

### Terminal in practice

Use the following checklist to confirm that Terminal is working and record information useful when selecting software. The output will differ between computers.

1. Open Terminal.
2. Display the macOS version:
   ```bash
   sw_vers
   ```
   <pre class="output">
   ProductName:    macOS
   ProductVersion:  14.2.1
   BuildVersion:    23C71
   </pre>

3. Display the processor architecture:
   ```bash
   uname -m
   ```
   <pre class="output">
   arm64
   </pre>
   Typical output is `arm64` for Apple silicon or `x86_64` for an Intel processor. Apple’s guide to [Mac computers with Apple silicon](https://support.apple.com/en-us/116943) explains how to identify the chip graphically through **Apple menu → About This Mac**.

4. Display the current location in the file system:
   ```bash
   pwd
   ```
   <pre class="output">
   /Users/your-username
   </pre>
   For a standard user account, the result is usually similar to `/Users/your-username`.
   This is the user’s **home directory**. The shorthand `~` refers to the same location, so `~/research` means a folder named `research` inside the home directory, i.e., `/Users/your-username/research`. You try:
   ```bash
   ls ~
   ```

5. Create a workspace for practice and open it in Finder:
   ```bash
   mkdir -p ~/research/mac-cli-practice
   cd ~/research/mac-cli-practice
   pwd
   open .
   ```

   The `open .` command asks macOS to open the current directory using its default graphical application, normally Finder. This is a useful bridge between the CLI and GUI: use the terminal for repeatable commands and Finder when a visual view is more convenient.

<div class="exercise" markdown="1">
Create two folders named `workbook-practice` and `.tmp` inside `~/research`. Open each folder in Finder with `open .`, close both Finder windows, and then try to find the two folders manually in Finder. *Did you find both?*

<details class ="mt-2" markdown="1"><summary>solution</summary>

```bash
cd ~/research
mkdir -p workbook-practice .tmp

cd workbook-practice
open .

cd ../.tmp
open .

cd ..
ls          # list folder items
ls -lha     # list folder including hidden items
```

The `.tmp` folder is hidden in Finder by default because its name starts with a period. The `ls -lha` command displays it in the terminal, and `open .` opens it in Finder when it is the current directory. (`/tmp` without the leading dot is a different, system-level temporary directory.)
</details>
</div>

<div class="more" markdown="1">
For a complete explanation of `pwd`, `cd`, `mkdir`, paths, and related commands, continue with [Introduction to Command Line](/03-command-line/00-landing-page-command-line/).
</div>

### Installations on MacBook Pro

To install developer tools, Homebrew, Rosetta 2, Conda, Python, R, and other software, continue to [Installations on MacBook Pro](/02-computing-machine/03a-installations-mac/). Check the Mac architecture before choosing an installer, and refer to the current documentation from each software provider.

<div class="warning" markdown="1">
Never paste a command into Terminal merely because it appears in the internet search. Read what it will change, verify its source, and be especially cautious with commands using `sudo`, `rm`, or disk utilities.
</div>
