---
title: "Pandas Library - Data Structure Manipulation Tool"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [05. Introduction to Programming](../00-IntroToProgramming-LandingPage.md) / [3. Introduction to Python Programming](01-introduction-to-python.md) / **3.5 Pandas Library - Data Structure Manipulation Tool**

---

# Introduction

<a href="https://pandas.pydata.org/docs/" target="_blank">Pandas  ⤴</a> is an open-source library for the Python programming language that is used for data manipulation and analysis. It provides tools for:
* data analysis,
* data cleaning,
* data organization,

making it a popular choice for data scientists, analysts, and developers who work with large datasets.

The library is built on top of the <a href="https://numpy.org/doc/" target="_blank">NumPy  ⤴</a> library and provides **two primary data structures**:

| `Series` | `DataFrame` |
|----------|-------------|
|A Series is a **one-dimensional array-like object** that can hold any data type.|A DataFrame is a **two-dimensional tabular data structure** that consists of rows and columns.|
|<i># Creating a Pandas Series with some data<br></i> <br>`s = pd.Series([1, 3, 5, 7])`| <i># Creating a Pandas DataFrame with some data</i><br><br>`data = {'name': ['Alice', 'Bob'], 'age': [25, 32]}` <br>`df = pd.DataFrame(data)`|
|<i># Printing the Series</i><br>0 &emsp; 1<br>1 &emsp; 3<br>2 &emsp; 5<br>3 &emsp; 7<br>dtype: int64|<i># Printing the DataFrame</i><br>   &emsp; &emsp;name  &emsp;age<br>0  &emsp; Alice &emsp; 25<br>1 &emsp;&nbsp; Bob &emsp;&nbsp; 32|

Some of the key features of the Pandas library include:

* **Input-Output (IO) operations** <br>
<i>The library can read and write data from a variety of sources, including CSV, Excel, and SQL databases.</i>

* **Data cleaning** <br>
<i>The library makes it easy to handle missing or duplicate data, and provides tools for data normalization and standardization.</i>

* **Data manipulation** <br>
<i>Pandas provides a wide range of functions for manipulating and transforming data, such as merging, grouping, and pivoting.</i>

* **Data visualization** <br>
<i>Pandas includes built-in tools for creating basic visualizations, such as bar charts and scatter plots.</i>

* **High performance** <br>
<i>Pandas is optimized for performance, with functions that are designed to handle large datasets efficiently.</i>


<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
For numerical and scientific computing, NumPy and SciPy are often the go-to options, while for data manipulation and analysis, Pandas and other packages such as Dask and PySpark may be more appropriate.<br>
<li><b>numerical and scientific computing:</b></li>
&emsp; <a href="https://numpy.org/" target="_blank">NumPy  ⤴</a>, provides support for multidimensional arrays and matrices, and includes a wide range of mathematical functions<br>
&emsp; <a href="https://www.scipy.org/" target="_blank">SciPy  ⤴</a>, includes modules for optimization, signal processing, and linear algebra, among others<br>
<li><b>data manipulation and analysis:</b></li>
&emsp; <a href="https://pandas.pydata.org/" target="_blank">Pandas  ⤴</a>, provides high-level tools for working with tabular and heterogeneous data<br>
&emsp; <a href="https://scikit-learn.org/" target="_blank">Scikit-learn  ⤴</a>, includes modules for classification, regression, clustering, and dimensionality reduction<br>
&emsp; <a href="https://spark.apache.org/docs/latest/api/python/index.html" target="_blank">PySpark  ⤴</a>, allows users to process large datasets in parallel across multiple nodes<br>
&emsp; <a href="https://dask.org/" target="_blank">Dask  ⤴</a>, provides support for distributed computing and enables users to work with larger-than-memory datasets<br>
</span>
</div><br>


# Getting started with Pandas

Pandas is NOT a built-in Python module, meaning it is not included with the standard Python distribution. To use Pandas in your Python environment, you will need to install it separately.

## Install `pandas` library

To install Pandas, you can use `pip`, which is the standard package installer for Python. You can run the following command in your terminal or command prompt to install Pandas:
```
pip install pandas
```

An alternative way to install Pandas is using Conda. This way you can install different variants of `pandas` library in separate virtual environments, depending on the requirements of your project. You can create and activate a new conda environment, and then install `pandas` libarary:
```
conda install pandas
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
This command will install Pandas and any necessary dependencies in your current Conda environment. <br><br>
If you don't have Conda installed yet, you can follow the guide provided in the tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine  ⤴</a>.
</span>
</div>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Conda provides additional benefits over pip, such as the ability to create and manage multiple environments for different projects with different dependencies, and the ability to install packages from both the Conda and PyPI (Python Package Index) repositories.
</span>
</div>


## Import `pandas` library

After installation, you need to import Pandas in your Python code using the following command:
```
import pandas as pd
```
This will import the Pandas library and give it an alias of `pd`, which is a commonly used abbreviation for Pandas.

You can then use the Pandas functions and classes in your code by prefixing them with **pd**, such as `pd.DataFrame` or `pd.read_csv`.

---

# Data manipulation with `pandas`

Pandas is a powerful Python library for data manipulation and analysis that provides easy-to-use and **efficient data structures** for handling tabular, structured, and time-series data. With its rich functionality and flexible syntax, Pandas is a powerful tool for data analysis and manipulation in Python.

Here is an index of data manipulation tasks with Pandas:

0. [Creating Pandas objects](#create-pandas-objects)
1. [Loading data from a file](#load-data-from-a-file)
2. [Exploring data](#explore-data)
3. [Cleaning data](#clean-data)
4. [Filtering data](#filter-data)
5. [Aggregating data](#aggregate-data)


## Create Pandas objects

In Pandas, there are two main types of objects: `Series` and `DataFrame`.

### `Series` object

In Pandas, a **Series is a one-dimensional labeled data structure** that can hold any data type, such as integers, floats, strings, or even complex objects. It is similar to a **column in a DataFrame** or a one-dimensional array in NumPy or a column in a spreadsheet.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
A Series consists of an <b>array of values and a set of labels, called the index</b>. The index labels the values in the Series and allows you to access them by label instead of by position. If you don't specify an index, Pandas will automatically assign a numerical index starting from 0.
</span>
</div><br>

Here's an example of a simple Series:
```
0      John
1      Jane
2      Jack
3      Jill
Name: Name, dtype: object
```
*In this example, we have a Series with four values, which are strings representing names. The index labels each value with a number from 0 to 3. The label "Name" at the end of the Series specifies the name of the Series.*


### `DataFrame` object

In Pandas, a `DataFrame` is a 2-dimensional labeled data structure with columns of potentially different data types. It is similar to a table in a relational database or a spreadsheet. It can hold multiple Series objects of different data types and allows you to perform operations on the entire data set, such as merging, grouping, filtering, and sorting.

**A DataFrame consists of rows and columns**, where each column can have a different data type *(e.g., numeric, string, boolean)*. Each row represents a record, and each column represents a different variable or feature.

Here's an example of a simple DataFrame:
```
   Name   Age      City
0  John    25    London
1  Jane    30  New York
2  Jack    35     Paris
3  Jill    40     Tokyo
```

*In this example, we have a* `DataFrame` *with four rows and three columns: "Name", "Age", and "City". The first column contains strings (the names), the second column contains integers (the ages), and the third column contains strings (the cities).*

**The rows and columns in a DataFrame are labeled, which means you can access the data using the labels.**
* The row labels are called the `index`.
* The column labels are called the `column names`.

You can think of a `DataFrame` as a dictionary of `Series` objects, where **each column is a Series**.

### Other Pandas objects

Pandas also provides Index objects such as Index, Numeric Index, CategoricalIndex, IntervalIndex, MultiIndex, DatetimeIndex, TimeDeltaIndex, PeriodIndex (see <a href="https://pandas.pydata.org/docs/reference/indexing.html#index-objects" target="_blank">Pandas documentation  ⤴</a> for details). They are used to label and index the data in Series and DataFrame objects.

### *Create a Series*

Here's an example of creating a Pandas Series:
```
import pandas as pd

# create a Pandas Series with four values
s = pd.Series([25, 30, 35, 40], index=['John', 'Jane', 'Jack', 'Jill'])

# print the Series
print(s)
```
*In this example, we use the* `pd.Series()` *constructor function to create a Series. We pass a list of four values and a list of four index labels. The resulting Series has the values and index labels specified:*

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;"><br>
John    25 <br>
Jane    30 <br>
Jack    35 <br>
Jill    40 <br>
dtype: int64 <br>
</code><br>


### *Create an empty DataFrame*

To create an empty `DataFrame`, you can call the `pd.DataFrame()` constructor function with no arguments, like this:
```
import pandas as pd

# create an empty DataFrame
df = pd.DataFrame()

# print the DataFrame
print(df)
```
This will create an empty `DataFrame` with no rows or columns:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;"><br>
Empty DataFrame <br>
Columns: [] <br>
Index: [] <br>
</code>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can create an empty <b>DataFrame</b> in Pandas and add data to it later using the <code>df.append()</code> method.
</span>
</div>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">While using <b>df</b> as a variable name for a Pandas DataFrame object is a common convention, it's generally a better practice to <b>use a more descriptive and unique name</b> that corresponds to the content of the DataFrame. <br><br>
This is particularly <b>important if you're working with multiple DataFrames in your code</b>, as using the same variable name for multiple objects can lead to confusion and errors. By choosing a more descriptive name, you can help make your code more readable and understandable to others (and your future self!).
</span>
</div><br>


### *Create an empty DataFrame with structure*

You can create an empty `DataFrame` **of a specific structure** by specifying the column names and data types when you create the DataFrame.

To create an empty DataFrame with specific column names and data types, you can pass a dictionary where the keys are the column names, and the values are the data types you want for each column.
```
import pandas as pd

# create an empty DataFrame with specific column names and data types
df = pd.DataFrame(columns=['name', 'age', 'city'], dtype=str)

# print the DataFrame
print(df)
```
*In this example, we use the pd.DataFrame() constructor function to create an empty DataFrame. We pass a dictionary containing the column names as keys and the data types as values. We set the data type to str for all columns.*

The resulting DataFrame has the specified column names and data types, but no rows:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
Empty DataFrame <br>
Columns: [name, age, city] <br>
Index: [] <br>
</code>

You can then add data to this DataFrame using the `df.append()` method.

### *Create DataFrame from Python object*

One of the powerful features of Pandas is that it allows you to create DataFrames from a variety of different data sources, including built-in Python objects like lists and dictionaries.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
In general, Pandas makes it easy to convert data from a variety of different sources to DataFrames, allowing you to work with and manipulate the data using the powerful tools and functionality provided by the library.
</span>
</div><br>

**DataFrame from a list** <br>
To create a `DataFrame` from a list, you can simply pass the list to the `pd.DataFrame()` constructor function. By default, Pandas will create a one-dimensional DataFrame with a single column containing the list values.
```
import pandas as pd

# create a list of values
values = ['apple', 'banana', 'cherry', 'date']

# create a DataFrame from the list
df = pd.DataFrame(values)

# print the DataFrame
print(df)
```
*This code creates a DataFrame with a single column containing the values 'apple', 'banana', 'cherry', and 'date'*

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp; 0 <br>
0   apple <br>
1  banana <br>
2  cherry <br>
3    date <br>
</code><br>


**DataFrame from a dictionary** <br>
To create a `DataFrame` from a dictionary, you can pass the dictionary to the `pd.DataFrame()` constructor function. By default, Pandas will create a DataFrame with one column for each key in the dictionary, with the column name corresponding to the key name.
```
import pandas as pd

# create a dictionary with key-value pairs
data = {'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 35],
        'city': ['New York', 'Los Angeles', 'Chicago']}

# create a DataFrame from the dictionary
df = pd.DataFrame(data)

# print the DataFrame
print(df)
```
*This code creates a DataFrame with three columns corresponding to the keys in the dictionary: 'name', 'age', and 'city'.*

The values in each column correspond to the values in the corresponding dictionary values:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp; age &emsp; city <br>
0 &emsp; Alice &emsp;&emsp; 25 &emsp; New York <br>
1 &emsp; &emsp; Bob &emsp;&emsp; 30 &emsp; Los Angeles <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago <br>
</code>


## Add data

### *to empty DataFrame*

To add data to an empty DataFrame, you can use the `df.append()` method. This method appends rows of data to the end of the DataFrame.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
The <b>df.append()</b> method takes a dictionary or Series object containing the values to add as a new row to the DataFrame, and appends it to the end of the DataFrame.
</span>
</div><br>

Let's assume we have an empty DataFrame:
<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
import pandas as pd <br><br>
&#9839; create an empty DataFrame <br>
df = pd.DataFrame() <br>
</code>

We can add some data to the DataFrame using `df.append()` method:
```
# add some data to the DataFrame
df = df.append({'name': 'Alice', 'age': 25, 'city': 'New York'}, ignore_index=True)
df = df.append({'name': 'Bob', 'age': 30, 'city': 'Los Angeles'}, ignore_index=True)
df = df.append({'name': 'Charlie', 'age': 35, 'city': 'Chicago'}, ignore_index=True)

# print the DataFrame
print(df)
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
The <b>ignore_index=True</b> argument tells Pandas to ignore any existing index labels on the DataFrame, and instead generate new integer index labels starting from 0.
</span>
</div>

The `print()` function displays the DataFrame with the added data:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city <br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York <br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago <br>
</code><br>


### *new row to existing DataFrame*

**add a new row with data** <br>
To add new data as a new row to an existing DataFrame in Pandas, you can use the `append()` method. <br>
*(Let's use the **df** DataFrame object from previous example.)*
```
# add new data to the DataFrame
df = df.append({'name': 'David', 'age': 28, 'city': 'Miami'}, ignore_index=True)
df = df.append({'name': 'Emily', 'age': 27, 'city': 'San Francisco'}, ignore_index=True)

print(df)
```
*We just added two more rows of data to the DataFrame using append() method. The ignore_index=True parameter ensures that the new rows are added with consecutive row numbers.*

The output of this code will be a DataFrame with five rows of data, including the new rows added at the end:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city <br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York <br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago <br>
3 &emsp; David &emsp;&emsp; 28 &emsp; Miami <br>
4 &emsp; Emily &emsp;&emsp; 27 &emsp; San Francisco
</code><br>


**add a new row with data** <br>
In Pandas, you can add a new empty row to a DataFrame by appending a new empty dictionary to the DataFrame using the append method.
```
# add a new empty row to the DataFrame
df = df.append({}, ignore_index=True)

print(df)
```
*In this example, we added a new empty row to the DataFrame by appending an empty dictionary to it using the append method and setting the ignore_index parameter to True to ensure that the index of the new row is automatically assigned.*

The output of this code will be a DataFrame with six rows and three columns, including the new empty row:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city <br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York <br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago <br>
3 &emsp; David &emsp;&emsp; 28 &emsp; Miami <br>
4 &emsp; Emily &emsp;&emsp; 27 &emsp; San Francisco <br>
5 &emsp; &emsp; NaN &emsp; NaN &emsp; NaN
</code><br>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that the values in the new empty row are represented as <b>NaN</b> (Not a Number), which is the default value for missing or undefined data in Pandas.
</span>
</div>

### *new column to existing DataFrame*

**add a column with values** <br>
To add a new column to an existing DataFrame in Pandas, you can simply assign a new column with a name and values to the DataFrame.

Here's an example of adding a new column called 'gender' to the DataFrame from the previous example:
```
# add a new column to the DataFrame
df['gender'] = ['F', 'M', 'M', 'M', 'F']

print(df)
```
*In this example, we added a new column called 'gender' to the DataFrame by assigning a list of values to it using the square bracket notation.* ***Note that the length of the list must match the number of rows in the DataFrame.***

The output of this code will be a DataFrame with four columns, including the new 'gender' column:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city &emsp; &emsp; &emsp; &emsp; &emsp; gender <br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; F <br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles &emsp; &emsp; &emsp; &emsp; M <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; M  <br>
3 &emsp; David &emsp;&emsp; 28 &emsp; Miami &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; M  <br>
4 &emsp; Emily &emsp;&emsp; 27 &emsp; San Francisco &emsp; &emsp; &emsp; F  <br>
5 &emsp; &emsp; NaN &emsp; NaN &emsp; NaN &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; NaN  
</code><br>


**add an empty column** <br>
To add an empty column to an existing DataFrame in Pandas, you can simply assign an empty Series with a name to the DataFrame.

Here's an example of adding an empty column called 'income' to the DataFrame from the previous example:
```
# add an empty column to the DataFrame
df['income'] = pd.Series(dtype=float)

print(df)
```
*In this example, we added an empty column called 'income' to the DataFrame by assigning an empty Pandas Series with a data type (dtype) of float to it using the square bracket notation.*

The output of this code will be a DataFrame with four columns, including the new empty 'income' column:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city &emsp; &emsp; &emsp; &emsp; &emsp; gender &emsp; income<br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; F &emsp; &emsp;&emsp; NaN<br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles &emsp; &emsp; &emsp; &emsp; M &emsp; &emsp;&emsp; NaN<br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; M  &emsp; &emsp;&emsp; NaN<br>
3 &emsp; David &emsp;&emsp; 28 &emsp; Miami &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; M  &emsp; &emsp;&emsp; NaN<br>
4 &emsp; Emily &emsp;&emsp; 27 &emsp; San Francisco &emsp; &emsp; &emsp; F &emsp; &emsp;&emsp; NaN <br>
5 &emsp; &emsp; NaN &emsp; NaN &emsp; NaN &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; NaN &emsp; &emsp;&emsp; NaN
</code><br>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that the values in the new empty column are represented as <b>NaN</b> (Not a Number), which is the default value for missing or undefined data in Pandas.
</span>
</div>


## Access data

### *in the Series*

Let's assume we have a Pandas Series:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
import pandas as pd <br><br>
&#9839; create a Pandas Series with four values <br>
s = pd.Series([25, 30, 35, 40], index=['John', 'Jane', 'Jack', 'Jill'])
</code>

We can access the values and index labels of the Series using indexing:
```
# access the value for 'Jane'
print(s['Jane'])
```
**OUTPUT:** 30<br>

```
# access the values for 'Jane' and 'Jack'
print(s[['Jane', 'Jack']])
```
**OUTPUT:**
<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
Jane    30 <br>
Jack    35 <br>
dtype: int64
</code><br>

```
# access the values greater than 30
print(s[s > 30])
```
**OUTPUT:**
<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
Jack    35 <br>
Jill    40 <br>
dtype: int64
</code><br>


### *in the DataFrame*

Let's assume we have a Pandas DataFrame:

<code style="background-color: #d9d9e3;   padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
import pandas as pd <br><br>
&#9839; create the DataFrame <br>
df = pd.DataFrame({'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35], 'city': ['New York', 'Los Angeles', 'Chicago']})
</code>

The `print()` function displays the DataFrame:

<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
&emsp; &emsp;&emsp; name &emsp;  age &emsp; city <br>
0 &emsp;  Alice &emsp;&emsp; 25 &emsp;  New York <br>
1 &emsp;&emsp;&emsp; Bob &emsp;&emsp; 30 &emsp;  Los Angeles <br>
2  Charlie &emsp;&emsp; 35 &emsp; Chicago <br>
</code><br>


In Pandas, you can **access data in a DataFrame using indexing and slicing.** Here are some examples of how to access data in the DataFrame ***df***:

**A. Access a single column by name:**

```
series_col = df['name']
```
*This returns a Pandas Series object containing the values in the 'name' column.*

**B. Access multiple columns by name:**

```
new_df_col = df[['name', 'age']]
```
*This returns a new DataFrame containing only the 'name' and 'age' columns.*

**C. Access a single row by index:**

```
series_row = df.loc[0]
```
*This returns a Series object containing the values in the first row of the DataFrame (index 0).*

**D. Access multiple rows by index:**

```
new_df_row = df.loc[0:1]
```
*This returns a new DataFrame containing the first two rows of the DataFrame (indexes 0 and 1).*

**E. Access a single value by row and column index:**

```
this_value = df.loc[0, 'name']
```
*This returns the value in the first row and 'name' column of the DataFrame (which is 'Alice' in this example).*

**F. Access a subset of rows and columns using boolean indexing:**

```
new_df_subset = df[(df['age'] > 25) & (df['city'] == 'New York')][['name', 'age']]
```
*This returns a new DataFrame containing only the 'name' and 'age' columns for the rows where the age is greater than 25 and the city is 'New York'.*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Note that there are many other ways to access data in a DataFrame in Pandas, such as:
<li> using integer indexing with the <b>iloc</b> method, </li>
<li> using advanced indexing techniques like <b>.loc[]</b> and <b>.iloc[]</b>.</li><br>
The best method to use depends on the specific task at hand.
</span>
</div>

<span style="color: #ff3870;font-weight: 500;">Learn more about Pandas indexing and selecting data from the official documentation:</span>
* <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html" target="_blank">Indexing and selecting data  ⤴</a>
* <a href=" https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#indexing-label" target="_blank"><b>.loc[]</b>: Selection by label  ⤴</a>
* <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#selection-by-position" target="_blank"><b>.iloc[]</b>: Selection by position  ⤴</a>


## Load data from a file

Pandas provides functions for reading data from a variety of sources, including:
* CSV files, &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; `pd.read_csv()`
* Excel spreadsheets, &emsp; &emsp;
* SQL databases, &emsp; &emsp; &emsp;
* and more.

### CSV: `read_csv()`
You can use the `pd.read_csv()` function to read data from a CSV file, for example:
```
import pandas as pd

# Load data from a CSV file
df = pd.read_csv('data.csv')
```

*In this example, we're using Pandas to load data from a CSV file called "data.csv" and store it in a `DataFrame` called* **df**. *The* `pd.read_csv()` *function is a convenient way to read in data from a CSV file and convert it to a DataFrame object.*

### EXCEL/XLSX: `read_excel()`
To load data from an Excel file, you can use the `read_excel()` function in Pandas.
```
import pandas as pd

# Load data from an Excel file
df = pd.read_excel('data.xlsx')
```
*In this example, we are loading data from an Excel file named "data.xlsx". The resulting data is stored in a Pandas `DataFrame` named* **df**.

### SQL: `read_sql()`
To load data from a SQL database, you can use the `read_sql()` function in Pandas.
```
import pandas as pd
import sqlite3

# Connect to a SQLite database
conn = sqlite3.connect('data.db')

# Load data from a SQL query
df = pd.read_sql('SELECT * FROM table_name', conn)

# Close the database connection
conn.close()
```
*In this example, we are connecting to a SQLite database named "data.db". We then use the* `read_sql()` *function to load data from a SQL query. The resulting data is stored in a Pandas DataFrame named* **df**. *Finally, we close the database connection.*

### JSON: `read_json()`
To load data from a JSON file, you can use the `read_json()` function in Pandas.
```
import pandas as pd

# Load data from a JSON file
df = pd.read_json('data.json')
```
*In this example, we are loading data from a JSON file named "data.json". The resulting data is stored in a Pandas DataFrame named* **df**.

### HTML: `read_html()`
To load data from an HTML file or webpage, you can use the `read_html()` function in Pandas.
```
import pandas as pd

# Load data from an HTML table
tables = pd.read_html('https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)')

# Select the table you want from the list of tables
df = tables[0]
```
*In this example, we are loading data from an HTML table on the Wikipedia page for a list of countries by population. The* `read_html()` *function returns a list of all tables found on the page. We then select the table we want by indexing the list. The resulting data is stored in a Pandas DataFrame named* **df**.

### OTHER FORMATS I/O CheetSheet
<span style="color: #ff3870;font-weight: 500;">The complete list of file formats supported by Pandas can be found in the official documentation under the IO Tools section: <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html" target="_blank">IO tools (text, CSV, HDF5, …)  ⤴</a></span> *This page provides detailed information on how to read and write data from various file formats, including CSV, Excel, SQL, JSON, HTML, HDF5, Parquet, Feather, Msgpack, and many others. Each format has its own section with examples and explanations.*

| File Format           | Reader           | Writer            |
|-----------------------|------------------|-------------------|
| CSV                   | read_csv()       | to_csv()          |
| Fixed-Width Text File | read_fwf()       |                   |
| JSON                  | read_json()      | to_json()         |
| HTML                  | read_html()      | to_html           |
| LaTeX                 |                  | Styler.to_latex() |
| XML                   | read_xml()       | to_xml()          |
| Local clipboard       | read_clipboard() | to_clipboard()    |
| MS Excel (.xlsx)      | read_excel()     | to_excel          |
| HDF5 Format           | read_hdf()       | to_hdf()          |
| Feather Format        | read_feather()   | to_feather()      |
| Parquet Format        | read_parquet()   | to_parquet()      |
| ORC Format            | read_orc()       | to_orc()          |
| Stata                 | read_stata()     | to_stata()        |
| SAS                   | read_sas()       |                   |
| SPSS                  | read_spss()      |                   |
| Python Pickle Format  | read_pickle()    | to_pickle()       |
| SQL                   | read_sql()       | to_sql()          |
| Google BigQuery       | read_gbq()       | to_gbq()          |



## Explore data

Once you've loaded your data into a Pandas DataFrame, you can use various functions to explore the data and get a sense of its structure and characteristics. For example, you can use the following functions:
* `df.head()` to display the first few rows of a DataFrame,
* `df.describe()` to get summary statistics for numerical columns,
* `df.info()` to display column names and data types

```
# Display the first few rows of the DataFrame
print(df.head())

# Display summary statistics for numerical columns
print(df.describe())

# Display column names and data types
print(df.info())
```

## Clean data

Pandas provides functions for cleaning and transforming data, such as:
* `df.drop_duplicates()` to remove duplicate rows from a DataFrame,
* `df.fillna()` to handle missing values *(e.g., to fill in missing values with a specified value or method)*,
* converting data types.

```
# Remove duplicate rows
df = df.drop_duplicates()

# Fill in missing values with the mean value of the column
df['column_name'].fillna(df['column_name'].mean(), inplace=True)

# Convert a string column to a datetime column
df['date_column'] = pd.to_datetime(df['date_column'], format='%Y-%m-%d')
```

## Filter data

You can use *Boolean indexing* and other functions to filter and subset data based on certain criteria.

For example, you can use the `df[df['column'] > value]` syntax to filter rows based on a condition.
```
# Filter rows where a column value is greater than a certain value
filtered_df = df[df['column_name'] > value]

# Filter rows where a column value is in a list of values
filtered_df = df[df['column_name'].isin(list_of_values)]
```


## Aggregate data

Pandas provides functions for grouping and aggregating data, such as calculating the mean, sum, or count of values in a column or group.

For example, you can use the `df.groupby()` function to group data by one or more columns, and then use a aggregation function such as `mean()` or `sum()` to calculate summary statistics for each group.

```
# Group data by a column and calculate the mean of another column
grouped_df = df.groupby('group_column')['value_column'].mean()

# Group data by multiple columns and calculate the sum of another column
grouped_df = df.groupby(['group_column_1', 'group_column_2'])['value_column'].sum()
```


___
# Further Reading
* [3.6 Numpy Library - Multi-Dimensional Arrays Parser](07-tutorial-python-array-manipulation-numpy.md)
* [3.7 SciPy Library - Algorithms for Scientific Computing](08-tutorial-python-apply-statistics-scipy.md)

* [4. Introduction to R programming](../04-R/01-introduction-to-R)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](05-tutorial-python-round-abs-data-math-module){: .btn  .btn--primary}
[Next](07-tutorial-python-array-manipulation-numpy){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
