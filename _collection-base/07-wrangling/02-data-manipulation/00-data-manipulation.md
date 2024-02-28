---
title: "Data manipulation"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "intro"
order: 720
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / **2. Data Manipulation**

---


# Introduction

Data manipulation refers to the process of **transforming and organizing data** to make it more useful for analysis, reporting, meeting specific research requirements. It is a crucial step in data analysis, as it **enables researchers to extract valuable insights** from raw data.
<span style="color: #ff3870;font-weight: 500;">This process often involves cleaning, merging, restructuring, or summarizing data, among other tasks.</span> <br>
There are many tools and techniques available to help researchers effectively manipulate and analyze their data. Whether working with Excel, Python, R, SQL, or other specialized tools, researchers should carefully consider their data manipulation needs and **choose the tools and techniques that best suit the research goals**.

<p align="center" style="width:100%; display:inline-block; font-weight:600">Try out any of the tools quickly online!</p>
<p align="center" style="width:49%; display:inline-block;">
  EXCEL<br>
  <a href="https://www.google.com/sheets/about/" target="_blank">Google Sheets online  ⤴</a><br>
  Microsoft Excel GUI
</p>
<p align="center" style="width:49%; display:inline-block;">
  SQL <br>
  <a href="https://www.programiz.com/sql/online-compiler/" target="_blank">www.programiz.com/sql  ⤴</a><br>
  SQL programming language
</p>

![02_data_manipulation_tools1.png]({{ images_path }}/02_data_manipulation_tools1.png)<br>


<p align="center" style="width:49%; display:inline-block;">
  PYTHON <br>
  <a href="https://www.python.org/shell/" target="_blank">www.python.org/shell/  ⤴</a><br>
  Python programming language
</p>
<p align="center" style="width:49%; display:inline-block;">
  R <br>
  <a href="https://rdrr.io/snippets/" target="_blank">https://rdrr.io/snippets/  ⤴</a><br>
  R programming language
</p>

![02_data_manipulation_tools2.png]({{ images_path }}/02_data_manipulation_tools2.png)<br>




## Excel

One of the most common **tools with a graphical user interface** (GUI) used for data manipulation and analysis is <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank">Microsoft Excel  ⤴</a>. Excel offers a wide range of built-in features for organizing and analyzing data, including:
* sorting,
* filtering,
* merging and splitting data, and
* calculating functions.

By using these features, researchers can quickly and easily manipulate data sheets to create summaries, charts, and reports.

To learn more about manipulating Excel data sheets, you can visit the following website: <a href="https://support.microsoft.com/en-us/office/basic-tasks-in-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca" target="_blank">Basic tasks in Excel  ⤴</a> *by Microsoft*. <br>
<span style="color: #ff3870;font-weight: 500;">Explore practical examples in the hands-on tutorials available in this workbook:</span>
* **INTRODUCTION:** <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-EXCEL/01-manipulate-excel-sheets" target="_blank">Manipulating Excel Data Sheets  ⤴</a>
* **TUTORIALS:**
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-EXCEL/02-tutorial-create-workbook-from-multiple-files" target="_blank">Create Workbook from Multiple Text Files  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-EXCEL/03-tutorial-export-multiple-worksheets" target="_blank">Export Multiple Worksheets as Separate Text Files  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-EXCEL/04-tutorial-create-index-for-all-worksheets" target="_blank">Create Index for All Worksheets  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/01-EXCEL/05-tutorial-merge-spreadsheets-by-column" target="_blank">Merge Two Spreadsheets using a Common Column  ⤴</a>


## Python

<a href="https://www.python.org/shell/" target="_blank">Python  ⤴</a> is a powerful programming language widely used for **advanced data analysis, statistics, and interactive visualization**, particularly for working with large text files. Python offers a rich set of libraries and modules that can be used to manipulate text files, including:
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/06-tutorial-python-data-manipulation-pandas" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://pandas.pydata.org/" target="_blank">Pandas</a>, a Python library for efficient data structure manipulation and analysis
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/07-tutorial-python-array-manipulation-numpy" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://numpy.org/" target="_blank">NumPy</a>, a Python library for computing and data structure transformation
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/08-tutorial-python-apply-statistics-scipy" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://www.scipy.org/" target="_blank">SciPy</a>, a Python library for scientific computing and statistics
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/05-tutorial-python-round-abs-data-math-module" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://docs.python.org/3/library/math.html" target="_blank">Math</a>, a Python module for mathematical operations
* <a href="https://" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://docs.python.org/3/library/re.html" target="_blank">Regex</a>, a Python module for working with regular expressions
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/04-tutorial-python-manage-data-json-string" target="_blank"><input type="button" value="Tutorial ⤴" style="background-color: #e7e7e7; color: black;" /></a> <a href="https://docs.python.org/3/library/json.html" target="_blank">JSON</a>, a Python module for working with data in JSON format

With these libraries, you can manipulate large text files, clean and transform data, perform statistical analysis, and format the the output.

<span style="color: #ff3870;font-weight: 500;">To learn more about manipulating large text files with Python, you can visit the following tutorials in this workbook:</span>
* **INTRODUCTION:**
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment" target="_blank">Python Programming Environment(s)  ⤴</a>
  * <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a>
* **TUTORIALS:**
  * <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/02-Python-setup" target="_blank">Python Setup  ⤴</a>
  * <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/03-tutorial-read-write-files" target="_blank">Read and Write Data Files  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/02-PYTHON/01-manipulate-data-with-python" target="_blank">Manipulating Text Files with Python  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/00-data-wrangling-apps" target="_blank">Data Wrangling: ready-made apps  ⤴</a>
  * <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/02-PYTHON/01-interactive-graphing-with-python" target="_blank">Plotly-Dash: Data Processing & Interactive Plotting with Python  ⤴</a>


## R

<a href="https://www.r-project.org" target="_blank">R  ⤴</a> is another popular programming language used for **statistical analysis and simple data visualization**. It provides several libraries and functions for data manipulation, including:
* <a href="https://dplyr.tidyverse.org/" target="_blank">dplyr  ⤴</a>, an R package for data filtering, selecting, arranging, and summarizing
* <a href="https://tidyr.tidyverse.org/" target="_blank">tidyr  ⤴</a>, an R package for data cleaning, reshaping and tidying
* <a href="https://cran.r-project.org/web/packages/reshape2/index.html" target="_blank">reshape2  ⤴</a>, an R package for data manipulation and reshaping

With these libraries, you can manipulate and transform data, filter, select, and summarize data.

<span style="color: #ff3870;font-weight: 500;">To learn more about manipulating data for a quick statistical analysis with R, you can visit the following tutorials in this workbook:</span>
* **INTRODUCTION:**
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03-r-programming-environment" target="_blank">R Programming Environment(s)  ⤴</a>
  * <a href="https://datascience.101workbook.org/05-IntroToProgramming/04-R/01-introduction-to-R" target="_blank">Introduction to R programming  ⤴</a>
* **TUTORIALS:**
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03A-tutorial-setting-up-rstudio" target="_blank">Setting Up RStudio  ⤴</a>
  * <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/03-R/01-graphing-with-rstudio" target="_blank">Data Processing & Plotting with R  ⤴</a>



## SQL

<a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank">SQL  ⤴</a> (Structured Query Language) is a powerful language used for **managing and manipulating relational databases**. It provides several functions and commands for data manipulation, including `SELECT`, `INSERT`, `UPDATE`, and `DELETE`. With SQL, you can manipulate data stored in a database, extract data, and perform statistical analysis.

To learn more about SQL, you can visit the website <a href="https://www.w3schools.com/sql/default.asp" target="_blank">https://www.w3schools.com/sql/default.asp</a>


## Other tools for data manipulation in research projects

In addition to the above tools and languages, there are several other specialized software for data manipulation in research projects, including:

| software | description |
|----------|-------------|
|<a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB  ⤴</a> |programming language and environment for numerical computing and data analysis|
|<a href="https://www.sas.com/en_us/software.html" target="_blank">SAS  ⤴</a> |statistical software suite for data management, analysis, and visualization|
|<a href="https://openrefine.org/" target="_blank">OpenRefine  ⤴</a> |tool for cleaning and transforming messy data|
|<a href="https://www.tableau.com/" target="_blank">Tableau  ⤴</a> |tool for data visualization and manipulation|



___
# Further Reading
* [2.1 Manipulating Excel Data Sheets](01-EXCEL/01-manipulate-excel-sheets)
* [2.2 Manipulating Text Files with Python](02-PYTHON/01-manipulate-data-with-python)

* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](../01-FILE-ACCESS/04-4-tutorial-mount-remote-folder){: .btn  .btn--primary}
[Next](01-EXCEL/01-manipulate-excel-sheets){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
