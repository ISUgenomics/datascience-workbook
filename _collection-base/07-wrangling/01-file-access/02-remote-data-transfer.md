---
title: "Remote data transfer"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "intro"
order: 712
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

Remote data transfer refers to the transfer of data from one location to another. It requires a network, such as the Internet, that provides the means of **transmitting the data between the source and destination devices**. It allows individuals and organizations to share and exchange information, **regardless of their physical location**.

<div class="note" markdown="1">
With remote data transfer, data can be sent from a source device, such as a computer, to a destination device, such as another computer or a server, using a variety of protocols, such as File Transfer Protocol (**FTP**), Secure File Transfer Protocol (**SFTP**) and cloud storage services. <base class="mb">
**Remote data transfer is not possible without a network.** Without a network, data can only be transferred directly between two devices using a physical connection, such as a USB drive or an external hard drive.
</div>

Remote data transfer can be used for a wide range of purposes, such as:
* sharing files and documents,
* backing up data,
* transferring large amounts of data between systems,
* distributing software and updates.

<span style="color: #ff3870;font-weight: 500;">Remote data transfer enables greater collaboration and productivity by making it possible to access and share information from anywhere, at any time.</span>

# Remote data transfer options

## Secure Data Transfer in Science

The **need for secure data transfer in research** is paramount due to the sensitive nature of the data being transmitted. Research often involves the collection and analysis of sensitive and confidential information, such as personal information, intellectual property, trade secrets, and medical records. If this information were to fall into the wrong hands, it could have serious consequences, such as identity theft, unauthorized access to sensitive information, or loss of confidential information.

Here are some of the key reasons why secure data transfer is important in research:

* **CONFIDENTIALITY** <br>
<i>Research data often contains sensitive information that must be kept confidential to protect the privacy of individuals and the confidentiality of the research itself. Secure data transfer ensures that this information is transmitted over a secure connection and is protected from unauthorized access.</i>

* **INTEGRITY** <br>
<i>The accuracy and completeness of research data is crucial for the validity of the results. Secure data transfer helps to ensure the integrity of the data by providing mechanisms to detect and prevent any unauthorized changes or tampering with the data during transmission.</i>

* **COMPLIANCE** <br>
<i>Many research projects are subject to regulatory requirements, such as the General Data Protection Regulation (GDPR) and the Health Insurance Portability and Accountability Act (HIPAA). Secure data transfer helps to ensure compliance with these regulations by providing secure and encrypted methods of transmitting data.</i>

* **INTELLECTUAL PROPERTY** <br>
<i>Research often involves the creation of new ideas and concepts that may have commercial value. Secure data transfer helps to protect the intellectual property of the researchers by ensuring that confidential information is transmitted securely and is protected from unauthorized access.</i>

* **EFFICIENCY** <br>
<i>Secure data transfer allows researchers to collaborate and share data in real-time, regardless of their location. This can greatly increase the speed and efficiency of research projects and can facilitate collaboration between researchers across multiple institutions.
</i>

### • *Good Practices*

When transferring any research data, there are several practices and techniques that **should be avoided** in order to ensure the security and confidentiality of the data:

* **Avoid unencrypted connections:** <br>
<i>Unencrypted connections, such as <b>FTP or HTTP are NOT secure</b> and can leave the data vulnerable to interception and unauthorized access. Instead, use encrypted connections, such as SFTP, HTTPS, or VPN, to ensure that the data is transmitted securely.</i>

* **Avoid using public Wi-Fi networks:** <br>
<i>Public Wi-Fi networks are NOT secure and can be easily intercepted by unauthorized third parties. Instead, **use a secure and encrypted connection, such as a VPN**, to ensure that the data is transmitted securely.</i>

* **Avoid using weak passwords:** <br>
<i>Weak passwords can be easily cracked by attackers, putting the data at risk. Instead, use strong and unique passwords and implement multi-factor authentication to add an extra layer of security.</i>

* **Avoid transmitting sensitive information without permission:** <br>
<i>Before transmitting sensitive data, it is important to obtain permission from the owner of the data and to ensure that the data is properly secured.</i>

* **Avoid using personal email:** <br>
<i>Personal email accounts are not designed for secure data transfer and can be vulnerable to interception, unauthorized access, and data loss. Instead, use secure file transfer services or encrypted email services that are specifically designed for secure data transfer.</i>

* **Avoid using removable media:** <br>
<i>Removable media, such as USB drives, can be easily lost or stolen, putting the data at risk. Instead, **use secure file transfer services (e.g., Globus) or encrypted cloud storage services (e.g., your organization Box)** that are specifically designed for secure data transfer.</i>

# 1. Online **File Sharing** Services

There are several online file sharing services, which allow users to upload, store, and share files with others. These services offer the convenience of being accessible from anywhere with an Internet connection, and they often include advanced collaboration features such as the ability to share files with others and work on them together in real-time.

* <b><a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjz3IOTs4n9AhV2am8EHbu9BUUYABAAGgJqZg&ae=2&sig=AOD64_17dt_YRBCIb4ZvLndtVwhIwu7GYg&q&adurl&ved=2ahUKEwj28PqSs4n9AhVopokEHe__BPIQ0Qx6BAgGEAE" target="_blank">Dropbox  ⤴</a></b><br>
<i>A file hosting service that offers cloud storage, file synchronization, personal cloud, and client software. Free 2GB per user with up to 3 linked devices.</i>

* <b><a href="https://www.google.com/drive/" target="_blank">Google Drive  ⤴</a></b><br>
<i>A file storage and synchronization service developed by Google. Allows to create and share documents, spreadsheets, presentations, surveys, and more. Free 15GB per user with Google account.</i>

* <b><a href="https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage" target="_blank">OneDrive  ⤴</a></b><br>
<i>A file hosting service operated by Microsoft that enables registered users to share and synchronize their files. Includes Microsoft Office tools. No free plan available.</i>

* <b><a href="https://aws.amazon.com/pm/serv-s3/" target="_blank">Apple iCloud  ⤴</a></b><br>
<i>A cloud service developed by Apple that enables users to store and sync data across devices, including Apple Mail, Apple Calendar, Apple Photos, Apple Notes, contacts, settings, backups, and files, to collaborate with other users. Free 5GB per user with Apple account.</i>

* <b><a href="https://www.box.com/" target="_blank">Box  ⤴</a></b> (recommended)<br>
<i>A cloud-based file hosting service, focused on business users. Provides Secure collaboration with anyone, anywhere, on any device. No free plan available.</i><br>
<b>It is highly likely that your organization uses Box and you as an employee have an account automatically set up.</b><br>
  * If you work at Iowa State University check it here: <a href="https://iastate.account.box.com/login" target="_blank">https://iastate.account.box.com/login  ⤴</a>


# 2. Cloud **Storage** Services

Cloud storage services provide scalable and highly available data storage services that can be accessed over the Internet. These services are often used for backup, disaster recovery, and archiving. They are dedicated for business and large-scale needs. <i>Typically, there are no free pricing plans, check your options with your organization.</i>

* <b><a href="https://cloud.google.com/storage" target="_blank">Google Cloud Storage  ⤴</a></b><br><i>Cloud Storage is a managed service for storing unstructured data. Store any amount of data and retrieve it as often as you like.</i>
* <b><a href="https://azure.microsoft.com/en-us/products/storage/blobs" target="_blank">Microsoft Azure Blob Storage  ⤴</a></b><br><i>Azure Blob Storage provides long-term storage to build powerful cloud-native and mobile apps. It can flexibly scale up for high-performance computing and machine learning workloads.</i>
* <b><a href="https://aws.amazon.com/pm/serv-s3/" target="_blank">Amazon S3  ⤴</a></b><br><i>Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance.</i>

# 3. Web-based **File Transfer**

Some web-based file transfer services allow you to send large files over the Internet without the need to install any software. These services typically use a web browser as the client, and the recipient simply needs to follow a link to download the file. While web-based free file transfer services can be convenient, **they may not provide the level of security and reliability** required for sensitive or confidential data.

<div class="warning" markdown="1">
The safety and security of web-based free file transfer services can vary greatly. While some services may offer a certain level of security, it is important to consider the potential risks associated with using these services. <br>
**Remember that nothing comes for free.** Here are some of the risks associated with using web-based free file transfer services:
* **lack of encryption**, leaving the data vulnerable to interception and unauthorized access
* **limited security features**, such as weak password protection, which can leave the data at risk of unauthorized access
* **data privacy**, services may collect and use personal data for advertising or other purposes
* **unreliable servers**, which can result in data loss or corruption during transmission
* **no technical support**, which can make it difficult to resolve issues or recover lost data
</div>

# 4. **Data transfer** to and from HPC

High-Performance Computing (HPC) environments typically have a number of secure options for remote data transfer, including:

## • GLOBUS (recommended)

<b><a href="https://www.globus.org/data-transfer" target="_blank">Globus  ⤴</a> is a web-based service</b> for transferring large amounts of data between HPC systems, cloud storage systems, and other data repositories. Globus provides a secure and reliable means of transferring data, and it can be integrated with other tools and systems used in HPC environments.

**Tutorial:** <span style="color: #ff3870; font-weight: 500;">Follow hands-on tutorial</span> {% include target_link href=712.1 text="Copying Data using Graphical Interface: Globus" %} in this workbook, to acquire the practical skill of transferring data to and from the HPC system.

**Globus is a recommended tool for transferring data on the SCINet infrastructure.**<br>
Learn more about {% include target_link href=612.2 section="#data-transfer-using-globus" text="Data transfer on Atlas using Globus" %} from the tutorial {% include target_link href=612.2 text="SCINet: Atlas computing cluster" %}

## • GridFTP

<b><a href="https://docs.nersc.gov/services/gridftp/" target="_blank">GridFTP  ⤴</a> is a command line service</b> for parallel movement of data. It is a high-performance, parallel-data transfer protocol designed for large-scale data transfers, especially for HPC and scientific computing. GridFTP uses multiple parallel streams to transfer data, which can significantly speed up data transfer times for large files.

## • FTP client

FTP (File Transfer Protocol) is a standard network protocol used for transferring files between computers over the internet. The protocol was designed to be simple and efficient, allowing for the easy transfer of large files between hosts. Many websites and online resources offer FTP access, which allows users to download files directly to their local machine using an FTP client.

<div class="note" markdown="1">
FTP works by establishing a connection between a client and a server. The client is typically an FTP software application, also known as an **FTP client**, while the server is a remote computer that stores the files to be transferred. The FTP client uses the protocol to send commands to the server to download or upload files. <base class="mb">
**FTP is not a secure protocol**, as data is transferred in plain text and can be intercepted by third parties. As such, it is recommended to **use a secure file transfer protocol**, such as `SFTP` (Secure File Transfer Protocol) or `FTPS` (FTP over SSL), for transferring sensitive data.
</div>

**QUICK GUIDE**

**1. To download data from an online resource using FTP, you first need to have an FTP client installed on your local machine.** <br>
There are several popular FTP clients available, including:
* <a href="https://filezilla-project.org" target="_blank">FileZilla  ⤴</a>, a **cross platform open-source** FTP solution supporting FTP, FTPS, SFTP, and some cloud-based file transfer protocols
* <a href="https://" target="_blank">Cyberduck  ⤴</a>, a libre server and cloud storage browser for **Mac and Windows** with support for FTP, SFTP, and some cloud-based file transfer protocols
* <a href="https://" target="_blank">WinSCP  ⤴</a>, a popular FTP client for **Microsoft Windows** supporting FTP, FTPS, SFTP, and some cloud-based file transfer protocols

![01-download_ftp_client.png]({{ images_path }}/01-download_ftp_client.png)

**2.** Once you have an FTP client installed, you can use it to **connect to the server hosting the files** you want to download. <br>
<i>To establish a connection, you will need to <b>enter the hostname or IP address of the server, as well as your login credentials</b>, such as your username and password.</i>

**3.** Once you have established a connection, you can browse the files and directories stored on the server, and select the files you want to download. <br>
<i>You can then use the FTP client to initiate the file transfer and monitor its progress.</i>

<span style="color: #ff3870;font-weight: 500;">Some FTP clients provide both a graphical user interface (GUI) and a command-line interface (CLI) for transferring files.</span> *Note that the exact syntax may differ depending on your operating system and the version of the tool you are using.*

<details><summary><b>FileZilla</b></summary>

In FileZilla, you can use the command-line interface by launching the application with the `--cli` command-line option. <br>
Once in the CLI, you can use commands like:
<li> `open` to connect to an FTP server, </li>
<li> `put` and get to transfer files, </li>
<li> `exit` to close the connection. </li>

To display a list of available commands use the `--help` option:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
filezilla --help
</code>

To display help for a specific command, use the `-h` or `--help` option followed by the command name:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
filezilla -h open
</code><br>
</details>

<details><summary><b>Cyberduck</b></summary>

In Cyberduck, you can use the `duck` command-line tool to transfer files via FTP. <br>
The duck command-line tool provides a variety of options to configure the FTP connection and transfer settings.

To display a list of available commands use the `--help` option:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
duck help
</code>

To display help for a specific command, use the `duck help` command followed by the command name:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
duck help put
</code><br>
</details>

<details><summary><b>WinSCP</b></summary>

In WinSCP, you can use the `winscp.com` command-line tool to automate file transfer tasks. <br>
The winscp.com tool provides a variety of options to configure the FTP connection and transfer settings.

To display a list of available commands, use the `/?` or `/h` option:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
winscp.com /?
</code>

To display help for a specific command, use the `/h` or `/help` option followed by the command name:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;">
winscp.com /help put
</code><br>
</details>


## • rsync (command)

<b>`rsync` is a command line tool for fast and efficient file transfer</b>. It is often used in HPC environments. `rsync` transfers only the differences between two sets of files, making it well-suited for transferring large amounts of data, especially when only small changes have been made to the data.

**Tutorial:** <span style="color: #ff3870;font-weight: 500;">Follow hands-on tutorial</span> {% include target_link href=712.2 text="Copying data via SSH using command line" %} in this workbook, to acquire the practical skill of transferring data to and from the HPC system.

## • scp (command)

<b>`scp` (secure copy) is a command-line tool for securely copying files between computers</b>. `scp` uses the same authentication and security as the SSH (secure shell) protocol, which is widely used for secure remote login and other secure network services.

**Tutorial:** <span style="color: #ff3870;font-weight: 500;">Follow hands-on tutorial</span> {% include target_link href=712.2 text="Copying data via SSH using command line: scp, rsync" %} in this workbook, to acquire the practical skill of transferring data to and from the HPC system.

## • Data Movers

Some HPC systems include data movers, which are specialized hardware or software components that are designed to handle the high-speed transfer of large amounts of data. Data movers can be integrated with other HPC tools and systems to provide a seamless means of transferring data between HPC resources.
