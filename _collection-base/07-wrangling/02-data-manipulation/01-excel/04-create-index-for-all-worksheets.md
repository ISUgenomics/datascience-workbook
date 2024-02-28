---
title: "Create index for all worksheets"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../../00-DataParsing-LandingPage.md) / [2. Data Manipulation](../01-data-manipulation.md) / [2.1 Manipulating Excel Data Sheets](01-manipulate-excel-sheets.md) / **2.1.3 Create Index for All Worksheets**

---


# Introduction

# Generate index sheet linking all spreadsheets in Excel

Before proceeding, check if you have enabled the macros, i.e., if you don't see `DEVELOPER` tab in you empty spreadsheet,  click on `FILE`, `OPTIONS` and `Customize Ribbon`. You should see a check box on the right hand side, for the `DEVELOPER` tab, check it and click `OK`.

Click on `DEVELOPER` and then `Macros`, type in some name (eg. `import_text`), click `create`.

Paste the below code on the popped window:

```
Sub CreateLinksToAllSheets()
Dim sh As Worksheet
Dim cell As Range
For Each sh In ActiveWorkbook.Worksheets
    If ActiveSheet.Name <> sh.Name Then
        ActiveCell.Hyperlinks.Add Anchor:=Selection, Address:="", SubAddress:= _
        "'" & sh.Name & "'" & "!A1", TextToDisplay:=sh.Name
        ActiveCell.Offset(1, 0).Select
    End If
Next sh
End Sub
```

Once done, click on  `Macros` again, and then `Run`. This action will automatically populate all cells below the selected cell with sheet name and link to that sheet.




___
# Further Reading
* [2.1.4 Merge Two Spreadsheets using a Common Column](05-tutorial-merge-spreadsheets-by-column)

* [2.2 Manipulating Text Files with Python](../02-PYTHON/01-manipulate-data-with-python)

* [3. Data Wrangling: ready-made apps](../../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](03-tutorial-export-multiple-worksheets){: .btn  .btn--primary}
[Next](05-tutorial-merge-spreadsheets-by-column){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
