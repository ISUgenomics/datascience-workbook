---
title: "Jupyter: Web-Based Programming Interface"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /assets/images/pattern.png
---

{% include toc %}

# **JupyterLab** Development Environment <br>*interactive web-based computing interface*

## Introduction to Project Jupyter

Jupyter (*[https://jupyter.org](https://jupyter.org)*) is an open-source project started in  2014 to support interactive scientific computing. Now it also facilitates easy sharing of the visual conclusions of the analytical results.
<br>The Jupyter interface has a form of a web application, providing the Graphical User Interface (GUI) via localhost in any web browser. It is also universal in terms of preferred programming languages, including *Python, Java, R, Julia, Matlab, Octave, Scheme, Processing, Scala,* which sum up to nearly 100 [kernels �](a "The kernel is a runtime environment that provides support for the selected programming language and its particular version."). <br>The entire computing pipeline, combining sections of:
* executive code cells,
* rich-text descriptions and comments,
* and graphical visualizations of analytical conclusions,

can all be saved into a single notebook file. This file also caches the kernel for the selected programming language and other settings. That makes the development environment easily transferable among various computing machines and contributors. Note that the Jupyter notebook format is recognized and rendered by GitHub, making it human-readable and thus greatly benefiting day-to-day usability.

**In a word, it is worth to start using Jupyter, especially at the stage of final parsing of results and data visualization, also interactive ones.**


## JupyterLab vs. Jupyter Notebook

There are several distributions of Jupyter interface:
* Jupyter Notebook
* JupyterLab
* JupyterHub

The first two are mainly dedicated for individual usage, while [JupyterHub](https://jupyter.org/hub) is a multi-user version designed for simultaneous teamwork with a centralized deployment.

**Jupyter Notebook** is a simple interface intended for editing <u>a single document</u>. All other files (e.g., for input previews) will open in separate web browser tabs. This variant of the interface has limited capabilities to render certain data types (e.g., CSV) as human-readable. Still, it is a good starting point for beginners or users who occasionally review notebooks received from others.


**JupyterLab** is a more advanced interface providing some functionality of the integrated development environment (IDE). That includes the convenience of a built-in file system viewer and wide developer section, where the selected files open as separate sub-tabs or customized compartments, all in the same browser tab. The display of various file types (HTML, Markdown, CSV, etc.) is clearly improved. This distribution is well suited for developers and daily-based users, especially those working with analysis summaries and visualizations.


`NOTE:` Both variants can coexist on the same computing machine, and the files generated on them are fully compatible.

**Voilà** is an extension that turns notebooks into standalone web applications stripping out the input cells and source code. So the rendered notebook contains only visualizations of the results, e.g., tables or graphs, that can be changed by the user using interactive widgets.
<br>Learn more from *Voilà* GitHub repo: [https://github.com/voila-dashboards/voila](https://github.com/voila-dashboards/voila)


## Installing Jupyter

The Jupyter's tools are available in the Python Package Index (PyPI, [https://pypi.org](https://pypi.org)), the repository of software for Python programming language. Installation

### Jupyter Notebook



<br>Once installed, you can start it from the command line by typing:
```
jupyter notebook
```

### JupyterLab

<br>Once installed, you can start it from the command line by typing:
```
jupyter lab
```



___
# Further Reading
* [Tutorial: Getting Started with JupyterLab](02B-tutorial-jupyter-lab)
* [PyCharm: IDE for Professional Python Developers](02C-pycharm-ide)
* [R Programming Environment](03-r-programming-environment.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-DevelopmentEnvironment-LandingPage){: .btn  .btn--primary}
[Previous](02-python-programming-environment){: .btn  .btn--primary}
[Next](02B-tutorial-jupyter-lab){: .btn  .btn--primary}
