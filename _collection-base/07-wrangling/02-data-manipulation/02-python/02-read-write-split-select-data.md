---
title: "Read, write, split, select data"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 722.2
level: 3
categories: ["data-manipulation", "text-manipulation", "programming", "library-package-module", "command-line"]
tags: ["python", "pandas", "dataset", "text-files", "read-write", "join-merge", "data-splitting", "data-cleaning", "data-reshape", "data-filtering", "data-selection", "data-aggregation", "select-col", "select-row", "group-by", "workdir"]
attributes: ["installation", "example", "code-snippet"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Manipulating text files and research data is a common task in scientific research, and **Python** provides powerful tools to accomplish this. By using these tools, you can read, write, and manipulate text files, as well as read and manipulate structured research data stored in formats such as CSV, JSON, Excel files, and more.

<div class="required" markdown="1">
If you are new in Python, get started with exploring the Introduction to <a class="t-links" href="722.1"></a>. <br>
*You will find there a step-by-step guide from setting up a Python development environment to getting practical experience in basics of Python programming.* <base class="mt">
In this practical tutorial we will explore data manipulation tasks related to:
1. Reading from and writing to data files
2. Manipulating text data
3. Spliting and selecting data subsets
</div>


# Basic tasks in data manipulation

<div class="protip" markdown="1">
You can follow these examples as a read-only lesson or open your terminal window to get some hands-on experience.
In the latest scenario, navigate to your preferred working directory and execute the commands as instructed in the exercises below.
</div>

## Reading text files

The first step is to read the text file using the Python built-in `open()` function. This function returns a file object, which can be used to read the contents of the file. <br>
You can specify the mode of the file as:
* `'r'` (read mode),
* `'w'` (write mode), or
* `'a'` (append mode) <br>
depending on the task you want to perform.

To read a text file in read mode, use the following code:
```python
with open('input.txt', 'r') as file:
    contents = file.read()

print(contents)
```
*This code opens the file* `input.txt` *in read mode and assigns its contents to the variable* `contents`. *The* `with` *statement ensures that the file is properly closed after it has been read.*

<div class="exercise" markdown="1">
You can download an example `input.txt` file using <a href="/07-wrangling/assets/data/bird_species/input.txt" download="input.txt"><button class="btn" type="button">this button</button></a> or get it directly from the command line:
```bash
wget https://datascience.101workbook.org/07-wrangling/assets/data/bird_species/input.txt
```
Then, start an interactive Python session in your terminal:
```bash
python
```
Copy-paste the code snippet (provided above) to read and print the contents of a file.
<pre class="output">
<b class="prompt-1 c-header"></b>with open('input.txt', 'r') as file:
<b class="prompt-2"></b>    contents = file.read()
<b class="prompt-2"></b>
<b class="prompt-1"></b>print(contents)
<span class="c-example">Manipulating text files and research data is a common task in scientific research,
and Python provides powerful tools to accomplish this.</span>
</pre>
<div class="protip mb-0" markdown="1">
You can place the same code snippet into a `read_text.py` script file (stored at the same location as your `input.txt` file) and run it in a terminal like this:
```bash
python read_text.py
```
</div>
</div>

<div class="more" markdown="1">
...about other options to read files in Python from the practical tutorial: <a class="t-links" href="533"></a>
</div>


## Writing text files

To write to a text file, you can use the `'w'` mode in the `open()` function.

For example, to write some text to a file, use the following code:
```python
with open('output.txt', 'w') as file:
    file.write('This is some text.')
```
*This code creates a new file called* `output.txt` *in write mode, writes the text 'This is some text.' to it, and then closes the file.*

<div class="exercise" markdown="1">
Try this code snippet in the interactive python session:
<pre class="output">
<b class="prompt-1 c-header"></b>with open('output.txt', 'w') as file:
<b class="prompt-2"></b>    file.write('This is some text.')
<b class="prompt-2"></b>
</pre>
Then exit the python session with `Ctrl + D` (or open new tab in the terminal) and use the `ls` command to check if a new `output.txt` file was created. Preview its contents with `less output.txt` command.
</div>


## Manipulating text data

Once you have read the text data into a variable, you can manipulate it using string methods or regular expressions.

For example: <br>
**A.** to split a string into a list of words, you can use the `split()` method <br>
**B.** to count the number of words in a list, you can use the `len()` method <br>
**C.** to count the number of occurrences of a particular word in a string, you can use the `count()` method <br>
**D.** to replace a substring with another string, you can use the `replace()` method

```python
text = 'This is a sample text from a file.'     # data object of a string type
words = text.split()                            # split the text string into a list of words
num_words = len(words)                          # count the number of words in a list
num_occurrences = text.count('a')               # count the number of occurrences of the word 'a'
new_text = text.replace('sample', 'new')        # replace the word 'sample' with 'new' in a text string
```

<pre class="output">
<b class="prompt-1 c-header"></b>
<b class="prompt-1 c-header"></b>print("text: ", text, "\nnum_words: ", num_words, "\nnum_occur: ", num_occurrences, "\nnew_text: ", new_text)
<span class="c-example">text:  This is a sample text from a file.
num_words:  8
num_occur:  3
new_text:  This is a new text from a file.</span>
</pre>


## Splitting and selecting data

Research data is often stored in structured formats such as CSV, JSON string, or Excel files. Python provides powerful libraries such as `pandas` and `numpy` to read and manipulate such data, including selecting, spliting, and grouping by specific conditions.

<div class="more" markdown="1">
...about **pandas** and **numpy** libraries for Python see the corresponding tutorials:
* <a class="t-links" href="536"></a>
* <a class="t-links" href="537"></a>
</div>

Here is an example syntax of how to **read a CSV file into a pandas** `DataFrame` and manipulate the data:
<div class="required" markdown="1">
Please note that this step requires the user to have **Pandas library installed**. *See <a class="t-links" href="536" section="#install-pandas-library">installation steps here</a>.*
</div>
```python
import pandas as pd

# read the CSV file into a DataFrame
df = pd.read_csv('data.csv')

# filter the data by a specific condition
filtered_df = df[df['column_name'] > 10]

# calculate the mean of a column
mean_value = df['column_name'].mean()

# group the data by a specific column and calculate the sum of another column
grouped_df = df.groupby('column_name')['other_column'].sum()
```
*This code reads a CSV file called* `data.csv` *into a pandas DataFrame called* `df`. *It then filters the data based on a specific condition (entries with a value greater than 10), calculates the mean of the selected column called* `column_name` *and groups the data by a specific column and calculates the sum of another column.*

<b class="c-exercise">Please follow the steps provided in the [Practical Tasks - examples](#practical-tasks) section to get some hands-on experience.</b>

# <button class="btn example">PRACTICAL TASKS</button>


### *Background of the study*

An environmental researcher has collected data on the population size of five different species of birds over a period of 10 years. The purpose of his research is to understand how these bird populations have changed over time and to identify any potential threats to their survival. The five species of birds included in the dataset are the *American Goldfinch*, *Eastern Bluebird*, *Northern Cardinal*, *Ruby-throated Hummingbird*, and *Yellow Warbler*.

## **Dataset**

The dataset consists of 100 records, each representing the number of individuals of each species observed during a specific year and in a specific location. The dataset is in CSV format and has the following columns:
* `Year` : the year in which the observation was made (ranging from 2010 to 2019)
* `Location` : the location where the observation was made (A, B, C, D, or E)
* `American Goldfinch` : the number of American Goldfinches observed
* `Eastern Bluebird` : the number of Eastern Bluebirds observed
* `Northern Cardinal` : the number of Northern Cardinals observed
* `Ruby-throated Hummingbird` : the number of Ruby-throated Hummingbirds observed
* `Yellow Warbler` : the number of Yellow Warblers observed


<div class="warning" markdown="1">
Note that the dataset is artificial and was prepared for the purpose of this tutorial.
</div>

Here's a sample of the first 10 records in the dataset, showing the data structure:
```
Year,Location,American Goldfinch,Eastern Bluebird,Northern Cardinal,Ruby-throated Hummingbird,Yellow Warbler
2010,A,23,10,15,8,7
2010,B,12,7,11,4,9
2010,C,30,18,22,12,11
2010,D,15,13,20,10,6
2010,E,7,4,9,5,4
2011,A,25,12,18,10,9
2011,B,14,10,15,6,12
2011,C,35,20,25,14,13
2011,D,18,15,22,12,8
2011,E,9,5,12,7,5
```
<p class="footnote mt-">Note that the first line contains the column names and the subsequent lines contain the data.</p>
<div class="protip before" markdown="1" data-before="DOWNLOAD DATASET">
You can download the complete `input.txt` file using one of the following methods: <br>
<a href="/07-wrangling/assets/data/bird_species/input.csv" download="vlookup_example.xlsx"><button class="btn" type="button">Download</button></a>
<a href="https://raw.githubusercontent.com/ISUgenomics/datascience-workbook/main/_collection-base/07-DataParsing/assets/data/bird_species/input.csv" target="_blank"><button class="btn" type="button">Open raw ⤴</button></a>
<a id="raw-url" href="https://github.com/ISUgenomics/datascience-workbook/blob/main/_collection-base/07-DataParsing/assets/data/bird_species/input.csv" target="_blank"><button class="btn" type="button">Open at GitHub ⤴</button></a> <base class="mb">
In the Terminal, use comand:
```bash
wget https://datascience.101workbook.org/07-wrangling/assets/data/bird_species/input.csv
```
</div>


## Data manipulation tasks

Let's use Python and the `pandas` library to manipulate this dataset and derive some insights.

<div class="required" markdown="1">
Please note that this step requires the user to have **Python and Pandas library installed**. <br>
*See <a class="t-links" href="423" section="#1-get-python-locally">**Python** programming language installation steps here</a>.* <br>
*See <a class="t-links" href="536" section="#install-pandas-library">**Pandas** library installation steps here</a>.*
</div>

<div class="protip" markdown="1">
You can follow all steps of this exercise: <br>
A. in a <a class="t-links" href="424">Python interactive session</a> <br>
B. or create a <a class="t-links" href="425" section="#create-a-python-script">Python script</a> (e.g., `data_wrangling.py`) and run it in the terminal after each step:
```bash
python data_wrangling.py
```
In both cases, you can use the same code snippets.
</div>

## **1. Load the dataset**

First, we need to import the `pandas` library and read the CSV file into a `DataFrame`:
```python
import pandas as pd

df = pd.read_csv('input.csv')
```

To confirm that the dataset is loaded correctly, we can display the top few rows using the `head()` method applied to the `DataFrame` object:
```python
df.head()
```
This will display the output on the screen:
<pre class="output"><base class="mb">
   Year Location  American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler &ensp;
0  2010        A                  23                10                 15                          8               7
1  2010        B                  12                 7                 11                          4               9
2  2010        C                  30                18                 22                         12              11
3  2010        D                  15                13                 20                         10               6
4  2010        E                   7                 4                  9                          5               4
</pre>

To print the complete dataset, we can simply use the `print()` function:
```python
print(df)
```
<pre class="output"><base class="mb">
        Year Location  American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler &ensp;
  0     2010        A                  23                10                 15                          8               7
  1     2010        B                  12                 7                 11                          4               9
  2     2010        C                  30                18                 22                         12              11
  3     2010        D                  15                13                 20                         10               6
  4     2010        E                   7                 4                  9                          5               4
...      ...      ...                 ...               ...                ...                        ...             ...
 95     2019        A                  20                 8                 14                          7               9
 96     2019        B                  13                 6                  9                          4               7
 97     2019        C                  27                16                 19                         10              10
 98     2019        D                  16                11                 18                         11               5
 99     2019        E                   9                 5                 10                          5               3

[100 rows x 7 columns]
</pre>

<b class="c-header italic">Now that we have our data loaded into a DataFrame, we can start manipulating it.</b>


## **2. Data Selection**

Pandas provides various <a class="t-links" href="536" section="#in-the-dataframe">methods for accessing and/or selecting specific data from a *DataFrame*</a>, such as `.loc`, `.iloc`, and `.at`. These methods allow you to select rows, columns, or specific cells in the *DataFrame* based on their labels or indices.

### Select a column
Let's start by selecting a specific column:
```python
# Select the column for American Goldfinch
american_goldfinch = df['American Goldfinch']                   # a new Series object with a American Goldfinch column

print(american_goldfinch.head())
```
*This code prints the first few rows of the* `Series` *object with only the American Goldfinch column we selected:*
<pre class="output">
0    23
1    12
2    30
3    15
4     7

Name: American Goldfinch, dtype: int64
</pre>


### Select multiple columns

Now, let's select multiple columns:
```python
# Select the columns for American Goldfinch and Northern Cardinal

selected_cols = ['Year', 'Location', 'American Goldfinch', 'Northern Cardinal']         # list of selected column names
df_selected = df[selected_cols]                                                         # the new DataFrame object with a copy of selected columns

print(df_selected.head())
```
*This code prints the first few rows of the new* `DataFrame` *with only the columns we selected:*
<pre class="output">
   Year Location  American Goldfinch  Northern Cardinal
0  2010        A                  23                 15
1  2010        B                  12                 11
2  2010        C                  30                 22
3  2010        D                  15                 20
4  2010        E                   7                  9
</pre>


### Select rows by value

To select data with a specific value in a selected column, we can use the `.loc` method with the condition:
```python
# Select all rows with data from the Location 'A'
location_A = df.loc[df['Location'] == 'A']

print(location_A.head())
```
*It prints the first few rows of the new* `DataFrame` *with only the rows that match the condition:*
<pre class="output"><base class="mb">
    Year Location  American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler &ensp;
0   2010        A                  23                10                 15                          8               7
5   2011        A                  25                11                 16                          9               8
10  2012        A                  26                12                 17                         10               9
15  2013        A                  27                13                 18                         11              10
20  2014        A                  28                14                 19                         12              11
</pre>


## **3. Data Filtering**

Pandas provides several methods for filtering data in a *DataFrame* based on certain conditions. The most common method is `.query()`, which allows you to filter rows based on a string expression that evaluates to a boolean.

For example, use the following code to filter the data collected after 2014:
```python
# Select all data collected after 2014
after_2014 = df.query('Year > 2014')

print(after_2014)
```
*This code creates a new* `DataFrame` *containing only the rows where the 'Year' column value is greater than 2014:*
<pre class="output"><base class="mb">
    Year Location  American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler &ensp;
25  2015        A                  29                15                 20                         13              12
...
30  2016        A                  30                16                 21                         14              13
...
35  2017        A                  31                17                 22                         15              14
...
40  2018        A                  32                18                 23                         16              15
...
45  2019        A                  33                19                 24                         17              16
...
</pre>


## **4. Data Aggregation**

Pandas provides many <a class="t-links" href="536" section="#aggregate-data">methods for aggregating data in a *DataFrame*</a>, such as `.groupby()`, which allows you to group rows based on a specific column or set of columns and then apply an aggregation function to each group.

### Group the data

So, let's group the data by values in selected column, for example by 'Year':
```python
# Group the data by year
grouped = df.groupby('Year')

print(grouped)
```
The **grouped** is an internal object that can not be directly printed:
```
<pandas.core.groupby.generic.DataFrameGroupBy object at 0x7fc528e59e80>
```
However, it contains the data splited by the specific condition to make it easy to [calculate some statistics](#calculate-statistics) on the data subsets.

### Calculate statistics

Let's calculate some statistics for each year using data grouped to subsets:
```python
# Calculate the mean for each year
means = grouped.mean()

# Calculate the standard deviation for each year
stds = grouped.std()

print(means, stds)
```
*This code prints the new* `DataFrame` *objects containing the means and standard deviations for each subset in the grouped object:*
<pre class="output"><base class="mb">
      American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler  &ensp;
Year                                                                                                    
2010                17.4              10.4               15.4                        7.8             7.4
2011                19.0              11.6               16.8                        8.6             8.4
2012                20.4              12.8               18.4                        9.6             9.4
2013                21.8              14.0               20.0                       10.6            10.4
2014                23.2              15.2               21.6                       11.4            11.4
2015                24.6              16.4               23.2                       12.4            12.4
2016                26.0              17.6               24.8                       13.2            13.4
2017                27.4              18.8               26.4                       14.2            14.4
2018                28.8              20.0               28.0                       15.2            15.4
2019                30.2              21.2               29.6                       16.2            16.4

      American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler
Year                                                                                                    
2010            9.126883          5.412947           5.594640                   3.346640        2.701851
2011           10.173495          5.770615           5.718391                   4.277850        2.701851
2012           11.326959          6.140033           6.066300                   4.929503        2.701851
2013           12.597619          6.519202           6.442049                   5.594640        2.701851
2014           13.953494          6.906519           6.841053                   6.618157        2.701851
2015           15.372053          7.300685           7.259477                   7.300685        2.701851
2016           16.837458          7.700649           7.694154                   8.348653        2.701851
2017           18.338484          8.105554           8.142481                   9.038805        2.701851
2018           19.867058          8.514693           8.602325                   9.731393        2.701851
2019           21.417283          8.927486           9.071935                  10.425929        2.701851
</pre>

## **5. Data Joining and Merging**

Pandas provides various methods for joining and merging data from different *DataFrames* based on common columns or indices. These methods include `.merge()`, `.join()`, and `.concat()`.

### Merge into one DataFrame

Let's combine the two DataFrames: means and stds into one DataFrame:
```python
# Combine the means and stds into one DataFrame
stats = pd.concat([means, stds], axis=1, keys=['Mean', 'Std'])

print(stats.head())
```
*This code prints a* `DataFrame` *with the mean and standard deviation for each year:*
<pre class="output">
                   Mean                                     ...               Std                                         
     American Goldfinch Eastern Bluebird Northern Cardinal  ... Northern Cardinal Ruby-throated Hummingbird Yellow Warbler  &ensp;
Year                                                        ...                                                           
2010               17.4             10.4              15.4  ...          5.594640                  3.346640       2.701851
2011               19.0             11.6              16.8  ...          5.718391                  4.277850       2.701851
2012               20.4             12.8              18.4  ...          6.066300                  4.929503       2.701851
2013               21.8             14.0              20.0  ...          6.442049                  5.594640       2.701851
2014               23.2             15.2              21.6  ...          6.841053                  6.618157       2.701851
...
[5 rows x 10 columns]
</pre>


## **6. Data Reshaping**

Pandas provides many methods for reshaping data in a *DataFrame*, such as `.pivot()`, which allows you to reshape the data by converting values in one column into new columns.

Let's reshape the stats DataFrame to combine Mean and Std values in a way to keep only single column per species.

In the first step, let's combine Mean and STD into a single column:
```python
# create a new dataframe with 'Statistic' as a column cobining data for Mean and Std
df_new = stats.reset_index().melt(id_vars=['Year'], var_name=['Statistic', 'Species'])

print(df_new)
```
*The output will be like this:*
<pre class="output">
    Year Statistic             Species      value
0   2010      Mean  American Goldfinch  17.400000
1   2011      Mean  American Goldfinch  19.000000
2   2012      Mean  American Goldfinch  20.400000
3   2013      Mean  American Goldfinch  21.800000
4   2014      Mean  American Goldfinch  23.200000
..   ...       ...                 ...        ...
95  2015       Std      Yellow Warbler   2.701851
96  2016       Std      Yellow Warbler   2.701851
97  2017       Std      Yellow Warbler   2.701851
98  2018       Std      Yellow Warbler   2.701851
99  2019       Std      Yellow Warbler   2.701851
</pre>

In the second step, let's split Species column into the separate columns for each species:
```python
# pivot the dataframe to get the desired format
df_reshaped = df_new.pivot_table(index=['Year', 'Statistic'], columns='Species', values='value')

print(df_reshaped)
```
*The output will be like this:*
<pre class="output"><base class="mb">
Species         American Goldfinch  Eastern Bluebird  Northern Cardinal  Ruby-throated Hummingbird  Yellow Warbler &ensp;
Year Statistic                                                                                                    
2010 Mean                17.400000         10.400000          15.400000                   7.800000        7.400000
     Std                  9.126883          5.412947           5.594640                   3.346640        2.701851
2011 Mean                19.000000         11.600000          16.800000                   8.600000        8.400000
     Std                 10.173495          5.770615           5.718391                   4.277850        2.701851
2012 Mean                20.400000         12.800000          18.400000                   9.600000        9.400000
     Std                 11.326959          6.140033           6.066300                   4.929503        2.701851
2013 Mean                21.800000         14.000000          20.000000                  10.600000       10.400000
     Std                 12.597619          6.519202           6.442049                   5.594640        2.701851
2014 Mean                23.200000         15.200000          21.600000                  11.400000       11.400000
     Std                 13.953494          6.906519           6.841053                   6.618157        2.701851
2015 Mean                24.600000         16.400000          23.200000                  12.400000       12.400000
     Std                 15.372053          7.300685           7.259477                   7.300685        2.701851
2016 Mean                26.000000         17.600000          24.800000                  13.200000       13.400000
     Std                 16.837458          7.700649           7.694154                   8.348653        2.701851
2017 Mean                27.400000         18.800000          26.400000                  14.200000       14.400000
     Std                 18.338484          8.105554           8.142481                   9.038805        2.701851
2018 Mean                28.800000         20.000000          28.000000                  15.200000       15.400000
     Std                 19.867058          8.514693           8.602325                   9.731393        2.701851
2019 Mean                30.200000         21.200000          29.600000                  16.200000       16.400000
     Std                 21.417283          8.927486           9.071935                  10.425929        2.701851
</pre>


## **7. Data Cleaning**

Pandas provides many methods for cleaning and preprocessing data, such as `.dropna()`, which allows you to remove missing values from a *DataFrame*, and `.replace()`, which allows you to replace specific values with new values.

To replace any missing values in the dataset with the average value for that column, you can use the `.fillna()` method.
```python
no_missing_data = df.fillna(df.mean())
```
