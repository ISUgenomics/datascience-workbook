---
title: "Data wrangling: use ready-made apps"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 731
level: 1
categories: ["data-manipulation", "text-manipulation", "programming", "library-package-module", "virtual-environment", "command-line"]
tags: ["python", "library", "package", "module", "pandas", "numpy", "openpyxl", "package-manager", "conda", "virtual-env", "dependencies", "import"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

This section provides a highly verbose guide for the contents of the [ISUgenomics](https://github.com/ISUgenomics)/<b>[data_wrangling ⤴](https://github.com/ISUgenomics/data_wrangling)</b> GitHub repository.

# data_wrangling repo

The **data_wrangling** repo collects ready-made mini-apps for popular tasks in data processing.<br>
*Most of the apps are <span class="c-alert">developed in Python3</span> programming language.*

In the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo, each application is placed in a separate directory for tidy organization.
<u>Each folder contains:</u>
* the python `script` (.py) of the application
* the example `inputs`
* the documentation in the `README.md` file, including some usage variations *(sample commands that run the program in different option configurations)*

<div class="note" markdown="1">
All the applications have a **built-in set of options** provided as in-line arguments from the command line. Thanks to that, there is **no need to modify source code** by the user (*e.g., to replace input filename or tune params*). Also, it makes the apps more universal, comprehensive, and robust. <base class="mb">
More advanced (multi-purpose or multi-options) applications have a **built-in logger** which reports the analysis progress with the details depending on the **selected verbosity level**.
</div>


## Environment setup

<div class="required" markdown="1">
The applications are developed in Python programming language and **requires importing several libraries** providing useful ready-made functions and objects handling complex data structure. Thus, to have the apps working on your (local or remote) machine, first you have to set up the environment.
</div>

<div class="protip" markdown="1">
Considering you will be using various applications that require different dependencies, you need neat way to manage them. A good choice is <a href="https://docs.conda.io/en/latest/" target="_blank">Conda ⤴</a> environment management system that runs on all: <br>Windows, macOS, and Linux.
<div class="more mb-0" markdown="1">
If you are NOT already using Conda, go to the <a class="t-links" href="223"></a> tutorial for a step-by-step guide on how to set up the environment manager on your target computing machine. If you have a Mac with a dual processor (Arm64 and Intel's x86-64) you can find dedicated setup instructions in section <a class="t-links" href="231" section="#install-developer-libraries">Install basic developer tools</a> of the <a class="t-links" href="231"></a> tutorial.
</div>
</div>

## **Python Setup**

To run the applications collected in the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo, you will need a computing machine with Python installed.

#### <b class="prefix-2"></b>on the HPC cluster
If you want to use the HPC infrastructure, then usually various versions of Python are pre-installed and available to load using `module` system. <br>
Use the following command to display Python versions:
```bash
module avail python
```
Then, load the selected variant:
```bash
module load python/python-3.9
```

#### <b class="prefix-2"></b>on your local machine
The simplest way to check if you have Python already pre-installed on your local machine is to run in the terminal window the following command:
```bash
python --version
```
or
```bash
python3 --version
```
If the returned value will be something like `Python 3.8.9`, you are good to **getting started with data_wrangling** apps. <em class="c-required">Note that python in version 3.x is required.</em><base class="mb">
Otherwise, if you receive an <b class="c-bad">error message</b> `command not found`, **you will need to install Python**. You can make up for this step by following the <button class="btn c-good">HANDS-ON TUTORIAL</button> provided in section <a class="t-links" href="420"></a> / <a class="t-links" href="423"></a>.


## **Conda Env Setup**

<div class="note" markdown="1">
Conda is an open-source package management system and environment management system for installing and managing packages and dependencies in Python and other programming languages. Conda allows users to create and **manage isolated environments for different projects or workflows**, each with its own set of packages and dependencies.
</div>

<div class="more" markdown="1">
...about Conda basics in section <a class="t-links" href="423" section="#3-manage-python-environments">Manage Python environments</a> of the tutorial <a class="t-links" href="423"></a>.
</div>

**Test Conda installation**

To test your Conda configuration, in the terminal window, run the command provided below:
```bash
conda info
```

If the screen displays a message similar to the one in the image below, you are ready to create a new environment.

![Conda info]({{ images_path }}/03-conda_info.png)

Otherwise, if a `command not found` error is thrown back, follow the instructions in the [previous paragraph](#environment-setup) to install Conda correctly.

#### <b class="prefix-2"></b>Create new Conda environment

To create a Conda virtual environment (env), type `conda create` followed by the name [here: *data_wrangling*] of the new env along with the `-n` argument. Further you can provide a list of modules to install. In this case, let's initialize the environment for `python` version 3.9.

```bash
conda create -n data_wrangling python=3.9
```

#### <b class="prefix-2"></b>Activate existing Conda environment

You do NOT need to create the new environment each time you want to use it with another application from the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo. Once created, the env is added to the list of all virtual instances managed by Conda. You can display them with the command:

```bash
conda info -e
```

![Conda envs]({{ images_path }}/03-conda_envs.png)

The selected environment can be activated when you need it with the `conda activate` command, followed by the name of the env:

```bash
conda activate data_wrangling
```

![Conda activate]({{ images_path }}/03-conda_activate.png)

*Once the environment is active, you can see its name preceding the prompt.*

#### <b class="prefix-2"></b>Install new dependencies within environment

Once environment of your choice is activated, you can install new dependencies required by the selected application. Generally, you can try to install modules with the `conda install {module=version}` command. However, since we initialized the **data_wrangling** environment with Python=3.9, we can also install modules using `pip install {module==version}`, as follows:

```bash
pip install pandas
pip install numpy
pip install openpyxl
```

<div class="warning" markdown="1">
If you do NOT indicate the version of the module you are installing, the latest stable release will usually be installed. <base class="mb">
When you install by `conda`, assign the module's version using a single equals sign `=`. <base class="mb">
When you install by `pip`, assign the module's version using a double equals sign `==`.
</div>

<div class="protip" markdown="1">
Some applications may have **additional requirements** listed in the corresponding tutorials. When necessary, you can install them in the conda environment using the `pip` command.
</div>


## Hands-on tutorials

Right here, in the [Data Science Workbook](https://datascience.101workbook.org): <a class="t-links" href="700"></a> / <a class="t-links" href="731"></a> section, you can follow the <button class="btn c-good">HANDS-ON TUTORIALS</button> to learn how to run the ready-made applications <span class="c-alert">using example datasets</span> and further employ them to support your own research.

Browse available tutorials in the **[Further Reading](#further-reading)** paragraph (*just below*).
