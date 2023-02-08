---
title: "Unix Text Manipulation Programs"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /02-IntroToCommandLine/assets/images/02_command_line_banner.png
---

{% include toc %}

# Tools overview

**The command line interface (CLI) is a powerful environment for text manipulation tasks.** <br>
There are a variety of text manipulation programs available in the <a href="https://datascience.101workbook.org/02-IntroToCommandLine/01-terminal-basics" target="_blank">terminal  ⤴</a> that allow users to quickly and efficiently process large amounts of text data. These programs offer a wide range of capabilities, including searching for patterns, transforming text, sorting lines, removing duplicates, and counting characters, words, and lines.

In this section, we will discuss some of the most popular and useful command line text manipulation programs, such as:

| TOOL | DESCRIPTION | NOTES |
|------|-------------|-------|
| [grep](#grep) | *searches for a specific pattern in text files and outputs matching lines* | <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03A-tutorial-unix-grep" target="_blank">Tutorial: GREP  ⤴</a> |
| [sed](#sed) | *stream editor for filtering and transforming text* | <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03B-tutorial-unix-sed" target="_blank">Tutorial: SED  ⤴</a> |
| [awk](#awk) | *a programming language for processing text data, often used for text manipulation tasks* | <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03C-tutorial-unix-awk" target="_blank">Tutorial: AWK  ⤴</a> |
| [cut](#cut) | *cuts out specific columns or fields from a file* ||
| [sort](#sort) | *sorts lines of text alphabetically or numerically* ||
| [uniq](#uniq) | *removes duplicate lines from a file* ||
| [tr](#tr) | *translates or deletes characters from a file* ||
| [wc](#wc) | *counts the number of lines, words, and characters in a file* ||
| [head and tail](#head-and-tail) | *output the first or last part of a file, respectively* ||

*^Click on the tool name (in the first column) to jump to the cheat sheet.*

These tools are often used together in pipelines to perform more complex text manipulations.
Understanding **text manipulation programs** can greatly improve a user's productivity and efficiency when working with text files, without the need for graphical user interfaces.

## Why manipulate text files from the command line?

Manipulating text files in the command line is a powerful and efficient method for processing large amounts of text data. It is useful because of:

* **SPEED** <br>*Command line tools are typically faster than GUI-based text editors when processing large amounts of data.*

* **AUTOMATION** <br>*Command line tools can be automated using shell scripts, allowing you to perform repetitive tasks quickly and efficiently.*

* **FLEXIBILITY** <br>*The command line tools offer a wide range of functionality, making it possible to perform complex text manipulations.*

* **INTEGRATION** <br>*Command line tools can be easily integrated into other programs, allowing you to process text data in a variety of different contexts.*

* **ACCESSABILITY** <br>*Command line tools allow users to manipulate text files stored on the remote machine without downloading them.*

## When to manipulate text files in the command line?

* **DATA PROCESSING** <br>*Command line tools are particularly useful when working with large text files, as they can process the data much faster than a graphical user interface (GUI) based text editor.*

  * **TEXT MANIPULATION** <br>*The command line tools provide a powerful way to change the order or structure in the text file.*

  * **TEXT ANALYSIS** <br>*You can use command line tools to extract meaningful information from large amounts of text data.*

* **SCRIPTING** <br>*The command line tools can be used in shell scripts to automate complex text processing tasks.*


# CheatSheet

Below, you can find a cheat sheet for some of the most popular command line text manipulation tools.

## GREP - search pattern

**SYNTAX:** `text_stream | grep <OPTIONS> <PATTERN>` or `grep <OPTIONS> <PATTERN> <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `grep <PATTERN> <FILE>` | `grep 'version' file.txt` | Search for a pattern in a file. |
| `grep <PATTERN> <FILE1> <FILE2>` | `grep 'version' file1.txt file2.txt` | Search for a pattern in multiple files. |
| `grep -r <PATTERN> <DIR>` | `grep -r 'version' THIS_FOLDER` | Search recursively in all files in a directory. |
| `grep -n <PATTERN> <FILE>` | `grep -n 'version' file.txt` | Show line numbers for matches. |
| `grep -o <PATTERN> <FILE>` | `grep -o 'version' file.txt` | Show only the matching portion of the line. |

To learn more, see the comprehensive tutorial in this workbook: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03A-tutorial-unix-grep" target="_blank">Tutorial: GREP – simple search for regular expressions  ⤴</a> .

## SED - replace pattern

**SYNTAX:** `text_stream | sed <OPTIONS> /<PATTERN>/<REPLACEMENT>/` or `sed <OPTIONS> /<PATTERN>/<REPLACEMENT>/ <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `sed 's/<PATTERN>/<REPLACEMENT>/g' FILE` | `sed 's/version/V/g' ` | Replace all occurrences of a pattern in a file. |
| `sed 's/<PATTERN>//g' FILE` | `sed 's/version//g'` | Delete all occurrences of a pattern in a file. |
| `sed 's/<PATTERN>/<REPLACEMENT>/N' FILE` | `sed 's/version/V/2'` | Replace the *n*th occurrence of a pattern in a line. |

To learn more, see the comprehensive tutorial in this workbook: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03B-tutorial-unix-sed" target="_blank">Tutorial: Tutorial: SED – edit stream text  ⤴</a> .

## AWK - manage order

**SYNTAX:** `text_stream | awk <OPTIONS> '{}'` or `awk <OPTIONS> '{}' <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `awk '{print $1, $3}' <FILE>` | `awk '{print $1, $3}' file.txt' ` | Print the first and third column of a file. |
| `awk 'NF > 3' <FILE>` | `awk 'NF > 3' file.txt` | Print only the lines with more than 3 fields (columns). |
| `awk '{sum+=$2} END {print sum}' <FILE>` | `awk '{sum+=$2} END {print sum}' file.txt` | Print the sum of all numbers in the second column. |
| `awk '{printf "%-10s %s\n", $1, $2}' <FILE>` | `awk '{printf "%-10s %s\n", $1, $2}' file.txt` | Format the output. |

To learn more, see the comprehensive tutorial in this workbook: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03C-tutorial-unix-awk" target="_blank">Tutorial: AWK – advanced text processing  ⤴</a> . <br>
To learn more about **BIOAWK**, see the comprehensive tutorial in this workbook: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/03D-tutorial-unix-bioawk" target="_blank">Tutorial: BIOAWK – biological data manipulation  ⤴</a> .

## CUT - cut characters

**SYNTAX:** `text_stream | cut <OPTIONS>` or `cut <OPTIONS> <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `cut -f 1 <FILE>` | `cut -f 1,3-5 file.txt` | Cut out the first and 3rd to 5th columns from a file. |
| `cut -c 1-3 <FILE>` | `cut -c 1-3 file.txt` | Cut out the first three characters from each line. |


## SORT - sort lines

**SYNTAX:** `text_stream | sort <OPTIONS>` or `sort <OPTIONS> <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `sort <FILE>` | `sort file.txt` | Sort the lines of a file. |
| `sort -r <FILE>` | `sort -r file.txt` | Sort the lines of a file in reverse order. |
| `sort -k 2 <FILE>` | `sort -k 2 file.txt` | Sort the lines of a file based on the second field (column). |
| `sort -n <FILE>` | `sort -n file.txt` | Sort the lines of a file numerically. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#sort--sort-a-file-by-lines-alpha-numerically" target="_blank">SORT a file by lines  ⤴</a> . <br>

## UNIQ - unique lines

**SYNTAX:** `text_stream | uniq <OPTIONS>` or `uniq <OPTIONS> <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `uniq <FILE>` | `uniq file.txt` | Remove duplicated lines from a file. |
| `uniq -d <FILE>` | uniq -d file.txt | Show only the duplicates in a file. |
| `uniq -u <FILE>` | `uniq -u file.txt` | Show only the unique lines in a file. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#uniq--unique-command-to-remove-duplicates-of-adjacent-presorted-lines" target="_blank">UNIQ - command to remove duplicates  ⤴</a> . <br>

## TR - swap characters

**SYNTAX:** `text_stream | tr <OPTIONS>` or `tr <OPTIONS> < <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `tr '[:upper:]' '[:lower:]' < <FILE>` | `tr '[:upper:]' '[:lower:]' < file.txt` | Translate all uppercase letters to lowercase. |
| `tr ' ' '\t' < <FILE>` | `tr ' ' '\t' < file.txt` | Translate all spaces to tabs. |
| `tr -d '[AEIOUaeiou]' < <FILE>` | `tr -d '[AEIOUaeiou]' < file.txt` | Delete all vowels from a file. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#tr--translate" target="_blank">TR - translate  ⤴</a> . <br>

## WC - count lines, words, chr

**SYNTAX:** `text_stream | wc <OPTIONS>` or `wc <OPTIONS> <FILE>`

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `wc <FILE>` | `wc file.txt` | Count the number of lines, words, and characters in a file. |
| `wc -l <FILE>` | `wc -l file.txt` | Count the number of lines in a file. |
| `wc -w <FILE>` | `wc -w file.txt` | Count the number of words in a file. |
| `wc -m <FILE>` | `wc -m file.txt` | Count the number of characters in a file. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#wc--word-count" target="_blank">WC - word count  ⤴</a> . <br>

## HEAD and TAIL

**SYNTAX:** `text_stream | head <OPTIONS>` or `head <OPTIONS> <FILE>`

These tools are very useful for quickly inspecting the contents of a file and can be used to get an overview of the data before processing it with more complex text manipulation tools.

**HEAD**

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `head <FILE>` | `head file.txt` | Print the first 10 lines of a file. |
| `head -n N <FILE>` | head -n 5 file.txt | Print the first N lines of a file. |
| `head -c N <FILE>` | head -c 10 file.txt | Print the first N bytes of a file. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#head--head-of-the-file" target="_blank">HEAD of the file  ⤴</a> . <br>

**TAIL**

| COMMAND SYNTAX | EXAMPLE | TASK |
|----------------|---------|-------------|
| `tail <FILE>` | `tail file.txt` | Print the last 10 lines of a file. |
| `tail -n N <FILE>` | `tail -n 5 file.txt` | Print the last N lines of a file. |
| `tail -c N <FILE>` | `tail -c N file.txt` | Print the last N bytes of a file. |
| `tail -f <FILE>` | `tail -f file.txt` | Continuously monitor the end of a file. |

To learn more, explore the **Unix Getting Started** tutorial in the section: <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02E-tutorial-unix-getting-started#tail--tail-of-the-file" target="_blank">TAIL of the file  ⤴</a> . <br>


# Jump to solution examples

### Removing duplicate lines from a file

```
sort FILE | uniq
```

### Counting the number of a 'WORD' in a file

```
grep -o WORD FILE | wc -w
```

### Extracting columns of data from a file

```
cut -d DELIMITER -f COLUMN FILE
```
or
```
awk -F DELIMITER {print COLUMN} FILE
```



___
# Further Reading
* [Tutorial: GREP – simple search for regular expressions](03A-tutorial-unix-grep.md)
* [Tutorial: SED – edit stream text](03B-tutorial-unix-sed.md)
* [Tutorial: AWK – advanced text processing](03C-tutorial-unix-awk.md)
* [Tutorial: BIOAWK – biological data manipulation](03D-tutorial-unix-bioawk.md)
* [Summary of Unix Commands: UNIX CheatSheet](04-unix-cheat-sheet.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-IntroToCommandLine-LandingPage.md){: .btn  .btn--primary}
[Previous](02E-tutorial-unix-getting-started.md){: .btn  .btn--primary}
[Next](03A-tutorial-unix-grep.md){: .btn  .btn--primary}
