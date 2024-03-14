---
title: "Open-Close & Read-Write of data files"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 533
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

<span style="color: #ff3870;font-weight: 500;">Before starting this tutorial, there are a few requirements that you should have in place.</span>
* Firstly, you should be familiar with using the **command line in terminal** on your computer. <br>
<i>Learn more from the practical tutorials in section</i> {% include target_link href=300 %}
* Secondly, you should **have Python installed** on your local machine.  <br>
<i>Learn more from the practical tutorial</i> {% include target_link href=423 %}
* Thirdly, you should have a Python Integrated **Development Environment** (IDE) set up on your computer, e.g., PyCharm or JupyterLab or any text editor.  <br>
<i>Learn more from the practical tutorial</i> {% include target_link href=420 %}
* Finally, you should have a **basic understanding of Python** programming.  <br>
<i>Learn more from the practical tutorial</i> {% include target_link href=531 %}

# Introduction

In this tutorial, we will cover the **basics of working with text files using Python**, including how to read and write text files, and how to handle errors that may occur during the process. Text files are a common format for storing and exchanging data, and Python provides a straightforward and efficient way to manipulate them.

## *What is data file?*

A data file is a **collection of data that is stored in a computer system**. Data files can come in many different formats, such as text files, binary files, CSV files, XML files, and more. In general, data files are used to store and exchange data between different systems and applications.

One of the most common types of data files is the **text file**. A text file is a type of file that contains plain text, which is made up of a series of characters. Text files can be used for <b>storing any type of data, including text, numbers, and symbols</b>. They are simple and easy to read, and can be used for a wide range of applications, for example to store and exchange human-readable data, such as configuration files, source code, and research data for analysis or processing.

Text files can be created and edited using a variety of text editors but they can also be read and written to using programming languages like Python.
<span style="color: #ff3870;font-weight: 500;"> In Python, you can open, read and write files using built-in functions that make it easy to manipulate data.</span>

## Formats of data files

Text files are important because they are used to store data that can be easily read and manipulated by humans and machines. Python can open and manipulate many different text file formats. Some of the most common text file formats that can be handled by Python include:
* **TXT**, plain text files <br>
<i>These are simple text files that contain only plain text characters.</i>
* **CSV**, comma Separated Value files <br>
<i>These files contain tabular data that is separated by commas, such as a spreadsheet.</i>
* **JSON**, JavaScript Object Notation files <br>
<i>These files contain data in a lightweight format that is easy for humans to read and write, and easy for machines to parse and generate. Used to store structured data in a text format.</i>
* **XML**, Extensible Markup Language files <br>
<i>These files contain data in a structured format that is easy to read and parse.</i>
* **HTML**, Hypertext Markup Language files <br>
<i>These files contain web page data that is rendered by web browsers.</i>
* **MD**, Markdown files <br>
<i>These files contain formatted text that can be easily converted to HTML or other formats.</i>


Python provides **built-in modules for handling many of these file formats**, such as:
* `csv` for CSV files,
* `json` for JSON files,
* `xml.etree.ElementTree` for XML files.

Additionally, Python provides **powerful third-party libraries** for working with more complex file formats, such as `pandas` for working with tabular data and `BeautifulSoup` for parsing HTML and XML documents.


# Manipulating simple text files

<b>In the following sections, we will explore the different modes for opening and manipulating text files, such as TXT or CSV with Python built-in functions.</b>
Before we can start working with text files in Python, we first need to understand how to open and manipulate them. Python provides several modes for opening files, including `read` mode, `write` mode, and `append` mode.



## **Opening a file**

Before we can read or write to a text file, we must first open the file. To open a file, we use the `open()` function, which takes two arguments: the file name and the mode. *The mode specifies the purpose of the file, whether it's for reading, writing, or both.*
```
open(filename, mode)
```

Here are the most common modes for opening text files:
* `r` - **Read mode**: This mode is used to read the contents of a file.
* `w` - **Write mode**: This mode is used to write to a file. If the file already exists, it will be overwritten.
* `a` - **Append mode**: This mode is used to add new content to the end of an existing file. If the file does not exist, it will be created.
* `x` - **Exclusive creation mode**: This mode is used to create a new file, but will raise an error if the file already exists.

In addition to these basic modes, there are also modes for:
* reading and writing binary data (`rb` and `wb`), as well as modes for
* reading and writing data in text and binary modes (`r+` and `w+`).


To open a text file in Python, we use the built-in `open()` function. With this function, you can create & open a new file all at once or open an existing file.

Here is an example of how to open a file in read mode:

```
file = open('example.txt', 'r')
```
*In this example, we are opening a file called "example.txt" in read mode ('r').*

**The open() function returns a file object that we can use to access the contents of the file.**


## **Closing a file**

It is important to close the file once we are finished using it. This ensures that any changes we have made to the file are saved and that we free up system resources. To close a file, we use the `close()` method with no parameters:

```
file.close()
```
<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">So, each time you use <b>open(file)</b> function, once you are done processing the file, remember to also use the <b>close()</b> function to protect the file content.</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
file = open('example.txt', 'r') <br><br>
&sharp; (file processing) <br><br>
file.close()
</code>
</div><br>

## Open-Close using `with` <br> ***(recommended)***

In Python, the `with` statement is used to wrap the execution of a block of code with methods defined by a context manager. The with statement ensures that the resources are properly managed and cleaned up even if an exception occurs. This is particularly useful when working with files or other resources that need to be **opened and closed properly** to avoid resource leaks.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
A context manager is an object that defines the methods <code>__enter__()</code> and <code>__exit__()</code> that are used to set up and tear down resources that are used by the block of code.
</span>
</div><br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Using the <b>with</b> statement is considered a best practice in Python because it ensures that resources are properly managed and cleaned up, and reduces the likelihood of resource leaks and other errors.
</span>
</div><br>


The `with` statement is a convenient way to **manage file objects in Python** because it automatically takes care of closing the file when the block of code is exited, even if an exception is raised. The benefits of using the with statement to manage open-close a file include:
* **automatic cleanup**, a file is automatically closed when the block of code is exited
* **more readable code**, by reducing the amount of code needed to manage file objects
* **improved performance**, you can avoid the overhead of opening and closing files repeatedly & manually
* **better error handling**, any exceptions that occur while the file is being used will be handled automatically

**`with open()` &ensp; to read from a file** <br>
Here's an example of how to use the with statement to open a file and read its contents:
```
with open('input_file.txt', 'r') as f:
    data = f.read()
```
<i>In this example, the open() function is used to open the file "input_file.txt" in read mode. The <b>with</b> statement ensures that the file is properly closed after the block of code is executed, even if an exception occurs. Inside the with block, the read() method is called to read the contents of the file into the data variable.</i>

**`with open` &ensp; to write to a file**<br>
Here's an example of how to use the with statement to open a file and write to it:
```
with open('output_file.txt', 'w') as f:
    f.write("some text \n")
```
<i>In this example, the open() function is used to open a file called "output_file.txt" in write mode ('w'). The <b>with</b> statement ensures that the file is properly closed after the block of code is executed, even if an exception occurs. Inside the with block, the <b>f.write()</b> method is used to write a line of text to the file.</i>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">If you want to write to a file line by line, remember to add a new line charaster <b>"\n"</b> to the end of your string.</span>
</div><br>


## **Reading a file**

To read from a text file in Python, we can use the `open()` function to open the file in *read* mode. We can then use the `read()` method to read the contents of the file.

Here is an example:

```
with open('example.txt', 'r') as file:     # Open the file in read mode
    content = file.read()                  # Read the contents of the entire file and close it

print(content)                             # Print the contents of the file using a variable
```
*In this example, we are opening a file called "example.txt" in read mode and then using the read() method to read the entire contents of the file. The contents are then stored in a variable called content, which is printed to the console.*


## *Reading line by line*

Sometimes it is more efficient to read or write text files line by line. To read a text file line by line, we can use a for loop:

```
with open('example.txt', 'r') as file:     # Open the file in read mode
    for line in file:                      # Read the contents of the file line by line
        print(line)                        # Print each line of the file
```
*In this example, we are opening a file called "example.txt" in read mode and then using a for loop to iterate over each line in the file. The print() function is used to print each line to the console.*


## **Writing to a file**

In Python, writing to a text file is a simple process that involves opening the file in write mode, writing the desired content to the file, and then closing the file. <br>
Once the file is open in write mode, you can write content to the file using the `write()` method of the file object. The `write()` method takes a string as input and writes it to the file.
```
write('string')
```

For example, to write the string <i>"Hello, World!"</i> to the file, you can use the following code:

```
file = open("output.txt", "w")          # Open the file in write mode
file.write("Hello, World!")             # Write content to the file
file.close()                            # Close the file
```
*After running this code, a new file named "output.txt" will be created in the current directory with the content "Hello, World!".*


## *Writing line by line*

To write to a text file line by line, we can use the write() method multiple times:

```
with open('example.txt', 'w') as file:      # Open the file in write mode and close automatically when the block code ends
    file.write('This is line 1\n')          # Write first string to the file
    file.write('This is line 2\n')          # Write second string to the file
    file.write('This is line 3\n')          # Write third string to the file
```
<i>In this example, we are opening a file called "example.txt" in write mode and then using the write() method to write three lines of text to the file. The <b>"\n"</b> character is used to indicate a new line.</i>

In addition to the `write()` method, Python provides the built-in `writelines()` function for writing data to a text file line by line.

**writelines()** <br>
The `writelines()` method is used to write multiple lines of text to a file. This method takes a sequence of strings as an argument and writes each string as a separate line to the file.

```
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]    # Create list of strings

with open('example.txt', 'w') as file:          # Open the file in write mode and close automatically when the block code ends
    file.writelines(lines)                      # Write all strings in separate lines of the file
```
*In this example, we define a list of strings called lines, each of which ends with a newline character (\n). We then open a file called example.txt in write mode and pass the lines list to the writelines() method, which writes each string in the list as a separate line to the file. This code will write the strings "Line 1", "Line 2", and "Line 3" to the file example.txt, with each string on a separate line.*

## *Writing formatted data*

**print() with the *file* parameter** <br>

In Python, you can use the `print()` function with the `file` parameter to **write output to a text file**. The *file* parameter allows you to specify the file object that you want to write the output to. The `print()` function also **supports formatting output** to make it more readable. This can be a convenient way to write formatted data to a file without having to use the `write()` method.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">The <b>print()</b> function can be used to write formatted output to the console or to a text file. By default, <b>print()</b> writes to the console, but you can specify a "file" object as the file parameter to write to a text file instead.</span>
</div><br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It is recommended to <b>use the <code>with</code> statement to manage the open-close of the processed file</b>. When the <code>with</code> block ends, the file is automatically closed and any buffered data is flushed to the disk.
</span>
</div><br>


###  • *padding with spaces*
You can use spaces to align output by adding padding to the left or right of a string.

For example, to right-align a string with a fixed width of 10 characters, you can use the string format operator **%** like this:
```
x = "hello"
print("%10s" % x)
```
and to write it to the file use:
```
x = "hello"
with open('example.txt', 'w') as f:
    print("%10s" % x, file=f)
```
*This will output " hello", with 5 spaces added to the left of the string to make it a total of 10 characters wide.*


###  • *data separator: sep & end*
The `print()` function also has a `sep` parameter that allows you to specify a separator between multiple arguments *(e.g., variables)* that will be printed. By default, the `print()` function ends the line with a new line characterbut you can change that by customizung the value of the `end` parameter.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
You can use the <b>sep</b> and <b>end</b> parameters of the <b>print()</b> function to control the separator between values and the end-of-line character. <br><br>
</span>
</div><br>


For example, to print two numbers separated by a dash, you can use:
```
x = 10
y = 20
print(x, y, sep="-")
```
and if you want to continue printing in the same line, you can change the `end` param to a space:
```
print(x, y, sep="-", end=' ')
```
*This will output "10-20", with a dash separator between the numbers.*

You can do the same with a more complex data structure and write it to the file. <br>*For example, to write a list of names separated by commas to a file, you can use the following code:*

```
names = [John, Anna, Bob]                             # Create a list of numbers

with open("names.txt", "w") as f:                     # Open & Close a file using 'with' keyword
    print(*names, sep=",", file=f)                    # output: John, Anna, Bob
```
*In this example, we first define a list of names called 'names'. We then use the with statement to open a file called "names.txt" in write mode, which automatically closes the file when we're done with it. We use the print() function to write the list of names to the file. The 'sep' parameter in the print() function separates the names with a comma (,), which will result in the names being written to the file as a comma-separated list.*

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
By using the <b>*</b> operator to unpack the list (<code>*names</code> in the example above), you can pass each list element as a separate argument to the print() function.
</span>
</div><br>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that the <b>print()</b> function automatically adds a newline character <b>("\n")</b> at the end of the output, so each call to print() will start a new line in the file. If you want to write multiple values to the same line, you can use:</span> <br><br>
1) 'end' parameter in the print() function: <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(*names, sep="-", end=" ", file=f)
</code><br>
2) string concatenation: <br>
<i>String concatenation is the process of combining two or more strings into a single string. In Python, you can concatenate strings using the + operator or by using the join() method.</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
names = [John, Anna, Bob] <br>
names2 = ['Sam', 'Kathy', 'Emma'] <br><br>
print('-'.join(names+names2), file=f)
</code>
</div><br>


###  • *use format() method*
You can also use curly braces **{}** as placeholders in a string and use the `format()` method to substitute variables or expressions. The curly brackets can contain optional parameters that define the format of the value being inserted *(see [set width, type & align](#set-width-type--align))*.

**You can use format() context manager to subsitute values of variables to the template data structures:**
```
name = "John"                                           # variable 1
age = 32                                                # variable 2
country = "USA"                                         # variable 3

print("{} {} {}".format(name, age, country))            # substitution of variables in order
```

You can do the same with a more complex data structure and write it to the file:

```
people = {"John" : 30, "Anna" : 22, "Bob" : 27}                             # Create directory of key:value pairs

with open("example.txt", "w") as f:                                         # Open & Close a file using 'with' keyword
    for person in people:
        print("Name: {}, Age: {}".format(person, people[person]), file=f)   # Write formatted data to a file
```
*In this example, we open a file called example.txt in write mode using a context manager. We then use the print() function to write a formatted string to the file. The string contains placeholders {} that are replaced with values using the format() method. The file parameter is set to the file object f, which redirects the output of the print() function to the file.*


###  • *set width, type & align*

The `print()` function in Python supports various formatting options to align output in a specific way.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
In Python, curly brackets {} are used as placeholders in a string to be replaced with values at runtime. When used with the format() method, the curly brackets are used to indicate the location and formatting of values that will be inserted into the string.
</span>
</div><br>

You can **use the curly braces {} as placeholders** for the values you want to print, and then use the `format()` method to substitute those placeholders with actual values *(general syntax below)*.
```
print("{:align width}".format(variable))
```

The **curly brackets {}** can contain optional parameters that define the format of the value being inserted. These parameters are separated by a `colon :` and can include:
* **field width**, the minimum number of characters to be printed for the value <br>
<i>For example:</i> `{:5}` will print the value with a width of 5 characters

* **text alignment**, the alignment of the value within the field <br>
<i>For example:</i> `{:^10}` will center-align the value within a field of width 10 characters.
  * `<` for left-aligned
  * `>` for right-aligned
  * `^` for center-aligned


* **type**, the type of the value being inserted <br>
<i>For example:</i> `{0:.2f}` will format a floating-point number with 2 decimal places.
  * `d` for integers
  * `f` for floating-point numbers
  * `s` for strings

For example, to format a floating-point number with two decimal places, you can use the following code:
```
x = 3.141592653589793
print("The value of pi is {:.2f}".format(x))
```
and to write it to the file use:
```
x = 3.141592653589793
with open('example.txt', 'w') as file:
    print("The value of pi is {:.2f}".format(x), file=f)
```
*This will output "The value of pi is 3.14", with the number formatted to two decimal places.*

You can do the same with a more complex data structure and write it to the file:

```
people = {"John" : 30, "Anna" : 22, "Bob" : 27}                                    # Create directory of key:value pairs

with open("example.txt", "w") as f:                                                # Open & Close a file using 'with' keyword
    for person in people:
        print("Name: {:<10}, Age: {:>5}".format(person, people[person]), file=f)   # Write formatted data to a file
```
*In this example, we specify the `field width` and `alignment` for each value using the format specification syntax.*





###  • *use f-strings*
Since Python 3.6, you can use f-strings to format strings with variables or expressions. <br>
**Variables in the f-strings are enclosed in curly braces {} and prefixed with the letter "f":**
```
f"some text {variable}"
```
For example, embed the values of two variables into the sentence template:
```
name = "Alice"
age = 30
print(f"My name is {name} and I'm {age} years old")
```
and to write it to the file use:
```
name = "Alice"
age = 30
with open('example.txt', 'w') as f:
    print(f"My name is {name} and I'm {age} years old", file=f)
```
*This will output "My name is Alice and I'm 30 years old", with the variables substituted into the string.*


You can also add formatting *(see [set width, type & align](#set-width-type--align))* to the f-string output in Python:

```
name = "Alice"
age = 30
with open('example.txt', 'w') as f:
    print(f"{name:<10} {age:>5}", file=f)
```

---

# Handling errors

When working with text files, it is important to handle errors that may occur during the process. While manipulating data files in Python, errors can occur if the file **does not exist**, **cannot be opened**, or **cannot be read or written** to for any other reason. To handle these errors, you can **use Python's exception handling mechanism**.

In Python, you can use the `try...except` statement to catch and handle exceptions that may occur when working with files. The `try` block contains the code that may raise an exception, while the `except` block contains the code to handle the exception if it occurs. <br>
<span style="color: #ff3870;font-weight: 500;">Learn more about Python's exception handling mechanism in section</span> {% include target_link href=531 section="#--try-except-finally" text="Control Flow: Try-Except-Finally" %} in the tutorial {% include target_link href=531 text="Introduction to Python programming" %} 

## EXAMPLE: *FileNotFoundError*
To handle this error, we can use a try/except block:

```
try:
    file = open('example.txt', 'r')
    content = file.read()
    print(content)
except FileNotFoundError:
    print('File not found.')
finally:
    file.close()
```
In this code, the `try` block attempts to open the file <i>"myfile.txt"</i> for reading using the `open()` function. If the file does not exist, a `FileNotFoundError` exception is raised, and the code in the except block is executed, which simply prints an error message.

Similarly, you can handle other types of exceptions that may occur when working with files. The specific type of exception to catch will depend on the type of error you expect to occur. <br>
There are several common types of exceptions that may occur when working with files in Python. Some of the most common include:

* `FileNotFoundError` :  Raised when a file cannot be found at the specified path.
* `IOError` : Raised when an input/output operation fails, such as when reading or writing to a file.
* `PermissionError` : Raised when you do not have the required permissions to access a file or directory.
* `ValueError` : Raised when a value provided to a file operation is invalid, such as when specifying an invalid mode for opening a file.
* `TypeError` : Raised when an object provided to a file operation is of the wrong type, such as when passing a string where a file object is expected.


<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It's important to handle exceptions when working with files in Python, as failure to do so can result in unexpected program crashes or data loss. By using exception handling, you can gracefully handle errors and provide useful error messages to the user.
</span>
</div><br>
