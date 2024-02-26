---
title: "Local Python setup on your computing machine"
note: (installation needed)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [04. Development Environment](00-DevelopmentEnvironment-LandingPage.md) / [2. Python programming environment(s)](02-python-programming-environment.md) / **2.3 Python Setup on your computing machine**

---


# Introduction

In this section, we will cover the process of setting up Python on a local machine. Python is a popular programming language used for various purposes such as data analysis, machine learning, web development, and more. Setting up Python on your local machine is an essential step for getting started with Python programming, and we will provide a step-by-step guide to help you through the process.

**More information from external sources**

* Python official website: <a href="https://www.python.org" target="_blank">https://www.python.org  ⤴</a>
* Wikipedia: <a href="https://en.wikipedia.org/wiki/Python_(programming_language" target="_blank">Python (programming language  ⤴</a>
* <a href="https://github.com/topics/python" target="_blank">List of Python projects on GitHub  ⤴</a>

**Python-related sections in this workbook:**

* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment" target="_blank">Python Programming Environment(s)  ⤴</a>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a>
* <a href="https://datascience.101workbook.org/07-DataParsing/02-DATA-MANIPULATION/02-PYTHON/01-manipulate-data-with-python" target="_blank">Manipulating Text Files with Python  ⤴</a>
* <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/02-PYTHON/01-interactive-graphing-with-python" target="_blank">Plotly-Dash: Data Processing & Interactive Plotting with Python  ⤴</a>

**Sections in this tutorial:**

1. [Get Python on your local machine](#1-get-python-on-your-local-machine)
2. [Pick an Integrated Development Environment](#2-select-development-environment)
3. [Pick a Python Virtual Environment Manager](#3-manage-python-environments)
4. [Instal Python Libraries](#4-instal-python-libraries)


## *Tips & Warnings*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
For installing Python either pick Anaconda or local install via package manager. Try not to mix install methods or you will have conflict errors and may need to uninstall and reinstall python entirely.</span>
</div>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Due to incompatabilities between certain python libraries, it is highly recommended to manage python packages in virtual environments (<b>conda</b> , <b>venv</b>, or equivalent), one environment per project.
</span>
</div>

---

# 1. Get Python locally

There are several ways to install Python on a local machine, depending on the operating system and the specific version of Python you want to use. Here are some of the most common options:

**A. Downloading the installer from the official Python website**

This option allows you to download and install the latest version of Python directly from the official Python website. You can choose between the different versions of Python, including the latest stable version, as well as older versions. <br>
**Best for:** Windows, macOS, Linux

**B. Using a package manager**

Many Linux distributions come with Python pre-installed, but if you need a different version or want to install Python on a different operating system, you can use a package manager. For example, on macOS, you can use `brew`, and on Ubuntu, you can use `apt-get`. <br>
**Best for:** Linux, macOS

**C. Using an Integrated Development Environment (IDE)**

Some integrated development environments (IDEs) and text editors come with Python pre-installed or have built-in support for Python. For example, Anaconda and PyCharm are popular Python IDEs that come with Python pre-installed. <br>
**Best for:** Windows, macOS, Linux


**PROS & CONS**

| A. Official Installer | B. Package Manager | C. IDE, e.g., Anaconda |
|-----------------------|--------------------|---------------------|
| ✓ Easy to use and install | ✓ Makes installation and upgrading of Python easier | ✓ Comes with pre-installed Python and additional packages and tools |
| ✓ Allows installation of any Python version | ✓ Usually comes with additional packages and tools  | ✓ Allows easy management of virtual environments |
| ✓ Works on all operating systems | ✓ Handles dependencies automatically | ✓ Comes with an integrated development environment (IDE) |
| ✗ May require manual configuration for some systems | ✗ May not have the latest version of Python | ✗ May not have the latest version of Python |
| ✗ May not include additional packages and tools | ✗ May require additional configuration to work properly | ✗ May require additional configuration to work properly |


^ Anaconda comes with an IDE that provides easier entry point *(recommended for Windows)*.<br>
^ Local Install is more consistent for intermediate programmers.

### *Which installation on my Operating System?*

| Windows | macOS | Linux |
|---------|-------|-------|
| The official installer is the easiest option for Windows users, as it works on all versions of Windows and requires no additional configuration. | MacOS comes with a pre-installed version of Python, but it may not be the latest version. | The official installer also works on Linux and is a good option for users who want to install a specific version of Python. |
| Users who prefer to use a package manager or an IDE such as Anaconda can do so as well. | Users who want to use the latest version of Python can use the official installer or an IDE such as Anaconda. | Users who prefer a graphical interface (GUI)may find an IDE such as Anaconda easier to use. |
| package manager option unavailable | Users who prefer to use a package manager can use Homebrew. | Linux users may prefer to use a package manager via command line (CLI) such as `apt-get` or `yum` to install Python. |
| **recommended:** Anaconda | **recommended:** package manager | **recommended:** package manager |


## **A.** Official Installer

If you prefer a pure python install (**only command line and without IDE**), install the latest version of Python from their website - <a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/  ⤴</a>. The development environment can be selected and installed separately later.

*Follow the instructions for your operating system to install Python using an official installer.*

<details><summary><b>WINDOWS</b> <i>(via GUI, recommended)</i></summary>

<br>
<b>1.</b> Go to the official Python website at <a href="https://www.python.org/downloads/windows/" target="_blank">https://www.python.org/downloads/windows/  ⤴</a>. <br><br>
<b>2.</b> Scroll down to the <b><i>Stable Releases</i></b> section and click on the: <br>
<li><i>"Download Windows installer (64-bit)"</i> link if you have a 64-bit version of Windows, or</li>
<li><i>"Download Windows installer (32-bit)"</i> link if you have a 32-bit version of Windows.</li> <br>
<b>3.</b> Run the downloaded executable (`EXE`) file and follow the instructions in the installation wizard.
<br><br>
</details>

<details><summary><b>macOS</b> <i>(via GUI, recommended)</i></summary>

<br>
<b>1.</b> Go to the official Python website at <a href="https://www.python.org/downloads/macos/" target="_blank">https://www.python.org/downloads/macos/  ⤴</a>. <br><br>
<b>2.</b> Scroll down to the <b><i>Stable Releases</i></b> section and click on the <i>"Download macOS 64-bit installer"</i>. <br><br>
<b>3.</b> Run the downloaded `PKG` file and follow the instructions in the installation wizard. <br><br>
</details>

<details><summary><b>Linux</b> <i>(via CLI, not recommended)</i></summary>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;"> The installation process on Linux can vary depending on the distribution you're using. </span>
</div>
<b>Here are some general steps for Ubuntu:</b><br>
<b>1.</b> Open the terminal.
<b>2.</b> Update your package list:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update
</code><br>
<b>3.</b> Install the required packages for Python:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev
</code><br>
<b>4.</b> Download the Python source code from the official website at <a href="https://www.python.org/downloads/source/" target="_blank">https://www.python.org/downloads/source/  ⤴</a>.<br><br>
<b>5.</b> Extract the downloaded archive. <i>Replace "x.x.x" with the version number you downloaded.</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
tar -xf Python-x.x.x.tgz <br>
cd Python-x.x.x
</code><br>
<b>6.</b> Configure the build options. <i>This will build a version of Python with optimizations enabled.</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./configure --enable-optimizations
</code><br>
<b>7.</b> Build and install Python. <i>Replace "N" with the number of cores in your CPU to speed up the build process.</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
make -j N <br>
sudo make install
</code><br>
</details>


## **B.** via Package Manager

When you install Python using a package manager, you are getting the core Python programming language, the Python interpreter, and its standard library, but you will still need to separately install an IDE or other tools if you want to develop Python code using a more feature-rich development environment.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">Using a package manager from the command line allows you to easily install, update, and remove packages, including Python and its dependencies. </span>
</div><br>

<b>WINDOWS</b> <i>(not available)</i>

<details><summary><b>macOS</b> <i>(via CLI, recommended)</i></summary>

<br>
<b>Homebrew is a popular package manager for MacOS that can be used to install Python.</b><br><br>
<b>0.</b> Install Homebrew, if needed: <br>
<i>Install Homebrew by opening a terminal and running the following command:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
</code><br>
<b>1.</b> Once Homebrew is installed, run the following command to update the package list:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew update
</code><br>
<b>2.</b> To install the latest version of Python available in Homebrew use the following command:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install python
</code><br>
<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If you want to install a specific version of Python, you can use the following command instead:
</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install python@3.9
</code><br>
<i>Replace "3.9" with the version number you want to install.</i>
<br>
</div><br>
</details>


<details><summary><b>Linux</b> <i>(via CLI, recommended)</i></summary>

<br>
<b>Ubuntu</b> and <b>Debian</b> both use the apt package manager, which can be used to install Python. <br><br>
<b>Here's how to install Python using apt:</b> <br><br>
<b>1.</b> Open the terminal and run the following command to update the package list:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt update
</code><br>
<b>2.</b> Install Python using the following command:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt install python3
</code>
<i>This will install the latest version of Python 3 available in the Ubuntu/Debian repositories.</i> <br><br>
If you want to install a specific version of Python, you can use the following command instead:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt install python3.9
</code><br>
</details>


## **C.** via Anaconda

Anaconda is an open-source distribution of Python that includes the Conda package and environment management system, along with a curated collection of popular Python packages and tools commonly used in data science. It provides a convenient way for users to install and manage Python packages, libraries, and dependencies for data analysis, machine learning, and other scientific computing tasks.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Anaconda is a popular choice for data scientists, researchers, and developers who work with large datasets and complex computations. It provides a streamlined and consistent way to set up and manage Python environments and packages, making it easier to get started with data analysis and scientific computing.
</span>
</div><br>

**INSTALL ANACONDA** <a href="https://www.anaconda.com/products/distribution#Downloads" target="_blank">https://www.anaconda.com/products/distribution#Downloads  ⤴</a>

<details><summary><b>Windows</b> <i>(recommended)</i></summary>

1. Download the Anaconda installer for Windows from the Anaconda website: <a href="https://www.anaconda.com/products/individual#windows" target="_blank">https://www.anaconda.com/products/individual#windows  ⤴</a> <br>
2. Once the installer is downloaded, click on it to start the installation process. <i>Follow the prompts in the installer to choose the installation location, select any additional options or packages you would like to install, and complete the installation.</i> <br>
3. After the installation is complete, open the <b>Anaconda Navigator</b> application from the <i>Start menu</i>. <br>
4. From the Anaconda Navigator, you can <b>create a new Python environment</b> by clicking on the <b>"Environments" tab</b> and then clicking the <b>"Create"</b> button. Choose the name and Python version for the environment, and then click <b>"Create"</b> to create the new environment. <br>
5. You can now install any additional packages or libraries you need using the <b>"Packages" tab</b> in the Anaconda Navigator, or by running the <code>conda install</code> command in a terminal or command prompt.
</details>

<details><summary><b>macOS</b></summary>

1. Download the Anaconda installer for macOS from the Anaconda website: <a href="https://www.anaconda.com/products/individual#macos" target="_blank">https://www.anaconda.com/products/individual#macos  ⤴</a> <br>
2. Once the installer is downloaded, open the <code>.dmg</code> file and run the Anaconda installer application. <br>
3. Follow the prompts in the installer to choose the installation location, select any additional options or packages you would like to install, and complete the installation. <br>
4. After the installation is complete, open the <bAnaconda Navigator</b> application from the <i>Applications folder</i>. <br>
5. From the Anaconda Navigator, you can create a new Python environment by clicking on the <b>"Environments" tab</b> and then clicking the <b>"Create"</b> button. Choose the name and Python version for the environment, and then click <b>"Create"</b> to create the new environment. <br>
6. You can now install any additional packages or libraries you need using the <b>"Packages" tab</b> in the Anaconda Navigator, or by running the <code>conda install</code> command in a terminal or command prompt.
</details>

<details><summary><b>Linux</b></summary>

1. Download the Anaconda installer for Linux from the Anaconda website: <a href="https://www.anaconda.com/products/individual#linux" target="_blank">https://www.anaconda.com/products/individual#linux  ⤴</a><br>
<i>For example using wget command:</i><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
wget https://repo.anaconda.com/archive/Anaconda3-2022.10-Linux-x86_64.sh
</code><br>
2. Open a terminal and navigate to the directory where the Anaconda installer was downloaded. <br>
3. Run the following command to make the installer executable:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
chmod +x Anaconda*.sh
</code><br>
4. Run the Anaconda installer by running the following command, replacing <i>{version}</i> with the version number of the Anaconda installer:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
./Anaconda{version}.sh
</code><br>
5. Follow the prompts in the installer to choose the installation location, select any additional options or packages you would like to install, and complete the installation. <br>
6. After the installation is complete, open a new terminal window to activate the base environment by running the command:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
conda activate base
</code><br>
7. From the terminal, you can create a new Python environment by running the following command, replacing <i>"myenv"</i> with the name you would like to give your environment.
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
conda create --name myenv python=3.9
</code><br>
8. Activate the new environment by running the command and replacing <i>"myenv"</i> with the name of your environment:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
conda activate myenv
</code><br>
9. You can now install any additional packages or libraries you need using the <code>conda</code> install command.
</details><br>

![02_python-anaconda.png]({{ images_path }}/02_python-anaconda.png)

Anaconda provides a **graphical user interface (GUI) called Anaconda Navigator**, which makes it easier to manage environments and packages using a point-and-click interface.
![Anaconda Dashboard]({{ images_path }}/03-Anaconda.png)

---

# 2. Select Development Environment

Choosing the right development environment is essential for coding in Python as it can significantly impact the productivity and efficiency of the developer.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
An Integrated Development Environment (<b>IDE</b>) is a software tool that provides a comprehensive set of features, including: <br> code editing, debugging, testing, and deployment.
</span>
</div><br>


Here are some of the reasons **why choosing the right development environment is important**:

| FEATURE | EXPLANATION |
|---------|-------------|
|**code editing**|<i>A good development environment should provide a code editor that supports syntax highlighting, auto-completion, and code formatting. This can help to write clean, readable, and error-free code.</i>|
|**debugging**|<i>Debugging is an essential part of the development process. A development environment should have a built-in debugger that allows you to step through the code and identify errors and bugs.</i>|
|**testing**|<i>A development environment should have tools for unit testing, integration testing, and performance testing. This helps to ensure that the code is working as expected and meets the requirements.</i>|
|**version control**|<i>Having built-in version control (like Git) in a development environment provides benefits such as tracking changes, enabling collaboration, documenting changes, managing dependencies, and aiding project management.</i>|
|**collaboration**|<i>A development environment should support collaboration with other developers. This includes features like version control, code review, and collaboration tools.</i>|

Choosing the **development environment for Python** projects depends on personal preferences, operating systems, and the specific requirements of the project. Some of the best choices include:
* <a href="https://www.jetbrains.com/pycharm/" target="_blank"><b>PyCharm</b>  ⤴</a> is a powerful and popular development environment for Python <br>
<span style="color: #ff3870;font-weight: 500;">Learn more from the hands-on tutorial: <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02E-python-pycharm-ide" target="_blank">PyCharm: IDE for Professional Python Developers  ⤴</a></i></span>

* <a href="https://code.visualstudio.com/" target="_blank"><b>Visual Studio Code</b> (VSC)  ⤴</a> is a lightweight and versatile code editor that can be used for Python development <br>
<span style="color: #ff3870;font-weight: 500;">Learn more from the hands-on tutorial: <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">Visual Studio Code: Multi-language Integrated DE  ⤴</a></i></span>

* <a href="https://jupyter.org/" target="_blank"><b>Jupyter Notebook</b>  ⤴</a> is a web-based development environment that is ideal for Python-based data science <br>
<span style="color: #ff3870;font-weight: 500;">Learn more from the hands-on tutorial: <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01B-jupyter-basics" target="_blank">Jupyter: Interactive Web-Based Multi-Kernel DE  ⤴</a></i></span><br>
  * <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01B-tutorial-jupyter-lab" target="_blank">Getting Started with JupyterLab on a local machine  ⤴</a></i><br>
  * <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01B-tutorial-jupyter-notebook" target="_blank">Getting Started with Jupyter Notebook on HPC systems  ⤴</a></i><br>
  * <i><a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02D-python-jupyter-notebook" target="_blank">Jupyter Lab: create an interactive Python notebook  ⤴</a></i>


* <a href="https://replit.com/" target="_blank"><b>Repl.it</b>  ⤴</a> is an online development environment that supports multiple programming languages, including Python. **Note:** *It requires to sign up, a free plan includes 0.5 GB of account storage.*

* <a href="https://www.vim.org/" target="_blank"><b>Vim</b>  ⤴</a> is a highly customizable and powerful in-terminal code editor <br>
<span style="color: #ff3870;font-weight: 500;">Learn more from the hands-on tutorial: <i><a href="https://datascience.101workbook.org/02-IntroToCommandLine/02B-text-files-editors" target="_blank">Command Line Text Files Editors: nano, vim  ⤴</a></i></span>

**All of them can be used in Windows, macOS, and Linux.** <br>
Follow a discussion on Python IDE - <a href="https://realpython.com/python-ides-code-editors-guide/" target="_blank">https://realpython.com/python-ides-code-editors-guide/  ⤴</a>

---

# 3. Manage Python environments

**Python environments** are an important aspect of Python development, as they allow developers to **isolate different versions of Python** and related sets of Python packages and dependencies. This is particularly important when working on multiple projects, as it can help avoid conflicts and ensure that each project has access to the specific dependencies it requires.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">In Python development, an environment refers to a specific instance of a Python interpreter along with its associated installed packages and dependencies.</span>
</div><br>

There are several tools available for managing Python environments, including:
* isolated environments *(via environment management)*:
  * <b><a href="https://docs.conda.io/en/latest/" target="_blank">Conda  ⤴</a></b> ***(recommended)*** environment manager *(by default included in Anaconda)*
* virtual environments *(via virtualization)*:
  * <b><a href="https://docs.python.org/3/library/venv.html" target="_blank">venv  ⤴</a></b> environment manager *(by default comes with Python 3)*
  * <b><a href="https://virtualenv.pypa.io/en/latest/" target="_blank">virtualenv  ⤴</a></b> environment manager *(third-party, compatible with both Python 2 and 3)*
* isolated environments *(via containerization)*
  * <b><a href="https://www.docker.com/" target="_blank">Docker  ⤴</a></b> containerization platform


| FEATURE          | Conda | venv | Docker |
|------------------|-------|------|--------|
|Type of isolation |Environment|Environment|Container|
|Technology        |Package & environment management |Virtualization|Containerization|
|Complexity        |Medium | Low  | High   |
|ENV Creation      |Simple command-line interface|Built-in with Python (command-line)|Requires building Docker image|
|ENV Management    |  Yes  | No   | Yes    |
|Package Management|Built-in package management system|`pip`-based package management|Built-in package management system (with limitations)|
|Portability       |  Yes  | Yes  | Yes    |
|Platform independence |Cross-platform (Windows, Linux, macOS)|Cross-platform (Windows, Linux, macOS)|Cross-platform (with limitations)|
|Dependency resolution| Automatic | Manual | Automatic |
|Version control      | Built-in  | No built-in | Based on Docker images |


<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><b>Do not mix python environment managers. Pick one and stick with it.</b><br>
<span style="font-style:italic;">
It's generally not a good idea to mix Python environment managers because different environment managers can have different ways of managing packages and dependencies, which can lead to conflicts and inconsistencies in your Python environment.
</span>
</div>


## Conda

Conda is an open-source package management system and environment management system for installing and managing packages and dependencies in Python and other programming languages. It was developed by Anaconda, Inc. and is available as part of the Anaconda distribution, but it can also be installed separately.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Conda allows users to create and <b>manage isolated environments for different projects</b> or workflows, each with its own set of packages and dependencies. This helps to ensure that each project has the specific versions of packages it needs, without conflicting with other projects or the base system.
</span>
</div><br>

**Install Conda**

<span style="color: #ff3870;font-weight: 500;">When you [install Anaconda](#via-anaconda), Conda is installed alongside it as part of the distribution.</span><br>
<b>However, if you choose to do a "pure Python" installation via package manager or official installer, Conda will not be pre-installed.</b> In this case, you will need to install Conda separately if you want to use it as your package manager for managing Python environments.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
The fastest way to obtain conda is to <b>install Miniconda</b>, a mini version of Anaconda that includes only conda and its dependencies. If you prefer to have conda plus over 7,500 open-source packages, install Anaconda. [source: <a href="https://conda.io/projects/conda/en/latest/user-guide/install/index.html#installation" target="_blank">https://conda.io/projects/conda  ⤴</a>]
</span>
</div><br>

**Practical Guides**<br>
Follow the up-to-date installation guide for **Miniconda** from the official documentation provided at <a href="https://conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">https://conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation  ⤴</a>.

You can also follow a step by step guide for installing **Conda Miniforge3 for both ARM and Intel chips** on your MacBook Pro in the tutorial <a href="https://datascience.101workbook.org/03-SetUpComputingMachine/03A-tutorial-installations-on-mac#-install-conda" target="_blank">Installations on MacBook Pro/Install Conda  ⤴</a>.


Once you have installed Conda, you can use it to create and manage Python environments, install packages, and more.

**Create & Manage Conda environment**

**CREATE ENV:** You can create a new conda environment like so:
```
conda create --name my_env
```
*This will create a new environment called "myenv".*

**LIST ALL ENVs:** You can check the list of all available environments by typing:
```
conda info -e
```

**ACTIVATE ENV:** You can activate the selected environment by running:
```
conda activate my_env
```
*Once the environment is activated, any packages you install using conda will be installed only in that environment.*

**INSTALL PACKAGE:** To install Python packages, *(e.g., Pandas)* using `conda`, you can run the following command in your terminal:
```
conda install pandas
```

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can also specify the packages that you want to install all-in-one step during the environment creation process:
</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
conda create --name my_env python=3.9 pandas numpy scipy <br>
conda activate my_env
</code><br>
<i>To install a <b>specific version of a package</b> with Conda, you can use the following command:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
conda install numpy=1.2.3
</code><br>
<i>This will install version 1.2.3 of the "numpy" package into your current Conda environment.</i>
</div><br>

It is possible to **install packages with** `pip` in a current Conda environment. You first need to activate the environment in your command prompt or terminal. Then, you can use `pip` to install packages as you normally would.

*For example, to install the "numpy" package with pip, you can use the following command:*
```
pip install numpy
```
or
```
pip install numpy==1.2.3
```
*This will install the latest or selected (here: 1.2.3) version of the "numpy" package into your current Python environment.*

**DEACTIVATE ENV:** To deactivate a Conda environment, you can use the following command:
```
conda deactivate
```
*This will deactivate the current active Conda environment and return you to the* `base` *environment or your system's default Python environment.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It's important to note that <b>you should always deactivate your Conda environment</b> before switching to another environment or exiting your terminal or command prompt. This ensures that any changes or updates you have made to the environment are saved and that you don't accidentally install packages to the wrong environment.
</span>
</div>

<span style="color: #ff3870;font-weight: 500;">Learn more about CONDA commands from the <a href="https://kapeli.com/cheat_sheets/Conda.docset/Contents/Resources/Documents/index" target="_blank">Conda CheatSheet  ⤴</a></span>.


## venv

Virtual environments are a useful tool for Python developers to manage dependencies and isolate project environments. `venv` **is the default virtual environment module that comes with Python 3**. It allows you to create and manage virtual environments directly from the command line.

Here is a useful resource for learning more about the default virtual environments in Python, <a href="https://docs.python.org/3/library/venv.html" target="_blank">https://docs.python.org/3/library/venv.html  ⤴</a> *(source: official Python documentation)*

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
When you create a <b>virtual environment with venv, it is associated with the project directory</b> where you created it. Specifically, the virtual environment is created in a subdirectory of your project directory called env, which is where all the environment-specific files are stored. This allows you to easily manage dependencies and packages for each project separately.
</span>
</div><br>

**Install venv**

`venv` comes installed with Python 3, so you don't need to install anything extra to use it. <br> *However, if you're using an older version of Python or if venv is not available for some reason, you can install it with* `pip`:
```
pip install virtualenv
```

**Create venv environment**

**CREATE ENV:** To create a new virtual environment with `venv`, **navigate to your project directory** and run the following command:
```
python3 -m venv env
```
*This will create a new virtual environment in a directory called "env". You can replace "env" with any name you like.*

**LIST ALL ENVs:** Unfortunately, `venv` does not provide a built-in command to list all virtual environments created using it.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
If you choose to create the virtual environment in a different location than a root of a project or with a different name than "env", you'll need to remember that location/name and use it to activate the environment.
</span>
</div><br>

**ACTIVATE ENV:** To activate the virtual environment, run the following command:
```
source env/bin/activate
```
*This will activate the virtual environment and change your prompt to indicate that you are now working inside the environment. You should see something like* `(env)` *at the beginning of your prompt.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
You need to <b>remember the path of the virtual environment</b> that you created for a given project if you want to activate and use that environment in the future. By default, venv creates the virtual environment in a subdirectory of your project root directory called <b>env</b>, so if you use this default location, you can always navigate to your project directory and activate the environment with the following command:</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
source env/bin/activate
</code>
</div><br>

**INSTALL PACKAGE:** With the virtual environment activated, you can now install packages using `pip`, just like you would normally.

*For example, to install the "numpy" package, run the following command:*
```
pip install numpy
```

**DEACTIVATE ENV:** To deactivate the virtual environment, simply run the following command:
```
deactivate
```


## Docker

Docker is a containerization platform that allows you to package up an entire application, including its dependencies, into a single container that can be run on any system that has Docker installed.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Docker can be particularly useful when working on projects that have complex dependencies or that need to be run in specific environments.
</span>
</div><br>

**CREATE A DOCKER CONTAINER** <br>
You can **create a Docker container for your Python application** by creating a *Dockerfile* that specifies the dependencies you need and how to run your application.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
A Dockerfile is a text file that <b>contains a series of instructions for building a Docker image</b>. The Dockerfile specifies the base image to use, any additional software or dependencies to install, and any configuration or setup required for the container.
</span>
</div><br>

The Docker engine reads the Dockerfile and creates an image based on the instructions it contains. A Dockerfile typically starts with a `FROM` instruction, which specifies the base image to use for the container. Other instructions, such as `WORKDIR`, `COPY`, `RUN`, `ENV`, `EXPOSE`, and `CMD`, are used to configure the environment, install dependencies, and define the command to run when the container starts.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
By convention, the file is always named <b>Dockerfile</b> (with a capital "D" and no file extension), and it must be placed in the root directory of the "build context". The build context is the set of files and directories used to build the Docker image
</span>
</div><br>

You can create a Dockerfile using a text editor like a command-line `nano` or `Visual Studio Code` with a graphical user interface. *For example, here's a* `Dockerfile` *template:*
```
# Use a base image (in this case, Python 3.9)
FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any required dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Set any environment variables
ENV MY_VAR=my_value

# Expose a port for the container to listen on
EXPOSE 8000

# Define a command to run when the container starts
CMD ["python", "app.py"]
```
*This Dockerfile starts with a base image of Python 3.9, sets the working directory to* `/app`, *copies the* `requirements.txt` *file into the container, installs the packages listed in* `requirements.txt`, *copies the rest of the application code into the container, and runs* `app.py` *using the python command.*

Once you've created the Dockerfile, you can build the container using the `docker build` command, like so:
```
docker build -t myapp .
```
*This will create a Docker image called* `myapp` *that you can then run using the* `docker run` *command.*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If you want to use a different name for the <b>Dockerfile</b>, you can specify the filename using the <b>-f</b> or <b>--file</b> option when you run the <b>docker build</b> command. <br><br>
For example, if your Dockerfile is named MyDockerfile, you can use the following command to build the image:
</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
docker build -t myimage:latest -f MyDockerfile .
</code>
<i>This command specifies that the Dockerfile is named "MyDockerfile" and is located in the current directory (.), and it sets the name of the resulting image to "myimage" with the latest tag.</i>
</div><br>

<span style="color: #ff3870;font-weight: 500;">Learn more about Docker containers and Docker graphical user interface (GUI) from the practical tutorial <a href="https://datascience.101workbook.org/06-IntroToHPC/07-CONTAINERS/02-DOCKER/01-docker-basics" target="_blank">Docker basics  ⤴</a> available in the <a href="https://datascience.101workbook.org/06-IntroToHPC/07-CONTAINERS/00-introduction-to-containers" target="_blank">Introduction to Containers  ⤴</a> section of this workbook.</span>  

---

### *Manage Project Dependencies*

Managing dependencies is an important part of working with Python projects, and each of the tools *(Conda, venv, and Docker)* has its own approach to managing dependencies.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It is highly recommended to create a <b>requirements file</b> that is a common way to manage dependencies for Python projects, regardless of the tool you use. The file should list all of the packages required for the project, along with their version numbers, so that others can easily <b>install the same dependencies on another machine</b>.
</span>
</div>

<br>The **requirements file** can be created: with
* the `conda env export` command for conda environments,
* the `pip freeze` command for venv environments,
* or by manually creating a `requirements.txt` file for Docker environments.

---

**CONDA** <br>
When working with `conda`, you can create a **YAML file** that lists all of the packages in your environment, including the version numbers. This file can then be used to recreate the environment on another machine or to share with others who need to use the same dependencies.

To create the YAML file, activate the environment you want to export and run the following command:
```
conda env export > environment.yml
```
*This will create a file named "environment.yml" in the current directory that contains the environment's name, a list of channels used to install packages, and a list of packages with their versions.*

---

**VENV** <br>
When working with `venv`, you can create a **requirements.txt** file that lists all of the packages installed in the virtual environment, including their version numbers.

To create the file, activate the environment you want to export and run the following command:
```
pip freeze > requirements.txt
```
*This will create a file named "requirements.txt" in the current directory that contains a list of packages with their versions.*

---

**DOCKER** <br>
When working with `Docker`, you can include a **requirements.txt** file in your project directory and copy it to the Docker container during the build process. To do this, **include the following lines in your Dockerfile**:
```
COPY requirements.txt .

RUN pip install -r requirements.txt
```
*This will copy the "requirements.txt" file from the project directory to the Docker build context. Then, it will install all of the packages listed in the "requirements.txt" file in the Docker container.*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
An example "requirements.txt" file for a Docker environment might look something like this:
</span>
<code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
flask==2.1.0 <br>
pandas==1.3.4 <br>
numpy==1.21.3 <br>
matplotlib==3.4.3
</code>
<i>In this example, the file lists four Python packages (Flask, Pandas, NumPy, and Matplotlib) along with their version numbers. These are just example packages, but you would list the packages that your project requires in the file.</i>
</div><br>

---

# 4. Instal Python Libraries

Python pre-defined functions are made available as libraries *(also referred to as packages)* which need to be installed from somewhere. Python libraries can be indexed on CRAN, bioconductor and GitHub. What's the difference between installing from these locations?

**1.** **PyPI** (Python Package Index) <br>
This is the default package repository for Python packages. You can use the `pip` package manager to install packages from PyPI. <br>
<i>For example, you can install the <b>requests</b> package by running:</i>
```
pip install requests
```

<br>

**2.** **Conda** <br>
Conda is a package manager that is commonly used for scientific computing in Python. You can use the `conda` command to install packages from the Anaconda distribution or the default Conda package repository. <i>For example, you can install the <b>numpy</b> package by running:</i>
```
conda install numpy
```
With `conda` you can also install packages from a specific channels *(repository of packages)* other than the defaults. To use the `conda install -c` command, you need to specify the <b>channel name</b> and the <b>package name</b>. <i>For example, you can install the <b>biopython</b> package from the bioconda channel by running:</i>
```
conda install -c bioconda biopython
```
**The popular Conda channels for Python packages include:**
* <a href="https://anaconda.org/anaconda" target="_blank">Anaconda  ⤴</a> &emsp; &emsp; `conda install -c anaconda <package>`
* <a href="https://bioconda.github.io/" target="_blank">bioconda  ⤴</a> &emsp;&emsp; &nbsp; `conda install -c bioconda <package>`
* <a href="https://conda-forge.org/" target="_blank">Conda Forge  ⤴</a> &emsp; `conda install -c conda-forge <package>`
* <a href="https://anaconda.org/pytorch" target="_blank">pytorch  ⤴</a> &emsp;&emsp; &emsp; `conda install -c pytorch <package>`
* <a href="https://anaconda.org/nvidia" target="_blank">NVIDIA  ⤴</a> &emsp; &emsp; &emsp; `conda install -c nvidia <package>`
* <a href="https://anaconda.org/intel" target="_blank">Intel  ⤴</a> &emsp; &emsp; &emsp; &emsp; `conda install -c intel <package>`

<br>

**3.** **GitHub python libraries** <br>
Many Python packages are available on GitHub, which is a platform for code hosting and collaboration. To install a Python package from GitHub, you can use the `pip` or `conda` package managers.

Here are the general steps:
1. Clone the GitHub repository to your local machine using `git clone`.
```
git clone https://github.com/username/repository.git
```

2. Navigate to the cloned repository's directory.
```
cd repository
```

3. Build the package:
```
python setup.py sdist
```
Then follow by installing with `pip` or `conda`.

**INSTALL USING PIP:** <br>
```
pip install .
```

**INSTALL USING CONDA:** <br>
```
conda build .
conda install --use-local <package>
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">Note that the package name may be different from the repository name. You can check the <b>"setup.py"</b> file to see the package name.</span>
</div><br>


___
# Further Reading
* [2.3.1 Shell & IDLE: create Python code in a terminal or simple IDE](02B-python-terminal-shell.md)
* [2.3.2 Text editors: create Python code in terminal text files](02C-python-text-editor.md)
* [2.3.3 Jupyter Lab: create an interactive Python notebook](02D-python-jupyter-notebook.md)
* [2.3.4 PyCharm: IDE for Professional Python Developers](02E-python-pycharm-ide.md)


* [3. R programming environment(s)](03-r-programming-environment.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-DevelopmentEnvironment-LandingPage){: .btn  .btn--primary}
[Previous](02A-python-online-jupyter-cola){: .btn  .btn--primary}
[Next](02B-python-terminal-shell){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
