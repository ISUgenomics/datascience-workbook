---
title: "SciPy library - algorithms for scientific computing"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 538
level: 2
categories: ["programming", "data-types", "data-manipulation", "library-package-module"]
tags: ["python", "import", "scipy", "module", "function", "scientific-computing", "dataset", "constant", "statistics", "generate-random-sample", "T-test", "ANOVA-test", "Pearson-correlation", "linear-regression", "clustering", "hierarchical-clustering", "k-means-clustering", "centroid", "workdir"]
attributes: ["installation", "user-guide", "example", "code-snippet", "ready-made-solution", "automation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="more" markdown="1">
You can find the official SciPy documentation on their website at: <a href="https://docs.scipy.org/doc/scipy/tutorial/index.html" target="_blank">https://docs.scipy.org/doc/scipy/tutorial/index.html  ⤴</a>
</div>

<a href="https://www.scipy.org/" target="_blank">SciPy  ⤴</a> is a Python library for scientific and technical computing that provides a **collection of algorithms and functions** for tasks such as optimization, signal processing, linear algebra, and more. It is built on top of <a href="https://numpy.org/" target="_blank">NumPy  ⤴</a>, another popular Python library for numerical computing, and is a **fundamental tool for data analysis and scientific computing**.

The library is **open-source and free to use**, with a large community of contributors who are continuously adding new features and improving existing ones. Additionally, SciPy works well with other popular scientific computing libraries, such as Matplotlib and Pandas, making it a valuable tool for data scientists and researchers in various fields.


# Getting started with SciPy

SciPy is NOT a built-in Python module, meaning it is not included with the standard Python distribution. It is an external library that can be installed and imported into a Python environment.

## Install `scipy` library

To install SciPy, you can use `pip`, which is the standard package installer for Python. You can run the following command in your terminal or command prompt to install SciPy:
```bash
pip install scipy
```

*This will download and install the latest version of SciPy from the Python Package Index (PyPI).*


An alternative way to install SciPy is using Conda. This way you can install different variants of `scipy` library in separate virtual environments, depending on the requirements of your project. You can create and activate a new conda environment, and then install `scipy` libarary:
```bash
conda install scipy
```

*This will download and install the latest version of SciPy from the conda repository.*

<div class="warning" markdown="1">
This command will install `scipy` and any necessary dependencies in your current **Conda environment**. <base class="mb">
<button class="btn required mr"></button> If you don't have `conda` installed yet, you can follow the guide provided in the tutorial <a class="t-links" href="423"></a>. If you are using the Anaconda distribution, `conda` is already installed by default.
</div>

<div class="protip" markdown="1">
`conda` provides additional benefits over `pip`, such as the ability to create and manage multiple environments for different projects with different dependencies, and the ability to install packages from both the Conda and PyPI (Python Package Index) repositories.
</div>

<div class="note" markdown="1">
If you are working in a **virtual environment**, you can install packages without administrative privileges by activating the virtual environment before running the installation command.
</div>


## Import `scipy` library

Once installed, SciPy can be imported into Python scripts and used to perform numerical computations and data manipulation.
```python
import scipy as sp
```
This will import the SciPy library and give it an alias of `sp`, which is a commonly used abbreviation for SciPy.

You can then use the SciPy functions and classes in your code by prefixing them with **sp**, such as `sp.array()` or `sp.stats.norm`.


### Import methods from submodules

To import selected methods from SciPy submodules, you can use the `from ... import ...` syntax.

For example, to import the `linalg.solve` method from the `scipy.linalg` submodule, you can use the following code:
```python
from scipy.linalg import solve
```
After importing the method in this way, you can use it directly in your code without the need to prefix it with the submodule name, as shown below:
```python
import numpy as np
from scipy.linalg import solve

A = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])

x = solve(A, b)                                 # use imported method directly

print(x)
```
*In this example, we import the solve method from* `scipy.linalg` *and then use it to solve a system of linear equations.*
<pre class="output">
<b class="prompt-1"></b>print(x)
[-4.   4.5]
</pre>


# Submodules in SciPy

The SciPy library contains several submodules that cater to specific scientific domains. Each submodule offers a range of specialized functionalities that can help you solve a wide variety of scientific and technical computing problems.

| submodule | description | documentation |
|-----------|-------------|---------------|
| scipy.**io** | Contains functions for **reading and writing data** in various file formats, such as MATLAB, NetCDF, and WAV. | <a href="https://docs.scipy.org/doc/scipy/reference/io.html#module-scipy.io" target="_blank">docs  ⤴</a> |
| scipy.**datasets** | Provides a **selection of datasets** for use in scientific and statistical analysis, such as iris and MNIST. | <a href="https://docs.scipy.org/doc/scipy/reference/datasets.html#module-scipy.datasets" target="_blank">docs  ⤴</a> |
| scipy.**constants** | Contains **physical and mathematical constants**, such as the speed of light and the golden ratio. | <a href="https://docs.scipy.org/doc/scipy/reference/constants.html#module-scipy.constants" target="_blank">docs  ⤴</a> |
| scipy.**stats**    | Contains a range of **statistical functions**, including probability distributions, descriptive statistics, hypothesis testing, and regression analysis. | <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#module-scipy.stats" target="_blank">docs  ⤴</a> |
| scipy.**cluster**  | Offers algorithms for **clustering data**, including k-means, hierarchical clustering, and spectral clustering. | <a href="https://docs.scipy.org/doc/scipy/reference/cluster.html#module-scipy.cluster" target="_blank">docs  ⤴</a> |
| scipy.**optimize** | Contains various **optimization algorithms** for minimizing or maximizing functions, including nonlinear least squares, least-squares minimization, and root finding. | <a href="https://docs.scipy.org/doc/scipy/reference/optimize.html#module-scipy.optimize" target="_blank">docs  ⤴</a> |
| scipy.**interpolate** | Provides functions for **interpolating 1D and higher-dimensional data**, including splines, radial basis functions, and smoothing. | <a href="https://docs.scipy.org/doc/scipy/reference/interpolate.html#module-scipy.interpolate" target="_blank">docs  ⤴</a> |
| scipy.**integrate** | Provides functions for **numerical integration**, including single and multi-dimensional integration, as well as ODE solvers. | <a href="https://docs.scipy.org/doc/scipy/reference/integrate.html#module-scipy.integrate" target="_blank">docs  ⤴</a> |
| scipy.**linalg**  | Contains **linear algebra functions**, including matrix operations, eigenvalue problems, and decompositions. | <a href="https://docs.scipy.org/doc/scipy/reference/linalg.html#module-scipy.linalg" target="_blank">docs  ⤴</a> |
| scipy.**fftpack** | Provides functions for computing **fast Fourier transforms** (FFT) and related operations. | <a href="https://docs.scipy.org/doc/scipy/reference/fftpack.html#module-scipy.fftpack" target="_blank">docs  ⤴</a> |
| scipy.**odr**     | Offers orthogonal distance regression (ODR) for fitting models to data with errors in both the x and y dimensions. | <a href="https://docs.scipy.org/doc/scipy/reference/odr.html#module-scipy.odr" target="_blank">docs  ⤴</a> |
| scipy.**sparse**  | Provides tools for **working with sparse matrices**, including operations such as matrix multiplication, linear solvers, and eigenvalue problems. | <a href="https://docs.scipy.org/doc/scipy/reference/sparse.html#module-scipy.sparse" target="_blank">docs  ⤴</a> |
| scipy.**spatial** |  Provides functions for **working with spatial data**, including distance calculations, nearest-neighbor searches, and Voronoi diagrams. | <a href="https://docs.scipy.org/doc/scipy/reference/spatial.html#module-scipy.spatial" target="_blank">docs  ⤴</a> |
| scipy.**signal**  | Offers a range of **signal processing functions**, including filtering, Fourier analysis, wavelets, and convolution. | <a href="https://docs.scipy.org/doc/scipy/reference/signal.html#module-scipy.signal" target="_blank">docs  ⤴</a> |
| scipy.**ndimage** | Provides functions for **n-dimensional image processing** and filtering, such as smoothing, edge detection, and morphology. | <a href="https://docs.scipy.org/doc/scipy/reference/ndimage.html#module-scipy.ndimage" target="_blank">docs  ⤴</a> |
| scipy.**special** | Contains **special functions**, such as Bessel functions, gamma functions, and error functions. | <a href="https://docs.scipy.org/doc/scipy/reference/special.html#module-scipy.special" target="_blank">docs  ⤴</a> |
| scipy.**misc** | Offers various **utility functions for scientific computing**, such as image manipulation and numerical approximations. | <a href="https://docs.scipy.org/doc/scipy/" target="_blank">docs  ⤴</a> |


## **`scipy.io`**

The `scipy.io` module provides functions for reading and writing data in various file formats. Some of the most common functions in this module are:
* `loadmat()` - oad data from MATLAB .mat files
* `savemat()` - save data to a MATLAB .mat file

Other I/O functions refer to IDL files, Matrix Market files, Unformatted Fortran files, Netcdf, Harwell-Boeing files, Wav sound files, and Arff files. Learn more from the official <a href="https://docs.scipy.org/doc/scipy/reference/io.html#module-scipy.io" target="_blank">documentation: scipy.io  ⤴</a>.

<base class="mt">
<button class="btn example"></button>
<table>
  <tr> <th width="50%" class="center-h">savemat()</th> <th class="center-h">loadmat()</th> </tr>
  <tr> <td><p markdown="1">`savemat()` <br>function used to save data to a MATLAB `.mat` file</p></td> <td><p markdown="1">`loadmat()` <br>function used to load data from MATLAB `.mat` files</p></td> </tr>
  <tr> <td><i>It takes a dictionary of variables and their values as input.</i></td> <td><i>It returns a dictionary containing the variables and their values.</i></td> </tr>
</table>

```python
import scipy.io as sio
import numpy as np

data = {'x': np.array([1, 2, 3]), 'y': np.array([4, 5, 6])}     # create data sample

sio.savemat('data.mat', data)                                   # save data to .mat file

data = sio.loadmat('data.mat')                                  # load data from .mat file

print(data.keys())                                              # output: ['x', 'y']
print(data['x'])                                                # output: [][1 2 3]]
```
*In this example, we create a dictionary data that contains two arrays, x and y. We then use the* `savemat()` *function to save the data to a MATLAB* `.mat` *file called* `data.mat`. *Then, we use the* `loadmat` *function to load data from a MATLAB .mat file called* `data.mat`. *We print the keys of the dictionary that is returned by the function to see the variables that were loaded, and then we print the value of the* `x` *variable.*


## **`scipy.datasets`**

The `scipy.datasets` module provides a set of 3 datasets that can be used for testing, benchmarking, and other purposes:
* `ascent()` - grayscale image
* `face()` - color image
* `electrocardiogram()` - medical recordings of the heart’s electrical activity

The module provides a set of built-in functions to load these datasets by their names.
```python
import scipy

data = scipy.datasets.ascent()
```
<pre class="output">
<b class="prompt-1"></b>print(data)
[[ 83  83  83 ... 117 117 117]
 [ 82  82  83 ... 117 117 117]
 [ 80  81  83 ... 117 117 117]
 ...
 [178 178 178 ...  57  59  57]
 [178 178 178 ...  56  57  57]
 [178 178 178 ...  57  57  58]]
</pre>

<base class="mt">
If you want to download all datasets included in Scipy, you can use the `download_all()` function. This function will download all three datasets and save them to a selected location as `.dat` files.
```python
from scipy.datasets import download_all

download_all('.', subok=True)
```
*In this code,* `download_all()` *will download the three datasets to the current working directory, represented by* `'.'`. *The* `subok=True` *parameter ensures that any subdirectories needed to save the files will be created if they don't already exist.*

<button class="btn more"></button> *...from the official documentation: <a href="https://docs.scipy.org/doc/scipy/reference/datasets.html" target="_blank">scipy.datasets  ⤴</a>.*


## **`scipy.constants`**

The `scipy.constants` module provides a collection of physical and mathematical constants. These constants are often used in scientific calculations and simulations. The full list of available constants can be explored in the official <a href="https://docs.scipy.org/doc/scipy/reference/constants.html" target="_blank">documentation: scipy.constants  ⤴</a>

Here are some of the most commonly used methods in this module along with their usage examples:

* scipy.constants.**value(constant_name)**

Returns the numerical value of a given physical constant.
```python
from scipy import constants

constants.value('Planck constant')
```
<pre class="output">
6.62607015e-3
</pre>


Some common constants, such as R *(molar gas constant)*, C *(speed of light in vacuum)*, g *(standard acceleration due to gravity)*, or atomic mass, can be called directly by their symbol or name:
```python
from scipy import constants

constants.c                                      # output: 299792458.0
constants.g                                      # output: 9.80665
constants.R                                      # output: 8.31446261815324
constants.atomic_mass                            # output: 1.6605390666e-27
```

<base class="mt">
* scipy.constants.**find(substring)**

Returns a list of constants whose names contain the given substring.
```python
from scipy import constants

constants.find('Planck')
```
<pre class="output">
['Planck constant', 'Planck constant in eV/Hz', 'Planck length', 'Planck mass',
 'Planck mass energy equivalent in GeV', 'Planck temperature', 'Planck time',
 'molar Planck constant', 'reduced Planck constant', 'reduced Planck constant in eV s',
 'reduced Planck constant times c in MeV fm']
</pre>

<base class="mt">
scipy.constants.**physical_constants[constant_name]** <br>
Returns a tuple containing the value, unit, and uncertainty of a given physical constant.
```python
from scipy import constants

constants.physical_constants['proton mass']      # output: (1.67262192369e-27, 'kg', 5.1e-37)
```
<pre class="output">
(1.67262192369e-27, 'kg', 5.1e-37)
</pre>

<base class="mt">
* scipy.constants.**unit(constant_name)**

Returns the unit of a given physical constant.
```python
from scipy import constants

constants.unit['proton mass']                    # output: 'kg'
```

<base class="mt">
* scipy.constants.**convert_temperature(temp, from_unit, to_unit)**

Returns the unit of a given physical constant.
```python
from scipy import constants

constants.convert_temperature(100, 'Celsius', 'Kelvin')        # output: 373.15
```


## **`scipy.stats`**

The `scipy.stats` module provides a wide range of **distributions**, including:
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#probability-distributions" target="_blank">Probability distributions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#continuous-distributions" target="_blank">Continuous distributions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#multivariate-distributions" target="_blank">Multivariate distributions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#discrete-distributions" target="_blank">Discrete distributions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#distribution-fitting" target="_blank">Distribution Fitting  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#random-variate-generation-cdf-inversion" target="_blank">Random variate generation / CDF Inversion  ⤴</a>

and **statistical functions**:
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#summary-statistics" target="_blank">Summary statistics  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#frequency-statistics" target="_blank">Frequency statistics  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#statistical-tests" target="_blank">Statistical tests  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#correlation-functions" target="_blank">Correlation functions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#directional-statistical-functions" target="_blank">Directional statistical functions  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#statistical-distances" target="_blank">Statistical distances  ⤴</a>
* <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#masked-statistics-functions/" target="_blank">Masked statistics functions  ⤴</a>


and other statistical functionality such as <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#transformations" target="_blank">Transformations  ⤴</a>, <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#sampling" target="_blank">Sampling  ⤴</a>, <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#resampling-methods" target="_blank">Resampling Methods  ⤴</a>, <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#quasi-monte-carlo" target="_blank">Quasi-Monte Carlo  ⤴</a> and <a href="https://docs.scipy.org/doc/scipy/reference/stats.html#warnings-errors-used-in-scipy-stats" target="_blank">stats-specific Warnings / Errors  ⤴</a>.

---

***Here are a few common methods with usage examples:***

### *generate random samples*

**A. Returns a normal continuous random variable:** <br>
`scipy.stats.norm` <br>
Here's an example of generating 10 random samples from a normal distribution with a mean of 0 and a standard deviation of 1:
```python
from scipy.stats import norm

data = norm.rvs(size=10)
```
<pre class="output">
<b class="prompt-1"></b>data
array([-0.78903894, -1.55293905, -0.64965826, -1.05128015,  2.55342981,
       -0.2064151 , -0.60322765, -0.861767  , -0.75899174, -1.28693063])

<b class="prompt-1"></b>print(data)
[-0.78903894 -1.55293905 -0.64965826 -1.05128015  2.55342981 -0.2064151
 -0.60322765 -0.861767   -0.75899174 -1.28693063]
</pre>

<base class="mt">
**B. Returns a binomial discrete random variable:** <br>
`scipy.stats.binom` <br>
Here's an example of generating 10 random samples from a binomial distribution with 10 trials and a success probability of 0.5:
```python
from scipy.stats import binom

data = binom.rvs(n=10, p=0.5, size=10)
```
<pre class="output">
<b class="prompt-1"></b>print(data)
[2 4 4 5 5 7 6 6 3 5]
</pre>

<base class="mt">
**C. Returns a chi-squared continuous random variable:** <br>
`scipy.stats.chi2` <br>
Here's an example of generating 10 random samples from a chi-squared distribution with 2 degrees of freedom:
```python
from scipy.stats import chi2

data = chi2.rvs(df=2, size=10)
```
<pre class="output">
<b class="prompt-1"></b>print(data)
[1.04467704 1.1461272  0.36506538 0.81107591 3.26317094 4.84727761
 4.52965288 0.93817042 8.51668502 3.2564631 ]
</pre>

<base class="mt">
**D. Returns a gamma continuous random variable:** <br>
`scipy.stats.gamma` <br>
Here's an example of generating 10 random samples from a gamma distribution with a shape parameter of 2 and a scale parameter of 2:
```python
from scipy.stats import gamma

data = gamma.rvs(a=2, scale=2, size=10)
```
<pre class="output">
<b class="prompt-1"></b>print(data)
[ 0.80623887  3.61599447  4.67765372  3.27401918  4.62340971  4.33309687
  1.51408293  1.31255128  3.13450136 10.43018603]
</pre>


### *calculate T-test of one sample*

`scipy.stats.ttest_1samp` <br>
Calculates the T-test for the mean of one sample. <br>Here's an example of performing a one-sample T-test on a set of data:
```python
from scipy.stats import ttest_1samp

data = [1, 2, 3, 4, 5]

ttest_1samp(data, 3)
```
<pre class="output">
TtestResult(statistic=0.0, pvalue=1.0, df=4
</pre>


### *calculate ANOVA test for multiple samples*

`scipy.stats.f_oneway` <br>
Performs a one-way ANOVA test for multiple samples. <br>Here's an example of performing an ANOVA test on three sets of data:
```python
from scipy.stats import f_oneway

data1 = [1, 2, 3, 4, 5]
data2 = [2, 4, 6, 8, 10]
data3 = [3, 6, 9, 12, 15]

f_oneway(data1, data2, data3)
```
<pre class="output">
F_onewayResult(statistic=3.857142857142857, pvalue=0.05086290933139865)
</pre>


### *calculate a Pearson correlation coefficient*

`scipy.stats.pearsonr` <br>
Calculates a Pearson correlation coefficient and the associated p-value. <br>Here's an example of calculating the correlation coefficient between two sets of data:
```python
from scipy.stats import pearsonr

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

pearsonr(x, y)
```
<pre class="output">
PearsonRResult(statistic=1.0, pvalue=0.0)
</pre>


### *calculate a linear least-squares regression*

`scipy.stats.linregress` <br>
Calculates a linear least-squares regression for two sets of measurements. <br>Here's an example of performing a linear regression on two sets of data:
```python
from scipy.stats import linregress

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

linregress(x, y)                        # output: LinregressResult(slope=2.0, intercept=0.0, rvalue=1.0, pvalue=1.2004217548761408e-30, stderr=0.0, intercept_stderr=0.0)
```
<pre class="output">
LinregressResult(slope=2.0, intercept=0.0, rvalue=1.0, pvalue=1.2004217548761408e-30, stderr=0.0, intercept_stderr=0.0)
</pre>


## **`scipy.cluster`**

The `scipy.cluster` module of Scipy provides algorithms for clustering, which involves grouping data points into clusters based on their similarities. The full list of available clustering methods can be explored in the official <a href="https://docs.scipy.org/doc/scipy/reference/cluster.html" target="_blank">documentation: scipy.cluster  ⤴</a>

Here are some of the most common methods in this module along with usage examples:

### *hierarchical clustering with linkage matrix*

`scipy.cluster.hierarchy.linkage` <br>
Computes the hierarchical clustering of a dataset and returns a linkage matrix.
```python
import numpy as np
from scipy.cluster.hierarchy import linkage

data = np.random.rand(5, 3)

linkage_matrix = linkage(data, method='single')
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>see the expected output</i></b></summary>

<pre class="output">
<b class="prompt-1"></b>print(data)
[[0.97309739 0.14092786 0.73237976]
 [0.53102418 0.85463043 0.28841557]
 [0.25546178 0.51738497 0.28659921]
 [0.7780539  0.35929428 0.53852367]
 [0.60161033 0.82559442 0.34248004]]

<b class="prompt-1"></b>print( linkage_matrix)
[[1.         4.         0.09353321 2.        ]
 [0.         3.         0.3511496  2.        ]
 [2.         5.         0.43551399 3.        ]
 [6.         7.         0.53572498 5.        ]]
</pre>
</details>

<base class="mt">
**Check if a linkage matrix is valid**

`scipy.cluster.hierarchy.is_valid_linkage` <br>
Here's an example of using this method:
```python
from scipy.cluster.hierarchy import is_valid_linkage

print(is_valid_linkage(linkage_matrix))                         # output: True
```

<base class="mt">
**Get leaf nodes of a hierarchical clustering**

`scipy.cluster.hierarchy.leaves_list` <br>
Returns the leaf nodes of a hierarchical clustering.
```python
from scipy.cluster.hierarchy import leaves_list

leaves = leaves_list(linkage_matrix)
```
<pre class="output">
<b class="prompt-1"></b>print(leaves)
[0 3 2 1 4]
</pre>


### *hierarchical clustering as a dendrogram*

`scipy.cluster.hierarchy.dendrogram` <br>
Plots the hierarchical clustering as a dendrogram.
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import linkage, dendrogram

data = np.random.rand(5, 3)

linkage_matrix = linkage(data, method='single')
dendrogram(linkage_matrix)

plt.show()
```
<pre class="output">
<b class="prompt-1"></b>dendrogram(linkage_matrix)
{'icoord': [[5.0, 5.0, 15.0, 15.0], [35.0, 35.0, 45.0, 45.0], [25.0, 25.0, 40.0, 40.0], [10.0, 10.0, 32.5, 32.5]],
 'dcoord': [[0.0, 0.4609265621656883, 0.4609265621656883, 0.0], [0.0, 0.28518916147512924, 0.28518916147512924, 0.0], [0.0, 0.491984094759486, 0.491984094759486, 0.28518916147512924], [0.4609265621656883, 0.5412089099877605, 0.5412089099877605, 0.491984094759486]],
 'ivl': ['1', '2', '3', '0', '4'],
 'leaves': [1, 2, 3, 0, 4],
 'color_list': ['C0', 'C1', 'C0', 'C0'],
 'leaves_color_list': ['C0', 'C0', 'C0', 'C1', 'C1']
}

<b class="prompt-1"></b>plt.show()
</pre>

![scipy_clustering_dendrogram]({{ images_path }}/scipy_clustering_dendrogram.png)


### *k-means clustering with centroids*

`scipy.cluster.vq.kmeans` <br>
Performs k-means clustering on a dataset and returns the cluster centroids.
```python
import numpy as np
from scipy.cluster.vq import kmeans

data = np.random.rand(5, 3)

centroids, _ = kmeans(data, 2)
```
<pre class="output">
<b class="prompt-1"></b>print(centroids)
[[0.24676794 0.82368652 0.88983179]
 [0.6756976  0.53838277 0.16609091]]
</pre>

<base class="mt">
**Assigns point to the nearest cluster centroid**

`scipy.cluster.vq.vq` <br>
Assigns each data point to the nearest cluster centroid using vector quantization.
```python
from scipy.cluster.vq import vq

labels, _ = vq(data, centroids)
```
<pre class="output">
<b class="prompt-1"></b>print(labels)
[0 0 1 0 1]
</pre>
