---
title: "Superuser command: <i><b>sudo</b></i>"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "tutorial"
order: 324
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Superuser

The superuser, also known as the **"root" user**, is a special user account in Unix and Linux systems that has complete control over the system, including unrestricted access to all files and commands on the system. In most Unix-like systems, the superuser is the only user that can perform certain tasks, such as changing the system's hostname, modifying system-wide files and configuration settings, installing software, and creating and deleting user accounts.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Because the superuser has such wide-ranging privileges, it is important to use this account cautiously. Accidental mistakes or malicious actions performed as the superuser can have serious consequences, such as damaging the system or compromising security.
</span>
</div>

The superuser account is typically reserved for **system administrators** and other advanced users who need to perform tasks that require high levels of privilege. It is generally a good idea to use the superuser account sparingly, and only when absolutely necessary, as it has the potential to cause significant harm to the system if used improperly. Thus, it is always better to create a separate user account for daily use and reserve the superuser account for tasks that require its elevated privileges. This helps to prevent accidental mistakes and reduce the risk of security vulnerabilities.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
<b>On a personal computing machine</b>, the superuser is typically the user who created the account when the operating system was installed. This initial account is often the default administrative account, meaning that <b>you have full control over the system settings</b>. The user who created this account is usually the owner of the computer.  <br><br>
<b>On a high-performance computing (HPC) infrastructure</b>, the superuser is typically a system administrator or other advanced user who has been granted superuser privileges. So, as a non-admin user, <b>you have limited ability to modify system settings</b> or install software.
</span>
</div>


## Superuser-level tasks

The root user has complete control over the system and can perform any action that is necessary to maintain and manage it. This includes tasks such as:

* **Installing and removing software** <br>
  *The superuser can install and remove software packages, including system-level packages and libraries.*

* **Modifying system files and settings** <br>
  *The superuser can modify system-level configuration files and settings, including those in the `/etc` directory.*

* **Creating and deleting user accounts** <br>
  *The superuser can create and delete user accounts, including setting up user profiles and permissions.*

* **Setting up and managing network services** <br>
  *The superuser can set up and manage network services, such as web servers and database servers.*

* **Setting up and configuring system services** <br>
  *The superuser can set up and configure system services, such as the Apache web server, the MySQL database server, or the SSH daemon.*

* **Managing system resources** <br>
  *The superuser can manage system resources, such as memory, CPU, and storage, and can configure resource limits for other users.*

* **Managing system backups** <br>
  *The superuser can create and manage system backups, including configuring backup schedules and restoring from backups.*

* **Viewing and modifying system logs** <br>
  *The superuser can view and modify system logs, including system-level logs and logs for individual users.*

* **Updating the operating system** <br>
  *The superuser can update the operating system by installing patches and security updates.*

* **Debugging system-level issues** <br>
  *The superuser can use tools and techniques to troubleshoot and debug system-level issues, such as system crashes or performance problems.*

* **Modifying kernel parameters** <br>
  *The superuser can modify kernel parameters, which are settings that control the behavior of the operating system kernel.*


<div style="background: #cff4fc; padding: 15px;">
  <span style="font-weight:800;">PRO TIP:</span>
  <br><span style="font-style:italic;">
For you, as a regular <i>(non-admin)</i> user on the HPC infrastructure, these tasks are not available to perform. <br><br>
To perform these tasks on your personal computing machine when necessary, you need to activate superuser privileges.
  </span>
</div>

### Permission denied error

If you attempt to perform a task that requires superuser privileges without having the necessary permissions, you may see an error message similar to the following:

```
bash: command: Permission denied
```

This error message indicates that you do not have the necessary permissions to execute the command. In order to perform the task, you will need to activate superuser privileges *(see next section)*.


## How to become a superuser?

To activate superuser privileges, you can either switch to the superuser account using `su` command or use the `sudo` command to execute commands with superuser privileges.

### A. [su] switch to the superuser

Open the terminal window and type on the command line:

```bash
su -
```

This will prompt you to enter the superuser password, and then log you in as the superuser. Then, **all commands you provide will be executed as a root user**.

```bash
apt-get update
```

In this example, the `apt-get update` command is being **run as a superuser**. This is necessary because the command updates the system's package manager database, which requires superuser access.

### B. [sudo] use superuser privileges

Alternatively, you can use the `sudo` command to **execute a single command with superuser privileges**.

```bash
sudo apt-get update
```

In this example, the `apt-get update` command is being **run with superuser privileges**. This is often preferred over logging in as the superuser, as it allows you to perform a specific task without giving up your own user privileges and helps to prevent unauthorized use of the superuser account.


## More about `sudo`

`sudo` is a Unix command that allows a user to execute commands with the privileges of another user, typically the superuser. To use `sudo`, you must first be a member of the **sudo group** on the system. This group is typically configured by the system administrator. When you execute a command with sudo, you may be prompted to **enter your own password to confirm your identity**. This helps to prevent unauthorized users from executing commands with superuser privileges.

To preview all options available with the `sudo` command, type in the command line:

```bash
sudo -h
```

It will display the options and usage syntax:

```bash
sudo - execute a command as another user

usage: sudo -h | -K | -k | -V
usage: sudo -v [-AknS] [-g group] [-h host] [-p prompt] [-u user]
usage: sudo -l [-AknS] [-g group] [-h host] [-p prompt] [-U user] [-u user] [command]
usage: sudo [-AbEHknPS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] [VAR=value]
            [-i|-s] [<command>]
usage: sudo -e [-AknS] [-C num] [-D directory] [-g group] [-h host] [-p prompt] [-R directory] [-T timeout] [-u user] file ...
```
```
Options:
  -A, --askpass                 use a helper program for password prompting
  -b, --background              run command in the background
  -B, --bell                    ring bell when prompting
  -C, --close-from=num          close all file descriptors >= num
  -D, --chdir=directory         change the working directory before running command
  -E, --preserve-env            preserve user environment when running command
      --preserve-env=list       preserve specific environment variables
  -e, --edit                    edit files instead of running a command
  -g, --group=group             run command as the specified group name or ID
  -H, --set-home                set HOME variable to target user's home dir
  -h, --help                    display help message and exit
  -h, --host=host               run command on host (if supported by plugin)
  -i, --login                   run login shell as the target user; a command may also be specified
  -K, --remove-timestamp        remove timestamp file completely
  -k, --reset-timestamp         invalidate timestamp file
  -l, --list                    list user's privileges or check a specific command; use twice for longer format
  -n, --non-interactive         non-interactive mode, no prompts are used
  -P, --preserve-groups         preserve group vector instead of setting to target's
  -p, --prompt=prompt           use the specified password prompt
  -R, --chroot=directory        change the root directory before running command
  -S, --stdin                   read password from standard input
  -s, --shell                   run shell as the target user; a command may also be specified
  -T, --command-timeout=timeout terminate command after the specified time limit
  -U, --other-user=user         in list mode, display privileges for user
  -u, --user=user               run command (or edit file) as specified user name or ID
  -V, --version                 display version information and exit
  -v, --validate                update user's timestamp without running a command
  --                            stop processing command line arguments
```


## Practical examples

Here are a few practical examples of using the `sudo` command:

**1. Updating the system's package manager database:**

```bash
sudo apt-get update
```

In this example, the apt-get update command is being run with superuser privileges, which is necessary to update the system's package manager database.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> You should always update the system's package manager database before installing a new software or library. </span>
</div>

**2. Installing a software package:**

```bash
sudo apt-get install python3
sudo apt-get install git
sudo apt-get install nodejs
```

In these examples, the apt-get install command is being run with superuser privileges, which is necessary to install the specified packages:
* ***python3***, a general-purpose programming language that is widely used in a variety of fields, including scientific computing, data analysis, web development, and artificial intelligence
* ***git***, a version control system that is used to track changes to files and coordinate work among multiple developers
* ***nodejs***, a JavaScript runtime used to execute JavaScript code outside of a web browser, often for building server-side applications, command-line tools, and desktop applications

**3. Changing the ownership of a file:**

```bash
sudo chown root:root /etc/nginx/nginx.conf
```

In this example, the `chown` command is being run with superuser privileges, which is necessary to change the ownership of the /etc/nginx/nginx.conf file to the root user.


**4. Changing the permissions of a file:**

```bash
sudo chmod 644 /etc/nginx/nginx.conf
```

In this example, the `chmod` command is being run with superuser privileges, which is necessary to change the permissions of the /etc/nginx/nginx.conf file. The 644 permissions specify that the owner can read and write to the file, and all other users can only read the file.


**5. Adding a user to the sudo group:**

```bash
sudo usermod -aG sudo username
```

In this example, the `usermod` command is being run with superuser privileges, which is necessary to add the user *username* to the **sudo group**. This will allow the user to execute commands with superuser privileges using the sudo command.

**6. Modifying a system configuration file:**

```bash
sudo nano /etc/hosts
```

In this example, the `nano` text editor is being run with superuser privileges, which is necessary to modify the `/etc/hosts` file. The `/etc/hosts` file is used to map hostnames to IP addresses, and is often used to configure local domain names or block unwanted websites. The file can NOT be edited without superuser privileges.

```bash
sudo vi /etc/ssh/sshd_config
```

In this example, the `vi` text editor is being run with superuser privileges, which is necessary to modify the `/etc/ssh/sshd_config` file. The `/etc/ssh/sshd_config` file is used to configure the SSH daemon, which allows users to remotely access the system.

```bash
sudo nano /etc/fstab
```

In this example, the `vi` text editor is being run with superuser privileges, which is necessary to modify the `/etc/fstab` file. The `/etc/fstab` file is used to configure the system's mount points, which are the locations where file systems are mounted.


**7. Displaying the system log:**

```bash
sudo tail /var/log/syslog
```

In this example, the `tail` command is being run with superuser privileges, which is necessary to view the contents of the `/var/log/syslog` file. The *syslog* file contains system-level logs, including information about system events and errors.

**8. Restarting a system service:**

```bash
sudo systemctl restart nginx
```

In this example, the systemctl restart command is being run with superuser privileges, which is necessary to restart the nginx service. NGINX is a web server that is often used to serve static content such as images and HTML files, and to reverse proxy HTTP and HTTPS traffic to backend servers. It is known for its high performance, stability, and low resource consumption. NGINX can be installed as a package on most operating systems using the `sudo apt-get install nginx` command.

```bash
sudo systemctl restart mysql
```

The `mysql` service is the MySQL database server, which is used to store and manage data. Restarting the service may be necessary to apply configuration changes or to troubleshoot problems.

```bash
sudo systemctl restart ssh
```

The `ssh` service is the SSH daemon, which allows users to remotely access the system.

```bash
sudo systemctl restart cron
```

The `cron` service is the cron daemon, which is used to schedule tasks to run at specific times.


**These are just a few examples of using the sudo command.** <br>
There are many other tasks that may require superuser privileges, and sudo can be used to execute any of these tasks.


<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> It is important to use <b>sudo</b> sparingly, and only when absolutely necessary, as it has the potential to cause significant harm to the system if used improperly. </span>
</div>
