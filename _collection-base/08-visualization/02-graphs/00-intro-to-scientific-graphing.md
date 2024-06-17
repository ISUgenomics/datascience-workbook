---
title: "Introduction to scientific graphing"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "intro"
order: 820
level: 1
categories: ["visualization", "graphic-tools", "plotting", "bash-scripting", "programming"]
tags: ["scientific", "excel", "gnuplot", "mathplotlib", "plotly", "python", "R", "Highcharts", "Google Charts", "Tableau Public", "raw-data"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

**Graphs and charts are powerful tools that allow scientists to present experimental and numerical data.** Additionally, data visualization enables researchers to **identify patterns and trends** in their data that might not be immediately apparent in raw data, leading to deeper insights and better decision-making. It also allows them **communicate complex findings** to a wider audience in a clear and concise manner.

![01_graphic_design_charts.png]({{ images_path }}/01_graphic_design_charts.png)

<span style="color: #ff3870;font-weight: 500;"> The goal of scientific graphing is to create visually appealing and informative graphs and charts that accurately represent the research data.</span> It involves selecting the appropriate type of chart or graph that accurately represents the data being presented and the research question being addressed.

Data visualization design is an essential tool that can help you **create visual aids for scientific presentations, academic publications, research posters, and educational materials**. By presenting data visually, researchers can convey information more effectively, engage their audience, and facilitate a deeper understanding of the research findings.


# Scientific Graphics

There are two main categories of scientific graphics:
* creating data visualizations: charts, graphs
* designing infographics: diagrams, schemas

![01_graphic_design_elements.png]({{ images_path }}/01_graphic_design_elements.png)

Both data visualizations and infographics are used to present information visually. **Data visualizations are primarily focused on representing data**, while infographics are designed to communicate complex ideas and concepts.
<span style="color: #ff3870;font-weight: 500;">Understanding the differences between these two types of scientific graphics can help researchers choose the right type of visualization for their specific needs.
</span><br>
**In this section we provide introduction to the types of Data Visualization**. See section {% include target_link href=811 %} to learn more about visualizing ideas and concepts using infographics.

## Creating Data Visualizations

Data visualizations are used to **represent data in a visual form**. They are typically used **to illustrate trends, patterns, and relationships** in the data. Data visualizations can be simple or complex, and they can include **charts, graphs, tables, and maps**.

<div class="note" markdown="1">
The main goal of creating data visualizations is to present data in a clear and concise way that is easy to understand. They are often used to communicate findings in research papers, presentations, and reports.
</div>

<div class="protip" markdown="1">
Data visualizations are particularly useful for presenting large amounts of data or for illustrating complex relationships.
</div>

### *Data types*

A wide range of data can be visualized using graphs and charts, including:
* **Quantitative**, which includes numerical data such as measurements or counts <br>*e.g.,* `bar charts` `line charts` `scatter plots` `histograms`

![01_graphic_design_data_vis.png]({{ images_path }}/01_graphic_design_data_vis.png)

* **Categorical**, which includes non-numerical data such as names or categories <br>*e.g.,* `pie charts` `stacked bar charts` `bubble charts`

![01_graphic_design_data_vis2.png]({{ images_path }}/01_graphic_design_data_vis2.png)

* **Temporal**, which includes data that changes over time <br>*e.g.,* `line charts` `area charts` `heatmaps`

![01_graphic_design_data_vis3.png]({{ images_path }}/01_graphic_design_data_vis3.png)


### Tools

Data visualization tools can be categorized as either **online or standalone**. Online tools are typically accessed through a web browser and hosted on a remote server, while standalone tools are installed locally on a computer.

<table>
<tr> <th>tool</th> <th>description</th> <th>type</th> </tr>
<tr> <td><a href="https://public.tableau.com/app/discover" target="_blank">Tableau Public</a></td> <td>Tableau Public is a free data visualization software that allows users to create and publicly share <b>interactive and dynamic charts, graphs, maps, and dashboards</b>. It is easy to use and offers a wide range of customization options.</td> <td>online with GUI</td> </tr>
<tr> <td><a href="https://" target="_blank">Microsoft Excel</a></td> <td>Microsoft Excel is a popular spreadsheet software that includes basic data visualization tools, such as charts and graphs. It is easy to use and widely available.</td> <td>standalone with GUI</td> </tr>
<tr> <td>{% include target_link href=821.1 text="Gnuplot" %}</td> <td>GNUPlot is a free and open-source command-line tool for creating 2D and 3D plots, graphs, and charts. It runs on various platforms, including Linux, macOS, and Windows.</td> <td>command line <i>(shell scripting)</i></td> </tr>
<tr> <td><a href="https://r-charts.com" target="_blank">R</a></td> <td>R is a programming language and software environment for statistical computing and graphics. It offers a wide range of data visualization tools, including charts, graphs, and maps.</td> <td>command line <i>(R programming)</i></td> </tr>
<tr> <td><a href="https://plotly.com/dash/workspaces/" target="_blank">Plotly</a></td> <td>Plotly is a free online data visualization tool that allows users to create <b>interactive charts, graphs, and other visualizations</b>. It offers various Data App Workspaces including online Data Science IDE or local Jupyter notebooks (web-based).</td> <td>web-based, command-line <i>(python programming)</i></td> </tr>
<tr> <td><a href="https://www.highcharts.com" target="_blank">Highcharts</a></td> <td>Highcharts is a JavaScript charting library that allows users to create <b>interactive charts and graphs for web pages</b>.</td> <td>for web developers</td> </tr>
<tr> <td><a href="https://developers.google.com/chart" target="_blank">Google Charts</a></td> <td>Google Charts is a free data visualization tool that allows users to create a range of <b>interactive charts and graphs</b>, including scatter plots, pie charts, and line graphs. It is designed for developers but can be used by researchers with some programming experience.</td> <td>for web developers</td> </tr>
</table>


## How to get started?

To get started with creating high-quality and meaningful data visualizations using modern types of charts and interactivity options, the following steps can be helpful:

1. **Define your research question and data** <br>Begin by defining your research question and understanding the data that you want to visualize. This will help you identify the type of chart or graph that will be most appropriate for your data.

2. **Choose the right chart type** <br>Based on your research question and data, select the most appropriate chart type to represent the data in the most effective and visually appealing way. Modern types of charts and built-in interactivity can offer additional layers of insights and visual interest.

3. **Select the right tool** <br>Choose a data visualization tool that meets your needs and is appropriate for your skill level. Many tools offer interactive and animated features that can enhance your data visualization and create a more engaging experience for your audience.

4. **Design the chart** <br>Pay attention to the design of your chart. Ensure that the chart is easy to read and understand by using appropriate labeling, colors, and fonts. Consider using interactivity options such as hover-over tooltips or interactive legends to provide additional information and insights.

5. **Share and refine** <br>Share your data visualization with collaborators and peers. Then, refine your charts based on feedback and continue to iterate until you have created a high-quality and meaningful visualization that accurately represents your data and research question.

By following these steps and paying attention to best practices, you can create effective and engaging data visualizations that communicate the research findings to a wider audience.

By exploring the hands-on tutorials in this Workbook, you can gain a great starting point to learn how to create data visualizations. See the [Further Reading](#further-reading) section below to find a list of covered topics.
