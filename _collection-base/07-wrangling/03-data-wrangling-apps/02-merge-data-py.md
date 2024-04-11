---
title: "Merge files by common column"
note: (python)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 732
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

The <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/merge_data" target="_blank">merge_data.py ⤴</a> application is written in Python3 and employs an efficient pandas library for operating on a column-like data structure. The application enables the **merging of two files by matching columns** with filling in the **missing data by customized error values**. <br>

**Merging files by a common column facilitates:**
- creating a robust dataset from different source files
- complementing the features for observables
- finding the common part of two data sets
- detecting missing data in results

## App Features

* merging files of the same or different format, i.e., with different column headers or different column order
* merging files separated by different delimiters (including .xlsx files)
* merging multiple files all at once
* keeping only selected columns during the merge (the same or different columns from files)

## Algorithm

<table style="font-size: 1em;">
  <tr> <th style="width:40%;">Schema</th> <th>Notes</th> </tr>
  <tr> <td>
        <img src="{{ images_path }}/merge_data.png" alt="Merge data app" width="500"><br>
        <i>The figure shows the algorithm of merging two files by common column.</i>
       </td> <td>
        <li> both files should be a column-like text file (including Excel .xlsx format and CSV separated with different delimiters) </li>
        <li> both files should include a matching column (with the same values), but the header may be different in each file </li>
        <li> data (all columns) from the second file (i.e., merge_file) is added to the first file (i.e., input_file) and automatically saved in the output file </li>
        <li> the user can customize the name of the output file </li>
        <li> the user has to provide the indexes of matching columns (numbering starts from 0) or unique headers of columns </li>
        <li> if some values are missing in the merge_data file, the corresponding fields are filled with pre-set missing_value (-9999.99 by default, user can customize it) </li>
    </td> </tr>
</table>


## Requirements

* `python3`
* `pandas`
* `openpyxl`


## Options

help & info arguments:
```
  -h,         --help                       # show full help message and exit
```

required arguments:
```
-i file1,     --data-file-1 file1          # [string] input multi-col file
-m file2,     --data-file-2 file2          # [string] merge multi-col file
-c cols,      --matching-columns cols      # list of the same column of two files, e.g., 0,5 or label1,label2
```

optional arguments:
```
-e missing, --error-value missing          # [any] provide custom value for missing data
-o outfile, --output-datafile outfile      # [string] provide custom name for the output data_file
-f format,  --output-format format         # [int] select format for output file: 0 - original, 1 - csv, 2 - xlsx
```

*defaults for optional arguments:*
```
-e -9999.99            # means: all missing data will be replaced with -9999.99
-o 'data_output'       # means: the output will be saved as 'output_data' file
-f 0                   # means: the output will be saved in the original format
```


## Usage (generic)

**syntax:**<br>
*^ arguments provided in square brackets [] are optional*
```bash
python3 merge_data.py -i file1 -m file2 -c cols
                     [-e missing] [-o outfile] [-f format]
                     [-h]
```

**example usage with minimal required options:**
```
python3 merge_data.py -i input_file -m merge_file -c 1,5
```

*The example parses two column-like files (input_file and merge_file), where the common column has index = 1 in the first file, and index = 5 in the second file. The missing data will be replaced with the default error value = -9999.99. The merged results will be saved into the default 'data_output-$date' file.*

<span style="color: #ff3870;font-weight: 500;">Explore more usage examples in the documentation of this app in the `data_wranglig` repo: <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/merge_data#example-usage" target="_blank">merge_data: Example usage  ⤴</a>.</span>

# Hands-on tutorial

## Environment setup

The application is developed in Python3 programming language and requires importing several useful  libraries. Thus, to manage dependencies, first you have to set up the Conda environment on your (local or remote) machine. Follow the instructions provided in section <a class="t-links" href="731" section="#environment-setup">Environment setup</a> in the introduction to <a class="t-links" href="731"></a> to get Python installed and create `data_wrangling` virtual environment using <b>install <a href="https://docs.conda.io/en/latest/" target="_blank">Conda ⤴</a></b>.

<span style="color: #ff3870;font-weight: 500;">Once you have Conda and the <i>data_wrangling</i> environment follow further steps below.</span>

**Activate existing Conda environment**

You do NOT need to create the new environment each time you want to use it. Once created, the env is added to the list of all virtual instances managed by Conda. You can display them with the command:

```bash
conda info -e
```

![Conda envs]({{ images_path }}/03-conda_envs.png)

The selected environment can be activated with the `conda activate` command, followed by the name of the env:

```bash
conda activate data_wrangling
```

![Conda activate]({{ images_path }}/03-conda_activate.png)

*Once the environment is active, you can see its name preceding the prompt.*


**Install new dependencies within environment**

Once environment of your choice is activated, you can install new dependencies required by the selected application.

The <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/merge_data" target="_blank"><b>merge_data ⤴</b></a> application requires:
* <a href="https://pandas.pydata.org" target="_blank">pandas ⤴</a>, to create and manage data structure
* <a href="https://openpyxl.readthedocs.io/en/stable/" target="_blank">openpyxl ⤴</a>, to read/write Excel 2010 xlsx/xlsm files

If you use Conda environment management system and followed the instructions provided above in section [Environment setup](#environment-setup) then you are ready to get started with `Data Wrangling Apps` *(because the requirements were installed as basic dependencies in this virtual environment)*.

Alternatively, if you want to use this app in system-wide mode *(without creating a virtual environment)*, then install the neccessary requirements using the commands:

```bash
pip3 install pandas
pip3 install openpyxl
```


## Inputs

Before using the application, make sure your inputs has been properly prepared. First of all, the **data** in the input file must be **organized into columns**. The number of columns and rows is arbitrary, including **Big Data support** (text file size reaching GBs).

*data structure in the example CSV input: `input0.txt`*
<a href="https://raw.githubusercontent.com/ISUgenomics/data_wrangling/main/merge_data/data/input0.txt" target="_blank"><input type="button" value="Open raw ⤴" style="background-color: #e7e7e7; color: black;" /></a>
<a id="raw-url" href="https://github.com/ISUgenomics/data_wrangling/blob/main/merge_data/data/input0.txt" target="_blank"><input type="button" value="Open at GitHub ⤴" style="background-color: #e7e7e7; color: black;" /></a>

```
fruit,size(in),weight(oz)
apple,4,6.8
blueberry,5/8,0.02
orange,4,4.6
lemon,3,3.5
strawberry,3/8,0.4
```

*data structure in the example Excel input: `data_CN.xlsx`*
<a href="https://github.com/ISUgenomics/datascience-workbook/raw/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_CN.xlsx" target="_blank"><input type="button" value="Download ⤵" style="background-color: #e7e7e7; color: black;" /></a>
<a id="raw-url" href="https://github.com/ISUgenomics/datascience-workbook/blob/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_CN.xlsx" target="_blank"><input type="button" value="Open at GitHub ⤴" style="background-color: #e7e7e7; color: black;" /></a>

![02_data_wrangling_merge_1.png]({{ images_path }}/02_data_wrangling_merge_1.png)



## *File format*

The format of the input file does NOT matter as long as it is a columns-like text file. Text (.txt) files with columns separated by a uniform white character (single space, tabulator), comma-delimited CSV files, or Excel files are preferred, though.

## *Data delimiter*

The data delimiter used does NOT matter, as it will be automatically detected by application. However, it is essential that the column separator is consistent, for example, that it is always a fixed number of spaces ` ` &nbsp; only or always a tab, `\t`. If separator is a comma `,` remember NOT to use it inside a given data cell (e.g., if the values in the column are a list).

![Column separator]({{ images_path }}/03-input_separator.png)

## *Column names*

The **header** is usually the first line of the file and contains the column labels. Naming the columns brings great **informational value** to the analyzed data. However, the application does NOT require the input file to have a header. If it is in the file it will be detected automatically. Otherwise, you should use the column indexes to indicate the matching columns and columns to be kept. <span style="color: #ff3870;font-weight: 500;">Remeber that in Python, indexing starts from 0.</span>

![Columns header]({{ images_path }}/03-input_header.png)

## *File content*

Running the application requires that you specify the names of input files and indexes (or names) of matching (shared) columns:
* `-i` list of inputs
* `-c` list of columns matching between inputs

### *• Input files*

You can specify inputs as a comma-separated list of filenames or a column-like file containing paths & filenames of all inputs.

*For example:*
```
-i input0.txt,input1.txt
```
or
```
-i inputs_list
```
where the `input_list` is a one-column file such as:
```
input0.txt
input1.txt
input2.txt
```

### *• Matching columns*

The `mereg_data` app provides `-c mcols` option which is the required argument for the program. The user should specify the list of matching columns in the input files. In these columns, the values should be identical and unique, while the order can differ to correctly merge data from multiple files.

*For example:*
* if merging files have the same data structure, i.e., the matching column has the same index, you can specify it as follows:

```
-c 0                    # it means that in all inputs, the matching column has index 0 (i.e., it's the first column in the file)
```

![02_data_wrangling_merge_2.png]({{ images_path }}/02_data_wrangling_merge_2.png)

* if merging files have different data structure, i.e., the matching column has different index, you can specify it as follows:

```
-c 0,1                  # specify indexes of matching columns in the inputs
```
or
```
-c USDA#,ARS_Label      # specify column labels (headers) of matching columns
```
![02_data_wrangling_merge_3.png]({{ images_path }}/02_data_wrangling_merge_3.png)

## Usage variations

Besides the required options (`-i`, `-c`) which enable the simple merging of multiple files by a shared column, the app offers a great customization via optional arguments. Using them you can:
* select columns to be kept (`-k`) individually from each input file
* provide custom value for missing data (`-e`)
* provide custom name for the merged output (`-o`)
* select format for output file (`-f`)
* select app verbosity level (`-v`)

The <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/merge_data#example-usage" target="_blank">Example usage  ⤴</a> section in the documentaion of the app in the <a href="https://github.com/ISUgenomics/data_wrangling/" target="_blank">data_wrangling  ⤴</a> repo provides practical examples of using these options in various configurations. Please explore the ready-made examples to learn more about specific options.


## Case study

<span style="color: #ff3870;font-weight: 500;">In this section of the tutorial we use the data_merge app to solve a real-life problem faced by the collaborating researchers who needed to merge their datasets labeled differently.</span>

<div class="warning" markdown="1">
**Matching datasets manually can be a time-consuming and error-prone process.** It is not a reliable approach due to the risk of <u>human error</u> and the possibility of <u>missing data</u> or overlooking important information. Mistakes can lead to data inconsistencies, inaccuracies, and negatively impact research outcomes.
</div>

<div class="protip" markdown="1">
Software solutions like **Python-based** `data_merge` **app** can be a better approach for matching datasets because they can <u>automate the process</u>, reducing the likelihood of human error and increasing efficiency. It can also <u>ensure consistency and accuracy</u>, identify discrepancies, and be customized to meet specific needs and requirements.
</div>

**In this Case Study we use the inputs in the Excel format (.xlsx).** Usage examples for different input formats (CSV, TXT) are available in the <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/merge_data#example-usage" target="_blank">Example usage  ⤴</a> section in the documentaion of the app in the <a href="https://github.com/ISUgenomics/data_wrangling/" target="_blank">data_wrangling  ⤴</a> repo.


### *Background story*

Two labs, Lab A and Lab B, were collaborating on a research project regarding quality of grains. As part of the project, they used the same experimental samples and conducted different measurements to obtain some numerical data. However, each lab labeled the samples differently, resulting in confusion when it came time to analyze the data. Luckily, the file containing the corresponding pairs of labels to each sample is available.

### *The general task*

**ISSUE:** Each lab had collected two different kinds of experimental measurements in relation to the different set of labels.

**TASK:** Match the data and measurements from each lab based on the corresponding labels and create a robust merged dataset.

**METHOD:** Use a Python-based `data_merge` app as an automated and flexible approach that saves users time and reduced the risk of human error.

### *Inputs*

Below is the preview of the required `data` and `labels` input files.

* The *data_CN.xlsx* and *labels.xlsx* share the same column with **ARS labels**, even though in both files this column has a different name *(i.e., USDA# and ARS_Label, marked with the green frames)*. <br>
<a href="https://github.com/ISUgenomics/datascience-workbook/raw/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_CN.xlsx" target="_blank"><input type="button" value="Download ⤵" style="background-color: #e7e7e7; color: black;" /></a>
<a id="raw-url" href="https://github.com/ISUgenomics/datascience-workbook/blob/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_CN.xlsx" target="_blank"><input type="button" value="Open at GitHub ⤴" style="background-color: #e7e7e7; color: black;" /></a>

* The *labels* file contains an additional column with `Sample Num` paired with the `ARS labels` and together they provide a set of matching pairs of labels for the experimental samples. <br>
<a href="https://github.com/ISUgenomics/datascience-workbook/raw/main/_collection-base/07-DataParsing/assets/data/grain_quality/labels.xlsx" target="_blank"><input type="button" value="Download ⤵" style="background-color: #e7e7e7; color: black;" /></a>
<a id="raw-url" href="https://github.com/ISUgenomics/datascience-workbook/blob/main/_collection-base/07-DataParsing/assets/data/grain_quality/labels.xlsx" target="_blank"><input type="button" value="Open at GitHub ⤴" style="background-color: #e7e7e7; color: black;" /></a>

* The other `data` file, *data_NN.xlsx* contains measurements collected by the second lab and labeled with the `Sample Num` identifiers *(marked with the blue frames)*. <br>
<a href="https://github.com/ISUgenomics/datascience-workbook/raw/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_NN.xlsx" target="_blank"><input type="button" value="Download ⤵" style="background-color: #e7e7e7; color: black;" /></a>
<a id="raw-url" href="https://github.com/ISUgenomics/datascience-workbook/blob/main/_collection-base/07-DataParsing/assets/data/grain_quality/data_NN.xlsx" target="_blank"><input type="button" value="Open at GitHub ⤴" style="background-color: #e7e7e7; color: black;" /></a>

As you can see, the number of rows in the `labels` file is significantly higher than in the `data` files *(marked with the red frames)*.

![02_data_wrangling_merge_4.png]({{ images_path }}/02_data_wrangling_merge_4.png)


### *Approach*

There are two tasks to performe:

1. Adding matching `Sample Num` from the *labels.xlsx* file into the *data_CN.xlsx* file using matching `ARS_Label`-`USDA#` columns.

2. Transfering data from the *data_NN.xlsx* file into the *data_CN.xlsx* file using matching `Sample Num` column (now available in both files).

Both tasks can be realized using the same `data_merge` app but in two separate steps.

### *Solution*

**STEP 1** <br>
Adding matching `Sample Num` from the *labels.xlsx* file into the *data_CN.xlsx* file using matching `ARS_Label`-`USDA#` columns.

```bash
python3 merge_data.py -i data_CN.xlsx,labels.xlsx -c 0,1 -o output_step1 -f 2 -v 1
```

OUTPUT: `output_step1.xlsx`

![02_data_wrangling_merge_5.png]({{ images_path }}/02_data_wrangling_merge_5.png)

**STEP 2** <br>
Transfering data from the *data_NN.xlsx* file into the *data_CN.xlsx* file using matching `Sample Num` column (now available in both files).

```bash
python3 merge_data.py -i output_step1.xlsx,data_NN.xlsx -c 11,0 -o output_step2 -f 2 -v 1
```

OUTPUT: `output_step2.xlsx`

![02_data_wrangling_merge_6.png]({{ images_path }}/02_data_wrangling_merge_6.png)
