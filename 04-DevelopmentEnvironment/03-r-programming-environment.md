---
title: "R Programming Environment"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: /04-DevelopmentEnvironment/assets/images/04_development_envir_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [04. Development Environment](00-DevelopmentEnvironment-LandingPage.md) / **3. R programming environment(s)**

---


# Introduction

R is a programming language and software environment for statistical computing and graphics. It is widely used among statisticians and data scientists for developing statistical software, data analysis, and data visualization. Statisticians Ross Ihaka and Robert Gentleman created it in the early 1990s at the University of Auckland, New Zealand. It is an open-source language, meaning that anyone can contribute to its development and use it for free. <br>

One of the strengths of R is its large and active community of users who have developed a vast collection of packages. These packages are pre-written R code that can be easily downloaded and extend the functionality of R and make it possible to perform a wide variety of statistical analyses and data visualization tasks. <br>


## R Development Environment
Several development environments are available for programming in R, each with its features and capabilities. The choice of environment depends on your needs and preferences, so it is worth exploring different options to see which works best for you. Some of the available options are listed below.


## **1. Integrated Development Environment (IDE)**
An Integrated Development Environment (IDE) is software designed to make coding easier and more efficient. It usually comes with an integrated version control system. An IDE could be specifically designed for one programming language or have multi-language support. Using multiple languages usually needs additional installations of packages/extensions on top of the IDE. In addition to the software running locally on your computer, there are web-based options.


### *A. Universal IDEs*
Universal or multi-language IDEs are highly customizable, multi-platform text editors that can be used for coding in multiple programming languages. A universal IDE can be a good choice if you work with multiple programming languages and prefer a single development environment for your projects. Some popular universal IDEs are:

* <b>Visual Studio Code (VSCode)</b>: VSCode is an open-source code editor that can be used for R programming by installing the R extension. It provides features such as code highlighting, code completion, and debugging. Learn more about <b>VSCode</b> from the <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">Tutorial: Visual Studio Code  ⤴</a> in this <a href="https://datascience.101workbook.org" target="_blank">workbook ⤴</a>.
* <b>Microsoft R Open</b>: This is a distribution of R that includes a development environment from Microsoft. <a href="https://mran.microsoft.com/download" target="_blank">Download ⤴</a> Microsoft R Open.
* <b>Atom</b>: Now archived, <a href="https://github.blog/2022-06-08-sunsetting-atom/" target="_blank">Atom ⤴</a> is one of the most liked IDEs out there. Plenty of packages are available to extend the functionality, including support of programming languages such as R.
* <b>Eclipse</b>: Eclipse is a popular open-source Java-based IDE that can be used for R programming through the StatET plugin. It provides features such as code highlighting, debugging, and visualization tools. Check out the <a href="https://www.eclipse.org/ide/" target="_blank">Eclipse website ⤴</a> for information about Eclipse and related IDEs.
* <b>Architect</b>: is an IDE designed for data scientists. It has an R console integrated within it and supports multiple languages as it is based on Eclipse. Get Architect from the <a href="https://www.getarchitect.io/" target="_blank">website ⤴</a>.


### *B. R-Dedicated IDEs*
* <b>RStudio</b>: is a popular open-source IDE specifically designed for R programming. It has a user-friendly interface with features such as code highlighting, code completion, debugging, and visualization tools. Both new and experienced R users widely use RStudio. Learn more about <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03A-rstudio-basics" target="_blank">RStudio Basics ⤴</a> and <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03B-tutorial-setting-up-rstudio" target="_blank">Setting up RStudio ⤴</a> in this <a href="https://datascience.101workbook.org" target="_blank">workbook ⤴</a>.
<br>
* <b>Tinn-R</b>: is an open-source IDE with GUI for R programming and environment that provides a customizable interface for editing, running, and debugging R code. Check the <a href="https://tinn-r.org/en/" target="_blank">Tinn-R website ⤴</a> to download and for more information.


### *C. Web-based IDEs*
* <b>Jupyter Notebook</b>: is a web-based IDE that allows users to create and share documents that contain live code, equations, visualizations, and narrative text. Learn more about the <b>Jupyter Lab</b> from the tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-jupyter-basics" target="_blank">Jupyter: Web-Based Programming Interface ⤴</a> in this <a href="https://datascience.101workbook.org" target="_blank">workbook ⤴</a>.
* <b>RStudio Cloud</b>: RStudio Cloud is a free, web-based version of the RStudio IDE that provides a complete environment for coding in R. You can write, run, and share your R code from anywhere with an internet connection. RStudio Cloud is now known as <a href="https://posit.cloud/" target="_blank">Posit Cloud ⤴</a>.


## **2. Online Coding Platforms**
Several online platforms provide an easy way to start coding in R without having to install anything on your local computer. They are especially useful for collaborating with others and as an alternative to installing software on your machine. However, they may have processing power, storage, and memory limitations. Some online platforms for R are:

* <a href="https://colab.research.google.com/" target="_blank"><b>Google Colab</b> ⤴</a>: is a free Jupyter Notebook environment that allows you to code in R and other programming languages. You can write, run, share R code with others, and have access to powerful GPUs and TPUs.
* <a href="https://www.kaggle.com/code" target="_blank"><b>Kaggle Kernels</b> ⤴</a>: Formally Scripts, Kaggle Kernels is a free, web-based multi-language platform. It provides a Jupyter Notebook-style environment and is well-suited for data science and machine learning projects.


## **3. Text Editors**
Text editors are limited in terms of functionality and user-friendliness compared to IDEs. You can use text editors to write your code and then use a console/R environment to run the code.
Text editors that can be used for R programming:
* Nano
* Vim
* Notepad++
* Gedit
* Kate
* Sublime Text

Nano and Vim are Unix text editors and are good options if you are working on an HPC cluster. Learn more about `nano` and `vim` from the tutorial <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02B-text-files-editors" target="_blank">Text Files Editors  ⤴</a> in this <a href="https://datascience.101workbook.org" target="_blank">workbook  ⤴</a>.

Some basic development environments for programming in R along with the text editors:

* <b>Base R</b>: is the standard R environment included with the installation of R software. It provides a simple console for entering commands, viewing results, and running code written using a text editor.
* <b>R Commander</b>: R Commander is a graphical user interface (GUI) for R. It is especially useful for novice R users and also comes with the standard R installation.


## Using R
You will need to install the R software on your computer to use R. This can be done easily by downloading it from the Comprehensive R Archive Network (CRAN), the official repository for R packages and software. You will also need a text editor or an IDE of your choice to write and edit code. I recommend using RStudio or RStudio Cloud. Check out <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03B-tutorial-setting-up-rstudio" target="_blank">Setting up RStudio ⤴</a> for more details about getting started in R and installing R libraries. Also, check the <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03A-rstudio-basics" target="_blank">RStudio Basics ⤴</a> tutorial if you are not familiar with RStudio interface.
<br>


## What can you do using R?
Here are a few examples of the things that you can do with R: <br>
* Data Manipulation: reading, cleaning, and manipulating data from different sources
* Data Visualization through plots, charts, <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/03-R/03-rstudio-tutorial-box-plot" target="_blank">Boxplots ⤴</a> or <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/03-R/05-rstudio-tutorial-ComplexHeatmap" target="_blank">Complex Heatmaps ⤴</a>
* Statistical Analysis
* Data Modeling
* Machine Learning


### Simple examples
To perform a simple arithmetic calculation, you can enter the following into the console:

```
> 2 + 2

##If you press enter, you will get the following output
[1] 4
```
In this example, the output is the result of the calculation 2 + 2, which is 4.

In addition to basic arithmetic operations, R also has a variety of functions that can be used to perform more complex statistical analyses. For example, you can use the mean() function to calculate the mean of a set of numbers:

```
> a1 <- c(1, 2, 3, 4, 5)
> mean(a1)
[1] 3
```
In this example, the mean() function calculates the mean of the `a1` numeric vector, which contains the numbers 1, 2, 3, 4, and 5. The mean of these values is 3.

R also has powerful capabilities for visualizing data. For example, you can use the plot() function to create a scatterplot:

```
> plot(1:20)
```

![R_plot](assets/images/R_plot.png) <br>
 <br>

 With its powerful statistical and data visualization capabilities, R is a valuable tool for anyone working with data.  <br>
<br>


___
# Further Reading
* [3.1 RStudio: Integrated Environment for R Programming](03A-rstudio-basics)
* [3.1.1 Setting Up RStudio](03A-tutorial-setting-up-rstudio)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-DevelopmentEnvironment-LandingPage){: .btn  .btn--primary}
[Previous](02B-pycharm-ide){: .btn  .btn--primary}
[Next](03A-rstudio-basics){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
