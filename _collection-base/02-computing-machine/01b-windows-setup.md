---
title: "Windows command-line environments"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "tutorial"
order: 212
level: 2
categories: ["system-setup", "command-line"]
tags: ["local-machine", "operating-system", "windows", "unix", "WSL", "PowerShell", "bash"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


## Introduction

Windows provides several command-line environments for research computing. **PowerShell** is the native Windows shell, **Windows Subsystem for Linux (WSL)** provides a Linux environment, and **Git Bash** provides a Unix-like shell with selected command-line tools. This tutorial explains how to open and configure each option, how they differ, and which one to choose for common tasks.

## Choosing a command-line environment

* Use [PowerShell](#powershell) for Windows-native commands, administration, and automation.
* Use [WSL](#wsl---windows-subsystem-for-linux) for Bash scripts, Linux command-line tools, and software designed for Linux.
* Use [Git Bash](#git-bash) for Git workflows and lightweight Unix-like commands.

The environments can coexist in Windows Terminal. Choose one deliberately for each task and do not assume that a command from PowerShell, Bash, or WSL will work unchanged in another shell.

<div class="more" markdown="1">
For a worked example of organizing and renaming many files with PowerShell, Bash in WSL, Python, and R, continue to [Automated batch file operations on Windows](/02-computing-machine/01b-windows-file-manipulation/).
</div>

## PowerShell

PowerShell is the native Windows shell. It is a good default for Windows-specific administration, file operations, and automation. PowerShell commands and Bash commands are not interchangeable, so first check which shell is open before running a command.

### Open PowerShell

1. Open **Windows Terminal** from the **Start menu**. If it is not installed, install it from the [Microsoft Store](https://apps.microsoft.com/detail/9n0dx20hk701).
2. Open a PowerShell tab by selecting the arrow beside the **+** button and choosing **PowerShell**. Windows Terminal usually opens PowerShell as its default profile.
3. You can also search for **PowerShell** in the **Start menu**. Use **Terminal (Admin)** only when a task explicitly requires administrator privileges.

### Check the PowerShell session

Run the following commands one at a time:

1. Display the PowerShell version:
   ```powershell
   $PSVersionTable.PSVersion
   ```
2. Display the current directory:
   ```powershell
   Get-Location
   ```
3. List files and folders in the current directory:
   ```powershell
   Get-ChildItem
   ```

<code>Get-Location</code> and <code>Get-ChildItem</code> are PowerShell commands. Their shorter aliases, <code>pwd</code> and <code>ls</code>, may also work, but using the full names makes a script easier to understand.

| command | purpose |
|---------|---------|
| `Get-Command` | Lists available commands. |
| `Get-Help <command>` | Displays help for a command. |
| `Get-Location` | Shows the current directory. |
| `Set-Location <path>` | Changes the current directory. |
| `Get-ChildItem` | Lists files and directories. |
| `Copy-Item <source> <destination>` | Copies files or directories. |
| `Move-Item <source> <destination>` | Moves files or directories. |
| `Remove-Item <path>` | Removes files or directories. |

### Get help and run scripts

PowerShell includes an integrated help system:

1. Read the general description of a command:
   ```powershell
   Get-Help Get-ChildItem
   ```
2. Display examples for a command:
   ```powershell
   Get-Help Get-ChildItem -Examples
   ```
3. Create and run the script:
   * Create and open a new script file in Notepad. If the file does not exist, Notepad will ask whether to create it:
     ```powershell
     notepad hello.ps1
     ```
   * Paste the following content, save the file, and close Notepad:
     ```powershell
     $name = "researcher"
     Write-Output "Hello, $name"
     ```
   * Run the script from the current directory:
     ```powershell
     .\hello.ps1
     ```

<div class="warning" markdown="1">
PowerShell may restrict script execution through its **execution policy**. Check the policy before changing it:

```powershell
Get-ExecutionPolicy
```

Do not weaken the policy merely to run an unknown script. Read the script, verify its source, and consult the [PowerShell execution policy documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy) before making a change.
</div>

## WSL - Windows Subsystem for Linux

WSL runs a Linux distribution alongside Windows without requiring a separate virtual machine or dual-boot installation. It is the most suitable option when you need Bash, Linux command-line tools, or software documented for Linux.

### Check requirements

The one-command installation requires Windows 10 version 2004 (build 19041) or later, or Windows 11. If you use an older Windows version, follow Microsoft’s [manual WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install-manual).

### Install WSL

1. Open **Windows Terminal (Admin)**. Approve the User Account Control prompt.
2. Install WSL and the default Ubuntu distribution:
   ```powershell
   wsl --install
   ```
3. Restart Windows when prompted.
4. Open **Ubuntu** from the **Start menu**. The first launch may take a few minutes while the distribution is configured.
5. Create a Linux username and password when prompted. The password is not displayed while you type it.

If the installation command displays help text instead of installing a distribution, list the available distributions and install one explicitly:

```powershell
wsl --list --online
wsl --install --distribution Ubuntu
```

See Microsoft’s [WSL installation guide](https://learn.microsoft.com/en-us/windows/wsl/install) for other distributions and troubleshooting.

### Update the Linux environment

After opening Ubuntu, update its package information and installed packages:

```bash
sudo apt update
sudo apt upgrade
```

These commands run inside Ubuntu, not in PowerShell. When a command asks for the Linux password, type the password created during the first launch.

The first four commands run inside Ubuntu. The last three are WSL management commands, run from PowerShell or Windows Terminal:

| command | purpose |
|---------|---------|
| `pwd` | Shows the current Linux directory. |
| `ls -lha` | Lists visible and hidden files with details. |
| `cd <path>` | Changes the current directory. |
| `mkdir <name>` | Creates a directory. |
| `wsl --list --verbose` | Lists installed distributions and their WSL versions. |
| `wsl --status` | Displays the WSL configuration. |
| `wsl --shutdown` | Stops all running WSL distributions. |

### Open WSL in Terminal

1. Open **Windows Terminal**.
2. Select the arrow beside the **+** button.
3. Choose **Ubuntu** or another installed Linux distribution.
4. To make it the default profile, open **Settings → Startup → Default profile** and select the distribution.

Windows drives are mounted inside WSL under <code>/mnt</code>. For example, the Windows <code>C:</code> drive is available at <code>/mnt/c</code>:

```bash
ls /mnt/c/Users
```

<div class="protip" markdown="1">
For active research projects, keep frequently accessed Linux-oriented files inside the WSL file system and use <code>/mnt/c/</code> when you need to access Windows files. Microsoft provides further guidance in [Working across Windows and Linux file systems](https://learn.microsoft.com/en-us/windows/wsl/filesystems).
</div>

## Git Bash

Git Bash is installed with [Git for Windows](https://gitforwindows.org/). It provides Bash and a collection of Unix-like tools, making it useful for Git workflows and lightweight command-line tasks. It is not a complete Linux distribution: software that requires Linux system services or packages may need WSL instead.

### Install Git Bash

1. Download Git for Windows from the [official website](https://gitforwindows.org/).
2. Run the installer and review the options. The defaults are suitable for most users; do not change settings unless you understand their effect.
3. Open **Git Bash** from the **Start menu**.
4. To open Git Bash in a particular folder, use the folder’s context menu in File Explorer and select **Open Git Bash here**, when available.

### Check the Git Bash session

Run the following commands:

1. Confirm that Git is available:
   ```bash
   git --version
   ```
2. Display the current directory:
   ```bash
   pwd
   ```
3. List visible and hidden files:
   ```bash
   ls -lha
   ```

Git Bash uses Unix-style paths and commands, but it works with files stored on Windows. Use the shell’s current working directory and path format consistently within a command sequence.

| command | purpose |
|---------|---------|
| `pwd` | Shows the current directory. |
| `ls -lha` | Lists visible and hidden files with details. |
| `cd <path>` | Changes the current directory. |
| `mkdir <name>` | Creates a directory. |
| `cp <source> <destination>` | Copies files or directories. |
| `mv <source> <destination>` | Moves or renames files or directories. |
| `rm <path>` | Removes files or directories. |
| `git status` | Shows the state of a Git repository. |
