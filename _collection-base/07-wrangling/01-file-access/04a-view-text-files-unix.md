---
title: "Viewing text files using UNIX commands"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 714.1
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

In research, results are often presented in various formats such as simple text files (tab or comma-separated), PDFs, or occasionally image files like PNGs or JPEGs. This tutorial will demonstrate how to view these files directly on your local or remote system without the need to download them.

### Why is it important to view files directly in the UNIX shell?

* Viewing files directly on UNIX systems allows for **immediate access to data** without the need for additional software, streamlining the workflow and saving valuable time.

* Direct file access on UNIX provides the ability to **quickly preview & search** and manage large datasets, crucial for data-intensive fields like research and development.

* Utilizing UNIX commands for file viewing can **enhance security by reducing the need to transfer** data to different devices or systems, minimizing the risk of data breaches.


## <button class="btn required mr"></button>CLI setup

<div class="required before" data-before="" markdown="1">

For accessing the command-line interface (CLI), you will need a system running a Unix-like terminal or command prompt (on Windows). If you're unfamiliar with how to access or use the CLI on your system, please refer to the practical tutorial on <a class="t-links" href="310"></a> for setup and instructions on how to <a class="t-links" href="310" section="#open-terminal-window">Open Terminal Window</a>.
</div>

## **Viewing text files**

In this section, we'll explore various UNIX commands that allow you to view and manage text files directly in the shell. These commands are essential for quickly accessing and reading the contents of files without opening them in a text editor. There are many commands for this purpose such as:

|Command|Purpose                                    |Example        |Use cases|
|-------|-------------------------------------------|---------------|---------|
|`less` |view file pagewise with more options       |`less filename`|use `-S` to avoid line wrapping, you can use arrow keys to scroll|
|`more` |view file pagewise                         |`more filename`|use `less` instead|
|`cat`  |catalogs the contents of a file            |`cat filename` |you can send the contenst of a file to clipboard or to another file using this command|
|`tac`  |reverse of cat, reverses the order of lines|`tac filename` |pipe this to `less` commad to scroll through the file in reverse|
|`head` |view first few lines of a file             |`head filename`|use `-n` option to change the number of lines displayed. `-n 20` displays 20 lines|
|`tail` |view last few lines of a file              |`tail filename`|use `-n` option to change the number of lines displayed. `-n 20` displays 20 lines|
|`od`   |octal dump of a file                       |`od filename`  |use `-c` options and pipe it through less. You can see non printable characters with this option (like tab, whitespace, newline etc)|

<div class="note" markdown="1">
Text files in UNIX often come in formats like plain text or delimited text such as CSV (comma-separated values) and TSV (tab-separated values). These files are widely used for storing large datasets in a format that's easily readable both by humans and software. <base class="mb">
Unstructured text files, such as plain text documents, don't follow a specific format and are often used for notes, logs or written content without any strict data schema. Thwy often use the TXT or DOC file extension.
</div>

Each of text file formats serves different purposes but can be easily managed and viewed using UNIX commands, allowing for flexible data handling across various applications.

* **CSV** (Comma-Separated Values): `data.csv`<br>
<code class="code-block bc-data">Name,Age,Department
John Doe,29,Marketing
Jane Smith,34,IT
Tom Johnson,28,Operations
</code>

* **TSV** (Tab-Separated Values): `data.tsv`<br>
<code class="code-block bc-data">Name    Age Department
John Doe    29  Marketing
Jane Smith  34  IT
Tom Johnson   28  Operations
</code>

* **TXT** (Plain Text): `data.txt`<br>
<code class="code-block bc-data">My name is John Doe. I'm 29, and work in Marketing Department.
Her name is Jane Smith. She is 34 and works in the IT Department.
His name is Tom Johnson, age 28. He works in the Operations Department.
</code>

### CAT or TAC

**Purpose:** Display the entire content of a file on the screen.
* `cat` - from the beginning (first line of the file at the top)
* `tac` - from the end (showing the last line first)

**Syntax:** `cat filename.txt` or `tac filename.txt`

<table class="font-1 mb-0">
  <tr> <td class="pl-0 pb-0 no-border"><code class="code-block mb-0 pb-0">cat data.csv</code></td> <td class="pr-0 pb-0 no-border"><code class="code-block mb-0 pb-0">tac data.csv</code></td> </tr>
  <tr>
       <td class="no-border pl-0 pt-0"><pre class="output mb-0">Name,Age,Department<br>John Doe,29,Marketing<br>Jane Smith,34,IT<br>Tom Johnson,28,Operations</pre></td>
       <td class="no-border pr-0 pt-0"><pre class="output mb-0">Tom Johnson,28,Operations<br>Jane Smith,34,IT<br>John Doe,29,Marketing<br>Name,Age,Department</pre></td>
  </tr>
</table>

<div class="protip" markdown="1">
Both commands print the content permanently on the terminal until the session is cleared or another command is executed.
</div>


### MORE or LESS

**Purpose:** View the paginated content of a file one screen at a time.
* `more` - primarily allows forward movement through the file
* `less` - allows backward and forward movement

**Syntax:** `more filename.txt` or `less filename.txt`

<table class="font-1 mb-0">
  <tr> <td class="pl-0 pb-0 no-border"><code class="code-block mb-0 pb-0">more data.csv</code></td> <td class="pr-0 pb-0 no-border"><code class="code-block mb-0 pb-0">less data.csv</code></td> </tr>
  <tr>
       <td class="no-border pl-0 pt-0"><pre class="output mb-0">Name,Age,Department<br>John Doe,29,Marketing<br>Jane Smith,34,IT<br>Tom Johnson,28,Operations</pre></td>
       <td class="no-border pr-0 pt-0"><pre class="output mb-0">Name,Age,Department<br>John Doe,29,Marketing<br>Jane Smith,34,IT<br>Tom Johnson,28,Operations</pre></td>
  </tr>
</table>

<div class="protip" markdown="1">
The displayed file content remains visible until you exit the command or navigate to other terminal activities. To **close the preview** just hit the `q` on your keyboard. <base class="mb">
**Enhance File Viewing with** `less`:
* Use `G` on your keyboard to jump to the end of the file.
* Use `g` on your keyboard to go back to the start.
* Use `/pattern` to search for a "pattern" downwards.
* Use `?pattern` to search for a pattern upwards.
</div>


### HEAD or TAIL

**Purpose:** Display the beginning or end of a file on the terminal screen.
* `head` - shows the first few lines of a file
* `tail` - shows the last few lines

**Syntax:** `head -n number filename.txt` or `tail -n number filename.txt`

<table class="font-1 mb-0">
  <tr> <td class="pl-0 pb-0 no-border"><code class="code-block mb-0 pb-0">head -2 data.csv</code></td> <td class="pr-0 pb-0 no-border"><code class="code-block mb-0 pb-0">tail -2 data.csv</code></td> </tr>
  <tr>
       <td class="no-border pl-0 pt-0"><pre class="output mb-0">Name,Age,Department<br>John Doe,29,Marketing</pre></td>
       <td class="no-border pr-0 pt-0"><pre class="output mb-0">Jane Smith,34,IT<br>Tom Johnson,28,Operations</pre></td>
  </tr>
</table>

<div class="protip" markdown="1">
The output remains visible until you issue another command or clear the terminal session.
</div>


## **Searching in text files**


Searching within text files is a powerful way to quickly locate specific data or patterns, enhancing your ability to analyze and manage large volumes of text efficiently.
It is possible to perform these searches using the `grep` command, which allows you to filter and display lines in text files that match a specified pattern.

**Purpose:** Search for specific patterns within a file and display all the matching lines. <br>
**Syntax:** `grep 'pattern' filename.txt`

<button class="btn example mr"></button> To find all occurrences of the word "name" in `data.txt`, enter:
```
grep 'name' data.txt
```
<pre class="output mb-0">
My <b class="c-pros">name</b> is John Doe. I'm 29, and work in Marketing Department.
Her <b class="c-pros">name</b> is Jane Smith. She is 34 and works in the IT Department.
His <b class="c-pros">name</b> is Tom Johnson, age 28. He works in the Operations Department.
</pre>


## Advanced Tips and Tricks

**Combining Commands** - Pipes `|` allow you to use the output of one command as the input to another, enhancing the efficiency and functionality of file viewing operations.

Here’s how to apply this technique:

**Chaining grep** - search for specific information within a file and then refine the search:
```
grep 'name' data.txt | grep 'John'
```
<pre class="output mb-0">
My <b class="c-pros">name</b> is <b class="c-pros">John</b> Doe. I'm 29, and work in Marketing Department.
His <b class="c-pros">name</b> is Tom <b class="c-pros">John</b>son, age 28. He works in the Operations Department.
</pre>
*This command first extracts lines containing "name" and then narrows down to those that also include "John".*

**Skipping the header line** - for skipping headers in data files or any other time you need to ignore the initial line of a file:
```
tail -n +2 data.tsv
```
<pre class="output mb-0">
John Doe    29  Marketing
Jane Smith  34  IT
Tom Johnson   28  Operations
</pre>
*This command starts displaying from the second line of the file, effectively skipping the first line.*

**Combining sort and/or uniq** - to view unique entries in a sorted manner from a text file:
```
tail -n +2 data.tsv | sort -nk3
```
<pre class="output mb-0">
Tom Johnson   28  Operations
John Doe    29  Marketing
Jane Smith  34  IT
</pre>
*This displays the file content sorted numerically by age located in 3-rd column.*

<div class="warning" markdown="1">
The `sort` command recognizes both spaces and tabs as delimiters by default when arranging lines of text. It treats contiguous whitespace (spaces or tabs) as a single delimiter, which means it can effectively handle data that is separated by either or both when sorting. <base class="mb">
In our example TSV file above, the `sort` command regonizes name and surname as two separate columns (separated by a single space) while other columns are separated by a tab. Thus, to sort by an age, we used the 3-rd column.
</div>
