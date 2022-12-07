---
title: "Data Acquisition and Wrangling"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

The acquisition and management of data is a crucial aspect of Data Science. Through proper data wrangling, we can extract valuable knowledge from the vast amounts of information available. In many cases, access to large, difficult-to-transfer data is only possible through a remote command-line interface. However, with the right techniques and tools, it is possible to easily access and visualize this data in a user-friendly manner. In this section, we will cover how to handle Excel spreadsheets and efficiently manipulate massive data sets using Python. Overall, a solid understanding of information and data management is the foundation of the learning process.


## <span style="color: #8997c1;">Table of contents</span>

### **<a href="01-FILE-ACCESS/01-remote-data-access" style="color: #24376b;">1. Remote Data Access</a>**
* <a href="01-FILE-ACCESS/02-0-remote-data-transfer" style="color: #3f5a8a;">1.1 Remote Data Transfer</a>
  * <a href="01-FILE-ACCESS/02-1-tutorial-copy-ssh" style="color: #3f5a8a;">Tutorial: Copying Data using SSH</a>
  * <a href="01-FILE-ACCESS/02-2-tutorial-copy-globus" style="color: #3f5a8a;">Tutorial: Copying Data using Globus</a>
  * <a href="01-FILE-ACCESS/02-3-tutorial-transfer-irods" style="color: #3f5a8a;">Tutorial: File Transfer using irods</a>
  * <a href="01-FILE-ACCESS/02-4-tutorial-transfer-sra" style="color: #3f5a8a;">Tutorial: File Transfer using SRA Toolkit</a>
  * <a href="01-FILE-ACCESS/02-5-tutorial-download-wget" style="color: #3f5a8a;">Tutorial: Downloading Online Data using WGET</a>
  * <a href="01-FILE-ACCESS/02-6-tutorial-download-web-scraping" style="color: #3f5a8a;">Tutorial: Downloading Online Data using Web Scraping</a>
  * <a href="01-FILE-ACCESS/02-7-tutorial-download-github-repos-git" style="color: #3f5a8a;">Tutorial: Downloading Online GitHub Repos using GIT</a>
  * <a href="01-FILE-ACCESS/02-8-tutorial-download-github-folders-svn" style="color: #3f5a8a;">Tutorial: Downloading Online GitHub Folders using SVN</a>
* <a href="01-FILE-ACCESS/03-0-remote-data-preview" style="color: #3f5a8a;">1.2 Remote Data Preview without Downloading</a>
  * <a href="01-FILE-ACCESS/03-1-tutorial-view-text-files-unix" style="color: #3f5a8a;">Tutorial: Viewing Text Files using UNIX commands</a>
  * <a href="01-FILE-ACCESS/03-2-tutorial-view-pdf-files-x11" style="color: #3f5a8a;">Tutorial: Viewing PDF Files using X11 SSH connection </a>
  * <a href="01-FILE-ACCESS/03-3-tutorial-mount-remote-folder" style="color: #3f5a8a;">Tutorial: Mounting Remote Folder on Local Machine</a>

### **<a href="02-DATA-MANIPULATION/01-data-manipulation" style="color: #24376b;">2. Data Manipulation</a>**
* <a href="02-DATA-MANIPULATION/01-EXCEL/01-manipulate-excel-sheets" style="color: #3f5a8a;">2.1 Manipulating Excel Data Sheets</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/02-tutorial-create-workbook-from-multiple-files" style="color: #3f5a8a;">Create Workbook from Multiple Text Files</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/03-tutorial-export-multiple-worksheets" style="color: #3f5a8a;">Export Multiple Worksheets as Separate Text Files</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/04-tutorial-create-index-for-all-worksheets" style="color: #3f5a8a;">Create Index for All Worksheets</a>
  * <a href="02-DATA-MANIPULATION/01-EXCEL/05-tutorial-merge-spreadsheets-by-column" style="color: #3f5a8a;">Merge Two Spreadsheets using a Common Column</a>
* <a href="02-DATA-MANIPULATION/02-PYTHON/01-manipulate-data-with-python" style="color: #3f5a8a;">2.2 Manipulating Text Files with Python</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/02-tutorial-read-write-split-select-data" style="color: #3f5a8a;">Tutorial: Read, Write, Split, Select Data</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/03-tutorial-python-manage-data-json-string" style="color: #3f5a8a;">Tutorial: JSON Module - Encoding & Decoding JSON Data</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/04-tutorial-python-round-abs-data-math-module" style="color: #3f5a8a;">Tutorial: Math Module - Various Mathematical Functions</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/05-tutorial-python-data-manipulation-pandas" style="color: #3f5a8a;">Tutorial: Math Module - Pandas Library - Data Structure Manipulation Tool</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/06-tutorial-python-array-manipulation-numpy" style="color: #3f5a8a;">Tutorial: Math Module - Numpy Library - Multi-Dimensional Arrays Parser</a>
  * <a href="02-DATA-MANIPULATION/02-PYTHON/07-tutorial-python-apply-statistics-scipy" style="color: #3f5a8a;">Tutorial: SciPy Library - Algorithms for Scientific Computing</a>

### **<a href="03-DATA-WRANGLING-APPS/00-data-wrangling-apps" style="color: #24376b;">3. Data Wrangling: ready-made apps</a>**
  * <a href="03-DATA-WRANGLING-APPS/01-merge-data-py" style="color: #3f5a8a;">3.1 Merge files by common column (python)</a>
  * <a href="03-DATA-WRANGLING-APPS/02-slice-or-bin-data-py" style="color: #3f5a8a;">3.2 Aggregate data over slicing variations (python)</a>


---

[Homepage](../index.md){: .btn  .btn--primary}
[Prior Section](../06-IntroToHPC/00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Next Section](../08-DataVisualization/00-DataVisualization-LandingPage){: .btn  .btn--primary}
