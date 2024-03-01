---
title: "Create index for all worksheets"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 721.4
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

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
