---
title: "Plotly-Dash: interactive plotting with Python"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "tutorial"
order: 822.01
level: 2
categories: ["visualization", "graphic-tools", "plotting", "programming", "library-package-module"]
tags: ["plotly", "dash", "python", "charts", "widgets", "GUI", "interactive-graphing"]
attributes: ["example", "command", "automation", "interactive"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Python is a popular programming language that is widely used for data analysis and scientific computing. One of the key features of Python is the ability to create interactive graphs using libraries such as Plotly and Dash. These libraries can be used to create interactive graphs and web applications for data visualization.

<div class="note" markdown="1">
The `Plotly` library is built on top of `Plotly.js`, and allows users to create a range of interactive graphs. `Dash` is a web app framework that allows users to build interactive web apps using Python and Dash HTML Components.
</div>

<div class="protip" markdown="1">
Using Plotly and Dash together, users can create engaging, informative, and highly interactive graphs and web applications that can be used to explore and analyze data on-the-fly. This can be useful for data scientists, researchers, and analysts who want to share their findings with others in a visually appealing and intuitive way.
</div>

# Plotly-Dash Graphing Library

[Plotly](https://plotly.com) is a modern and extensively developing library for **interactive graphing**. It is an open-source project that provides compatibility with the most popular programming languages, such as **Python**, **R**, **Julia**, **Javascript**, **F#**, **ggplot2**, and **MATLAB**. All variants have detailed documentation and separate <a href="https://github.com/orgs/plotly/repositories" target="_blank">GitHub repositories</a> with issues tracking and opportunity for contribution.

<div class="note" markdown="1">
The **Plotly** library allows users to create a wide range of interactive graphs, including scatter plots, bar charts, heatmaps, and customized arrangements of them. The library is built on the JavaScript plotting library, `Plotly.js`, and is highly customizable, allowing users to specify the appearance and behavior of their graphs.
</div>

The Plotly team developed also an open-source analytical web app framework → <a href="https://plotly.com/dash/" target="_blank">Dash</a>, which allows users to build interactive web applications for data visualization. Dash apps are built using Python engine, and the app's user interface is defined using various Dash Components: <a href="https://dash.plotly.com/dash-core-components" target="_blank">core</a>, <a href="https://dash.plotly.com/dash-html-components" target="_blank">HTML</a> and <a href="https://dash-bootstrap-components.opensource.faculty.ai/docs/quickstart/" target="_blank">bootstrap</a>. So, you can effortlessly add many different widgets such as dropdowns, buttons, sliders, and dialog boxes to support application management and user-triggered on-the-fly chart customization.

<span class="c-alert bold">That is a total game-changer in developing interactive web applications and data visualization!</span>

## Types of Plotly charts

The **Plotly** library offers many types of interactive charts. The image below shows just a few examples from a vast set that is constantly growing.
<div class="more" markdown="1">
So if you've been inspired, you'll learn more about the Plotly library and get hands-on experience using it in the **Python** coding variant by exploring the following tutorial: <a class="t-links" href="822.02"></a>.
</div>

![types of plotly charts]({{ images_path }}/plotly-graphs-types.png)
<em class="footnote mt-">Figure 1. The categorized examples of Plotly interactive graphs.</em>

## Types of Dash widgets

The **Dash** library offers many templates for components that facilitate building an interactive web application and user-triggered changes in the Plotly graphs. Both libraries are fully compatible. Dash's main modules include **core components** that allow loading inputs and change chart parameters. There are also **HTML** and **Bootstrap components** that simplify the creation of the page layout and facilitate the implementation of navigation events.

<button class="btn more mr"></button> *...details in the hands-on tutorial on <a class="t-links" href="822.03"></a>.*

![types of plotly charts]({{ images_path }}/plotly-dash-components.png)
<em class="footnote mt-">Figure 2. Examples of Dash widgets for interactive web applications, including Core, HTM and Bootstrap components.</em>


# How to get started?

Creating interactive graphs with Plotly-Dash can be done in various computing & visualization environments, each catering to different levels of expertise and requirements. In the following subsections, you will find a guide from the simplest to the most advanced options.

<div class="warning" markdown="1">
Python-Plotly based approach is ideal for interactive graphing, enabling on-the-fly data analysis and graph adjustments. If you require only static plots for your data, simpler solutions are available. Consider using the Gnuplot CLI tool or the Matplotlib library for Python-based scripting, which are more suited for generating static visualizations.
</div>

## Jupyter Notebook<br> <em class="c-header" style="font-size: 0.8em;">beginner</em>

Jupyter Notebooks are an excellent starting point for beginners. They allow you to create and display interactive Plotly graphs inline with your code and graphical outputs, making it easy to experiment and visualize data on the fly.

<div class="required" markdown="1">
* Jupyter Notebook - development environment, <a class="t-links" href="412" section="#installing-jupyter">see installation guide</a>
* Python - programming laguage, <a class="t-links" href="423" section="#1-get-python-locally">see installation guide</a>
* Plotly - Python graphing library, <a class="t-links" href="822.02" section="#plotly-installation">see installation guide</a>

You can set up the requirements on your local machine or utilize an HPC system that provides in-browser access through the Open OnDemand service.
</div>

<div class="protip" markdown="1">
If you follow the tutorials listed in the [Further Reading](#further-reading) section, you can gain hands-on experience and access ready-made plotting examples using the Jupyter Lab approach. These tutorials cover creating various types of graphs, including scatter plots, volcano plots, heat maps, dendrograms, and clustergrams.
</div>

## Python Script via local server in CLI with in-browser GUI<br> <em class="c-header" style="font-size: 0.8em;">intermediate</em>

For a more dynamic and interactive experience, you can create a Dash application that runs a local server. This allows you to build sophisticated dashboards and interactive web applications that can be accessed via a web browser.

<div class="required" markdown="1">
* Python - programming laguage, <a class="t-links" href="423" section="#1-get-python-locally">see installation guide</a>
* Plotly - Python graphing library, <a class="t-links" href="822.02" section="#plotly-installation">see installation guide</a>
* Dash - Python web development library, <a class="t-links" href="822.03" section="#dash-installation">see installation guide</a>

You will also need to set up a Python environment on your local machine and have a basic understanding of running Python scripts from the command line.
</div>


## Python Script executed in CLI with outputs exported to a file<br> <em class="c-header" style="font-size: 0.8em;">intermediate</em>

For those who need to generate plots and share them without an interactive environment, generating static files like HTML, PDF or PNG from the CLI is an efficient option. This method allows you to script the generation of plots and save them for presentation or reporting purposes.

<div class="required" markdown="1">
* Python - <a class="t-links" href="423" section="#1-get-python-locally">see installation guide</a>
* Plotly - Python graphing library, <a class="t-links" href="822.02" section="#plotly-installation">see installation guide</a>
* additional libraries for exporting (e.g., `kaleido` for PNG, PDF)

You will also need to set up a Python environment on your local or remote machine and have a more advanced understanding of creating Python scripts and working with the command line.
</div>

## Web Application Development<br> <em class="c-header" style="font-size: 0.8em;">advanced</em>

Experienced developers can integrate Plotly-Dash into full-fledged web applications. This approach leverages the power of web frameworks like Flask or Django to embed interactive Plotly graphs within complex web applications, offering a robust and scalable solution for data visualization.

<div class="required" markdown="1">
* Python  - programming laguage, <a class="t-links" href="423" section="#1-get-python-locally">see installation guide</a>
* Plotly - Python graphing library, <a class="t-links" href="822.02" section="#plotly-installation">see installation guide</a>
* Dash - Python web development library, <a class="t-links" href="822.03" section="#dash-installation">see installation guide</a>
* Flask or django - web framework libraries

You will also need knowledge and a good understanding of web development and deploying web applications.
</div>

<div class="example" markdown="1">
Example web applications that use Plotly-Dash on the backend to provide an interactive GUI include the <a href="https://mapiya.lcbio.pl/" target="_blank">Mapiya</a> contact map analyzer for biomolecules and the <a href="https://biapss.chem.iastate.edu/" target="_blank">BIAPSS</a> physicochemical analyzer for LLPS protein sequences. These applications showcase the power of Plotly-Dash in creating interactive and user-friendly interfaces for complex data analysis.
</div>
