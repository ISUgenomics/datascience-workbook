---
title: "Python programming environment(s)"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "intro"
order: 420
level: 1
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<a href="https://www.python.org" target="_blank">Python  ⤴</a> is a high-level, **interpreted programming language** that is widely used for scientific computing, data analysis, artificial intelligence algorithms implementation, web development, and visualization. It has a simple and **easy-to-learn syntax**, a large standard library, and a wide community making it a popular choice for beginners and experienced programmers alike.

![Python]({{ images_path }}/04_02_python.png)

<div class="note" markdown="1">
*In computer science, an interpreted language is a type of programming language for which most of its implementations execute instructions directly, without previously compiling a program into machine-language instructions. This makes it easier to write and test code, however, Python programs may run slower than those written in a compiled language.*
</div>

<div class="more" markdown="1">
...about Python programming and its advantages in section:<br> <a class="t-links" href="500"></a> / <a class="t-links" href="531"></a>
</div>


# Python programming environment

There are several ways to set up a Python programming environment, depending on your needs and preferences. In the following subsections you can explore a few common options.

## **1. Online coding platforms** *(beginner)*

There are also online platforms that allow you to write and run Python code directly in your web browser, **without the need to install anything** on your local computer. Some examples include:
* <a href="https://www.python.org/shell/" target="_blank">Python Shell  ⤴</a>, includes an online console from PythonAnywhere; use it right away without creating an account or signing-in
* <a href="https://www.codecademy.com/" target="_blank">CodeAcademy  ⤴</a>, includes a code editor and interactive exercises to help you learn programming; offers interactive courses and tutorials on a variety of programming languages, including Python
* <a href="https://repl.it/" target="_blank">Repl.it  ⤴</a>, includes a code editor, debugger, and integrations with various tools and services; supports a wide range of programming languages, including Python
* <a href="https://trinket.io/" target="_blank">Trinket  ⤴</a>, includes a code editor, debugger, and integrations with various tools and services; supports a number of programming languages, including Python
* <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere  ⤴</a>, includes a code editor, debugger, and support for web development frameworks such as Django and Flask;  supports developing and hosting Python web applications

Typically, these online platform provide interface for the Python built-in shell, i.e., the Integrated Development and Learning Environment (**Python IDLE**) that comes with the standard installation of Python.

![03_python-online-console.png]({{ images_path }}/03_python-online-console.png)

## **2. Command Line (CL) code editors** *(intermediate)*
You can also use a plain text editor, such as <a href="https://www.nano-editor.org" target="_blank">nano  ⤴</a> [GNU], <a href="https://www.vim.org" target="_blank">Vim  ⤴</a> [Bram Moolenaar], or <a href="https://linuxcommand.org/lc3_adv_mc.php" target="_blank">mcedit  ⤴</a> [Midnight Commander] to write Python code and run it from the command line. To do this, **you will need to install Python on your computer** and then use the Python interpreter to execute your code.

![Python]({{ images_path }}/04_02_cli_editors.png)

<div class="protip" markdown="1">
*This option is a good choice to develop quickly a simple script directly on the remote machine (such as high-performance computing cluster) where the graphical user interface (GUI) is not available.*
</div>

<div class="more" markdown="1">
...about the <b>CLI text editors</b> from the tutorial <a class="t-links" href="322"></a> in this workbook.
</div>


## **3. Integrated Development Environment (IDE)** *(advanced)*
An Integrated Development Environment (IDE) is a software application that provides a comprehensive set of tools for software development. IDEs typically provide a range of tools and features for editing, debugging, and testing code, as well as integrations with other tools and services that are commonly used in software development (e.g., Git version control).

![Python]({{ images_path }}/04_02_ide_features.png)

### *A. Multi-language IDE*
There are many multi-language IDEs available, such as <a href="https://code.visualstudio.com" target="_blank">VSC  ⤴</a> [Microsoft], <a href="https://www.eclipse.org/ide/" target="_blank">Eclipse  ⤴</a>, <a href="https://netbeans.apache.org" target="_blank">NetBeans  ⤴</a>, and <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA  ⤴</a> [JetBrains].

<div class="protip" markdown="1">
*Multi-language IDEs can be useful* ***for developers who work on projects that involve more than one programming language***, *as they provide a single platform for managing all of the code and related resources. They can also be a good choice for developers who want a more comprehensive development environment that includes a range of tools and features beyond just a code editor.*
</div>

<button class="btn more"></button> ...about the **VSC IDE** from the tutorial <a class="t-links" href="411">Visual Studio Code</a>


### *B. Python-dedicated IDE*
Some popular IDEs dedicated for programming in Python include <a href="https://realpython.com/python-idle/" target="_blank">IDLE  ⤴</a> *(included with the Python installation)*, <a href="https://www.jetbrains.com/pycharm/" target="_blank">PyCharm  ⤴</a>, and <a href="https://www.spyder-ide.org" target="_blank">Spyder  ⤴</a>.

![Python]({{ images_path }}/04_02_python_ide.png)

<div class="protip mt-" markdown="1">
*Using a Python-dedicated IDE can make it easier to work with Python code and take advantage of the language's features. These IDEs often include* ***advanced code completion*** *and* ***error highlighting***, *as well as a range of* ***debugging and testing tools***. *They may also include integrations with popular third-party libraries and frameworks, such as Django and Flask. Overall, using a Python-dedicated IDE can be a* ***good choice if you are primarily working with Python*** *and want a development environment that is optimized for the language.*
</div>

<div class="more" markdown="1">
...about the <b>PyCharm IDE</b> from the tutorial <a class="t-links" href="427"></a> in this workbook.
</div>


### *C. Web-based interactive DE*
<a href="https://jupyter.org/install" target="_blank">JupyterLab  ⤴</a> is an open-source web-based interactive development environment (IDE) for working with Jupyter notebooks, code, and data. It is not a traditional IDE in the sense that it does not provide features such as a code editor or debugger, but it does offer a range of tools and features for working with notebooks and other interactive documents that combine code, text *(markdown)*, and visualizations.

<table class="mb-0">
  <tr> <th>1. Launch Jupyter Lab</th> <th>2. Develop code, comment, and visualize results</th> </tr>
  <tr>
    <td class="no-border"><img src="{{ images_path }}/04_jupyter_launch.gif" alt="Merge data app" width="648"></td>
    <td class="no-border"><img src="{{ images_path }}/04_jupyter_cell_types.png" alt="Merge data app" width="552"></td>
  </tr>
</table>

Although, JupyterLab does not include a debugger in the traditional sense, it supports the use of **third-party debugging tools**, such as the Python debugger (<a href="https://docs.python.org/3/library/pdb.html" target="_blank">pdb  ⤴</a>) and the IPython debugger (<a href="https://ipython.org/ipython-doc/3/api/generated/IPython.core.debugger.html" target="_blank">ipdb  ⤴</a>). These tools allow you to set breakpoints and step through your code line by line, examining variables and other runtime information as you go.

<div class="protip" markdown="1">
*Overall, JupyterLab is a useful tool for interactive computing and data analysis, particularly in the fields of scientific computing, data science, and machine learning. However, it is not a traditional IDE and may not be the best choice for all types of development projects.*
</div>

<div class="more" markdown="1">
...about the <b>Jupyter Lab</b> from the tutorial <a class="t-links" href="412"></a> in this workbook.
</div>
