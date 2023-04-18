---
title: "NumPy Library - Multi-Dimensional Arrays Parser"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [05. Introduction to Programming](../00-IntroToProgramming-LandingPage.md) / [3. Introduction to Python Programming](01-introduction-to-python.md) / **3.6 NumPy Library - Multi-Dimensional Arrays Parser**

---


# Introduction

<span style="color: #ff3870;font-weight: 500;"> You can find the official NumPy documentation on their website at: <a href="https://numpy.org/doc/stable/" target="_blank">https://numpy.org/doc/stable/  ⤴</a></span>

<a href="https://numpy.org/" target="_blank">NumPy  ⤴</a> is a popular Python library for scientific computing that provides support for:
* large, multi-dimensional arrays and matrices,
* along with a variety of high-level mathematical functions.

It is built around a powerful and efficient data structure called an `ndarray`, which stands for **n-dimensional array**. This data structure allows for fast and efficient computation on large sets of data, and it is optimized for numerical operations.

| 1D `ndarray` | 2D `ndarray` |
|----------|-------------|
|A 1D array is a data structure that holds a sequence of elements of the same data type in a linear fashion. It is similar to a list. |A multi-dimensional ndarray is an array with more than one dimension represented with a shape tuple of the sizes of each dimension (n1, n2, ..., nk).|
|<i># Create a 1-dimensional array of integers from 0 to 9<br></i> <br>`arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])`| <i># Create a 2-dimensional array of floats with shape (3, 4)</i><br><br>`arr2d = np.array([`<br>&emsp;&nbsp;&emsp;&nbsp;`[1.0, 2.0, 3.0, 4.0],`<br>&emsp;&nbsp;&emsp;&nbsp;`[5.0, 6.0, 7.0, 8.0],`<br>&emsp;&nbsp;&emsp;&nbsp;`[9.0, 10.0, 11.0, 12.0]`<br>`])` |
|<i># Printing the 1D array</i><br>`print(arr)`<br><br># Output: [0 1 2 3 4 5 6 7 8 9]|<i># Printing the 2D array</i><br>`print(arr2d)`<br><br># Output: <br>[[ 1.  2.  3.  4.]<br>&ensp;[ 5.  6.  7.  8.]<br>&ensp;[ 9. 10. 11. 12.]]|


Some of the key features of the NumPy library include:

* **ndarrays objects** <br>
<i>NumPy's main feature is its ndarray, a powerful data structure for representing and manipulating large <b>arrays of numerical data</b>.</i>
<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> <b>ndarrays are homogeneous</b>, meaning all elements in the array must be of the same data type, and they support element-wise operations and mathematical functions. </span>
</div>

* **Input-Output (IO) operations** <br>
<i>NumPy includes tools for reading and writing data to and from disk, including support for a wide variety of file formats and data types.</i>

* **Vectorized operations** <br>
<i>NumPy's vectorized operations allow you to perform operations on entire arrays at once, making your code faster and more efficient than using loops or Python's built-in list data type.</i>

* **Broadcasting** *(<a href="https://numpy.org/doc/stable/user/basics.broadcasting.html#broadcasting" target="_blank">learn more from the docs  ⤴</a>)* <br>
<i>NumPy's broadcasting feature allows you to perform operations on arrays with different shapes and sizes.</i>
<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> When you perform an operation on two arrays, NumPy will automatically broadcast the smaller array to match the shape of the larger array. </span>
</div>


* **Mathematical functions** <br>
<i>NumPy provides a wide range of mathematical functions for manipulating ndarrays, including:</i>
  * *basic arithmetic functions,*
  * *trigonometric functions,*
  * *logarithmic functions,*
  * *statistical functions, and*
  * *linear algebra functions.*


* **Random number generation** <br>
<i>NumPy includes a powerful random number generation module that allows you to generate random numbers from a variety of distributions.</i>

* **Interoperability with other libraries** <br>
<i>NumPy is widely used in the scientific Python ecosystem, and it can be easily integrated with other libraries for data analysis, visualization, and machine learning, such as Pandas, Matplotlib, and scikit-learn.</i>



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


# Getting started with NumPy

NumPy is NOT a built-in Python module, meaning it is not included with the standard Python distribution. It is a third-party package that needs to be installed separately to be used in your Python environment.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> However, NumPy is widely used in scientific computing and data analysis in Python, and it is included in many popular scientific Python distributions, such as Anaconda and Enthought Canopy. It can also be installed using package managers like pip or conda (see instructions below).</span>
</div><br>

## Install `numpy` library

To install NumPy, you can use `pip`, which is the standard package installer for Python. You can run the following command in your terminal or command prompt to install NumPy:
```
pip install numpy
```

*This will download and install the latest version of NumPy from the Python Package Index (PyPI).*


An alternative way to install NumPy is using Conda. This way you can install different variants of `numpy` library in separate virtual environments, depending on the requirements of your project. You can create and activate a new conda environment, and then install `numpy` libarary:
```
conda install numpy
```

*This will download and install the latest version of NumPy from the conda repository.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
This command will install NumPy and any necessary dependencies in your current Conda environment. <br><br>
If you don't have Conda installed yet, you can follow the guide provided in the tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine  ⤴</a>. If you are using the Anaconda distribution, conda is already installed by default.
</span>
</div>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Conda provides additional benefits over pip, such as the ability to create and manage multiple environments for different projects with different dependencies, and the ability to install packages from both the Conda and PyPI (Python Package Index) repositories.
</span>
</div>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;"> If you are working in a virtual environment, you can install packages without administrative privileges by activating the virtual environment before running the installation command. </span>
</div><br>


## Import `numpy` library

Once installed, NumPy can be imported into Python scripts and used to perform numerical computations and data manipulation.
```
import numpy as np
```
This will import the NumPy library and give it an alias of `np`, which is a commonly used abbreviation for NumPy.

You can then use the NumPy functions and classes in your code by prefixing them with **np**, such as `np.array()` or `np.linspace()`.


# Numerical data manipulation

NumPy is primarily designed for **numerical computing** and is optimized for operations on arrays of numerical data. While NumPy arrays can technically store any type of data, they are most commonly used to store numerical data, such as `integers`, `floating-point` numbers, and `complex numbers`.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;"> While NumPy is primarily used for numerical data, it can also be used for other types of data, such as images and sound signals, which can be represented as numerical arrays. NumPy is also commonly used in combination with other Python libraries for scientific computing and data analysis, such as Pandas, SciPy, and Matplotlib. </span>
</div><br>

## NumPy objects

There is only one basic class in NumPy, which is the `ndarray` (short for **n-dimensional array**). This is the fundamental data structure in NumPy, and it is used to represent arrays of numerical data in Python. It also provides efficient storage and manipulation of large arrays, as well as fast computation through optimized C code and parallel processing.

```
import numpy as np

arr = np.array([1, 2, 3])
```

The `ndarray` class provides many built-in methods and functions for working with arrays, such as:
* element-wise mathematical operations,
* slicing and indexing,
* reshaping,
* concatenation, and
*stacking.

In addition to the `numpy.ndarray` class, NumPy has several other subclasses of arrays that have additional methods and properties for specific use cases:

<details><summary><b>numpy.matrix()</b></summary>

This is a subclass of ndarray that has additional methods for matrix operations, such as matrix multiplication, matrix inversion, and transposition.
```
import numpy as np

mat = np.matrix([[1, 2], [3, 4]])
```
Output:
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
[[1 2] <br>
&nbsp;[3 4]]
</code>

*In this example, we create a 2D matrix with values 1, 2, 3, and 4.*
</details>

<details><summary><b>numpy.chararray()</b></summary>

This is a subclass of ndarray that is designed for working with strings. It provides additional methods for string operations, such as string concatenation, string splitting, and string comparison.
```
import numpy as np

char_arr = np.chararray((2, 2))
char_arr[:] = 'a'
```
Output:
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
[['a' 'a'] <br>
&nbsp;['a' 'a']]
</code>

*Here we created a 2x2 character array using np.chararray() function. The values are initialized with 'a'.*
</details>

<details><summary><b>numpy.ma.MaskedArray()</b></summary>

This is a subclass of ndarray that allows you to specify a mask to indicate missing or invalid data. It provides additional methods for working with masked arrays, such as filling missing values, calculating statistics, and applying mathematical operations.
```
import numpy as np

arr = np.ma.MaskedArray([1, 2, 3], mask=[False, True, False])
```
Output:
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
[1 -- 3]
</code>

*The numpy.ma.MaskedArray class is a subclass of numpy.ndarray that represents arrays with some masked values, which are treated as missing values. In this example, we create a 1D masked array with values 1, 2, and 3, but mask the value at index 1.*
</details>

<details><summary><b>numpy.recarray()</b></summary>

This is a subclass of ndarray that allows you to specify a named data type for each column of the array. It provides additional methods for working with structured arrays, such as accessing fields by name, sorting by field, and grouping by field.
```
import numpy as np

rec_arr = np.rec.array([(1, 'John'), (2, 'Doe')], dtype=[('id', int), ('name', 'U10')])
```
Output:
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
[(1, 'John') (2, 'Doe')]
</code>

*The numpy.recarray class is a subclass of numpy.ndarray that represents arrays with named fields, where each field has a different data type.  In this case, the record array has two fields: 'id' which is of integer data type and 'name' which is of Unicode string data type with a maximum length of 10 characters ('U10').*

*The data of the record array is passed as a list of tuples, where each tuple represents a record with values for each field in the order they are specified in the dtype parameter. In this case, the list contains two tuples representing two records, each with an 'id' and 'name' field.*
</details>

<details><summary><b>numpy.datetime64()</b></summary>

This is a subclass of ndarray that is designed for working with dates and times. It provides additional methods for working with dates and times, such as converting between time zones, parsing date strings, and formatting dates for display.
```
import numpy as np

dt = np.datetime64('2022-12-25')
```
Output:
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
2022-12-25
</code>

*This code creates a scalar datetime object of the numpy.datetime64 class. The date "2022-12-25" is passed as a string to the np.datetime64() function, which returns a datetime object representing the specified date. The numpy.datetime64 class is used to represent dates and times in NumPy with nanosecond precision.*
</details>


## *NumPy data types*

NumPy supports a wide range of data types, including:

* **Integers** (int8, int16, int32, int64, uint8, uint16, uint32, uint64)
* **Complex numbers** (complex64, complex128, complex256)
* **Booleans** (bool)
* **Characters** (bytes, str)
* **Unicode** (U + number of bytes, e.g. U10 for 10-byte Unicode strings)
* **Structured data** (compound types with named fields)

^ *NumPy also provides options to set the endianness (byte order) of the data.* <br>
*(<a href="https://numpy.org/doc/stable/user/basics.types.html#data-types" target="_blank">learn more from the docs: Data types  ⤴</a>)*


## **Indexing & Slicing arrays**

*(<a href="https://numpy.org/doc/stable/user/basics.indexing.html#indexing-on-ndarrays" target="_blank">learn more from the docs: Indexing on ndarrays  ⤴</a>)*

Indexing in Numpy arrays refers to **accessing specific elements or subsets of an array**. <br>Numpy arrays can be indexed using:
* integers,
* slices, and
* Boolean masks.

## *Integer indexing*

Integer indexing is used to **select specific elements** of an array by specifying their position in the array.

Let's assume we have a simple 1D array:
```
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
```

To **access a single element** in the array, you can use its index in square brackets:
```
print(arr[0])                                   # Output: 1
```

You can also **select multiple elements** by passing in a list or an array of indices. <br>*For example:*
```
print(arr[[0, 2, 4]])                           # Output: 1, 3, 5
```
*selects the 1st, 3rd, and 5th elements of the array arr.*

You can also use negative indices to **count from the end of the array**:
```
print(arr[-1])                                  # Output: 6
```

## *Slicing*

Slicing is used to **select a range of elements** from an array. You can slice an array using the `:` operator.

To access a range of elements, you can use slicing with the **start:stop:step** syntax:
```
print(arr[1:4])                                 # Output: [2 3 4]
```

*Here, the `arr[1:4]` selects elements from position 1 to position 3 (inclusive) of the array arr.*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> You can also use slicing to select every other element, or to reverse the order of the elements. </span>
</div>

## *Boolean indexing*

Boolean indexing is used to **select elements of an array that satisfy a certain condition**. You can create a Boolean mask by applying a condition to an array, and then use this mask to select the elements of the array that meet the condition.

For example, `arr[arr > 2]` selects all the elements of the array arr that are greater than 2.

## *Indexing in multidimensional array*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> Numpy arrays can also be indexed using multi-dimensional indices. For example, arr[0, 2] selects the element at row 0 and column 2 of a 2D array. You can also use slicing and Boolean indexing along each dimension of a multi-dimensional array to select specific subsets of the array. </span>
</div>

Let's assume we have a simple 1D array:
```
import numpy as np

arr = np.array([[1, 2], [3, 4], [5, 6]])
```

To **access a single element** in the multidimensional array, you can use comma-separated indices:
```
print(arr[0, 1])                                # Output: 2
```

You can also use slicing with multiple indices to **access subarrays**:
```
print(arr[:2, 1:])                              # Output: [[2], [4]]
```

## **Create NumPy arrays**

*(<a href="https://numpy.org/doc/stable/user/basics.creation.html#array-creation" target="_blank">learn more from the docs: Array creation  ⤴</a>)*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> In NumPy, <b>numpy.ndarray</b> and <b>numpy.array</b> refer to the same thing.</span>
</div>


`numpy.array` is a function that creates a new instance of `numpy.ndarray` *(underlying class that represents NumPy arrays)*. Using the `numpy.array` is the preferred way to create an ndarray object in NumPy.

| **numpy.array**  *(preferred)* | **numpy.ndarray** |
|-------------------------------|-------------------|
For example, the following code creates a new ndarray object using the `numpy.array` function:|Alternatively, you could also create an ndarray object directly using the `numpy.ndarray` class constructor, like this:|
|`import numpy as np` <br><br>`a = np.array([1, 2, 3])` <br><br>`print(type(a))` | `import numpy as np` <br><br>`a = np.ndarray([1, 2, 3])` <br><br>`print(type(a))` |
| # OUTPUT: <class 'numpy.ndarray'> | # OUTPUT: <class 'numpy.ndarray'>|

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> It is generally recommended to use <b>numpy.array</b> to create new ndarray objects, as it provides additional options and features, such as dtype, copy, order, and subok. </span>
</div><br>

## *Create 1D array*

To create a 1D array, you can use the `np.array` function and **pass a Python list** as an argument:

```
import numpy as np

l = [1, 2, 3, 4, 5]             # python list
a = np.array(l)                 # numpy array

print(a)                        # OUTPUT: [1 2 3 4 5]
```

## *Create 2D array*

To create a 2D array, you can use the `np.array` function and **pass a nested list** as an argument. The resulting array will have the same number of dimensions as the nested list, with each **inner list converted to a row** of the array.

```
import numpy as np

l = [[1, 2], [3, 4], [5, 6]]    # nested list composed of 3 inner lists
a = np.array(l)                 # numpy 2D array of 3 rows and 2 columns

print(a)                        # OUTPUT: array([[1, 2], [3, 4], [5, 6]])
```

*The resulting array have the same number of dimensions as the nested list (in this case, 2 dimensions), with each inner list converted to a row of the array*

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;"> Note that the shape of the resulting array will be <b>(n, m)</b>, where
<li>n is the number of inner lists in the nested list, and </li>
<li>m is the length of each inner list. </li>
In this example, n = 3 and m = 2, so the shape of the resulting array is (3, 2), i.e. 3 rows and 2 columns. </span>
</div><br>

## *Create multi dimensional array*

To create an n-dimensional array in NumPy, you can simply **pass a nested list of n dimensions** to the `numpy.array()` function. The shape of the resulting array will be determined by the number of elements in each dimension of the nested list.

Here is an example of a **3-dimensional** NumPy array with shape (2, 2, 3):
```
import numpy as np

arr = np.array([
                [[1, 2, 3], [4, 5, 6]],         # layer 1: 2 rows of 3 elements each
                [[7, 8, 9], [10, 11, 12]]       # layer 2: 2 rows of 3 elements each
              ])
```
*This creates a 3-dimensional array with shape (2, 2, 3), where the first dimension has length 2, the second dimension has length 2, and the third dimension has length 3. The array contains two "layers", each of which contains two "rows" of three elements each.*

Here is an example of a **4-dimensional** NumPy array with shape (2, 3, 4, 5):
```
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

## **Create NumPy matrices**

A matrix is a special case of a multidimensional **array with two dimensions**. You can create a matrix using the `np.matrix` function, which takes a nested list or 2D array as an argument:

```
import numpy as np
l = [[1, 2], [3, 4]]            # nested list composed of 2 inner lists
a = np.matrix(l)                # numpy 2D array of 2 rows and 2 columns

print(a)                        # OUTPUT: array([[1, 2], [3, 4]])
```

You can also create a matrix using the `np.array` function and passing a nested list or 2D array as an argument:
```
import numpy as np
l = [[1, 2], [3, 4]]                    # nested list composed of 2 inner lists
a = np.array(l, dtype=np.matrix)        # numpy 2D array of 2 rows and 2 columns

print(a)                                # OUTPUT: array([[1, 2], [3, 4]])
```
*Note that the dtype argument is used to specify the data type of the array, which in this case is np.matrix.*

## *2D array vs. matrix*

In NumPy, a **2D array** is a general term that refers to an array with two dimensions. It can be created using the `np.array` function. A NumPy **matrix** is a subclass of a 2D array that has specific properties and behaviors. It is created using the `np.matrix` function. One key difference between a matrix and a 2D array is the way that they handle matrix multiplication.

| **2D array** | **matrix** |
|--------------|-------------------|
Consider the following two 2D arrays:|Let's create the same arrays as matrices:|
|`import numpy as np` <br><br>`a = np.array([[1, 2], [3, 4]])` <br>`b = np.array([[5, 6], [7, 8]])` | `import numpy as np` <br><br>`a_mat = np.matrix([[1, 2], [3, 4]])` <br>`b_mat = np.matrix([[5, 6], [7, 8]])` |
| To perform matrix multiplication on these arrays, you can use the `np.dot` function: | To perform matrix multiplication on these matrices, you can use the `*` operator:|
|`c = np.dot(a, b)` <br><br>`print(c)`|`c_mat = a_mat * b_mat` <br><br>`print(c_mat)`|
| # OUTPUT: [ [19 22], [43 50] ] | # OUTPUT: [ [19 22], [43 50] ] |

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> Note that with matrices, you can use the <b>*</b> operator to perform matrix multiplication instead of the <b>np.dot</b> function. This can make the code more concise and easier to read. </span>
</div><br>

<span style="color: #ff3870;font-weight: 500;"> In addition, matrices have some additional methods that are not available for 2D arrays. </span> *(see section below)*

## *Functions for Matrix operations*

NumPy provides a range of functions for performing matrix operations, such as matrix multiplication, inversion, and determinant calculation. These methods are all specific to NumPy matrices, rather than NumPy ndarrays in general.
These functions are available in the `np.linalg` module.

Let's assume we have a matrix:
```
import numpy as np

arr = np.array([[1, 2], [3, 4]])        # 2D array
mat = np.matrix(arr)                    # matrix
```


| method | usage  | output           | description |
|--------|--------|------------------|-------------|
| A      | mat.A  | [[1 2] [3 4]]    | Returns the base array of the matrix. <br>*This simply returns the original ndarray that was used to create the matrix.* |
| A1     | mat.A1 | [1 2 3 4]        | Returns the flattened base array of the matrix. <br>*This is the same as A, except that the resulting array is flattened (i.e., converted to a 1D array).* |
| H      | mat.H  | [[1 3] [2 4]]    | Returns the conjugate transpose of the matrix. <br>*This is equivalent to taking the transpose of the matrix and then taking the complex conjugate of each element.* |
| I      | mat.I  | [[-2. 1.] [ 1.5 -0.5]] | Returns the inverse of the matrix. <br>*Note that the matrix must be square in order to have an inverse.* |
| T      | mat.T  | [[1 3] [2 4]]    | Returns the transpose of the matrix. <br>*This is equivalent to "flipping" the matrix along its diagonal.* |
| conj   | mat.conj | [[1.-0.j 2.-0.j] [3.-0.j 4.-0.j]]| Returns the complex conjugate of the matrix. <br>*This is equivalent to taking the complex conjugate of each element of the matrix.* |
| getA   | mat.getA | *see A* | Returns the base array of the matrix. |
| getA1  | mat.getA1 | *see A1* | Returns the flattened base array of the matrix. |
| getH   | mat.getH  | *see H* | Returns the conjugate transpose of the matrix. |
| getI   | mat.getI  | *see I* | Returns the inverse of the matrix. |
| getT   | mat.getT  | *see T* | Returns the transpose of the matrix. |
| getconj | mat.getconj | *see conj* | Returns the complex conjugate of the matrix. |

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> Note that these methods are NOT available for NumPy arrays. However, some of them can be emulated using NumPy array methods. For example, the transpose of an array can be calculated using the <b>np.transpose</b> function, and the inverse of a matrix can be calculated using the <b>np.linalg.inv</b> function. </span>
</div><br>


# Functions for Array operations

<span style="color: #ff3870;font-weight: 500;"> You can find the official NumPy documentation on their website at: <a href="https://numpy.org/doc/stable/" target="_blank">https://numpy.org/doc/stable/  ⤴</a></span>

NumPy provides a wide range of built-in functions to perform various operations on NumPy arrays. Some of the commonly used functions for NumPy array operations are:

| method               | description |
|----------------------|-------------|
| [np.zeros()]()       | Returns an array of zeros with the specified shape and data type. |
| [np.ones()]()        | Returns an array of ones with the specified shape and data type. |
| [np.arange()]()      | Returns an array with evenly spaced values within a given interval. |
| [np.linspace()]()    | Returns an array of evenly spaced numbers over a specified interval. |
| [np.reshape()]()     | Reshapes an array to the specified shape. |
| [np.transpose()]()   | Transposes an array (rows become columns and columns become rows). |
| [np.concatenate()]() | Joins two or more arrays along a specified axis. |
| [np.split()]()       | Splits an array into multiple sub-arrays along a specified axis. |
| [np.sort()]()        | Sorts the elements of an array in ascending or descending order. |
| [np.max()]()         | Returns the maximum value of an array. |
| [np.min()]()         | Returns the minimum value of an array. |
| [np.mean()]()        | Returns the mean of an array. |
| [np.std()]()         | Returns the standard deviation of an array. |
| [np.sum()]()         | Returns the sum of the elements in an array. |
| [np.dot()]()         | Computes the dot product of two arrays. |


## np.zeros()

This function returns an array of zeros with the specified shape and data type. <br>
*This function also applies to NumPy matrices.*

```
import numpy as np

# Create a 2D array of zeros with 3 rows and 4 columns
arr = np.zeros((3, 4))
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr) <br><br>
# Output: <br>
# [[0. 0. 0. 0.] <br>
# &nbsp;[0. 0. 0. 0.] <br>
# &nbsp;[0. 0. 0. 0.]]
</code>

## np.ones()

This function returns an array of ones with the specified shape and data type. <br>
*This function also applies to NumPy matrices.*

```
import numpy as np

# Create a 1D array of ones with 5 elements
arr = np.ones(5)
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr) <br><br>
# Output: <br>
# [1. 1. 1. 1. 1.]
</code>

## np.arange()

This function returns an array with evenly spaced values within a given interval. <br>
*This function also applies to NumPy matrices.*

```
import numpy as np

# Create an array of integers from 0 to 9
arr = np.arange(10)
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr) <br><br>
# Output: <br>
# [0 1 2 3 4 5 6 7 8 9]
</code>

## np.linspace()

This function returns an array of evenly spaced numbers over a specified interval. <br>
*This function also applies to NumPy matrices.*

```
import numpy as np

# Create an array of 5 numbers from 0 to 1 (inclusive)
arr = np.linspace(0, 1, 5)
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr) <br><br>
# Output: <br>
# [0.   0.25 0.5  0.75 1.  ]
</code>

## np.reshape()

This function reshapes an array to the specified shape. <br>
*This function also applies to NumPy matrices.*

```
import numpy as np

# Create a 1D array of integers from 0 to 9
arr = np.arange(10)                             # output: [0 1 2 3 4 5 6 7 8 9]

# Reshape the array into a 2D array with 2 rows and 5 columns
arr_reshaped = np.reshape(arr, (2, 5))
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr_reshaped) <br><br>
# Output: <br>
# [[0 1 2 3 4] <br>
# &nbsp;[5 6 7 8 9]]
</code>

## np.transpose()

This function transposes an array (rows become columns and columns become rows).

```
import numpy as np

# Create a 2D array with 2 rows and 3 columns
arr = np.array([[1, 2, 3], [4, 5, 6]])

# Transpose the array (rows become columns and columns become rows)
arr_transposed = np.transpose(arr)
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(arr_transposed) <br><br>
# Output: <br>
# [[1 4] <br>
# &nbsp;[2 5] <br>
# &nbsp;[3 6]]
</code>

## np.concatenate()

This function joins two or more arrays along a specified axis.

```
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
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(result_h) <br><br>
# Output: <br>
# [1 2 3 4 5 6] <br><br>
------ <br>
print(result_v) <br><br>
# Output: <br>
# [[1 2 3] <br>
# &nbsp;[4 5 6]] <br><br>
------ <br>
print(result_a) <br><br>
# Output: <br>
# [1 2 3 4 5 6]
</code><br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;"> Note that the <b>np.hstack()</b> function can also be used to concatenate arrays horizontally, and the <b>np.dstack()</b> function can be used to concatenate arrays along a third dimension. </span>
</div><br>

## np.split()

This function splits an array into multiple sub-arrays along a given axis.

```
import numpy as np

arr = np.arange(16).reshape((4,4))
sub_arrays = np.split(arr, 2, axis=0)
```
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(sub_arrays) <br><br>
# Output: <br>
# [array([[0, 1, 2, 3], [4, 5, 6, 7]]),  <br>
# &nbsp;array([[ 8,  9, 10, 11], [12, 13, 14, 15]])]
</code>

## np.sort()

This function returns a sorted copy of an array.

```
import numpy as np

arr = np.array([3, 2, 1, 4])

print(np.sort(arr))                             # Output: [1 2 3 4]
```

## np.max()

This function returns the maximum value of an array along a given axis.

```
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.max(arr))                              # Output: 6
print(np.max(arr, axis=0))                      # Output: [4 5 6]
```

## np.min()

This function returns the minimum value of an array along a given axis.

```
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print(np.min(arr))                              # Output: 1
print(np.min(arr, axis=0))                      # Output: [1 2 3]
```

## np.mean()

This function returns the mean value of an array along a given axis.

```
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.mean(arr))                             # Output: 3.5
print(np.mean(arr, axis=0))                     # Output: [2.5 3.5 4.5]
```

## np.std()

This function returns the standard deviation of an array along a given axis.

```
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.std(arr))                              # Output: 1.707825127659933
print(np.std(arr, axis=0))                      # Output: [1.5 1.5 1.5]
```

## np.sum()

This function returns the sum of all elements in an array along a given axis.

```
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.sum(arr))                              # Output: 21
print(np.sum(arr, axis=0))                      # Output: [5 7 9]
```

## np.dot()

This function returns the dot product of two arrays.

```
import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])

print(np.dot(a, b))                             # Output: [[19 22], [43 50]]
```

___
# Further Reading
* [3.7 SciPy Library - Algorithms for Scientific Computing](08-tutorial-python-apply-statistics-scipy.md)

* [4. Introduction to R programming](../04-R/01-introduction-to-R)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](06-tutorial-python-data-manipulation-pandas){: .btn  .btn--primary}
[Next](08-tutorial-python-apply-statistics-scipy){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
