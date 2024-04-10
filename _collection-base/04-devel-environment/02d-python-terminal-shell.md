---
title: "Shell & IDLE: Python code in a terminal or simple IDE"
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


# Introduction

Python comes with built-in options for live coding and immediate execution, which include: <br>
<b class="prefix-3">Python Shell</b> <br>
<b class="prefix-3">Python IDLE</b> <br>
Both options are <span class="c-required">available without any additional requirements</span> other than Python installation.


<table style="font-size: 0.9em;">
  <tr> <td class="center-h"><b>Python Shell</b></td> <td class="center-h"><b>Python IDLE</b></td> </tr>
  <tr>
    <td><span markdown="1">is a built-in self-interpreter that can be activated directly in the terminal once Python is installed on a computing machine. This interpreter is also known as the REPL *(Read-Evaluate-Print Loop)*. With Python shell you can write and execute **Python code directly in a terminal**.</span></td>
    <td><span markdown="1">is an integrated development environment (IDE) for Python that provides a more advanced coding environment than the Python shell. With Python IDLE, you can write, edit, and execute **Python code in a single window** *(separated from the terminal window)*.</span></td>
  </tr>
  <tr>
    <td class="protip">You can easily start Python shell in a terminal using the <code>python</code> command (note: <code>python3</code> for Python3).</td>
    <td class="protip">You can easily launch Python IDLE from a terminal using the <code>idle</code> command (note: <code>idle3</code> for Python3).</td>
  </tr>
</table>



Here are some key differences between the Python Shell and IDLE:

|               | Python Shell | Python IDLE |
|---------------|--------------|-------------|
|user interface | command-line interface | graphical user interface (GUI) with menus, toolbars, and other visual elements |
|fetures        | basic features such as command history, tab completion, and syntax highlighting | advanced features such as code profiling, code coverage, and refactoring tools |
|workflow       | designed for quick experimentation and testing | provides a more structured workflow for developing larger programs |
|difficulty     | easy to use for a beginner and doesn't require any setup | a great tool for more experienced Python developers |

<div class="protip" markdown="1">
If you're just starting out with Python or working on small projects, the Python shell may be sufficient. However, if you're working on larger projects or need more advanced features, IDLE or another Python IDE may be a better choice. For details, see <a href="#further-reading" target="_blank">Further Reading</a> section in this tutorial.
</div>


## First, install Python

To use Python Shell or IDLE, you first need to have Python installed on your computer. You can **download the latest version of Python** from the official Python website at <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/  ⤴</a>. Be sure to choose the version that is compatible with your operating system (Windows, macOS, or Linux).

<details class="l-frame" markdown="1"><summary class="c-header">Windows:</summary>

1. Go to the official Python website at <a href="https://www.python.org/downloads/windows/" target="_blank">https://www.python.org/downloads/windows/  ⤴</a>.
2. Scroll down to the "Download Python" section and click on the <button class="btn"><a class="c-text" href="https://www.python.org/downloads/windows/" target="_blank">Windows</a></button> button.
3. Scroll down to the "Stable Releases" section and click on the latest version of Python.
<img width="1000" src="{{ images_path }}/02_python-windows.png">
4. Download the `"Windows x86-64 executable installer"` for 64-bit Windows or <br>&nbsp;<span class="level-2">the</span> `"Windows x86 executable installer"` for 32-bit Windows.
5. Run the installer and follow the on-screen prompts to complete the installation.
</details>

<details class="l-frame" markdown="1"><summary class="c-header">macOS:</summary>

**A. MANUALLY**
1. Go to the official Python website at <a href="https://www.python.org/downloads/mac-osx/" target="_blank">https://www.python.org/downloads/mac-osx/  ⤴</a>.
2. Scroll down to the "Download Python" section and click on the latest version of Python.
<img width="1000" src="{{ images_path }}/02_python-macos.png">
3. Download the macOS installer package.
4. Run the installer package and follow the on-screen prompts to complete the installation.

<base class="mt">
**B. IN a TERMINAL**
1. Open the Terminal app on your Mac.
2. First, check if you have Homebrew installed using the `brew -h` command. <br>If you received an error message <em class="c-bad">"Command not found"</em>, then type the following command to install Homebrew *(a package manager for macOS)*:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
3. Wait for the installation to complete.
4. Type the following command to install the latest release of Python:
```bash
brew install python
```
and if you need a specific version of Python, provide it with the **@** syntax:
```bash
brew install python@3.9
```
</details>

<details class="l-frame" markdown="1"><summary class="c-header">Linux (Ubuntu and Debian):</summary>

1. Open a terminal window.
2. Type the following command to install Python:
```bash
sudo apt-get update
sudo apt-get install python3
```
</details>

<details class="l-frame" markdown="1"><summary class="c-header">HPC system:</summary>

On a high-performance computing (HPC) system, it's common to have **multiple versions of Python pre-installed**. This is because different software packages and applications may require different versions of Python or specific Python packages.
To switch between different versions of Python on an HPC system, you can use the `module` command. The `module` command allows you to load and unload software modules, including different versions of Python.
0. Log in to the HPC system.
1. Type the following command to see a list of available Python modules:
```bash
module avail python
```
<pre class="code-block bc-output level-1 mt-">[abadacz@nova23-1 ~]$ <span class="c-gray">module avail python</span>
-------------- /opt/rit/el9/current/modules/lmod/linux-rhel9-x86_64/Core --------------
   py-biopython/1.81-py310-wt5scj7              py-meson-python/0.13.1-py310-kvhvsds   (D)
   py-gitpython/3.1.27-py310-pyitit6            py-python-dateutil/2.8.2-py39-rsw6pyr
   py-ipython-genutils/0.2.0-py310-bnwyyxn      py-python-dateutil/2.8.2-py310-lnvzhiv (D)
   py-ipython/8.11.0-py310-lbl246q              python/3.8.18-4j5jvxi
   py-meson-python/0.12.0-py310-kvp7vmw         <span class="c-exercise">python/3.9.16-yukabfp</span>
   py-meson-python/0.13.1-py39-py310-x75x5l2    python/3.10.10-zwlkg4l                 (D)
   py-meson-python/0.13.1-py310-cnxhztb         r-findpython/1.0.7-py310-r42-a4fhsub
Where:
   D:  Default Module
</pre>

2. Look for the version of Python that you want to use. <br>*The module name will typically include the version number, such as* `python/3.9.16`
3. Type the following command to load the Python module:
```bash
module load python/3.9.16-yukabfp
```
4. Wait for the module to be loaded. *This may take a few seconds.*
<pre class="code-block bc-output level-1 mt-">[abadacz@nova23-1 ~]$ <span class="c-gray">module load python/3.9.16-yukabfp</span>
[abadacz@nova23-1 ~]$
</pre>
5. Type the following command to verify that the correct version of Python is being used:
```bash
python --version
```
*This should display the version number of the Python interpreter that you just loaded.*
<pre class="code-block bc-output level-1 mt-">[abadacz@nova23-1 ~]$ <span class="c-gray">python --version</span>
Python 3.9.16
</pre>
</details>

<base class="mt">
<div class="protip before" data-before="That's it!" markdown="1">
Once Python is installed on your computer, you can start using it to write and execute Python code.
</div>

<div class="more" markdown="1">
See the following sections [Python Shell](#python-shell) and [Python IDLE](#python-idle) to get started with Python on your machine.
</div>


# Python Shell

Python has a built-in shell with self-interpreter that can be **activated directly in the terminal** once Python is installed on a computing machine. It provides an **interactive environment** for executing Python commands by allowing the user to **enter Python code one line at a time** and immediately execute it to see the results of each command. The Python shell is useful for experimenting with Python syntax, performing quick calculations, and testing out small code snippets. It is a **convenient way to quickly test out Python code** and experiment with new ideas. It's especially **useful for beginners** who are just learning Python and want to get a feel for how the language works.

## Start a Python Shell

To start the Python shell, you need to have Python installed on your computer. If you haven't already done so, go back to section [First, install Python](#first-install-python) to make up for this step.

Once you have installed Python, you can start the Python shell by following these steps:

1. Open the terminal or command prompt on your computer.

2. Type `python` or `python3`, depending on your system's configuration, and press `Enter` on your keyboard.
```bash
python3
```

3. The Python Shell will start and display a prompt (`>>>`) where you can start entering Python commands. <br>
<img width="1000" src="{{ images_path }}/02_python-shell.gif">

4. Once the Python shell is running, you can write and execute Python code directly in the shell without the need to create script files. For example, you can use the shell to perform simple calculations, experiment with Python syntax, or test out small code snippets. <base class="mb">
Let's start with using the `print()` function to display the <i>"Hello, world!"</i> welcome messeage on the screen:
```python
print("Hello, world!")
```
![02_python-shell.png]({{ images_path }}/02_python-shell.png)
Now, you can try using the Python shell to perform a simple calculation:
```python
a = 10
b = 5
c = a + b
print(c)
```
*In this example, we created three variables (a, b, c) in the Python shell and assigned the values using the* `=` *operator. We then used the* `+` *operator to add a and b together and assigned the result to the variable c. Finally, we printed the value of c to the console using the* `print()` *function.*

5. To terminate the Python shell press `CTRL + D` or type `exit()` or `quit()` at the prompt and press Enter. *You will automatically return to your basic shell (e.g., Bash).*
<pre class="code-block bc-output level-1 mt-"><span class="c-gray">&gt;&gt;&gt;</span> exit()
<b style="color: cyan;">abadacz</b>@MacBook<span class="c-gray">(bash):</span><b class="c-good">~</b><span class="c-bad">$</span>
</pre>

# Python IDLE

Integrated Development and Learning Environment (IDLE) is the default Python environment that **comes with the standard installation of Python**. It is a simple and **lightweight environment** that provides basic features such as syntax highlighting, code completion, and debugging.<br>
Python IDLE is a **useful tool for learning and working with Python**, supporting the user with:

* **interactive mode** <br>
*Python IDLE allows you to run Python code interactively, which means you can enter code directly into the shell and see the results immediately. It can be very helpful when you're learning how to coding in Python.*

* **code editor** <br>
*Python IDLE also includes a code editor that allows you to write and edit Python code in a more structured way than in interactive mode. The editor provides features such as syntax highlighting, indentation, and auto-completion to make it easier to write and read the code.*

* **debugging** <br>
*Python IDLE includes a debugger that allows you to step through your code line by line and inspect variables as you go. This can be very helpful when you're trying to track down a bug or understand how your code is working.*

* **help and documentation** <br>
*Python IDLE provides access to Python's built-in help system, which allows you to look up information about Python functions, modules, and other features. This can be very helpful when you're trying to learn how to use a new feature or library in Python.*

<div class="protip" markdown="1">
If you're just getting started with Python, I would encourage you to give `Python IDLE` a try before the more advanced IDEs and see how it can help you on your learning journey. Once you have Python installed on your local machine, you can **use IDLE offline** any time without further configuration.
</div>


## Launch an IDLE

Python IDLE can be launched from the command line or from your computer's applications menu. If you haven't installed Python yet, go back to section [First, install Python](#first-install-python) to make up for this step.

To launch the Python IDLE from the terminal window, you can follow these steps:

1. Open the terminal or command prompt on your computer.

2. Type `idle` or `idle3`, depending on your system's configuration, and press `Enter`. <br>
*Start typing `idle`, then press the `TAB` key twice to display available IDLE variants.*
<img width="1000" src="{{ images_path }}/02_python-idle.gif">

3. The Python IDLE will open in a separate window, providing you graphical user interface (GUI) with a <button class="btn">menu bar</button> on the top.
*By default, the first view in the IDLE is a Python Shell, which works the same as the interactive Python shell started directly in the terminal.*

4. You can use the Python IDLE to create, edit, and run Python code.
* To create a **new Python file** in IDLE, click `File > New File`, or press `Ctrl+N` on Windows or `Command+N` on Mac.
![02_python-idle.png]({{ images_path }}/02_python-idle.png)
* To **save your code**, click `File > Save`, or press `Ctrl+S` on Windows or `Command+S` on Mac. *You can customize the file name and saving location in the pop-up dialog box.*
* You can **run code in IDLE** by clicking `Run > Run Module`, or pressing `F5` on the keyboard. *The output will be displayed in the Python shell at the bottom of the IDLE window.*
![02_python-idle2.png]({{ images_path }}/02_python-idle2.png)

<base class="mt">
<div class="more" markdown="1">
It is highly recommended to learn more about the basics of programming in Python by working through the hands-on tutorials provided in section {% include target_link href=531 text="05. Introduction to Programming / Introduction to Python programming" %}. These tutorials cover topics such as variables, data types, operators, control flow statements, functions, and more.
</div>
