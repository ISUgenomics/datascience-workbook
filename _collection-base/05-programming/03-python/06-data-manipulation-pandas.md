---
title: "Pandas library - data structure manipulation tool"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 536
level: 2
categories: ["programming", "data-types", "data-manipulation", "analysis", "hpc, computing", "library-package-module"]
tags: ["pandas", "python", "series", "dataframe", "object", "functions", "import", "add-remove-data", "explore-data", "clean-data", "filter-data", "aggregate data"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<a href="https://pandas.pydata.org/docs/" target="_blank">Pandas  ⤴</a> is an open-source library for the Python programming language that is used for data manipulation and analysis. It provides tools for:
* data analysis,
* data cleaning,
* data organization,

making it a popular choice for data scientists, analysts, and developers who work with large datasets and require efficient and scalable solutions for their data-related tasks.

Pandas is built on top of the <a href="https://numpy.org/doc/" target="_blank">NumPy  ⤴</a> library and provides **two primary data structures**:

<table>
  <tr> <th width="50%" class="center-h">Series</th> <th class="center-h">DataFrame</th> </tr>
  <tr> <td>A Series is a <b>one-dimensional array-like object</b> that can hold any data type.</td> <td>A DataFrame is a <b>two-dimensional tabular data structure</b> that consists of rows and columns.</td> </tr>
  <tr>
    <td><i># Creating a Pandas Series with some data</i>    <base class="mb"> <code class="code-block">s = pd.Series([1, 3, 5])<br> </code></td>
    <td><i># Creating a Pandas DataFrame with some data</i> <base class="mb"> <code class="code-block">data = {'name': ['Alice', 'Bob'], 'age': [25, 32]}<br>df = pd.DataFrame(data)</code></td>
  </tr>
  <tr>
    <td class="no-border"><i># Printing the Series</i>    <base class="mb"> <pre class="output">0    1<br>1    3<br>2    5<br>dtype: int64</pre></td>
    <td class="no-border"><i># Printing the DataFrame</i> <base class="mb"> <pre class="output">       name    age<br>0      Alice   25<br>1      Bob     32<br> </pre></td>
  </tr>
</table><base class="mt">


**Some of the key features of the Pandas library include:**

<table>
  <tr> <th>Input-Output (IO) operations</th> <td><i>The library can read and write data from a variety of sources, including CSV, Excel, and SQL databases.</i></td> </tr>
  <tr> <th>Data cleaning</th> <td><i>The library makes it easy to handle missing or duplicate data, and provides tools for data normalization and standardization.</i></td> </tr>
  <tr> <th>Data manipulation</th> <td><i>Pandas provides a wide range of functions for manipulating and transforming data, such as merging, grouping, and pivoting.</i></td> </tr>
  <tr> <th>Data visualization</th> <td><i>Pandas includes built-in tools for creating basic visualizations, such as bar charts and scatter plots.</i></td> </tr>
  <tr> <th>High performance</th> <td><i>Pandas is optimized for performance, with functions that are designed to handle large datasets efficiently.</i></td> </tr>
</table>

<div class="protip" markdown="1">
For numerical and scientific computing, `numpy` and `scipy` are often the go-to options, while for data manipulation and analysis, `pandas` and other packages such as `dask` and `pyspark` may be more appropriate. <base class="mb">
**1) numerical and scientific computing:**
  * <a href="https://numpy.org/" target="_blank">NumPy  ⤴</a>, provides support for multidimensional arrays and matrices, and includes a wide range of mathematical functions
  * <a href="https://www.scipy.org/" target="_blank">SciPy  ⤴</a>, includes modules for optimization, signal processing, and linear algebra, among others
<base class="mt">
**2) data manipulation and analysis:**
  * <a href="https://pandas.pydata.org/" target="_blank">Pandas  ⤴</a>, provides high-level tools for working with tabular and heterogeneous data
  * <a href="https://scikit-learn.org/" target="_blank">Scikit-learn  ⤴</a>, includes modules for classification, regression, clustering, and dimensionality reduction
  * <a href="https://spark.apache.org/docs/latest/api/python/index.html" target="_blank">PySpark  ⤴</a>, allows users to process large datasets in parallel across multiple nodes
  * <a href="https://dask.org/" target="_blank">Dask  ⤴</a>, provides support for distributed computing and enables users to work with larger-than-memory datasets
</div>


# Getting started with Pandas

<div class="required" markdown="1">
Pandas is NOT a built-in Python module, meaning it is not included with the standard Python distribution. To use Pandas in your Python environment, you will need to install it separately.
</div>

## Install `pandas` library

To install Pandas, you can use `pip`, which is the standard package installer for Python. You can run the following command in your terminal or command prompt to install Pandas:
```bash
pip install pandas
```
<base class="mt">
An alternative way to install Pandas is using Conda. This way you can install different variants of `pandas` library in separate virtual environments, depending on the requirements of your project. You can create and activate a new conda environment, and then install `pandas` libarary:
```bash
conda install pandas
```

<div class="warning" markdown="1">
This command will install **Pandas** and any necessary dependencies in your current **Conda** environment. <base class="mb">
<button class="btn required mr"></button> If you don't have `conda` installed yet, you can follow the guide provided in the tutorial <a class="t-links" href="423"></a>.
</div>

<div class="protip" markdown="1">
`conda` provides additional benefits over `pip`, such as the ability to create and manage multiple environments for different projects with different dependencies, and the ability to install packages from both the Conda and PyPI (Python Package Index) repositories.
</div>


## Import `pandas` library

After installation, you need to import Pandas in your Python code using the following command:
```python
import pandas as pd
```
*This will import the Pandas library and give it an alias of* `pd`, *which is a commonly used abbreviation for Pandas.*

You can then use the Pandas functions and classes in your code by prefixing them with **pd**, such as `pd.DataFrame` or `pd.read_csv`.


# Data manipulation

Pandas is a powerful Python library for data manipulation and analysis that provides easy-to-use and **efficient data structures** for handling tabular, structured, and time-series data. With its rich functionality and flexible syntax, Pandas is a powerful tool for data wrangling and advanced analysis in Python.

Here is an index of data manipulation tasks with Pandas:

0. [Creating Pandas objects](#create-pandas-objects)
1. [Loading data from a file](#load-data-from-a-file)
2. [Exploring data](#explore-data)
3. [Cleaning data](#clean-data)
4. [Filtering data](#filter-data)
5. [Aggregating data](#aggregate-data)


## **Create Pandas objects**

In Pandas, there are two main types of objects: `Series` and `DataFrame`.

### `Series` *object*

In Pandas, a **Series is a one-dimensional labeled data structure** that can hold any data type, such as integers, floats, strings, or even complex objects. It is similar to a **column in a DataFrame** or a one-dimensional array in NumPy or a column in a spreadsheet.

<div class="note" markdown="1">
A Series consists of an **array of values and a set of labels, called the index**. The `index` labels the values in the `Series` and allows you to access them by label instead of by position. If you don't specify an index, Pandas will automatically assign a numerical <u>index starting from 0</u>.
</div>

Here's an example of a simple Series:
```yml
0      John
1      Jane
2      Jack
3      Jill
Name: Name, dtype: object
```
*In this example, we have a* `Series` *with four values, which are strings representing names. The index labels each value with a number from 0 to 3. The label "Name" at the end of the Series specifies the name of the Series.*


### `DataFrame` *object*

In Pandas, a `DataFrame` is a 2-dimensional labeled data structure with columns of potentially different data types. It is similar to a table in a relational database or a spreadsheet. It can hold multiple Series objects of different data types and allows you to perform operations on the entire data set, such as merging, grouping, filtering, and sorting.

**A DataFrame consists of rows and columns**, where each column can have a different data type *(e.g., numeric, string, boolean)*. Each row represents a record, and each column represents a different variable or feature.

Here's an example of a simple DataFrame:
```yml
   Name   Age      City
0  John    25    London
1  Jane    30  New York
2  Jack    35     Paris
3  Jill    40     Tokyo
```
*In this example, we have a* `DataFrame` *with four rows and three columns: "Name", "Age", and "City". The first column contains strings (the names), the second column contains integers (the ages), and the third column contains strings (the cities).*

<div class="note" markdown="1">
**The rows and columns in a DataFrame are labeled, which means you can access the data using the labels.**
* The row labels are called the `index`.
* The column labels are called the `column names`.
</div>
<div class="protip" markdown="1">
You can think of a `DataFrame` as a dictionary of `Series` objects, where **each column is a Series**.
</div>


### `Index` *objects*

Pandas also provides **Index objects** such as `Index`, `Numeric Index`, `CategoricalIndex`, `IntervalIndex`, `MultiIndex`, `DatetimeIndex`, `TimeDeltaIndex`, `PeriodIndex`. They are used to label and index the data in Series and DataFrame objects. <base class="mb">
<button class="btn more"></button> ...from <a href="https://pandas.pydata.org/docs/reference/indexing.html#index-objects" target="_blank">Pandas documentation  ⤴</a>


### *Create a Series*

Here's an example of creating a Pandas Series:
```python
import pandas as pd

# create a Pandas Series with four values
s = pd.Series([25, 30, 35, 40], index=['John', 'Jane', 'Jack', 'Jill'])

# print the Series
print(s)
```
*In this example, we use the* `pd.Series()` *constructor function to create a Series. We pass a list of four values and a list of four index labels.*

The resulting Series has the values and index labels specified:
<pre class="output">
John    25
Jane    30
Jack    35
Jill    40
<i>dtype: int64</i>
</pre>


### *Create an empty DataFrame*

To create an empty `DataFrame`, you can call the `pd.DataFrame()` constructor function with no arguments, like this:
```python
import pandas as pd

# create an empty DataFrame
df = pd.DataFrame()

# print the DataFrame
print(df)
```
*This will create an empty* `DataFrame` *with no rows or columns:*
<pre class="output">
<i>Empty DataFrame</i>
Columns: []
Index: []
</pre>

<div class="protip" markdown="1">
You can create an empty `DataFrame` in Pandas and add data to it later using the `df.append()` method. <base class="mt">

While using `df` as a variable name for a Pandas `DataFrame` object is a common convention, it's generally a better practice to **use a more descriptive and unique name** that corresponds to the content of the DataFrame. <br>
This is particularly <u>important if you're working with multiple DataFrames</u> in your code, as using the same variable name for multiple objects can lead to confusion and errors. By choosing a more descriptive name, you can help make your code more readable and understandable to others (and your future self!).
</div>


### *Create an empty DataFrame with structure*

You can create an empty `DataFrame` **of a specific structure** by specifying the column names and data types when you create the DataFrame.

To create an empty DataFrame with specific column names and data types, you can pass a dictionary where the keys are the column names, and the values are the data types you want for each column.
```python
import pandas as pd

# create an empty DataFrame with specific column names and data types
df = pd.DataFrame(columns=['name', 'age', 'city'], dtype=str)

# print the DataFrame
print(df)
```
*In this example, we use the* `pd.DataFrame()` *constructor function to create an empty DataFrame. We pass a dictionary containing the column names as keys and the data types as values. We set the data type to str for all columns.*

The resulting DataFrame has the specified column names and data types, but no rows:

<pre class="output">
<i>Empty DataFrame</i>
Columns: [name, age, city]
Index: []
</pre>

You can then add data to this DataFrame using the `df.append()` method.

### *Create DataFrame from Python object*

One of the powerful features of Pandas is that it allows you to create DataFrames from a variety of different data sources, including built-in Python objects like lists and dictionaries.

<div class="protip" markdown="1">
In general, **Pandas** makes it easy to convert data from a variety of different sources to `DataFrames`, allowing you to work with and manipulate the data using the powerful tools and functionality provided by the library.
</div>

**DataFrame from a list** <br>
To create a `DataFrame` from a list, you can simply pass the list to the `pd.DataFrame()` constructor function. By default, Pandas will create a one-dimensional DataFrame with a single column containing the list values.
```python
import pandas as pd

# create a list of values
values = ['apple', 'banana', 'cherry', 'date']

# create a DataFrame from the list
df = pd.DataFrame(values)

# print the DataFrame
print(df)
```
*This code creates a* `DataFrame` *with a single column containing the values 'apple', 'banana', 'cherry', and 'date'*

<pre class="output">
        0
0   apple
1  banana
2  cherry
3    date
</pre>

<base class="mt">
**DataFrame from a dictionary** <br>
To create a `DataFrame` from a dictionary, you can pass the dictionary to the `pd.DataFrame()` constructor function. By default, Pandas will create a DataFrame with one column for each key in the dictionary, with the column name corresponding to the key name.
```python
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
*This code creates a* `DataFrame` *with three columns corresponding to the keys in the dictionary: 'name', 'age', and 'city'.*

The values in each column correspond to the values in the corresponding dictionary values:
<pre class="output">
      name   age  city
0    Alice   25   New York
1      Bob   30   Los Angeles
2  Charlie   35   Chicago
</pre>


## **Add data**

### <b class="prefix-2"></b>*to empty DataFrame*

To add data to an empty DataFrame, you can use the `df.append()` method. This method appends rows of data to the end of the DataFrame.

<div class="note" markdown="1">
The `df.append()` method takes a dictionary or `Series` object containing the values to <u>add as a new row</u> to the `DataFrame`, and appends it to the end of the `DataFrame`.
</div>

Let's assume we have an empty DataFrame:
```python
import pandas as pd

# create an empty DataFrame
df = pd.DataFrame()
```

We can add some data to the DataFrame using `df.append()` method:
```python
# add some data to the DataFrame
df = df.append({'name': 'Alice', 'age': 25, 'city': 'New York'}, ignore_index=True)
df = df.append({'name': 'Bob', 'age': 30, 'city': 'Los Angeles'}, ignore_index=True)
df = df.append({'name': 'Charlie', 'age': 35, 'city': 'Chicago'}, ignore_index=True)

# print the DataFrame
print(df)
```

<div class="warning" markdown="1">
The `ignore_index=True` argument tells **Pandas** to ignore any existing index labels on the `DataFrame`, and instead <u>generate new integer index labels</u> starting from 0.
</div>

The `print()` function displays the DataFrame with the added data:
<pre class="output">
      name   age  city
0    Alice   25   New York
1      Bob   30   Los Angeles
2  Charlie   35   Chicago
</pre>


### <b class="prefix-2"></b>*new row to existing DataFrame*

**add a new row with data** <br>
To add new data as a new row to an existing DataFrame in Pandas, you can use the `append()` method. *(Let's use the* `df` *DataFrame object from previous example.)*
```python
# add new data to the DataFrame
df = df.append({'name': 'David', 'age': 28, 'city': 'Miami'}, ignore_index=True)
df = df.append({'name': 'Emily', 'age': 27, 'city': 'San Francisco'}, ignore_index=True)

print(df)
```
*We just added two more rows of data to the DataFrame using* `append()` *method. The* `ignore_index=True` *parameter ensures that the new rows are added with consecutive row numbers.*

The output of this code will be a DataFrame with five rows of data, including the new rows added at the end:
<pre class="output">
      name   age  city
0    Alice    25  New York
1      Bob    30  Los Angeles
2  Charlie    35  Chicago
3    David    28  Miami
4    Emily    27  San Francisco
</pre>

<base class="mt">
**add a new row with data** <br>
In Pandas, you can add a new empty row to a DataFrame by appending a new empty dictionary to the DataFrame using the append method.
```python
# add a new empty row to the DataFrame
df = df.append({}, ignore_index=True)

print(df)
```
*In this example, we added a new empty row to the* `DataFrame` *by appending an empty dictionary to it using the append method and setting the* `ignore_index` *parameter to* `True` *to ensure that the index of the new row is automatically assigned.*

The output of this code will be a DataFrame with six rows and three columns, including the new empty row:
<pre class="output">
      name   age  city
0    Alice    25  New York
1      Bob    30  Los Angeles
2  Charlie    35  Chicago
3    David    28  Miami
4    Emily    27  San Francisco
5      NaN   NaN  NaN
</pre>

<div class="warning" markdown="1">
Note that the <u>values in the new empty row</u> are represented as `NaN` (Not a Number), which is the default value for missing or undefined data in **Pandas**.
</div>

### <b class="prefix-2"></b>*new column to existing DataFrame*

**add a column with values** <br>
To add a new column to an existing DataFrame in Pandas, you can simply assign a new column with a name and values to the DataFrame.

Here's an example of adding a new column called 'gender' to the DataFrame from the previous example:
```python
# add a new column to the DataFrame
df['gender'] = ['F', 'M', 'M', 'M', 'F']

print(df)
```
*In this example, we added a new column called 'gender' to the* `DataFrame` *by assigning a list of values to it using the square bracket notation.* <br>
<p class="footnote c-alert mt-">* Note that the length of the list must match the number of rows in the DataFrame.</p>


The output of this code will be a DataFrame with four columns, including the new 'gender' column:
<pre class="output">
      name   age  city           gender
0    Alice    25  New York            F
1      Bob    30  Los Angeles         M
2  Charlie    35  Chicago             M
3    David    28  Miami               M
4    Emily    27  San Francisco       F
5      NaN   NaN  NaN               NaN
</pre>

<base class="mt">
**add an empty column** <br>
To add an empty column to an existing DataFrame in Pandas, you can simply assign an empty Series with a name to the DataFrame.

Here's an example of adding an empty column called 'income' to the DataFrame from the previous example:
```python
# add an empty column to the DataFrame
df['income'] = pd.Series(dtype=float)

print(df)
```
*In this example, we added an empty column called 'income' to the* `DataFrame` *by assigning an empty Pandas* `Series` *with a data type (dtype) of float to it using the square bracket notation.*

The output of this code will be a DataFrame with four columns, including the new empty 'income' column:
<pre class="output">
      name   age  city           gender  income
0    Alice    25  New York            F     NaN
1      Bob    30  Los Angeles         M     NaN
2  Charlie    35  Chicago             M     NaN
3    David    28  Miami               M     NaN
4    Emily    27  San Francisco       F     NaN
5      NaN   NaN  NaN               NaN     NaN
</pre>

<div class="warning" markdown="1">
Note that the <u>values in the new empty column</u> are represented as `NaN` (Not a Number), which is the default value for missing or undefined data in **Pandas**.
</div>


## **Access data**

### *in the* `Series`

Let's assume we have a Pandas Series:

```python
import pandas as pd

# create a Pandas Series with four values
s = pd.Series([25, 30, 35, 40], index=['John', 'Jane', 'Jack', 'Jill'])
```

We can access the values and index labels of the Series using indexing:
```python
# access the value for 'Jane'
print(s['Jane'])
```
<pre class="output">30</pre>

```python
# access the values for 'Jane' and 'Jack'
print(s[['Jane', 'Jack']])
```
<pre class="output">
Jane    30
Jack    35
<i>dtype: int64</i>
</pre>

```python
# access the values greater than 30
print(s[s > 30])
```
<pre class="output">
Jack    35
Jill    40
<i>dtype: int64</i>
</pre>


### *in the* `DataFrame`

Let's assume we have a Pandas DataFrame:

```python
import pandas as pd

# create the DataFrame
df = pd.DataFrame({'name': ['Alice', 'Bob', 'Charlie'], 'age': [25, 30, 35], 'city': ['New York', 'Los Angeles', 'Chicago']})
```

The `print()` function displays the DataFrame:
```python
print(df)
```
<pre class="output">
      name  age         city
0    Alice   25     New York
1      Bob   30  Los Angeles
2  Charlie   35      Chicago
</pre>

<div class="note" markdown="1">
In Pandas, you can **access data in a DataFrame using indexing and slicing.**
</div>

Here are some examples of how to access data in the DataFrame `df`:

<details class="l-frame" markdown="1"><summary><b>A. Access a single column by name</b></summary>

```python
series_col = df['name']
```
*This returns a Pandas Series object containing the values in the 'name' column.*
<pre class="output">
<b class="prompt-1"></b>print(series_col)
0      Alice
1        Bob
2    Charlie
</pre>
</details>


<details class="l-frame" markdown="1"><summary><b>B. Access multiple columns by name</b></summary>

```python
new_df_col = df[['name', 'age']]
```
*This returns a new DataFrame containing only the 'name' and 'age' columns.*
<pre class="output">
<b class="prompt-1"></b>new_df_col
      name  age
0    Alice   25
1      Bob   30
2  Charlie   35
</pre>
</details>


<details class="l-frame" markdown="1"><summary><b>C. Access a single row by index</b></summary>

```python
series_row = df.loc[0]
```
*This returns a Series object containing the values in the first row of the DataFrame (index 0).*
<pre class="output">
<b class="prompt-1"></b>series_row
name       Alice
age           25
city    New York
</pre>
</details>


<details class="l-frame" markdown="1"><summary><b>D. Access multiple rows by index</b></summary>

```python
new_df_row = df.loc[0:1]
```
*This returns a new DataFrame containing the first two rows of the DataFrame (indexes 0 and 1).*
<pre class="output">
<b class="prompt-1"></b>new_df_row
    name  age         city
0  Alice   25     New York
1    Bob   30  Los Angeles
</pre>
</details>


<details class="l-frame" markdown="1"><summary><b>E. Access a single value by row and column index</b></summary>

```python
this_value = df.loc[0, 'name']
```
*This returns the value in the first row and 'name' column of the DataFrame (which is 'Alice' in this example).*
<pre class="output">
<b class="prompt-1"></b>this_value
'Alice'
</pre>
</details>


<details class="l-frame" markdown="1"><summary><b>F. Access a subset of rows and columns using boolean indexing</b></summary>

```python
new_df_subset = df[(df['age'] > 25) & (df['city'] == 'Chicago')][['name', 'age']]
```
*This returns a new DataFrame containing only the 'name' and 'age' columns for the rows where the age is greater than 25 and the city is 'Chicago'.*
<pre class="output">
<b class="prompt-1"></b>new_df_subset
      name  age
2  Charlie   35
</pre>
</details>

<div class="protip mt" markdown="1">
Note that there are many other ways to access data in a `DataFrame` in Pandas, such as: <base class="mb">
* using integer indexing with the `iloc` method,
* using advanced indexing techniques like `.loc[]` and `.iloc[]`.
<base class="mt">
The best method to use depends on the specific task at hand.
</div>

<div class="more" markdown="1">
Learn more about Pandas indexing and selecting data from the official documentation:
* <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html" target="_blank">Indexing and selecting data  ⤴</a>
* <a href=" https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#indexing-label" target="_blank"><b>.loc[]</b>: Selection by label  ⤴</a>
* <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#selection-by-position" target="_blank"><b>.iloc[]</b>: Selection by position  ⤴</a>
</div>


## **Load data from a file**

Pandas provides functions for reading data from a variety of sources, including:

| function          | file type          | tutorial                         |
|-------------------|--------------------|----------------------------------|
| `pd.read_csv()`   | CSV files          | [example](#csv-read_csv)         |
| `pd.read_excel()` | Excel spreadsheets | [example](#excelxlsx-read_excel) |
| `pd.read_sql()`   | SQL databases      | [example](#sql-read_sql)         |
| `pd.read_json()`  | JSON files         | [example](#json-read_json)       |
| `pd.read_html()`  | HTML code          | [example](#html-read_html)       |

...and more. <button class="btn more"></button> from <a href="https://pandas.pydata.org/pandas-docs/stable/reference/io.html" target="_blank">Pandas : Input/Output</a>


### CSV: `read_csv()`

<div class="note" markdown="1">
The `pd.read_csv()` function is a convenient way to read in data from a CSV or TXT file and convert it to a DataFrame object. While importing data from a file, you can also handle various data types and missing values, facilitating seamless data manipulation and analysis in Python.
</div>

You can use the `pd.read_csv()` function to read data from a CSV file, for example:
```python
import pandas as pd

# Load data from a CSV file
df = pd.read_csv('data.csv')
```
*In this example, we're using Pandas to load data from a CSV file called "data.csv" and store it in a `DataFrame` called* **df**.

### EXCEL/XLSX: `read_excel()`
To load data from an Excel file, you can use the `read_excel()` function in Pandas.
```python
import pandas as pd

# Load data from an Excel file
df = pd.read_excel('data.xlsx')
```
*In this example, we are loading data from an Excel file named "data.xlsx". The resulting data is stored in a Pandas `DataFrame` named* **df**.

### SQL: `read_sql()`
To load data from a SQL database, you can use the `read_sql()` function in Pandas.
```python
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
```python
import pandas as pd

# Load data from a JSON file
df = pd.read_json('data.json')
```
*In this example, we are loading data from a JSON file named "data.json". The resulting data is stored in a Pandas DataFrame named* **df**.

### HTML: `read_html()`
To load data from an HTML file or webpage, you can use the `read_html()` function in Pandas.
```python
import pandas as pd

# Load data from an HTML table
tables = pd.read_html('https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)')

# Select the table you want from the list of tables
df = tables[0]
```
*In this example, we are loading data from an HTML table on the Wikipedia page for a list of countries by population. The* `read_html()` *function returns a list of all tables found on the page. We then select the table we want by indexing the list. The resulting data is stored in a Pandas DataFrame named* **df**.

### OTHER FORMATS <br><span class="c-header">I/O CheetSheet</span>

<div class="more" markdown="1">
The complete list of **file formats supported by Pandas** can be found in the official documentation under the IO Tools section: <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html" target="_blank">IO tools (text, CSV, HDF5, …)  ⤴</a> <br>
This page provides detailed information on how to read and write data from various file formats, including CSV, Excel, SQL, JSON, HTML, HDF5, Parquet, Feather, Msgpack, and many others. Each format has its own section with examples and explanations.
</div>

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


## **Explore data**

Once you've loaded your data into a Pandas DataFrame, you can use various functions to explore the data and get a sense of its structure and characteristics. For example, you can use the following functions:
* `df.head()` to display the first few rows of a DataFrame,
* `df.describe()` to get summary statistics for numerical columns,
* `df.info()` to display column names and data types

```python
# Display the first few rows of the DataFrame
print(df.head())

# Display summary statistics for numerical columns
print(df.describe())

# Display column names and data types
print(df.info())
```

<div class="exercise" markdown="1">

Assume the following data:
<code class="code-block bc-data">      name   age  city
0    Alice    25  New York
1      Bob    30  Los Angeles
2  Charlie    35  Chicago
3    David    28  Miami
4    Emily    27  San Francisco
</code>

1. Now, you have two options:
* **Option 1:** Copy this data to a file named "data.txt" or format it to CSV. Then, read a file with Pandas.
* **Option 2:** Create the DataFrame directly in your code.

2. Once you have the DataFrame ready, explore the data using the following functions:
* Use `print(df.head())` to display the first few rows.
* Utilize `print(df.describe())` for summary statistics.
* Apply `print(df.info())` to view information about the DataFrame.

<div class="protip mt mb-0 font-1" markdown="1">
Refer to the previous section for detailed instructions:
* [Create DataFrame from Python object → DataFrame from a dictionary](#create-dataframe-from-python-object)
* [Load data from a file](#load-data-from-a-file) → [CSV: read_csv()](#csv-read_csv)
* [Explore data](#explore-data)
</div>

<details class="l-frame mt" markdown="1"><summary><b><i>See example solution for option 1</i></b></summary>

```python
import pandas as pd

# Read data from the file
df = pd.read_csv("data.txt", delim_whitespace=True)
```

**Explore the data**
```python
print("First few rows:")
print(df.head())
```
<pre class="output">
      name  age           city
0    Alice   25       New York
1      Bob   30    Los Angeles
2  Charlie   35        Chicago
3    David   28          Miami
4    Emily   27  San Francisco
</pre>
```python
print("\nSummary statistics:")
print(df.describe())
```
<pre class="output">
             age
count   5.000000
mean   29.000000
std     3.807887
min    25.000000
25%    27.000000
50%    28.000000
75%    30.000000
max    35.000000
</pre>
```python
print("\nDataFrame information:")
print(df.info())
```
<pre class="output mb-0">
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 5 entries, 0 to 4
Data columns (total 3 columns):
 #   Column  Non-Null Count  Dtype
---  ------  --------------  -----
 0   name    5 non-null      object
 1   age     5 non-null      int64
 2   city    5 non-null      object
dtypes: int64(1), object(2)
memory usage: 248.0+ bytes
None
</pre>
</details>
</div>


## **Clean data**

Pandas provides functions for cleaning and transforming data, such as:
* `df.drop_duplicates()` to remove duplicate rows from a DataFrame,
* `df.fillna()` to handle missing values *(e.g., to fill in missing values with a specified value or method)*,
* converting data types.

```python
# Remove duplicate rows
df = df.drop_duplicates()

# Fill in missing values with the mean value of the column
df['column_name'].fillna(df['column_name'].mean(), inplace=True)

# Convert a string column to a datetime column
df['date_column'] = pd.to_datetime(df['date_column'], format='%Y-%m-%d')
```

## **Filter data**

You can use *Boolean indexing* and other functions to filter and subset data based on certain criteria.

For example, you can use the `df[df['column'] > value]` syntax to filter rows based on a condition.
```python
# Filter rows where a column value is greater than a certain value
filtered_df = df[df['column_name'] > value]

# Filter rows where a column value is in a list of values
filtered_df = df[df['column_name'].isin(list_of_values)]
```


## **Aggregate data**

Pandas provides functions for grouping and aggregating data, such as calculating the mean, sum, or count of values in a column or group.

For example, you can use the `df.groupby()` function to group data by one or more columns, and then use a aggregation function such as `mean()` or `sum()` to calculate summary statistics for each group.

```python
# Group data by a column and calculate the mean of another column
grouped_df = df.groupby('group_column')['value_column'].mean()

# Group data by multiple columns and calculate the sum of another column
grouped_df = df.groupby(['group_column_1', 'group_column_2'])['value_column'].sum()
```
