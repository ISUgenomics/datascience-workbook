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

R is a programming language and software environment for statistical computing and graphics. It is widely used among statisticians and data scientists for developing statistical software and data analysis. It was created by Ross Ihaka and Robert Gentleman in the early 1990s at the University of Auckland, New Zealand. It is an open-source language, meaning that anyone can contribute to its development and use it for free. <br>

One of the strengths of R is its large and active community of users. This community has developed a vast collection of packages, which are pre-written R code that can be easily downloaded and used by others. These packages extend the functionality of R and make it possible to perform a wide variety of statistical analyses and data visualization tasks. <br>

## Using R
To use R, you will need to install the R software on your computer. This can be done easily by downloading it from the Comprehensive R Archive Network (CRAN), which is the official repository for R packages and software. Check out these tutorials for more details:
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03A-rstudio-basics" target="_blank">RStudio Basics</a>
* <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03B-tutorial-setting-up-rstudio" target="_blank">Setting up RStudio</a>
<br>

Once you have installed R, you can start using it by opening the R console or RStudio. This is where you will enter your R commands and see the results of your code. <br>

## Examples
To perform a simple arithmetic calculation, you can enter the following into the console: 

```
> 2 + 2
[1] 4
```
In this example, the > symbol indicates that you are entering a command, and the [1] indicates the output of that command. In this case, the output is the result of the calculation 2 + 2, which is 4.

In addition to basic arithmetic operations, R also has a variety of functions that can be used to perform more complex statistical analyses. For example, you can use the mean() function to calculate the mean of a set of numbers:

```
> mean(1, 2, 3, 4, 5)
[1] 3
```
In this example, the mean() function calculates the mean of the numbers 1, 2, 3, 4, and 5, which is 3.

R also has powerful capabilities for visualizing data. For example, you can use the plot() function to create a scatterplot of two numeric variables:

```
> x <- c(1, 2, 3, 4, 5)
> y <- c(1, 4, 9, 16, 25)
> plot(x, y)
```

In this example, the x and y variables are created and assigned the values 1, 2, 3, 4, and 5. These values are then used as the input to the plot() function, which creates a scatterplot of x and y. <br>

These are just a few simple examples of the many things that you can do with R. R is often used for data visualization, for example <a href="https://datascience.101workbook.org/08-DataVisualization/02-GRAPHS/03-R/05-rstudio-tutorial-ComplexHeatmap" target="_blank">creating heatmaps</a>. With its powerful statistical and data visualization capabilities, R is a valuable tool for anyone working with data. Whether you are a beginner just starting out with R or an experienced user looking to expand your knowledge, there is always more to learn about this versatile programming language. <br>
<br>


___
# Further Reading
* [RStudio: Integrated Environment for R Programming](03A-rstudio-basics)
* [Tutorial: Setting Up RStudio](03B-tutorial-setting-up-rstudio)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-DevelopmentEnvironment-LandingPage){: .btn  .btn--primary}
[Previous](02C-pycharm-ide){: .btn  .btn--primary}
[Next](03A-rstudio-basics){: .btn  .btn--primary}
