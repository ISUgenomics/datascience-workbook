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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

This section provides a highly verbose guide for the contents of the [ISUgenomics](https://github.com/ISUgenomics)/<b>[data_wrangling ⤴](https://github.com/ISUgenomics/data_wrangling)</b> GitHub repository.

## data_wrangling repo

The **data_wrangling** repo collects ready-made mini-apps for popular tasks in data processing.<br>
<i>Most of the apps are <span style="color: #ff3870;"> developed in Python3</span> programming language.</i>

In the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo, each application is placed in a separate directory for tidy organization.<br>
<u>Each folder contains:</u>
<ul><li> the python script (.py) of the application </li>
<li> the example inputs </li>
<li> the documentation in the README.md file, including some usage variations (<i>sample commands that run the program in different option configurations</i>) </li></ul>

All the applications have a **built-in set of options** provided as in-line arguments from the command line. Thanks to that, there is **no need to modify source code** by the user (*e.g., to replace input filename or tune params*). Also, it makes the apps more universal, comprehensive, and robust.

More advanced (multi-purpose or multi-options) applications have a **built-in logger** which reports the analysis progress with the details depending on the **selected verbosity level**.

## Environment setup

The applications are developed in Python programming language and requires importing several libraries providing useful ready-made functions and objects handling complex data structure. Thus, to have the apps working on your (local or remote) machine, first you have to set up the environment.

Considering you will be using various applications that require different dependencies, you need neat way to manage them. A good choice is <a href="https://docs.conda.io/en/latest/" target="_blank">Conda ⤴</a> environment management system that runs on all: Windows, macOS, and Linux.<br>
If you are not already using Conda, go to the {% include target_link href=223 %} tutorial for a step-by-step guide on how to set up the environment manager on your target computing machine. If you have a Mac with a dual processor (Arm64 and Intel's x86-64) you can find dedicated setup instructions in section {% include target_link href=231 section="#install-developer-libraries" text=" Install basic developer tools" %} of the {% include target_link href=231 %} tutorial.

## *Python Setup*

To run the applications collected in the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo, you will need a computing machine with Python installed.

**on the HPC cluster** <br>
If you want to use the HPC infrastructure, then usually various versions of Python are pre-installed and available to load using `module` system. <br>
Use the following command to display Python versions:
```
module avail python
```
Then, load the selected variant:
```
module load python/python-3.9
```
**on your local machine** <br>
The simplest way to check if you have Python already pre-installed on your local machine is to run in the terminal window the following command:
```
python --version
```
or
```
python3 --version
```
If the returned value will be something like `Python 3.8.9`, you are good to **getting started with data_wrangling** apps. *Note that python in version 3.x is required.*<br>
Otherwise, if you receive an error message `command not found`, **you will need to install Python**. You can make up for this step by following the hands-on tutorial provided in section {% include target_link href=420 %} / {% include target_link href=423 %}


## *Conda Setup*

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Conda is an open-source package management system and environment management system for installing and managing packages and dependencies in Python and other programming languages. Conda allows users to create and <b>manage isolated environments for different projects or workflows</b>, each with its own set of packages and dependencies.
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;">Learn more about Conda basics in section</span> {% include target_link href=423 section="#3-manage-python-environments" text="Manage Python environments" %} of the tutorial {% include target_link href=423 %}


**Test Conda installation**

To test your Conda configuration, in the terminal window, run the command provided below:
```
conda info
```

If the screen displays a message similar to the one in the image below, you are ready to create a new environment.

![Conda info]({{ images_path }}/03-conda_info.png)

Otherwise, if a `command not found` error is thrown back, follow the instructions in the [previous paragraph](#environment-setup) to install Conda correctly.

**Create new Conda environment**

To create a Conda virtual environment, type `conda create` followed by the name [here: *data_wrangling*] of the new env along with the `-n` argument. Further you can provide a list of modules to install. In this case, let's initialize the environment for `python` version 3.9.

```
conda create -n data_wrangling python=3.9
```

**Activate existing Conda environment**

You do NOT need to create the new environment each time you want to use it with another application from the <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">data_wrangling ⤴</a> repo. Once created, the env is added to the list of all virtual instances managed by Conda. You can display them with the command:

```
conda info -e
```

![Conda envs]({{ images_path }}/03-conda_envs.png)

The selected environment can be activated when you need it with the `conda activate` command, followed by the name of the env:

```
conda activate data_wrangling
```

![Conda activate]({{ images_path }}/03-conda_activate.png)

*Once the environment is active, you can see its name preceding the prompt.*

**Install new dependencies within environment**

Once environment of your choice is activated, you can install new dependencies required by the selected application. Generally, you can try to install modules with the `conda install {module=version}` command. However, since we initialized the **data_wrangling** environment with Python=3.9, we can also install modules using `pip install {module==version}`, as follows:

```
pip install pandas
pip install numpy
pip install openpyxl
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that if you do not indicate the version of the module you are installing, the latest stable release will usually be installed. <br><br>
When you install by <code>conda</code>, assign the module's version using a single equals sign <b><code>=</code></b>. <br><br>
When you install by <code>pip</code>, assign the module's version using a double equals sign <b><code>==</code></b>.
</span>
</div>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Some applications may have <b>additional requirements</b> listed in the corresponding tutorial. When necessary, you can install them in the conda environment using the <b>pip</b> command.
</span>
</div>


## Hands-on tutorials

Right here, in the [Data Science Workbook](https://datascience.101workbook.org): {% include target_link href=700 %} / {% include target_link href=731 %} section, you can follow the <span style="color: #ff3870;">hands-on tutorials</span> to learn how to run the ready-made applications <span style="color: #ff3870;">using example datasets</span> and further employ them to support your own research.

Browse available tutorials in the **Further Reading** paragraph (*just below*).
