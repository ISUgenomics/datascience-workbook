---
title: "Manipulating Excel data sheets"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "intro"
order: 721.1
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

**Manipulating data in spreadsheets refers to the process of changing, organizing, and analyzing data in a tabular format.** This can involve tasks such as:
* formatting data,
* sorting and filtering data,
* performing calculations and analyses,
* and creating charts and graphs to visualize data.

<div class="note" markdown="1">
A spreadsheet is a software program used to organize and manipulate data in a tabular format, consisting of rows and columns. Spreadsheets are commonly used for tasks such as financial analysis, budgeting, data management, and project tracking.
</div>

Spreadsheet software such as **Excel**, **Google Sheets**, and **LibreOffice Calc** offer a graphical interface that allows users to easily work with data and manipulate it using a range of tools and functions. This interface typically includes a grid of cells where data can be entered and edited, as well as menus and toolbars that provide access to various functions and features.

![02_data_manipulation_excel_sheet.png]({{ images_path }}/02_data_manipulation_excel_sheet.png)

<div class="protip" markdown="1">
While **spreadsheet software offers a user-friendly graphical interface** (GUI) for manipulating data, they may not be as efficient as Python-based approaches when it comes to handling large datasets or performing complex analyses. **Python-based approaches**, on the other hand, **can be more efficient** when working with large amounts of data and can automate many tasks using scripts and programming in the command-line interface (CLI).
</div>

## Data Sheets Software

There are several different software programs that can be used to create and work with spreadsheets, each with its own unique features and capabilities. Some popular examples include:

### 1. Microsoft Excel

This is one of the most widely used spreadsheet programs and is part of the Microsoft Office suite. It is available for both **Windows and Mac** operating systems and provides a wide range of features and tools for managing and analyzing data. <br>
<span style="color: #ff3870;font-weight: 500;">Learn more at the official <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank">Excel website  ⤴</a>.</span>

### 2. Google Sheets

This is a **web-based spreadsheet program** developed by Google and is free to use. It can be accessed from any device with an internet connection and provides real-time collaboration features that allow multiple users to work on the same spreadsheet simultaneously. <br>
<span style="color: #ff3870;font-weight: 500;">Learn more at the official <a href="https://www.google.com/sheets/about/" target="_blank">Google Sheets website  ⤴</a>.</span>

### 3. LibreOffice Calc

This is a free and open-source spreadsheet program that is available for **Windows, Mac, and Linux** operating systems. It provides a wide range of features and tools for managing and analyzing data, and can import and export data in a variety of formats. <br>
<span style="color: #ff3870;font-weight: 500;">Learn more at the official <a href="https://www.libreoffice.org/discover/calc/" target="_blank">LibreOffice Calc website  ⤴</a>.</span>

### 4. Apple Numbers

This is a spreadsheet program developed by Apple and is available **exclusively for Mac** operating systems. It provides a range of features and tools for managing and analyzing data, and integrates seamlessly with other Apple applications. <br>
<span style="color: #ff3870;font-weight: 500;">Learn more at the official <a href="https://www.apple.com/numbers/" target="_blank">Apple Numbers website  ⤴</a>.</span>

Here is a table outlining some of the key similarities and differences between these tools:

| Feature        | Excel | Google Sheets | LibreOffice Calc | Apple Numbers |
|----------------|-------|---------------|------------------|---------------|
| Platforms      | Windows, Mac | web-based | Windows, Mac, Linux | Mac |
| Cost           | Requires a license fee | Free to use | Free and open-source | Included with Mac OS |
| Collaboration  | Limited real-time collaboration | Real-time collaboration | Real-time collaboration | Real-time collaboration |
| Functionality  | Advanced features and tools for data analysis | Basic features and tools for data analysis | Similar functionality to Excel | Simplified interface and features |
| Integration    | Integrates well with other Microsoft Office applications | Integrates with other Google apps | Supports importing and exporting files in various formats | Integrates with other Apple apps |
| Macros and Scripting | Supports VBA and macro programming | Limited macro support and scripting capabilities | Supports macro programming and basic scripting | Basic automation features and scripting capabilities |
| Templates      | Wide range of templates available | Limited template selection | Limited template selection | Wide range of templates available |
| Charting       | Advanced charting capabilities | Basic charting capabilities | Similar charting capabilities to Excel | Simplified charting capabilities |
| Mobile Support | Available on mobile devices through mobile apps | Optimized for use on mobile devices | Limited mobile support | Optimized for use on mobile devices |


# Manipulating data in Sheets

Manipulating data in spreadsheets is an essential task in scientific projects and research. Scientists and researchers often collect and organize large amounts of data in spreadsheets, which they then use to perform statistical analyses and create visualizations that help them gain insights into their data.

To manipulate data in a spreadsheet, users can use a wide range of **built-in functions and formulas**, which allow them to perform complex calculations and analyses on data. *For example, users can use functions to find the sum, average, minimum, or maximum value in a range of cells, or to count the number of cells that meet specific criteria.*

<div class="protip" markdown="1">
Overall, manipulating data in spreadsheets is a critical task in scientific projects and research, and requires careful attention to detail, strong analytical skills, and a deep understanding of spreadsheet functions, formulas, and tools.
</div>


Some common tasks involved in manipulating data in spreadsheets in the context of scientific projects and research include:

**1. Data Entry**

Scientists and researchers may enter data into a spreadsheet manually or import it from other sources, such as laboratory equipment, data loggers, or online databases.

**2. Data Cleaning**

Before analyzing data, it is important to ensure that it is clean and accurate. Scientists and researchers may need to remove duplicates, correct errors, and fill in missing data points. Users can also sort and filter data in a spreadsheet, which allows them to quickly find and analyze data that meets specific criteria. For example, users can sort data by date, alphabetically, or by numerical value, or filter data to show only rows that meet specific conditions.

**3. Data Formatting**

Scientists and researchers may need to format their data to make it easier to read and analyze. This may involve adjusting column widths, formatting dates and times, or adding conditional formatting to highlight specific data points.

**4. Data Analysis**

Scientists and researchers may use built-in functions and formulas in spreadsheets to perform statistical analyses on their data. This may include calculating means, medians, and standard deviations, performing t-tests and ANOVA, and creating regression models.

**5. Data Visualization**

Scientists and researchers may use charts and graphs to visualize their data and gain insights into patterns and trends. This may involve creating scatter plots, line charts, histograms, or heat maps, depending on the type of data being analyzed.


## Manipulating Excel Data Sheets

Excel is a spreadsheet program developed by Microsoft that is widely used for organizing, analyzing, and presenting data in a tabular format. It is a part of the Microsoft Office suite of applications and is available for both Windows and Macintosh operating systems.

**With Excel, users can create spreadsheets consisting of rows and columns, and input data into individual cells.** The program provides a wide range of features to help users manipulate and analyze data, such as functions, formulas, charts, and graphs.

Excel is commonly used for tasks such as financial analysis, budgeting, data management, and project tracking. **It can also be used to create interactive dashboards and reports**, which allow users to visualize data and gain insights into trends and patterns.

In addition to the basic spreadsheet features, **Excel also offers advanced features** such as PivotTables, which allow users to quickly summarize and analyze large amounts of data, **and macros, which automate repetitive tasks** and can be customized using Visual Basic for Applications (VBA) programming language.

Overall, Excel is a powerful and versatile tool for managing and analyzing data, and is widely used across a variety of industries and professions.

### Learn from hands-on tutorials

<a href="https://support.microsoft.com/en-us/office/basic-tasks-in-excel-dc775dd1-fa52-430f-9c3c-d998d1735fca" target="_blank">Microsoft 365 support online  ⤴</a> is an excellent resource for users who want to **get started with Excel and learn basic tasks**. The website provides a wide range of tutorials and articles that can help users get started with Excel, including how to create a new spreadsheet, enter data, format cells, and use basic formulas and functions. Users can also learn how to create charts and graphs, work with tables, and collaborate with others using Excel.

If you are looking to **improve your skills in manipulating data in Excel data sheets**, I highly encourage you to explore hands-on tutorials in this section:
* {% include target_link href=721.2 %}
* {% include target_link href=721.3 %}
* {% include target_link href=721.4 %}
* {% include target_link href=721.5 %}

<br><br>
These tutorials can provide you with step-by-step guidance on how to perform specific tasks and functions in Excel, which can help you gain a deeper understanding of the software and improve your overall proficiency.

So, whether you are a beginner or an advanced user, **exploring hands-on tutorials can be a great way to improve your Excel skills** and become more proficient in manipulating data in spreadsheets.
