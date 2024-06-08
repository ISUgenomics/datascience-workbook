---
title: "Create index for all worksheets"
layout: single
author: Aleksandra Badaczewska
author2: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 721.4
level: 3
categories: ["data-manipulation"]
tags: ["spreadsheet", "excel", "VBA", "macro", "worksheet-index"]
attributes: ["example", "code-snippet", "ready-made-solution", "automation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<button class="btn note mr"></button><em class="c-good">This tutorial has been upgraded to incorporate Python-based automation approach, suplementing the foundational guide on Excel macros originally created by Arun Seetharam.</em>

**TASK or CHALLENGE:**

If you have a large number of worksheets in your Excel file, this tutorial will guide you through automating the creation of an index sheet with links to each worksheet, making navigation quicker and reducing the risk of errors.

### Generate index sheet linking all spreadsheets in Excel

Managing multiple worksheets in an Excel workbook can be overwhelming, especially when trying to navigate between them. Creating an **index sheet with links to all the worksheets** can streamline this process and enhance productivity.


## **A. Create macro in Excel** (Windows and macOS)

### <button class="btn required mr mt-">Excel Settings</button>

<div class="required before" data-before="" markdown="1">
**Microsoft Excel:** Before you begin, ensure you have `macros` enabled in your Excel tool.

<details class="l-frame" markdown="1"><summary class="c-header"><b>Windows:</b></summary>

1. **Open Excel:** Start Excel and open a new, empty workbook.
2. **Access Excel Options:**
* Click on the **File** tab in the top-left corner.
* From the menu, select **Options**. This will open the Excel Options dialog box.
3. **Customize Ribbon:**
* In the Excel Options dialog box, click on **Customize Ribbon** from the list on the left.
* On the right side, you'll see a list of the main tabs. Look for the **Developer** checkbox.
* Check the box next to **Developer**.
4. **Apply and Close:** Click `OK` to apply the changes and close the Excel Options dialog box. <br>
The Developer tab should now be visible in the Excel ribbon.
</details>

<details class="l-frame" markdown="1"><summary class="c-header"><b>macOS:</b></summary>

1. **Open Excel:** Start Excel and open a new, empty workbook.
2. **Access Preferences:**
* Click on **Excel** in the menu bar at the top of the screen.
* Select **Preferences** from the dropdown menu.
![]({{ images_path }}/excel_developer_tab.png)
3. **Ribbon & Toolbar:**
* In the **Excel Preferences** dialog box, click on **Ribbon & Toolbar**. *(see an image in the next step)*
4. **Customize Ribbon:**
* In the Customize Ribbon section, you’ll see a list of tabs. Look for the **Developer** checkbox.
* Check the box next to **Developer**.
![]({{ images_path }}/excel_developer_tab_check.png)
5. **Apply and Close:** Close the Ribbon & Toolbar preferences dialog box.
![]({{ images_path }}/excel_developer_tab_activated.png)
6. **Enable Full Disk Access for Excel** To ensure that Excel macros work correctly and can manage inputs and outputs on macOS, you need to grant Excel full disk access.
  * Open `System Preferences`.
  * Go to `Security & Privacy`.
  * Click the `Privacy` tab.
  * In the left sidebar, select `Full Disk Access`.
  * Click the lock icon in the bottom left corner and enter your password to make changes.
  * Click the `+` button and add the **Microsoft Excel** application to the list.
</details>
</div>

### *1. Prepare your Excel spreadsheets*

**Excel Spreadsheets:** An Excel workbook containing multiple worksheets (tabs).

Each worksheet should contain structured data in a consistent format. *The VBA code for the macro can be adjusted to handle different data formats appropriately.*
<div class="protip" markdown="1">
You can use any Excel file that contains at least 2 spreadsheets to complete this exercise. If you followed the <a class="t-links" href="721.2"></a> tutorial, you can use the final <a class="t-links" href="721.2" section="#3-run-the-script">output.xlsx</a> file or you can simply <a href="/07-wrangling/assets/data/excel_macros/output.xlsx" download="output.xlsx"><button class="btn" type="button">DOWNLOAD it here</button></a>. *You should get an Excel file with 5 worksheets.*
<img class="mb-0" width="1000" src="{{ images_path }}/excel_python_txt_import_output.png" alt="the preview of the output Excel file">
</div>


### *2. Add VBA code of the macro*

1. Open Excel app (graphical user interface). *Open your Excel workbook that contains multiple worksheets.*
2. Click on `Developer` tab in the Excel wirndow and then `Macros` button.
3. In the pop-up window, type in some name for a new macro (e.g., `export_text`) and click `create` or `+` (on macOS). The new pop-up window with `Microsoft Visual Basic` will appear.
    ![]({{ images_path }}/excel_add_macro.png)
4. **MS Visual Basic window:** Paste the VBA code of the selected macro in the `Code` panel on the right:
    * [**MACRO 1:** Automatic Index in a Separate Sheet](#automatic-index-sheet)
    * [**MACRO 2:** In-Place Index](#in-place-index)
        ![]({{ images_path }}/excel_add_macro_code.png)


#### <button class="btn exercise mr before" data-before="MACRO 1"></button>*Automatic Index Sheet*
```vb
Sub CreateLinksToAllSheets()
    Dim sh As Worksheet
    Dim indexSheet As Worksheet

    ' Create or clear the index sheet
    On Error Resume Next
    Set indexSheet = ActiveWorkbook.Worksheets("Index")
    On Error GoTo 0

    If indexSheet Is Nothing Then
       Set indexSheet = ActiveWorkbook.Worksheets.Add(Before:=ActiveWorkbook.Worksheets(1))
        indexSheet.Name = "Index"
    Else
        indexSheet.Cells.Clear
    End If

    ' Create links
    indexSheet.Select
    indexSheet.Cells(1, 1).Value = "Sheet Links:"
    For Each sh In ActiveWorkbook.Worksheets
        If sh.Name <> indexSheet.Name Then
            indexSheet.Cells(indexSheet.Cells(Rows.Count, 1).End(xlUp).Row + 1, 1).Hyperlinks.Add _
                Anchor:=indexSheet.Cells(indexSheet.Cells(Rows.Count, 1).End(xlUp).Row + 1, 1), _
                Address:="", SubAddress:="'" & sh.Name & "'!A1", TextToDisplay:=sh.Name
        End If
    Next sh

    ' Adjust column widths
    indexSheet.Columns("A:A").AutoFit
End Sub
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>
**Initialize the Index Sheet:** The script first checks if an "Index" sheet exists. If not, it creates one. If it does exist, it clears its contents. Then, it adds a header "Sheet Links:" to the index sheet. <br>
**Create Links:** The script iterates through each worksheet in the workbook. For each worksheet, it adds a hyperlink to cell A1 of that sheet, skipping the index sheet itself. <br>
<em class="footnote">The script adjusts the column widths to fit the content.</em>
</details><base class="mt">

**Run the macro in Excel spreadsheet**

Go back to your Excel spreadsheet window.
1. Open your Excel workbook that contains multiple worksheets.
2. Click on `Macros` again. This time, the pop-up `Macro` window has a list of your added macros. Select the one you've just created. Then, click the `Run` button.
    ![]({{ images_path }}/excel_run_macro_index.png)
    This macro will automatically create an index sheet named "Index" at the beginning of your workbook, making it easy to navigate between worksheets with a single click. If you run the macro again, it will update the index sheet to reflect any changes in your workbook. <br>*Macro can be run from any sheet **without** affecting its content.*
    ![]({{ images_path }}/excel_automatic_index.png)


#### <button class="btn exercise mr before" data-before="MACRO 2"></button>*In-Place Index*
```vb
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

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>
**Starting Cell:** The macro will start creating the index from the currently selected cell in the active sheet. <br>
**Creating Links:** The macro iterates through each worksheet in the workbook. For each worksheet, it adds a hyperlink to cell A1 of that sheet, skipping the active sheet itself. After adding each link, it moves down one cell to place the next link.
</details><base class="mt">

**Run the macro in Excel spreadsheet**

Go back to your Excel spreadsheet window.
1. Open your Excel workbook that contains multiple worksheets.
2. Navigate to the desired sheet. Select the cell from which you want the index to start. <br><em class="bc-warning pa-m c-bad">Be careful as this will overwrite the existing content starting from this cell.</em>
3. Click on `Macros` again. This time, the pop-up `Macro` window has a list of your added macros. Select the one you've just created. Then, click the `Run` button.
    ![]({{ images_path }}/excel_run_macro_index.png)
    This simpler macro places the index starting from the currently selected cell. It can be useful if you want to create an index on demand within any worksheet. However, be cautious of which cell is selected when running the macro, as it will overwrite the content starting from that cell. <br>*Macro can be run from any sheet **with** affecting its content.*
    ![]({{ images_path }}/excel_index_inplace.png)

<div class="warning" markdown="1">
Ensure you select an appropriate starting cell before running the macro to avoid overwriting important data. This method is useful for creating an index within the context of any sheet on demand.
</div>
