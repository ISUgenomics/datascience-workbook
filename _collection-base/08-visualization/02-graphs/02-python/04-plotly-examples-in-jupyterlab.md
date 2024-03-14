---
title: "Plotly graphing - interactive examples in the JupyterLab"
layout: single
author:
author_profile: false
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "tutorial"
order: 822.04
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Python Interactive Graphing <br>*using Plotly-Dash library and Jupyter Lab development environment*

This tutorial introduces practical examples of interactive graphing in Python using the Plotly library. Our in-depth guide covers the ready-made examples stored in the data_graphing repository, which includes two Jupyter notebooks for each example - RTU and DIY.
* The RTU notebook is a ready-to-use web application built with the Dash framework. It comes with built-in options for loading inputs and adjusting graphs on the fly. Simply `Run all cells` in Jupyter Lab to access the user-friendly interface of the app and interact with the graph. Use this option if you need a graph from your data without developing the app yourself.

* The DIY notebook, is a do-it-yourself code variant using only the Plotly library and Python engine. The graph adjustment options are encoded in Python variables, and the application is split into functional blocks of code with explanations in markdown comments. This example allows users to learn how to develop a customized app from scratch and gain a deeper understanding of app development. Choose this option if you want to learn how to add advanced options to the app.

## Overview
Python's **Plotly** and **Dash** libraries can be used to create interactive graphs and web applications for data visualization. The Plotly library is built on top of Plotly.js (*JavaScript* plotting library), and allows users to create on-the-fly a range of customizable graphs. Dash is a web app framework that allows users to build interactive web apps using Python engine and Dash HTML Components. Together, these tools can be used to create engaging and informative visualizations of data that facilitates in-depth analysis.

Jupyter Lab provides a modern and flexible web-based user interface that makes it easy write and execute Python code, as well as include markdown-rendered text (*e.g., documentation, instructions, comments*) and visualizations (*e.g., interactive graphs, figures*), all-in-one document. The Jupyter notebooks (.ipynb) are a popular way to share and collaborate on data analysis and scientific computing projects.

## Before you start...

To create interactive graphs in Python, you will need to install some libraries. One way to do this is to install the libraries globally on your system. However, a better option is to use a virtual environment specifically for efficient graphing. This approach uses Conda environment manager to separate the installation of the required libraries from your generic settings in the operating system. This helps keep your system clean and organized.

### Requirements
These libraries contains predefined functions that you can call on your own dataset to create customized graphs.
```
python=3.9                      # a programming language that provides the environment for the following libraries
pandas=1.4.0                    # to import data from file or url, then manage data structure via DataFrame object
plotly=5.6.0                    # a library for creating customized interactive graphs
plotly_express=0.4.1            # a high-level wrapper for Plotly (an alternative approach to Graph Objects)
dash=2.1.0                      # (optional) to add on-the-fly customization of the graphs via widgets
dash_bio=1.0.1                  # (optional) to have predefined types of traces for specific biology-related tasks
kaleido                         # to export static images to any format
jupyter                         # to have Jupyter Notebook (file menagement in the separate tab)
jupyterlab>=3                   # to have Jupyter Lab      (next-generation user interface)
ipywidgets>=7.6                 # to display interactive graphs directly in the notebook
jupyter-dash                    # to add widgets (sliders, buttons) to Plotly charts in JupyterLab
```


### Set up Conda environment

If you don't have a virtual environment manager for your Python programming, consider using Conda. Simply follow the installation instructions in the {% include target_link section="#-install-conda" href=231 text="Install developer libraries / Conda" %} tutorial to get started. Once you have Conda installed, create a new virtual environment for interactive graphing.

* Create virtual environment
```
conda create -n data_graphing python==3.9
```

* Install Requirements
```bash
pip install pandas==1.4.0
pip install plotly==5.6.0
pip install plotly_express==0.4.1
pip install dash==2.1.0
pip install dash_bio==1.0.1
pip install -U kaleido
pip install jupyter
pip install "jupyterlab>=3" "ipywidgets>=7.6"
pip install jupyter-dash
```

* Activate `data_graphing` environment
```bash
conda activate data_graphing
```


### Launch Jupyter Lab in the terminal window

```bash
jupyter lab
```

This will open a browser on a **localhost**, by default [http://127.0.0.1:8888](http://127.0.0.1:8888).

<!-- ![Jupyter_files_menager]({{ images_path }}/jupyter_lab.png) -->

On the left-hand side you can browse your local file system to enter the desired working directory. Then, click twice on the selected notebook (*any .ipynb file*) to open it in the right-hand side panel.

Below, you can learn basics, which allow you to run and customize with a success all pre-implemented examples available in the repository.
