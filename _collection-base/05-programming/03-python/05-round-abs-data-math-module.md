---
title: "Math module - various mathematical functions"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 535
level: 2
categories: ["programming", "data-types", "data-manipulation", "analysis", "HPC, computing", "library-package-module"]
tags: ["math", "python", "opertors", "arithmetic", "functions", "import"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

<div class="required" markdown="1">
Before starting this tutorial, there are a few requirements that you should have in place.
* Firstly, you should be familiar with using the **command line in terminal** on your computer. <br>
<button class="btn more mr"></button> ...from the practical tutorials in section <a class="t-links" href="300"></a>

* Secondly, you should **have Python installed** on your local machine.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="423"></a>

* Thirdly, you should have a Python Integrated **Development Environment** (IDE) set up on your computer, e.g., PyCharm or JupyterLab or any text editor.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="420"></a>

* Finally, you should have a **basic understanding of Python** programming.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="531"></a>
</div>


# Math in Python

Mathematics is a fundamental aspect of programming, and Python provides a range of tools and resources for working with math. Python provides a robust set of tools for working with math, including:
* built-in **operators**, *for example:* `+`, `-`, `*`, `/`, `%`, `//`, `**`
* built-in **functions**, *for example:* `sum()`, `min()`, `max()`, `round()`
* built-in **modules** like `math`, *and*
* the ability to import **external libraries** for more specialized tasks, *for example:* `NumPy`, `SciPy`, and `Pandas`

The `math` module is a built-in module in Python that provides access to many **mathematical functions**. It includes functions that provide more advanced mathematical operations such as:

<table> <tr> <th>trigonometric</th>  <th>logarithmic</th>  <th>exponential</th>  <th>statistical</th> </tr> </table>

In addition to built-in modules, Python also provides a way to import external libraries, such as `NumPy`, `SciPy`, and `Pandas`. These libraries contain a range of specialized functions and tools for working with specific areas of mathematics and data analysis.


## *When use math module?*

Using the `math` module in Python can help you **perform complex mathematical operations with ease**. This module is commonly used in scientific and mathematical computations and can be a useful tool for data analysts, engineers, and **scientists who work with numerical data**. In this module, you can perform various mathematical operations, such as finding the square root of a number, finding the value of a mathematical constant such as pi, and much more.


## *Getting Started*

You can try out the `math` module on your **local machine** if you have Python installed. <br>

<div class="required" markdown="1">
If you want to make up for the installation step, you can follow the installation guide provided in the tutorial <a class="t-links" href="423"></a>.
</div>

Alternatively, if you prefer to **work online**, you can use various online Python interpreters such as <a href="https://repl.it/" target="_blank">Repl.it  ⤴</a>, <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere  ⤴</a>, or <a href="https://colab.research.google.com/" target="_blank">Colab  ⤴</a>. These online interpreters provide a Python shell and allow you to run Python code without installing Python on your local machine.


For example, you can **use online Python shell** immediately available at <a href="https://www.python.org/shell/" target="_blank">https://www.python.org/shell/  ⤴</a> to experiment with the `math` module. <br> *Simply type in your Python code in the shell and hit enter to see the output.*

<img src="{{ images_path }}/03_python-online-console.png" alt="03_python-online-console.png">


# Built-in Operators

Python has several built-in operators for basic arithmetic operations, such as:

| operator | function       | description |
|----------|----------------|-------------|
| `+`      | addition       | |
| `-`      | subtraction    | |
| `*`      | multiplication | |
| `/`      | division       | |

In addition, Python also provides operators for more advanced mathematical operations, such as:

<table>
  <tr> <td width="283"><code>%</code></td>  <td width="310">modulus</td> <td><i>for finding the remainder of a division</i></td> </tr>
  <tr> <td><code>//</code></td>             <td>integer division</td>    <td><i>for performing integer division</i></td> </tr>
  <tr> <td><code>**</code></td>             <td>exponentiation</td>      <td><i>for raising a number to a power</i></td> </tr>
</table>

## BASIC ARITHMETICS

```python
x = 10
y = 3

# Addition
z = x + y
print(z)                        # Output: 13

# Subtraction
z = x - y
print(z)                        # Output: 7

# Multiplication
z = x * y
print(z)                        # Output: 30

# Division
z = x / y
print(z)                        # Output: 3.3333333333333335
```

## ADVANCED OPERATIONS

### <b class="prefix-2"></b>*Exponentiation*

*Python has an exponentiation operator* `**` *that raises a number to a power.*

```python
x = 2
y = 3

# Exponentiation
z = x ** y
print(z)                        # Output: 8
```

### <b class="prefix-2"></b>*Integer Division*
<i>In Python, integer division is performed using the double slash `//` operator</i>

```python
x = 23
y = 5

# Integer division
z = x // y
print(z)                        # Output: 4
```

### <b class="prefix-2"></b>*Modulus*
<i>In Python, the modulus operation is performed using the percent `%` operator.</i>

```python
x = 23
y = 5

# Modulus operation
z = x % y
print(z)                        # Output: 3
```


# Built-in Functions

Python also has many built-in functions for performing mathematical operations.

| function      | example                      | description                            |
|---------------|------------------------------|----------------------------------------|
|**abs(x)**     | abs(-10)<br>*returns: 10*    | returns the absolute value of a number |
|**round(x, y)**| round(3.14159, 2)<br>*returns: 3.14* | rounds a number (x) to a specified number (y) of decimal places |
|**sum(list)**  | sum([1,2,3])<br>*returns: 6* | return the sum of the values in a list |
|**min(list)**  | min([1,2,3])<br>*returns: 1* | return the minimum value in a list     |
|**max(list)**  | max([1,2,3])<br>*returns: 3* | return the maximum value in a list     |

<div class="more" markdown="1">
The `math` module provides a range of additional mathematical functions, including <a href="https://docs.python.org/3/library/math.html#trigonometric-functions/" target="_blank">trigonometric</a> functions, <a href="https://docs.python.org/3/library/math.html#power-and-logarithmic-functions" target="_blank">logarithmic</a> functions, <a href="https://docs.python.org/3/library/math.html#special-functions" target="_blank">statistical & special</a> functions, and more.
</div>


# Built-in Module: `math`

**MATH is a built-in module** *(no installation required)* that contains various mathematical constants and more advanced mathematical operations such as trigonometric functions, logarithmic functions, and statistical functions, among others.

<div class="warning" markdown="1">
The `math` **module** does not contain functions for basic arithmetic operations such as addition, subtraction, multiplication, and division. These are basic mathematical operations that can be performed using the <u>standard arithmetic operators</u> in Python, such as `+`, `-`, `*`, `/`.
</div>


## **CheatSheet:** `math`

In the tabs below you can find the corresponding tables with `math` module functions along with function description and usage examples.

<details><summary><b>Basic operations:</b></summary>

<table>
  <tr><th>Function</th><th>Example</th><th>Description</th></tr>
  <tr><td><b>math.sqrt(x)</b></td><td>math.sqrt(25)<br><i>returns: 5</i></td><td><i>Returns the square root of x.</i></td></tr>
  <tr><td><b>math.factorial(x)</b></td><td>math.factorial(5)<br><i>returns: 120</i></td><td><i>Returns the factorial of x.</i></td></tr>
  <tr><td><b>math.ceil(x)</b></td><td>math.ceil(2.7)<br><i>returns: 3</i></td><td><i>Rounds up a number to the nearest integer.</i></td></tr>
  <tr><td><b>math.floor(x)</b></td><td>math.floor(2.7)<br><i>returns: 2</i></td><td><i>Rounds down a number to the nearest integer.</i></td></tr>
  <tr><td><b>math.trunc(x)</b></td><td>math.trunc(3.5)<br><i>returns: 3</i></td><td><i>Returns the integer value of x (truncates towards zero).</i></td></tr>
  <tr><td><b>math.abs(x)</b></td><td>math.abs(-10)<br><i>returns: 10</i></td><td><i>Returns the absolute value of provided number in the same type.</i></td></tr>
  <tr><td><b>math.fabs(x)</b></td><td>math.fabs(-10)<br><i>returns: 10.0</i></td><td><i>Returns the absolute value of provided number as a float-point number.</i></td></tr>
  <tr><td><b>math.log(x)</b></td><td>math.log(10)<br><i>returns: 2.30258509</i></td><td><i>Returns the natural logarithm (base e) of x.</i></td></tr>
  <tr><td><b>math.log10(x)</b></td><td>math.log10(100)<br><i>returns: 2.0</i></td><td><i>Returns the base-10 logarithm of x.</i></td></tr>
  <tr><td><b>math.exp(x)</b></td><td>math.exp(2)<br><i>returns: 7.3890560</i></td><td><i>Returns the exponential value of x.</i></td></tr>
  <tr><td><b>math.pow(x, y)</b></td><td>math.pow(2, 3)<br><i>returns: 8</i></td><td><i>Returns the value of x raised to the power of y.</i></td></tr>
  <tr><td><b>math.copysign(x, y)</b></td><td>math.copysign(10, -1)<br><i>returns: -10.0</i></td><td><i>Returns a value with the magnitude of x and the sign of y.</i></td></tr>
  <tr><td><b>math.fmod(x, y)</b></td><td>math.fmod(10, 3)<br><i>returns: 1.0</i></td><td><i>Returns the remainder of x/y as a float.</i></td></tr>
  <tr><td><b>math.gcd(x, y)</b></td><td>math.gcd(24, 36)<br><i>returns: 12</i></td><td><i>Returns the greatest common divisor of x and y.</i></td></tr>
  <tr><td><b>math.hypot(x, y)</b></td><td>math.hypot(3, 4)<br><i>returns: 5.0</i></td><td><i>Returns the Euclidean norm, sqrt(x2 + y2).</i></td></tr>
</table>
</details>

<details><summary><b>Constants:</b></summary>

<table>
  <tr><th>Function</th><th>Example</th><th>Description</th></tr>
  <tr><td><b>math.e</b></td><td>math.e</td><td><i>A mathematical constant that represents the value of e.</i></td></tr>
  <tr><td><b>math.inf</b></td><td>math.inf</td><td><i>Represents positive infinity, which is a value greater than any finite number.</i></td></tr>
  <tr><td><b>math.nan</b></td><td>math.nan</td><td><i>Represents a value that is not a number (NaN).</i></td></tr>
  <tr><td><b>math.pi</b></td><td>math.pi</td><td><i>A mathematical constant that represents the value of pi.</i></td></tr>
  <tr><td><b>math.tau</b></td><td>math.tau</td><td><i>Represents the mathematical constant tau, which is equal to 2*pi.</i></td></tr>
</table>
</details>

<details><summary><b>Trigonometry:</b></summary>

<table>
  <tr><th>Function</th><th>Example</th><th>Description</th></tr>
  <tr><td><b>math.sin(x)</b></td><td>math.sin(math.pi/2)</td><td><i>Returns the sine of an angle in radians.</i></td></tr>
  <tr><td><b>math.cos(x)</b></td><td>math.cos(math.pi)</td><td><i>Returns the cosine of an angle in radians.</i></td></tr>
  <tr><td><b>math.tan(x)</b></td><td>math.tan(math.pi/4)</td><td><i>Returns the tangent of an angle in radians.</i></td></tr>
  <tr><td><b>math.radians(x)</b></td><td>math.radians(180)<br><i>returns: 3.14159265</i></td><td><i>Converts an angle from degrees to radians.</i></td></tr>
  <tr><td><b>math.degrees(x)</b></td><td>math.degrees(math.pi)<br><i>returns: 180.0</i></td><td><i>Converts an angle from radians to degrees.</i></td></tr>
  <tr><td><b>math.asin(x)</b></td><td>math.asin(0.5)<br><i>returns: 0.5235987</i></td><td><i>Returns the arc sine (in radians) of x.</i></td></tr>
  <tr><td><b>math.acos(x)</b></td><td>math.acos(0.5)<br><i>returns: 1.0471975</i></td><td><i>Returns the arc cosine (in radians) of x.</i></td></tr>
  <tr><td><b>math.atan(x)</b></td><td>math.atan(1)<br><i>returns: 0.7853981</i></td><td><i>Returns the arc tangent (in radians) of x.</i></td></tr>
  <tr><td><b>math.atan2(y, x)</b></td><td>math.atan2(1, 1)<br><i>returns: 0.7853981</i></td><td><i>Returns the arc tangent (in radians) of y/x, in the range [-pi, pi].</i></td></tr>
</table>
</details>

<details><summary><b>Logic:</b></summary>

<table>
  <tr><th>Function</th><th>Example</th><th>Description</th></tr>
  <tr><td><b>math.isnan(x)</b></td><td>math.isnan(10)<br><i>returns: False</i></td><td><i>Returns True if x is NaN (not a number), False otherwise.</i></td></tr>
  <tr><td><b>math.isinf(x)</b></td><td>math.isinf(10)<br><i>returns: False</i></td><td><i>Returns True if x is positive or negative infinity, and False otherwise.</i></td></tr>
  <tr><td><b>math.isfinite(x)</b></td><td>math.isfinite(10)<br><i>returns: True</i></td><td><i>Returns True if x is a finite number (i.e., not infinity or NaN), and False otherwise.</i></td></tr>
  <tr><td><b>math.isclose(a, b, *, rel_tol=1e-09, abs_tol=0.0)</b></td><td>math.isclose(3.5, 3.6, rel_tol=0.1)<br><i>returns: True</i></td><td><i>Returns True if a is close in value to b, False otherwise.</i></td></tr>
</table>
</details>


## Import MATH module

The `math` module is built into Python and **does NOT require any installation**.

To use the `math` module, you need to import it first using the `import` statement:
```python
import math
```
Once the `math` module is imported, you can access all its functions by prefixing them with **math**, followed by a dot and the function name, `math.function_name()`. <br>
*For example, to find the square root of a number, you can use a* `math.sqrt()` *function:*
```python
my_variable = math.sqrt(5)
```
