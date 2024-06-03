---
title: "Useful text manipulation programs"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "intro"
order: 330
level: 1
categories: ["command-line", "text-manipulation"]
tags: ["text-editors", "search-pattern", "replace-pattern", "manage-order", "sort-lines", "cut-characters", "swap-characters", "count-words"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

**The command line interface (CLI) is a powerful environment for text manipulation tasks.** <br>
There are a variety of text manipulation programs available in the <a class="t-links" href="310">terminal</a> that allow users to quickly and efficiently process large amounts of text data. These programs offer a wide range of capabilities, including searching for patterns, transforming text, sorting lines, removing duplicates, and counting characters, words, and lines.

In this section, we will discuss some of the most popular and useful command line text manipulation programs, such as:

<table>
  <tr><th>TOOL</th><th>TDESCRIPTION</th><th>NOTES</th></tr>
  <tr><td><a class="t-links" href="330" section="#grep---search-pattern">grep</a></td> <td><i>searches for a specific pattern in text files and outputs matching lines</i></td> <td><a class="t-links" href="331">Tutorial: GREP</a></td></tr>
  <tr><td><a class="t-links" href="330" section="#sed---replace-pattern">sed</a></td> <td><i>stream editor for filtering and transforming text</i></td> <td><a class="t-links" href="332">Tutorial: SED</a></td></tr>
  <tr><td><a class="t-links" href="330" section="#awk---manage-order">awk</a></td> <td><i>a programming language for processing text data, often used for text manipulation tasks</i></td> <td><a class="t-links" href="333">Tutorial: AWK</a></td></tr>
  <tr><td><a class="t-links" href="330" section="#cut---cut-characters">cut</a></td> <td><i>cuts out specific columns or fields from a file</i></td> <td></td></tr>
  <tr><td><a class="t-links" href="330" section="#sort---sort-lines">sort</a></td> <td><i>sorts lines of text alphabetically or numerically</i></td> <td></td></tr>
  <tr><td><a class="t-links" href="330" section="#uniq---unique-lines">uniq</a></td> <td><i>removes duplicate lines from a file</i></td> <td></td></tr>
  <tr><td><a class="t-links" href="330" section="#tr---swap-characters">tr</a></td> <td><i>translates or deletes characters from a file</i></td> <td></td></tr>
  <tr><td><a class="t-links" href="330" section="#wc---count-lines-words">wc</a></td> <td><i>counts the number of lines, words, and characters in a file</i></td> <td></td></tr>
  <tr><td><a class="t-links" href="330" section="#head-and-tail">tail</a></td> <td><i>output the first or last part of a file, respectively</i></td> <td></td></tr>
</table>

<p class="footnote mt-">^ Click on the tool name (in the first column) to jump to the cheat sheet.</p>

These tools are often used together in pipelines to perform more complex text manipulations.
Understanding **text manipulation programs** can greatly improve a user's productivity and efficiency when working with text files, without the need for graphical user interfaces.

## *Why manipulate text files from the command line?*

Manipulating text files in the command line is a powerful and efficient method for processing large amounts of text data. It is useful because of:

* **SPEED** <br>*Command line tools are typically faster than GUI-based text editors when processing large amounts of data.*

* **AUTOMATION** <br>*Command line tools can be automated using shell scripts, allowing you to perform repetitive tasks quickly and efficiently.*

* **FLEXIBILITY** <br>*The command line tools offer a wide range of functionality, making it possible to perform complex text manipulations.*

* **INTEGRATION** <br>*Command line tools can be easily integrated into other programs, allowing you to process text data in a variety of different contexts.*

* **ACCESSABILITY** <br>*Command line tools allow users to manipulate text files stored on the remote machine without downloading them.*

## *When to manipulate text files in the command line?*

* **DATA PROCESSING** <br>*Command line tools are particularly useful when working with large text data or multiple files, as they can process the data much faster than a graphical user interface (GUI) based text editor.*

  * **TEXT MANIPULATION** <br>*The command line tools provide a powerful way to change the order or structure in the text file.*

  * **TEXT ANALYSIS** <br>*You can use command line tools to extract meaningful information from large amounts of text data.*

* **SCRIPTING** <br>*The command line tools can be used in shell scripts to automate complex text processing tasks.*


# CheatSheet

*Below, you can find a cheat sheet for some of the most popular command line text manipulation tools.*

## **GREP** - search pattern

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | grep OPTIONS PATTERN</code></td>
    <td>or</td>
    <td><code>grep OPTIONS PATTERN FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `grep <PATTERN> <FILE>` | `grep 'version' file.txt` | Search for a pattern in a file. |
| `grep <PATTERN> <FILE1> <FILE2>` | `grep 'version' file1.txt file2.txt` | Search for a pattern in multiple files. |
| `grep -r <PATTERN> <DIR>` | `grep -r 'version' THIS_FOLDER` | Search recursively in all files in a directory. |
| `grep -n <PATTERN> <FILE>` | `grep -n 'version' file.txt` | Show line numbers for matches. |
| `grep -o <PATTERN> <FILE>` | `grep -o 'version' file.txt` | Show only the matching portion of the line. |

<button class="btn more"></button> <button class="btn c-good mr">HANDS-ON TUTORIAL</button> <a class="t-links" href="331"></a>

## **SED** - replace pattern

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | sed OPTIONS /PATTERN/REPLACEMENT/</code></td>
    <td>or</td>
    <td><code>sed OPTIONS /PATTERN/REPLACEMENT/ FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `sed 's/<PATTERN>/<REPLACEMENT>/g' FILE` | `sed 's/version/V/g' ` | Replace all occurrences of a pattern in a file. |
| `sed 's/<PATTERN>//g' FILE` | `sed 's/version//g'` | Delete all occurrences of a pattern in a file. |
| `sed 's/<PATTERN>/<REPLACEMENT>/N' FILE` | `sed 's/version/V/2'` | Replace the *n*th occurrence of a pattern in a line. |

<button class="btn more"></button> <button class="btn c-good mr">HANDS-ON TUTORIAL</button> <a class="t-links" href="332"></a>

## **AWK** - manage order

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | awk OPTIONS '{}'</code></td>
    <td>or</td>
    <td><code>awk OPTIONS '{}' FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `awk '{print $1, $3}' <FILE>` | `awk '{print $1, $3}' file.txt' ` | Print the first and third column of a file. |
| `awk 'NF > 3' <FILE>` | `awk 'NF > 3' file.txt` | Print only the lines with more than 3 fields (columns). |
| `awk '{sum+=$2} END {print sum}' <FILE>` | `awk '{sum+=$2} END {print sum}' file.txt` | Print the sum of all numbers in the second column. |
| `awk '{printf "%-10s %s\n", $1, $2}' <FILE>` | `awk '{printf "%-10s %s\n", $1, $2}' file.txt` | Format the output. |

<button class="btn more"></button> <button class="btn c-good mr">HANDS-ON TUTORIAL</button>
* <a class="t-links" href="333"></a>
* <a class="t-links" href="334"></a>

## **CUT** - cut characters

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | cut OPTIONS</code></td>
    <td>or</td>
    <td><code>cut OPTIONS FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `cut -f 1 <FILE>` | `cut -f 1,3-5 file.txt` | Cut out the first and 3rd to 5th columns from a file. |
| `cut -c 1-3 <FILE>` | `cut -c 1-3 file.txt` | Cut out the first three characters from each line. |


## **SORT** - sort lines

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | sort OPTIONS</code></td>
    <td>or</td>
    <td><code>sort OPTIONS FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `sort <FILE>` | `sort file.txt` | Sort the lines of a file. |
| `sort -r <FILE>` | `sort -r file.txt` | Sort the lines of a file in reverse order. |
| `sort -k 2 <FILE>` | `sort -k 2 file.txt` | Sort the lines of a file based on the second field (column). |
| `sort -n <FILE>` | `sort -n file.txt` | Sort the lines of a file numerically. |

<button class="btn more"></button> ...explore the **Unix Getting Started** tutorial in the section: <a class="t-links" href="325" section="#sort--sort-a-file-by-lines-alpha-numerically">SORT a file by lines</a>

## **UNIQ** - unique lines

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | uniq OPTIONS</code></td>
    <td>or</td>
    <td><code>uniq OPTIONS FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `uniq <FILE>` | `uniq file.txt` | Remove duplicated lines from a file. |
| `uniq -d <FILE>` | uniq -d file.txt | Show only the duplicates in a file. |
| `uniq -u <FILE>` | `uniq -u file.txt` | Show only the unique lines in a file. |

<button class="btn more"></button> ...explore the **Unix Getting Started**, section: <a class="t-links" href="325" section="#uniq--unique-command-to-remove-duplicates-of-adjacent-presorted-lines">UNIQ - command to remove duplicates</a>

## **TR** - swap characters

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | tr OPTIONS</code></td>
    <td>or</td>
    <td><code>tr OPTIONS &#60; FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `tr '[:upper:]' '[:lower:]' < <FILE>` | `tr '[:upper:]' '[:lower:]' < file.txt` | Translate all uppercase letters to lowercase. |
| `tr ' ' '\t' < <FILE>` | `tr ' ' '\t' < file.txt` | Translate all spaces to tabs. |
| `tr -d '[AEIOUaeiou]' < <FILE>` | `tr -d '[AEIOUaeiou]' < file.txt` | Delete all vowels from a file. |

<button class="btn more"></button> ...explore the **Unix Getting Started** tutorial in the section: <a class="t-links" href="325" section="#tr---swap-characters">TR - translate</a>

## **WC** - count lines, words

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | wc OPTIONS</code></td>
    <td>or</td>
    <td><code>wc OPTIONS FILE</code></td>
</tr></table>

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `wc <FILE>` | `wc file.txt` | Count the number of lines, words, and characters in a file. |
| `wc -l <FILE>` | `wc -l file.txt` | Count the number of lines in a file. |
| `wc -w <FILE>` | `wc -w file.txt` | Count the number of words in a file. |
| `wc -m <FILE>` | `wc -m file.txt` | Count the number of characters in a file. |

<button class="btn more"></button> ...explore the **Unix Getting Started** tutorial in the section: <a class="t-links" href="325" section="#wc---count-lines-words">WC - word count</a>

## **HEAD** and **TAIL**

<table><tr>
    <td><b>SYNTAX:</b></td>
    <td><code>text_stream | head <OPTIONS</code></td>
    <td>or</td>
    <td><code>head OPTIONS FILE</code></td>
</tr></table>

These tools are very useful for quickly inspecting the contents of a file and can be used to get an overview of the data before processing it with more complex text manipulation tools.

**HEAD**

| COMMAND SYNTAX     | EXAMPLE             | TASK                               |
|--------------------|---------------------|------------------------------------|
| `head <FILE>`      | `head file.txt`     | Print the first 10 lines of a file.|
| `head -n N <FILE>` | head -n 5 file.txt  | Print the first N lines of a file. |
| `head -c N <FILE>` | head -c 10 file.txt | Print the first N bytes of a file. |

<button class="btn more"></button> ...explore the **Unix Getting Started** tutorial in the section: <a class="t-links" href="325" section="#head-and-tail">HEAD of the file</a>

<base class="mt">
**TAIL**

| COMMAND SYNTAX     | EXAMPLE              | TASK                                    |
|--------------------|----------------------|-----------------------------------------|
| `tail <FILE>`      | `tail file.txt`      | Print the last 10 lines of a file.      |
| `tail -n N <FILE>` | `tail -n 5 file.txt` | Print the last N lines of a file.       |
| `tail -c N <FILE>` | `tail -c N file.txt` | Print the last N bytes of a file.       |
| `tail -f <FILE>`   | `tail -f file.txt`   | Continuously monitor the end of a file. |

<button class="btn more"></button> ...explore the **Unix Getting Started** tutorial in the section: <a class="t-links" href="330" section="#head-and-tail">TAIL of the file</a>


# <button class="btn example mr"></button>jump to solution

### Removing duplicate lines from a file

```bash
sort FILE | uniq
```

### Counting the number of a 'WORD' in a file

```bash
grep -o WORD FILE | wc -w
```

### Extracting columns of data from a file

```bash
cut -d DELIMITER -f COLUMN FILE
```
or
```bash
awk -F DELIMITER '{print COLUMN}' FILE
```

### Creating columns by translating a char to a delimiter

```bash
text_stream | grep WORD | tr '-' ' ' | awk '{print $2,$4,$6}' | sort -nk1 | uniq
```
