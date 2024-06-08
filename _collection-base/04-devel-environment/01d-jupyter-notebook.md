---
title: "Getting started with Jupyter Notebook on HPC systems"
layout: single
author: Kerrie Geil
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 414
level: 3
categories: ["developer-tools", "programming", "hpc", "documentation"]
tags: ["jupyter", "notebook", "IDE", "code-editor", "R", "python", "markdown", "OOD", "hpc-cluster", "terminal"]
attributes: ["interactive", "user-guide"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

* This page was modified from Session 2 of the SCINet Geospatial Workshop 2020.


# Introduction

* [PMC Articles about or using JupyterHub](https://www.ncbi.nlm.nih.gov/pmc/?term=Jupyterhub)

## Ceres HPC Login with JupyterHub

In summer 2020, a new way of accessing Ceres was set up with JupyterHub. JupyterHub allows access to Ceres through a web browser and spawns an instance of JupyterLab on a compute node.

Let's walk through how to login to Ceres using JupyterHub with the [Jupyter Guide](https://scinet.usda.gov/guide/jupyter).

## Tour of JupyterLab

The Launcher:
Click the plus sign on the left or go to File > New Launcher to see the launcher screen. From here you can open a Jupyter Notebook, a terminal, a textfile, a markdown file, and more.

Accessing your files:
Clicking on the folder icon on the far left will show you the files and folders in your home directory or the directory you listed in the JupyterLab spawner during the login process.

Access to software modules:
Clicking on the hexagon icon on the far left will show you all the software modules available on the Ceres HPC. Clicking load on any of the modules is equivalent to typing ```module load name-of-software``` (as described in the [Quick Start Guide](https://scinet.usda.gov/guide/quickstart#using-the-software-applications-on-ceres)). Note: there aren't a ton of software modules on Ceres that are relevant to the geospatial research community, so you likely won't need to use this feature often.

## Jupyter Notebook Basics

### *Step 1: Open a Jupyter Notebook*

Click the launcher and launch a Python 3 notebook- notice the .ipynb file extension.

Notice how it says "Python 3" at the top right of the notebook. You are working in a Python 3 environment or "kernel". You could change this by clicking on "Python 3" and selecting a different kernel from the dropdown list in the pop-up box. Don't choose a different kernel for now, but note that this is where you could select a Conda environment that you have created. We will cover this in the Session 4 Tutorial on computational reproducibility.

### *Step 2: Add a Raw Text Cell*

At the top of the notebook click "Code" and change it to "Raw". Click on the cell and type the following:

```bash
author: your name
date: today's date
description: my first jupyter notebook hello world
```

To execute the cell type Shift+Enter or click the run button at the top of the notebook (looks like "play").

### *Step 3: Add a Markdown Cell*

Click inside the new cell that has appeared in your notebook, then at the top of the notebook click again on "Code" and change it to "Markdown". Click inside the Markdown cell and type:

```bash
# Make Notes in Your Codes Prettier Using Markdown
## add a subtitle

Write some pretty text.
```

Execute the Markdown cell.

Learn more about JupyterHub markdown syntax [here](https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Working%20With%20Markdown%20Cells.html) or [here](https://www.ibm.com/support/knowledgecenter/en/SSGNPV_2.0.0/dsx/markd-jupyter.html). A quick Google search on "JupyterHub markdown cheat sheet" will reveal tons of helpful sites.

### *Step 4: Add a Code Cell*

If you executed the previous cell, a new code cell should have automagically appeared. Type:

```bash
print('Hello, Jupyter world!')
```

and execute the cell.

Notice how the output appears right in the Jupyter notebook. You can also print tables and plot figures right in the Jupyter notebook... all your code, comments, and outputs will be in one place- inside the .ipynb file!


### *Step 5: Delete a Cell*

Right click on the cell and choose "Delete Cells" or place your cursor in the cell and then click on the scissors icon at the top of the notebook.

### *Step 6: Insert a Cell*

Insert a cell under the markdown cell by clicking on the markdown cell and then clicking the plus button at the top of the notebook (next to the scissors). Type:

```bash
print('How awesome is this?!')
```

and execute the cell.

### *Step 7: Clear all Outputs*

At the top of JupyterLab click Kernel > Restart Kernel and Clear All Outputs, the click Restart in the pop-up window. All you outputs are now cleared.

### *Step 8: Re-run all Cells*

At the top of JupyterLab click `Run` > `Run All Cells`

### *Step 9: Save Your Work*

Actually, JupyterLab is autosaving your notebook as you work, but you'll want to name your file.

Right click on "Untitled.ipynb" either on the notebook tab or in the file browser on the left, then choose "Rename". In the pop-up window, name your file and click "Rename".
