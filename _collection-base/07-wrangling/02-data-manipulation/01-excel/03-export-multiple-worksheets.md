---
title: "Export multiple worksheets as separate text files"
layout: single
author: Aleksandra Badaczewska
author2: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 721.3
level: 3
categories: ["data-management", "data-manipulation"]
tags: ["excel", "VBA", "macro", "worksheet-to-files", "windows", "macOS", "python", "automation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<button class="btn note mr"></button><em class="c-good">This tutorial has been upgraded to incorporate Python-based automation approach, suplementing the foundational guide on Excel macros originally created by Arun Seetharam.</em>

**TASK or CHALLENGE:**

If you have a large number of worksheets (tabs) in your Excel file that you need to export as separate text files, this tutorial will guide you through automating the process, making it quicker and reducing the risk of errors.

### Export multiple worksheets as separate text files in Excel

Handling and distributing data spread across multiple worksheets in an Excel workbook can be a challenging and time-consuming task, especially when each worksheet needs to be exported as a separate text file.<br>
<em class="cons"></em> Manually saving each worksheet individually is not only laborious but also prone to errors. <br>
<em class="pros"></em> This tutorial offers a <span class="c-good">detailed guide to automate the export process</span>.

*By the end of this tutorial, you will be able to export a large number of worksheets from Excel efficiently, with each worksheet saved as a separate text file and labeled as the worksheet name.*


## **A. Create macro in Excel** (Windows and macOS)

### <button class="btn required mr">Excel Settings</button>

<div class="required before" data-before="" markdown="1">
1. **Microsoft Excel:** Before you begin, ensure you have `macros` enabled in your Excel tool.

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

2. **Excel Spreadsheets:** An Excel workbook containing multiple worksheets (tabs) that you want to export. <br>
    Each worksheet should contain structured data in a consistent format. *The VBA code for the macro can be adjusted to handle different data formats appropriately.*
</div>


### *1. Prepare your Excel spreadsheets*

You can use any Excel file that contains at least 2 spreadsheets to complete this exercise. If you followed the <a class="t-links" href="721.2"></a> tutorial, you can use the final <a class="t-links" href="721.2" section="#3-run-the-script">output.xlsx</a> file or you can simply <a href="/07-wrangling/assets/data/excel_macros/output.xlsx" download="output.xlsx"><button class="btn" type="button">DOWNLOAD it here</button></a>. *You should get an Excel file with 5 worksheets.*
![the preview of the output Excel file]({{ images_path }}/excel_python_txt_import_output.png)


### *2. Add VBA code of the macro*

1. Open Excel app (graphical user interface).
2. Click on `Developer` tab in the Excel wirndow and then `Macros` button.
3. In the pop-up window, type in some name for a new macro (e.g., `export_text`) and click `create` or `+` (on macOS). The new pop-up window with `Microsoft Visual Basic` will appear.
    ![]({{ images_path }}/excel_add_macro.png)
4. **MS Visual Basic window:** Paste the below code in the `Code` panel on the right:
    ![]({{ images_path }}/excel_add_macro_code.png)
    <div class="warning" markdown="1">
      The VBA code for this macro differs between the requirements for Excel on Windows and macOS. Please ensure you select the version that matches your operating system.
    </div>
    <details class="l-frame" markdown="1"><summary class="c-header"><b>VBA code for Windows:</b></summary>
    ```vb
    ' ---------------------- Directory Choosing Helper Functions -----------------------
    Private Type BROWSEINFO ' used by the function GetFolderName
        hOwner As LongPtr
        pidlRoot As LongPtr
        pszDisplayName As String
        lpszTitle As String
        ulFlags As Long
        lpfn As LongPtr
        lParam As LongPtr
        iImage As Long
    End Type

    Private Declare PtrSafe Function SHGetPathFromIDList Lib "shell32.dll" _
        Alias "SHGetPathFromIDListA" (ByVal pidl As LongPtr, ByVal pszPath As String) As Long

    Private Declare PtrSafe Function SHBrowseForFolder Lib "shell32.dll" _
        Alias "SHBrowseForFolderA" (lpBrowseInfo As BROWSEINFO) As LongPtr

    Function GetFolderName(Msg As String) As String
    ' returns the name of the folder selected by the user
    Dim bInfo As BROWSEINFO, path As String, r As Long
    Dim X As LongPtr, pos As Integer
        bInfo.pidlRoot = 0& ' Root folder = Desktop
        If IsMissing(Msg) Then
            bInfo.lpszTitle = "Select a folder."
            ' the dialog title
        Else
            bInfo.lpszTitle = Msg ' the dialog title
        End If
        bInfo.ulFlags = &H1 ' Type of directory to return
        X = SHBrowseForFolder(bInfo) ' display the dialog
        ' Parse the result
        path = Space$(512)
        r = SHGetPathFromIDList(ByVal X, ByVal path)
        If r Then
            pos = InStr(path, Chr$(0))
            GetFolderName = Left(path, pos - 1)
        Else
            GetFolderName = ""
        End If
    End Function
    '---------------------- END Directory Chooser Helper Functions ----------------------

    Public Sub DoTheExport()
    Dim FName As Variant
    Dim Sep As String
    Dim wsSheet As Worksheet
    Dim nFileNum As Integer
    Dim csvPath As String

    Sep = InputBox("Enter a single delimiter character (e.g., comma or semi-colon)", "Export To Text File")

    csvPath = GetFolderName("Choose the folder to export CSV files to:")
    If csvPath = "" Then
        MsgBox ("You didn't choose an export directory. Nothing will be exported.")
        Exit Sub
    End If

    For Each wsSheet In Worksheets
        wsSheet.Activate
        nFileNum = FreeFile
        Open csvPath & "\" & wsSheet.Name & ".csv" For Output As #nFileNum
        ExportToTextFile CStr(nFileNum), Sep, False
        Close nFileNum
    Next wsSheet

    End Sub

    Public Sub ExportToTextFile(nFileNum As Integer, Sep As String, SelectionOnly As Boolean)

    Dim WholeLine As String
    Dim RowNdx As Long
    Dim ColNdx As Integer
    Dim StartRow As Long
    Dim EndRow As Long
    Dim StartCol As Integer
    Dim EndCol As Integer
    Dim CellValue As String

    Application.ScreenUpdating = False
    On Error GoTo EndMacro:

    If SelectionOnly = True Then
        With Selection
            StartRow = .Cells(1).Row
            StartCol = .Cells(1).Column
            EndRow = .Cells(.Cells.Count).Row
            EndCol = .Cells(.Cells.Count).Column
        End With
    Else
        With ActiveSheet.UsedRange
            StartRow = .Cells(1).Row
            StartCol = .Cells(1).Column
            EndRow = .Cells(.Cells.Count).Row
            EndCol = .Cells(.Cells.Count).Column
        End With
    End If

    For RowNdx = StartRow To EndRow
        WholeLine = ""
        For ColNdx = StartCol To EndCol
            If Cells(RowNdx, ColNdx).Value = "" Then
                CellValue = ""
            Else
                CellValue = Cells(RowNdx, ColNdx).Value
            End If
            WholeLine = WholeLine & CellValue & Sep
        Next ColNdx
        WholeLine = Left(WholeLine, Len(WholeLine) - Len(Sep))
        Print #nFileNum, WholeLine
    Next RowNdx

    EndMacro:
    On Error GoTo 0
    Application.ScreenUpdating = True

    End Sub
    ```
    </details>

    <details class="l-frame" markdown="1"><summary class="c-header"><b>VBA code for macOS:</b></summary>
    ```vb
    Function GetFolderName(Msg As String) As String
        Dim FolderPath As String
        On Error Resume Next
        FolderPath = MacScript("(choose folder with prompt """ & Msg & """) as string")
        On Error GoTo 0
        If FolderPath = "" Then
            GetFolderName = ""
        Else
            ' Remove the trailing colon
            If Right(FolderPath, 1) = ":" Then
                FolderPath = Left(FolderPath, Len(FolderPath) - 1)
            End If
            ' Replace colons with slashes
            FolderPath = Replace(FolderPath, ":", "/")
            ' Correct the path by removing "Macintosh HD" if present
            If Left(FolderPath, 12) = "Macintosh HD" Then
                FolderPath = Mid(FolderPath, 13)
            End If
            GetFolderName = FolderPath
        End If
    End Function

    Public Sub DoTheExport()
        Dim FName As Variant
        Dim Sep As String
        Dim wsSheet As Worksheet
        Dim nFileNum As Integer
        Dim csvPath As String

        Sep = InputBox("Enter a single delimiter character (e.g., comma or semi-colon)", "Export To Text File")

        csvPath = GetFolderName("Choose the folder to export CSV files to:")
        If csvPath = "" Then
            MsgBox ("You didn't choose an export directory. Nothing will be exported.")
            Exit Sub
        End If

        For Each wsSheet In Worksheets
            wsSheet.Activate
            nFileNum = FreeFile
            Dim sanitizedSheetName As String
            sanitizedSheetName = SanitizeFileName(wsSheet.Name)
            On Error Resume Next
            Open csvPath & "/" & sanitizedSheetName & ".csv" For Output As #nFileNum
            If Err.Number <> 0 Then
                MsgBox "Error opening file: " & Err.Description
                Err.Clear
            Else
                ExportToTextFile CStr(nFileNum), Sep, False
                Close nFileNum
            End If
            On Error GoTo 0
        Next wsSheet

    End Sub

    Public Sub ExportToTextFile(nFileNum As Integer, Sep As String, SelectionOnly As Boolean)

        Dim WholeLine As String
        Dim RowNdx As Long
        Dim ColNdx As Integer
        Dim StartRow As Long
        Dim EndRow As Long
        Dim StartCol As Integer
        Dim EndCol As Integer
        Dim CellValue As String

        Application.ScreenUpdating = False
        On Error GoTo EndMacro:

        If SelectionOnly = True Then
            With Selection
                StartRow = .Cells(1).Row
                StartCol = .Cells(1).Column
                EndRow = .Cells(.Cells.Count).Row
                EndCol = .Cells(.Cells.Count).Column
            End With
        Else
            With ActiveSheet.UsedRange
                StartRow = .Cells(1).Row
                StartCol = .Cells(1).Column
                EndRow = .Cells(.Cells.Count).Row
                EndCol = .Cells(.Cells.Count).Column
            End With
        End If

        For RowNdx = StartRow To EndRow
            WholeLine = ""
            For ColNdx = StartCol To EndCol
                If Cells(RowNdx, ColNdx).Value = "" Then
                    CellValue = ""
                Else
                    CellValue = Cells(RowNdx, ColNdx).Value
                End If
                WholeLine = WholeLine & CellValue & Sep
            Next ColNdx
            WholeLine = Left(WholeLine, Len(WholeLine) - Len(Sep))
            Print #nFileNum, WholeLine
        Next RowNdx

    EndMacro:
        On Error GoTo 0
        Application.ScreenUpdating = True

    End Sub

    Function SanitizeFileName(fileName As String) As String
        ' Remove any invalid characters from the file name
        Dim invalidChars As String
        Dim i As Integer

        invalidChars = "/\[]:?*""<>|"
        For i = 1 To Len(invalidChars)
            fileName = Replace(fileName, Mid(invalidChars, i, 1), "")
        Next i

        SanitizeFileName = fileName
    End Function
    ```
    </details>

### *3. Run the macro*

**Excel spreadsheet:** Go back to your Excel spreadsheet window.

Click on `Macros` again. This time, the pop-up `Macro` window (1) has a list of your added macros. Select the one you've just created. Then, click the `Run` button.
![]({{ images_path }}/excel_run_macro_export.png)
(2) A window should pop up asking the preffered delimiter. In the next one (3) you should select the location to save exported files. <base class="mb">
Each spreadsheet will be exported to an individual file. It might take a while to complete, if there are large number of spreadsheets, so be patient.
![]({{ images_path }}/excel_export_results.png)


## **B. Python-based automation**

This section will walk you through the process of **using** `Python` **to automate the export of multiple Excel spreadsheets into separate files**. <br>
<em class="pros"></em> This approach will save you time and reduce the risk of errors compared to manual data entry. <br>
<em class="pros"></em> It is a universal, cross-platform solution (Windows, macOS, Linux). <br>
<em class="pros"></em> It is a command-line solution (Python script executed in the terminal window).

### <button class="btn required mr">Tools and Settings</button>

<div class="required before" data-before="" markdown="1">
Before you begin, ensure you have the following:
1. **Microsoft Excel:** It is not required for you to have MS Excel installed; you only need the `.xlsx` spreadsheet file.
2. **Python:** This tutorial uses `Python` to automate the process. <br>
    Ensure you have <a class="t-links" href="423" section="#which-installation-on-my-operating-system">Python installed</a>. You can download it from <a href="https://www.python.org/" target="_blank">python.org</a>. <br>
    If you are starting your Python adventure from scratch, it is worthwhile to develop your skills gradually strengthening them over time. In that case, it’s best to follow this tutorial in order.
    * <a class="t-links" href="531" section="#1-learn-python-basics-using-online-platform">Learn Python basics using online platform</a>
    * <a class="t-links" href="531" section="#2-get-python-locally-and-start-coding-in-the-ide">Get Python locally and start coding in the IDE</a>
3. **Libraries:** You will need the following Python libraries:
    * `pandas`: For data manipulation and analysis. <button class="btn more before" data-before="LEARN MORE"></button> *...from the <a class="t-links" href="536">tutorial</a> in this workbook*
    * `openpyxl`: For Excel file operations. <button class="btn more before" data-before="LEARN MORE"></button> *...from the <a href="https://openpyxl.readthedocs.io/en/stable/" target="_blank">documentation</a>*
    <base class="mb">
    You can install these libraries using `pip` *(once you have Python installed)*:
    ```bash
    pip install pandas openpyxl
    ```
4. **Output Text Files:** Select a folder where you want to save the exported text files. <br>
    The files can be in any text format such as `.txt`, `.tsv`, `.csv`, etc., and you can select any character as **a unified delimiter**. Common options include: `,` , ` ` , `;` , `|`. *The Python script can be adjusted to handle these different file formats and delimeters.*
</div>


### *1. Write the Python script*

Create a new Python script (e.g., `export_worksheets_to_files.py`). In terminal you can use the following command:
```bash
touch export_worksheets_to_files.py
```
Open this script in your preferred <a class="t-links" href="400">development environment</a> (e.g., <a class="t-links" href="411">VSC</a> or Atom) or simple <a class="t-links" href="322">code editor in terminal</a> (e.g., `nano` or `vim`).
```bash
nano import_txt_to_excel.py
```

Then, follow the steps below to write all sections of the script.

1. **Import Necessary Libraries** <br>
    First, import the necessary libraries:
    ```python
import os
from openpyxl import load_workbook
    ```

2. **Set the variables (paths and output delimiter)** <br>
    Set the path to the directory containing your text files and the expected location for outputs:
    ```python
input_file = 'path_to_your_excel_file.xlsx'   # Adjust path for the input Excel file
output_path = 'path_to_output_directory'      # Adjust output directory path
    ```
    Set the delimiter used in your input files:
    ```python
sep= ','                                      # Change this to the desired delimiter
    ```
    <div class="protip" markdown="1">
    **Delimiter:** Adjust the `sep` parameter to separate data in your output text files (e.g., comma, tab, semicolon). It is used in the next part of the script in the `f.write()` method.
    </div>
    Set the extension of your text files:
    ```python
ext = '.txt'                                 # Adjust extension of output text files
    ```

3. **Create Function: Sanitize Filename Function** <br>
    This function removes any invalid characters from the sheet names to ensure valid filenames.
    ```python
def sanitize_filename(filename):
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '')
    return filename
    ```

4. **Create Function: Export Sheets to Text Files** <br>
    This function loads the Excel workbook, iterates through each worksheet, and writes the content to a text file using the specified delimiter. The output directory is created if it does not exist.
    ```python
def export_sheets_to_text(excel_path, output_dir, delimiter=',', format='.txt'):
    workbook = load_workbook(excel_path, data_only=True)
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for sheet in workbook.sheetnames:
        ws = workbook[sheet]
        output_file = os.path.join(output_dir, sanitize_filename(sheet) + format)

        with open(output_file, 'w', encoding='utf-8') as f:
            for row in ws.iter_rows(values_only=True):
                row_data = [str(cell) if cell is not None else '' for cell in row]
                f.write(delimiter.join(row_data) + '\n')

        print(f'Sheet "{sheet}" has been exported to {output_file}')
    ```

5. **Main Script Execution** <br>
    This section runs the `export_sheets_to_text` function with the specified inputs when the script is executed.
    ```python
if __name__ == "__main__":
    export_sheets_to_text(input_file, output_path, sep, ext)
    ```


### *2. Run the script*

<details class="l-frame" markdown="1"><summary class="c-header"><b>Here is the complete script:</b></summary>

filename: `export_worksheets_to_files.py`
<p class="footnote" style="margin-bottom: 0 !important;">code by @Alex</p>
```python
import os
from openpyxl import load_workbook

# Set variables: paths (Excel input file and output directory paths) and output delimiter
input_file = 'path_to_your_excel_file.xlsx'    # Adjust path for the input Excel file
output_path = 'path_to_output_directory'       # Adjust output directory path
sep = ','                                      # Change this to the desired delimiter
ext = '.txt'                                   # Adjust extension of output text files

#------ AUTOMATICALLY BELOW ------#
def sanitize_filename(filename):
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '')
    return filename

def export_sheets_to_text(excel_path, output_dir, delimiter=',', format='.txt'):
    # Load the workbook
    workbook = load_workbook(excel_path, data_only=True)

    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Iterate through each worksheet in the workbook
    for sheet in workbook.sheetnames:
        ws = workbook[sheet]
        output_file = os.path.join(output_dir, sanitize_filename(sheet) + format)

        with open(output_file, 'w', encoding='utf-8') as f:
            for row in ws.iter_rows(values_only=True):
                row_data = [str(cell) if cell is not None else '' for cell in row]
                f.write(delimiter.join(row_data) + '\n')

        print(f'Sheet "{sheet}" has been exported to {output_file}')

if __name__ == "__main__":
    export_sheets_to_text(input_file, output_path, sep, ext)
```
</details>

1. **Open Command Prompt or Terminal** <br>
    Navigate to the directory where you saved `export_worksheets_to_files.py` using the command prompt or terminal.
    <div class="warning mb-0" markdown="1">
    Before running the script, adjust the variables section by providing the paths, input file name, expected delimiter, and extension for the output files.
    </div>
    <div class="protip" markdown="1">
    You can use any Excel file that contains at least 2 spreadsheets to complete this exercise. If you followed the <a class="t-links" href="721.2"></a> tutorial, you can use the final <a class="t-links" href="721.2" section="#3-run-the-script">output.xlsx</a> file or you can simply <a href="/07-wrangling/assets/data/excel_macros/output.xlsx" download="output.xlsx"><button class="btn" type="button">DOWNLOAD it here</button></a>.
    </div>

2. **Run the Script** <br>
    Execute the script by typing the following command and pressing Enter:
    ```bash
    python export_worksheets_to_files.py
    ```
3. **Locate and check the output files** <br>
    After the script finishes running, navigate to the directory specified in `output_path`. <brYou should see an individual file for each worksheet from the Excel file, labeled with the corresponding name. Open any of the generated `.txt` files in text editor to verify the content.
    ![the preview of the output Excel file]({{ images_path }}/excel_export_results.png)
