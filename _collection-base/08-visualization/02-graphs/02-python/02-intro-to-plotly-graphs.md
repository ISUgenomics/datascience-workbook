---
title: "Introduction to Plotly"
note: (python)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "tutorial"
order: 822.02
level: 3
categories: ["visualization", "graphic-tools", "plotting", "programming", "library-package-module"]
tags: ["python", "plotly", "chart", "development-environment", "IDE", "jupyter", "notebook", "colorscale", "machine-learning"]
attributes: ["installation", "example", "interactive"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

## Plotly Graphing Library for Python

In this article you will learn the basics about <a href="https://plotly.com/python/" target="_blank">Plotly Graphing Library for Python</a>. <br>
Don't hesitate to explore the user-friendly <a href="https://plotly.com/python/reference/" target="_blank">Plotly for Python documentation</a>.

# Plotly installation

<div class="required" markdown="1">
Plotly is an external library and is **not included in the Python standard library**. Therefore, it **requires a separate installation**. Ensure you install a version that meets the specific needs of your application.
</div>

Getting started with the **Plotly** library as a **Python** developer is straightforward, regardless of the operating system you are working on. Just open a terminal window (or command prompt) and install Plotly with `pip` or `conda` following the commands below.

<div class="warning" markdown="1">
If you don't have pip or Conda installed, start with the tutorial(s) that will guide you through this necessary step:
* **PIP INSTALLATION:** <a class="t-links" href="531"></a>
* **CONDA INSTALLATION:** <a class="t-links" href="231"></a>
</div>


## Install with pip

In terminal window, execute the command:
```bash
pip install plotly==5.8.1
```

<div class="warning" markdown="1">
The version specified in the command (e.g., `5.8.1`) should be adjusted to suit the requirements of your application. It is best to **use the latest stable release** of Plotly, which can be checked and verified <a href="https://pypi.org/project/plotly/" target="_blank">here</a>.
</div>

## Install with conda

In terminal window, execute the command:
```bash
conda install -c plotly plotly=5.8.1
```

<div class="protip" markdown="1">
For the efficient development of interactive Python applications, you will also need other libraries, such as Dash, Pandas, or SciPy. So, it is a good idea to create a new virtual environment with Conda right away and add into it other modules over time. <base class="mb">
Quick guide (execute commands in the terminal window):
```bash
conda info --envs                     # Active environment shown with *; on Mac Pro activate base for Miniforge3_x86
conda create -n plotly python=3.8     # replace 'plotly' with custom name
conda activate plotly
pip install plotly==5.8.1
```
</div>


# Select development environment (IDE)

## Coding in the Terminal

In the <a class="t-links" href="310">terminal window</a> navigate to the desired location and create the empty script file, e.g. `ex_plotly_graphing.py`

```bash
touch ex_plotly_graphing.py
```

Open the file in the selected <a class="t-links" href="322">CLI text editor</a> (Nano, Vim, mcedit, etc.) or <a class="t-links" href="411">VSC editor with GUI</a> and go to [Plotly import](#plotly-import) section in this tutorial.

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
Follow to the next step: [Plotly import](#plotly-import) section in this tutorial.

# Plotly import

Open your python script file or Jupyter notebook and copy paste the following code snippet:

```python
# -*- coding: utf-8 -*-

import plotly
```

<div class="warning" markdown="1">
When you perform a simple `import plotly`, it primarily sets up the package namespace and provides access to the top-level attributes and submodules. However, it does not import any of the submodules' contents directly. To use the functionalities provided by specific submodules like `plotly.express` or `plotly.graph_objects`, you still need to import those submodules explicitly.
</div>

# Plotly submodules

The Plotly library has a modular architecture, which means that its functionality is divided into several submodules. This design allows you to import only the components you need, making your code more efficient and easier to manage. Below is a table listing the core submodules of Plotly, along with a concise description and the import statement for each.

| submodules                                      | functionality                 | import statement |
|-------------------------------------------------|-------------------------------|------------------|
| [plotly.express](#plotly-express-wrapper)       | High-level interface for quick and easy plotting.                            | <code class='code-block'>import plotly.express as px</code>       |
| [plotly.graph_objects](#plotly-graph-objects)   | Detailed and customizable graphing options.                                  | <code class='code-block'>import plotly.graph_objects as go</code> |
| [plotly.subplots](#plotly-subplots)             | Tools for creating complex subplot layouts.                                  | <code class='code-block'>from plotly import subplots</code>       |
| [plotly.figure_factory](#plotly-figure-factory) | Factory functions for specific types of figures (e.g., dendrograms, clustergrams). | <code class='code-block'>import plotly.figure_factory as ff</code> |
| [plotly.io](#plotly-io)                         | Input/output operations, including saving figures and configuring renderers. | <code class='code-block'>import plotly.io as pio</code>           |
| [plotly.data](#plotly-data)                     | Sample datasets for testing and learning.                                    | <code class='code-block'>import plotly.data as data</code>        |
| [plotly.colors](#plotly-colors)                 | Utilities for working with colors and color scales.                          | <code class='code-block'>import plotly.colors as pc</code>        |

<div class="protip" markdown="1">
By importing these submodules as needed, you can efficiently leverage Plotly's powerful data visualization capabilities.
</div>

## **Plotly Express wrapper**

<a href="https://plotly.com/python/plotly-express/" target="_blank">Plotly Express</a> is a built-in module in the **Plotly** library. It is a high-level interface for creating quick and easy plots. It provides a concise syntax for creating a wide range of interactive visualizations, making it particularly useful for exploratory data analysis.

**Import Statement:**
```python
import plotly.express as px
```

<base class="mt">
**Common plot types:**<button class="btn c-alert ml">CHEATSHEET</button>

| function               | description                    |
|------------------------|--------------------------------|
| `px.scatter()`         | creates a scatter plot         |
| `px.line()`            | creates a line plot            |
| `px.bar()`             | creates a bar chart            |
| `px.histogram()`       | creates a histogram            |
| `px.pie()`             | creates a pie chart            |
| `px.sunburst()`        | creates a sunburst chart       |
| `px.treemap()`         | creates a treemap              |
| `px.density_heatmap()` | creates a density heatmap      |
| `px.density_contour()` | creates a density contour plot |
| `px.scatter_matrix()`  | creates a scatter matrix plot  |
| `px.imshow()`          | creates an image plot (for heatmaps etc.) |


### <button class="btn example">SCATTERPLOT</button>

<div class="note" markdown="1">
The `iris` dataset is a classic dataset in the field of machine learning and statistics. It consists of 150 observations of iris flowers, with each observation containing four features: sepal length, sepal width, petal length, and petal width. These features are used to classify the flowers into three species: *Iris-setosa*, *Iris-versicolor* and *Iris-virginica*. The dataset is often used for testing and demonstrating machine learning algorithms and data visualization techniques.
</div>

This example uses the built-in `iris` dataset to create a scatter plot of sepal width vs. sepal length, with different colors representing different species.

```python
import plotly.express as px

# Using the built-in iris dataset
df = px.data.iris()

# Create a scatter plot
fig = px.scatter(df, x='sepal_width', y='sepal_length', color='species')

# Show the plot
fig.show()
```

![python-plotly-express-scatterplot]({{ images_path }}/02-python-plotly-express-scatterplot.png)


## **Plotly Graph Objects**

<a href="https://plotly.com/python/graph-objects/" target="_blank">Plotly Graph Objects</a> is a built-in module in the **Plotly** library. It manages the `Figure` object that represent the entire plotting area. Graph Object provides a detailed and customizable approach to creating plots. It is ideal for creating complex visualizations that require fine-grained control over every aspect of the plot.

**Import Statement:**
```python
import plotly.graph_objects as go
```

<base class="mt">
**Common plot types and Figure object:**<button class="btn c-alert ml">CHEATSHEET</button>

| function               | description                     |
|------------------------|---------------------------------|
| `go.Figure()`          | creates a figure object         |
| `go.Scatter()`         | creates a scatter plot trace    |
| `go.Bar()`             | creates a bar chart trace       |
| `go.Histogram()`       | creates a histogram trace       |
| `go.Pie()`             | creates a pie chart trace       |
| `go.Sunburst()`        | creates a sunburst chart trace  |
| `go.Treemap()`         | creates a treemap trace         |
| `go.Heatmap()`         | creates a heatmap trace         |
| `go.Contour()`         | creates a contour plot trace    |
| `go.Scatter3d()`       | creates a 3D scatter plot trace |


### <button class="btn example">SCATTERPLOT TRACE</button>

This example creates a figure and adds a scatter plot trace with both lines and markers.

```python
import plotly.graph_objects as go

# Create a figure
fig = go.Figure()

# Add a scatter plot trace
fig.add_trace(go.Scatter(x=[1, 2, 3], y=[4, 5, 6], mode='lines+markers'))

# Show the plot
fig.show()
```

![python-plotly-go-scatterplot-trace]({{ images_path }}/02-python-plotly-go-scatterplot-trace.png)

<!-- Explore *go_heatmap_FQC.ipynb* notebook. -->


## **Plotly Subplots**

<a href="https://plotly.com/python/subplots/" target="_blank">Plotly Subplots</a> is a built-in module in the **Plotly** library. It provides tools for creating complex subplot layouts, allowing you to create multi-plot figures with ease. This is useful for comparing multiple visualizations side-by-side.

**Import Statement:**
```python
from plotly import subplots
```

<base class="mt">
**Subplots function:**<button class="btn c-alert ml">CHEATSHEET</button>

| function                   | description                             |
|----------------------------|-----------------------------------------|
| `subplots.make_subplots()` | creates a figure with multiple subplots |


### <button class="btn example">SCATTERPLOT SUBPLOTS</button>

This example creates a figure with two subplots: a scatter plot on the left and a bar chart on the right.

```python
from plotly import subplots
import plotly.graph_objects as go

# Create a figure with 1 row and 2 columns of subplots
fig = subplots.make_subplots(rows=1, cols=2)

# Add a scatter plot trace to the first subplot
fig.add_trace(go.Scatter(x=[1, 2, 3], y=[4, 5, 6]), row=1, col=1)

# Add a bar chart trace to the second subplot
fig.add_trace(go.Bar(x=[1, 2, 3], y=[6, 5, 4]), row=1, col=2)

# Show the plot
fig.show()
```

![python-plotly-subplots-scatterplot-barchart]({{ images_path }}/02-python-plotly-subplots-scatterplot-barchart.png)


## **Plotly Figure Factory**

<a href="https://plotly.com/python/figure-factories/" target="_blank">Plotly Figure Factory</a> is a built-in module in the **Plotly** library. It contains various factory functions for creating specific types of figures, such as dendrograms, clustergrams and annotated heatmaps. It simplifies the creation of these specialized plots.

**Import Statement:**
```python
import plotly.figure_factory as ff
```

<base class="mt">
**Figure Factory functions:**<button class="btn c-alert ml">CHEATSHEET</button>

| function                        | description                   |
|---------------------------------|-------------------------------|
| `ff.create_dendrogram()`        | creates a dendrogram          |
| `ff.create_clustergram()`       | creates a clustergram         |
| `ff.create_annotated_heatmap()` | creates an annotated heatmap  |
| `ff.create_distplot()`          | creates a distribution plot   |


### <button class="btn example">ANNOTATED HEATMAP</button>

This example creates an annotated heatmap from a sample data array.

```python
import plotly.figure_factory as ff

# Sample data
data = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

# Create an annotated heatmap
fig = ff.create_annotated_heatmap(data)

# Show the plot
fig.show()
```

![python-plotly-figure-factory-heatmap]({{ images_path }}/02-python-plotly-figure-factory-heatmap.png)


## **Plotly IO**

<a href="https://plotly.com/python/renderers/" target="_blank">Plotly IO</a> is a built-in module in the **Plotly** library. It provides functions for input/output operations, such as saving figures and configuring the default renderer. This is useful for exporting your visualizations and customizing how they are displayed.

**Import Statement:**
```python
import plotly.io as pio
```

<base class="mt">
**Input/Output functions:**<button class="btn c-alert ml">CHEATSHEET</button>

| function            | description                                  |
|---------------------|----------------------------------------------|
| `pio.write_image()` | saves a figure as an image file              |
| `pio.write_html()`  | saves a figure as an HTML file               |
| `pio.show()`        | displays a figure using a specified renderer |
| `pio.renderers()`   | manages and configures default renderers     |


### <button class="btn example">EXPORT IMAGE</button>

This example creates a scatter plot using Plotly Express and saves it as a PNG image using `plotly.io`.

```python
import plotly.express as px
import plotly.io as pio

# Create a scatter plot using Plotly Express
fig = px.scatter(x=[1, 2, 3], y=[4, 5, 6])

# Save the plot as a PNG image
pio.write_image(fig, 'scatter_plot.png')
```

![python-plotly-io-scatter-as-png]({{ images_path }}/02-python-plotly-io-scatter-as-png.png)

<p class="footnote" markdown="1">To display a saved plot in Jupyter Notebook after saving it with `plotly.io.write_image` or `fig.write_image`, you can use the `IPython.display` module to display the image file.</p>

<div class="protip" markdown="1">
For a simpler way to save your figures as images, you can use the `write_image` method directly on the figure object. After creating your figure, simply call:
```python
fig.write_image("filename.png")
```

<button class="btn more mr"></button><a href="https://plotly.com/python/static-image-export/" target="_blank">Static Image Export in Plotly-Python</a>
</div>

<div class="warning" markdown="1">
Ensure you have `kaleido` installed:
```bash
pip install -U kaleido
```
or via conda:
```bash
conda install -c conda-forge python-kaleido
```
to enable <a href="https://plotly.com/python/static-image-export/" target="_blank">rendering the figure to a static image file</a> functionality. This method can be more convenient than using `plotly.io.write_image()`. **Kaleido is now the recommended approach.**
</div>


## **Plotly Data**

<a href="https://plotly.com/python/data/" target="_blank">Plotly Data</a> is a built-in module in the **Plotly** library. It includes sample datasets that can be used for testing and learning. These datasets provide convenient data for trying out Plotly’s functionalities.

**Import Statement:**
```python
import plotly.data as data
```

<base class="mt">
**Load Dataset functions:**<button class="btn c-alert ml">CHEATSHEET</button>

| function            | description            |
|---------------------|------------------------|
| `data.iris()`       | Iris flower dataset    |
| `data.tips()`       | Tipping data           |
| `data.gapminder()`  | Gapminder global development data |
| `data.stocks()`     | Stock prices data      |
| `data.wind()`       | Wind patterns data     |


### <button class="btn example">BUILT-IN DATASETS</button>

This example loads the gapminder dataset and creates a line plot showing life expectancy over the years, with different colors representing different continents.

```python
import plotly.express as px
import plotly.data as data

# Load the gapminder dataset
df = data.gapminder()

# Create a line plot
fig = px.line(df, x='year', y='lifeExp', color='continent',
              title='Life Expectancy Over the Years by Continent')

# Show the plot
fig.show()
```

![python-plotly-dataset-lineplot]({{ images_path }}/02-python-plotly-dataset-lineplot.png)

<div class="note" markdown="1">
In the examples where data is loaded using `plotly.data`, you do not need to `import pandas` separately because Plotly's built-in datasets are returned as pandas `DataFrames`. This allows you to use them directly with Plotly's plotting functions without needing additional data management steps.
</div>

<div class="protip" markdown="1">
However, if you want to perform more complex data manipulations before plotting, you might still need to `import pandas`.

For the examples given above, you can add additional import for pandas like this: *(assuming you have <a class="t-links" href="536" section="#install-pandas-library">pandas installed</a>)*
```python
import pandas as pd
```
Now you can use pandas functions to manipulate the DataFrame `df` if needed. <br>
*Forexample, you can filter the data to include only records after the year 2000 using pandas, and then creates a line plot showing life expectancy over the years for different continents.*
```python
import plotly.express as px
import plotly.data as data
import pandas as pd

# Load the gapminder dataset
df = data.gapminder()

# Manipulate the DataFrame: filter for data after the year 2000
df_filtered = df[df['year'] > 2000]

# Create a line plot with the filtered data
fig = px.line(df_filtered, x='year', y='lifeExp', color='continent',
              title='Life Expectancy Over the Years by Continent (Post-2000)')

# Show the plot
fig.show()
```
</div>


## **Plotly Colors**

<a href="https://plotly.com/python/colorscales/" target="_blank">Plotly Colors</a> is a built-in module in the **Plotly** library. It contains utilities for working with colors and color scales. It helps in customizing the appearance of your plots by providing predefined color scales and functions to manipulate colors.

**Import Statement:**
```python
import plotly.colors as pc
```

<base class="mt">
**Load Dataset functions:**<button class="btn c-alert ml">CHEATSHEET</button>

| function                       | description                                    |
|--------------------------------|------------------------------------------------|
| `pc.qualitative`             | access to qualitative color scales             |
| `pc.sequential`              | access to sequential color scales              |
| `pc.diverging`               | access to diverging color scales               |
| `pc.find_intermediate_color` | finds an intermediate color between two colors |


### <button class="btn example">BUILT_IN COLORSCALES</button>

This example prints the first color from the 'Plotly' qualitative color scale.

```python
import plotly.colors as pc

# Print the first color in the 'Plotly' qualitative color scale
print(pc.qualitative.Plotly[0])
```

![python-plotly-colors-get-value]({{ images_path }}/02-python-plotly-colors-get-value.png)

### *Color Variables*

Color variables in **Plotly** have a string type value provided in the one of the following forms:
- HEX color, e.g., `"#FFFFFF"`
- HSL color, e.g., `"hsl(hue, saturation,lightness)"` <br><em class="c-header">The Hue values are in degrees, from 0 to 360 (0 - red, 120 - green, 240 - blue). The saturation and lightness are in % from 0% to 100%.</em>
- RGB color, e.g., `"rgb(red, green, blue)"` <br><em class="c-header">Each channel is provided as an intiger between 0 and 255, e.g., rgb(128, 0, 128).</em>
- RGBA color, e.g., `"rgba(r, g, b, a)"` <br><em class="c-header">with 'a' value set up in range from 0.0 (transparent) to 1.0 (solid)</em>
- common name, e.g., `"blue"` <br><em class="c-header">see [Built-in Plotly colors](#built-in-plotly-colors) section below</em>

#### <b class="prefix-2"></b>Built-in Plotly named CSS colors

*(common names)* <br>
<span style="background-color:aliceblue">aliceblue</span>,
<span style="background-color:antiquewhite">antiquewhite</span>,
<span style="background-color:aqua">aqua</span>,
<span style="background-color:aquamarine">aquamarine</span>,
<span style="background-color:azure">azure</span>,
<span style="background-color:beige">beige</span>,
<span style="background-color:bisque">bisque</span>,
<span style="background-color:black; color: white">black</span>,
<span style="background-color:blanchedalmond">blanchedalmond</span>,
<span style="background-color:blue">blue</span>,
<span style="background-color:blueviolet">blueviolet</span>,
<span style="background-color:brown">brown</span>,
<span style="background-color:burlywood">burlywood</span>,
<span style="background-color:cadetblue">cadetblue</span>,
<span style="background-color:chartreuse">chartreuse</span>,
<span style="background-color:chocolate">chocolate</span>,
<span style="background-color:coral">coral</span>,
<span style="background-color:cornflowerblue">cornflowerblue</span>,
<span style="background-color:cornsilk">cornsilk</span>,
<span style="background-color:crimson">crimson</span>,
<span style="background-color:cyan">cyan</span>,
<span style="background-color:darkblue">darkblue</span>,
<span style="background-color:darkcyan">darkcyan</span>,
<span style="background-color:darkgoldenrod">darkgoldenrod</span>,
<span style="background-color:darkgray">darkgray</span>,
<span style="background-color:darkgrey">darkgrey</span>,
<span style="background-color:darkgreen">darkgreen</span>,
<span style="background-color:darkkhaki">darkkhaki</span>,
<span style="background-color:darkmagenta">darkmagenta</span>,
<span style="background-color:darkolivegreen">darkolivegreen</span>,
<span style="background-color:darkorange">darkorange</span>,
<span style="background-color:darkorchid">darkorchid</span>,
<span style="background-color:darkred">darkred</span>,
<span style="background-color:darksalmon">darksalmon</span>,
<span style="background-color:darkseagreen">darkseagreen</span>,
<span style="background-color:darkslateblue">darkslateblue</span>,
<span style="background-color:darkslategray">darkslategray</span>,
<span style="background-color:darkslategrey">darkslategrey</span>,
<span style="background-color:darkturquoise">darkturquoise</span>,
<span style="background-color:darkviolet">darkviolet</span>,
<span style="background-color:deeppink">deeppink</span>,
<span style="background-color:deepskyblue">deepskyblue</span>,
<span style="background-color:dimgray">dimgray</span>,
<span style="background-color:dimgrey">dimgrey</span>,
<span style="background-color:dodgerblue">dodgerblue</span>,
<span style="background-color:firebrick">firebrick</span>,
<span style="background-color:floralwhite">floralwhite</span>,
<span style="background-color:forestgreen">forestgreen</span>,
<span style="background-color:fuchsia">fuchsia</span>,
<span style="background-color:gainsboro">gainsboro</span>,
<span style="background-color:ghostwhite">ghostwhite</span>,
<span style="background-color:gold">gold</span>,
<span style="background-color:goldenrod">goldenrod</span>,
<span style="background-color:gray">gray</span>,
<span style="background-color:grey">grey</span>,
<span style="background-color:green">green</span>,
<span style="background-color:greenyellow">greenyellow</span>,
<span style="background-color:honeydew">honeydew</span>,
<span style="background-color:hotpink">hotpink</span>,
<span style="background-color:indianred">indianred</span>,
<span style="background-color:indigo">indigo</span>,
<span style="background-color:ivory">ivory</span>,
<span style="background-color:khaki">khaki</span>,
<span style="background-color:lavender">lavender</span>,
<span style="background-color:lavenderblush">lavenderblush</span>,
<span style="background-color:lawngreen">lawngreen</span>,
<span style="background-color:lemonchiffon">lemonchiffon</span>,
<span style="background-color:lightblue">lightblue</span>,
<span style="background-color:lightcoral">lightcoral</span>,
<span style="background-color:lightcyan">lightcyan</span>,
<span style="background-color:lightgoldenrodyellow">lightgoldenrodyellow</span>,
<span style="background-color:lightgray">lightgray</span>,
<span style="background-color:lightgrey">lightgrey</span>,
<span style="background-color:lightgreen">lightgreen</span>,
<span style="background-color:lightpink">lightpink</span>,
<span style="background-color:lightsalmon">lightsalmon</span>,
<span style="background-color:lightseagreen">lightseagreen</span>,
<span style="background-color:lightskyblue">lightskyblue</span>,
<span style="background-color:lightslategray">lightslategray</span>,
<span style="background-color:lightslategrey">lightslategrey</span>,
<span style="background-color:lightsteelblue">lightsteelblue</span>,
<span style="background-color:lightyellow">lightyellow</span>,
<span style="background-color:lime">lime</span>,
<span style="background-color:limegreen">limegreen</span>,
<span style="background-color:linen">linen</span>,
<span style="background-color:magenta">magenta</span>,
<span style="background-color:maroon">maroon</span>,
<span style="background-color:mediumaquamarine">mediumaquamarine</span>,
<span style="background-color:ediumblue">ediumblue</span>,
<span style="background-color:mediumorchid">mediumorchid</span>,
<span style="background-color:mediumpurple">mediumpurple</span>,
<span style="background-color:mediumseagreen">mediumseagreen</span>,
<span style="background-color:mediumslateblue">mediumslateblue</span>,
<span style="background-color:mediumspringgreen">mediumspringgreen</span>,
<span style="background-color:mediumturquoise">mediumturquoise</span>,
<span style="background-color:mediumvioletred">mediumvioletred</span>,
<span style="background-color:midnightblue">midnightblue</span>,
<span style="background-color:mintcream">mintcream</span>,
<span style="background-color:mistyrose">mistyrose</span>,
<span style="background-color:moccasin">moccasin</span>,
<span style="background-color:navajowhite">navajowhite</span>,
<span style="background-color:navy">navy</span>,
<span style="background-color:oldlace">oldlace</span>,
<span style="background-color:olive">olive</span>,
<span style="background-color:olivedrab">olivedrab</span>,
<span style="background-color:orange">orange</span>,
<span style="background-color:orangered">orangered</span>,
<span style="background-color:orchid">orchid</span>,
<span style="background-color:palegoldenrod">palegoldenrod</span>,
<span style="background-color:palegreen">palegreen</span>,
<span style="background-color:paleturquoise">paleturquoise</span>,
<span style="background-color:palevioletred">palevioletred</span>,
<span style="background-color:papayawhip">papayawhip</span>,
<span style="background-color:peachpuff">peachpuff</span>,
<span style="background-color:peru">peru</span>,
<span style="background-color:pink">pink</span>,
<span style="background-color:plum">plum</span>,
<span style="background-color:powderblue">powderblue</span>,
<span style="background-color:purple">purple</span>,
<span style="background-color:red">red</span>,
<span style="background-color:rosybrown">rosybrown</span>,
<span style="background-color:royalblue">royalblue</span>,
<span style="background-color:rebeccapurple">rebeccapurple</span>,
<span style="background-color:saddlebrown">saddlebrown</span>,
<span style="background-color:salmon">salmon</span>,
<span style="background-color:sandybrown">sandybrown</span>,
<span style="background-color:seagreen">seagreen</span>,
<span style="background-color:seashell">seashell</span>,
<span style="background-color:sienna">sienna</span>,
<span style="background-color:silver">silver</span>,
<span style="background-color:skyblue">skyblue</span>,
<span style="background-color:slateblue">slateblue</span>,
<span style="background-color:slategray">slategray</span>,
<span style="background-color:slategrey">slategrey</span>,
<span style="background-color:snow">snow</span>,
<span style="background-color:springgreen">springgreen</span>,
<span style="background-color:steelblue">steelblue</span>,
<span style="background-color:tan">tan</span>,
<span style="background-color:teal">teal</span>,
<span style="background-color:thistle">thistle</span>,
<span style="background-color:tomato">tomato</span>,
<span style="background-color:turquoise">turquoise</span>,
<span style="background-color:violet">violet</span>,
<span style="background-color:wheat">wheat</span>,
<span style="background-color:white">white</span>,
<span style="background-color:whitesmoke">whitesmoke</span>,
<span style="background-color:yellow">yellow</span>,
<span style="background-color:yellowgreen">yellowgreen</span>

Here's an example of a scatter plot using some of the named CSS colors:

```python
import plotly.express as px
import plotly.graph_objects as go

# Create a sample scatter plot using discrete named colors
fig = go.Figure()

# Add scatter plot points with named CSS colors
fig.add_trace(go.Scatter(
    x=[1, 2, 3, 4],
    y=[10, 11, 12, 13],
    mode='markers',
    marker=dict(color=['red', 'green', 'blue', 'orange'], size=15)
))

# Show the plot
fig.show()
```

This example demonstrates how to use discrete named colors in a Plotly scatter plot.
* The `marker` dictionary specifies the `color` and `size` of the markers.

![python-plotly-named-colors-on-scatterplot]({{ images_path }}/02-python-plotly-named-colors-on-scatterplot.png)

#### <b class="prefix-2"></b>Built-in Plotly colorscales

To list built-in colorscales in Plotly, try this code snippet:
```python
import plotly.colors as pc

# Accessing built-in Plotly color scales
color_scales = pc.named_colorscales()

# Print all available named Plotly color scales
print(", ".join(color_scales))
```

The expected output should be a list of colorscale names:

'aggrnyl', 'agsunset', 'algae', 'amp', 'armyrose', 'balance',
'blackbody', 'bluered', 'blues', 'blugrn', 'bluyl', 'brbg',
'brwnyl', 'bugn', 'bupu', 'burg', 'burgyl', 'cividis', 'curl',
'darkmint', 'deep', 'delta', 'dense', 'earth', 'edge', 'electric',
'emrld', 'fall', 'geyser', 'gnbu', 'gray', 'greens', 'greys',
'haline', 'hot', 'hsv', 'ice', 'icefire', 'inferno', 'jet',
'magenta', 'magma', 'matter', 'mint', 'mrybm', 'mygbm', 'oranges',
'orrd', 'oryel', 'oxy', 'peach', 'phase', 'picnic', 'pinkyl',
'piyg', 'plasma', 'plotly3', 'portland', 'prgn', 'pubu', 'pubugn',
'puor', 'purd', 'purp', 'purples', 'purpor', 'rainbow', 'rdbu',
'rdgy', 'rdpu', 'rdylbu', 'rdylgn', 'redor', 'reds', 'solar',
'spectral', 'speed', 'sunset', 'sunsetdark', 'teal', 'tealgrn',
'tealrose', 'tempo', 'temps', 'thermal', 'tropic', 'turbid',
'turbo', 'twilight', 'viridis', 'ylgn', 'ylgnbu', 'ylorbr', 'ylorrd'

<div class="protip" markdown="1">
**Appending '_r' to a named colorscale reverses colors order**, e.g., mint_r
</div>

![built-in Plotly Colorscales]({{ images_path }}/plotly-colorscales.png)

<div class="more" markdown="1">
…about the <a href="https://plotly.com/python/colorscales/" target="_blank">Continuous Color Scales and Color Bars in Python</a>
</div>


#### <b class="prefix-2"></b>Custom colorscale

You can also create your own colorscale as an array of lists, each composed of two elements. The first refers to the percentile rank, and the second to the applied color. Color can be provided in any [string format](#color-variables) among hex, hsl, rgb or common name.
<br>e.g.,

```python
custom_colorscale = [
                      [0.00, '#636EFA'],
                      [0.25, '#AB63FA'],
                      [0.50, '#FFFFFF'],
                      [0.75, '#E763FA'],
                      [1.00, '#EF553B']
                     ]
```

Here's an example of using a custom colorscale in a simple Plotly heatmap, where:
* `go.Heatmap()` creates the heatmap using the **data** `z` and the **custom colorscale** `colorscale=custom_colorscale`.

```python
import plotly.graph_objects as go

# Define the custom color scale
custom_colorscale = [[0.00, '#636EFA'], [0.25, '#AB63FA'], [0.50, '#FFFFFF'], [0.75, '#E763FA'], [1.00, '#EF553B']]

# Sample data for the heatmap
z = [ [1, 20, 30], [20, 1, 60], [30, 60, 1] ]

# Create the heatmap with the custom color scale
fig = go.Figure(data=go.Heatmap(z=z, colorscale=custom_colorscale))

# Show the plot
fig.show()
```

![python-plotly-custom-colorscale-heatmap]({{ images_path }}/02-python-plotly-custom-colorscale-heatmap.png)

<p class="footnote">The custom colorscale is displayed as a gradient bar in the legend on the right side of the plot. This gradient bar visually represents the mapping of data values to the specified colors in the custom color scale.</p>

<!-- Explore *px_scatter_PCA.ipynb* notebook.  -->
