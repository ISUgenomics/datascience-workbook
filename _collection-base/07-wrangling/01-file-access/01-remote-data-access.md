---
title: "Remote data access"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 711
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / **1. Remote Data Access**

---


# Introduction

Remote data access refers to the ability to **access data that is stored on a remote machine**, such as a server, database, or HPC system rather than on a local machine. This allows users to access and **manipulate data from anywhere with an internet connection**. In particular, there are several ways to access data stored on high-performance computing (HPC) clusters remotely.

## **1. Log in to a remote machine using CLI**
To access remotely data stored on a HPC cluster, you need to log into a node within the cluster that has access to the data. You may need one or both tools (listed below) to log in to HPC system, depending on your location and your organization's network settings.

* **VPN (Virtual Private Network)** <br>
It could be required when you are in an **off-campus location**. <br>
<i>Learn more from the hands-on tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/02-virtual-private-network" target="_blank">Virtual Private Network (VPN) Connection  ⤴</a>, provided in the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/01-remote-data-access" target="_blank">06. HPC: Remote Access to HPC Resources  ⤴</a> section of this workbook.</i>

* **SSH (Secure Shell connection)** <br>
It can be used **when you are already in the internal network**, i.e., when you are on campus or have a VPN connection to the organization's network. <br>
<i>Learn more from the hands-on tutorials available in the <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/01-remote-data-access" target="_blank">06. HPC: Remote Access to HPC Resources  ⤴</a> section of this workbook:</i>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/03-secure-shell-connection" target="_blank">Secure Shell Connection (SSH)  ⤴</a>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/03A-ssh-shortcuts" target="_blank">SSH shortcuts and password-less login  ⤴</a>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">Accessing data using VPN or SSH connection typically involves using a command-line interface (CLI), rather than a graphical user interface (GUI). To learn more about <b>command line</b> explore tutorials in the section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a></span>.
</div>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
When accessing data using VPN, you first need to <b>establish a VPN connection</b> between your local machine and the remote network. This is typically done <b>using VPN client software</b> that you install on your local machine. Once the VPN connection is established, you can access the remote network as if you were directly connected to it, and you can <b>use SSH protocol to access the data</b> stored on the remote machines.
</span>
</div><br>

You start by opening a <a href="https://datascience.101workbook.org/02-IntroToCommandLine/01-terminal-basics" target="_blank">terminal window  ⤴</a> on your local machine and entering the following command to log into the remote machine:

```
ssh username@remote_host
```
*where `username` is your username on the remote machine and `remote_host` is the hostname or IP address of the remote machine.*

You will be prompted to **enter your password** for the remote machine, and if the login is successful, you will be logged into the remote machine and have access to its file system as if the files were stored locally.

You can then use standard file system commands, such as `ls`, `cd`, and `pwd`, to navigate the remote file system and manipulate (move `mv`, preview `cat`, edit `nano`, transfer `cp`) selected files.

### Command line approach for:

### • *data transfer*
Follow the hands-on tutorial: <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/02-0-remote-data-transfer" target="_blank">Transfer data from and to the remote machine  ⤴</a>

### • *data download*
Follow the hands-on tutorial: <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/03-0-remote-data-download" target="_blank">Download data from online resources  ⤴</a>

### • *data preview & edit*
Follow the hands-on tutorial: <a href="https://datascience.101workbook.org/07-DataParsing/01-FILE-ACCESS/04-0-remote-data-preview" target="_blank">Preview and edit remote data without downloading  ⤴</a>

## **2. Log in to the HPC web-based interface**
Some HPC systems may also provide web-based graphical interfaces for remotely accessing and managing data. One of the most commonly practiced solutions is:


###  *OOD (Open On Demand)*

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
<a href="https://openondemand.org" target="_blank">Open On-Demand  ⤴</a> is a web-based platform that provides <b>remote access to high-performance computing (HPC) resources</b>, such as supercomputers and large-scale clusters. It provides a <b>user-friendly interface</b> for accessing these resources <b>from a web browser</b>, without the need for complex software installations or command-line interfaces.
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;">Follow the hands-on tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/02-FILE-ACCESS/04-open-on-demand" target="_blank">Open On Demand (OOD) Connection using web-based interface  ⤴</a> to learn how to use different tools and features available in the OOD web interface of HPC systems.</span>


**QUICK GUIDE to OOD**

You start by opening a web browser on your local machine and entering the URL to the website that hosts the OOD interface for a given HPC system, e.g.,

* <b><a href="https://atlas-ood.hpc.msstate.edu/" target="_blank">https://atlas-ood.hpc.msstate.edu/  ⤴</a></b> <i>for <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster#open-ondemand-login" target="_blank">OOD access to Atlas  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a></i>
* <b><a href="http://ceres-ood.scinet.usda.gov/" target="_blank">http://ceres-ood.scinet.usda.gov/  ⤴</a></b> <i>for <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">OOD access to Ceres  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC system  ⤴</a></i>
* <b><a href="http://nova-ondemand.its.iastate.edu/" target="_blank">http://nova-ondemand.its.iastate.edu/  ⤴</a></b> <i>for <a href="https://www.hpc.iastate.edu/guides/open-ondemand" target="_blank">OOD access to Nova  ⤴</a> computing cluster of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC system  ⤴</a></i>

You will be prompted to **enter your credentials** for the HPC system, and if the login is successful, you will be logged into the remote machine and have access to its file system and resources.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that <b>all you need is a web browser with internet connection</b>. You don't need to open the terminal window or use the SSH protocol. After logging in, you will perform everything in a browser window, and all <b>applications will be opened automatically in the next tabs</b>.
</span>
</div><br>

You can then use web-based graphical interface to use remotely the available resources, including:

* open virtual desktop environment
  * browse file system in graphical interface *(by clicking on the folders)*
* open terminal or console to get a web-based command line access
  * browse file system in the command line interface
  * submit jobs to the queueing system
* launch individual interactive applications that only work in the GUI *(e.g., JupyterLab, RStudio, specialistic software)*
* submit jobs to the queueing system using job generator

Open On-Demand is designed to be scalable, secure, and flexible. By providing web-based access to these resources, OOD makes it easy for a wider range of users to take advantage of the power of HPC, without the need for the user to know the command line.

## **3. Access data via web services**

Web services are another way for users to access different applications or data available on
some HPC systems. They provide a standard set of protocols and standards for exchanging data, allowing different systems to communicate with each other over the World Wide Web (www).

Web servers typically use a client-server communication model, when a user wants to access data stored on a remote system. This means that the user's device (the client, e.g., local computer or mobile device) sends a request for data to another device (the server) that is hosting the data.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Web services use a combination of technologies, including Simple Object Access Protocol (<b>SOAP</b>), Extensible Markup Language (<b>XML</b>), and Hypertext Transfer Protocol (<b>HTTP</b>) to exchange data between applications. These technologies provide a common format for data exchange and allow different applications to communicate with each other, regardless of the programming languages or operating systems they use.
</span>
</div><br>

Here's a simple explanation of how it works:
1. The client sends a request for data to the server using a network connection (such as the internet).
2. The server receives the request and retrieves the requested data from its storage.
3. The server sends the data back to the client over the network connection.
4. The client receives the data and can then display or process it as needed.

This client-server communication happens over the internet, and the data is transmitted securely to protect it from unauthorized access. The communication is based on standardized protocols, such as HTTP, which ensure that the client and server can understand each other and exchange data in a consistent and reliable way.

**How it works from the user's perspective?**

So in practice, accessing data stored on a remote system can be as simple as navigating to a web page and making a few selections and clicks through a web-based graphical interface. The user doesn't need to have any knowledge of the underlying technologies or protocols.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br>
<b>Web services are NOT designed to provide wide access to all data stored on HPC systems</b>. Rather, they are used as a tool for developers or scientists to <b>provide open access to selected datasets</b>, analytical pipelines, and computing resources to those who do not have direct access to the source storage systems. <br><br>
<span style="font-style:italic;">
For example, a researcher may have data stored on an HPC system that they want to share with colleagues or the public. By using a web service, they can make that data accessible over the World Wide Web, without the need for their colleagues or the public to have direct access to the HPC system. <br><br>
Similarly, a scientist may have developed a computational pipeline that they want to share with others. By exposing that pipeline through a web service, they can allow others to run the pipeline on the data of their choice, without the need for direct access to the underlying HPC system.
</span>
</div><br>

There are many different types of web services that can be used to exchange data between applications or systems over the World Wide Web. Some common examples include:

### *A. Databases*

Databases are systems used to store and manage data, and can be accessed through web services to retrieve data or perform data-related operations. Examples of databases include relational databases like MySQL and NoSQL databases like MongoDB.

Here are a few examples of database services in science:

* <b><a href="https://www.ensembl.org/" target="_blank">Ensembl  ⤴</a></b><br>
<i>Ensembl is a web-based platform for genome analysis, providing access to a range of genomic data, including reference genomes, gene annotations, and comparative genomics data.</i>

* <b><a href="https://www.uniprot.org/" target="_blank">UniProt  ⤴</a></b><br>
<i>UniProt is a web-based platform for protein analysis, providing access to a comprehensive database of protein information, as well as tools for sequence analysis and functional annotation.</i>

* <b><a href="https://www.kegg.jp/" target="_blank">KEGG  ⤴</a></b><br>
<i>KEGG (Kyoto Encyclopedia of Genes and Genomes) is a database that provides information about the biological pathways and molecular interactions in various organisms.</i>

* <b><a href="https://www.rcsb.org/" target="_blank">PDB (RCSB)  ⤴</a></b><br>
<i>A web-based platform for structural biology, providing access to a large database of protein structures (derived experimentally), as well as tools for structural analysis and visualization.</i>

* <b><a href="https://alphafold.ebi.ac.uk" target="_blank">AlphaFold DB  ⤴</a></b><br>
<i>AlphaFold Protein Structure Database collects over 200 million protein structure predictions by AlphaFold, the state-of-the-art AI system developed by DeepMind.</i>
  * <b><a href="http://biocomp.chem.uw.edu.pl/A3D2/hproteome" target="_blank">A3D Database  ⤴</a></b> <i>is a secondary database that provides the the analysis of solubility and aggregation properties for human protein structures from the AlphaFold Database.</i>

### *B. Web Applications*

Web applications are software applications that are accessible through a web browser and run on a server. Examples of web applications include online shopping platforms, social media platforms, and productivity tools like Google Docs. Web applications often use web services to exchange data with other systems or to retrieve data from a database.

Here are a few examples of web application services in science:

* <b><a href="https://galaxyproject.org/" target="_blank">Galaxy  ⤴</a></b><br>
<i>Galaxy is a web-based platform for genomic data analysis that provides a comprehensive suite of tools for processing, visualizing, and analyzing large-scale genomic data.</i>

* <b><a href="https://genepattern.org/" target="_blank">GenePattern  ⤴</a></b><br>
<i>GenePattern is a platform for computational biology that provides access to hundreds of analytical tools and pipelines for gene expression analysis, genomics, and proteomics.</i>

* <b><a href="https://" target="_blank">Cytoscape  ⤴</a></b><br>
<i>Cytoscape is a web-based platform for network analysis and visualization that provides a suite of tools for exploring and analyzing complex biological networks.</i>

* <b><a href="https://" target="_blank">MAPIYA  ⤴</a></b><br>
<i>Mapiya is acontact map server for identification and visualization of molecular interactions in proteins and biological complexes.</i>


### *C. RESTful Web Services*

This type of web service uses the Representational State Transfer (REST) architectural style and is based on the HTTP protocol. RESTful web services are designed to be lightweight and easy to use, and are often used for simple data exchange tasks such as retrieving information from a database or providing access to a web application.

<b>RESTful web services are a popular choice in science because they are lightweight and easy to use, making them well-suited for simple data exchange tasks.</b> <i>For example, a researcher might use a RESTful web service to retrieve data from a database or to access a web application.</i>


### • *automatic data retrival*

While databases and online applications are explored by users primarily through a graphical web-based interface, those based on a RESTful approach also allow data retrieval from the command line.
<span style="color: #ff3870;font-weight: 500;">
So know that there is a more efficient method of downloading data from web services than manually.
</span><br>

RESTful web services can be accessed from the command line using tools like `curl`, `wget`, or `httpie`. These tools allow you to **make HTTP requests from the terminal**, which can be useful for testing or automating interactions with the web service.

<i>Let's say you want to retrieve information about a specific protein from the <b>UniProt database</b>. You can do this by sending a GET request to the UniProt RESTful web service API endpoint for the desired protein. For example, the endpoint for the protein with the accession number "P12345" would be "<a href="https://www.uniprot.org/uniprot/P12345.xml" target="_blank">https://www.uniprot.org/uniprot/P12345.xml</a>".</i>

To access this information, you can use a tool like curl in the command line:
```
curl https://www.uniprot.org/uniprot/P12345.xml
```
This will return an XML file with information about the protein, such as its amino acid sequence, function, and references to related data in other databases.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Note that this is just a basic example of accessing a RESTful web service. RESTful web services can support many other types of requests, such as POST and DELETE, and can provide data in different formats, such as JSON. The specifics of how to access a RESTful web service can vary depending on the specific web service and the desired data.
</span>
</div><br>

### *D. SOAP Web Services*

This type of web service uses the Simple Object Access Protocol (SOAP) and is typically used for more complex data exchange tasks, such as processing transactions or integrating with other systems. SOAP web services often rely on XML for encoding messages, and may use other protocols, such as SMTP, for transportation.

### *E. Microservices*

Microservices are small, independent, and modular applications that can be combined to form a larger system. They are often used in web applications and can be accessed through web services to perform specific tasks or exchange data.

___
# Further Reading
* [1.1 Remote Data Transfer](02-0-remote-data-transfer)
* [1.2 Remote Data Download](03-0-remote-data-download)
* [1.3 Remote Data Preview without Downloading](04-0-remote-data-preview)

* [2. Data Manipulation](../02-DATA-MANIPULATION/01-data-manipulation)
* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Next](02-0-remote-data-transfer){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
