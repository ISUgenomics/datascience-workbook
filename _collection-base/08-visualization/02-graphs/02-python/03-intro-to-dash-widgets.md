---
title: "Introduction to Dash"
note: (python)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "tutorial"
order: 822.03
level: 3
categories: ["visualization", "graphic-tools", "plotting", "programming", "library-package-module"]
tags: ["python", "dash", "widgets", "interactive-graphing"]
attributes: ["installation", "example", "interactive"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

<div class="note" markdown="1">
Dash is an open-source framework for building analytical web applications using Python. It is particularly useful for creating interactive, data-driven dashboards without requiring extensive knowledge of web development. Dash is ideal for data scientists and analysts who want to visualize complex datasets and share interactive results with others.
</div>

## Dash framework for Python

In this article you will learn the basics about <a href="https://dash.plotly.com" target="_blank">Dash-based building data apps in Python</a>. <br>
Don't hesitate to explore the user-friendly Dash documentation on:
- <a href="https://dash.plotly.com/layout" target="_blank">Dash fundamentals</a>
- <a href="https://dash.plotly.com/advanced-callbacks" target="_blank">Dash callbacks</a>
- <a href="https://dash.plotly.com/dash-core-components" target="_blank">Dash components</a>
- <a href="https://dash.plotly.com/dash-in-jupyter" target="_blank">Dash in Jupyter Environments</a>
- <a href="https://dash.plotly.com/deployment" target="_blank">Deploying Dash Apps</a>

**Get help from further resurces:**
- <a href="https://dash.plotly.com/faqs" target="_blank">Frequently Asked Questions</a>
- <a href="https://community.plotly.com/c/python/" target="_blank">Dash community forum</a>
- <a href="https://dash.plotly.com/support" target="_blank">Dash Support and Contact</a>


# Dash installation

<div class="required" markdown="1">
Dash is an external library and is **not included in the Python standard library**. Therefore, it **requires a separate installation**. Ensure you install a version that meets the specific needs of your application.
</div>

Getting started with the **Dash** library as a **Python** developer is straightforward, regardless of the operating system you are working on. Just open a terminal window (or command prompt) and install Dash with `pip` or `conda` following the commands below.

<div class="warning" markdown="1">
If you don't have pip or Conda installed, start with the tutorial(s) that will guide you through this necessary step:
* **PIP INSTALLATION:** <a class="t-links" href="531"></a>
* **CONDA INSTALLATION:** <a class="t-links" href="231"></a>
</div>

## Install with pip

In terminal window, execute the command:
```bash
pip install dash==2.17.0
```

<div class="warning" markdown="1">
The version specified in the command (e.g., `2.17.0`) should be adjusted to suit the requirements of your application. It is best to **use the latest stable release** of Dash, which can be checked and verified <a href="https://pypi.org/project/dash/#history" target="_blank">here</a>.
</div>

## Install with conda

In terminal window, execute the command:
```bash
conda install -c conda-forge dash
```

<div class="protip" markdown="1">
For the efficient development of interactive Python applications, you will also need other libraries, such as Plotly, Pandas or SciPy. So, it is a good idea to create a new virtual environment with Conda right away and add into it other modules over time. <base class="mb">
Quick guide (execute commands in the terminal window):
```bash
conda info --envs                       # Active environment shown with *; on Mac Pro activate base for Miniforge3_x86
conda create -n graphing python=3.8     # replace 'graphig' with custom name
conda activate graphing
pip install dash==2.17.0
```
</div>

# Select development environment (IDE)

## Coding in the Terminal

In the <a class="t-links" href="310">terminal window</a> navigate to the desired location and create a new Python file, e.g. `dash_app.py`

```bash
touch dash_app.py
```

Edit the file in your preferred <a class="t-links" href="322">CLI text editor</a> (Nano, Vim, mcedit, etc.) or <a class="t-links" href="411">VSC editor with GUI</a> and go to [Dash import](#dash-import) section in this tutorial.

## Coding in the JupyterLab

In the terminal window execute the command provided below to start a new JupyterLab session *(assuming you have Jupyter <a class="t-links" href="412" section="#installing-jupyter">installed</a>)*.

```bash
jupyter lab
```

<div class="warning" markdown="1">
If you don't have a Jupyter installed, start with the tutorial that will guide you through this necessary step:
* **JUPYTER INSTALLATION:** <a class="t-links" href="412"></a>
</div>

Once you have launched the Jupyter Development Environment in a browser window, navigate to the desired location in the file system and open a new file under the Python kernel. <base class="mb">
Follow to the next step: [Dash import](#dash-import) section in this tutorial.


# Dash import

**Import Dash library**

Importing dash with `import dash` initializes the Dash library and provides access to the core functionalities of the Dash framework.

```python
import dash
```

<div class="warning" markdown="1">
Importing Dash with `import dash` does not bring in all commonly used submodules such as `html`, `dcc`, `callback`, `Output`, `Input`. To use these components, you need to import them separately with the recommended import statement.
</div>

**Import Dash components**

```python
from dash import Dash, html, dcc, callback, Output, Input
```

<div class="protip" markdown="1">
According to the latest Dash documentation, importing submodules directly with `from dash import ...` is sufficient. This import statement brings in the necessary components directly, making the code cleaner and more efficient. No need for an additional `import dash` before using this statement.
</div>

<div class="more" markdown="1">
…about the [Dash components](#dash-components) in the section below, including:
* [Core components](#core-components)
* [HTML components](#html-components)
* [Graph components](#graph-components)
</div>


## Creating your first dash application

```python
# Import Dash components
from dash import Dash, html, dcc

# Create Dash app instance
app = Dash()

# Define app layout
app.layout = [
    html.H1(children='title of Dash app', style={'textAlign':'center'}),
    dcc.Graph(id='bar-graph')
]

# Deploy app on the local Python server
if __name__ == '__main__':
    app.run(debug=True)
```

<details markdown="1"><summary class="bc-template"> What the code does? </summary>

*This setup creates a basic interactive web application with a title and a placeholder for a graph.*
The provided code:
* initializes a Dash application by importing elementary components (`Dash`, `html`, `dcc`),
* creates an **app** instance (`app = Dash()`)
* and defines the **layout** with a centered title (`html.H1`) and a graph object (`dcc.Graph`). The application layout is assigned to `app.layout`.

Finally, the app is deployed on a local Python server with `app.run(debug=True)` when the script is run directly.
</details>

**To run the app**, copy the above code into a new file named `dash_app.py` and execute the following command in your terminal or Jupyter notebook cell:
```bash
python dash_app.py
```
Then go to the <a href="http://127.0.0.1:8050/" target="_blank">http://127.0.0.1:8050/</a> address in your web browser.

![python-dash-minimal-app]({{ images_path }}/dash-minimal-app.png)

<div class="protip" markdown="1">
The `app.layout` in a Dash application is highly customizable to fit your needs. It can include a variety of [dash components](#dash-components) such as multiple graphs, tables, sliders, dropdowns and other widgets to facilitate interactive communication with users. This flexibility allows you to build complex, data-driven dashboards that can respond to user inputs in real-time, providing a dynamic and engaging user experience.
</div>

# Dash components

Dash components are the building blocks of Dash application layout, enabling you to create interactive, web-based data visualizations using Python. Major categories of Dash components include:
* **[HTML components](#html-components)** (`html`): Basic HTML elements like headings, paragraphs, divs, etc.
* **[Core Components](#core-components)** (`dcc`): Higher-level components like graphs, dropdowns, sliders, etc.
* **[Dependencies](#)** : `Input`, `Output` and `State` components manage user input, display output, and track component state in Dash callbacks, enabling dynamic interactivity in the application.
* **[Callbacks](#)** : Functions that enable interactivity by linking inputs and outputs.

These components are integrated into the layout of a Dash application to create a user interface that responds dynamically to user interactions. *For example, a dropdown component can store options that filter or switch data on a plot interactively when selected by a user.*

**Dash modules and example components**

| module    | description | example component | explanation |
|-----------|-------------|-------------------|-------------|
|`html`     | Basic HTML elements used for structuring the layout.     | `html.H1('Title of Dash App')` | Adds a main heading to the app layout. |
|`dcc`      | Higher-level components for graphs, dropdowns, and more. | `dcc.Dropdown(options=[{'label': 'Option 1', 'value': '1'}])` | Creates a dropdown menu with selectable options. |
|`Input`    | Captures user input from components.                     | `Input('dropdown', 'value')` | Monitors the selected `value` of the dropdown component. |
|`Output`   | Defines outputs to update components.                    | `Output('graph', 'figure')`  | Updates the `figure` property of the graph component. |
|`callback` | Links inputs and outputs to create interactivity.        | `@app.callback(Output('graph', 'figure'), [Input('dropdown', 'value')])` | Updates the graph based on the dropdown selection. |

<!---
## HTML components

### <button class="btn example">HTML elements</button>

## Core components

### <button class="btn example">Inputs and Outputs</button>

## Graph components

# Layout and Callbacks

## Defining the layout

### <button class="btn example">Simple layout</button>

## Creating interactive callbacks

### <button class="btn example">Interactive callback</button>

# Dash styling

## Inline styling

### <button class="btn example">Inline CSS</button>

## External stylesheets

### <button class="btn example">Bootstrap integration</button>

# Dash Data

## Using built-in datasets

### <button class="btn example">Displaying data tables</button>

## Loading external data

### <button class="btn example">Loading CSV data</button>

# Advanced Dash functionality

## Dynamic content generation

### <button class="btn example">Dynamically generated components</button>

## Multi-page applications

### <button class="btn example">Navigation between pages</button>

# Dash deployment

## Deploying locally

### <button class="btn example">Running a local server</button>

## Deploying on the cloud

### <button class="btn example">Deploying on Heroku</button>

-->
