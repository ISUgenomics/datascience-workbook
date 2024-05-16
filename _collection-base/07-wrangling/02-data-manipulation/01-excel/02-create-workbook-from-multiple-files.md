---
title: "Create worksheet from multiple text files"
layout: single
author: Aleksandra Badaczewska
author2: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 721.2
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<button class="btn note mr"></button><em class="c-good">This tutorial has been upgraded to incorporate Python-based automation approach, suplementing the foundational guide on Excel macros originally created by Arun Seetharam.</em>

**TASK or CHALLENGE:** <br>
*If you have a large number of text files that you need to import as separate worksheets into Excel, this tutorial will show you how to automate the process, making it faster and less prone to errors.*


### Import multiple text files as separate worksheets in Excel

Managing and analyzing data spread across multiple text files can be a cumbersome and time-consuming task, especially when each file needs to be imported as a separate worksheet in an Excel workbook.<br>
<em class="cons"></em> Manually importing each file one by one is not only tedious but also prone to errors. <br>
<em class="pros"></em> This tutorial provides a <span class="c-good">step-by-step guide to automate the process</span>.

*By the end of this tutorial, you will be able to import a large number of text files into Excel efficiently, with each file placed in its own worksheet and labeled based on the file name.*


## **A. Create macro in Excel** (Windows and macOS)

This section will guide you through the process of using Excel macros to automate the import of multiple text files into Excel. <br>
<em class="pros"></em> By using macros, you can streamline the process, save time, and minimize the risk of errors *(compared to manual data entry)*. <br>
<em class="pros"></em> Easier for advanced Excel users, requiring no additional software or programming knowledge *(beyond VBA coding)*. <br>
<em class="cons"></em> Less transferable across different operating systems compared to the [Python-based approach](#b-python-based-automation).

<div class="note" markdown="1">
Excel `macros` are sequences of instructions recorded to automate repetitive tasks within Excel, enhancing efficiency and consistency. Activating the **Developer** tab in Excel is necessary to create, edit, and run these macros, as it provides the tools and interface for macro management and VBA (Visual Basic for Applications) coding.
</div>

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
    </details>

2. **Text Files:** A folder containing all the text files you want to import. <br>
    The files can be in any text format such as `.txt`, `.tsv`, `.csv`, etc., as long as they contain plain structured text separated with a unified delimiter. *The VBA code for a macro can be adjusted to handle these different file formats appropriately.*
</div>

### *1. Prepare your text files*

A detailed guide for **preparing text files**, along with a set of simple example files, is provided in the [Organize Your Text Files](#1-organize-your-text-files) section *(of the Python-based automation approach)*, and you can use the same settings for this Excel macros approach.

<div class="warning" markdown="1">
Note that the file name of the text file will be used to label the worksheet (tab), without the `.txt` extension.
</div>

### *2. Add VBA code of the macro*

1. Open Excel app (graphical user interface).
2. Click on `Developer` tab in the Excel wirndow and then `Macros` button.
3. In the pop-up window, type in some name for a new macro (e.g., `import_text`) and click `create` or `+` (on macOS). The new pop-up window with `Microsoft Visual Basic` will appear.
    ![]({{ images_path }}/excel_add_macro.png)
4. **MS Visual Basic window:** Paste the below code in the `Code` panel on the right:
    ![]({{ images_path }}/excel_add_macro_code.png)
    <div class="warning" markdown="1">
      The VBA code for this macro differs between the requirements for Excel on Windows and macOS. Please ensure you select the version that matches your operating system. <br>
      -for **Windows:** Ensure that you have the `Scripting.FileSystemObject` available for file operations. <br>
      -for **macOS:** The script uses `MacScript` for folder selection.
    </div>
    <details class="l-frame" markdown="1"><summary class="c-header"><b>VBA code for Windows:</b></summary>

    <em class="footnote">code originally by @Arun, upgraded by @Alex</em>
    ```vb
    Sub CombineTextFiles()
        Dim FilesToOpen As Variant
        Dim x As Integer
        Dim wkbAll As Workbook
        Dim wkbTemp As Workbook
        Dim ws As Worksheet
        Dim sDelimiter As String

        On Error GoTo ErrHandler
        Application.ScreenUpdating = False

        sDelimiter = "," ' Change delimiter to comma

        FilesToOpen = Application.GetOpenFilename _
          (FileFilter:="Text Files (*.txt), *.txt", _
          MultiSelect:=True, Title:="Text Files to Open")

        If TypeName(FilesToOpen) = "Boolean" Then
            MsgBox "No Files were selected"
            GoTo ExitHandler
        End If

        x = 1
        Set wkbTemp = Workbooks.Open(FileName:=FilesToOpen(x))
        wkbTemp.Sheets(1).Copy
        Set wkbAll = ActiveWorkbook
        wkbTemp.Close (False)
        Set ws = wkbAll.Worksheets(x)
        ws.Columns("A:A").TextToColumns _
          Destination:=ws.Range("A1"), DataType:=xlDelimited, _
          TextQualifier:=xlDoubleQuote, _
          ConsecutiveDelimiter:=False, _
          Tab:=False, Semicolon:=False, _
          Comma:=True, Space:=False, _
          Other:=False, OtherChar:=sDelimiter
        x = x + 1

        While x <= UBound(FilesToOpen)
            Set wkbTemp = Workbooks.Open(FileName:=FilesToOpen(x))
            With wkbAll
                wkbTemp.Sheets(1).Move After:=.Sheets(.Sheets.Count)
                Set ws = .Worksheets(x)
                ws.Columns("A:A").TextToColumns _
                  Destination:=ws.Range("A1"), DataType:=xlDelimited, _
                  TextQualifier:=xlDoubleQuote, _
                  ConsecutiveDelimiter:=False, _
                  Tab:=False, Semicolon:=False, _
                  Comma:=True, Space:=False, _
                  Other:=False
            End With
            x = x + 1
        Wend

    ExitHandler:
        Application.ScreenUpdating = True
        Set wkbAll = Nothing
        Set wkbTemp = Nothing
        Exit Sub

    ErrHandler:
        MsgBox Err.Description
        Resume ExitHandler
    End Sub
    ```
    </details>

    <details class="l-frame" markdown="1"><summary class="c-header"><b>VBA code for macOS:</b></summary>

    <em class="footnote">code by @Alex</em>
    ```vb
    Sub CombineTextFilesFromFolder()
        Dim FolderPath As String
        Dim CorrectedFolderPath As String
        Dim FileName As String
        Dim FileContent As String
        Dim TextFile As Integer
        Dim NewWorkbook As Workbook
        Dim ws As Worksheet
        Dim LineText As String
        Dim LineArray As Variant
        Dim i As Integer

        ' Select folder using MacScript
        On Error Resume Next
        FolderPath = MacScript("(choose folder with prompt ""Select Folder Containing Text Files"") as string")
        On Error GoTo 0

        If FolderPath = "" Then
            MsgBox "No folder was selected."
            Exit Sub
        Else
            ' Remove trailing colon and correct path format
            If Right(FolderPath, 1) = ":" Then FolderPath = Left(FolderPath, Len(FolderPath) - 1)
            FolderPath = Replace(FolderPath, ":", "/")
            If Left(FolderPath, 12) = "Macintosh HD" Then
                CorrectedFolderPath = Mid(FolderPath, 13)
            Else
                CorrectedFolderPath = FolderPath
            End If
        End If

        ' Create a new workbook
        Set NewWorkbook = Workbooks.Add

        ' Loop through each text file in the folder
        FileName = Dir(CorrectedFolderPath & "/*.txt")
        If FileName = "" Then
            MsgBox "No text files found in the selected folder."
            Exit Sub
        End If

        Do While FileName <> ""
            ' Open the text file and read its content
            TextFile = FreeFile
            Open CorrectedFolderPath & "/" & FileName For Input As TextFile

            FileContent = ""
            Do While Not EOF(TextFile)
                Line Input #TextFile, LineText
                FileContent = FileContent & LineText & vbCrLf
            Loop
            Close TextFile

            ' Add a new sheet to the new workbook
            Set ws = NewWorkbook.Sheets.Add(After:=NewWorkbook.Sheets(NewWorkbook.Sheets.Count))
            ws.Name = Left(FileName, Len(FileName) - 4)

            ' Split file content into rows and write to cells
            LineArray = Split(FileContent, vbCrLf)
            For i = LBound(LineArray) To UBound(LineArray)
                ws.Cells(i + 1, 1).Value = LineArray(i)
            Next i

            ' Convert text to columns using comma delimiter
            ws.Columns("A:A").TextToColumns _
                Destination:=ws.Range("A1"), DataType:=xlDelimited, _
                TextQualifier:=xlDoubleQuote, _
                ConsecutiveDelimiter:=False, _
                Tab:=False, Semicolon:=False, _
                Comma:=True, Space:=False, _
                Other:=False

            ' Get the next file name
            FileName = Dir
        Loop

        ' Remove default Sheet1 if it exists
        On Error Resume Next
        Application.DisplayAlerts = False
        NewWorkbook.Sheets("Sheet1").Delete
        Application.DisplayAlerts = True
        On Error GoTo 0

    ExitHandler:
        Application.ScreenUpdating = True
        Set NewWorkbook = Nothing
        Exit Sub

    ErrHandler:
        MsgBox "Error: " & Err.Description
        Resume ExitHandler
    End Sub
    ```
    </details>
    Now, you can simply close the window with the `macro` code. It is saved automatically.
    <p class="c-alert mt-0">You are all set to import files!</p>
    <div class="protip" markdown="1">
    You can adjust both macros to handle text files with **different file extensions** and **data delimiters** by modifying the appropriate sections of the macro code.
    <table class="mb-">
    <tr> <th class="center-h">windows</th> <th class="center-h">macOS</th> </tr>
    <tr>
         <td class="pl-0 pb-0 no-border"><code class="code-block">FilesToOpen = Application.GetOpenFilename _
       (FileFilter:="Text Files <b class="c-bad">(*.txt), *.txt"</b>, _</code></td>
         <td class="pl-0 pb-0 no-border"><code class="code-block"><br>FileName = Dir(CorrectedFolderPath & <b class="c-bad">"/*.txt"</b>)</code></td>
    </tr>
    <tr>
         <td class="pl-0 pb-0 pt-0 no-border"><code class="code-block">ws.Columns("A:A").TextToColumns _
       Destination:=ws.Range("A1"),
       DataType:=xlDelimited, _
       TextQualifier:=xlDoubleQuote, _
       ConsecutiveDelimiter:=False, _
       Tab:=False, Semicolon:=False, _
       Comma:=<b class="c-bad">True</b>, Space:=False, _
       Other:=False, OtherChar:=sDelimiter</code></td>
         <td class="pl-0 pb-0 pt-0 no-border"><code class="code-block">ws.Columns("A:A").TextToColumns _
       Destination:=ws.Range("A1"),
       DataType:=xlDelimited, _
       TextQualifier:=xlDoubleQuote, _
       ConsecutiveDelimiter:=False, _
       Tab:=False, Semicolon:=False, _
       Comma:=<b class="c-bad">True</b>, Space:=False, _
       Other:=False</code></td>
    </tr>
    </table>
    </div>

5. **Excel spreadsheet:** Go back to your Excel spreadsheet window.
    Click on `Macros` again. This time, the pop-up `Macro` window has a list of your added macros. Select the one you've just created. Then, click the `Run` button.
    ![]({{ images_path }}/excel_run_macro.png)
    A window should pop up asking location of the text files. Navigate to the files location and select all text files. Click `OK`. <base class="mb">
    All text files will be imported to a new spreadsheet. It might take a while to complete, if there are large number of files, so be patient.
    ![]({{ images_path }}/excel_all_files_imported.png)


## **B. Python-based automation**

This section will walk you through the process of **using** `Python` **to automate the import of multiple text files into Excel**. <br>
<em class="pros"></em> This approach will save you time and reduce the risk of errors compared to manual data entry. <br>
<em class="pros"></em> It is a universal, cross-platform solution (Windows, macOS, Linux). <br>
<em class="pros"></em> It is a command-line solution (Python script executed in the terminal window).

### <button class="btn required mr">Tools and Settings</button>

<div class="required before" data-before="" markdown="1">
Before you begin, ensure you have the following:
1. **Microsoft Excel:** Make sure you have Excel installed on your computer.
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
4. **Text Files:** A folder containing all the text files you want to import. <br>
    The files can be in any text format such as `.txt`, `.tsv`, `.csv`, etc., as long as they contain plain structured **text separated with a unified delimiter**. *The Python script can be adjusted to handle these different file formats appropriately.*
</div>


### *1. Organize your text files*

Ensure all the text files you want to import are stored in a single directory. <br>For example, let's say your files are stored in a folder named `text_files`.

<pre class="bc-template">
<b>text_files</b>
    |- file1.txt
    |- file2.txt
    | ...
</pre>

Here is a set of example text files that you can use for this exercise: <br>

<table>
<tr> <td class="center-h">data_CA.txt</td> <td class="center-h">data_IA.txt</td>  <td class="center-h">data_IL.txt</td>  <td class="center-h">data_OH.txt</td>  <td class="center-h">data_WI.txt</td> </tr>
<tr>
<td class="pl-0"><code class="code-block">Name, Age, City
Alice, 30, Los Angeles
Bob, 25, San Francisco
Charlie, 35, San Diego</code></td>
<td class="pl-0"><code class="code-block">Name, Age, City
David, 40, Des Moines
Emma, 22, Cedar Rapids
Frank, 29, Davenport</code></td>
<td class="pl-0"><code class="code-block">Name, Age, City
George, 33, Chicago
Hannah, 27, Springfield
Ian, 31, Naperville</code></td>
<td class="pl-0"><code class="code-block">Name, Age, City
Jack, 28, Columbus
Kathy, 26, Cleveland
Larry, 34, Cincinnati</code></td>
<td class="pl-0"><code class="code-block">Name, Age, City
Mike, 32, Milwaukee
Nina, 23, Madison
Oscar, 29, Green Bay</code></td>
</tr></table>

Each file contains sample data with a common structure for simplicity. You can place these contents into their respective `.txt` files in the **text_files** directory.

<div class="protip mb-0" markdown="1">
**File Naming:** Ensure your text files have unique names, as these will be used to label the worksheets.
</div>
<div class="warning" markdown="1">
**Sheet Name Length:** Excel has a limit of 31 characters for sheet names. <br>Ensure your file names (excluding the `.txt` extension) do not exceed this limit.
</div>


### *2. Write the Python script*

Create a new Python script (e.g., `import_txt_to_excel.py`). In terminal you can use the following command:
```bash
touch import_txt_to_excel.py
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
import pandas as pd
from openpyxl import Workbook
    ```

2. **Set the variables (paths and input delimiter)** <br>
    Set the path to the directory containing your text files and the expected location for outputs:
    ```python
directory = 'path/to/your/text_files'        # Adjust directory with input TXT files
output_path = 'path/to/your/output.xlsx'     # Adjust output path and XLSX filename
    ```
    Set the delimiter used in your input files:
    ```python
sep = ','                                    # Adjust delimiter if necessary
    ```
    <div class="protip" markdown="1">
    **Delimiter:** Adjust the delimiter parameter to match the delimiter used in your text files (e.g., comma, tab, semicolon). It is used in the next part of the script in the `pd.read_csv()` method.
    </div>
    Set the extension of your text files:
    ```python
ext = '.txt'                                 # Adjust extension of your text files
    ```

3. **Initialize a New Workbook** <br>
    Initialize a new Excel workbook and save it at the `output_path` location in your file system:
    ```python
if not os.path.exists(output_path):
    workbook = Workbook()
    workbook.save(output_path)
    ```

4. **Loop Through Each Text File** <br>
    Loop through each text file in the directory, read the content and add it as a new worksheet in the workbook:
    ```python
with pd.ExcelWriter(output_path, engine='openpyxl', mode='a') as writer:
    # Loop through each text file in the directory
    for filename in os.listdir(directory):
        if filename.endswith(ext):
            filepath = os.path.join(directory, filename)
            try:
                # Read the text file into a DataFrame
                df = pd.read_csv(filepath, delimiter=sep)
                # Remove the .txt extension for the sheet name
                sheet_name = os.path.splitext(filename)[0]
                # Add the DataFrame to the workbook as a new worksheet
                df.to_excel(writer, sheet_name=sheet_name, index=False)
            except Exception as e:
                print(f"Error processing file {filename}: {e}")

    # Remove the default sheet if it's still present and empty
    if 'Sheet' in writer.book.sheetnames and len(writer.book.sheetnames) > 1:
        std = writer.book['Sheet']
        writer.book.remove(std)
    ```
    **NOTE:** The workbook is saved automatically when the `with` block-code is exited.
    <div class="protip" markdown="1">
    **Error Handling:**
The error handling catches any exceptions that occur while processing a file and prints an error message specifying the file name and the error details. Consider adding error handling to manage other potential issues, such as reading files or writing to Excel.
    </div>



### *3. Run the script*

<details class="l-frame" markdown="1"><summary class="c-header"><b>Here is the complete script:</b></summary>

filename: `import_txt_to_excel.py`
<p class="footnote" style="margin-bottom: 0 !important;">code by @Alex</p>
```python
import os
import pandas as pd
from openpyxl import Workbook

# Set variables: paths (directory input and output file) and input delimiter
directory = 'path/to/your/text_files'        # Adjust directory with input TXT files
output_path = 'path/to/your/output.xlsx'     # Adjust output path and XLSX filename
sep = ','                                    # Adjust delimiter if necessary
ext = '.txt'                                 # Adjust extension of your text files

#------ AUTOMATICALLY BELOW ------#
# Create an empty Excel file if it doesn't exist
if not os.path.exists(output_path):
    workbook = Workbook()
    workbook.save(output_path)

# Use ExcelWriter to manage writing DataFrames to the workbook
with pd.ExcelWriter(output_path, engine='openpyxl', mode='a') as writer:
    # Loop through each text file in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            filepath = os.path.join(directory, filename)
            try:
                # Read the text file into a DataFrame
                df = pd.read_csv(filepath, delimiter=sep)

                # Remove the .txt extension for the sheet name
                sheet_name = os.path.splitext(filename)[0]

                # Add the DataFrame to the workbook as a new worksheet
                df.to_excel(writer, sheet_name=sheet_name, index=False)
            except Exception as e:
                print(f"Error processing file {filename}: {e}")

    # Remove the default sheet if it's still present and empty
    if 'Sheet' in writer.book.sheetnames and len(writer.book.sheetnames) > 1:
        std = writer.book['Sheet']
        writer.book.remove(std)
```
</details>

1. **Open Command Prompt or Terminal** <br>
    Navigate to the directory where you saved `import_txt_to_excel.py` using the command prompt or terminal.

2. **Run the Script** <br>
    Execute the script by typing the following command and pressing Enter:
    ```bash
    python import_txt_to_excel.py
    ```
3. **Locate and check the output file** <br>
    After the script finishes running, navigate to the directory specified in `output_path`. Open the generated `output.xlsx` file in Excel. You should see a separate worksheet for each text file, labeled with the file name (without the `.txt` extension).
    ![the preview of the output Excel file]({{ images_path }}/excel_python_txt_import_output.png)
