---
title: "NumPy library - multi-dimensional arrays parser"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 537
level: 2
categories: ["programming", "data-types", "data-manipulation", "analysis", "HPC, computing", "library-package-module"]
tags: ["numpy", "python", "array", "object", "functions", "import", "numerical-computing", "data-indexing", "data-clicing"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<a href="https://numpy.org/" target="_blank">NumPy  ⤴</a> is a popular Python library for scientific computing that provides support for:
* large, multi-dimensional arrays and matrices,
* along with a variety of high-level mathematical functions.

<button class="btn more"></button> ...about NumPy from the official documentation at: <a href="https://numpy.org/doc/stable/" target="_blank">https://numpy.org/doc/stable/  ⤴</a>

It is built around a powerful and efficient data structure called an `ndarray`, which stands for **n-dimensional array**. This data structure allows for fast and efficient computation on large sets of data, and it is optimized for numerical operations.

<table>
  <tr> <th width="50%" class="center-h">1D ndarray</th> <th class="center-h">2D ndarray</th> </tr>
  <tr> <td>A 1D array is a data structure that holds a sequence of elements of the same data type in a linear fashion. It is similar to a list.</td> <td>A multi-dimensional ndarray is an array with more than one dimension represented with a shape tuple of the sizes of each dimension (n1, n2, ..., nk).</td> </tr>
  <tr>
    <td><i># Create a 1-dimensional array of integers from 0 to 9</i>    <base class="mb"> <code class="code-block">sarr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])<br><br><br><br> </code></td>
    <td><i># Create a 2-dimensional array of floats with shape (3, 4)</i> <base class="mb"> <code class="code-block">arr2d = np.array([<br>    [1.0, 2.0, 3.0, 4.0],<br>    [5.0, 6.0, 7.0, 8.0],<br>    [9.0, 10.0, 11.0, 12.0]<br>])</code></td>
  </tr>
  <tr>
    <td class="no-border"><i># Printing the 1D array</i> <base class="mb"> <pre class="output">print(arr)<br><br># Output: [0 1 2 3 4 5 6 7 8 9]<br><br><br> </pre></td>
    <td class="no-border"><i># Printing the 2D array</i> <base class="mb"> <pre class="output">print(arr2d)<br><br># Output: <br>[[ 1.  2.  3.  4.]<br> [ 5.  6.  7.  8.]<br> [ 9. 10. 11. 12.]]</pre></td>
  </tr>
</table>

<div class="warning mt-" markdown="1">
The `ndarrays` are homogeneous, meaning **all elements in the array must be of the same data type**, and they support element-wise operations and mathematical functions.
</div>

Some of the key features of the NumPy library include:

<table>
  <tr> <th>ndarrays objects</th> <td><i>NumPy's main feature is its ndarray, a powerful data structure for representing and manipulating large <b>arrays of numerical data</b>.</i></td> </tr>
  <tr> <th>Input-Output (IO) operations</th> <td><i>NumPy includes tools for reading and writing data to and from disk, including support for a wide variety of file formats and data types.</i></td> </tr>
  <tr> <th>Vectorized operations</th> <td><i>NumPy's vectorized operations allow you to perform operations on entire arrays at once, making your code faster and more efficient than using loops or Python's built-in list data type.</i></td> </tr>
  <tr> <th>Broadcasting</th> <td><i>NumPy's broadcasting feature allows you to perform operations on arrays with different shapes and sizes.</i>
<div class="protip font-1 mb-0 before" data-before="" markdown="1">
When you perform an operation on two arrays, **NumPy** will automatically broadcast the smaller array to match the shape of the larger array. <a class="btn" href="https://numpy.org/doc/stable/user/basics.broadcasting.html#broadcasting" target="_blank"><span class="c-alert">LEARN MORE</span></a>
</div></td> </tr>
  <tr> <th>Mathematical functions</th> <td><i>NumPy provides a wide range of mathematical functions for manipulating ndarrays, including: basic arithmetic functions, trigonometric functions, logarithmic functions, statistical functions, and linear algebra functions. </i></td> </tr>
  <tr> <th>Random number generation</th> <td><i>NumPy includes a powerful random number generation module that allows you to generate random numbers from a variety of distributions.</i></td> </tr>
  <tr> <th>Interoperability with other libraries</th> <td><i>NumPy is widely used in the scientific Python ecosystem, and it can be easily integrated with other libraries for data analysis, visualization, and machine learning, such as Pandas, Matplotlib, and scikit-learn.</i></td> </tr>
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


# Getting started with NumPy

NumPy is NOT a built-in Python module, meaning it is not included with the standard Python distribution. It is a third-party package that needs to be installed separately to be used in your Python environment.

<div class="protip" markdown="1">
**NumPy** is widely used in scientific computing and data analysis in Python, and it is included in many popular scientific Python distributions, such as Anaconda and Enthought Canopy. It can also be installed using package managers like `pip` or `conda` (see instructions below).
</div>


## Install `numpy` library

To install NumPy, you can use `pip`, which is the standard package installer for Python. You can run the following command in your terminal or command prompt to install NumPy:
```bash
pip install numpy
```

*This will download and install the latest version of NumPy from the Python Package Index (PyPI).*


An alternative way to install NumPy is using Conda. This way you can install different variants of `numpy` library in separate virtual environments, depending on the requirements of your project. You can create and activate a new conda environment, and then install `numpy` libarary:
```bash
conda install numpy
```

*This will download and install the latest version of NumPy from the conda repository.*

<div class="warning" markdown="1">
This command will install **NumPy** and any necessary dependencies <u>in your current Conda environment</u>. <base class="mb">
<button class="btn required mr"></button> If you don't have `conda` installed yet, you can follow the guide provided in the tutorial <a class="t-links" href="423"></a>. If you are using the Anaconda distribution, `conda` is already installed by default.
</div>

<div class="protip" markdown="1">
`conda` provides additional benefits over `pip`, such as the ability to create and manage multiple environments for different projects with different dependencies, and the ability to install packages from both the Conda and PyPI (Python Package Index) repositories.
</div>

<div class="note" markdown="1">
If you are working in a **virtual environment**, you can install packages without administrative privileges by activating the virtual environment before running the installation command.
</div>


## Import `numpy` library

Once installed, NumPy can be imported into Python scripts and used to perform numerical computations and data manipulation.
```python
import numpy as np
```
This will import the NumPy library and give it an alias of `np`, which is a commonly used abbreviation for NumPy.

You can then use the NumPy functions and classes in your code by prefixing them with **np**, such as `np.array()` or `np.linspace()`.


# Numerical data manipulation

NumPy is primarily designed for **numerical computing** and is optimized for operations on arrays of numerical data. While NumPy arrays can technically store any type of data, they are most commonly used to store numerical data, such as `integers`, `floating-point` numbers, and `complex numbers`.

<div class="note" markdown="1">
While `numpy` is primarily used for numerical data, it can also be used for other types of data, such as images and sound signals, which can be represented as numerical arrays. **NumPy** is also commonly used in combination with <u>other Python libraries</u> for scientific computing and data analysis, such as `pandas`, `scipy`, and `matplotlib`.
</div>


## NumPy objects

There is only one basic class in NumPy, which is the `ndarray` (short for **n-dimensional array**). This is the fundamental data structure in NumPy, and it is used to represent arrays of numerical data in Python. It also provides efficient storage and manipulation of large arrays, as well as fast computation through optimized C code and parallel processing.

```python
import numpy as np

arr = np.array([1, 2, 3])
```

<pre class="output">
<b class="prompt-1"></b>print(arr)
[1 2 3]
</pre>

The `ndarray` class provides many built-in methods and functions for working with arrays, such as:
* element-wise mathematical operations,
* slicing and indexing,
* reshaping,
* concatenation, and
* stacking.

In addition to the `numpy.ndarray` class, NumPy has several other subclasses of arrays that have additional methods and properties for specific use cases:

<details class="l-frame" markdown="1"><summary><b>numpy.matrix()</b></summary>

This is a subclass of ndarray that has additional methods for matrix operations, such as matrix multiplication, matrix inversion, and transposition.
```python
import numpy as np
mat = np.matrix([[1, 2], [3, 4]])
```
<pre class="output">
<b class="prompt-1"></b>print(mat)
[[1 2]
 [3 4]]
</pre>
*In this example, we create a 2D matrix with values 1, 2, 3, and 4.*
</details>

<details class="l-frame" markdown="1"><summary><b>numpy.chararray()</b></summary>

This is a subclass of ndarray that is designed for working with strings. It provides additional methods for string operations, such as string concatenation, string splitting, and string comparison.
```python
import numpy as np
char_arr = np.chararray((2, 2))
char_arr[:] = 'a'
```
<pre class="output">
<b class="prompt-1"></b>print(char_arr)
[['a' 'a']
 ['a' 'a']]
</pre>
*Here we created a 2x2 character array using np.chararray() function. The values are initialized with* `'a'`.
</details>

<details class="l-frame" markdown="1"><summary><b>numpy.ma.MaskedArray()</b></summary>

This is a subclass of ndarray that allows you to specify a mask to indicate missing or invalid data. It provides additional methods for working with masked arrays, such as filling missing values, calculating statistics, and applying mathematical operations.
```python
import numpy as np
arr = np.ma.MaskedArray([1, 2, 3], mask=[False, True, False])
```
<pre class="output">
<b class="prompt-1"></b>print(arr)
[1 -- 3]
</pre>
*The* `numpy.ma.MaskedArray` *class is a subclass of* `numpy.ndarray` *that represents arrays with some masked values, which are treated as missing values. In this example, we create a 1D masked array with values 1, 2, and 3, but mask the value at index 1.*
</details>

<details class="l-frame" markdown="1"><summary><b>numpy.recarray()</b></summary>

This is a subclass of ndarray that allows you to specify a named data type for each column of the array. It provides additional methods for working with structured arrays, such as accessing fields by name, sorting by field, and grouping by field.
```python
import numpy as np
rec_arr = np.rec.array([(1, 'John'), (2, 'Doe')], dtype=[('id', int), ('name', 'U10')])
```
<pre class="output">
<b class="prompt-1"></b>print(rec_arr)
[(1, 'John') (2, 'Doe')]
</pre>
*The* `numpy.recarray` *class is a subclass of* `numpy.ndarray` *that represents arrays with named fields, where each field has a different data type.  In this case, the record array has two fields:*
* `'id'` *which is of integer data type and*
* `'name'` *which is of Unicode string data type with a maximum length of 10 characters ('U10').* <base class="mb">
The data of the record array is passed as a list of tuples, where each tuple represents a record with values for each field in the order they are specified in the dtype parameter. *In this case, the list contains two tuples representing two records, each with an 'id' and 'name' field.*
</details>

<details class="l-frame" markdown="1"><summary><b>numpy.datetime64()</b></summary>

This is a subclass of ndarray that is designed for working with dates and times. It provides additional methods for working with dates and times, such as converting between time zones, parsing date strings, and formatting dates for display.
```python
import numpy as np <br><br>
dt = np.datetime64('2022-12-25')
```
<pre class="output">
<b class="prompt-1"></b>print(dt)
2022-12-25
</pre>
*This code creates a scalar datetime object of the numpy.datetime64 class. The date "2022-12-25" is passed as a string to the* `np.datetime64()` *function, which returns a datetime object representing the specified date. The* `numpy.datetime64` *class is used to represent dates and times in NumPy with nanosecond precision.*
</details>


## *NumPy data types*

<button class="btn more"></button> *...from the docs: <a href="https://numpy.org/doc/stable/user/basics.types.html#data-types" target="_blank"> Data types  ⤴</a>*

NumPy supports a wide range of data types, including:

* **Integers** (int8, int16, int32, int64, uint8, uint16, uint32, uint64)
* **Complex numbers** (complex64, complex128, complex256)
* **Booleans** (bool)
* **Characters** (bytes, str)
* **Unicode** (U + number of bytes, e.g. U10 for 10-byte Unicode strings)
* **Structured data** (compound types with named fields)

<p class="footnote mt-">^ NumPy also provides options to set the endianness (byte order) of the data. </p>


## **Indexing & Slicing arrays**

<button class="btn more"></button> *...from the docs: <a href="https://numpy.org/doc/stable/user/basics.indexing.html#indexing-on-ndarrays" target="_blank"> Indexing on ndarrays  ⤴</a>*

Indexing in Numpy arrays refers to **accessing specific elements or subsets of an array**. <br>Numpy arrays can be indexed using:
* integers,
* slices, and
* Boolean masks.


## *Integer indexing*

Integer indexing is used to **select specific elements** of an array by specifying their position in the array.

Let's assume we have a simple 1D array:
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
```
<base class="mt">
To **access a single element** in the array, you can use its index in square brackets:
```python
print(arr[0])                                   # Output: 1
```
<base class="mt">
You can also **select multiple elements** by passing in a list or an array of indices. <br>*For example:*
```python
print(arr[[0, 2, 4]])                           # Output: 1, 3, 5
```
*selects the 1st, 3rd, and 5th elements of the array arr.*
<base class="mt">
You can also use negative indices to **count from the end of the array**:
```python
print(arr[-1])                                  # Output: 6
```


## *Slicing*

Slicing is used to **select a range of elements** from an array. You can slice an array using the `:` operator.

To access a range of elements, you can use slicing with the **start:stop:step** syntax:
```python
print(arr[1:4])                                 # Output: [2 3 4]
```

*Here, the* `arr[1:4]` *selects elements from position 1 to position 3 (inclusive) of the array arr.*

<div class="protip" markdown="1">
You can also use slicing to select every other element, or to reverse the order of the elements.
</div>


## *Boolean indexing*

Boolean indexing is used to **select elements of an array that satisfy a certain condition**. You can create a Boolean mask by applying a condition to an array, and then use this mask to select the elements of the array that meet the condition.

For example, `arr[arr > 2]` selects all the elements of the array arr that are greater than 2.

<pre class="output">
<b class="prompt-1"></b>print(arr[arr > 2])
[3 4 5 6]
</pre>


## *Indexing in multidimensional array*

<div class="protip" markdown="1">
Numpy arrays can also be indexed using **multi-dimensional indices**. For example, `arr[0, 2]` selects the <u>element at row 0 and column 2</u> of a 2D array. You can also use slicing and Boolean indexing along each dimension of a multi-dimensional array to select specific subsets of the array.
</div>

Let's assume we have a simple 1D array:
```python
import numpy as np

arr = np.array([[1, 2], [3, 4], [5, 6]])
```
<base class="mt">
To **access a single element** in the multidimensional array, you can use comma-separated indices:
```python
print(arr[0, 1])                                # Output: 2
```
<base class="mt">
You can also use slicing with multiple indices to **access subarrays**:
```python
print(arr[:2, 1:])                              # Output: [[2], [4]]
```

## **Create NumPy arrays**

<button class="btn more"></button> *...from the docs: (<a href="https://numpy.org/doc/stable/user/basics.creation.html#array-creation" target="_blank"> Array creation  ⤴</a>*

<div class="warning" markdown="1">
In NumPy, `numpy.ndarray` and `numpy.array` refer to the same thing.
</div>

The `numpy.array` is a function that creates a new instance of `numpy.ndarray` *(underlying class that represents NumPy arrays)*. Using the `numpy.array` is the preferred way to create an ndarray object in NumPy.

<table class="mb-0">
  <tr> <th width="50%" class="center-h">numpy.array (preferred)</th> <th class="center-h">numpy.ndarray</th> </tr>
  <tr> <td>For example, the following code creates a new ndarray object using the `numpy.array` function:</td> <td>Alternatively, you could also create an ndarray object directly using the `numpy.ndarray` class constructor, like this:</td> </tr>
  <tr>
    <td><code class="code-block">import numpy as np <br><br>a = np.array([1, 2, 3]) <br><br>print(type(a))</code></td>
    <td><code class="code-block">import numpy as np <br><br>a = np.ndarray([1, 2, 3]) <br><br>print(type(a))</code></td>
  </tr>
  <tr>
    <td class="no-border"><pre class="output font-1"><class 'numpy.ndarray'></pre></td>
    <td class="no-border"><pre class="output font-1"><class 'numpy.ndarray'></pre></td>
  </tr>
</table>

<div class="protip mt-0" markdown="1">
It is generally recommended to use `numpy.array` to create new **ndarray objects**, as it provides additional options and features, such as `dtype`, `copy`, `order`, and `subok`.
</div>


## *Create 1D array*

To create a 1D array, you can use the `np.array` function and **pass a Python list** as an argument:

```python
import numpy as np

l = [1, 2, 3, 4, 5]             # python list
a = np.array(l)                 # numpy array

print(a)
```
<pre class="output">
<b class="prompt-1"></b>print(a)
[1 2 3 4 5]
</pre>


## *Create 2D array*

To create a 2D array, you can use the `np.array` function and **pass a nested list** as an argument. The resulting array will have the same number of dimensions as the nested list, with each **inner list converted to a row** of the array.

```python
import numpy as np

l = [[1, 2], [3, 4], [5, 6]]    # nested list composed of 3 inner lists
b = np.array(l)                 # numpy 2D array of 3 rows and 2 columns

print(b)
```
*The resulting array have the same number of dimensions as the nested list (in this case, 2 dimensions), with each inner list converted to a row of the array*
<pre class="output">
<b class="prompt-1"></b>print(b)
[[1 2]
 [3 4]
 [5 6]]
</pre>

<div class="example italic" markdown="1">
Note that the shape of the resulting array will be `(n, m)`, where:
* `n` is the number of inner lists in the nested list, and
* `m` is the length of each inner list.
<base class="mt">
In the above example, `n = 3` and `m = 2`, so the shape of the resulting array is `(3, 2)`, i.e. 3 rows and 2 columns.
</div>


## *Create multidimensional array*

To create an n-dimensional array in NumPy, you can simply **pass a nested list of n dimensions** to the `numpy.array()` function. The shape of the resulting array will be determined by the number of elements in each dimension of the nested list.

Here is an example of a **3-dimensional** NumPy array with shape (2, 2, 3):
```python
import numpy as np

arr = np.array([
                [[1, 2, 3], [4, 5, 6]],         # layer 1: 2 rows of 3 elements each
                [[7, 8, 9], [10, 11, 12]]       # layer 2: 2 rows of 3 elements each
              ])
```
*This creates a 3-dimensional array with shape (2, 2, 3), where the first dimension has length 2, the second dimension has length 2, and the third dimension has length 3. The array contains two "layers", each of which contains two "rows" of three elements each.*

<pre class="output">
<b class="prompt-1"></b>print(arr)
[[[ 1  2  3]
  [ 4  5  6]]

 [[ 7  8  9]
  [10 11 12]]]
</pre>

<base class="mt">
Here is an example of a **4-dimensional** NumPy array with shape (2, 3, 4, 5):
```python
import numpy as np

arr = np.array([
                [                                            #  layer 1
                 [[1, 2, 3, 4], [5, 6, 7, 8]],               ## block 1: 2 rows of 4 elements
                 [[9, 10, 11, 12], [13, 14, 15, 16]],        ## block 2: 2 rows of 4 elements
                 [[17, 18, 19, 20], [21, 22, 23, 24]]        ## block 3: 2 rows of 4 elements
                ],
                [                                            #  layer 2
                 [[25, 26, 27, 28], [29, 30, 31, 32]],       ## block 1: 2 rows of 4 elements
                 [[33, 34, 35, 36], [37, 38, 39, 40]],       ## block 2: 2 rows of 4 elements
                 [[41, 42, 43, 44], [45, 46, 47, 48]]        ## block 3: 2 rows of 4 elements
                ]
               ])
```
*This creates an array with two layers, each of which contains three "blocks", each of which contains two "rows" of four elements each. In this example, the array has four dimensions:*
* *The first dimension has length 2, indicating that there are two "layers" in the array.*
* *The second dimension has length 3, indicating that each layer has three "blocks".*
* *The third dimension has length 2, indicating that each block has two "rows".*
* *The fourth dimension has length 4, indicating that each row has four elements.*

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>see the expected output</i></b></summary>

<pre class="output">
<b class="prompt-1"></b>print(arr)
[[[[ 1  2  3  4]
   [ 5  6  7  8]]

  [[ 9 10 11 12]
   [13 14 15 16]]

  [[17 18 19 20]
   [21 22 23 24]]]


 [[[25 26 27 28]
   [29 30 31 32]]

  [[33 34 35 36]
   [37 38 39 40]]

  [[41 42 43 44]
   [45 46 47 48]]]]
</pre>
</details>


## **Create NumPy matrices**

A matrix is a special case of a multidimensional **array with two dimensions**. You can create a matrix using the `np.matrix` function, which takes a nested list or 2D array as an argument:

```python
import numpy as np
l = [[1, 2], [3, 4]]            # nested list composed of 2 inner lists
a = np.matrix(l)                # numpy 2D array of 2 rows and 2 columns

print(a)
```
<pre class="output">
<b class="prompt-1"></b>print(a)
[[1 2]
 [3 4]]
</pre>

<base class="mt">
You can also create a matrix using the `np.array` function and passing a nested list or 2D array as an argument:
```python
import numpy as np
l = [[1, 2], [3, 4]]                    # nested list composed of 2 inner lists
a = np.array(l, dtype=np.matrix)        # numpy 2D array of 2 rows and 2 columns

print(a)
```
<p class="footnote c-alert mt-0" markdown="1">^ Note that the `dtype` argument is used to specify the data type of the array, which in this case is `np.matrix`.</p>

<pre class="output mt-">
<b class="prompt-1"></b>print(a)
[[1 2]
 [3 4]]
</pre>


## *2D array vs. matrix*

In NumPy, a **2D array** is a general term that refers to an array with two dimensions. It can be created using the `np.array` function. A NumPy **matrix** is a subclass of a 2D array that has specific properties and behaviors. It is created using the `np.matrix` function. One key difference between a matrix and a 2D array is the way that they handle matrix multiplication.

<table class="mb-0">
  <tr> <th width="50%" class="center-h">2D array</th> <th class="center-h">matrix</th> </tr>
  <tr> <td>Consider the following two 2D arrays:</td> <td>Let's create the same arrays as matrices:</td> </tr>
  <tr>
    <td><code class="code-block">import numpy as np <br><br>a = np.array([[1, 2], [3, 4]]) <br>b = np.array([[5, 6], [7, 8]])</code></td>
    <td><code class="code-block">import numpy as np <br><br>a_mat = np.matrix([[1, 2], [3, 4]]) <br>b_mat = np.matrix([[5, 6], [7, 8]])</code></td>
  </tr>
  <tr> <td><p markdown="1">To perform matrix multiplication on these arrays, you can use the `np.dot` function:</p></td> <td><p markdown="1">To perform matrix multiplication on these matrices, you can use the `*` operator:</p></td> </tr>
  <tr>
    <td><code class="code-block">c = np.dot(a, b) <br><br>print(c)</code></td>
    <td><code class="code-block">c_mat = a_mat * b_mat <br><br>print(c_mat)</code></td>
  </tr>
  <tr>
    <td class="no-border"><pre class="output font-1">[[19 22]<br> [43 50]]</pre></td>
    <td class="no-border"><pre class="output font-1">[[19 22]<br> [43 50]]</pre></td>
  </tr>
</table>

<div class="protip mt-0" markdown="1">
Note that with matrices, you can use the `*` **operator** to perform <u>matrix multiplication</u> instead of the `np.dot` function. This can make the code more concise and easier to read.
</div>
<div class="note" markdown="1">
In addition, matrices have some additional methods that are not available for 2D arrays. <br>*([see section below](#functions-for-matrix-operations))*
</div>


## *Functions for Matrix operations*

NumPy provides a range of functions for performing matrix operations, such as matrix multiplication, inversion, and determinant calculation. These methods are all specific to NumPy matrices, rather than NumPy ndarrays in general.
These functions are available in the `np.linalg` module.

Let's assume we have a matrix:
```python
import numpy as np

arr = np.array([[1, 2], [3, 4]])        # 2D array
mat = np.matrix(arr)                    # matrix
```


| method  | usage       | output                 | description |
|---------|-------------|------------------------|-------------|
| A       | mat.A       | [[1 2] [3 4]]          | Returns the base array of the matrix. <br>*This simply returns the original ndarray that was used to create the matrix.* |
| A1      | mat.A1      | [1 2 3 4]              | Returns the flattened base array of the matrix. <br>*This is the same as A, except that the resulting array is flattened (i.e., converted to a 1D array).* |
| H       | mat.H       | [[1 3] [2 4]]          | Returns the conjugate transpose of the matrix. <br>*This is equivalent to taking the transpose of the matrix and then taking the complex conjugate of each element.* |
| I       | mat.I       | [[-2. 1.] [ 1.5 -0.5]] | Returns the inverse of the matrix. <br>*Note that the matrix must be square in order to have an inverse.*  |
| T       | mat.T       | [[1 3] [2 4]]          | Returns the transpose of the matrix. <br>*This is equivalent to "flipping" the matrix along its diagonal.* |
| conj    | mat.conj    | [[1.-0.j 2.-0.j] [3.-0.j 4.-0.j]]| Returns the complex conjugate of the matrix. <br>*This is equivalent to taking the complex conjugate of each element of the matrix.* |
| getA    | mat.getA    | *see A*                | Returns the base array of the matrix.           |
| getA1   | mat.getA1   | *see A1*               | Returns the flattened base array of the matrix. |
| getH    | mat.getH    | *see H*                | Returns the conjugate transpose of the matrix.  |
| getI    | mat.getI    | *see I*                | Returns the inverse of the matrix.              |
| getT    | mat.getT    | *see T*                | Returns the transpose of the matrix.            |
| getconj | mat.getconj | *see conj*             | Returns the complex conjugate of the matrix.    |

<div class="warning" markdown="1">
Note that these methods are **NOT available for NumPy arrays**. However, some of them can be emulated using NumPy array methods. For example, the transpose of an array can be calculated using the `np.transpose` function, and the inverse of a matrix can be calculated using the `np.linalg.inv` function.
</div>


## Read and Write to a file

NumPy provides several options for Input/Output (I/O) operations for reading and writing data from and to various file formats. The complete list of available options can be explored in the official NumPy documentation at <a href="https://numpy.org/doc/stable/reference/routines.io.html" target="_blank">https://numpy.org/doc/stable/reference/routines.io.html  ⤴</a>

Some of the popular I/O options are:
* `np.save()` and `np.load()`
* `np.savetxt()` and `np.loadtxt()`
* `np.genfromtxt()`

### *np.save() & np.load()*

These are the most basic functions provided by NumPy for **saving and loading arrays in the binary `.npy` format**.

<div class="note" markdown="1">
The `.npy` **format** is a binary format that stores the data in a raw binary format.
</div>

The `np.save()` function saves an array to a binary file in `.npy` format, while the `np.load()` function loads the data from the binary file into an array.

<button class="btn example"></button>
```python
import numpy as np

# Creating a sample array
arr = np.array([1, 2, 3, 4, 5])

# Saving the array to a binary file
np.save('sample.npy', arr)

# Loading the data from the binary file
loaded_arr = np.load('sample.npy')

print(loaded_arr)
```

### *np.savetxt() & np.loadtxt()*

These functions are used for **reading and writing arrays in text format**. The `np.savetxt()` function saves an array to a text file in a specified format, while the `np.loadtxt()` function loads the data from a text file into an array.

<button class="btn example"></button>
```python
import numpy as np

# Creating a sample array
arr = np.array([1, 2, 3, 4, 5])

# Saving the array to a text file
np.savetxt('sample.txt', arr)

# Loading the data from the text file
loaded_arr = np.loadtxt('sample.txt')

print(loaded_arr)
```

### *np.genfromtxt()*

This function is used to **load data from a text file with missing values**. It returns an array with the missing values replaced with a default value or a specified value.

<button class="btn example"></button>
```python
import numpy as np

# Creating a sample text file with missing values
with open('sample.txt', 'w') as f:
    f.write('1,2,3\n4,5,\n7,,9\n')

# Loading the data from the text file with missing values
loaded_arr = np.genfromtxt('sample.txt', delimiter=',', filling_values=0)

print(loaded_arr)
```

# Functions for Array operations

<button class="btn more"></button> *...from the official NumPy documentation at: <a href="https://numpy.org/doc/stable/" target="_blank">https://numpy.org/doc/stable/  ⤴</a>*

NumPy provides a wide range of built-in functions to perform various operations on NumPy arrays. Some of the commonly used functions for NumPy array operations are:

| method                     | description |
|----------------------------|-------------|
| [np.zeros()](#npzeros)             | Returns an array of zeros with the specified shape and data type. |
| [np.ones()](#npones)               | Returns an array of ones with the specified shape and data type. |
| [np.arange()](#nparrange)          | Returns an array with evenly spaced values within a given interval. |
| [np.linspace()](#nplinspace)       | Returns an array of evenly spaced numbers over a specified interval. |
| [np.reshape()](#npreshape)         | Reshapes an array to the specified shape. |
| [np.transpose()](#nptranspose)     | Transposes an array (rows become columns and columns become rows). |
| [np.concatenate()](#npconcatenate) | Joins two or more arrays along a specified axis. |
| [np.split()](#npsplit)             | Splits an array into multiple sub-arrays along a specified axis. |
| [np.sort()](#npsort)        | Sorts the elements of an array in ascending or descending order. |
| [np.max()](#npmax)          | Returns the maximum value of an array. |
| [np.min()](#npmin)          | Returns the minimum value of an array. |
| [np.mean()](#npmean)        | Returns the mean of an array. |
| [np.std()](#npstd)          | Returns the standard deviation of an array. |
| [np.sum()](#npsum)          | Returns the sum of the elements in an array. |
| [np.dot()](#npdot)          | Computes the dot product of two arrays. |


## np.zeros()

This function returns an array of zeros with the specified shape and data type. <br>
*This function also applies to NumPy matrices.*

```python
import numpy as np

# Create a 2D array of zeros with 3 rows and 4 columns
arr = np.zeros((3, 4))
```
<pre class="output">
<b class="prompt-1"></b>print(arr)
[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]
</pre>

## np.ones()

This function returns an array of ones with the specified shape and data type. <br>
*This function also applies to NumPy matrices.*

```python
import numpy as np

# Create a 1D array of ones with 5 elements
arr = np.ones(5)
```
<pre class="output">
<b class="prompt-1"></b>print(arr)
[1. 1. 1. 1. 1.]
</pre>

## np.arange()

This function returns an array with evenly spaced values within a given interval. <br>
*This function also applies to NumPy matrices.*

```python
import numpy as np

# Create an array of integers from 0 to 9
arr = np.arange(10)
```
<pre class="output">
<b class="prompt-1"></b>print(arr)
[0 1 2 3 4 5 6 7 8 9]
</pre>

## np.linspace()

This function returns an array of evenly spaced numbers over a specified interval. <br>
*This function also applies to NumPy matrices.*

```python
import numpy as np

# Create an array of 5 numbers from 0 to 1 (inclusive)
arr = np.linspace(0, 1, 5)
```
<pre class="output">
<b class="prompt-1"></b>print(arr)
[0.   0.25 0.5  0.75 1.  ]
</pre>

## np.reshape()

This function reshapes an array to the specified shape. <br>
*This function also applies to NumPy matrices.*

```python
import numpy as np

# Create a 1D array of integers from 0 to 9
arr = np.arange(10)                             # output: [0 1 2 3 4 5 6 7 8 9]

# Reshape the array into a 2D array with 2 rows and 5 columns
arr_reshaped = np.reshape(arr, (2, 5))
```
<pre class="output">
<b class="prompt-1"></b>print(arr_reshaped)
[[0 1 2 3 4]
 [5 6 7 8 9]]
</pre>

## np.transpose()

This function transposes an array (rows become columns and columns become rows).

```python
import numpy as np

# Create a 2D array with 2 rows and 3 columns
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Transpose the array (rows become columns and columns become rows)
arr_transposed = np.transpose(arr)
```
<pre class="output">
<b class="prompt-1"></b>print(arr_transposed)
[[1 4]
 [2 5]
 3 6]]
</pre>

## np.concatenate()

This function joins two or more arrays along a specified axis.

```python
import numpy as np

# Create two 1D arrays
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

# concatenate the two arrays horizontally
result_h = np.concatenate((arr1, arr2))

# concatenate the two arrays vertically
result_v = np.vstack((arr1, arr2))

# concatenate the two arrays along the second axis
result_a = np.concatenate((arr1, arr2), axis=0)
```
<pre class="output">
<b class="prompt-1"></b>print(result_h)
[1 2 3 4 5 6]

<b class="prompt-1"></b>print(result_v)
[[1 2 3]
 [4 5 6]]

<b class="prompt-1"></b>print(result_a)
[1 2 3 4 5 6]
</pre>

<div class="protip" markdown="1">
Note that the `np.hstack()` function can also be used to concatenate arrays horizontally, and the `np.dstack()` function can be used to concatenate arrays along a third dimension.
</div>


## np.split()

This function splits an array into multiple sub-arrays along a given axis.

```python
import numpy as np

arr = np.arange(16).reshape((4,4))
sub_arrays = np.split(arr, 2, axis=0)
```
<pre class="output">
<b class="prompt-1"></b>print(sub_arrays)
[array([[0, 1, 2, 3], [4, 5, 6, 7]]),
 array([[ 8,  9, 10, 11], [12, 13, 14, 15]])]
</pre>

## np.sort()

This function returns a sorted copy of an array.

```python
import numpy as np

arr = np.array([3, 2, 1, 4])

print(np.sort(arr))                             # Output: [1 2 3 4]
```

## np.max()

This function returns the maximum value of an array along a given axis.

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.max(arr))                              # Output: 6
print(np.max(arr, axis=0))                      # Output: [4 5 6]
```

## np.min()

This function returns the minimum value of an array along a given axis.

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(np.min(arr))                              # Output: 1
print(np.min(arr, axis=0))                      # Output: [1 2 3]
```

## np.mean()

This function returns the mean value of an array along a given axis.

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.mean(arr))                             # Output: 3.5
print(np.mean(arr, axis=0))                     # Output: [2.5 3.5 4.5]
```

## np.std()

This function returns the standard deviation of an array along a given axis.

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.std(arr))                              # Output: 1.707825127659933
print(np.std(arr, axis=0))                      # Output: [1.5 1.5 1.5]
```

## np.sum()

This function returns the sum of all elements in an array along a given axis.

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.sum(arr))                              # Output: 21
print(np.sum(arr, axis=0))                      # Output: [5 7 9]
```

## np.dot()

This function returns the dot product of two arrays.

```python
import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print(np.dot(a, b))                             # Output: [[19 22], [43 50]]
```
