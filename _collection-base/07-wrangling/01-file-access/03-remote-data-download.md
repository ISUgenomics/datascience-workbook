---
title: "Remote data download"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "intro"
order: 713
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Downloading data **from online and remote resources** can be a challenging task, particularly when dealing with large datasets or complex or dynamic web pages. However, many tools and techniques are available to simplify this process and allow users to download data with ease. In this section, we will focus on the **command-line approaches for downloading data** from online and remote resources. It will cover popular tools and provide practical examples of how to use them to download data from various online resources.

<div class="more" markdown="1">
If you rather are interested in **transferring files between remote computing machines** than downloading data from online resources, see the tutorials in section <a class="t-links" href="712">07. Data Acquisition and Wrangling / Remote data access / <b>Remote data transfer</b></a>
</div>


## *Why data is available online?*

Data and insights are **available in online resources** for several reasons. One of the primary motivations for researchers to create online repositories is to **make it easier for users to access and use the data** or knowledge. By **storing in a centralized location**, developers can provide a single source that **users can access from anywhere** with an internet connection. It also fosters collaboration and knowledge sharing by creating **community of users who can learn from each other**, share insights, and work together to solve problems. This can be particularly valuable in **fields such as data science**, where collaboration and sharing of insights are essential for advancing the field.


## Benefits for users

One of the primary benefits is **easy access** to a large amount of data or knowledge. <br>
*Online end point can provide users with access to large datasets or libraries of information that would be difficult or impossible to share otherwise and for multiple users.*

Additionally, online access platforms often provide a **standardized and organized way of presenting data** or knowledge, making it easier for users to find and use what they need.

Another benefit of making data available online is **saving users time and effort**. <br>
*Rather than manually collect data or information from various sources, users can access the data or information they need from a single up-to-date source.*


# Data available online

In most cases, the online interface visited by a user is simply a **rendered frontend for content stored on a physical backend**, such as an HPC storage or server located somewhere in the world. The online resources provide an easy & friendly way for users to access and interact with the data, which could be difficult to access otherwise.

<div class="note" markdown="1">
It's worth noting, however, that there are **some exceptions** to this. For example, some web applications or services may use client-side technologies, such as JavaScript or WebAssembly, to **process data or content directly in the user's web browser**, without sending the data back to the server for processing. In these cases, the online interface may play a more active role in manipulating the visible content.
</div>


## Explore vs. Download

**Graphical interfaces for online resources can be very useful for browsing, interacting, and analyzing data.** These interfaces allow users to easily navigate through the available data, visualize it in various ways, and perform complex analysis tasks without needing to know complex command line tools or programming languages.

However, when it comes to downloading or copying data, a graphical interface may not always be the most efficient or convenient way to do so.

<em class="cons"></em> *For example, if a user needs to download a large amount of data, it may take a long time to do so through the graphical interface, which may have limitations on the amount of data that can be downloaded at once.*

<em class="cons"></em> *For example, if a user needs to perform a repetitive or automated task, such as regularly downloading data from an online resource, using a graphical interface can be tedious and time-consuming.*

In these cases, <b class="c-good">command line approaches can be much more efficient</b> **and convenient for downloading or copying data from online resources**. These tools allow users to automate repetitive tasks, download large amounts of data more quickly, and work with data in a more flexible and customizable way.


## Data access points

There are several types of online resources that provide access points to data.

* **WEBSITES** <br>
  *Many websites store data, such as news articles, product information, or user-generated content. Websites can also be endpoints to data stored elsewhere, such as when a website embeds data from another website or service.*

* **DATABASES** <br>
  *Online databases store structured data, such as customer records or experimental measurements. These databases can be accessed via web interfaces or APIs.*

* **WEB SERVICES** <br>
  *Web servers and web applications are online services that provide interactive access to data enhanced by analytical tools. Web services typically use APIs to retrieve data.*

* **OPEN DATA PORTALS** <br>
  *Open data portals provide access to government or publicly available data. Examples of open data portals include data.gov and the World Bank Data Catalog.*

* **STORAGE PLATFORMS** <br>
  *Online storage platforms, such as Dropbox or Google Drive, allow users to store and share files and data online.*

* **DATA MARKETPLACES** <br>
  *Data marketplaces provide access to datasets for download, often for a fee. These datasets may include data on various topics, such as weather patterns, financial markets, or social media trends.*


# Data download methods

There are various options for downloading data from online resources apart from manual selection and copying. In this section, you can review the available options and then go to a hands-on tutorial for your choice that will make your practical skills stronger.

* [Web browser extensions](#1-web-browser-extensions), manual using of download buttons
* [HTTP(S) interface](#2-http-interface-for-file-transfer), downloading files from websites using the HTTP(S) protocol
* [Command-line tools](#3-command-line-tools), downloading files using commands in the terminal window
* [API](#4-api), interacting with remote resources using HTTP requests
* [Web scraping](#5-web-scraping), extracting data from websites using automated scripts

To help you compare and contrast available methods, please explore the table provided below, which categorize them based on factors such as ease of use, flexibility, and reliability.

| data download method                      | easy of use | flexibility | reliability | automation | command line | programming skills |
|-------------------------------------------|-------------|-------------|-------------|------------|--------------|--------------------|
| Web browser extensions                    | easy        | low         | moderate    | No         | No           | none               |
| HTTP(S) interface for file transfer       | easy        | low         | moderate    | Yes*       | Yes*         | basic*             |
| Command-line tools: wget, curl            | moderate    | high        | moderate    | Yes        | Yes          | basic              |
| APIs (Application Programming Interfaces) | difficult   | high        | high        | Yes        | Yes          | intermediate       |
| Web scraping                              | difficult   | high        | low         | Yes        | Yes          | advanced           |


## *What is an HTTP request?*

*Before we go any further, a few concepts should be explained.* <base class="mb">
When you visit a website, your computer sends a **HTTP request** to the server hosting the website to retrieve the webpage or other content that you want to see. <br>

<div class="example" markdown="1">
*For example, when you enter a URL in your web browser and press "Enter" your browser sends an HTTP request to the server hosting the website associated with that URL, asking for the webpage to be retrieved and displayed in your browser.*
</div>

<div class="note" markdown="1">
An `HTTP request` is a message sent by a client (such as a web browser) to a server (such as a web server) asking for a particular resource or action to be performed. It is a fundamental part of the communication that takes place between clients and servers on the internet, allowing users to access the content and services they need from online resources.
</div>

**HTTP vs. HTTPS**

The primary difference between HTTP and HTTPS is that **HTTP is an unsecured** protocol, while **HTTPS is a secured** protocol that uses encryption to protect data being transmitted between a client and a server. Overall, the use of **HTTPS provides an extra layer of security and is recommended** for transmitting sensitive information over the internet.

<table>
<tr> <th class="center-h plain">HTTP</th> <th class="center-h plain">HTTPS</th> </tr>
<tr>
    <td><i>When data is transmitted over an HTTP connection, it is sent as plain text and can be easily intercepted and read by anyone with access to the network traffic. This makes HTTP vulnerable to various types of attacks, such as man-in-the-middle attacks, eavesdropping, and data theft.</i></td>
    <td><i>HTTPS uses SSL/TLS encryption to protect the data being transmitted. This encryption ensures that the data is kept private and cannot be intercepted or read by unauthorized parties. In addition, HTTPS provides authentication, ensuring that the client is communicating with the intended server and not an imposter.</i></td>
</tr>
</table>

<div class="protip" markdown="1">
Think of it like sending a letter in the mail. With a regular `HTTP request`, your letter would be sent in a plain envelope that anyone could open and read. But with an `HTTPS request`, your letter would be sent in a sealed, tamper-proof envelope that only the intended recipient can open. This ensures that your private information, such as your login credentials or credit card details, are protected while you're browsing the internet.
</div>


## 1. Web browser extensions
<em class="footnote">^ manually in the GUI</em>

Web browser extensions and built-in buttons can be used to download data directly from websites. These extensions typically add a `Download` button to the website, which users can click to download the data.

![01-download_web_button.png]({{ images_path }}/01-download_web_button.png)
<p class="footnote mt-">The figure shows the online interface of the Uniptot Database, accessible at <a href="https://www.uniprot.org" target="_blank">https://www.uniprot.org  ⤴</a>.</p>

<div class="warning" markdown="1">
**Downloading online data by clicking built-in buttons can be time-consuming if you need to download hundreds of files.** This is because clicking on each individual download button requires manual input and takes time to complete. If you need to download a large number of files, this process can become tedious and inefficient.
</div>

<div class="protip" markdown="1">
**In such cases, using a batch download tool can significantly speed up the download process.** <br>
Batch download tools are software or command-line programs that automate the process of downloading multiple files at once. These approaches can be especially useful if the files are hosted on a website that requires user authentication or if the files are only accessible through a complex navigation path on the website. <br> Learn more in the following sections.
</div>


## 2. HTTP interface for file transfer
<em class="footnote">^ manually in the GUI or command line</em>

The HTTPS interface for file transfer can be accessed through a web browser and allows users to download files from a website securely using the HTTP protocol. Typically, it is a website with a **simplified browser of a file system**. Each file in the file system has an assigned URL link. When a **user clicks on a download link** or button, their browser sends a request to the server over an HTTPS connection, which encrypts the data being transferred. The user can then save the downloaded file to their local device.

![01-download_https.png]({{ images_path }}/01-download_https.png)
<p class="footnote mt-">The figure shows a simple HTTPS interface of the shareable file system (ftp) of the Uniprot Database, accessible at <a href="https://ftp.uniprot.org/pub/databases/uniprot/" target="_blank">https://ftp.uniprot.org/pub/databases/uniprot/  ⤴</a>.</p>

This interface is typically used for **downloading voluminous files** that are too large to be sent as email attachments or for **distributing files to a large number of users**. The HTTP(S) protocols are widely supported by web browsers and other HTTP clients, making it an easy and accessible way to distribute files. <br>
One advantage of using an HTTP interface for file transfer is that it **does NOT require any special software** or tools to use. Users only need a web browser and an internet connection to access the interface and download files. Additionally, because the files are downloaded using HTTP, **data can be split into chunks**, allowing for faster and more efficient downloads.

<div class="warning" markdown="1">
Some websites might ask users to sign in or verify their identity before permitting them to download files.
</div>

Downloading via HTTP(S) interface for file transfer is **possible both manually** on the web interface **and from the command line** using command-line tools like `curl` or `wget` followed by the URL to the downloaded file. *After right-clicking on the selected file, select the "Copy Link" option from the pop-up dialog box.*

```bash
wget https://ftp.uniprot.org/pub/databases/uniprot/README
```

<button class="btn more"></button> *...about command-line tools for online downloading in the [next section](#command-line-tools).*


## 3. Command-line tools
<em class="footnote">^ command line</em>

Command-line tools are powerful and flexible, allowing users to download data with a few simple commands. The tools include `curl` and `wget` commands that can be used to download data directly from online resources by sending requests to the resource's URL. These commands use both [HTTP and HTTPS requests](#what-is-an-HTTP-request). By default, they use HTTP requests, but you can specify the use of HTTPS requests by adding the "s" to the end of the "http" in the URL.

<div class="protip" markdown="1">
Whether you are a data analyst, researcher, or developer, knowing how to use command-line tools for downloading data can be a valuable skill that saves time and improves productivity.
</div>

### <b class="prefix-2">WGET</b>

`wget` is a popular command-line tool used for downloading files from the web. It is available for Linux, macOS, and Windows. To use `wget`, you simply need to specify the URL of the file you want to download.

For example, to download a file from a website, you can use the following command in the terminal:
```bash
wget https://ftp.uniprot.org/pub/databases/uniprot/README
```

<pre class="output">
--2024-05-10 15:40:10--  https://ftp.uniprot.org/pub/databases/uniprot/README
Resolving ftp.uniprot.org (ftp.uniprot.org)... 128.175.240.195
Connecting to ftp.uniprot.org (ftp.uniprot.org)|128.175.240.195|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 3997 (3.9K)
Saving to: ‘README’

README              100%[========================================>]   3.90K  --.-KB/s    in 0s

2024-05-10 15:40:11 (424 MB/s) - ‘README’ saved [3997/3997]

<b class="prompt-3"></b><b class="prompt-1 before" data-before="ls"></b>
README
</pre>

<button class="btn more"></button> *...from practical examples in the tutorial: <a class="t-links" href="713.1">Downloading Online Data using WGET</a>*


### <b class="prefix-2">CURL</b>

`curl` is another popular command-line tool for downloading files from the web. It is available for Linux, macOS, and Windows. To use `curl`, you need to specify the URL of the file you want to download, and then save the file to a local location.

For example, to download a file and save it to a local directory, you can use the following command:
```bash
curl -o local_README https://ftp.uniprot.org/pub/databases/uniprot/README
```

<pre class="output">
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                               Dload  Upload   Total   Spent    Left  Speed
100  3997  100  3997    0     0  10702      0 --:--:-- --:--:-- --:--:-- 10715

<b class="prompt-3"></b><b class="prompt-1 before" data-before="ls"></b>
README       local_README
</pre>


### <span class="prefix-2">Batch Download</span>

Both commands, `wget` and `curl` are popular **command-line utility for batch downloading** files from the web. They support downloading files from FTP, HTTP, and HTTPS protocols. This is available for many operating systems, including Windows, Linux, and macOS.

To use `wget` (or `curl`) for batch downloading, you can create a text file that contains a list of URLs to download, with each URL on a separate line. <br>
*For example copy-paste the following URLs to the* `download_list.txt` *file:*
<code class="code-block bc-data">https://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/reference_proteomes/Archaea/UP000000242/UP000000242_399549.fasta.gz
https://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/reference_proteomes/Bacteria/UP000000212/UP000000212_1234679.fasta.gz
https://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/reference_proteomes/Eukaryota/UP000000226/UP000000226_3885.fasta.gz
https://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/reference_proteomes/Viruses/UP000000216/UP000000216_1235689.fasta.gz
</code>
<p class="footnote mt-">Reference proteomes provided by UniProt are a representative subset
of the complete proteomic content of well-studied model organisms and other species
of scientific interest, curated to help in functional annotation and discovery.</p>

Then, use the `wget` command with the `-i` option to download all the files listed in your text file `download_list.txt`:
```bash
wget -i download_list.txt
```

<pre class="output">
<b class="prompt-2"></b>
UP000000242_399549.fasta.gz             100%[======================>] 449.07K  1.30MB/s   in 0.3s
UP000000212_1234679.fasta.gz            100%[======================>] 711.82K  2.90MB/s   in 0.2s
UP000000226_3885.fasta.gz               100%[======================>]   7.49M  14.3MB/s   in 0.5s
UP000000216_1235689.fasta.gz            100%[======================>]   9.68K  --.-KB/s   in 0s

<b class="prompt-3"></b><b class="prompt-1 before" data-before="ls"></b>
download_list.txt
UP000000216_1235689.fasta.gz    UP000000242_399549.fasta.gz
UP000000212_1234679.fasta.gz    UP000000226_3885.fasta.gz
</pre>

<div class="more" markdown="1">
Follow more practical examples of batch download in the section <a class="t-links" href="713.1" section="#wget-for-multiple-files-and-directories">wget for multiple files and directories</a> in the hands-on tutorial: <a class="t-links" href="713.1">Downloading Online Data using WGET</a>.
</div>


## 4. API
<em class="footnote">^ command line or programming</em>

API (Application Programming Interface) is a set of protocols, tools, and standards for building software applications. APIs allow professional developers to **access data from websites and online resources programmatically** in a standardized way to enable different web applications to interact with each other and share data. This approach can be used for the extraction of data from various sources, such as social media platforms, financial data providers, and weather services.

**APIs are also commonly used in scientific web services** to allow researchers to access and interact with data in another way than manually in the web-based GUI. Many scientific web services provide APIs that facilitate researchers to automate data retrieval and analysis, and to integrate data from multiple sources into their research workflows.

<div class="note" markdown="1">
APIs are a standardized way for web services to expose data and functionality to other applications. <br> While many websites and web services provide APIs that can be used to retrieve data, **NOT all websites have APIs available for public use**. <base class="mb">
In cases where a website or web service does not provide an API, you may need to **use web scraping** (see [section below](#5-web-scraping)) or other techniques to retrieve data from the website.
</div>

### *How to get started?*

Using APIs can be challenging for a beginner or someone with no programming experience, but it depends on the specific API and the user's goals. In general, **using an API in the command line** is similar to using `wget` or `curl` commands, as both **involve making HTTP requests to a web server** and receiving data in response. *In fact, both* `wget` *and* `curl` *commands can be used to make HTTP requests to an API endpoint and retrieve data in the same way as using a programming language.*

<div class="protip" markdown="1">
Using terminal and commands to interact with an API can be a good way to quickly start, test an API, and retrieve raw data. Whether you are a beginner or an experienced researcher, **learning how to use APIs can help you save time and improve the efficiency and reproducibility of your research**.
</div>

**Using a programming language to interact with an API** provides more flexibility and functionality than using simple commands alone. With a programming language, you can write scripts to automate data retrieval and analysis, parse data into a more usable format, and integrate data from multiple sources into your research workflows.


## 5. Web scraping
<em class="footnote">^ requires programming</em>

Web scraping involves extracting data from websites by analyzing the website's HTML (source code) and identifying specific elements that contain the desired information. Web scraping can be done using **Python programming** language and dedicated libraries such as <a href="https://pypi.org/project/beautifulsoup4/" target="_blank">Beautiful Soup  ⤴</a>, <a href="https://pypi.org/project/Scrapy3/" target="_blank">Scrapy  ⤴</a>, or <a href="https://pypi.org/project/selenium/" target="_blank">Selenium  ⤴</a>. **Web scraping can be more complex and less reliable than using an API** [see section above](#4-api).

<div class="warning" markdown="1">
Web scraping is a more advanced task that **requires a higher level of technical knowledge and programming skills** than simple file transfers or API requests. In particular, it is recommended that those taking up the web scraping challenge have a basic understanding of Python before attempting to scrape websites.
</div>

**The challenges of web scraping** are primarily related to the fact that websites are designed for human consumption, and so the structure and format of the data on a website can be complex and inconsistent. As a result, web scraping often **requires the use of advanced techniques** like regular expressions and parsing algorithms to extract the desired data from a website.

<div class="protip" markdown="1">
Before attempting to scrape a website for data, it is often a good idea to **explore other options for downloading the data first**. Many online resources provide APIs or other tools for accessing their data, and their developers may be willing to help you find the best method for accessing the data you need. In some cases, **reaching out to the website admins directly** may be the easiest and fastest way.
</div>

<div class="more" markdown="1">
If you have exhausted all other options for obtaining the data you need or if web scraping is a topic that interests you, exploring the hands-on tutorial <a class="t-links" href="713.3">Downloading online data using Python-based web scraping</a> provided in this workbook, may be a good next step.
</div>
