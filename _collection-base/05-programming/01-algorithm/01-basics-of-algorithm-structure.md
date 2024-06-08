---
title: "Basics of Algorithm Structure"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "intro"
order: 511
level: 1
categories: ["command-line", "bash-scripting", "programming"]
tags: ["algorithm", "pseudocode", "script-file", "control-flow", "loop", "inputs", "outputs", "bash", "python", "sum", "factorial", "common-divisor", "linear-search", "binary-search", "bubble-sort", "reverse-string"]
attributes: ["example", "code-snippet", "ready-made-solution", "exercise"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction


Having a clear understanding of the task and the requirements of the program is crucial for developing a successful script. It's important to identify the inputs, the desired outputs, and any intermediate steps required to achieve the desired results. Once the steps are identified, they can be translated into code in a selected programming language using the appropriate syntax, modules, and functions.

It's also important to write the code in a structured and organized manner. This includes using comments to document the purpose of each section of code and breaking the code up into smaller, logical functions when appropriate.

*In this tutorial, we'll cover the basics of algorithm structure, including the key terminology, the structure of an algorithm, and the control structures used to control the flow of an algorithm. By the end of this tutorial, you'll have a solid understanding of how algorithms work and be able to write simple algorithms yourself.*

# Algorithm

**Creating algorithms is important regardless of programming language** because algorithms are the foundation of any software development project. Even simple Bash scripts, which are used to automate tasks in a Unix-based operating system, rely on algorithms to perform their intended tasks.

<div class="note" markdown="1">
Algorithms are essentially a set of logical step-by-step instructions that a computer program follows to solve a particular problem or perform a specific task. They're used to process data, perform calculations, and automate repetitive tasks.
</div>

Algorithms are important because they allow us to automate tasks, perform calculations quickly and accurately, and process large amounts of data efficiently. They're used in a wide range of applications, including tasks in various research projects.


## Basic terminology

Before we dive into the structure of an algorithm, let's define some key terms that we'll be using throughout this tutorial:

| term             | description             | notes                           |
|------------------|-------------------------|---------------------------------|
| inputs           | These are the values or data that are provided to an algorithm when it's executed. | For example, if we're writing an algorithm to calculate the area of a rectangle, the length and width of the rectangle would be the inputs. |
| processing steps | These are the individual actions or instructions that make up an algorithm.        | Each step should be clear and unambiguous, and they should be executed in a specific order. |
| outputs          | These are the results produced by an algorithm when it's executed.                 | In the case of our rectangle example, the output would be the area of the rectangle.        |


# Algorithm structure

Regardless of the programming language being used, **understanding the basics of algorithm structure** is crucial for developing efficient and effective software. By writing well-structured algorithms, programmers can improve the performance of their programs and **reduce the likelihood of errors or bugs**. By developing strong algorithmic thinking skills, programmers can improve their ability to **develop robust code**.

At its core, an algorithm is made up of three basic parts: `input`, *processing steps*, and `output`. <br>
Let's take a look at how these three parts fit together in a simple algorithm.

<table class="font-1 c-header">
  <tr>
    <td class="no-border">
      Here's an example algorithm that calculates the area of a rectangle: <base class="mt">
      <b>Input:</b> The length and width of the rectangle <base class="mb">
      <b>Processing steps:</b> Multiply the length by the width to get the area <base class="mb">
      <b>Output:</b> The area of the rectangle <base class="mt">
      <i>In this example, the input is the length and width of the rectangle, the processing involves multiplying the length by the width, and the output is the area of the rectangle.</i>
    </td>
    <td class="no-border"><img width="420" src="{{ images_path }}/01_algorithm_flowchart_example.png"></td>
  </tr>
</table>


## Algorithm's flowchart

*We've defined basic terms, now let's talk about how we can represent an algorithm in a visual way.*

One common tool used to represent algorithms is a **flowchart**.
<div class="note" markdown="1">
**A flowchart is a diagram that shows the flow of an algorithm**, including its inputs, outputs, and steps.
</div>
<img width="600" src="{{ images_path }}/01_algorithm_flowchart.png">

Flowcharts use specific symbols to represent different elements of the algorithm:
* a `rectangle` is used to represent a process or step,
* a `diamond` is used to represent a decision point, and
* an `oval` is used to represent the start or end of the algorithm.

<div class="protip" markdown="1">
**Flowcharts can be a useful tool for visualizing and communicating the structure of an algorithm**, especially for more complex algorithms. By using a flowchart, we can easily see the order in which steps are executed, where decisions are made, and what the inputs and outputs are.
</div>


## Algorithm's pseudocode

*Now, let's talk about how we can represent an algorithm in a more structured way.*

One common way to represent algorithm's structure is by using **pseudocode**.
<div class="note" markdown="1">
**Pseudocode is a way of writing out an algorithm in plain language**, using specific keywords and syntax to indicate different parts of the algorithm.
The syntax of the pseudocode is designed to be easy to read and understand, without being tied to any specific programming language.
</div>

Here's an example of pseudocode for the rectangle example algorithm:
```yml
Start
   Input length, width
   Set area to 0
   Process
      Set area to length times width
   Output area
End
```
*In this pseudocode, we first define the inputs (length and width) and initialize the area variable to 0. Then, we move on to the processing step, where we calculate the area by multiplying the length and width. Finally, we output the result (the area) and end the algorithm.*

<div class="warning" markdown="1">
Note that the specific <u>syntax of pseudocode can vary</u> depending on the context and individual preference. **The goal is to provide a clear and structured outline of the algorithm's logic**, rather than to conform to a specific programming language's syntax.
</div>

<div class="protip" markdown="1">
**Pseudocode is often used in the early stages of algorithm development**, as a way of outlining the basic structure of the algorithm before translating it into a specific programming language. By using `pseudocode`, we can **focus on the logic of the algorithm** without worrying about a specific programming language's syntax.
</div>


## Control structure

In addition to the basic `input`-`processing`-`output` structure, algorithms often include control structures. **Control structures are statements that control the flow of the algorithm**, allowing it to make decisions and perform different actions based on different conditions.


![01_algorithm_flowchart_variants.png]({{ images_path }}/01_algorithm_flowchart_variants.png)
<p class="footnote center-h mt-" markdown="1">The figure shows a few flowcharts of algorithms that use various control structures, such as conditional statements (`if`) or loops (`until`, `while`).</p>

**Conditional statements** and **loops** are two examples of control structures that are commonly used in algorithms.

<div class="warning" markdown="1">
When you're creating algorithms, it's important to remember that **different programming languages have different** `syntax` **and available elements of the algorithm's structure**. For example, the syntax for loops and conditional statements in `Bash` may be different from that in `Python` or `R`.
</div>

<div class="more" markdown="1">
...about the syntax of various programming languages and the different elements of algorithm structure, consider visiting tutorials:
* <a class="t-links" href="521"></a>
* <a class="t-links" href="531"></a>
* <a class="t-links" href="541"></a>
* <a class="t-links" href="551"></a>
</div>

*These resources can help you gain a deeper understanding of topics like conditional statements, loops, and other elements of algorithm structure, and how to use them effectively in your scripts or programs.*

### *Conditional Statements*

Conditional statements allow an algorithm to **perform different actions based on whether a certain condition is *true* or *false***. In programming, conditional statements are often written using the keywords `if`, `else if`, and `else`.

<div class="note" markdown="1">
The `if` statement is followed by a block of code to be executed if the condition is true. <br>
The `else if` statement allows for additional conditions to be checked, followed by a block of code to be executed if that condition is true. <br>
Finally, the `else` statement provides a default option to be executed if none of the previous conditions are true.
</div>

Here's an example of `pseudocode` for a conditional statement:
```yml
if condition1 is true then
    perform action1
else if condition2 is true then
    perform action2
else
    perform action3
end if
```
*In this example, we have an if statement that checks if condition1 is true. If it is, the algorithm will perform action1. If condition1 is false, the algorithm will move on to the next condition, which is specified using the else if statement. Here, the algorithm checks if condition2 is true. If it is, the algorithm will perform action2. If both condition1 and condition2 are false, the algorithm will perform action3 using the else statement.*


Here's an example of a conditional statement that determines whether a number is even or odd:

**1)** `code in Bash`
```bash
num = 5
if ((num % 2 == 0)); then
    echo "$num is even"
else
    echo "$num is odd"
fi
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Bash does?</i></b></summary>

In this Bash script, we first initialize the variable `num` to be equal to 5. <br>
The conditional statement `if` checks if the remainder of num divided by 2 is equal to 0 *(i.e. whether* `num` *is even)*. If it is, the program outputs `"5 is even"`. <br>
Otherwise, the `else` condition is executed and it outputs `"5 is odd"`.
<div class="protip" markdown="1">
The double parentheses around the condition are used to perform arithmetic operations in Bash.
</div>
</details><base class="mt">

**2)** `code in Python`
```python
num = 5
if num % 2 == 0:
    print(num, "is even")
else:
    print(num, "is odd")
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Python does?</i></b></summary>

In this Python code, we first initialize the variable `num` to be equal to 5. <br>
The conditional statement `if` checks if the remainder of num divided by 2 is equal to 0 *(i.e. whether* `num` *is even)*. If it is, the program outputs `"5 is even"`. <br>
Otherwise, the `else` condition is executed and it outputs `"5 is odd"`. <br>
<div class="protip" markdown="1">
In Python, the syntax for conditional statements is `if` followed by the condition, a colon, and a block of indented code to be executed if the condition is **true**. The `else` statement provides a block of code to be executed if the condition is **false**.
</div>
</details>

### *Loops*

**Loops allow an algorithm to repeat a certain action multiple times**, either for a fixed number of iterations or until a certain condition is met. In programming, there are two main types of loops: `for` loops and `while` loops.

**example FOR loop** <br>
Here's an example of a `for` loop that prints the numbers 1 through 10:

**0)** `pseudocode`
```yml
For i = 1 to 10 with a step of 1, do the following:
   Print i
End For
```
*In this pseudocode, we use the* `For` *keyword to start a loop that will iterate from 1 to 10, with a step of 1. The* `i` *variable is initialized to 1 at the beginning of the loop. The loop will continue to execute as long as* `i` *is less than or equal to 10. Inside the loop, we print the value of* `i`.

Below you can explore the executable code written in 1) `Bash` and 2) `Python`, based on the pseudocode of the algorithm.

**1)** `code in Bash`
```bash
#!/bin/bash

for (( i=1; i<=10; i++ ))
do
  echo $i
done
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Bash does?</i></b></summary>

In this Bash script, we use the `for` keyword to start a loop that will iterate from 1 to 10, with a step of 1. We initialize the loop variable `i` to 1 using the `i=1` expression. The loop will continue to execute as long as `i` is less than or equal to 10. Inside the loop, we print the value of `i` using the echo command. Then, at the end of each iteration, we increment the value of `i` by 1 using the `i++` expression.
</details>

**2)** `code in Python`
```python
for i in range(1, 11):
    print(i)
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Python does?</i></b></summary>

In this Python script, we use the `for` keyword to start a loop that will iterate over a range of numbers from 1 to 10. We use the `range()` function to generate a sequence of numbers, starting from 1 and ending at 11 *(which is not included in the sequence)*. Inside the loop, we print the value of `i` using the `print()` function.
</details><base class="mt">

**Example WHILE loop** <br>
Suppose we want to write an algorithm that counts down from 10 to 1 and prints each number on a new line. We could use a while loop to do this as follows:

**0)** `pseudocode`
```yml
Start
   Set i to 10
   While i is greater than 0
      Print i
      Subtract 1 from i
   End While
End
```
*In this example, we first initialize the variable* `i` *to 10. Then, we enter a while loop, which continues as long as* `i` *is greater than 0. Inside the loop, we first print the value of* `i`*, and then subtract 1 from* `i`*. This* ***process continues until*** `i` *is no longer greater than 0, at which point the loop ends and the algorithm finishes.*

<div class="protip" markdown="1">
The `while` **loop** in this example is useful because it **allows us to repeat a certain action** (printing the value of `i`) **as many times as necessary** (until `i` is no longer greater than 0). By controlling the flow of the algorithm in this way, we can <u>create more powerful and versatile programs</u> that can handle a wider range of situations.
</div>

Below you can explore the executable code written in 1) `Bash` and 2) `Python`, based on the pseudocode of the algorithm.

**1)** `code in Bash`
```bash
#!/bin/bash

i=10
while [ $i -gt 0 ]
do
  echo $i
  i=$((i-1))
done
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Bash does?</i></b></summary>

In this Bash script, we first set the variable `i` to 10. Then, we enter a `while` loop using the while keyword, with the condition `[ $i -gt 0 ]`, which means "while i is greater than 0". Inside the loop, we print the value of `i` variable using the `echo` command, and then decrement `i` by 1 using the `$((i-1))` expression. This process continues until `i` is no longer greater than 0, at which point the loop ends and the script finishes.
</details><base class="mt">

**2)** `code in Python`
```python
i = 10
while i > 0:
    print(i)
    i -= 1
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What code in Python does?</i></b></summary>

In this Python script, we first set the variable `i` to 10. Then, we enter a `while` loop using the while keyword, with the condition `i > 0`, which means "while i is greater than 0". Inside the loop, we print the value of `i` using the print function, and then decrement `i` by 1 using the `i -= 1` shorthand for `i = i - 1`. This process continues until `i` is no longer greater than 0, at which point the loop ends and the script finishes.
</details>


# <button class="btn spc example">SIMPLE ALGORITHMS</button>

*In this section, we will provide several examples of simple algorithms and walk through how they work.* ***We will create pseudocode*** *to represent these algorithms and explain how control structures are used in these examples. These examples will demonstrate how the basic concepts of algorithms and control structures can be applied in various situations.*

### *Sum of two numbers*

```yml
input: two numbers, num1 and num2
output: sum of the two numbers, sum

set sum = num1 + num2
output sum
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm takes in two numbers as input and outputs their sum. There are no control structures used in this algorithm.
</details>

### *Factorial of a number*

```yml
input: a number, num
output: the factorial of num, fact

set fact = 1
for i from 1 to num:
    set fact = fact * i
output fact
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm takes in a number as input and outputs its factorial. A `for` **loop** is used to iterate from 1 to the input number and multiply each number in the range together to get the factorial.
</details>

### *Greatest common divisor*

```yml
input: two numbers, num1 and num2
output: the greatest common divisor of num1 and num2, gcd

while num2 is not 0:
    set temp = num2
    set num2 = num1 % num2
    set num1 = temp
output num1
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm takes in two numbers as input and outputs their greatest common divisor. A `while` **loop** is used to repeatedly calculate the remainder of dividing the larger number by the smaller number until the remainder is 0. The final value of the smaller number is the greatest common divisor.
</details>

### *Linear search*

```yml
input: an array of numbers, arr, and a value to search for, val
output: the index of val in arr, or -1 if val is not in arr

for i from 0 to length of arr - 1:
    if arr[i] == val:
        output i
output -1
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm searches for a value in an array using the linear search algorithm. A `for` **loop** is used to iterate through each element of the array and compare it to the search value within a simple `if` condition statement.
</details>

### *Binary search*

```yml
input: a sorted array, arr, and a value to search for, val
output: the index of val in arr, or -1 if val is not in arr

set left = 0
set right = length of arr - 1
while left <= right:
    set mid = (left + right) / 2
    if arr[mid] == val:
        output mid
    else if arr[mid] < val:
        set left = mid + 1
    else:
        set right = mid - 1
output -1
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm searches for a value in a sorted array using the binary search algorithm. A `while` **loop** is used to repeatedly cut the search range in half by comparing the value to the middle element of the current range and adjusting the endpoints accordingly within the `if`-`else if`-`else` condition statement.
</details>

### *Bubble sort*

```yml
input: an array of numbers, arr
output: the sorted array

set n = length of arr
for i from 0 to n - 1:
    for j from 0 to n - i - 1:
        if arr[j] > arr[j+1]:
            swap arr[j] and arr[j+1]
output arr
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

This algorithm sorts an array of numbers using the bubble sort algorithm. **Two nested** `for` **loops** are used to compare adjacent elements of the array and swap them `if` they are in the wrong order, repeatedly iterating through the array until no more swaps are needed.
</details>

### *Reverse a string*

```yml
input: string s
output: reversed string r

Algorithm:
1. Initialize an empty string called r.
2. Get the length of s and store it in a variable called len.
3. Loop from len-1 to 0 with a step size of -1.
4. For each iteration, add the character at index i of s to r.
5. Return r as the output.
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>EXPLANATION</i></b></summary>

The above pseudocode assumes a `0-indexed` string, meaning the first character of the string is at index 0. If your string is `1-indexed` *(i.e., the first character is at index 1)*, then you'll need to adjust the loop accordingly by starting at `len` and ending at `1` with a step size of `-1`.
</details>

<div class="note" markdown="1">
Pseudocode is a high-level description of a computer program that uses a mix of natural language and structured programming language-like syntax. `Pseudocode` **can be more descriptive using text**, where it provides detailed explanations of each step, or more like a <u>template of the code</u>, where it resembles actual programming code without adhering to a specific programming language's syntax.
</div>

#### <button class="btn exercise"></button>

<div class="exercise before" data-before="" markdown="1">
**Transforming the descriptive pseudocode from above example to code-like pseudocode can be a great exercise to help you understand how to translate an algorithm's logic into actual code.** <base class="mb">
*So, I encourage you to take the descriptive pseudocode from [this example](#reverse-a-string) and try to transform it into code-like pseudocode. This will not only help you understand the algorithm's logic better but also give you practice in translating that logic into actual code.* <base class="mb">

<details markdown="1"><summary><b><i>see example code-like solution</i></b></summary>

Here's how you would implement the algorithm in code-like pseudocode:
```yml
input: string s
output: string r, as reversed string s

set r = ""                             # Initialize an empty string called r.
set len = length of s                  # Get the length of s and store it in a variable called len.

FOR i FROM len-1 TO 0 STEP -1 DO:      # Loop from len-1 to 0 with a step size of -1.
    r = r + s[i]                       # For each iteration, add the character at index i of s to r.
END FOR

RETURN r                               # Return r as the output.
```
</details>

<details markdown="1"><summary><b><i>see realistic Python implementation</i></b></summary>

Here's how you would implement the algorithm in Python:
```python
def reverse_string(s):
    r = ""
    length = len(s)

    for i in range(length - 1, -1, -1):
        r += s[i]

    return r

# Usage example:
result = reverse_string("hello")
print("Reversed string:", result)
```

<div class="protip font-1 mb-0" markdown="1">
Enclosing the algorithm in a Python function enhances code modularity, reusability, and readability by encapsulating the logic within a named unit that can be easily called and utilized throughout the codebase.
</div>
</details>
</div>
