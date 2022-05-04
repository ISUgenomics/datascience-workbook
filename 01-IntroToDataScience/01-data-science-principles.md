---
title: "Data Science Principles"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /assets/images/pattern.png
---

{% include toc %}


## 1. What is Data?

Data is a collection of observables registered in any form. Commonly, it is a sequence of written characters (numerical or symbolic), audio stream, or visual depiction. The analog signals [�](a "Analog signal is a continous signal representing the changes in a physical variable, such as sound, light, temperature, position, pressure, etc.") have been steadily replaced since the 1960s by digital records [�](a "Digital signal represents a quantized values transmitted as an electrical or optical signal reduced into two discrete bands: 0 - false and 1 - true."), so today, **digital data** prevail. A single item of data is called a datum. Each datum, in a computer-readable representation, has assigned the binary value of "zero" or "one" (corresponding to logical "*false*" and "*true*"), resulting in a **bit** of information, i.e., one binary digit. <br>
Due to the source and size, data may have different structures. The technical construction of the data structure is a significant factor in the computer's ability to easily access, search, update, and process the data.


### 1.1. Structured Data

So, in a nutshell, structured data is **highly organized** in terms of easy digital deciphering rather than human readability. That includes a standardized format, enduring order, and categorization in a well-determined arrangement that facilitates managing and querying datasets in various combinations. Depending on the intent to use the data, the specific relations between elements are revealing.

A typical example of an organized data structure is a **spreadsheet** or **database**, generally composed of a data series split into fields and assembled in a pre-defined manner.

Learn more from:<br>
• [Oracle Cloud Learning: database](https://www.oracle.com/database/what-is-database/#relational)<br>

### *Spreadsheet*

A spreadsheet is a digital and much more advanced analog of the old paper accounting worksheets. It has a tabular form composed of the (usually) 2-dimensional grid of editable cells indexed by row number and column name. The cells store numerical or text data that can be transformed by various built-in or user-customized functions, filtrated, colored, or visualized on the graphs. Therefore, the computerized spreadsheet provides an all-in-one, organized storage, analysis, and visualization of the data. Typically, the single spreadsheet document can contain multiple named sheets between which certain variables and relations can be transferable. Although spreadsheets are rather single-user and severely limited in the allowed volume of data, they are still vital. The most popular spreadsheets are distributed by Microsoft Excel (multi-platform, including *Windows*), Apple Numbers (*MacOS*), LibreOffice (*Linux*), and Google Sheets (online). The more advanced users can use an option to create macros with VBA code [�](a "Virtual Basic for Applications") that automate the repetitive tasks.


Get hands-on training in the **Data Manipulation:** [*Manipulating Excel Data Sheets*](../07-DataParsing/02A-0-manipulate-excel-sheets) section of the Workbook's Chapter [07 - Data Aquisition and Wrangling](../07-DataParsing/00-DataParsing-LandingPage).

Learn more from [Wikipedia: spreadsheet](https://en.wikipedia.org/wiki/Spreadsheet).

---

### *Navigational Database*

Navigational Databases refre to the very first attempts at organizing digital data in the 60s to 80s of the 20th century. Back then, both the data and computing power were much smaller, so simpler solutions were sufficient and the only possible. The essence of the navigational approach is to use the pre-defined path to access data entry. Practically, this means that the desired record can be found by following references or links from other objects. <br>
In a **hierarchical database**, a one-to-many relationship is allowed, by analogy to a tree model, where a parent branch propagates to a number of branches at the next level of the structure.
In a **network database**, a many-to-many relationship is allowed, by analogy to the graph, where nodes are linked directly by the edges that represents the network of relationships in the dataset.


<!--
- inflexible
- records are processed iterativly, one at a time
- application code needs to change whenever the data structure changes
-->

Learn more from:<br>
• [Wikipedia: navigational database](https://en.wikipedia.org/wiki/Spreadsheet)<br>
• [Wikipedia: hierarchical model](https://en.wikipedia.org/wiki/Spreadsheet)<br>
• [Wikipedia: network model](https://en.wikipedia.org/wiki/Network_model)<br>

---

### *Relational Database*
The relational databases provide the most efficient way to access the data organized in multidimensional arrays of predefined set of **rows and columns**. The data collected in the columns correspond to some categories, so the single entry in the row can have multiple corresponding values. When two datasets share the same field, it is possible to create a network of relations and derive meaningful insights by rearranging the tables. The Structured Query Language (**SQL**), originated by the IBM in 1970s, is a programmatical approach that enables performing the customized **joining of tables**, logical transformation on columns, **filtering entries**, and creating groupings by the **combination of multiple queries**. Reduced redundancy and flexibility in managing the content and organization of tables are among the pros of relational SQL databases.

Learn more from:<br>
• [IBM Cloud Education: relational database](https://www.ibm.com/cloud/learn/relational-databases)<br>

---

### *NoSQL Database*

key-value pairs

---

### 1.2. Unstructured Data



### 1.3. Big Data



## 2. Data Lifecycle

![Data Science](../assets/images/About_data_science.jpeg)

### 2.1. Data Operations

### *Storage - Data at Rest*

### *Transfer - Data in Transit*

### *Process - Data in Use*


### 2.2. States of Data

### *Raw Data*



### *Information*

<!--
- data requires interpretation to become information
- data are sometimes said to be transformed into information when they are viewed in context or in post-analysis.
-->

### *Knowledge*



## 3. Technologies and Techniques




___
# Further Reading
* [Applications of Computational Science](02-computational-science-applications)
  * [Computational Biology](02A-computational-biology)
  * [Geospatial Analytics](02B-geospatial-analytics)
  * [Machine Learning Outlook](02C-machine-learning)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-IntroToDataScience-LandingPage){: .btn  .btn--primary}
[Next](02-computational-science-applications){: .btn  .btn--primary}
