---
title: "Merge two spreadsheets using a common column"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 721.5
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../../00-DataParsing-LandingPage.md) / [2. Data Manipulation](../01-data-manipulation.md) / [2.1 Manipulating Excel Data Sheets](01-manipulate-excel-sheets.md) / **2.1.4 Merge Two Spreadsheets using a Common Column**

---


# Introduction

Excel is most popular among researchers because of its ease of use and tons of useful features. In most cases scripting is the most efficient way to do these simple operations, but practicality of Excel for researchers and the cryptic scripting commands will always make excel a better choice. Most common case of merging 2 spreadsheets is when users have a list of gene ids and another list of geneids with function. To merge these 2 sheets using the gene-ids, we can use the `VLOOKUP` function.

### Data ###

Typically, users will have something like this:

 __Sheet1__ : _list of gene ids with differential gene expression results_

<img src="{{ images_path }}/Fig1_sheet1.png" width="1030" height="426" alt="Sheet1"  />


 __Sheet2__: _list of gene ids with its annotation information_

<img src="{{ images_path }}/Fig2_sheet2.png" width="981" height="467" alt="Sheet2"  />

Now, to add `GeneID` and `GeneName` information for the __Sheet1__ using the information from __Sheet2__ using `Ensembl Gene ID` as the common field/column, we can use the `VLOOKUP` function.

### Formula ###

Type: `VLOOKUP` on the __Sheet1__ (E1) cell, you should see typical usage for the command as shown below. It needs 4 pieces of inforamtion:

  * `lookup_value` : which cell to use for looking up the value? since we need to look up information for `Ensembl Gene ID` it should be `A2` here
  * `table_array` : where to look up? the entire table where the annotation is stored. This shoudl be the full table in __Sheet2__ (in this case: `Sheet2!$A$2:$C$49672`)
  * `col_index_num` : what cell value to print for matching ids? Since we need GeneID and it is the 2nd column of __Sheet2__, we should use the value of `2` here
  * `range_lookup` : do you need an exact match or approximate match? Since each gene id is unique, we need exact match, so we fill `FALSE` here

The compelte formula looks like this:


```
=VLOOKUP(A2,Sheet2!$A$2:$C$49672,2,FALSE)
```

<img src="{{ images_path }}/Fig3_Formula.png" width="1030" height="166" alt="formula for geneid"  />

Note the `$` for both rows and columns of the table array, this prevetns the excel from incrementing when the formula is dragged to other cells. This is because we want to keep out `table_array` fixed, regardless where we use the formula in the __Sheet1__

Next, we need to drag this formula down using the `+` sign that appears on the lower right of the cell containing formula. You can also double click on it to automatically fill the formula for you. It should correctly fill in the GeneID column for you.

<img src="{{ images_path }}/Fig4_drag1.png" width="902" height="466" alt="click and drag"  />

For filling out the `GeneName` follow the same steps, but instead of using `col_index_num` value of `2`, we will use `3` which is for `Description` in the __Sheet2__

```
=VLOOKUP(A2,Sheet2!$A$2:$C$49672,3,FALSE)
```

<img src="{{ images_path }}/Fig5_formla2.png" width="1158" height="167" alt="formula for function"  />

Again, click and drag or double click the `+` sign that appears on the lower right of the cell to fill all other cells in that column.

<img src="{{ images_path }}/Fig7_merged.png" width="1286" height="467" alt="merged spreadsheet"  />

You should now have the complete table with both functions and gene names, now!
