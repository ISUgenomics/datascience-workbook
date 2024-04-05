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


# text (font) colors

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
  The font can be changed to <span class="c-good"> green text </span> or
  <em class="c-bad"> red italic </em> using these HTML tags.
  ```
  </div>
  <div class="pl-2">
    <em class="c-gray">preview:</em><br>
    The font can be changed to <span class="c-good"> green text </span> or <em class="c-bad"> red italic </em> using these HTML tags.
  </div>
</div>

<div class="row">
  <div class="col-6" markdown="1">
  ```html
  <em class="c-alert"><b>NOTE:</b> Before starting this tutorial, ensure you meet a few necessary requirements. </em>
  ```
  </div>
  <div class="pl-2">
    <em class="c-alert"><b>NOTE:</b> Before starting this tutorial, ensure you meet a few necessary requirements. </em>
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


## **TOC highlighted section :**

You can change the color of a section title by applying one of the predefined color classes, which will also **reflect in the Table of Contents**. This approach is a strategic way to underscore section significance, ensuring it's both eye-catching and readily noticeable to readers. <base class="mb">
**To prevent overuse**, it's recommended to limit this approach to three specific scenarios:

### -<span class="c-header bold"> Important Section </span>

<details class="pl-2"><summary class="italic c-header">see code example</summary>

<div class="inline"> <span class="c-header" style="font-size: 1.25em; font-weight: bold;"> Important Section </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
## <span class="c-header"> Important Section </span>
```
```html
<h2 class="c-header"> Important Section </h2>
```
</details> <base class="mb">

<div class="inline"> <span class="c-header italic" style="font-size: 1.25em; font-weight: bold;"> Important Section </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
<h2 class="c-header italic"> Important Section </h2>
```
</details>
</details> <base class="mb">

<div class="pl-2" markdown="1">
Apply `c-header` color class for sections of special significance, as determined by your discretion.
</div>


### -<span class="c-exercise bold"> EXERCISE </span>

<details class="pl-2"><summary class="italic c-header">see code example</summary>

<div class="inline"> <span class="c-exercise" style="font-size: 1.25em; font-weight: bold;"> EXERCISE </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
## span class="c-exercise"> EXERCISE </span>
```
```html
<h2 class="c-exercise"> EXERCISE </h2>
```
</details> <base class="mb">

<div class="inline"> <span class="c-exercise italic" style="font-size: 1.25em; font-weight: bold;"> EXERCISE </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
<h2 class="c-exercise italic"> EXERCISE </h2>
```
</details>
</details> <base class="mb">

<div class="pl-2" markdown="1">
Mark exercises using `c-exercise` color class and the simple keyword **EXERCISE**.
</div>


### -<span class="c-alert bold"> Coming Soon </span>

<details class="pl-2"><summary class="italic c-header">see code example</summary>

<div class="inline"> <span class="c-alert" style="font-size: 1.25em; font-weight: bold;"> Coming Soon </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
## <span class="c-alert"> Coming Soon </span>
```
```html
<h2 class="c-alert"> Coming Soon </h2>
```
</details> <base class="mb">

<div class="inline"> <span class="c-alert italic" style="font-size: 1.25em; font-weight: bold;"> Coming Soon </span> </div>
<details class="pl-2 inline" markdown="1"><summary class="italic c-gray">see code example</summary>

```html
<h2 class="c-alert italic"> Coming Soon </h2>
```
</details>
</details> <base class="mb">

<div class="pl-2" markdown="1">
Use `c-alert` color class for <u>temporary alerts</u> with straightforward action keywords like <em class="c-alert">"Coming Soon", "Update Required", "New Feature" or "Important Notice"</em>. These tags and keywords ensure the content's importance is immediately recognizable, enhancing the document's overall effectiveness and user navigation.
</div>


# background colors


Below is a list of `class names` designed to standardize `background colors` across the workbook:

| <span style="display: flex; width: 100px;">class name</span> | preview | <span style="display: flex; width: 320px;">syntax</span> | usage |
|------------|----------------------------------------|------------------------------------------|---------------------------------------------------------------------------|
|`bc-warning` | <span class="bc-warning pa-s"> background </span>  | `<span class="bc-warning"> text </span>`  | *background of the warning color-coded box*       |
|`bc-protip`  | <span class="bc-protip pa-s"> background </span>   | `<span class="bc-protip"> text </span>`   | *background of the pro tip color-coded box*       |
|`bc-note`    | <span class="bc-note pa-s"> background </span>     | `<span class="bc-note"> text </span>`     | *background of the note color-coded box*          |
|`bc-example` | <span class="bc-example pa-s"> background </span>  | `<span class="bc-example"> text </span>`  | *background of the example color-coded box*       |
|`bc-exercise`| <span class="bc-exercise pa-s"> background </span> | `<span class="bc-exercise"> text </span>` | *background of the exercise color-coded box*      |
|`bc-code`    | <span class="bc-code pa-s"> background </span>     | `<span class="bc-code"> text </span>`     | *background imitating code blocks*                |
|`bc-data`    | <span class="bc-data pa-s"> background </span>     | `<span class="bc-data"> text </span>`     | *example input data for coding exercises*         |
|`bc-template`| <span class="bc-template pa-s"> background </span> | `<span class="bc-template"> text </span>` | *templates for a user: checklists / docs, etc.*   |
|`bc-output`  | <span class="bc-output pa-s"> background </span>   | `<span class="bc-output"> text </span>`   | *outputs from the command-line / terminal*        |

<base class="mt">
<p class="mb-">Background color classes can be applied to:</p>
### **- TEXT**
within HTML tags like `<span>`, `<em>`, `<p>`:

<details class="inline" markdown="1"><summary class="italic c-header">see code example (simple text)</summary>

```html
Learn more about the basics of <em class="bc-note">programming in Python</em> by working through the <span class="bc-protip">hands-on tutorials.</span>
```
</details>

Learn more about the basics of <em class="bc-note">programming in Python</em> by working through the <span class="bc-protip">hands-on tutorials.</span>


### **- BUTTONS**

<details class="inline" markdown="1"><summary class="italic c-header">see code example (simple button)</summary>

```html
Learn more about the basics of programming in <button class="btn bc-note">Python</button> by working through the <button class="btn bc-template">hands-on tutorials</button>.
```
</details>

Learn more about the basics of programming in <button class="btn bc-note">Python</button> by working through the <button class="btn bc-template">hands-on tutorials</button>.


<details class="inline" markdown="1"><summary class="italic c-header">see code example (useful standardized buttons)</summary>

```html
<button class="btn bc-code c-good">TUTORIAL</button>
<button class="btn bc-code c-alert">checklist</button>
```
</details>

<button class="btn bc-code c-good">TUTORIAL</button> &emsp; <button class="btn bc-code c-alert">checklist</button>





<base class="mt">
**- COLLAPSIBLE SECTIONS**: See [collapsible section](#collapsible-section)
<base class="mt">
**- COLOR-CODED BOXES**: See section [color-coded boxes](#color-coded-boxes)

### **- CUSTOM BOXES**
such as HTML tags `<div>` or `<pre>` or <code>:

<details class="inline" markdown="1"><summary class="italic c-header">see code example (expected command line output)</summary>

```html
<div class="bc-output">
<b class="c-header">abadacz</b>@MacBook(bash):<b class="c-good">data_wrangling</b><span class="c-bad">$</span> pwd <br>
/Users/abadacz/WORKDIR/data_wrangling
</div>
```
</details>

<div class="bc-output">
<b class="c-header">abadacz</b>@MacBook(bash):<b class="c-good">data_wrangling</b><span class="c-bad">$</span> pwd <br>
/Users/abadacz/WORKDIR/data_wrangling
</div>


<details class="inline mt" markdown="1"><summary class="italic c-header">see code example (data preserving whitespace)</summary>

```html
<pre class="bc-data">
label_1  982     0       0       0       0       0       1       0       0
label_1  983     0       0       0       0       0       1       0       0
label_1  984     0       0       0       0       0       1       0       0
</pre>
```
</details>

<pre class="bc-data">
label_1  982     0       0       0       0       0       1       0       0
label_1  983     0       0       0       0       0       1       0       0
label_1  984     0       0       0       0       0       1       0       0
</pre>


<details class="inline mt" markdown="1"><summary class="italic c-header">see code example (custom box with copyable content)</summary>

```html
<code class="code-block bc-template"># Define a function that calculates the sum of two numbers
def add_numbers(x, y):
    return x + y
</code>
```
</details>


<code class="code-block bc-template"># Define a function that calculates the sum of two numbers
def add_numbers(x, y):
    return x + y
</code>
<div class="footnote c-alert" markdown="1">
\* Ensure that your `text` begins on the same line as the opening `<code>` tag! Don't forget to add the `“code-block”` class to include a copy button.
</div>


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


## **custom box styling**

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


## *box indentation*

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


# pros & cons marks: <em class="pros"></em><em class="cons"></em>

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


# custom spacing

Occasionally, customizing the spacing between built-in components can be beneficial. While the default settings are optimized for most scenarios, there might be instances where you want to add an extra `line break` for clarity or <u>reduce the space</u> for a more compact look. To accommodate these needs, several styling classes are available:

* **add extra space**

| <span style="display: flex; width: 150px;">component</span> | effect          | additional info |
|---------------------|----------------------------------------|-----------------------------------|
| `<br>`              | line break                             | works with both Markdown and HTML syntax; for a full-size empty line, simply add it twice: <br><br> |
| `<base class="mb">` | line break with 0.5 line space below   | useful if you want to add some space between paragraphs or html components |
| `<base class="mt">` | line break with 0.8 line space above   | useful if you want to add some space between paragraphs or html components |


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
<code class="code-block">```python
# Define a function that calculates the sum of two numbers
def add_numbers(x, y):
    return x + y
```
<span style="color:#000080;">&lt;base</span> <span style="color:#008080;">class=</span><span style="color:#d14;">"mt"</span><span style="color:#000080;">&gt;</span> **C. Imported functions**
</code>
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


# code

Embedding code snippets in tutorials provides practical examples, enhancing understanding and facilitating hands-on learning. <base class="mb">
In the workbook, several aspects of code presentation are **automated**, including:
* code styling (font, background color, layout),
* highlighting within code blocks based on the specified programming language,
* a copy button for code blocks in the top-right corner,
* and simple inline formatting for brief commands or options.

## code-inline

**Inline code in Markdown** is used to format text as code within a sentence, making it highlighted for clarity. The syntax for inline code involves wrapping the text with
<u>backticks</u> <code class="code-inline">` `</code>, for example <code class="code-inline">`text`</code>, to format it as `text` within the flow of a sentence. <base class="mb">
Examples include using code syntax for:
* short commands like `git clone`,
* function names such as `print()`,
* options like `--verbose`

**Inline code in HTML-based components**, like color-coded boxes, is possible when the `markdown="1"` attribute is included in the HTML tag.

<div class="row">
<div style="width:55%" markdown="1">
```html
<div class="exercise" markdown="1">
  Navigate to desired location using the `cd` command.
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<em class="c-gray"> Preview:</em> <base class="mb">
<div class="exercise" markdown="1">
  Navigate to desired location using the `cd` command.
</div>
</div>
</div> <base class="mb">


If this approach fails, employing the `<code>` tag with `class="code-inline"` ensures inline code rendering. <em class="c-alert">In this case, the</em> `markdown="1"` <em class="c-alert"> attribute is not required.</em>

**SYNTAX:** `<code class="code-inline"> text </code>`

<div class="row">
<div style="width:55%" markdown="1">
```html
<div class="exercise">
  Navigate to desired location using the <code class="code-inline">cd</code> command.
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<em class="c-gray"> Preview:</em> <base class="mb">
<div class="exercise">
  Navigate to desired location using the <code class="code-inline">cd</code> command.
</div>
</div>
</div> <base class="mb">

Moreover, this method enables the <u>presentation of raw Markdown syntax</u> *(including backticks)* as inline code. This is particularly **useful for explaining syntax**, as demonstrated in this guide.

<div class="row">
<div style="width:55%" markdown="1">
```html
<div class="exercise">
The Markdown syntax for inline code involves wrapping the text with <u>backticks</u>
<code class="code-inline">` `</code>, for example <code class="code-inline">`text`</code>
</div>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<em class="c-gray"> Preview:</em> <base class="mb">
<div class="exercise">
The Markdown syntax for inline code involves wrapping the text with <u>backticks</u>
<code class="code-inline">` `</code>, for example <code class="code-inline">`text`</code>
</div>
</div>
</div> <base class="mb">


## code-block

Code blocks in tutorials provide a clear and structured way to **present complex code snippets**, facilitating easier understanding and practical learning for the reader. <base class="mb"> The Markdown **syntax for multiline code snippets** involves enclosing the code between triple backticks <code class="code-inline">```</code> and optionally following the opening backticks with the programming language name to guide syntax highlighting by Rouge.

<div class="row">
<div style="width:55%">
<code class="code-block">```bash
for i in 123; do
    echo $i
```</code>
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<em class="c-gray"> Rendering preview:</em> <base class="mb">
```bash
for i in 123; do
    echo $i
```
</div>
</div> <base class="mb">

Displaying the raw Markdown syntax *(left panel above)* was achieved by encapsulating it within a pure HTML `<code>` tag, used with the `class="code-block"` to preserve and showcase the syntax accurately. <em class="c-gray">This approach is useful for providing a guide on the exact code to be used, as it prevents immediate rendering of Markdown syntax, allowing users to see the code as it is.</em> <base class="mb"> You can include Markdown syntax within the HTML `<code>` tag like this: <br>
<em class="c-header">(ensuring it still renders as a code block in your tutorial)</em>

<div class="row">
<div style="width:55%" markdown="1">
```
<code class="code-block">```bash
for i in 123; do
    echo $i
```</code>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%; margin-top: -0.4em;">
<em class="c-gray"> Rendering preview:</em> <base class="mb">
<code class="code-block">```bash
for i in 123; do
    echo $i
```</code>
</div>
</div> <base class="mb">


# collapsible section

A collapsible element is a **section that users can expand or collapse**, which enhances <u>clarity and visibility</u> by allowing readers to control the amount of information displayed at one time. You would encounter many such collapsible components throughout this guide.

Collapsible section uses the `<details> content </details>` syntax, which are automatically rendered by Markdown, but can also be further styled with predefined classes to improve appearance and better integrate with your tutorial layout.

* **basic variant**

The opening and closing tags of a collapsible element should be on separate lines, with the content placed in between. Immediately after the opening tag, include a `<summary>` element to display short instructions or titles like <em class="c-header">"see example"</em>, <em class="c-header">"expand instructions"</em> or <em class="c-header">"here are more details"</em>. <base class="mb">

<span class="c-alert">It's essential to <b>leave one blank line</b> between &lt;/summary&gt; element and the actual content of the section to ensure it renders correctly.</span>

<div class="row">
  <div style="width:60%" markdown="1">
  ```html
  <details><summary> see the preview </summary>

  **By default** `Markdown` **syntax is not automatically
  rendered within** `<details>` **component.**
  </details>
  ```
  </div>
  <div class="pl-2" style="font-size: 0.8em; width: 45%">
  <details><summary> see the preview </summary>

  **By default** `Markdown` **syntax is not automatically
  rendered within** `&lt;details&gt;` **component.**
  </details>
  </div>
</div>

<span class="c-alert">To enable Markdown syntax interpretation <b>add markdown="1"</b> attribute within</span> `<details>` <span class="c-alert">tag:</span>

<div class="row">
<div style="width:60%" markdown="1">
```html
<details markdown="1"><summary> see the preview </summary>

**By default** `Markdown` **syntax is not automatically
rendered within** `<details>` **component.**
</details>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%">
<details markdown="1"><summary> see the preview </summary>

**By default** `Markdown` **syntax is not automatically
rendered within** `<details>` **component.**
</details>
</div>
</div>

When Markdown is enabled, you can **seamlessly embed code snippets** within a collapsible:

<div class="row">
<div style="width:60%">
<code class="code-block">&lt;details markdown="1"&gt;&lt;summary&gt; see the preview &lt;/summary&gt;

*Here is an example of how to open a file:*
```python
file = open('example.txt', 'r')
```
&lt;/details&gt;</code>
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%">
<details markdown="1"><summary> see the preview </summary>

*Here is an example of how to open a file:*
```python
file = open('example.txt', 'r')
```
</details>
</div>
</div>


* **customized variant**

By utilizing predefined **background color classes**, you can style the `<details>` container to seamlessly integrate with your layout:
* applying a color class directly to `<details>` results in a uniform color for both the collapsible button and its expandable content,

<div style="margin-left: 1.8em;">
<details class="inline" markdown="1"><summary class="italic c-header">see code example (single color)</summary>

```html
<details class="bc-example" markdown="1"><summary> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis.
This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and*
**includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
```
</details>

<details class="bc-example" markdown="1"><summary> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis. This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and* **includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
</div>

* while assigning a color class to `<summary>` allows for distinct coloring of the button independent from the container.

<div style="margin-left: 1.8em;">
<details class="inline" markdown="1"><summary class="italic c-header">see code example (color summary only)</summary>

```html
<details markdown="1"><summary class="bc-note"> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis.
This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and*
**includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
```
</details>

<details markdown="1"><summary class="bc-note"> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis. This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and* **includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
</div>

<div style="margin-left: 1.8em;">
<details class="inline" markdown="1"><summary class="italic c-header">see code example (distinct colors)</summary>

```html
<details class="bc-example" markdown="1"><summary class="bc-note"> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis.
This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and*
**includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
```
</details>

<details class="bc-example" markdown="1"><summary class="bc-note"> EXAMPLE: </summary>

*The project team uses a cloud-based bioinformatics platform (Galaxy) to streamline data analysis. This platform allows for* **scalable computing resources** *to handle large genomic datasets efficiently and* **includes built-in tools** *for data visualization, which simplifies the monitoring of analysis progress and outcomes.*
</details>
</div>


# table

Tables can be useful to organize content because they provide a structured format for displaying data in rows and columns, making it easier to read, compare, and understand. <br>
Example applications:
- Detail parameters or arguments for functions or commands, including name, type, description, and default values if applicable.
- Compare features, options, or configurations of different tools or software versions.
- Break down multi-step processes into a structured format, with each row detailing a specific step, its description, and possibly the expected outcome.
- Organize common problems and their solutions in a table, allowing users to quickly scan and find fixes to issues they might encounter.
- Summarize the advantages and disadvantages of different methodologies, tools, or technologies, providing a clear comparison to help readers weigh their options.
- Incorporate rows that pair images with descriptive text, useful for tutorials involving GUI applications, demonstrating workflows, or highlighting before-and-after scenarios.

You can create tables using either Markdown syntax or the HTML `<table>` tag, both of which are styled to provide a consistent rendering effect by default.

* **Markdown table** <br>
Markdown tables are simpler and more human-readable in raw code, offering an intuitive way to structure data. They automatically interpret other Markdown syntax elements, such as `*text*` for italics or <code>`code`</code> for inline code.

<div class="row level-1">
<div style="width:50%;" markdown="1">
```markdown
| Shortcut      |        Command        |
|---------------|-----------------------|
|`Ctrl+Shift+`  | New Terminal          |
|`Ctrl+Shift+v` | Open Markdown preview |
|`Ctrl+s`       | File: Save            |
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<p class="italic c-header mb-0">see the preview</p>

| Shortcut      |        Command        |
|---------------|-----------------------|
|`Ctrl+Shift+`  | New Terminal          |
|`Ctrl+Shift+v` | Open Markdown preview |
|`Ctrl+s`       | File: Save            |

</div>
</div>


* **HTML table** <br>
HTML tables require the use of various HTML tags (each of which needs careful closing), such as:
<table class="level-1 mt-" markdown="1">
  <tr>
    <td><code>&lt;table&gt;</code> - for the table itself</td>
    <td><code>&lt;tr&gt;</code> - for a new row</td>
    <td><code>&lt;th&gt;</code> - for a header cell</td>
    <td><code>&lt;td&gt;</code> - for a regular cell</td>
  </tr>
</table>

<div class="row level-1">
<div style="width:50%;" markdown="1">
```html
<table>
  <tr> <th>Shortcut</th> <th>Command</th> </tr>
  <tr> <td><code>Ctrl+Shift+</code></td> <td>New Terminal</td> </tr>
  <tr> <td><code>Ctrl+s</code></td> <td>File: Save</td> </tr>
  <tr> <td><code>F5</code></td> <td>Start Debugging</td> </tr>
</table>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<p class="italic c-header mb-0">see the preview</p>
<table>
  <tr><th>Shortcut</th><th>Command</th></tr>
  <tr><td><code>Ctrl+Shift+</code></td><td>New Terminal</td></tr>
  <tr><td><code>Ctrl+s</code></td><td>File: Save</td></tr>
  <tr><td><code>F5</code></td><td>Start Debugging</td></tr>
</table>
</div>
</div>

<div class="level-1" markdown="1">
To apply Markdown syntax within an HTML table, like using `*text*` for italics or <code>`ticks`</code> for inline code, you must add the **markdown="1"** attribute to the internal `<p>` tag <br>*(but not directly to the table-related tags)*.

<div class="row">
<div style="width:50%;" markdown="1">
```html
<table>
  <tr> <th>Shortcut</th> <th>Command</th> </tr>
  <tr> <td><p markdown="1">`Ctrl+Shift+`</p></td> <td>New Terminal</td> </tr>
  <tr> <td><p markdown="1">`Ctrl+s`</p></td> <td>File: Save</td> </tr>
</table>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<p class="italic c-header mb-0">see the preview</p>
<table>
  <tr> <th>Shortcut</th> <th>Command</th> </tr>
  <tr> <td><p markdown="1">`Ctrl+Shift+`</p></td> <td>New Terminal</td> </tr>
  <tr> <td><p markdown="1">`Ctrl+s`</p></td> <td>File: Save</td> </tr>
</table>
</div>
</div>


While HTML syntax makes the raw code less readable due to the verbosity and necessity of closing tags, these tables offer **more flexibility in construction and styling**. You can opt for a more tailored presentation of data, for instance:
<ul class="mb">
  <li> skipping the header row or </li>
  <li> customize the styling by:</li>
  <ul> <li> removing boundary lines</li>
  <li> adding more or less padding</li>
  <li> coloring cell backgrounds</li>
  <li> aligning an image with text horizontally</li></ul>
</ul>

<div class="row">
<div style="width:50%;" markdown="1">
```html
<table>
  <tr>
    <td class="pl-0 font-1r no-border bc-example">This cell has 0 left padding, regular font size and no bottom border. The next cell in this row inludes an image.</td>
    <td class="no-border" width=110><img src="/04-devel-environment/assets/images/VSC_logo.png"></td>
  </tr>
</table>
```
</div>
<div class="pl-2" style="font-size: 0.8em; width: 45%" markdown="1">
<p class="italic c-header mb-0">see the preview</p>
<table>
  <tr>
    <td class="pl-0 font-1r no-border bc-example">This cell has 0 left padding, regular font size and no bottom border. The next cell in this row inludes an image.</td>
    <td class="no-border" width=110><img src="/04-devel-environment/assets/images/VSC_logo.png"></td>
  </tr>
</table>
</div>
</div>

</div>
