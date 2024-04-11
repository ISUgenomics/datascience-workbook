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
{% include page-sourcing.html %}


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

To learn more about manipulating Excel data sheets, you can visit the following website: <a href="https://support.microsoft.com/en-us/office/basic-tasks-in-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca" target="_blank">Basic tasks in Excel  ⤴</a> *by Microsoft*.
<span style="color: #ff3870;font-weight: 500;">Explore practical examples in the hands-on tutorials available in this workbook:</span>

<ul><li><b>INTRODUCTION:</b> <a class="t-links" href="721.1"></a> </li>
<li><b>TUTORIALS:</b></li>
  <ul><li> <a class="t-links" href="721.2"></a></li>
  <li> <a class="t-links" href="721.3"></a></li>
  <li> <a class="t-links" href="721.4"></a></li>
  <li> <a class="t-links" href="721.5"></a></li></ul></ul>


## Python

<a href="https://www.python.org/shell/" target="_blank">Python  ⤴</a> is a powerful programming language widely used for **advanced data analysis, statistics, and interactive visualization**, particularly for working with large text files. Python offers a rich set of libraries and modules that can be used to manipulate text files, including:
<ul>
<li> <a class="t-links" href="536" button="true">Tutorial</a> <a href="https://pandas.pydata.org/" target="_blank">Pandas</a>, a Python library for efficient data structure manipulation and analysis </li>
<li> <a class="t-links" href="537" button="true">Tutorial</a> <a href="https://numpy.org/" target="_blank">NumPy</a>, a Python library for computing and data structure transformation </li>
<li> <a class="t-links" href="538" button="true">Tutorial</a> <a href="https://www.scipy.org/" target="_blank">SciPy</a>, a Python library for scientific computing and statistics </li>
<li> <a class="t-links" href="535" button="true">Tutorial</a>
<li> <a class="t-links" href=""> button="true"><span class="c-alert">Comming soon</span></a> <a href="https://docs.python.org/3/library/re.html" target="_blank">Regex</a>, a Python module for working with regular expressions </li>
<li> <a class="t-links" href="534" button="true">Tutorial</a> <a href="https://docs.python.org/3/library/json.html" target="_blank">JSON</a>, a Python module for working with data in JSON format </li>
</ul>

With these libraries, you can manipulate large text files, clean and transform data, perform statistical analysis, and format the the output.

<span style="color: #ff3870;font-weight: 500;">To learn more about manipulating large text files with Python, you can visit the following tutorials in this workbook:</span>

<ul><li><b>INTRODUCTION:</b></li><ul>
  <li> <a class="t-links" href="420"></a> </li>
  <li> <a class="t-links" href="531"></a> </li></ul>
<li><b>TUTORIALS:</b></li><ul>
  <li> <a class="t-links" href="423"></a> </li>
  <li> <a class="t-links" href="533"></a> </li>
  <li> <a class="t-links" href="722.1"></a> </li>
  <li> <a class="t-links" href="731"></a> </li>
  <li> <a class="t-links" href="822.01"></a> </li>
</ul></ul>


## R

<a href="https://www.r-project.org" target="_blank">R  ⤴</a> is another popular programming language used for **statistical analysis and simple data visualization**. It provides several libraries and functions for data manipulation, including:
* <a href="https://dplyr.tidyverse.org/" target="_blank">dplyr  ⤴</a>, an R package for data filtering, selecting, arranging, and summarizing
* <a href="https://tidyr.tidyverse.org/" target="_blank">tidyr  ⤴</a>, an R package for data cleaning, reshaping and tidying
* <a href="https://cran.r-project.org/web/packages/reshape2/index.html" target="_blank">reshape2  ⤴</a>, an R package for data manipulation and reshaping

With these libraries, you can manipulate and transform data, filter, select, and summarize data.

<span style="color: #ff3870;font-weight: 500;">To learn more about manipulating data for a quick statistical analysis with R, you can visit the following tutorials in this workbook:</span>

<ul><li><b>INTRODUCTION:</b></li><ul>
  <li> <a class="t-links" href="430"></a> </li>
  <li> <a class="t-links" href="541"></a> </li></ul>
<li><b>TUTORIALS:</b></li><ul>
  <li> <a class="t-links" href="432"></a> </li>
  <li> <a class="t-links" href="823.01"></a> </li>
</ul></ul>


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
