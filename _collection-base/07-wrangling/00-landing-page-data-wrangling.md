---
title: "07:  Data Acquisition and Wrangling"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "landing-page"
level: 0
categories: []
tags: []
---


{% include toc %}
{% include images_path %}

Information is the foundation of the learning process. Data acquisition and wrangling are crucial parts of Data Science that lead to extracting knowledge from the information. With large, difficult to transfer data, remote access is the rule, almost exclusively via a command-line interface. Luckily for you, knowing a few tricks make it easy to access and visualize data in a friendly way on a remote machine. As you explore this section, you will also learn how to manage Excel spreadsheets and efficiently manipulate massive data with Python.


## <span style="color: #8997c1;">Table of contents</span>

### **<a href="01-FILE-ACCESS/01-remote-data-access" style="color: #24376b;">1. Remote Data Access</a>**
* <a href="01-FILE-ACCESS/02-0-remote-data-transfer" style="color: #3f5a8a;">1.1 Remote Data Transfer</a>
  * <a href="01-FILE-ACCESS/02-1-tutorial-copy-globus" style="color: #3f5a8a;">1.1.1 Copying Data using Graphical Interface: Globus</a>
  * <a href="01-FILE-ACCESS/02-2-tutorial-copy-ssh" style="color: #3f5a8a;">1.1.2 Copying Data via SSH using Command Line: scp, rsync</a>
  * <a href="01-FILE-ACCESS/02-3-tutorial-transfer-irods" style="color: #3f5a8a;">1.1.3 File Transfer using irods</a>
* <a href="01-FILE-ACCESS/03-0-remote-data-download" style="color: #3f5a8a;">1.2 Remote Data Download</a>
  * <a href="01-FILE-ACCESS/03-1-tutorial-download-wget" style="color: #3f5a8a;">1.2.1 Downloading Online Data using WGET</a>
  * <a href="01-FILE-ACCESS/03-2-tutorial-download-web-scraping" style="color: #3f5a8a;">1.2.2 Downloading Online Data using Web Scraping</a>
  * <a href="01-FILE-ACCESS/03-3-tutorial-download-github-repos-git" style="color: #3f5a8a;">1.2.3 Downloading Online GitHub Repos using GIT</a>
  * <a href="01-FILE-ACCESS/03-4-tutorial-download-github-folders-svn" style="color: #3f5a8a;">1.2.4 Downloading Single Folder from GitHub using SVN</a>
* <a href="01-FILE-ACCESS/04-0-remote-data-preview" style="color: #3f5a8a;">1.3 Remote Data Preview without Downloading</a>
  * <a href="01-FILE-ACCESS/04-1-tutorial-view-text-files-unix" style="color: #3f5a8a;">1.3.1 Viewing Text Files using UNIX commands</a>
  * <a href="01-FILE-ACCESS/04-2-tutorial-view-pdf-files-x11" style="color: #3f5a8a;">1.3.2 Viewing PDF Files using X11 SSH connection </a>
  * <a href="01-FILE-ACCESS/04-3-tutorial-view-graphic-files-terminal" style="color: #3f5a8a;">1.3.3 Viewing graphics in a terminal as the text-based ASCII art </a>
  * <a href="01-FILE-ACCESS/04-4-tutorial-mount-remote-folder" style="color: #3f5a8a;">1.3.4 Mounting Remote Folder on Local Machine</a>

### **<a href="02-DATA-MANIPULATION/01-data-manipulation" style="color: #24376b;">2. Data Manipulation</a>**
* <a href="02-DATA-MANIPULATION/01-EXCEL/01-manipulate-excel-sheets" style="color: #3f5a8a;">2.1 Manipulating Excel Data Sheets</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/02-tutorial-create-workbook-from-multiple-files" style="color: #3f5a8a;">2.1.1 Create Workbook from Multiple Text Files</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/03-tutorial-export-multiple-worksheets" style="color: #3f5a8a;">2.1.2 Export Multiple Worksheets as Separate Text Files</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/04-tutorial-create-index-for-all-worksheets" style="color: #3f5a8a;">2.1.3 Create Index for All Worksheets</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/05-tutorial-merge-spreadsheets-by-column" style="color: #3f5a8a;">2.1.4 Merge Two Spreadsheets using a Common Column</a>
* <a href="02-DATA-MANIPULATION/02-PYTHON/01-manipulate-data-with-python" style="color: #3f5a8a;">2.2 Manipulating Text Files with Python</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/02-tutorial-read-write-split-select-data" style="color: #3f5a8a;">2.2.1 Read, Write, Split, Select Data</a>

### **<a href="03-DATA-WRANGLING-APPS/00-data-wrangling-apps" style="color: #24376b;">3. Data Wrangling: ready-made apps</a>**
  * <a href="03-DATA-WRANGLING-APPS/01-merge-data-py" style="color: #3f5a8a;">3.1 Merge files by common column (python)</a>
  * <a href="03-DATA-WRANGLING-APPS/02-slice-or-bin-data-py" style="color: #3f5a8a;">3.2 Aggregate data over slicing variations (python)</a>


---

[Homepage](../index.md){: .btn  .btn--primary}
[Prior Section](../06-IntroToHPC/00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Next Section](../08-DataVisualization/00-DataVisualization-LandingPage){: .btn  .btn--primary}
