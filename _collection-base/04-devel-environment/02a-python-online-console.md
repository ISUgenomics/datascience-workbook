---
title: "Online Console: simple Python code in a browser"
note: (without installation)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 421
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

Overall, using an online platform for Python programming can be a convenient and accessible way to write and run Python code, especially if you are just starting out with the language or don't want to install anything on your local computer. This choice provides you with:
* <b>convenience & accessibility</b>, *write and run Python code from any device with an internet connection, without the need to install any software (including Python)*
* <b>no setup required</b>, *you can start writing and running code right away; this can be especially useful if you are just starting out with Python and don't want to spend time setting up a development environment.*
* <b>collaboration</b>, *useful even for advanced users, e.g., if you are working on a team or sharing your code with others*


## Open online Python console

There are many online platforms that allow you to write and run Python code directly in your web browser. Several examples are described in the section <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment#2-online-coding-platforms" target="_blank">2. Online coding platforms  ⤴</a> of the <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment" target="_blank">Python programming environment  ⤴</a> tutorial. For our hands-on exercise we select the <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere  ⤴</a> web platform [by Anaconda], using its basic plan to get started with Python coding for free. <br>

### • *python.org/shell*

*If you want to start right away without creating any free account, open the Python console online at <a href="https://www.python.org/shell/" target="_blank">https://www.python.org/shell/  ⤴</a> and go straight to [Start coding in Python](#start-coding-in-python) section in this tutorial.*

![03_python-online-console.png]({{ images_path }}/03_python-online-console.png)


### • *pythonanywhere.com*

**1. Open a new tab in your browser and paste the URL: <a href="https://www.pythonanywhere.com" target="_blank">https://www.pythonanywhere.com  ⤴</a>** *(or simply click-on the link)*

* You will see the webpage interface, shown on the screenshoot below
* You can watch the one-minute video to learn about the features

![PythonAnywhere]({{ images_path }}/03_python-anywhere.png) <br><br>

**2. Click-on the green button:** <span style="background-color: green; color: white;">Start running Python online</span> **and then** <span style="background-color: #5bc0de; color: white;">Create a Beginner account</span> **for free** <br>

![PythonAnywhere]({{ images_path }}/03_python-anywhere-account.png) <br><br>

**3. Once registered, take a tour to get a quick overview**

![PythonAnywhere]({{ images_path }}/03_python-anywhere-guide.png) <br><br>

**4. Click-on the `New console: >>> Python` and select version `3.9`** <br>


## Start coding in Python

**Follow hands-on examples to create your first Python code** <br>
In this section are a few simple examples of Python code that you can try out.

<p align="center"><img width="800" src="{{ images_path }}/03_python-anywhere.gif"></p>


***Example 1:*** *Printing a message to the console:*

```
print("Hello, world!")
```

*This code will print the message "Hello, world!" to the console. It uses a built-in Python function `print()`. The argument of this function is a text string enclosed in the single or double quotation marks, `""` or `''`.*

![]({{ images_path }}/03_python-anywhere_ex1.png)<br>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
The <b>print()</b> function in Python is used to output or display text or other data to the console or terminal. It is a built-in function that takes one or more arguments (values or variables) and prints them to the console. Multiple variables should be separated by a comma.
</span>
</div><br>

***Example 2:*** *Storing and manipulating data in variables:*

```
x = 10
y = 5

print(x, y)
```

*This code defines two variables, `x` and `y`, and assigns them the values 10 and 5, respectively. The current value assigned to the variable can be displayed on the console screen using `print()` function with a variable as an argument (e.g., `print(x)`).*

![]({{ images_path }}/03_python-anywhere_ex2A.png)<br>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
In Python, a <b>variable</b> is a name that refers to a value stored in the computer's memory. It is used to store data that can be accessed and manipulated by the program. The type of a variable is determined automatically based on the value assigned to it.<br>
To assign a value to a variable in Python, you simply use the assignment operator <b>=</b>. For example, x = 10.
</span>
</div><br>

***Example 3:*** *Perform some basic arithmetic operations:*

```
z = x + y
print(z)

z = x * y
print(z)
```

*This code uses previously defined variables `x` and `y` to perform some basic arithmetic operations like summing or multiplying. The result of the calculations is assigned to a new variable `z`. It stores the most recent assigned value, which can be previewed using a built-in `print()` function.*

![]({{ images_path }}/03_python-anywhere_ex2B.png)<br>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
In Python, you can use variables to assign the result of <b>basic mathematical operations</b> such as summing, multiplying, and so on, by using standard mathematical operators:
<li>+ &emsp; for addition</li>
<li>- &emsp; for substraction</li>
<li>* &emsp; for multiplication</li>
<li>/ &emsp; for division</li>
</span>
</div><br>

---

<span style="color: #ff3870;font-weight: 500;">
It is highly recommended to learn more about the basics of programming in Python</span> <b>by working through the hands-on tutorials provided in Section <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">05. Introduction to Programming: Introduction to Python Programming  ⤴</a> of this workbook.</b> These tutorials cover topics such as variables, data types, operators, control flow statements, functions, and more.
