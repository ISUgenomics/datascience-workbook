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


# Introduction

Overall, using an online platform for Python programming can be a convenient and accessible way to write and run Python code, especially if you are just starting out with the language or don't want to install anything on your local computer. This choice provides you with:
* <b>convenience & accessibility</b>, *write and run Python code from any device with an internet connection, without the need to install any software (including Python)*
* <b>no setup required</b>, *you can start writing and running code right away; this can be especially useful if you are just starting out with Python and don't want to spend time setting up a development environment.*
* <b>collaboration</b>, *useful even for advanced users, e.g., if you are working on a team or sharing your code with others*


## Open online Python console

There are many online platforms that allow you to write and run Python code directly in your web browser. Several examples are described in the section {% include target_link href=420 section="#1-online-coding-platforms-beginner" text="Tutorial" %} of the {% include target_link href=420 text="Python programming environment(s)" %} tutorial. For our hands-on exercise we select the <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere  ⤴</a> web platform [by Anaconda], using its basic plan to get started with Python coding for free. <br>

### <b class="prefix-2"></b>python.org/shell

*If you want to start right away without creating any free account, open the Python console online at <a href="https://www.python.org/shell/" target="_blank">https://www.python.org/shell/  ⤴</a> and go straight to [Start coding in Python](#start-coding-in-python) section in this tutorial.*

![03_python-online-console.png]({{ images_path }}/03_python-online-console.png)


### <b class="prefix-2"></b>pythonanywhere.com

**1. Open a new tab in your browser and paste the URL: <a href="https://www.pythonanywhere.com" target="_blank">https://www.pythonanywhere.com  ⤴</a>** *(or simply click-on the link)*

* You will see the webpage interface, shown on the screenshoot below
* You can watch the one-minute video to learn about the features

![PythonAnywhere]({{ images_path }}/03_python-anywhere.png)

**2. Click-on the green button:** <button class="btn c-white" style="background-color: green;">Start running Python online</button> **and then** <button class="btn c-white" style="background-color: #5bc0de;">Create a Beginner account</button> **for free**

![PythonAnywhere]({{ images_path }}/03_python-anywhere-account.png)

**3. Once registered, take a tour to get a quick overview**

![PythonAnywhere]({{ images_path }}/03_python-anywhere-guide.png)

**4. Click-on the** `New console: >>> Python` **and select version** `3.9`


# Start coding in Python

**Follow hands-on examples to create your first Python code** <br>
In this section are a few simple examples of Python code that you can try out.

<img width="800" src="{{ images_path }}/03_python-anywhere.gif">


### <button class="btn example before" data-before="EXAMPLE 1"></button><base class="mb">Printing a message to the console

```python
print("Hello, world!")
```

*This code will print the message "Hello, world!" to the console. It uses a built-in Python function `print()`. The argument of this function is a text string enclosed in the single or double quotation marks, `""` or `''`.*

![]({{ images_path }}/03_python-anywhere_ex1.png)

<div class="note" markdown="1">
*The* `print()` *function in Python is used to output or display text or other data to the console or terminal. It is a built-in function that takes one or more arguments (values or variables) and prints them to the console. Multiple variables should be separated by a comma.*
</div>

### <button class="btn example before" data-before="EXAMPLE 2"></button><base class="mb">Storing and manipulating data in variables

```python
x = 10
y = 5

print(x, y)
```

*This code defines two variables, `x` and `y`, and assigns them the values 10 and 5, respectively. The current value assigned to the variable can be displayed on the console screen using `print()` function with a variable as an argument (e.g., `print(x)`).*

![]({{ images_path }}/03_python-anywhere_ex2A.png)

<div class="note" markdown="1">
*In Python, a* ***variable*** *is a name that refers to a value stored in the computer's memory. It is used to store data that can be accessed and manipulated by the program. <br> The* `type` *of a variable is determined automatically based on the value assigned to it. <br> To assign a* `value` *to a variable in Python, you simply use the assignment operator* `=`. *For example,* `x = 10`.
</div>

### <button class="btn example before" data-before="EXAMPLE 3"></button><base class="mb">Perform some basic arithmetic operations

```python
z = x + y
print(z)

z = x * y
print(z)
```

*This code uses previously defined variables `x` and `y` to perform some basic arithmetic operations like summing or multiplying. The result of the calculations is assigned to a new variable `z`. It stores the most recent assigned value, which can be previewed using a built-in `print()` function.*

![]({{ images_path }}/03_python-anywhere_ex2B.png)

<div class="note" markdown="1">
*In Python, you can use variables to assign the result of* ***basic mathematical operations*** *such as summing, multiplying, and so on, by using standard mathematical operators:*
* `+` &emsp; *for addition*
* `-` &emsp; *for substraction*
* `*` &emsp; *for multiplication*
* `/` &emsp; *for division*
</div>


<div class="more" markdown="1">
<i class="c-alert">It is highly recommended to learn more about the basics of programming in Python</i> by working through the hands-on tutorials provided in section {% include target_link href=531 text="05. Introduction to Programming / Introduction to Python programming" %} of this workbook. These tutorials cover topics such as variables, data types, operators, control flow statements, functions, and more.
</div>
