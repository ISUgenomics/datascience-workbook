---
title: "AWK – advanced text processing"
layout: single
author: Viswa Satheesh
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "tutorial"
order: 333
level: 2
categories: ["command-line", "text-manipulation", "bash-unix"]
tags: ["awk", "manage-order", "arithmetic", "variables"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


## Introduction

AWK, named after its creators Aho, Weinberger, and Kernighan, emerged in the 1970s at AT&T Bell Laboratories. It was designed as a programming language for processing text-based data, making it one of the pioneering tools for text manipulation and data extraction on Unix-like operating systems. The design of AWK was aimed at enabling users to write short programs directly in the command line, making it exceptionally powerful for processing text files where data is structured in rows and columns. Over the years, AWK has evolved through several versions, with gawk (GNU AWK) being one of the most popular and widely supported versions today. Its legacy in the Unix and Linux community is significant, influencing the development of many modern scripting languages and tools.

## Why learn AWK?

In an era where data is ubiquitous, learning AWK offers several advantages. Firstly, AWK is unparalleled in its simplicity and efficiency for certain text processing tasks. It allows users to perform complex data manipulations with just a few lines of code, making it a valuable tool for quick data analysis, report generation, and file management tasks. AWK's syntax is concise, and it integrates seamlessly with Unix/Linux shell environments, making it an excellent tool for automating repetitive text processing tasks directly from the command line.

Furthermore, AWK is incredibly versatile. Beyond simple text processing, it can be used for data extraction, transforming data formats, generating formatted reports, and even as a prototyping tool for algorithms that deal with text data. Its pattern matching capabilities, combined with actions that can be performed on text that matches patterns, make it a powerful tool for log analysis and configuration file management.

Learning AWK not only enhances your toolkit for dealing with text-based data efficiently but also deepens your understanding of the Unix/Linux command-line environment. It offers a unique blend of programming and scripting capabilities that can complement higher-level programming languages and tools, especially in data preprocessing, shell scripting, and systems administration contexts.

Having established the significance and utility of AWK in modern computing environments, let us delve deeper into its capabilities. AWk shines as a robust, general-purpose scriptiong language designed for sohpoisticated text processing tasks. Primarily a command-line tool, it excels in manipulating structured data — think of tables or files organized with columns of data, each separated by specific delimiters. This makes AWK an indispensable tool for data analysts, system administrators, and anyone who frequently works with text files needing extraction, transformation, or analysis. To get a practical grasp of AWK's power, we'll start by creating a sample file named marksheet.txt. This hands-on approach will help us explore AWK's syntax, commands, and scripting potential through real-world applications.

In the command below, we are creating a new file named `marksheet.txt` and entering some data into it using the cat command.

The command `cat > marksheet.txt` below is used to create a file named marksheet.txt. When this command is executed, the shell waits for input from the user. Here, we can then enter the data line by line, pressing `Enter/return` key after each line. In this example, we are entering four lines of data along with one empty line. The fourth line is empty.

```bash
$ cat > marksheet.txt
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```
After entering `Graham Gooch 43`, press the `Enter/return` key and then enter Ctrl-C to return to the `$` terminal prompt. We can now see what the `marksheet.txt` file holds:
```bash
$ cat marksheet.txt
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```

### `cat`-like (Default) behavior of Awk:
```bash
$ awk '{print}' marksheet.txt
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```

### Understanding Records and Fields in Awk

In the context of Awk, it's vital to understand two core concepts: records and fields. These two concepts form the basis for how Awk processes and manipulates data.

#### Records in Awk

In Awk, a record is typically a line of input. The default record separator in Awk is the newline character, meaning that by default, Awk considers each line it reads from a file or from its standard input as a separate record.

Think of a record like a row in a spreadsheet or a database. Each record can contain multiple pieces of data.

Why is this concept significant? Awk is often used to process structured data, such as tables or comma-separated value (CSV) files. Each line in such a file typically represents a separate entity (like a user, a transaction, a product, etc.) Thus, each line is a record that Awk will process individually.

#### Fields in Awk

Now, let us talk about fields. Each record can be further split into smaller units called fields. A field is like a column in a spreadsheet or database.

By default, Awk treats any whitespace (space or tab) as a field separator. That means if you have a line (or record) like `Allan Lamb 78`, Awk will split it into three fields:

- Field 1: `Allan`
- Field 2: `Lamb`
- Field 3: `78`

You can access these fields within your Awk script using the dollar sign `$` followed by the field number. For example, `$1` would refer to `Allan` in the example above.

Understanding fields is crucial because it allows you to manipulate and process specific portions of your data. For example, you could write an Awk script to process only the third field of each record, ignoring the others. Or you could rearrange the fields in your output, or combine them in new ways.

In a nutshell, the concepts of records and fields underpin the power and flexibility of Awk as a tool for text processing. Once you understand these concepts, you can write more complex and useful Awk scripts.

The file marksheet.txt has five lines including an empty line. In the example below, each __record__ has three words separated by a single space character. We can access the first and third fields of the file by,
```bash
$ awk '{print $1,$3}' marksheet.txt
Allan 78
Graeme 56
David 83

Graham 43
```
The first field (First name) and the third field (Marks scored) are returned. The empty line is also returned as it is also a __record__.

### `grep`-like Awk
```bash
$ awk '/G/ {print}' marksheet.txt
Graeme Hick 56
David Gower 83
Graham Gooch 43
```
There are three records with the letter `G`. Now if we needed all `G`s in the beginning of a record or line, then we might do:
```bash
awk '/^G/ {print}' marksheet.txt
Graeme Hick 56
Graham Gooch 43
```
There are just two records in this case.

### Doing Arithmetic

Let us get the average marks scored by the candidates. For that we do:
```bash
$ awk '{sum+=$3} END {print sum}' marksheet.txt
260
```
We can get the average scores by:
```bash
$ awk '{sum+=$3} END {print sum/NR}' marksheet.txt
52
```
There are a couple of things to notice. One, the introduction of a new variable NR; and two, the output is incorrect. The average should be 65 and not 52. The NR command stores the number of current records, which in our example is five, including the empty line and thus explains the error in the output. To remove the empty line:

```bash
$ awk NF marksheet.txt > marksheet2.txt
```
The NF variable contains the number of fields in a line and is positive when the line is non-empty and prints it. Awk does nothing when the line is empty.

```bash
$ cat marksheet2.txt
Allan Lamb 78
Graeme Hick 56
David Gower 83
Graham Gooch 43
```
Now,
```bash
$ awk '{sum+=$3} END {print sum/NR}' marksheet2.txt
65
```

Sometimes the field separator could be a tab character. So, when we do

```bash
$ awk 'OFS="," {print $1, $2, $3}' marksheet2.txt > marksheet3.csv
```
we use OFS to set the output field separator to be a tab character. Looking at marksheet3.tsv, where tsv is tab separated value,

```bash
$ cat marksheet3.csv
Allan,Lamb,78
Graeme,Hick,56
David,Gower,83
Graham,Gooch,43
```
So, doing

```bash
$ awk '{print $1}' marksheet3.csv
$
```
returns no output. That is because the default separator is a blank space. To set the field separator on the command line, we do

```bash
$ awk -F ',' '{print $1}' marksheet3.csv
Allan
Graeme
David
Graham
```

### Built-In Variables In Awk

FS: FS command contains the field separator character which is used to divide fields on the input line. The default is “white space”, meaning space and tab characters. FS can be reassigned to another character (typically in BEGIN) to change the field separator.

RS: RS command stores the current record separator character. Since, by default, an input line is the input record, the default record separator character is a newline.

OFS: OFS command stores the output field separator, which separates the fields when Awk prints them. The default is a blank space. Whenever print has several parameters separated with commas, it will print the value of OFS in between each parameter.

ORS: ORS command stores the output record separator, which separates the output lines when Awk prints them. The default is a newline character. print automatically outputs the contents of ORS at the end of whatever it is given to print.
