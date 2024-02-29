---
title: "Text editors: create Python code in terminal text files"
note: (intermediate)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 425
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [04. Development Environment](00-DevelopmentEnvironment-LandingPage.md) / [2. Python programming environment(s)](02-python-programming-environment.md) / **2.3.2 Text editors: create Python code in terminal text files**

---


# Introduction

Once a beginner Python user has familiarized themselves with the <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02B-python-terminal-shell" target="_blank">Python shell and IDLE <i>(see the tutorial  ⤴)</i></a> and has explored the <a href="https://" target="_blank">Python syntax and simple operations <i>(see the tutorial  ⤴)</i></a>, they may realize they want to **save the code in a text file for future reuse**. These text files, which contain relatively simple code, are called scripts and are saved with the `.py` extension. Saving code in a script is useful for:
* easy editing &emsp;&emsp; &emsp; &emsp; &emsp;  *(make changes and updates to your code in one place)*
* portability &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; *(transfer between machines)*
* reusability &emsp;&emsp;&emsp;&emsp; &emsp; &emsp;  *(you can reuse the same code repeatedly)*
* reproducibility &emsp; &emsp; &emsp; &emsp;  *(keep the record of the exact steps in your analysis)*
* project documentation &emsp; *(make it easier for others to understand your analytic pipeline)*

For simple programming tasks, it is good to **use text editors available directly in the terminal**. This way, users can create, edit and reuse Python scripts on a computing machine, **including HPC**. Text editors such as `nano`, `vim`, `emacs`, and `mcedit` are common options for creating and editing scripts in the terminal.

Once the script is saved, it can be **run from the terminal** using the `python` command followed by the name of the script.
```
python my_script.py
```

## *in-shell coding vs. scripting*

When writing a script in a file, the technical process is different from using Python in the interactive shell. In the shell, you can write a line of code and execute it immediately to see the results. However, when writing a script, you need to write the complete piece of a task, save the changes, and then execute the script in a terminal to get the results.

In other words, when using the interactive shell, you can experiment with single operations and test them immediately, while when writing a script, it is better to plan out the larger snippet of code and ensure that it works as expected before executing it.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
When writing a script, testing the code after adding each line of code is possible but can be both annoying and inefficient. This is because writing a complete program requires a series of steps that often depend on each other, so it's difficult to test individual parts of the program before it's complete.
</span>
</div>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
When scripting, it's expected that the developer has a clear idea of the program as a whole and is fluent in basics of Python syntax in order to assemble the code for the task with a reasonable structure. This involves breaking down the task into smaller, manageable steps and writing code to accomplish each step, using available components (operators, built-in functions, imports) whenever possible.
</span>
</div>

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
With a script, you have the ability to save and reuse the code for later use, whereas in the interactive shell, you can only reuse code that you have written and executed in that particular session.
</span>
</div>


## *good scripting practices*

By having a clear understanding of the task, being fluent in Python syntax, and using good coding practices, developers can create scripts that are efficient, maintainable, and robust.

It's often better to write the entire program first, and then test it as a whole. This approach allows you to focus on the overall functionality of the program, and to test all of the steps together to ensure that they work properly.

Once you've tested the program and ensured that it works correctly, you can then make any necessary changes or improvements to the code. This approach is typically more efficient and can save you a significant amount of time and effort when writing complex programs.


# Create a Python script

Creating Python code in text files *(scripts)* is a common way to write and save Python programs. This is useful in situations where you need to write a longer program, reuse code across multiple sessions, automate a task such as running a simulation, or share code with others.

To create a Python script in a terminal, you can use a text editor such as:
* `nano` &emsp; &emsp; &emsp; *(easy)*
* `vim` &emsp;&emsp;&emsp;&emsp; *(moderate)*
* `mcedit` &emsp;&emsp;&emsp;*(advanced)*

<span style="color: #ff3870;font-weight: 500;">To learn more about text editors available in the terminal (command-line interface) and their options, see tutorials in section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a>, for example <a href="https://datascience.101workbook.org/02-IntroToCommandLine/02B-text-files-editors" target="_blank">Command Line Text Files Editors: nano, vim  ⤴</a>.</span>

## Script Example 1 in <b>nano</b> <br> *calculate the average*

Here's how you can create a new Python script using `nano`, a simple text editor that is typically available in the command line without installation.

**1.** Open the terminal and navigate to the directory where you want to create the script.

```
cd </file_system/location>
```

**2.** Type the following command to open a new file in `nano`:

```
nano calc_average.py
```
<i>This will create a new file called "calc_average.py"  and open it in the `nano` text editor.</i>

![02_python-nano1.png]({{ images_path }}/02_python-nano1.png)

**3.** Type or paste Python code from the snippet below into the file.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Note that lines starting with the <b>#</b> sign are not executed.  It is how we <b>introduce commenting into the code</b>, which contains a description of individual code fragments. From the comments in the following code snippet, you will learn the role of the code in the next line.
</span>
</div><br>

```
#1 Get a list of numbers from user (typed in a terminal)
num_string = input("Enter a list of numbers separated by spaces: ")

#2 Split the input string into a list of numbers
num_list = num_string.split()

#3 Convert each element of the list to a float
num_list = [float(x) for x in num_list]

#4 Calculate the average of the numbers
avg = sum(num_list) / len(num_list)

#5 Print the result
print("The average is:", avg)
```

<details><summary><i><b>What the script does?</b></i></summary>

<b>#1 Get a list of numbers from user</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
num_list = input("Enter a list of numbers separated by spaces: ")
</code>
In this code line, we create the list called <i>"num_list"</i> which is filled up with numbers by using the Python built-in function <b>input()</b>. This function prompts the user to type the input numbers in the command line once the script is executed. The default format of entered numbers requires separating them by spaces.
<br><br>
<b>#2 Split the input string into a list of numbers</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
num_list = num_list.split()
</code>
When the user approves with <i>Enter</i> the completeness of the list of numbers, the script will proceed to the task in the next line of code. In this case, it will use the built-in split() function that separate the inputed string of numbers on spaces and create a list of words.
<br><br>
<b>#3 Convert each element of the list to a float</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
num_list = [float(x) for x in num_list]
</code>
Since the input function automatically converts the loaded information into a string variable (text) and mathematical operations work on numeric variables of type int (integer) or float (floating point), it is necessary to convert the list of words into a list of numbers. It can be done using the built-in float() function. The function takes a single variable as an argument, so you need to use a loop iterating through the list to convert all its elements into floating-point numbers.
<br><br>
<b>#4 Calculate the average of the numbers</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
avg = sum(num_list) / len(num_list)
</code>
In this step we use the next two built-in Python functions: <br>
<li><b>sum()</b>, which takes a list of numbers as an argument and returns the sum of its elements</li>
<li><b>len()</b>, which returns the length of provided argument (e.g., string or list), i.e., the number of elements in the list (in this case)</li>
Each function returns a single numeric type value, so you can use the mathematical divide operator <b>" / "</b> on them to calculate the average.
<br><br>
<b>#5 Print the result</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print("The average is:", avg)
</code>
Finally, we use a Python built-in function <b>print()</b> to display the message for the user on the screen with the calculated average of the inputted list of numbers.
</details><br>

<span style="color: #ff3870;font-weight: 500;">Learn more about Python built-in functions such as </span><b>input(), split(), float(), sum(), len(), print(),</b> <span style="color: #ff3870;font-weight: 500;">and more from tutorials provided in section <a href="https://datascience.101workbook.org/05-IntroToProgramming/00-IntroToProgramming-LandingPage" target="_blank">05. Introduction to Programming  ⤴</a> :</span>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a>
* <a href="https://" target="_blank"> Python syntax and simple operations  ⤴</a>
* <a href="https://" target="_blank">Python built-in functions  ⤴</a>

**4.** Save and exit the file by pressing `Ctrl+X`, then `Y`, and then `Enter`. <br>
<i>This will save your changes and exit the nano text editor.</i>

<p align="left"><img width="800" src="{{ images_path }}/02_python-nano.gif"></p>

**5.** You can now run your Python script from the terminal by typing:
```
python calc_average.py
```
<i>This will execute your script and print  to the console the average of user-provided numbers.</i>

![02_python-nano2.png]({{ images_path }}/02_python-nano2.png)

---

## Script Example 2 in <b>vim</b> <br> *script for word counts*

*In this example, we create a script to count the number of occurrences of each word in a text.*

Here's how you can create a new Python script using `vim`, an advanced text editor that is typically available on the HPC systems.

**1.** Open the terminal and navigate to the directory where you want to create the script. <br>
In this example, we use input data loaded from a text file instead of inputs interactively provided by a user. You can copy-paste the content of the sample `input.txt` file from the text box below.

<pre><code style="background-color: #e8e9e8; padding: 10px 10px; width:100%; display: block; font-size:0.8em;">
This is a sample text file.
It contains some text for counting the number of occurrences of each word.
This is just a sample, but it can be used for testing the script.<br>
</code></pre>

**2.** Type the following command to open a new file in `vim`:

```
vim count_words.py
```
<i>This will create a new file called "count_words.py" and open it in the `vim` text editor.</i>

![02_python-vim1.png]({{ images_path }}/02_python-vim1.png)

**3.** Once the `vim` editor is activated, press the `i` key to enter insert mode and start typing your code or copy-paste it from the snippet below. <br>

<p align="left"><img width="800" src="{{ images_path }}/02_python-vim1.gif"></p>

<i>Select the text below, right-click on your mouse abd select `Copy` from the pop-up menu. Go to the `vim` editor in your terminal and use the right-click again, this time select the `Paste` option.</i>

```
#1 Open the input file
with open("input.txt", "r") as f:
    word_count = {}                        ## Create an empty dictionary to hold the word counts
    for line in f:                         ## Loop over each line in the file
        words = line.strip().split()       ## Split the line into words
        for word in words:                 ## Loop over each word in the line
            if word in word_count:         ## Increment the word count if the word is already in the dictionary
                word_count[word] += 1
            else:                          ## Add the word to the dictionary if it's not already there
                word_count[word] = 1


#2 Print the word counts
for word, count in word_count.items():
    if count > 1 and len(word) > 1:        ## skip 1-letter words aand those with counts less than 2
        print(f"{word}: {count}")
```

<details><summary><i><b>What the script does?</b></i></summary>

<b>#1 Open the input file</b>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
with open("input.txt", "r") as f:
</code>
In this code line, we open text a file called <i>"input.txt"</i>, which contains sample text that serves as input for the script processing task. To do so, we use the Python built-in function <b>open()</b>, which takes 2 arguments here, 1) the path and filename of the input file, and 2) a processing mode "r" that is a shortcut for "reading".
<br><br>
The file is processed line by line in the <b>for</b> loop:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
for line in f:
</code>
where the string of words is separated to the list of words called "words":
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
words = line.strip().split()
</code>
The "words" list is overwritten in each iteration, i.e., for each line in the file.
The inner <b>for</b> loop:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
for word in words:
</code>
is used to browse the "words" list in each external iteration to increment the counts for previously registered words:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
if word in word_count: <br>
 &emsp; &emsp;  word_count[word] += 1
</code>
and, add a new unique word to the "word_count" dictionary:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
else: <br>
 &emsp; &emsp; word_count[word] = 1
</code><br>
The "word_count" is a dictionary, i.e., a type of Python object declared by {} and composed of key:value pairs separated by commas, for example:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
word_count = {'This' : 2, 'is' : 2, 'text' : 2, 'for' : 3, 'example' : 1}
</code><br>
<b>#2 Print the word counts</b><br>
The dictionary is filled with key:value pairs by the script's algorithm and stored in the memory as long as the script is active. This way, the extracted and structured information can be passed on to the next task in the script. For example, once the input file "input.txt" is processed to the end, the next task can be to filter out words shorter than 2 letters and further print only these counted more then once.<br>

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Note that in this case, we used a different syntax for the built-in print() function:</span>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
print(f"{variable} text {variable}")
</code>
<span style="font-style:italic;">It allows for easier way of merging text-like with non-text {variables}.</span>
</div>
</details>


<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It is a good practice to separate blocks of code for different tasks in the script and provide comments for better readability and understanding of the code. This can be done by using comments <b>#</b> at the top of each code block to explain its general purpose. Additionally, comments <b>##</b> can be added to the end of specific lines that may not be immediately obvious what their purpose is.
</span>
</div>

<span style="color: #ff3870;font-weight: 500;">Learn more about Python built-in functions such as </span><b>open(), strip(), split(), items(), len(), print(f""), Python loops and built-in objects </b> <span style="color: #ff3870;font-weight: 500;">from tutorials provided in section <a href="https://datascience.101workbook.org/05-IntroToProgramming/00-IntroToProgramming-LandingPage" target="_blank">05. Introduction to Programming  ⤴</a> :</span>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a>
* <a href="https://" target="_blank"> Python syntax and simple operations  ⤴</a>
* <a href="https://" target="_blank">Python built-in functions  ⤴</a>

**4.** Once you are done editing, press the `Esc` key to exit insert mode. <br>
* To save the changes, type `:w` and press `Enter`. *This will save the file.*
* To exit Vim, type `:q` and press `Enter`. <br>
<i>If you have unsaved changes, Vim will warn you and you can type `:q!` to force quit without saving, or `:wq` to save and quit.</i>

<p align="left"><img width="800" src="{{ images_path }}/02_python-vim2.gif"></p>

**5.** Once you're done editing and saving the file, you can run it in the terminal by typing:

```
python3 count_words.py
```

*This time we execute the script with the keyword `python3` to emphasize that the print() function with argument syntax `f"{variable}"` is available in the python3 variant only. If you have Python in version 2, see the syntax for the print() function in Example 1.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Remember that the script configuration (in this case) requires the input file (called "input.txt") to be in the same location as the script.
</span>
</div>

<i>This will execute your script and print to the console the words with at least 2 counts and at least 2-letter long.</i>

![02_python-vim2.png]({{ images_path }}/02_python-vim2.png)


---

## Script Example 3 in <b>mcedit</b> <br> *password generator*

*This script can be used to generate strong and random passwords for users. It uses the `string` and `random` modules to generate the text strings that can serve as passwords.*

Here's how you can create a new Python script using `mcedit`, an advanced text editor *(in terminal and GUI-like)* that typically requires installation, but its utility is worth it!

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
<b>MCedit</b> has a graphical user interface in the terminal and a <b>built-in file manager</b>. This means that `mcedit` is generally easier to use for beginners (for basic tasks) since it provides a familiar <b>point-and-click interface</b> besides the keyboard navigation.  
</span>
</div><br>

![02_python-mcedit.png]({{ images_path }}/02_python-mcedit.png)

**0.** If you haven't already done so, install the midnight commander package that provides you with the editor `mcedit`.

<details><summary>Windows:</summary>

1. To install MC on Windows, you need to download the Windows version of MC from the official website <a href="https://midnight-commander.org/downloads/" target="_blank">https://midnight-commander.org/downloads/  ⤴</a>. <br>
2. Once downloaded, run the executable file and follow the installation instructions to complete the installation. <br>
3. You may need to add the path to the MC executable to your system's environment variables to use it from the command line. <br>
</details>

<details><summary>macOS:</summary>

To install MC on macOS, you can use Homebrew, a package manager for macOS. <br>
If you haven't done this already, install Homebrew by following the instructions on its website <a href="https://brew.sh/" target="_blank">https://brew.sh/  ⤴</a>
1. Once Homebrew is installed, open Terminal and run the following command:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
brew install midnight-commander
</code>
<i>This will download and install MC and all its dependencies.</i>
<br><br>
</details>

<details><summary>LINUX: Ubuntu/Debian:</summary>

Open Terminal and run the following command:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
sudo apt-get update <br>
sudo apt-get install mc
</code><br>
</details><br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
If MC is not available in your distribution's official repositories, you can download the source code from the official website and compile it yourself. The instructions for doing so are provided on the website <a href="https://midnight-commander.org/     " target="_blank">https://midnight-commander.org/  ⤴</a>.
</span>
</div><br>

**1.** Open the terminal and navigate to the directory where you want to create the script. <br>

**2.** Type the following command to open a new file in `mcedit`:

```
mcedit generate_password.py
```
<i>This will create a new file called "generate_password.py" and open it in the `mcedit` text editor.</i>

![02_python-mcedit1.png]({{ images_path }}/02_python-mcedit1.png)

**3.** Type or paste Python code from the snippet below into the file.

```
#0 Import external modules to bring in their functionality into the script
import string
import random

#1 Create a function that generates randomized password
def generate_password(length):
    chars = string.ascii_letters + string.digits + string.punctuation    ## Define the base of characters
    password = ''.join(random.choice(chars) for i in range(length))      ## Generate the password
    return password


#2 Call the function to generate a password with selected length
generate_password(input("Enter a lenth of the password:"))               ## password of user-provided length
#password = generate_password(10)                                        ## password with length 10
print(password)
```

<details><summary><i><b>What the script does?</b></i></summary>

<b>#0 Import external modules</b><br>
In Python, <b>import statements are used to bring in external modules</b> or libraries into the current script, making their functionality available for use. For example, the <b>string</b> module contains a collection of useful string manipulation functions. The <b>random</b> module contains functions to generate random numbers, such as <i>random()</i>.
<br><br>
<b>#1 Create a function that generates randomized password</b><br>
By defining a function, we can execute the code encapsulated within the function body multiple times within the same script by calling the function name. If the function takes arguments, e.g., a "length" in our function, the result returned by a function will depend on the value of the input argument. <br>

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Defining functions can significantly reduce the amount of code duplication and make it easier to modify or update the code in the future.
</span>
</div><br>

First, within the function body, we define the base of characters used to generate a password. We Create a string of characters imported from the <b>string</b> module as a combination of ASCII letters, digits, and punctuation characters:
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
chars = string.ascii_letters + string.digits + string.punctuation
</code><br>
Next, we use a <b>for</b> loop to draw <i>N=length</i> times a single character from the pool of all chars. The list of selected characters is converted to a string (single word) using the <b>''.join(list)</b> function syntax.
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
password = ''.join(random.choice(chars) for i in range(length))
</code><br>
Finally, the function uses the special keyword <b>return</b> followed by a variable passed on as the expected result.
<br><br>
<b>#2 Call the function to generate a password</b><br>
In this code block, you can decide with what argument value to call the function. In particular, you can pass the value of an argument directly or as the result of another operation, or use the input() function to take a value entered interactively by the final user of the code.
</details>


<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Defining a function for a repetitive task can save you time and effort. If you have a task that needs to be done several times with only the input parameters changing, consider <b>defining a function</b> that can take those parameters as arguments. This will not only make your code more readable and maintainable, but it will also save you from writing the same code multiple times.</span> <br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
def function_name(argument1, argument2): <br>
&emsp;&emsp;&emsp; # function body <br>
&emsp;&emsp;&emsp; return "result"
</code>
</div>

<span style="color: #ff3870;font-weight: 500;">Learn more about Python built-in functions such as </span><b>join(), range(), input(), Python imports, and a function definition</b> <span style="color: #ff3870;font-weight: 500;">from tutorials provided in section <a href="https://datascience.101workbook.org/05-IntroToProgramming/00-IntroToProgramming-LandingPage" target="_blank">05. Introduction to Programming</a>:</span>
* <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a>
* <a href="https://" target="_blank"> Python syntax and simple operations  ⤴</a>
* <a href="https://" target="_blank">Python built-in functions  ⤴</a>

**4.** Once you are done editing, press the `F2` key to save changes. (*Note:* `fn` and `F2` *together on macOS*)<br>
* To exit MCedit, press `Esc`, then `0`. <br>

<p align="left"><img width="800" src="{{ images_path }}/02_python-mcedit.gif"></p>

<i>If you have unsaved changes, MCedit will pop-up the "Close file" dialog menu with options to save changes (Yes), discard changes (No), or abandon file closing (Cancel).</i>

![02_python-mcedit-close.png]({{ images_path }}/02_python-mcedit-close.png)

**5.** Once you're done editing and saving the file, you can run it in the terminal by typing:

```
python generate_password.py
```

<i>This will execute your script, prompt user to select password length, and print the generated random string of characters.</i>

<p align="left"><img width="800" src="{{ images_path }}/02_python-run-input.gif"></p>
