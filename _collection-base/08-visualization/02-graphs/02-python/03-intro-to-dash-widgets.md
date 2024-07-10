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


## Minimal Dash application

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

<details markdown="1" class="mb"><summary class="bc-template"> What the code does? </summary>

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

<img src="{{images_path}}/plotly-dash-components.png" alt="types of dash components">
<em class="footnote">Figure 2. Examples of Dash widgets for interactive web applications, including Core, HTM and Bootstrap components.</em>

**Dash modules and example components**

| module    | description | example component | explanation |
|-----------|-------------|-------------------|-------------|
|`html`     | Basic HTML elements used for structuring the layout.     | `html.H1('Title of Dash App')` | Adds a main heading to the app layout. |
|`dcc`      | Higher-level components for graphs, dropdowns, and more. | `dcc.Dropdown(options=[{'label': 'Option 1', 'value': '1'}])` | Creates a dropdown menu with selectable options. |
|`Input`    | Captures user input from components.                     | `Input('dropdown', 'value')` | Monitors the selected `value` of the dropdown component. |
|`Output`   | Defines outputs to update components.                    | `Output('graph', 'figure')`  | Updates the `figure` property of the graph component. |
|`callback` | Links inputs and outputs to create interactivity.        | `@app.callback(Output('graph', 'figure'), [Input('dropdown', 'value')])` | Updates the graph based on the dropdown selection. |


## **HTML components**

The `html` module in Dash provides a suite of components that mirror standard HTML elements, enabling you to structure the layout of your Dash application. These components include headings, paragraphs, divs, etc. They allow you to create a well-organized and visually appealing interface.

<div class="note" markdown="1">
Each Dash HTML component formats and displays text or other content in a specific way, helping to arrange and organize visual elements on the app's page. For example, a heading component makes text appear larger and bolder, while a division component groups selected elements together.
</div>

**Commonly used HTML components**

| component     | description               | example instance                         | rendering |
|---------------|---------------------------|------------------------------------------|-----------|
| `html.H1`     | main heading (h1)         | `html.H1('Title of Dash App')`           | <h1>Title of Dash App</h1>   |
| `html.H2`     | secondary heading (h2)    | `html.H2('Subtitle')`                    | <h2>Subtitle</h2>            |
| `html.Div`    | division or section (div) | `html.Div(children='content goes here')` | <div>Content goes here</div> |
| `html.P`      | paragraph (p)             | `html.P('This is a paragraph.')`         | <p>This is a paragraph.</p>  |
| `html.Span`   | inline container (span)   | `html.Span('This is a span.')`           | <span>This is a span.</span> |
| `html.A`      | hyperlink (a)             | `html.A('Link Text', href='https://dash.plotly.com/')` | <a href="https://dash.plotly.com/">Link Text</a> |
| `html.Img`    | image (img)               | `html.Img(src='path/to/image.jpg')`      | <img src="{{images_path}}/01_graphic_design_elements.png">     |
| `html.Button` | button (button)           | `html.Button('Click Me', id='button')`   | <button class="btn">Click Me</button> |
| `html.Label`  | label for form elements   | `html.Label('Label Text')`               | <label>Label Text</label>             |
| `html.Input`  | input field               | `html.Input(type='text', value='input')` | <input value="input"></input>         |
| `html.Ul`     | unordered list (ul)       | `html.Ul(children=[html.Li('Item 1'), html.Li('Item 2')])` | <ul><li>Item 1</li><li>Item 2</li><ul>       |
| `html.Ol`     | ordered list (ol)         | `html.Ol(children=[html.Li('Item 1'), html.Li('Item 2')])` | <ol><li>Item 1</li><li>Item 2</li><ol>       |
| `html.Li`     | list item (li)            | `html.Li('List Item')`                   | <li>List Item</li> |

<div class="protip" markdown="1">
For a comprehensive list of available Dash HTML components, check the <a href="https://dash.plotly.com/dash-html-components#full-elements-reference" target="_blank">official Dash documentation</a> under the section **Open Source Component Libraries** → **Dash HTML Components**. This resource provides detailed information and examples to help you effectively use these components in your applications.
</div>

### *HTML component properties*

When using Dash HTML components, you can customize them with <a href="https://dash.plotly.com/dash-html-components#html-component-properties" target="_blank">various properties</a>.

<div class="note" markdown="1">
Properties of Dash HTML components are settings that customize how elements appear and behave. These properties are predefined attributes with fixed names that you can modify by assigning values. For example, the `style` property can change the element's color or size by assigning specific values to these styles, e.g., `style={"color": "red", "size": "24px"}`.
</div>

Here's a concise guide to the main properties and some useful tips:

| property    | description | tips |
|-------------|-------------|------|
| `style`     | a dictionary to define inline CSS styles | Use **camelCase** for properties (e.g., `backgroundColor`). |
| `className` | assigns CSS classes to the component     | `class` is renamed to `className` in Dash                   |
| `id`        | unique identifier for the component      | Useful for callback targeting and CSS styling.              |

Typically, properties are placed within the Dash calling function for a given component, immediately following the children attribute, which always comes first. <br>
*For example:*
```python
html.H1('Title of Dash App', style={'textAlign': 'center', 'color': 'red'}, id='app-title')
html.Div(children='content goes here', id='content-div', className='example-div', style={'backgroundColor': 'yellow', 'color': 'red'})
```

### <button class="btn example">HTML elements in a Dash app</button>

*This example demonstrates the use of various HTML components and their properties in the Dash app layout, making the application well-organized and practically useful.*

```python
# Import Dash components
from dash import Dash, html

# Create Dash app instance
app = Dash()

# Define app layout using HTML components
app.layout = html.Div([
    # Main Heading
    html.H1('Title of Dash App', style={'textAlign': 'center', 'color': 'blue'}, id='main-heading'),
    # Section 1
    html.Div([
        html.H2('Section 1', style={'textAlign': 'left'}),
        html.P('This is a paragraph in section 1.', style={'fontSize': 14}),
        html.Ul([
            html.Li('List Item 1'),
            html.Li('List Item 2'),
            html.Li('List Item 3'),
        ]),
    ], style={'padding': '20px', 'border': '1px solid black'}),                 # style for a html.Div goes after the content
    # Section 2
    html.Div([
        html.H2('Section 2', style={'textAlign': 'left'}),
        html.P('This is a paragraph in section 2.', style={'fontSize': 14}),
        html.Img(src='https://via.placeholder.com/150', style={'display': 'block', 'margin': 'auto'}),
    ], style={'padding': '20px', 'border': '1px solid black', 'marginTop': '20px'}),
    # Section 3
    html.Div([
        html.H2('Section 3', style={'textAlign': 'left'}),
        html.P('This is a paragraph in section 3 with a button below.', style={'fontSize': 14}),
        html.Button('Click Me', id='button', style={'display': 'block', 'margin': 'auto', 'padding': '10px 20px'}),
    ], style={'padding': '20px', 'border': '1px solid black', 'marginTop': '20px'}),
])

# Deploy app on the local Python server
if __name__ == '__main__':
    app.run(debug=True)
```

<details markdown="1" class="mb"><summary class="bc-template"> What the code does? </summary>

This code creates a Main Heading followed by 3 styled Sections in the app layout:
* **Main Heading:** Centered and styled with a specific color.
* **Section 1:** Includes a secondary heading, a paragraph, and an unordered list.
* **Section 2:** Contains a secondary heading, a paragraph, and a centered image.
* **Section 3:** Features a secondary heading, a paragraph, and a centered button.

Finally, the app is deployed on a local Python server with `app.run(debug=True)` when the script is run directly.
</details>

![python-dash-app-html-components]({{ images_path }}/dash-app-html-components.png)

### **CSS Styles:** *inline* vs *variable* vs *className*

When building Dash applications, repetitive style definitions can clutter your code, making it hard to read and maintain. Two effective solutions to this problem are using variables for common styles and/or assigning className defined within external CSS files.

#### *Using* `variables` *for common styles*

Using variables for common styles involves defining reusable style dictionaries and applying them to components. This method keeps your code clean and easy to manage by centralizing style definitions.

<em class="c-header">Here is the prvious example (shortened to first section only) with the styles converted to variables.</em>

```python
# Import Dash components
from dash import Dash, html

# Create Dash app instance
app = Dash(__name__)

# Define common styles
container_style = {'padding': '20px', 'border': '1px solid black', 'marginTop': '20px'}
heading_style = {'textAlign': 'left'}
centered_style = {'textAlign': 'center'}

# Define app layout using HTML components
app.layout = html.Div([
    html.H1('Title of Dash App', style=centered_style, id='main-heading'),

    html.Div([
        html.H2('Section 1', style=heading_style),
        html.P('This is a paragraph in section 1.', style={'fontSize': 14}),
        html.Ul([
            html.Li('List Item 1'),
            html.Li('List Item 2'),
            html.Li('List Item 3'),
        ]),
    ], style=container_style),
])

# Deploy app on the local Python server
if __name__ == '__main__':
    app.run(debug=True)
```
***What changed:*** *Repeated style properties are moved to variables above the* `app.layout` *and applied to multiple html components, reducing redundancy.*

#### *Using* `className` *for common styles*

Using class names for common styles involves assigning CSS classes to components and defining styles in an external CSS file. This approach separates style definitions from your code, promoting better organization and maintainability.

<em class="c-header">Here is the prvious example (shortened to first section only) with the styles converted to CSS classes.</em>

First, create an external CSS file (e.g., `assets/custom_styles.css`):
```css
.container {
    padding: 20px;
    border: 1px solid black;
    margin-top: 20px;
}

.heading {
    text-align: left;
}

.centered {
    text-align: center;
}
```

Then, update your Dash app to use the class names:

```python
# Import Dash components
from dash import Dash, html

# Create Dash app instance
app = Dash(__name__)

# Define app layout using HTML components
app.layout = html.Div([
    html.H1('Title of Dash App', className='centered', id='main-heading'),

    html.Div([
        html.H2('Section 1', className='heading'),
        html.P('This is a paragraph in section 1.', style={'fontSize': 14}),
        html.Ul([
            html.Li('List Item 1'),
            html.Li('List Item 2'),
            html.Li('List Item 3'),
        ]),
    ], className='container'),
])

# Deploy app on the local Python server
if __name__ == '__main__':
    app.run(debug=True)
```
***What changed:*** *Styles definitions are moved to an external CSS file. HTML components are assigned* `className` *property instead of* `style`*, making the code cleaner and styles easier to manage.*

<div class="warning" markdown="1">
When defining CSS classes in the external CSS file, remember that class names must be **prefixed with a dot**. For example, use `.container` instead of `container`. Then assign this class to the `className` property of the selected HTML component to apply the desired styles.
</div>

<!--
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
