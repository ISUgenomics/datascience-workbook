---
title: "Shell & IDLE: create Python code in a terminal or simple IDE"
note: (beginner)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 424
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

Python comes with built-in options for live coding and immediate execution, which include the 1) **Python Shell** and 2) **Python IDLE**. Both options are **available without any additional installations** other than Python.

**Python Shell** is a built-in self-interpreter that can be activated directly in the terminal once Python is installed on a computing machine. This interpreter is also known as the REPL (Read-Evaluate-Print Loop). With Python shell you can write and execute **Python code directly in a terminal window**. <br>
*You can easily start Python shell in a terminal using the `python` command (note: `python3` for Python3).*

**Python IDLE** is an integrated development environment (IDE) for Python that provides a more advanced coding environment than the Python shell. With Python IDLE, you can write, edit, and run **Python code in a single window** *(separated from the terminal window)*. <br>
*You can easily launch Python IDLE from a terminal using the `idle` command (note: `idle3` for Python3).*

Here are some key differences between the Python Shell and IDLE:

|               | Python Shell | Python IDLE |
|---------------|--------------|-------------|
|user interface | command-line interface | graphical user interface (GUI) with menus, toolbars, and other visual elements |
|fetures        | basic features such as command history, tab completion, and syntax highlighting | advanced features such as code profiling, code coverage, and refactoring tools |
|workflow       | designed for quick experimentation and testing | provides a more structured workflow for developing larger programs |
|difficulty     | easy to use for a beginner and doesn't require any setup | a great tool for more experienced Python developers |

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If you're just starting out with Python or working on small projects, the Python shell may be sufficient. However, if you're working on larger projects or need more advanced features, IDLE or another Python IDE may be a better choice. For details, see <a href="#further-reading" target="_blank">Further Reading</a> section in this tutorial.
</span>
</div><br>


## First, install Python

To use Python Shell or IDLE, you first need to have Python installed on your computer. You can **download the latest version of Python** from the official Python website at <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/  ⤴</a>. Be sure to choose the version that is compatible with your operating system (Windows, macOS, or Linux).

<details><summary>Windows:</summary>

1. Go to the official Python website at <a href="https://www.python.org/downloads/windows/" target="_blank">https://www.python.org/downloads/windows/  ⤴</a>.<br>
2. Scroll down to the "Download Python" section and click on the "Windows" button. <br>
3. Scroll down to the "Stable Releases" section and click on the latest version of Python. <br>
<p align="left"><img width="800" src="{{ images_path }}/02_python-windows.png"></p><br>
4. Download the "Windows x86-64 executable installer" for 64-bit Windows or the "Windows x86 executable installer" for 32-bit Windows. <br>
5. Run the installer and follow the on-screen prompts to complete the installation.
</details>

<details><summary>macOS:</summary>

<b>A. MANUALLY</b> <br>
1. Go to the official Python website at <a href="https://www.python.org/downloads/mac-osx/" target="_blank">https://www.python.org/downloads/mac-osx/  ⤴</a>.<br>
2. Scroll down to the "Download Python" section and click on the latest version of Python. <br>
<p align="left"><img width="800" src="{{ images_path }}/02_python-macos.png"></p><br>
3. Download the macOS installer package. <br>
4. Run the installer package and follow the on-screen prompts to complete the installation. <br><br>

<b>B. IN a TERMINAL</b> <br>
1. Open the Terminal app on your Mac. <br>
2. First, check if you have Homebrew installed using the <b>brew -h</b> command. If you received an error message "Command not found", then type the following command to install Homebrew (a package manager for macOS): <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
</code><br>
3. Wait for the installation to complete. <br>
4. Type the following command to install the latest release of Python: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install python
</code><br>
and if you need a specific version of Python, provide it with the <b>@</b> syntax: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install python@3.9
</code><br>
</details>

<details><summary>Linux (Ubuntu and Debian):</summary>

1. Open a terminal window. <br>
2. Type the following command to install Python: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update <br>
sudo apt-get install python3
</code><br>
</details>

<details><summary>HPC system:</summary>

On a high-performance computing (HPC) system, it's common to have <b>multiple versions of Python pre-installed</b>. This is because different software packages and applications may require different versions of Python or specific Python packages. <br>
To switch between different versions of Python on an HPC system, you can use the <b>module</b> command. The module command allows you to load and unload software modules, including different versions of Python.<br><br>
0. Log in to the HPC system. <br
1. Type the following command to see a list of available Python modules:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
module avail python
</code><br>
2. Look for the version of Python that you want to use. The module name will typically include the version number, such as <bpython/3.9.2</b>. <br
3. Type the following command to load the Python module: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
module load python/3.9.2
</code><br>
4. Wait for the module to be loaded. This may take a few seconds. <br>
5. Type the following command to verify that the correct version of Python is being used: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
python --version
</code><br>
<i>This should display the version number of the Python interpreter that you just loaded.</i><br>
</details>

<br>
<span style="color: #ff3870;font-weight: 500;">That's it! Once Python is installed on your computer, you can start using it to write and run Python code.</span>

**See the following sections [Python Shell](#python-shell) and [Python IDLE](#python-idle) to get started with Python on your machine.**

---

# Python Shell

Python has a built-in shell with self-interpreter that can be **activated directly in the terminal** once Python is installed on a computing machine. It provides an **interactive environment** for executing Python commands by allowing the user to **enter Python code one line at a time** and immediately execute it to see the results of each command. The Python shell is useful for experimenting with Python syntax, performing quick calculations, and testing out small code snippets. It is a **convenient way to quickly test out Python code** and experiment with new ideas. It's especially **useful for beginners** who are just learning Python and want to get a feel for how the language works.

## Start a Python Shell

To start the Python shell, you need to have Python installed on your computer. If you haven't already done so, go back to section [First, install Python](#first-install-python) to make up for this step.

Once you have installed Python, you can start the Python shell by following these steps:

**1.** Open the terminal or command prompt on your computer.

**2.** Type `python` or `python3`, depending on your system's configuration, and press `Enter` on your keyboard.
```
python3
```

**3.** The Python Shell will start and display a prompt (`>>>`) where you can start entering Python commands.

<p align="center"><img width="800" src="{{ images_path }}/02_python-shell.gif"></p>

**4.** To terminate the Python shell press `CTRL + D` or type `exit()` or `quit()` at the prompt and press Enter. <br>
*You will automatically return to your basic shell (e.g., Bash).*

**3'.** Once the Python shell is running, you can write and execute Python code directly in the shell without the need to create script files. For example, you can use the shell to perform simple calculations, experiment with Python syntax, or test out small code snippets.

Let's start with using the `print()` function to display the <i>"Hello, world!"</i> welcome messeage on the screen:

![02_python-shell.png]({{ images_path }}/02_python-shell.png)

Now, you can try using the Python shell to perform a simple calculation:

```
a = 10
b = 5
c = a + b
print(c)
```

*In this example, we created three variables (a, b, c) in the Python shell and assigned the values using the `=` operator. We then used the `+` operator to add a and b together and assigned the result to the variable c. Finally, we printed the value of c to the console using the `print()` function.*

---

# Python IDLE

Integrated Development and Learning Environment (IDLE) is the default Python environment that **comes with the standard installation of Python**. It is a simple and **lightweight environment** that provides basic features such as syntax highlighting, code completion, and debugging.<br>
Python IDLE is a **useful tool for learning and working with Python**, supporting the user with:

* **interactive mode** <br>
<i>Python IDLE allows you to run Python code interactively, which means you can enter code directly into the shell and see the results immediately. It can be very helpful when you're learning how to coding in Python.</i>

* **code editor** <br>
<i>Python IDLE also includes a code editor that allows you to write and edit Python code in a more structured way than in interactive mode. The editor provides features such as syntax highlighting, indentation, and auto-completion to make it easier to write and read Python code.</i>

* **debugging** <br>
<i>Python IDLE includes a debugger that allows you to step through your code line by line and inspect variables as you go. This can be very helpful when you're trying to track down a bug or understand how your code is working.</i>

* **help and documentation** <br>
<i>Python IDLE provides access to Python's built-in help system, which allows you to look up information about Python functions, modules, and other features. This can be very helpful when you're trying to learn how to use a new feature or library in Python.</i>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If you're just getting started with Python, I would encourage you to give Python IDLE a try before the more advanced IDEs and see how it can help you on your learning journey. Once you have Python installed on your local machine, you can use IDLE offline any time without further configuration.
</span>
</div><br>

## Launch an IDLE

Python IDLE can be launched from the command line or from your computer's applications menu. If you haven't installed Python yet, go back to section [First, install Python](#first-install-python) to make up for this step.

To launch the Python IDLE from the terminal window, you can follow these steps:

**1.** Open the terminal or command prompt on your computer.

**2.** Type `idle` or `idle3`, depending on your system's configuration, and press `Enter` on your keyboard.
*Start typing `idle`, then press the `TAB` key twice to display available IDLE variants.* <br>

<p align="center"><img width="800" src="{{ images_path }}/02_python-idle.gif"></p>

**3.** The Python IDLE will open in a separate window, providing you graphical user interface (GUI) with a `menu bar` on the top.
*By default, the first view in the IDLE is a Python Shell, which works the same as the interactive Python shell started directly in the terminal.*

**4.** You can use the Python IDLE to create, edit, and run Python code.

* To create a new Python file in IDLE, you can click `File > New File`, or press `Ctrl+N` on Windows or `Command+N` on Mac.

![02_python-idle.png]({{ images_path }}/02_python-idle.png)

* To save your code, you can click `File > Save`, or press `Ctrl+S` on Windows or `Command+S` on Mac. <br>
<i>You can customize the file name and saving location in the pop-up dialog box.</i>

* You can run your code in IDLE by clicking `Run > Run Module`, or pressing `F5` on your keyboard. <br>
<i>The output will be displayed in the Python shell at the bottom of the IDLE window.</i>

![02_python-idle2.png]({{ images_path }}/02_python-idle2.png)

---

<span style="color: #ff3870;font-weight: 500;">
It is highly recommended to learn more about the basics of programming in Python</span> <b>by working through the hands-on tutorials provided in Section <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">05. Introduction to Programming: Introduction to Python Programming  ⤴</a> of this workbook.</b> These tutorials cover topics such as variables, data types, operators, control flow statements, functions, and more.
