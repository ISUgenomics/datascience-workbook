---
title: "Manipulating text files with Python"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "intro"
order: 722.1
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../../00-DataParsing-LandingPage.md) / [2. Data Manipulation](../01-data-manipulation.md) / **2.2 Manipulating Text Files with Python**

---


# Introduction

Both spreadsheet software and Python are commonly used for manipulating data in scientific research. However, they have some differences in terms of their capabilities and approaches. Overall, the choice between spreadsheet software and Python-based algorithms for working with data depends on the specific needs and requirements of the user.
* `Spreadsheet` software can be a great option for those who need a user-friendly **graphical interface** for working with data, while
* `Python-based` approaches can be **more efficient for handling large datasets** or performing complex analyses, but **require some programming skills** and familiarity with command-line interfaces.

## Spreadsheet vs. Python

Here are some specific advantages and disadvantages of using spreadsheet software and Python for data manipulation:

| Approach | Advantages | Disadvantages |
|----------|------------|---------------|
| Spreadsheet Software | ✓ Easy-to-use **graphical interface** <br>✓ Built-in functions for statistical analysis <br>✓ Good for small to medium-sized datasets and simple data manipulation tasks <br>✓ Can **quickly create charts** and graphs | ✗ Limited capacity for handling large datasets <br>✗ Limited flexibility for complex data manipulations <br>✗ Limited reproducibility of data analyses <br>✗ Potential for human error in manual data entry |
| Python algorithms | ✓ Powerful and flexible environment for data manipulation and analysis <br>✓ Wide range of libraries and tools for **advanced data manipulation** and analysis <br>✓ Good for **handling large datasets** and performing complex data analyses <br>✓ **High reproducibility** of data analyses | ✗ Steep learning curve for beginners <br>✗ Requires programming skills and knowledge of data structures <br>✗ Requires more effort to create charts and graphs than spreadsheet software |

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Ultimately, the choice between spreadsheet software and Python depends on the size and complexity of the dataset, the level of data manipulation required, and the user's level of expertise in programming and data analysis.
</span>
</div><br>

# Manipulating Data with Python

In data analysis and research, it is common to work with text files that contain **data in a structured or unstructured format**. Manipulating text files is an important part of the data analysis process, as it allows researchers to **load data, extract information needed, and transform data structure** for further analysis. Python provides a rich set of **built-in modules and functions** that make it easy to read, write, and manipulate text files in a variety of formats. You can also easily install **additional Python libraries for more advanced data processing tasks**.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Python is a general-purpose programming language that provides a powerful and flexible environment for data manipulation and analysis.
</span>
</div><br>

**Python-based approaches typically require users to work within a command-line interface** rather than a graphical user interface. This means that users need to have some programming skills and be comfortable working with command-line tools in order to use Python-based approaches effectively.

Python has a variety of libraries, such as `pandas` and `numpy`, that are specifically designed for data manipulation and analysis. These libraries provide tools for **reading and writing data in a variety of formats**, such as *CSV*, *Excel*, and *SQL*, as well as **advanced data manipulation techniques**, such as merging, grouping, and pivoting data. Python is particularly useful for **working with large datasets** and performing complex data analyses, such as **machine learning and data mining**.

## Step-by-step guide

Before starting data manipulation with Python, there are several steps that need to be taken. By following these steps, you will be well-equipped to manipulate data with Python.

### 1. Setting up a Python DE

Before installing Python, you need to choose an Integrated Development Environment (IDE) to write and execute your code. Some popular Python IDEs include PyCharm, Jupyter Notebook, and Spyder. Choose an IDE that best fits your needs and install it on your computer. <br>
<span style="color: #ff3870;font-weight: 500;"> Learn more about Python IDEs by following the hands-on tutorials in the <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment" target="_blank">Python Programming Environment(s)  ⤴</a> section of this workbook:</span>
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-online-console" target="_blank"><b>Online Console</b>: simple Python code in a browser (without installation)  ⤴</a>
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-online-jupyter-colab" target="_blank"><b>Online Notebook</b>: interactive Python on Try-jupyter and Colab (no installation)  ⤴</a>
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine (installation needed)  ⤴</a>
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02B-python-terminal-shell" target="_blank"><b>Shell & IDLE</b>: create Python code in a terminal or simple IDE (beginner)  ⤴</a>
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02C-python-text-editor" target="_blank">Text editors: create Python code in terminal text files (intermediate)  ⤴</a>
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02D-python-jupyter-notebook" target="_blank"><b>Jupyter Lab</b>: create an interactive Python notebook (advanced)  ⤴</a>
  * <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02E-python-pycharm-ide" target="_blank"><b>PyCharm</b>: IDE for Professional Python Developers (professional)  ⤴</a>


### 2. Python installation

After setting up your IDE, you need to install Python on your computer. You can download the latest version of Python from the official website (https://www.python.org/downloads/). Choose the appropriate version for your operating system and follow the installation instructions. <br>
<span style="color: #ff3870;font-weight: 500;"> Learn more about Python Iinstallation options by following the hands-on tutorial in this workbook:</span>
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine (installation needed)  ⤴</a>

### 3. Intro to Python programming

Once you have installed Python, you need to learn the basics of Python programming. This includes understanding the structure of algorithms, data types, control structures, functions, and modules. You can find many free online resources to learn Python, including courses, tutorials, and documentation. <br>
<span style="color: #ff3870;font-weight: 500;"> Learn more about Python programming by following the hands-on tutorials in the <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a> section of this workbook:</span>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/03-tutorial-read-write-files" target="_blank">Open-Close & Read-Write of Data Files  ⤴</a>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/04-tutorial-python-manage-data-json-string" target="_blank">JSON Module - Encoding & Decoding JSON Data  ⤴</a>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/05-tutorial-python-round-abs-data-math-module" target="_blank">Math Module - Various Mathematical Functions  ⤴</a>


### 4. Learning about Python libraries

Python has several libraries specifically designed for data manipulation, such as NumPy, Pandas, and Matplotlib. You need to learn about these libraries and their functions before you start data manipulation. You can find many tutorials and online courses that focus on these libraries. <br>
<span style="color: #ff3870;font-weight: 500;"> Learn more about Python libraries for data manipulation by following the hands-on tutorials in the <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a> section of this workbook:</span>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/06-tutorial-python-data-manipulation-pandas" target="_blank">Pandas Library - Data Structure Manipulation Tool  ⤴</a>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/07-tutorial-python-array-manipulation-numpy" target="_blank">Numpy Library - Multi-Dimensional Arrays Parser  ⤴</a>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/08-tutorial-python-apply-statistics-scipy" target="_blank">SciPy Library - Algorithms for Scientific Computing  ⤴</a>


### 5. Getting practical experience

Finally, you need to practice what you have learned by working on hands-on tutorials. This will help you apply your knowledge of Python programming and data manipulation libraries to real-world problems. There are many hands-on tutorials in this workbook! <br>
<span style="color: #ff3870;font-weight: 500;"> Start manipulating data files with Python by following the hands-on tutorials in this workbook:</span>
* SECTION: <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/02-PYTHON/01-manipulate-data-with-python" target="_blank">Manipulating Text Files with Python  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/02-PYTHON/02-tutorial-read-write-split-select-data" target="_blank">Read, Write, Split, Select Data  ⤴</a>


* SECTION: <a href="https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/00-data-wrangling-apps" target="_blank">Data Wrangling: ready-made apps  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/01-merge-data-py" target="_blank">Merge files by common column (python)  ⤴</a>
  * <a href="https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/02-slice-or-bin-data-py" target="_blank">Aggregate data over slicing variations (python)  ⤴</a>


* SECTION: <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/02-PYTHON/04-plotly-examples-in-jupyterlab" target="_blank">Plotly Graphing - Interactive Examples in the JupyterLab  ⤴</a>


___
# Further Reading
* [2.2.1 Read, Write, Split, Select Data](02-tutorial-read-write-split-select-data)

* [3. Data Wrangling: ready-made apps](../../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](../01-EXCEL/05-tutorial-merge-spreadsheets-by-column){: .btn  .btn--primary}
[Next](02-tutorial-read-write-split-select-data){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
