---
title: "Aggregate data over slicing variations"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

# App overview

The <a href="https://github.com/ISUgenomics/data_wrangling/tree/main/bin_data" target="_blank">bin_data.py ⤴</a> application is written in Python3 and employs efficient libraries [pandas and numpy] for operating on a complex data structure. The application **aggregates observables** [by summing or averaging numerical values] over the data slices (rows grouped in a slice). The statistic (**STATS**) is calculated separately for each column of numerical values, while **R** = 'ranges-column' can be used to bin data based on the incrementation of values.

**Aggregating observables facilitates:**
- coarsening the patterns of observed feature
- detecting regions/ranges enriched or depleted by the feature
- assessing the significance threshold of measured feature


## Algorithm

![Bin data app](../assets/images/bin_data.png)<br>
<i>The figure shows the main steps of the <code>bin_data</code> algorithm.</i><br>

<b>1)</b> The optimal data structure requires:<br>
<b>L</b> - <code>label-column</code>, a column of labels,<br>
<b>R</b> - <code>ranges-column</code>, numerical [int, float] column of data characteristic (index, position, increment, feature),<br>
<b>numD</b> - <code>data-columns</code>, any number of numerical columns that will be aggregated.<br>

<b>2)</b> First, data is split into chunks based on assigned category labels (<b>L</b>). Optionally, sing <code>-s 'true'</code> option, chunks can be saved into separate CSV files, which facilitates Big Data loading in the repetitive analyses.<br>

<b>3)</b> Next, each <b>L</b>-based data chunk is split into slices composed of a specific number of consecutive rows, typically based on the <b>R</b> column.<br>
The type of slices can be requested using the `-t` option as:
- **steps**, where the **size of the slice** is user-provided as the number of consecutive data rows (<i>n</i>); the returned output contains <i><code>~N/n</code></i> slices (<i>where N is the number of rows in the input file</i>); rows count in each slice is the same;
- **bins**, where the **number of slices** is user-provided (<i>n</i>); the returned output contains <i><code>n</code></i> slices; rows count in each slice is the same;
- **value**, where the slices are cut based on the **increment of the value** in the selected (numerical) <b>R</b> column (use the `-r` option to specify the <code>'ranges-column'</code> index); the returned output may contain a different number of slices (<b>bins</b>) depending on the coarseness of the value increment (<i>n, [int or float]</i>); rows count in each slice can be different, so the additional column <code>'counts'</code> is added into the output to facilitate tracking of empty bins;

The slicing procedure is performed separately for each category (if multiple are provided) stored in the **L** = 'labels-column', use the `-l` option. If the user is interested in processing selected labels only, they can be inputed with the `-ll` option as a one-column file or inline comma-separated string.<br>

<b>4)</b> Data stored in each numerical column (<b>NumD</b>) is aggregated over the rows in a given slice. So, the single row of data per slice is returned in the output.<br>
The user choose to <i>sum</i> or <i>average</i> values in the numerical columns as the calculated statistics (<b>STATS</b>) with the option <code>-c</code> followed by string argument <code>'sum'</code> or <code>'ave'</code>, respectively.<br>
In the output, the **R** = 'ranges-column' (with the default *'position'* header) stores starting position in the slice or range of incremented values.


## Requirements

Requirements: python3, pandas, numpy

<details><summary>Install Python3 on various operating systems <i>(if you don't have it yet)</i></summary>

<div style="margin-left: 20px; margin-top: 10px;">
<li> Python3 - Ubuntu<br>
<code style="background-color: #e4f0f0; width:100%; display: block; margin-top:5px;">
<pre style="margin: 0px; padding-left: 15px;">
sudo apt-get update
sudo apt-get install python3</pre>
</code>
</li><br>

<li> Python3 - macOS<br>
<i>if not yet, first install Homebrew:</i><br>
<code style="background-color: #e4f0f0; width:100%; display: block; margin-top:5px;">
<pre style="margin: 0px; padding-left: 15px; overflow-x:scroll;">
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</pre>
</code><br>
<code style="background-color: #e4f0f0;  width:100%; display: block; padding: 15px 0px;">
brew install python3
</code>
</li><br>

<li>Python3 - Windows<br>
Please follow the instructions provided at <a href="https://phoenixnap.com/kb/how-to-install-python-3-windows" target="_blank">phoenixnap.com</a> .
</li>
</div>
</details><br>


**Install app requirements**

```
pip3 install pandas
pip3 install numpy
```

## Options

help & info arguments:
```
  -h,         --help                    # show full help message and exit
  -v level,   --verbose level           # [int] increase verbosity: 0 = warnings, 1 = info, 2 = rich info
```

required arguments:
```
-i input,     --data-source input       # [string] input multi-col file or directory with data chunks
-l label,     --labels-col label        # [int]    index of column with labels used to chunk data
-r range,     --ranges-col range        # [int]    index of column with ranges used to slice data
```

optional arguments:
```
  -ll llist,  --label-list llist        # [path] or [comma-separated list] provide custom list of labels to be processed
  -hd header, --header header           # [list]            provide custom ordered list of columns names (header)
  -ch chunks, --chunk-size chunks       # [int]             provide custom size of chunks (number of rows loaded at once)
  -s save,    --chunk-save save         # {true,false}      saves data into chunked files
  -c calc,    --calc-stats calc         # {ave,sum}         select resizing operation: ave (mean) or sum
  -t type,    --slice-type type         # {step,bin,value}  select type of slicing: 'step' (number of rows in a slice) or 'bin' (number of slices) or 'value' (value increment in ranges-col)
  -n slice,   --slice-size slice        # [float]           select size/increment of slicing
  -d dec,     --decimal-out dec         # [int]             provide decimal places for numerical outputs
  -o out,     --output out              # [string]          provide custom output filename
```

*defaults for optional arguments:*
```
-ll None                # means: all labels will be processed
-hd None                # means: assigning 'label' for labels-col, 'position' for ranges-col, and 'val-X' for remaining columns, where X is an increasing int number
-ch None                # means: optimizing number of loaded input rows for 250MB memory usage
-s 'true'               # means: data chunked by unique labels will be saved in CSV format into the CHUNKS/ directory; disabled when input is a directory
-c 'ave'                # means: average of each numerical column in the slice will be returned
-t 'step'               # means: data will be sliced by the number of rows in a slice (each slice consists of the same number of rows)
-n 100                  # means: (-t 'step') the slice will be composed of 100 rows or (-t 'bin') there will be 100 slices in total or (-t 'value') the increment for slicing will be 100
-d 2                    # means: 2 decimal places will be kept for all numeric columns
-o 'output_data'        # means: the output will be saved as 'output_data.csv' file
```


## Usage (generic)

**syntax:**<br>
*^ arguments provided in square brackets [] are optional*
```
python3 bin_data.py -i input -l label -r range [-ll labels_list] [-hd header_names]
                   [-ch chunks_size] [-s {true,false}]
                   [-c {ave,sum}] [-t {step,bin,value}] [-n slice]
                   [-d dec] [-o out]
                   [-v [VERBOSE]] [-h]
```

*^ arguments provided in square brackets [] are optional*

**example usage with minimal required options:**

```
python3 bin_data.py -i input_file -l 0 -r 1
```

*The example parses the single text-like input_file, where the <b>L</b> = 'label-column' has index 0, and <b>R</b> = 'ranges-column' has index 1.*


# Hands-on tutorial

## Environment setup

The application is developed in Python programming language and requires importing several libraries providing useful ready-made functions and objects handling complex data structure. Thus, to have the app working on your (local or remote) machine, first you have to set up the environment.

Considering you will be using various applications that require different dependencies, you need neat way to manage them. A good choice is <a href="https://docs.conda.io/en/latest/" target="_blank">Conda ⤴</a> environment management system that runs on all: Windows, macOS, and Linux.<br>
If you are not already using Conda, go to the <a href="https://datascience.101workbook.org/03-SetUpComputingMachine/02C-basic-developer-libraries" target="_blank">Basic Developer Libraries ⤴</a> tutorial for a step-by-step guide on how to set up the environment manager on your target computing machine. <i>If you have a Mac with a dual processor (Arm64 and Intel's x86-64) you can find dedicated setup instructions in section <a href="https://datascience.101workbook.org/03-SetUpComputingMachine/03A-tutorial-installations-on-mac#install-developer-libraries" target="_blank">Install Basic Developer Tools ⤴</a> of the <a href="https://datascience.101workbook.org/03-SetUpComputingMachine/03A-tutorial-installations-on-mac" target="_blank">Installations on MacBook Pro ⤴</a> tutorial.</i>

**Test Conda installation**

To test your Conda configuration, in the terminal window, run the command provided below:
```
conda info
```

If the screen displays a message similar to the one in the image below, you are ready to create a new environment.

![Conda info](../assets/images/03-conda_info.png)

Otherwise, if a `command not found` error is thrown back, follow the instructions in the [previous paragraph](https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/01-merge-data-py#environment-setup) to install Conda correctly.

**Create new Conda environment**

To create a Conda virtual environment, type `conda create` followed by the name [here: *data_wrangling*] of the new env along with the `-n` argument. Further you can provide a list of modules to install. In this case, let's initialize the environment for `python` version 3.9.

```
conda create -n data_wrangling python=3.9
```

**Activate existing Conda environment**

You do NOT need to create the new environment each time you want to use it. Once created, the env is added to the list of all virtual instances managed by Conda. You can display them with the command:

```
conda info -e
```

![Conda envs](../assets/images/03-conda_envs.png)

The selected environment can be activated with the `conda activate` command, followed by the name of the env:

```
conda activate data_wrangling
```

![Conda activate](../assets/images/03-conda_activate.png)

**Install new dependencies within environment**

Once environment of your choice is activated, you can install new dependencies required by the application. Generally, you can try to install modules with the `conda install {module=version}` command. However, since we initialized the **data_wrangling** environment with Python=3.9, we can also install modules using `pip install {module==version}`, as follows:

```
pip install pandas
pip install numpy
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that if you do not indicate the version of the module you are installing, the latest stable release will usually be installed. <br><br>
When you install by <code>conda</code>, assign the module's version using a single equals sign <code>=</code>. <br><br>
When you install by <code>pip</code>, assign the module's version using a double equals sign <code>==</code>.
</span>
</div>


## Inputs

Before using the application, make sure your inputs has been properly prepared. First of all, the **data** in the input file must be **organized into columns**.

*data structure in the example `input.txt`*
```
HiC_scaffold_1  982     0       0       0       0       0       1       0       0
HiC_scaffold_1  983     0       0       0       0       0       1       0       0
HiC_scaffold_1  984     0       0       0       0       0       1       0       0
HiC_scaffold_1  985     0       0       0       0       0       1       0       0
HiC_scaffold_1  986     0       0       0       0       0       1       0       0
HiC_scaffold_1  987     0       0       0       0       0       1       0       0
...
HiC_scaffold_10 547     3       1       0       0       1       0       0       0
HiC_scaffold_10 548     3       1       0       0       1       0       0       0
HiC_scaffold_10 549     3       1       0       0       1       0       0       0
HiC_scaffold_10 550     3       1       0       0       1       0       0       0
```

**Input file format**

The format of the input file does NOT matter as long as it is a columns-like text file. Text (.txt) files with columns separated by a uniform white character (single space, tabulator) or comma-delimited CSV files are preferred, though.

**Input data delimiter**

The data delimiter used does NOT matter, as it will be automatically detected by application. However, it is essential that the column separator is consistent, for example, that it is always a fixed number of spaces ` `&nbsp; only or always a tab, `\t`. If separator is a comma `,` remember NOT to use it inside a given data cell (e.g., if the values in the column are a list).

![Column separator](../assets/images/03-input_separator.png)

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that only data from numeric columns will be aggregated. So, if the values in a column are a list, so even if the values in the list are numeric, such a column will be treated as a string. <br>
If you want to process such data, change the data structure of the input so that the values in the list split into separate columns.
</span>
</div><br>

**Column names in the header**

The **header** is usually the first line of the file and contains the column labels. Naming the columns brings great **informational value** to the analyzed data. However, the application does NOT require the input file to have a header. If it is in the file it will be detected automatically. Otherwise, the default set of column labels [ *[see options section](https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/02-slice-or-bin-data-py#options)* ] will be assigned.

![Columns header](../assets/images/03-input_header.png)

**Content of the input file**

Running the application requires that you specify the index of the `labels` and `ranges` columns.

**Labels** column should contain labels or categories assigned to the observables. They are used to aggregate values over data chunks corresponding to the unique labels. The values in the `labels` column can be strings or numerical. <br>
If all your data belong to the same or none category, you can add to your file a column with all identical values, e.g., *'label'* or *0*.

* *input file without header*

```
sep='\t'
sed "1,$ s/^/value$sep/" < file > input
```
*^ paste your separator within ' '*

![Input label column](../assets/images/03-input_label-col.png)

* *input file with header*

```
sep='\t'
sed "1s/^/label$sep/; 2,$ s/^/value$sep/" < file > input
```
*^ paste your separator within ' '*

![Input label column](../assets/images/03-input_label-col-header.png)

## Usage variations

<!--

* **example usage with large raw input file:**

```
python3 bin_data.py -i hybrid.depth -l 0 -r 1 -t 'step' -n 1000 -s True -v 1
```

*The example parses the single text-like hybrid.depth input file, where the <b>L</b> = 'label-column' has index 0, and <b>R</b> = 'ranges-column' has index 1. The 'step' is a selected <b>type</b> of rows grouping, and each slice will be composed of 1000 rows. For unique labels, data chunks will be saved as separate CSV files in the ./CHUNKS directory. The <b>v</b>erbosity level set to 1 means logging on the 'info' level.*

* **example usage with input directory of data chunks in CSV format:**

```
python3 bin_data.py -i CHUNKS/ -l 0 -r 1 -t 'value' -n 0.15 -s 'false' -v 0
```

*The example parses the label-based data chunks stored in the CHUNKS/ directory. All data chunks have the same data structure, where the <b>L</b> = 'label-column' has index 0, and <b>R</b> = 'ranges-column' has index 1. The 'value' is a selected <b>type</b> of rows grouping, so each bin (slice) will be created based on the increment of values in the <b>R</b> = 'ranges-column' by 0.15. The label-based data chunks will not be saved (default when the input is a directory). The <b>v</b>erbosity level set to 0 means that 'warnings' will be logged while progress 'info' will be skipped.*

* **example usage with all default settings:**

```
python3 bin_data.py -i {path} -l {int} -r {int} -ll None -hd None -ch None -s True -c 'ave' -t 'step' -n 100 -d 2 -o 'output_data' -v 0
```

*The example parses inputs stored on the custom <b>path</b>, where the <b>L</b> = 'label-column' has a given index specified as an integer number, and <b>R</b> = 'ranges-column' also has the integer index (in Python, an indexing starts from 0). The three first arguments are required and have to be user-provided.*<br>
<i>
By default:
- all labels are parsed when option <code>-ll</code> is set to <b>None</b>,
- if no header in the input file and <b>None</b> is provided with option <code>-hd</code>, then 'labels', 'position', and 'val-{int}' will be assigned for 'label-column', 'ranges-column', and all remaining data columns
- with option <code>-ch None</code> data loading will be optimized to N-row bundles corresponding to 250MB memory of pandas data frame
- automatically created label-based chunks will be saved into the ./<code>CHUNKS/</code> directory as separate CSV files; when the input is a directory with data chunks, the option is disabled
- the data in columns is aggregated by calculating the mean (with <code>-c 'ave'</code> option) over the slice composed of 100 consecutive rows (with <code>-t 'step' -n 100</code> options)
- the statistics are calculated for all numerical columns with the precision of 2 decimal places (with option <code>-d 2</code> and saved to the 'output_data.csv' file)
- the verbosity level set to 0 means logging the warnings, errors, and critical messages, while skipping the info about the algorithm progress
</i>

-->






___
# Further Reading
* [SECTION 8: Data Visualization](../../08-DataVisualization/00-DataVisualization-LandingPage)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](01-merge-data-py){: .btn  .btn--primary}
[Next](../../08-DataVisualization/00-DataVisualization-LandingPage){: .btn  .btn--primary}
