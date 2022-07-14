---
title: "Introduction to Bash Scripting"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /05-IntroToProgramming/assets/images/05_programming_banner.png
---

{% include toc %}

## <span style="color: #ff3870;">New content coming soon!</span>

# Introduction

# 1. Bash expressions

## 1.1 Bash shortcuts

### - **~** EXPANSION

~ is a shortcut for the $HOME location in the file system

### - **\*** and **?** EXPANSION

\*  -> denotes multiple unknown characters in a string

? -> denotes single unknown characters in a string

USAGE in regular expressions:

-- in searching, e.g., with `grep` or `find`

-- in listing file system, i.e., `ls`

-- in filtering files processed in the **for** loop

### - $ for VARIABLES

-- to use/substitute the variable's value

## 1.2 Logical operators

### - FILE OPERATORS

-a, -b, -c, -d, -e, -f, etc.

### - STRING OPERATORS

-z, -n, = , !=, < , >

### - NUMERIC OPERATORS

-eq, -ne, -lt, -le, -gt, -ge

## 1.3 In-shell arithmetic

### - OPERATORS

A. increment (++n, n++), decrement (--n, n--)

B. +, -, *, /, %, ^

### - LIMITATIONS (intigers)

^ division by 0 is prohibited

^ floating-point arithmetic is not supported

### - BRACE EXPANSION

e.g,

`echo $((1+2))`

`echo $((x=1, y=1, x+y))`

`n=1; echo $((++n))`

### - let command

e.g, `k=1; let k=$k + 2`

### - bc command

*(supports floating-point up to 20 decimal places)*

e.g, `echo "1.5 + 2.0" | bc -l`

### - awk command

*(supports floating-point up to 6 decimal places)*

 e.g., `awk 'BEGIN { x = 1.5; y = 1.5; print "x + y = "(x+y) }'`

### - pearl command

*(supports floating-point up to 20 decimal places)*

e.g., perl -e 'print 1.5+2.0'

## 1.4 In-line substitution

^ useful as in-line generators of arguments for **for** loop

### - BRACE AUTOCOMPLETION

A. echo "Hello "{Universe,World,Contry,City,Friend}"!" #(using strings)

B. echo "Count "{0..10}"!" #(using numbers)

C. possible combinations of many: {a,b}_{0..5}

### - COMMAND SUBSTITUTION

A. \`command\` <br>
*e.g., for i in \`seq 10\`; do echo $i; done*

B. \`seq\`, \`range\`, \`cat one-column-file\`

---

# 2. Bash statements

## **for** each item loop

### - NESTED LOOPS

## **while** true loop

### - READ FILE LINE-BY-LINE

## **until** false loop

### - STOP ONCE SUCCESS

## **if-elif-else** conditional

## **break** the loop

## **continue** to next iteration

---

# 3. Command-line scripting

A. INPUT

B. STREAM

D. OUTPUT

-- PRINT ON A SCREEN

-- REDIRECT BY A PIPE LINKER

-- SAVE INTO A FILE

---

# 4. In-file scripting

## 4.1 Setting up the script

* link to the tutorial about text editors
* link to the tutorial about Bash file management (touch, cat, head, tail, less, more, etc.)

### - HEADER

`#!/bin/env bash` instead `#!/bin/bash` as a more robust solution

### - VARIABLES

A. FROM ARGUMENT

-- e.g., $1 as a first value provided after script name when executing

B. GLOBAL

-- outside the loop

-- exists after the loop ends

C. ITERATIVE

-- increment/decrement argument

-- list of processed files

-- disappears after leaving the loop

D. LOCAL

-- in-loop or in-if variable

-- disappears after leaving the expression

### - ALGORITHM

A. PIPE-linked stream of Commands

e.g., `cat file | grep "keyword" | tr '-' ' ' | awk '{print $2,$4,$6}' | sort -nk1 | uniq`

B. Encapsulation in a loop

e.g., `for i in {0..10}; do touch file-$i; done`

C. TEXT OUTPUTS

e.g., `k="Hello World!"; echo $k > file`

D. GRAPHICAL OUTPUTS: generate graphs with gnuplot *(brief, then redirect to other tutorial)*

i.e., encapsulate gnuplot script in a bash **for** loop and return image files

## 4.2 Executing the script

### - FILE PERMISSIONS - `chmod`

### - EXECUTE ANY FILE - `. file`

### - RUN FROM THE PATH

-- relative path vs. absolute path

### - RUN FROM ANY PATH

A. add location to the $PATH

B. create alias in the ~/.bashrc

C. whereis command

# 5. Ready-made script examples

## IN-LINERS

e.g., row-col transpose

## FILE-SCRIPTS

e.g., in-loop gnuploting template


___
# Further Reading
* [Introduction to Python programming](../03-PYTHON/01-introduction-to-python)
* [Introduction to R programming](../04-R/01-introduction-to-R)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToProgramming-LandingPage){: .btn  .btn--primary}
[Previous](../01-ALGORITHM/01-basics-of-algorithm-structure){: .btn  .btn--primary}
[Next](../03-PYTHON/01-introduction-to-python){: .btn  .btn--primary}
