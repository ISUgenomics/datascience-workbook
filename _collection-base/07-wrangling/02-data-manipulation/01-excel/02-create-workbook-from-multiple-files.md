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

Managing and analyzing data spread across multiple text files can be a cumbersome and time-consuming task, especially when each file needs to be imported as a separate worksheet in an Excel workbook.<br>
<em class="cons"></em> Manually importing each file one by one is not only tedious but also prone to errors. <br>
<em class="pros"></em> This tutorial provides a <span class="c-good">step-by-step guide to automate the process</span>.

*By the end of this tutorial, you will be able to import a large number of text files into Excel efficiently, with each file placed in its own worksheet and labeled based on the file name.*

## Import multiple text files as separate worksheets in Excel
If there are large number of text files that you need to import as a separate worksheet, follow these guidelines. Note that the file name of the text file will be used to label the worksheet (tab), without the `.txt` extension.
Before proceeding, check if you have enabled the macros, i.e., if you don't see `DEVELOPER` tab in you empty spreadsheet,  click on `FILE`, `OPTIONS` and `Customize Ribbon`. You should see a check box on the right hand side, for the `DEVELOPER` tab, check it and click `OK`.
Click on `DEVELOPER` and then `Macros`, type in some name (eg. `import_text`), click `create`.
Paste the below code on the popped window:

```vb
Sub CombineTextFiles()
    Dim FilesToOpen
    Dim x As Integer
    Dim wkbAll As Workbook
    Dim wkbTemp As Workbook
    Dim sDelimiter As String

    On Error GoTo ErrHandler
    Application.ScreenUpdating = False

    sDelimiter = "|"

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
    wkbAll.Worksheets(x).Columns("A:A").TextToColumns _
      Destination:=Range("A1"), DataType:=xlDelimited, _
      TextQualifier:=xlDoubleQuote, _
      ConsecutiveDelimiter:=False, _
      Tab:=False, Semicolon:=False, _
      Comma:=False, Space:=False, _
      Other:=True, OtherChar:="|"
    x = x + 1

    While x <= UBound(FilesToOpen)
        Set wkbTemp = Workbooks.Open(FileName:=FilesToOpen(x))
        With wkbAll
            wkbTemp.Sheets(1).Move After:=.Sheets(.Sheets.Count)
            .Worksheets(x).Columns("A:A").TextToColumns _
              Destination:=Range("A1"), DataType:=xlDelimited, _
              TextQualifier:=xlDoubleQuote, _
              ConsecutiveDelimiter:=False, _
              Tab:=False, Semicolon:=False, _
              Comma:=False, Space:=False, _
              Other:=True, OtherChar:=sDelimiter
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

Now you are all set to import files. Click on `Macros` again, and then `Run`. A window should pop up asking location of the text files. Navigate to the files location and select all text files. Click `OK`. All text files will be imported to a new spreadsheet. It might take a while to complete, if there are large number of files, so be patient.


## **Python-based automation**

This section will walk you through the process of **using** `Python` **to automate the import of multiple text files into Excel**. <br>
<em class="pros"></em> This approach will save you time and reduce the risk of errors compared to manual data entry.

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

Ensure all the text files you want to import are stored in a single directory. For example, let's say your files are stored in a folder named `text_files`.

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
    **NOTE:** The workbook is saved automatically when the `with` block-code is exited.
    <div class="protip" markdown="1">
    **Error Handling:**
The error handling catches any exceptions that occur while processing a file and prints an error message specifying the file name and the error details. Consider adding error handling to manage other potential issues, such as reading files or writing to Excel.
    </div>



### *3. Run the script*

<details class="l-frame" markdown="1"><summary class="c-header"><b>Here is the complete script:</b></summary>

`import_txt_to_excel.py`
```python
import os
import pandas as pd
from openpyxl import Workbook

# Set variables: paths (directory input and output file) and input delimiter
directory = 'path/to/your/text_files'        # Adjust directory with input TXT files
output_path = 'path/to/your/output.xlsx'     # Adjust output path and XLSX filename
sep = ','                                    # Adjust delimiter if necessary

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
