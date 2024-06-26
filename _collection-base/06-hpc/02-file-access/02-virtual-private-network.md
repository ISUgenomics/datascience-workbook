---
title: "Virtual Private Network (VPN) Connection"
note: (command line)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 622
level: 2
categories: ["hpc", "computing-tools", "remote-access"]
tags: ["hpc-cluster", "authentication-MFA", "access-point", "VPN", "Cisco AnyConnect", "SSH"]
attributes: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

To access the shared computing machine (e.g., cluster on the HPC system), a user needs to connect to it remotely over a network because direct physical usage is typically not possible. The VPN client software is a program that allows a user to connect to a VPN server and establish a secure and private connection to the organization's internal network, from where HPC resources are available.

## *What is VPN?*

Virtual Private Network (VPN) is a technology that allows users to **securely access a private network over the Internet** through an encrypted tunnel. VPNs are often used by businesses and research institutions to **remotely access their organization's internal network** and protect sensitive data while using public Wi-Fi or other untrusted networks. Some VPN services are also provided by third-party companies for personal use. The user can then **connect to the VPN server to encrypt the internet traffic** and protect their online privacy. Some VPNs also help users to work around censorship and enter restricted websites and services.

<div class="note" markdown="1">
**A VPN is typically created by a company or organization to provide secure remote access to their internal network for their employees or authorized users.** The VPN server is set up and maintained by the organization, and users are provided with a VPN client software or configuration settings that allow them to connect to the VPN server.
</div>

There are several different types of VPNs, including:
* **site-to-site VPNs**, which connect two networks together, e.g., the corporate office to branch offices
* **client-to-site VPNs**, which allow individual users to securely access the organization's network while being outside the corporate office (off-campus).

## *How VPN works?*

When you use a VPN, **your internet traffic is routed through a remote server**, and **your IP address is replaced** with the IP address of the VPN server. This creates a **secure and private connection** that can be used to access resources on a remote network or to browse the internet privately. To establish a VPN connection, **the user runs the VPN client software**, which initiates the connection with the VPN server.

<div class="example" markdown="1">
**Here's how the VPN works:**

1. The user connects to the VPN server, which acts as an intermediary between the user's device and the Internet.
2. The VPN client software encrypts the user's Internet traffic and routes it through the VPN server to the destination website or service.
3. The destination website or service receives the encrypted traffic from the VPN server and sends its response back through the VPN server to the user's device.
4. The VPN client software on the user's device decrypts the response and presents the unencrypted data to the user.
</div>

## VPN client software

VPN client software is a program or application that allows a user to connect to a VPN server and establish a secure and private network connection. The **software typically is intalled and runs on the user's device**, such as a computer or mobile device, and encrypts all traffic going to and from the device, creating a secure tunnel through which the user can access the internet or other network resources.

Popular VPN client software includes:
<table>
  <tr><td><b>OpenVPN</b></td>          <td><a href="https://openvpn.net/" target="_blank">https://openvpn.net/  ⤴</a></td> </tr>
  <tr><td><b>Cisco AnyConnect</b></td> <td><a href="https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html" target="_blank">anyconnect-secure-mobility-client  ⤴</a></td> </tr>
  <tr><td><b>NordVPN</b></td>          <td><a href="https://nordvpn.com/" target="_blank">https://nordvpn.com/  ⤴</a></td> </tr>
  <tr><td><b>ExpressVPN</b></td>       <td><a href="https://www.expressvpn.com/" target="_blank">https://www.expressvpn.com/  ⤴</a></td> </tr>
</table>

Each VPN client software has its own unique features and user interface, but **they all work in a similar way**. Once you have installed the software, you will need to **enter the details provided by your VPN provider** to connect to the VPN server.

|Feature| <a href="https://openvpn.net/" target="_blank">OpenVPN</a> | <a href="https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html" target="_blank">Cisco AnyConnect</a> | <a href="https://nordvpn.com/" target="_blank">NordVPN</a> | <a href="https://www.expressvpn.com/" target="_blank">ExpressVPN</a> |
|-------------|-----|----|----|----|
| Open-source | YES | NO | NO | NO |
| Multi-platform support | YES | YES | YES | YES |
| Encryption strength    | Up to 256-bit AES | Up to 256-bit AES      | Up to 256-bit AES | Up to 256-bit AES |
| VPN type               | third-party       | client-based           | third-party       | third-party       |
| connection type        | external servers  | organization's servers | external servers  | external servers  |

<p class="footnote mt- center-h">^ Third-party VPN client software are not affiliated with any particular VPN service provider, and users can choose from a range of providers that support their preferred client.</p>

<div class="protip" markdown="1">
**Cisco AnyConnect is a popular solution that is widely used in many businesses and research institutions.** <base class="mb">
<button class="btn more mr"></button> For a practical example on how to install and use this software, see the [hands-on tutorial](#hands-on-tutorial) section.
</div>


# Hands-on tutorial

When accessing remote HPC system using VPN, you first need to **establish a VPN connection** between your local machine and the remote network. This is typically done **using VPN client software** that you install on your local machine. In this example, we will use the <a href="https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html" target="_blank">Cisco AnyConnect</a> application, which is a popular choice in many research institutions to **provide a secure access to their internal network from off-campus locations**.


## Download VPN client

**1.** First, download the VPN client software. <i>Here,it is the <a href="https://software.cisco.com/download/home" target="_blank">AnyConnect Secure Mobility Client  ⤴</a></i>. <br>
Select a version that is compatible with your operating system.

![02_remote_vpn_cisco_download.png]({{ images_path }}/02_remote_vpn_cisco_download.png)

Note that your organization may provide a custom link to download the specific versions of the VPN client software. *For example, if you are an employee of Iowa State University, you should download the Cisco Secure Client from <a href="http://vpn.iastate.edu/" target="_blank">http://vpn.iastate.edu/  ⤴</a>*

![02_remote_vpn_cisco_download_isu.png]({{ images_path }}/02_remote_vpn_cisco_download_isu.png)


## Installation of Cisco AnyConnect

You can use the `Instructions` button in bottom-right corner of the page to unfold the detailed instructions for the installation:

1. Click the **Download** button to save installation package.
2. Locate the downloaded file on your file system (typically in the *Downloads* folder) and open it *(typically by double-click)*.
3. The file will mount a disk image. <br>Open it and launch the file named something like `cisco-secure-client-macos-XXXXXX`.
4. Click **Continue** button on the *"Welcome to the Cisco Secure Client Installer"* screen.
5. Click **Continue** button on the software license agreement screen and then click **Agree** on the slide down dialog.
6. Click **Install** to begin installation.
7. Enter your device's password to approve the installation. <br>*It is needed because Cisco Secure Client requires administrative privileges.*
8. You have successfully installed the Cisco Secure Client and it is now ready for use.

![02_remote_vpn_cisco_install.png]({{ images_path }}/02_remote_vpn_cisco_install.png)


## Launch VPN connection

To open the Cisco Secure Client, browse your File System *(**Application** folder on MacOS)* and double click.

<div class="protip" markdown="1">
You can drag the icon to your Dock/Menu Bar to have a Cisco Client shortcut and speed up the use next time.
</div>

![02_remote_vpn_cisco_connection.png]({{ images_path }}/02_remote_vpn_cisco_connection.png)

Running the VPN client software initiates your connection with the VPN server. The client *(your local machine)* and server exchange encryption keys and authenticate each other, and then establish an encrypted tunnel for data transfer.


Once the VPN connection is established, you can access the remote network as if you were directly connected to it *(e.g., when you are physically on campus)*. Then, you can use SSH or other protocols to access the data stored on the remote machines.

<div class="warning" markdown="1">
It's important to note that you may need to have appropriate **permissions and credentials to access** the data stored on the remote machine, and you may need to follow specific security policies and procedures to access the data securely.
</div>


## Quick guide for SSH over VPN

**Once the VPN connection is established, you can access the remote network as if you were directly connected to it.**
So, all you need is to open the terminal window and log in to the HPC resources using an SSH connection.

<div class="note" markdown="1">
Accessing data using Secure Shell (SSH) typically involves using a terminal or command-line interface, rather than a graphical user interface (GUI).
</div>

1. **Start by opening a terminal window** on your local machine.
    <div class="protip" markdown="1">
    If you do NOT know what the terminal is, start with this tutorial: <a class="t-links" href="310"></a>.
    </div>

2. Then, **enter the following command** to log into the remote machine:
  ```
  ssh username@remote-hostname
  ```
  *where* `username` *is your username on the remote machine and* `remote-hostname` *is the hostname or IP address of the remote machine, e.g.,* `abadacz@nova.its.iastate.edu`

3. You will be prompted to **enter your password** for the remote machine, and if the login is successful, you will be logged into the remote resources and have access to its file system.

<div class="more mt" markdown="1">
...about the **Secure Shell (SSH) Protocol** from the tutorial in this section: <a class="t-links" href="623"></a> <base class="mb">
Also, get the advantage of **useful SSH shortcuts and set up password-less access** to your remote computing systems with this step-by-step guide: <a class="t-links" href="623.1"></a>
</div>
