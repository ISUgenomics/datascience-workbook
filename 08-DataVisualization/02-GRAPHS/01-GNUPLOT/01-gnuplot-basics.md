---
title: "Gnuplot: Creating Plots in the UNIX Shell"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /08-DataVisualization/assets/images/08_data_visualization_banner.png
---

{% include toc %}


## Introduction to GNUPLOT


## Gnuplot Installation

On Linux systems, **Gnuplot** is usually pre-installed. The other operating systems, including Mac OS and Windows, require quick and straightforward installation. Below, you can find a brief guide that requires you to copy-paste code snippets in the **terminal window**.

<div style="background: mistyrose; padding: 15px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
If you don't do NOT know what is terminal or command-line, start with the tutorial(s) that will give you a good introduction:
</span>
<br> •
<span style="font-weight:800;">TERMINAL</span>,
<a href="https://datascience.101workbook.org/02-IntroToCommandLine/01-terminal-basics">Terminal: the command-line interface</a>
<br> •
<span style="font-weight:800;">COMMAND-LINE</span>,
<a href="https://datascience.101workbook.org/02-IntroToCommandLine/02-intro-to-unix-shell">Introduction to Unix Shell</a>
</div>

### on Linux (*Debian, Ubuntu*)

```
sudo apt-get update
sudo apt-get install gnuplot
```

### on Mac OS

```
brew install gnuplot
```

### on Windows and others

Please visit [http://www.gnuplot.info/download.html](http://www.gnuplot.info/download.html) to download the most recent release and follow the instructions provided by [RIP Tutorial: Gnuplot Installation or Setup](https://riptutorial.com/gnuplot/example/11275/installation-or-setup).


## Interactive Graphing in the terminal <br>*(on the local machine)*

To start a new Gnuplot session, type in the terminal window:

```
gnuplot
```
![Open Gnuplot in the Terminal](../../assets/images/gnuplot_in_terminal.png)

Note that the **prompt** has changed to *gnuplot*. It means your gnuplot session is launched directly in your terminal window, and you should now enter only gnuplot-compatible syntax instead of Unix commands. For example, the listing directory with `ls` command is no longer possible.

![Open Gnuplot in the Terminal](../../assets/images/gnuplot_bash_commands.png)

However, once you press `tab` on your keyboard, the list of files available in the current directory will be displayed. This will be useful for copying the file name when graphing data from a file.

![Open Gnuplot in the Terminal](../../assets/images/gnuplot_listing_dir.png)

Now, let's plot a simple function, for example `sin(x)` using default points.<br>
Please, copy-paste the command provided below in the gnuplot-terminal:
```
plot sin(x) with points
```
As you noticed, executing the `plot` command starts the GUI window, which allows an on-the-fly preview of creating graphs and some interactivity with data. You can use the options in the graphical interface to **export the chart** to a static image in one of the available formats (PDF [*vector*], SVG [*vector*], PNG [*raster*]). In the top menu, there is also an option for **adding grid lines and zooming** (also possible by selecting the chart area with the mouse). Hovering over any point with the mouse **displays its coordinates** at the bottom of the GUI window.

![Open Gnuplot in the Terminal](../../assets/images/gnuplot_interactive_window.png)

In the [Settings for gnuploting](settings-for-gnuploting) section you will learn the Gnuplot syntax for setting up details of the graph's layout and plotting commands.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
The identical syntax of settings can be used directly in the terminal, as well as pasted into a script in Bash. For details, see the next section, Generating static graphs using Bash scripts.
<br>
So, it is good practice to create a set of settings in a terminal with a live preview of the graph in a GUI window and then copy-paste those settings into a script. This way, you can easily reuse it in the future or generate the same type of chart in a loop for thousands of samples. That will also allow you to create graphs on a remote machine including HPC infrastructure.
</span>
</div>


## Generating static graphs using Bash scripts <br>*(on the local or remote machine)*

In this case, you do NOT have to launch gnuplot session in the terminal. Instead, create an empty file for Bash script, e.g., ` touch gnuplot_graphing.sh`, open the file in any editor, and copy-pased the code snippet provided below. Then save changes.

```
#!/bin/bash

output="simple_graph"
format=png

gnuplot -persist <<- EOF

    set terminal '$format'
    set output '$output.$format'

    plot sin(x) with points

EOF
```

You can use that snippet as a template for each gnuplotting project and further adjust it by setting up various kinds of plots.

Before we run that script, first, let's see what's inside?<br>
At the very top is a shell/kernel syntax `#!/bin/bash` to let the shell know what type of interpreter to run, and in this example, we ask for **Bash**. Further, we define 2 variables:
* **output**, which specifies the name of the output image
* **format**, which defines both the format of the image and the selected Gnuplot terminal

Instead of defining variables, you can provide these values directly in the `gnuplot` section of the script. However, with time you will realize that having those values specified as global variables makes the script more universal and practical for future reuse. Also, this provides the ability to run Gnuplot in a Bash loop to generate the same chart type for multiple inputs.

Finally, there is a `gnuplot` section, where the `<<EOF ... EOF` syntax allows to execute the Gnuplot command within a Bash script. All settings contained inside this syntax can be directly pasted from a Gnuplot session run directly in the terminal. In this example, the only exception is using pre-defined variables instead of exact values. To use a Bash variable defined outside the gnuplot section, prefix the variable name with $ and enclose the entire variable in single quotes.

```
variable --> '$variable'
```

**Run the script**

To run the script, execute the following command in the terminal window:

```
. ./gnuplot_graphing.sh
```

As a result, the `simple_graph.png` should appear in your working directory.

![Gnuplot siple graph](../../assets/images/gnuplot_simple_graph.png)

<!-- ## Types of Gnuplot charts

## Layout settings for gnuplotting

`set` syntax

### terminal

### input-related

### output-related

### graph-related

#### border

#### key (legend)

#### margin

#### title

#### axes

* **label**

* **range**

* **tics**

## Vriables in Gnuplot

### Define Gnuplot variables

### Use Bash variables

## Loops and conditionals in Gnuplot
-->

___
# Further Reading
* [Plotly-Dash: Data Processing & Interactive Plotting with Python](../02-PYTHON/01-interactive-graphing-with-python)
* [RStudio: Data Processing & Plotting with R](../03-R/01-graphing-with-rstudio)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataVisualization-LandingPage){: .btn  .btn--primary}
[Previous](../01-introduction-to-scientific-graphing){: .btn  .btn--primary}
[Next](02-gnuplot-examples-filled-curves){: .btn  .btn--primary}
