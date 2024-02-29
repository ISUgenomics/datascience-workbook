---
title: "Basic developer libraries"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /02-computing-machine/assets/images/03_computer_setup_banner.png
type: "article"
order: 223
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [03. Setting Up Computing Machine](00-SetUpComputingMachine-LandingPage.md) / [2. Must-Have Software](02-must-have-software.md) / **2.3 Basic Developer Libraries**

---


# Introduction

## Developer Libraries

### Conda

Conda is an open-source and cross-platform environment management system. Conda quickly installs, runs, and updates packages and their dependencies. It helps build the virtual environment required for a specific project, including novel software development.
<br>Conda is yet another package manager that is very popular in the bioinformatics community. Almost every software you want to install can be installed using Conda by creating a `conda` environment. The new MacBook Pros with the M1 Arm chips does make installations a little more challenging as not all software has been formatted to run natively on the ARM architecture. Fortunately, Apple's translation environment software, Rosetta 2, can be used to install and run anything we want that was meant for Intel chips.

Use the [conda cheat sheet](https://kapeli.com/cheat_sheets/Conda.docset/Contents/Resources/Documents/index) to get an overview of the available functionalities.

### Python modules

Python is an interpreted high-level general-purpose and object-oriented programming language which is one of the most popular coding languages nowadays. With it, you can develop new software, perform quick statistical analyses, create data structures and present results in interactive graphs. There are a lot of python libraries that make it much easier for you to work on Big Data.

Most python libraries can be easily installed using `pip`.

* [NumPy](https://numpy.org) is a Python library supporting operations on large, multi-dimensional arrays and matrices. It also provides a large collection of mathematical functions, random number generators, linear algebra routines, Fourier transforms, and more.

* [Pandas](https://pandas.pydata.org) is a Python library supporting fast and flexible data analysis, including reshaping, merging/joining/grouping, slicing, fancy indexing, and subsetting of large data sets. All operations are highly optimized for performance.


### R modules





___
# Further Reading
* [3. Various Methods of Software Installation](03-various-methods-of-software-installation.md)
