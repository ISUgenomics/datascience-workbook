---
title: "Styling Toolkit for DSW Contributors"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
---

{% include toc %}

# Welcome to our styling guide!

I'm excited to share the collection of styling templates for the Data Science workbook. To keep everything looking sharp and unified, we'd love for all our contributors to stick to these guidelines when crafting their content. Doing so helps us maintain a cohesive look and feel throughout, making the workbook not only more professional but also more engaging for everyone involved. <base class="mb"> *Thanks for helping us keep things looking great!*

## How It Works & Getting Started

This document is designed to empower your content creation with a suite of styling tools. Here's what you'll find inside and how to make the most of it:

| feature | description | purpose |
|---------|-------------|---------|
| **Standardized Color Coding**  | To ensure consistency throughout the workbook, I've implemented standardized color-coding. | *This helps in maintaining a cohesive look and encourages a visually intuitive learning environment.* |
| **Component Templates**        | I've curated a selection of templates styled with front-end `Markdown` or back-end `CSS`, encapsulated within `HTML` components. | *These are not just for looks; they serve as a learning aid, making the information more accessible and engaging for users.* |
| **Raw Code Blocks**            | For each styled component, you can find the corresponding raw code blocks. | *This means you can quickly locate the styling you need,* ***copy-and-paste*** *it directly into your tutorial. It's all about efficiency and ease of use.* |
| **Customization Options**      | Many templates are built to accommodate more sophisticated customization. | *This flexibility allows for adjusting templates to fit the desired appearance and functionality of your content.* |
| **Interactive Elements**       | To make learning more engaging, some templates include interactive elements. | *These range from hover effects to complex interactions, improving user experience with better organized, on-click content presentation.* |
| **Accessibility Features**     | Guidelines are provided to ensure content accessibility for everyone. | *This ensures that your content is not only beautiful but also accessible to users with diverse needs.* |

---

# standardized colors

**Markdown doesn't support text coloring**, but you can easily apply colors using **CSS styling**. <base class="mb">
This involves <u>wrapping your text</u> in simple **HTML tags** like `<span>`, `<em>`, `<p>`

|        code           |       description        |       preview       |
|-----------------------|--------------------------|---------------------|
| `<span> text </span>` | *default: inline normal* | <span> text </span> |
| `<em> text </em>`     | *default: inline italic* | <em> text </em>     |
|  `<p> text </p>`      | *default: new paragraph* | text                |

<div class="footnote c-alert" markdown="1">
\* all of these HTML components require closing tags: `</span>`, `</em>`, `</p>`
</div>

<u>To apply colors:</u>
* add a `class` attribute to these **tags**,
* where the value is a string of selected `class names`, *e.g.,* <em class="c-alert">"c-bad"</em>.

<div class="row">
  <div class="col-6" markdown="1">
  ```html
  <span class="c-bad"> text </span>
  <em class="c-bad"> text </em>
  <p class="c-bad"> text </p>
  ```
  </div>
  <div class="pl-2">
    <em class="c-gray">preview:</em><br>
    <span class="c-bad"> text </span>
    <em class="c-bad"> text </em>
    <p class="c-bad"> text </p>
  </div>
</div>
In your tutorial you can use it like this: <br>
<div class="row">
  <div class="col-6" markdown="1">
  ```html
  The font can be changed to <span class="c-bad"> red text </span> or
  <em class="c-bad"> red italic </em> using these HTML tags.
  ```
  </div>
  <div class="pl-2">
    <em class="c-gray">preview:</em><br>
    The font can be changed to <span class="c-bad"> red text </span> or <em class="c-bad"> red italic </em> using these HTML tags.
  </div>
</div>

<br>
Below is a list of `class names` designed to standardize `font colors` across the workbook:

| <span style="display: flex; width: 100px;">class name</span> | preview | <span style="display: flex; width: 320px;">syntax</span> | usage |
|------------|----------------------------------------|------------------------------------------|---------------------------------------------------------------------------|
|`c-bad`     | <span class="c-bad"> text </span>      | `<span class="c-bad"> text </span>`      | `Good News`, `Pros/Advantages`, `Success Messages`, `Positive Feedback`   |
|`c-good`    | <span class="c-good"> text </span>     | `<span class="c-good"> text </span>`     | `Bad News`, `Cons/Disadvantages`, `Error Messages`, `Warnings/Alerts`     |
|`c-gray`    | <span class="c-gray"> text </span>     | `<span class="c-gray"> text </span>`     | `quotation`, `text placeholder`, `disabled options`, `gray out the text`  |
|`c-header`  | <span class="c-header"> text </span>   | `<span class="c-header"> text </span>`   | *important section that will be highlighted in the table of contents*     |
|`c-alert`   | <span class="c-alert"> text </span>    | `<span class="c-alert"> text </span>`    | `notifications`, `announcements`, `user alerts`                           |
|`c-exercise`| <span class="c-exercise"> text </span> | `<span class="c-exercise"> text </span>` | *headers for* `exercises` *that will be highlighted in the table of contents* |

---

# color-coded boxes

In creating tutorials, using color-coded templates like <br>
<button class="btn protip"></button> , <button class="btn warning"></button> , <button class="btn note"></button> , <button class="btn example"></button> , <button class="btn exercise"></button> <br>
can greatly enhance readability and comprehension by visually distinguishing different types of information. These templates are pre-styled with distinct background colors, appropriate headers, and default font styles, making each category instantly recognizable. <base class="mb">
***Just place your text within this template and select class to utilize their unique styling.***

```html
<div class="protip" markdown="1">
text
</div>
```
<div class="footnote c-alert" markdown="1">
\* Please ensure that `text` is positioned on a new line, with the `<div></div>` tags on separate lines themselves. The `markdown="1"` attribute is optional and allows for the use of markdown syntax within the box.
</div>

Below is a list of `class names` designed to standardize `color-coded boxes` across the workbook:

| <span style="display: flex; width: 100px;">class name</span> | preview | usage |
|------------|----------------------------------------|------------------------------------------|------------------------------------------------------|
|`protip`    | <button class="btn protip"></button>   | Use for expert advice, quick solutions or common tricks to improve understanding or efficiency. |
|`warning`   | <button class="btn warning"></button>  | Alert users to potential pitfalls or important considerations.                                  |
|`note`      | <button class="btn note"></button>     | Highlight important terms, established knowledge or additional information.                     |
|`example`   | <button class="btn example"></button>  | Provide real-life or hypothetical scenarios to illustrate concepts.                             |
|`exercise`  | <button class="btn exercise"></button> | Offer practical (coding) activities or questions for users to apply what they've learned.       |


<div class="flex" markdown="1">
### <button class="btn protip"></button>
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see code example</summary>

```html
<div class="protip" markdown="1">
*The window can be resized with the mouse and the font text can be increased by pressing* `cmd +` *or* `ctrl +` *on Mac or Windows/Linux, respectively.*
</div>
```
</details>


<div class="protip mt-0" markdown="1">
*The window can be resized with the mouse and the font text can be increased by pressing* `cmd +` *or* `ctrl +` *on Mac or Windows/Linux, respectively.*
</div>

<div class="flex" markdown="1">
### <button class="btn warning"></button>
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see example code</summary>

```html
<div class="warning" markdown="1">
*Note that* `~` *refers to the* `$HOME` *of a given user and* `/` *refers to the root directory in the file system! <br> You can **replace it with a path** to any location.*
</div>
```
</details>

<div class="warning mt-0" markdown="1">
*Note that* `~` *refers to the* `$HOME` *of a given user and* `/` *refers to the root directory in the file system! <br> You can **replace it with a path** to any location.*
</div>

<div class="flex" markdown="1">
### <button class="btn note"></button>
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see example code</summary>

```html
<div class="note" markdown="1">
*Linux is open-source operating system, free to download and use, which makes it an attractive option for individuals and organizations on a budget. Here are some of the benefits of using Linux:*
</div>
```
</details>

<div class="note mt-0" markdown="1">
*Linux is open-source operating system, free to download and use, which makes it an attractive option for individuals and organizations on a budget. Here are some of the benefits of using Linux:*
</div>

<div class="flex" markdown="1">
### <button class="btn example"></button>
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see example code</summary>

```html
<div class="example">
# Python-based ScatterPlot
In this project, we will explore the use of:
* `matplotlib`, a Python data visualization library, to create a scatterplot
* `random` module of the `numpy` library, to generate a dataset for plotting, composed of 100 3-dimensional points.
</div>
```
</details>

<div class="example mt-0 mb-0">
# Python-based ScatterPlot  <br>
In this project, we will explore the use of: <br>
* `matplotlib`, a Python data visualization library, to create a scatterplot <br>
* `random` module of the `numpy` library, to generate a dataset for plotting, composed of 100 3-dimensional points.
</div>

<div class="footnote c-alert" markdown="1">
\* In this example, we deliberately omitted `markdown="1"` to show the raw Markdown syntax as text. <br>&ensp; Including `markdown="1"` would allow <u>kramdown</u> to interpret and render the syntax.
</div>

<div class="flex" markdown="1">
### <button class="btn exercise"></button>
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see example code</summary>

```html
<div class="exercise" markdown="1">
**Step 1: Identify Your Achievement** <br>
*Think about the most recent small achievement in your research work or personal life, especially something you’ve worked hard on or for a long time.*
</div>
```
</details>

<div class="exercise mt-0" markdown="1">
**Step 1: Identify Your Achievement** <br>
*Think about the most recent small achievement in your research work or personal life, especially something you’ve worked hard on or for a long time.*
</div>


## **custom styling**

The built-in styles include:
* `background color`, `box type title`, `default text color`
* `italic` style is automatically applied to <button class="btn protip"></button>, <button class="btn warning"></button> and <button class="btn note"></button> box types.

For <button class="btn example"></button> and <button class="btn exercise"></button> types, <em class="c-alert">italic font style</em> can be forced by including the `italic` class.

<details class="inline" markdown="1"><summary class="italic c-header">see code example (text normal)</summary>

```html
<div class="example" markdown="1">
The table outlines a concise example of setting and achieving SMART goals for a research project in agriculture.
</div>
```
</details>

<div class="example">
The table outlines a concise example of setting and achieving SMART goals for a research project in agriculture.
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see code example (text italic)</summary>

```html
<div class="example italic" markdown="1">
The table outlines a concise example of setting and achieving SMART goals for a research project in agriculture.
</div>
```
</details>

<div class="example italic">
The table outlines a concise example of setting and achieving SMART goals for a research project in agriculture.
</div>

## *text color*

For a list of built-in `classes` defining available **text colors**, please refer to the section: [Standardized Colors](#standardized-colors), where instructions for **coloring specific text fragments** are also provided.

If you wish to **change the color of all content** within a color box, you can apply the `color class` to the entire container as shown:

<details class="inline" markdown="1"><summary class="italic c-header">see code example (text default)</summary>

```html
<div class="protip" markdown="1">
Due to incompatibilities between certain python libraries, it is highly recommended to manage python packages in virtual environments ( `conda` , `venv` or equivalent ), one environment per project.
</div>
```
</details>

<div class="protip" markdown="1">
Due to incompatibilities between certain python libraries, it is highly recommended to manage python packages in virtual environments ( `conda` , `venv` or equivalent ), one environment per project.
</div>

<details class="inline" markdown="1"><summary class="italic c-header">see code example (text color altered)</summary>

```html
<div class="protip c-good" markdown="1">
Due to incompatibilities between certain python libraries, it is highly recommended to manage python packages in virtual environments ( `conda` , `venv` *or equivalent ), one environment per project.
</div>
```
</details>

<div class="protip c-good mb-0" markdown="1">
Due to incompatibilities between certain python libraries, it is highly recommended to manage python packages in virtual environments ( `conda` , `venv` or equivalent ), one environment per project.
</div>

<div class="footnote c-alert" markdown="1">
\* This approach is not recommended as it undermines the purpose of unified, color-coded boxes.
</div>


## *indentation*

By default, color-coded boxes span 100% width, but you can adjust their indentation up to 3 levels to `left-align` with bullet points if desired.


<details class="inline" markdown="1"><summary class="italic c-header">see code example (normal position)</summary>

```html
<div class="exercise" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>
```
</details>

<div class="exercise" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>


<details class="inline" markdown="1"><summary class="italic c-header">see code example (indentation level 1)</summary>

```html
<div class="exercise level-1" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>
```
</details>

* example bullet point, **class:** `level-1`
<div class="exercise level-1" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>

<ul><ul><li> example bullet point, <b>class:</b> <code>level-2</code></li></ul></ul>

<div class="exercise level-2" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>

<ul><ul><ul><li> example bullet point, <b>class:</b> <code>level-3</code></li></ul></ul></ul>

<div class="exercise level-3" markdown="1">
**You've got this!** Reaching out for support is a brave and positive step. We're all in this together.
</div>

## *custom box title*

By default, each color-coded box comes with a built-in title, like <button class="btn protip"></button> or <button class="btn warning"></button>, which occupies some space but can be helpful for users by providing immediate context. This feature is designed for contributor convenience. Should your needs require altering or removing this title, it can be achieved with minimal customization.

### *- no title*

If you prefer a color-coded box without a title, add **before** to the `class` attribute and include an additional `data-before` attribute set to an empty string **""**. *This will remove the box title.*

<details class="inline" markdown="1"><summary class="italic c-header">see code example (no box title)</summary>

```html
<div class="exercise before" markdown="1" data-before="">
**Challenge:** You've got this! Reaching out for support is a brave and positive step. We're all in this together.
</div>
```
</details>

<div class="exercise before" markdown="1" data-before="">
**Challenge:** You've got this! Reaching out for support is a brave and positive step. We're all in this together.
</div>

### *- custom title*

To customize the title of a color-coded box, add **before** to the `class` attribute and specify your **custom text** in the `data-before` attribute. *This will replace the default box title with your text.*

<details class="inline" markdown="1"><summary class="italic c-header">see code example (custom box title)</summary>

```html
<div class="example before" markdown="1" data-before="Challenger Space Shuttle Disaster">
The Challenger disaster is a tragic example where ignoring potential risks had catastrophic consequences. The decision to launch despite concerns about the O-ring's performance in cold weather is a case study in the critical importance of heeding risk indicators in project decisions.
</div>
```
</details>

<div class="example before" markdown="1" data-before="Challenger Space Shuttle Disaster">
The Challenger disaster is a tragic example where ignoring potential risks had catastrophic consequences. The decision to launch despite concerns about the O-ring's performance in cold weather is a case study in the critical importance of heeding risk indicators in project decisions.
</div>


---

# pros & cons

Pros and cons lists are crucial in tutorials as they provide a balanced overview, **helping readers make informed decisions** by clearly outlining the advantages and disadvantages of a particular tool, method, or concept. To facilitate this, built-in **pros** <em class="pros"></em> and **cons** <em class="cons"></em> `classes` are provided, supporting two main usage cases:

* **marker + independent text styling** <br>
By using an `<em class="pros"></em>` or `<em class="cons"></em>` tag without any text, <br> you incorporate a <strong class="c-pros">green</strong> or <strong class="c-bad">red</strong> **marker**, respectively. This is ideal when you wish to <u>follow the marker with text using different styling</u>, allowing for **markdown styling in your text**. <base class="mb"> *It's a flexible option for when you want to visually indicate pros and cons without affecting the styling of the text that follows.*

<details class="inline level-1" markdown="1"><summary class="italic c-header">see code example (marker + text with markdown styling, manual items spacing)</summary>

```html
<em class="pros"></em> The notebook `.ipynb` is primarily designed for **interactive computing, data exploration, and rapid prototyping**, making it an excellent tool for tasks like data analysis, data visualization, and machine learning.

<em class="cons"></em> Some online notebook platforms **require a subscription or incur charges** for access to additional resources, which may be an issue for those working on a tight budget.
```
</details>

<div class="level-1" markdown="1">
<em class="pros"></em> The notebook `.ipynb` is primarily designed for **interactive computing, data exploration, and rapid prototyping**, making it an excellent tool for tasks like data analysis, data visualization, and machine learning.

<em class="cons"></em> Some online notebook platforms **require a subscription or incur charges** for access to additional resources, which may be an issue for those working on a tight budget.
</div>

* **marker + plain text** <br>
Applying a class within `<p class="pros"> text </p>` or `<p class="cons"> text </p>` tags not only adds a <strong class="c-pros">green</strong> or <strong class="c-bad">red</strong> **marker** but also includes your text, prefixing your paragraph with this visual cue. This approach **automatically spaces items** for clarity. Markdown is not allowed for text styling, you should **use plain text** or combine HTML (tags like: `<em>`, `<i>`, `<b>`, `<u>`) and CSS styling. <base class="mb"> *It's beneficial for creating simple lists or paragraphs where consistent spacing with no advanced styling are key.*

<details class="inline level-1" markdown="1"><summary class="italic c-header">see code example (marker + plain text, automatic items spacing)</summary>

```html
<p class="pros"> You don't need an account or to sign in. Just open the jupyter-try and start using it! </p>
<p class="cons"> You can't install custom libraries. </p>
```
</details>

<div class="level-1" markdown="1">
<p class="pros"> You don't need an account or to sign in. Just open the jupyter-try and start using it! </p>
<p class="cons"> You can't install custom libraries. </p>
</div>

---

# custom spacing

Occasionally, customizing the spacing between built-in components can be beneficial. While the default settings are optimized for most scenarios, there might be instances where you want to add an extra `line break` for clarity or <u>reduce the space</u> for a more compact look. To accommodate these needs, several styling classes are available:

* **add extra space**

| <span style="display: flex; width: 150px;">component</span> | effect          | additional info |
|---------------------|----------------------------------------|-----------------------------------|
| `<br>`              | line break                             | works with both Markdown and HTML syntax; for a full-size empty line, simply add it twice: <br><br> |
| `<base class="mb">` | line break with 0.5 line space below   | useful if you want to add some space between paragraphs or html components |
| `<base class="mb">` | line break with 0.8 line space above   | useful if you want to add some space between paragraphs or html components |


<br>**MARKDOWN LIMITATIONS**

<div class="row">
<div style="width: 46%" markdown="1">
```
You don't need an account or to sign in.
You can't install custom libraries.
```
</div>
<div class="pl-2" style="font-size: 0.8em;" markdown="1">
<em class="c-gray"> 1) Text is displayed <u>inline</u>:</em> <base class="mb">
You don't need an account or to sign in.
You can't install custom libraries.
</div>
</div>

<div class="row">
<div style="width: 46%" markdown="1">
```
You don't need an account or to sign in.

You can't install custom libraries.
```
</div>
<div class="pl-2" style="font-size: 0.8em;" markdown="1">
<em class="c-gray">2) Text is displayed with <u>new line</u> break:</em> <base class="mb">
You don't need an account or to sign in.

You can't install custom libraries.
</div>
</div>

<br>**CUSTOM TEXT SPACING**

<div class="row">
<div style="width: 55%" markdown="1">
```html
You don't need an account or to sign in. <br> You can't install custom libraries.
```
</div>
<div class="pl-2" style="font-size: 0.8em; margin-top: -0.4em;" markdown="1">
<em class="c-gray"> Simple <u>line break</u> with</em> `<br>` <base class="mb">
You don't need an account or to sign in. <br> You can't install custom libraries.
</div>
</div> <base class="mb">

<div class="row">
<div style="width: 55%; padding-top: 1.4em;" markdown="1">
```html
You don't need an account or to sign in. <br><br> You can't install custom libraries.
```
</div>
<div class="pl-2" style="font-size: 0.8em;" markdown="1">
<em class="c-gray"><u>Full-line space</u> with</em> `<br><br>` <base class="mb">
You don't need an account or to sign in. <br><br> You can't install custom libraries.
</div>
</div>

<div class="row">
<div style="width: 55%; padding-top: 1.4em;" markdown="1">
```html
**NumPy** is a Python library for numerical computing
that includes a random module for generating random numbers
and arrays. <base class="mb"> **Matplotlib** is a popular
data visualization library for Python. It provides a wide
range of tools for creating different types of plots.
```
</div>
<div class="pl-2" style="font-size: 0.8em; padding-top: 1.4em;" markdown="1">
<em class="c-gray"><u>Half-line space</u> with</em> `<base class="mb">` <base class="mb">
**NumPy** is a Python library for numerical computing
that includes a random module for generating random numbers
and arrays. <base class="mb"> **Matplotlib** is a popular
data visualization library for Python. It provides a wide
range of tools for creating different types of plots.
</div>
</div>

<div class="row">
<div style="width: 55%; padding-top: 1.4em;">
<div class="language-html highlighter-rouge"><div class="highlight">
<pre class="highlight"><code>```python
# Define a function that calculates the sum of two numbers
def add_numbers(x, y):
    return x + y
```
<span style="color:#000080;">&lt;base</span> <span style="color:#008080;">class=</span><span style="color:#d14;">"mt"</span><span style="color:#000080;">&gt;</span> **C. Imported functions**
</code></pre></div></div>
</div>
<div class="pl-2" style="font-size: 0.8em; padding-top: 1.45em;" markdown="1">
<em class="c-gray"><u>Mid-section break</u> (1.5 line) with</em> `<base class="mt">` <br>
<div class="footnote c-alert mt-" markdown="1">
\* add some extra space after code block for a new subsection
</div> <base class="mb">
```python
# Define a function that calculates the sum of two numbers
def add_numbers(x, y):
    return x + y
```
<base class="mt"> **C. Imported functions**
</div>
</div>




<br>**COMPONENTS SPACING**

Color-coded boxes feature a `0.5 line` margin on **top** and a `1.5 line` margin at the **bottom**.
* Reducing spacing becomes useful to enhance appearance when **stacking multiple boxes**, similar to when a box is the last element in a nested structure.
* For adding more spacing, the <u>solutions for spacing text</u> *(see subsection just above)* can also be applied to other components with success.

<div class="row">
<div style="width: 55%" markdown="1">
```html
<div class="exercise" markdown="1">
  **Step 1: Identify Your Achievement**
</div>
<div class="exercise" markdown="1">
  **Step 2: Reflect on Your Progress**
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; margin-top: -0.4em; width: 45%" markdown="1">
<em class="c-gray"> Default spacing between color-coded boxes</em> <base class="mb">
<div class="exercise" markdown="1">
  **Step 1: Identify Your Achievement**
</div>
<div class="exercise" markdown="1">
  **Step 2: Reflect on Your Progress**
</div>
</div>
</div> <base class="mt">

<div class="row">
<div style="width:55%" markdown="1">
```html
<div class="exercise mb-0" markdown="1">
  **Step 1: Identify Your Achievement**
</div>
<div class="exercise" markdown="1">
  **Step 2: Reflect on Your Progress**
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; margin-top: -0.7em; width: 45%" markdown="1">
<em class="c-gray"> Reduced bottom spacing with</em> `class` **mb-0** <base class="mb">
<div class="exercise mb-0" markdown="1">
  **Step 1: Identify Your Achievement**
</div>
<div class="exercise mb-0" markdown="1">
  **Step 2: Reflect on Your Progress**
</div>
<div class="footnote c-alert" markdown="1">
\* there are also: **mt-0** and **mt-** `classes` that set top margin to 0 and -0.8, respectively
</div>
</div>
</div> <base class="mt">

<div class="row">
<div style="width:55%" markdown="1">
```html
<div class="exercise" markdown="1">
  **Step 1: Identify Your Achievement**
  <div class="protip mb-0 font-1" markdown="1">
    **Step 2: Reflect on Your Progress**
  </div>
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; margin-top: -0.8em; width: 45%" markdown="1">
<em class="c-gray"> Useful for nested boxes (box as the last element)</em> <base class="mb">
<div class="exercise mb-0" markdown="1">
  **Step 1: Identify Your Achievement**
  <div class="protip mb-0 font-1">
    <b>Step 2: Reflect on Your Progress</b>
  </div>
</div>
<div class="footnote c-alert" markdown="1">
\* `font-1` class keeps the same font size for nested boxes; font size is decreased otherwise
</div>
</div>
</div> <base class="mb">








<!--
---

# code

## code-inline


<code class="code-inline">command</code>

---

# TODO:

<br><span style="background-color: #e8e9e8; color: #ff3870; font-weight: 500; padding: 5px 7px;">checklist</span>&nbsp; **A few universal tips for Data Collection:**

<br><span style="background-color: #e8e9e8; color: #0ba37f; font-weight: 500; padding: 5px 7px;">TUTORIAL</span>&nbsp;

<span style="color: #ff3870;font-weight: 500;">Experimenting with new development ideas often involves creating new branches or forks.</span>

# <span style="color: #8896c1;">Working with Local Repos</span>


<details style="margin: 0 0 20px 0;"><summary style="background-color: #FFFACD; width: 25%;"><span style="font-weight:800; font-size: 16px;">EXAMPLE:</span></summary>

<div style="background: #FFFACD; padding: 15px; margin-bottom: 20px; font-size: 16px;">
<span style="font-style:italic;">The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis. This platform allows for <b>scalable computing resources</b> to handle large genomic datasets efficiently and <b>includes built-in tools</b> for data visualization, which simplifies the monitoring of analysis progress and outcomes. </span>
</div>
</details>

### <i><span style="color: #EC8000; ">EXERCISE</span></i>


<details><summary>See the recommendations</summary>

<span style="color: #005920;">Regularly scheduled backups to multiple locations, including cloud services and physical drives, following the 3-2-1 backup rule <br>(3 total copies of your data, 2 of which are local but on different devices, and 1 copy off-site) is a good practice.</span><br> <span style="color: #AF0000;">Random or infrequent backups, or relying on a single backup solution, are bad practices that increase the risk of irrecoverable data loss.</span>
</details>

-->
