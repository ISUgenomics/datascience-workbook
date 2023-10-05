---
title: "Tools for Code Documentation"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /09-ProjectManagement/assets/images/09_project_management_banner.png
---


{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [09. Project Management](../00-ProjectManagement-LandingPage.md) / **3. Documentation Improvement Tools**

---


# Introduction

*The importance of detailed and comprehensible code documentation cannot be overstated. **This guide seeks to familiarize you with a range of tools tailored for effective code documentation.** Whether you're commenting on intricate algorithms, creating API references, or offering user guidelines, the tools covered here cater to every facet of software description. Throughout this guide, we will explore the nuances of each tool, providing practical demonstrations and insights to enhance the readability and accessibility of your code for both your peers and your future self.*

## Empowering through code documentation

A **well-documented codebase illuminates the underlying logic and design decisions**, facilitating a smoother development lifecycle. It promotes understanding, ensures maintainability, and augments the trustworthiness of the software or algorithm at hand. More than a present-day utility, proper code documentation serves as a historical record, enabling developers to efficiently trace back evolutions, identify past solutions, and inform optimizations for future iterations. This legacy aspect not only streamlines debugging and enhancements but also becomes a foundation for **boosting efficiency and sparking innovation in upcoming developments**.

## General Guidelines

<span style="color: #ff3870;font-weight: 500;">Regardless of the scale or type of code, documentation plays a crucial role.</span><br> Here's a guide to understanding when and how to document your code.

**1. Document all scales of code**

Documentation is essential for code of all scales, from simple scripts to complex systems, easing understanding its functionality, future modifications, and enhancing collaboration among developers with varying levels of familiarity with the code.

|      small scale code       |    medium scale code   |      large scale code         |
|-----------------------------|------------------------|-------------------------------|
| `scripts`, `short programs` | `modules`, `libraries` | `entire systems`, `platforms` |
| Even a simple script that's a few lines long can benefit from a brief comment explaining its purpose. This helps future readers (or even the same developer) understand the purpose of the script after a long time. | Documentation should explain the purpose of modules, the functions they provide, any classes they contain, and how they can be used. | Comprehensive documentation is required, including high-level architecture diagrams, flow charts, module explanations, API references, and more. |

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
In essence, the scale or type of code does not negate the need for documentation. Instead, it dictates the depth and style of documentation required. Always aim for clarity, relevance, and accuracy in documentation.
</span>
</div>

**2. Types of code to document**

Different types of code necessitate varying documentation approaches to clarify their purpose and usage. Depending on the complexity and scale, it's essential to explain not only functional aspects but also underlying data structures and code modifications, all of which contribute to a comprehensive understanding.

| type | comment |
|------|---------|
| **public APIs**     | These need thorough documentation since they are used by other developers. They should have explanations for every function, parameter, return type, and potential exception. |
| **algorithms**      | Any code that is not straightforward should have accompanying comments explaining the logic and reasoning. |
| **data structures** | Especially custom ones that aren’t standard in the programming language being used. |
| **workarounds**     | Temporary fixes (hacks) can be especially confusing to others if not properly commented. |
| **configuration**   | These often need comments to explain the purpose of each setting. |
| **dependencies**    | Any external systems, libraries, or tools that the code relies on should be documented. |
| **deprecated code** | If some part of the codebase is outdated or should not be used, it should be clearly documented. |

**3. Types of documentation**

Types of documentation encompass different solutions to provide varying levels of detail and guidance for code comprehension and usage. While all developments mandate in-code documentation to elucidate the purpose of specific code blocks, more complex projects further benefit from dedicated, comprehensive guides that shed light on the broader usage and applications.

| type | description |
|------|-------------|
|***in a code file:***     ||
|`inline comments`         | Directly in the code to explain complex, tricky, or important code blocks. |
|`function/method comments`| Describe what a function/method does, its parameters, return value, and exceptions. |
|`module/class comments`   | High-level overview of a module or class. |
|`error handling`          | Describe how errors or exceptions are managed. |
|***in separate files:***  ||
|`Readme files`            | Explain the software, how to install, configure, and use it. |
|`user guides`             | For end-users to understand how to use the software. |
|`developer guides`        | In-depth explanation for developers who want to contribute to or modify the software. |
|`API documentation`       | Auto-generated from code comments using tools like JavaDoc, Doxygen, or Sphinx. |

**4. Good practices**

Good practices for creating documentation prioritize clarity, relevance, regular updates, and alignment with the evolving code to ensure effective communication and long-term code maintainability.

| action | comment |
|--------|---------|
| ***general***         | |
|`stay updated`         | Documentation should evolve with the code. Outdated documentation can be more harmful than no documentation. |
|`avoid redundancy`     | If something is evident in the code, such as a getter or setter method, extensive comments might not be needed. |
|`maintain consistency` | Use a consistent style, format, and terminology throughout the documentation for easier readability and understanding. |
|`consider all readers` | Sometimes, non-developers and non-technical readers, like students or scientists outside the field, might need to understand the documentation. |
|`integrate feedback`   | Actively seek and incorporate feedback from users and developers to continuously improve the documentation's clarity and utility. |
| ***technical***       | |
|`use meaningful names` | Use meaningful variable and function names. This makes the code self-explanatory, reducing the need for comments. |
|`add table of contents`| For more extensive documentation, a well-organized table of contents helps users quickly navigate to relevant sections. |
|`add visuals`          | Diagrams, flowcharts, and other visual aids can help explain complex systems or architectures more succinctly than text alone. |
|`include examples`     | Practical code examples can help clarify complex points and show the intended usage of functions or classes. |
|`track issues`         | Noting any known bugs, limitations, or areas of improvement can help developers and users anticipate challenges. |

---

# Tools for Code Documentation

Tools for code documentation are crucial in **ensuring the readability, maintainability, and scalability of software developments**. These tools include `commenting utilities`, `API documentation generators`, `version control systems`, and `code review platforms`. By providing systematic documentation, they aid in creating comprehensive and user-friendly manuals and annotations, making complex code accessible to both the original authors and fellow developers. Additionally, **these resources serve as knowledge bases**, allowing seamless exploration and modification of the code segments, promoting consistent updates in development practices. Ultimately, having effective code documentation tools is essential for **enhancing code quality, team collaboration, and the sustainability of software projects**.

| tool type | when to use? |
|-----------|--------------|
|`in-code comments`        |Manually annotate code blocks, functions, and classes in your developments.|
|`documentation generators`|Use tools like JavaDoc, Doxygen, or Sphinx to generate documentation automatically.|
|`version control`         |Use platforms like Git and provide meaningful commit messages.|
|`code reviews`            |They can help in identifying areas of the code that are not clear and need better documentation.|

## **In-code documentation**

**In-code documentation is the practice of embedding explanations and clarifications directly within the source code.** <br>
In-code documentation serves as a roadmap for developers, detailing the structure, purpose, behavior, and nuances of the codebase. It ensures that code remains understandable, maintainable, and approachable for current and future developers. While the exact components of in-code documentation might vary depending on the language, platform, or project, the below elements give a broader perspective of what it might encompass:

| comment type | description | examples |
|--------------|-------------|----------|
|[inline comments](#inline-comments) | Brief annotations within the code that explain specific lines or sections, making the logic or purpose clearer. | headers, setup instructions or code comments |
|[block comments](#block-comments)  | Descriptions placed above or alongside blocks of code to describe functionality or important details. | docstrings or TODO lists |
|[error logs & verbosity](#error-logs-and-verbosity) | Error logs are messages printed when an error occurs during the program’s execution. They help in diagnosing and tracing the issue. | runtime progress or location of error |
|[usage message](#usage-message)   | A brief guide, usually outputted to the console, that describes how to use a program or command, including its available options and arguments. | explanations of options or parameters |

**Tools for creating in-code documentation**

All forms of in-code documentation can be crafted using the same tools as those for code development, ranging from basic text editors to sophisticated integrated development environments (IDEs).

| tool | type | supported languages | tutorial |
|------|------|---------------------|----------|
|<a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>|development environment with GUI|universal|<a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">tutorial  ⤴</a>|
|<a href="https://atom.io/" target="_blank">Atom</a>|development environment  with GUI|universal|*(obsolete)*|
|<a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a>|development environment with GUI|universal|
|<a href="https://www.eclipse.org/" target="_blank">Eclipse</a>|development environment with GUI|universal|
|<a href="https://www.jetbrains.com/pycharm/" target="_blank">PyCharm</a>|development environment with GUI|`Python`|<a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02E-python-pycharm-ide" target="_blank">tutorial  ⤴</a>|
|<a href="https://www.rstudio.com/" target="_blank">RStudio</a>|development environment with GUI|`R`|<a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/03A-rstudio-basics" target="_blank">tutorial  ⤴</a>|
|<a href="https://www.gnu.org/software/nano/" target="_blank">nano</a>, <a href="https://www.vim.org/" target="_blank">vim</a>, <a href="https://midnight-commander.org/" target="_blank">mc</a>|CLI text editor, use in terminal|universal|<a href="https://datascience.101workbook.org/02-IntroToCommandLine/02B-text-files-editors" target="_blank">tutorial  ⤴</a>|

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Remember to always exercise caution when downloading software; ensure that you're getting it from the official source or a trusted distributor.
</span>
</div>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
On a cluster (HPC), text-based editors like <b>nano</b> and <b>vim</b> often come preinstalled, whereas GUI-based tools are usually not available, though it's worthwhile to check for Open OnDemand services. On your local machine, you'll typically need to manually install these tools.
</span>
</div>


## Inline comments

Inline comments are essential tools in the developer's arsenal, serving as **in-the-moment annotations that provide context to the codebase**.

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">What are Inline Comments?</span>
<br><span style="font-style:italic;">
Inline comments are annotations placed directly within the source code. They are used to describe the purpose and behavior of specific sections of the code, providing context and clarity to developers who might be reading or maintaining the code later.
</span>
</div>

**How to add inline comment?**

In practice, an **inline comment** is text that follows a special character, typically `#` or `//`, which distinguishes the comment from procedural code, making it **non-executable and solely for human reading**.
 Inline comments can be added:
* directly above a code block to serve as a `header` providing brief description
```
# This is an inline comment in Bash
echo "Hello, World!"
```
* immediately after specific lines of code on the same line to elucidate that particular instruction/operation
```
echo "Hello, World!"  # This comment is after the command
```

**Examples of inline comments**

* **BASH**, use `#` for inline comments

```
# Display the results for all items in a loop
for item in world universe
do
    echo "Hello, $item!"                             # display the particular result
done
```

* **R**, use `#` for inline comments

```
# Define a function to sum numbers
sum_values <- function(a, b) {
    return(a + b)                                    # compute the sum of two values
}
```

* **PYTHON**, use `#` for inline comments

```
# Define a function to sum numbers
def add(a, b):
    return a + b                                     # add two numbers and returns the result
```

* **C++**, use `//` for inline comments

```
#include<iostream>                                   // include the iostream library for input/output operations

// Define a function that returns integer
int main() {
    std::cout << "Hello, World!" << std::endl;       // print greeting to the console
    return 0;
}
```
^ **NOTE:** *In C++, the* `#` *character is used to denote preprocessor directives, not inline comments.*

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
While the examples above are simplistic for illustrative purposes, it's crucial in real-world development not to over-comment by annotating every straightforward operation, as it can clutter the code and reduce readability.
</span>
</div>

**When to use inline comments?**

* Complex algorithms or logic that might not be immediately obvious.
* Workarounds or hacks, especially when the reason isn't clear from the code itself.
* Important assumptions that the code is making or distinguishing major steps.
* When introducing potential performance issues.
* Sections of code that interact with external systems or APIs.
* Temporarily disabling sections of code (often referred to as "commenting out").

**Tips for good inline comments**

* **be clear and concise** <br>
<i>Comments should be easy to understand but avoid being overly verbose.</i>

* **avoid obvious comments** <br>
<i>Don't comment on things that are clear from the code itself (e.g.,</i> `i++ # Increment i` *).*

* **update comments as code changes** <br>
<i>Outdated comments can be misleading.</i>

* **use a consistent style** <br>
<i>If you're working in a team, it helps if everyone follows a similar comment style.</i>

![02_inline_comments.png](../assets/images/02_inline_comments.png)


## Block comments

Block comments are another indispensable tool in a developer's toolkit, acting as **extended annotations that can span multiple lines** and provide more comprehensive explanations compared to inline comments.

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">What are Block Comments?</span>
<br><span style="font-style:italic;">
Block comments, unlike inline comments, are designed to <b>describe larger sections of code</b>, potentially spanning multiple lines. They offer a <b>detailed context, often used for top-level documentation</b> like function or module descriptions, or to annotate longer sections of code where a brief inline comment might be insufficient.
</span>
</div>

**How to add block comment?**

Block comments usually **begin and end with specific delimiters** that distinguish them from inline comments and the procedural code. They're typically placed:

* **at the beginning of a file or module** to describe its overall purpose *(see Bash example below)*
* **before a function or class definition** to explain its functionality *(see Python example below)*
* **anywhere within the codebase as TODOs** to highlight areas that need future attention *(see R example below)*

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
TODOs are block comments in the codebase flagged with the keyword "TODO" to mark specific sections for further development. TODOs can be strategically placed anywhere in the code to provide developers with guidance on areas requiring attention, enhancement, or the addition of new features.
</span>
</div>

**Examples of block comments**

* **BASH**, use `#` at the beginning of each line in a block comment

```
#!/bin/bash

# INFO:
# This script prints a greeting message followed by the current date.
# It supports both a default greeting and user-specified greeting.

GREETING="Hello, World!"                # default greeting message

# Check if a custom greeting is provided
if [ "$#" -ne 0 ]; then
    GREETING="$@"
fi

echo "$GREETING"
echo "Today is: $(date)"
```

* **R**, use `#` at the beginning of each line in a block comment

```
# This script performs a linear regression on a dataset
# TODO:
# - Add data cleaning steps to handle missing values
# - Include code for data visualization (histograms, scatter plots)
# - Implement cross-validation for better model evaluation

# Load the necessary libraries
library(lm)

# Sample data
data <- data.frame(
  x = c(1, 2, 3, 4, 5),
  y = c(2, 4, 5, 4, 5)
)

# Perform linear regression
model <- lm(y ~ x, data=data)
summary(model)
```

* **PYTHON**, docstrings and block comments use `'''text'''` or `"""text"""`

```
# Below you can see a docstring for a function

def add(a, b):
    """
    Adds two numbers together.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The sum of a and b.
    """
    return a + b
```

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">In Python, a <b>docstring</b> is a special string literal that occurs as <b>the first statement in a module, function, class, or method definition</b>, used for providing a concise explanation or documentation for that code segment. The tools like <b>sphinx</b> or <b>pydoc</b> <u>can process this convention to automatically generate documentation</u>. </span>
</div>


* **JAVA**, use `/** text */` syntax for (multi-line) block comments

```
/** Represents a basic calculator. */

public class Calculator {

    /**
     * Sums two integers.
     *
     * @param a the first integer
     * @param b the second integer
     * @return the sum of a and b
     */
    public int add(int a, int b) {
        return a + b;
    }
}
```

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
In Java, <b>JavaDoc</b> is a tool and documentation standard used to generate API documentation in HTML format from Java source code. The source code is annotated with special JavaDoc comments, which are distinct from regular comments. These JavaDoc comments start with <code>/**</code> and end with <code>*/</code>.
</span>
</div>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
In Java, single-line comments are preceded by <code>//</code> and are not processed by <b>javadoc tool</b>. Only comments starting with <code>/**</code> and ending with <code>*/</code> are recognized and processed by <i>javadoc</i> as JavaDoc comments. Even when the syntax <code>/** text */</code> is on a single line, it is still a valid JavaDoc comment.
</span>
</div>

* **C++**, use `/* text */` syntax for (multi-line) block comments

```
/*
This function computes the product of two numbers.
Takes in two integers and returns their multiplication.
*/
int multiply(int a, int b) {
    return a * b;
}
```

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Just like with inline comments, avoid the temptation to overuse block comments. While they're useful for providing context, excessive or redundant comments can make code harder to read.
</span>
</div>

**When to use block comments?**

* Providing documentation at the beginning of a file or module.
* Describing the purpose and usage of functions, methods, classes, or modules (often in the form of docstrings).
* Explaining complex algorithms or logic spanning multiple lines.
* Notating developer's TODOs or areas needing further attention.

**Tips for good block comments**

* **follow conventions** <br>
<i> If a language or framework has a standard for block comments (e.g., JavaDoc or Python's docstrings), use it to ensure consistency and potential tool integration.</i>

* **be thorough but concise** <br>
<i>Block comments allow for more detail, but avoid excessive verbosity.</i>

* **group related comments** <br>
<i> If commenting on a sequence of code lines, keep them together in a single block comment rather than multiple inline comments.</i>

* **stay updated** <br>
<i>Ensure that block comments reflect code changes to prevent confusion.</i>


## Error logs and verbosity

By incorporating relevant information to log messages, developers create a vital component of code documentation, aiding in the identification, diagnosis, and resolution of issues. Logging tools manages messages during a program's runtime, allowing users to adjust verbosity levels to meet specific needs.

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">What are Error Logs?</span>
<br><span style="font-style:italic;">
Error logs are records generated by a program that capture error events or notable runtime incidents. These logs offer invaluable insights into problematic code blocks, making debugging and performance optimization more efficient.
</span><br><br>
<span style="font-weight:800;">What is verbosity?</span>
<br><span style="font-style:italic;">
Verbosity refers to the level of detail included in messages or logs, especially error logs, with higher verbosity levels providing more detailed and informative content about the system's status, processes or issues.
</span>
</div>

**How are error logs generated?**

Log messages, strategically placed by developers at critical points in the code, communicate various events — be it issues, progress, or the completion of specific steps during runtime. The depth and detail of these messages are governed by `verbosity levels` set by developers, categorizing the significance and granularity of each event. When a user selects a verbosity level during program execution and the code reaches a relevant logging point, the appropriate `log message` is displayed, offering insights into the ongoing process or potential issues.

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
As a developer, it's your responsibility to determine where and what log messages should be added to the codebase. Remember, the system can only report what you instruct it to. <b>If you don't insert log messages to the code, no messages will be printed when an error occurs.</b> Proactive logging will aid in better runtime insights and troubleshooting.
</span>
</div>


<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Error logs can contain sensitive information. Always ensure that logs do not expose confidential data or security-critical information, especially when deployed in production environments.
</span>
</div>

**How to create a logging message?**

Logging options range from utilizing dedicated logging tools, which offer advanced features like filtering and managing log verbosity, to simpler methods like printing messages directly to the console. While **employing specialized logging tools is highly recommended**, utilizing basic `print` statements (or `echo` in Bash scripting) can still be beneficial for getting insights about the issue.


**Examples of error logging** <br>
Several programming languages provide built-in mechanisms or libraries to manage verbosity and capture detailed logs.

* **BASH**, use `1>&2` for redirecting stdout to stderr

In Bash, logging options primarily revolve around redirecting standard output (`stdout`) and standard error (`stderr`) to various destinations.

```
# Redirecting stdout to a file:
command > file.txt

# Redirecting stderr to a file:
command 2> error.txt

# Redirecting both stdout and stderr to a file:
command &> file.txt

# Redirect standard output to standard error:
echo "This is an error" 1>&2  
```
*The last example, instead of displaying the message on the standard output (like it would by default with echo), it sends the message to the standard error stream.*

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
For system-wide logging, Bash scripts can log messages to <b>syslog</b> using the <code>logger</code> command, making the logs accessible through tools like <b>journalctl</b> or tail on the /var/log/syslog file. <br>
<code>
# To log a message with a specific priority (for example, error) and under a specific tag: <br>
logger t MYSCRIPT -p user.err "This is an error message from my script" <br>
# To filter and view messages from a custom tag "MYSCRIPT": <br>
journalctl -t MYSCRIPT <br>
# To view the latest log messages and possibly spot yours: <br>
tail -n 50 /var/log/syslog
</code>
</span><br><br>
<div style="background: mistyrose; padding: 15px; margin-bottom: 0px;">
<span style="font-weight:800;">WARNING:</span>
Keep in mind, the exact path to the syslog file might vary depending on your system. On some systems, it might be /var/log/messages or similar. Also, ensure you have the necessary permissions to access these log files; you might need to prepend sudo to some commands. <b>It typically won't be possible on HPC infrastructure.</b><br><span style="font-style:italic;">
</span>
</div>
</div>


* **R**, use the `futile.logger` module

R language *(commonly used for statistical computing and graphics)* provides several logging options to keep track of events, messages, warnings, and errors.

1. Built-in messaging functions:
  * `message()` : For general-purpose logging, such as informational messages.
  * `warning()` : To generate warning messages.
  * `stop()`    : To generate an error message and terminate the execution.
  * `cat()`     : To write out results, generally used for simpler logging and console outputs.
2. Logging packages:
  * `futile.logger` : This package provides a flexible logging framework,. It allows setting logging levels (DEBUG, INFO, WARN, etc.) and directing output to different locations.
  * `log4r` : nother logging package for R.

```
# Example using futile.logger:

library(futile.logger)
flog.threshold(DEBUG)
flog.debug("This is a debug message")
flog.info("This is an info message")
```

* **PYTHON**, use the `logging` module

Python provides a variety of logging options to assist developers in generating and managing messages related to the execution and potential issues of their applications. In particular, Python includes a powerful built-in `logging` module which offers a flexible framework to produce and manage log messages. The module allows for different logging levels: `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. Logs can be directed to various outputs and formatted in different ways. It also supports more advanced features like logging to multiple destinations, custom log record formats, and filtering logs.

```
# Example using the logging module:

import logging

logging.basicConfig(level=logging.DEBUG)
logging.debug("This is a debug message")
logging.info("This is an info message")

# Logging to files:
logging.basicConfig(filename='app.log', level=logging.DEBUG)
logging.error("This error will be written to 'app.log'")
```

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
<b>For simpler scripts or applications, developers sometimes just use print() statements to log messages to the console.</b> Using the <code>logging</code> module or any dedicated logging library in Python is advantageous over simple print() statements because it provides granularity (via log levels), flexibility in log destinations (console, file, remote server, etc.), and precise control.
</span>
</div>

* **C++**, use `cerr` functionality

In C++, logging doesn't have a standardized built-in solution. However, various tools and libraries have been developed over the years to fulfill the logging requirements. The simplest solution is to use Standard Output and Error Streams:

```
#include <iostream>

std::cout << "Info: This is a log message." << std::endl;
std::cerr << "Error: This is an error message." << std::endl;
```

You can also redirect logs to a file:
```
#include <fstream>

std::ofstream log_file("logfile.txt");
log_file << "This is a log message written to a file." << std::endl;
log_file.close();
```

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
It's important to choose a logging approach based on the requirements of the project. While using standard streams might be adequate for simple applications, for larger projects or applications with specific logging needs, dedicated libraries like <b>spdlog</b> or <b>Boost.Log</b> would be more appropriate.
</span>
</div>


**When to use logging tools?**

* To capture regular progress, status updates, or the completion of specific tasks in a program.
* To detect warnings or potential issues which don't halt program execution but may affect results.
* To trace the sequence of events leading up to a failure.
* When interacting with external systems, and a failure response is received.
* When an unexpected situation arises, which the system cannot handle.

**Tips for effective error handling & program verbosity**

* **be precise** <br>
<i>Ensure that error messages provide specific details about the problem.</i>

* **ensure clarity** <br>
<i>Make certain that logs are clear and comprehensible, even for someone unfamiliar with the codebase.</i>

* **manage verbosity** <br>
<i>Use built-in tools or external libraries to filter and manage the level of detail in logs.</i>

* **update logs as code evolves** <br>
<i>Ensure that log messages remain relevant and are updated alongside code changes.</i>

* **use a consistent style** <br>
<i>Like comments, maintain a uniform logging style, especially when working in teams.</i>


## Usage message

Usage messages or `help messages` are important elements in the <u>developer and user toolkit</u>, acting as real-time guidance that <b>outline how to use a specific tool, command, or software effectively</b>. They are vital part in code documentation, especially for command-line interfaces or APIs.


<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">What is a usage message?</span>
<br><span style="font-style:italic;">
Usage messages, also known as help messages, are concise, structured text descriptions displayed to the user, typically upon invoking a command with specific flags like <b>-h</b> or <b>--help</b>. They <b>describe how to use a program</b>, what arguments it accepts, and provide a brief explanation of each option.
</span>
</div>

Depending on the situation or tool, one's role can shift between being a user *(seeking guidance on software features)*, developer *(responsible for creating it)*, or both *(enhancing it based on personal experiences)* when interacting with a usage (help) message. This dual perspective can be advantageous, as understanding the user experience can lead to the creation of more intuitive and effective help messages.

**When to display a usage message?** *(being a software user)*

* Display a usage message when first encountering a new software or tool to understand its basic functions.
* Pull up the usage message when uncertain about specific commands, syntax or options to preview usage examples.
* Seek the usage message when confronting unexpected software behavior to verify command correctness.
* Refer to the help message when wishing to delve into advanced features or lesser-known options.

**How to display help message?** *(being a software user)*

Usually, usage messages are displayed:

* when the user specifically requests help using flags like `-h` or `--help`

```
$ myprogram --help

Usage: myprogram [OPTION]... [FILE]...
Description: Briefly explains what the program does.

Options:
  -h, --help          Display this help message and exit.
  -v, --version       Display the program's version.
  -f, --file <file>   Specify a file to operate on.
  -o, --output <dir>  Specify the output directory.
```
* when the user provides invalid input or arguments

```
$ myprogram --help

myprogram: unrecognized option `--man'

usage: myprogram [-f file] [-o file]
```

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Most bash commands, standalone tools, and applications from GitHub repos typically offer a standardized approach, and you can view their usage syntax and options using '--help', provided the developer has set up a usage message.
</span>
</div>

**Examples of usage message** *(being a software user)*

In Bash, you can use `command --help` for a brief usage overview, while `man command` offers more comprehensive information and details about each command. Try these commands for commonly used Bash commands such as `ls` `grep` `awk` `wget` `tar` `ssh` `git` to see examples of well-crafted usage message.
```
grep --help

man  grep
```

Many standalone CLI tools and applications cloned from GitHub repositories often support the `--help` option *(\*if developers have included it)* to provide usage syntax and options, so it's beneficial to use it as a starting point for understanding the tool's functionality.

*Examples of useful standalone tools and GitHub-hosted applications for researchers:*

|CLI_tool_|description|tool_type_ |usage_message_|
|---------|-----------|-----------|--------------|
|<a href="https://www.python.org/downloads/" target="_blank">Python</a>|Python language is an essential tool for data science. Python can be run as an interpreter or invoked from the command line to execute scripts.|programming language|`python --help`|
|<a href="https://cran.r-project.org/" target="_blank">R</a>|R language is an essential tool for statistics. You can run R scripts directly from the CLI.|programming language|`Rscript --help`|
|<a href="https://www.sqlite.org/download.html" target="_blank">SQLite</a>|A C-language library that implements an SQL database engine.|precompiled binary|`sqlite3 --help`|
|<a href="https://blast.ncbi.nlm.nih.gov/Blast.cgi" target="_blank">BLAST</a>|BLAST is a standalone software suite *(written in C and C++)* including several binary tools used for comparing an input sequence against a reference database of sequences.|precompiled binary|`blastn --help` <br>`blastp --help`|
|<a href="https://gatk.broadinstitute.org/hc/en-us/" target="_blank">GATK</a> |Genome Analysis Toolkit is used for variant discovery in high-throughput sequencing data.|Java archive (JAR file)|`gatk --help`|
|<a href="https://github.com/csf-ngs/fastqc/tree/master" target="_blank">FastQC</a>|FastQC is a tool for assessing the quality of raw sequence data from high-throughput sequencing experiments. `[GitHub]`|Java archive (JAR file)|`fastqc --help`|
|<a href="https://github.com/zsiki/Find-GCP" target="_blank">Find-GCP</a>|The small python utility dedicated to geospatial analysis. It automatically finds ArUco markers (ground control points) in digital photos. `[GitHub]` |python script|`python gcp_find.py --help`|

*As you cane see in this table, regardless of the programming language, implementation, or distribution type, many tools are designed to provide a standardized usage message with* `--help` *option for user guidance.*


**When to include a usage message in your code?** *(being a software developer)*

* For every command-line tool or script, a usage message is essential to guide users on the arguments and options.
* For functions or APIs that have multiple configurable parameters.
* When the intended usage of the software isn't immediately evident from the context.

**When to trigger printing a usage message?** *(being a software developer)*

* When the user explicitly requests it using flags like `-h` or `--help`.
* When the user provides invalid input, unrecognized option or incorrect number of arguments.
* When the application starts up for the first time, to guide a new user on the usage syntax.
* If the software requires some configuration before it can run correctly (e.g., API keys, configuration files).
* If there's a major change or update to the software, you might consider displaying a "what's new" guide.


<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
A well-crafted usage message is invaluable to users of your software, providing them with concise information about how to interact with the program and its available options. <br><br>
Many CLI libraries/frameworks (e.g., <b>argparse</b> in Python) <b>automatically generate usage messages</b> based on the defined options/commands. Leverage these to maintain consistency and accuracy.
</span>
</div>


**Examples of crafting a usage message** *(being a software developer)*

Different programming languages and platforms have varying libraries or mechanisms to handle and display usage messages. Create a concise, informative, and clear usage message that outlines the program’s purpose, input parameters, options, and examples, ensuring future you can quickly understand and utilize its functionality without revisiting the code or documentation.

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Ensure that your usage message stays updated with the software's functionalities. An outdated or incorrect usage message can confuse or mislead users.
</span>
</div>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Overloading the usage message with too much information or presenting it in a non-structured manner can overwhelm users. Ensure the message is succinct and comprehensible.
</span>
</div>

* **BASH**

Even in simple Bash scripts, incorporating a usage message can be invaluable, aiding memory when revisiting the script in the future. In Bash, crafting the usage message involves creating a string of "echoed" text that clearly informs the user how to use the script. This message can be displayed conditionally when the user requests help (e.g., using a `-h` or `--help` flag as the first argument). You can also add different conditions for missing inputs or an incorrect command syntax.

```
if [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    echo "Usage: myscript [OPTIONS]..."
    echo "A script to demonstrate something."
    echo ""
    echo "Options:"
    echo "-h, --help    Show this help message"
    echo "-v, --verbose Enable verbose mode"
    exit 0
fi

# rest of the script...
```
Assuming your code was saved in `my_script.sh` script file, you can test a new *help message* feature like this:
```
. ./my_script.sh --help
```

* **R**

In an R script, a usage message can be crafted using the cat() function to display a descriptive message that informs the user about the correct way to utilize the script.

```
if(length(commandArgs(trailingOnly = TRUE)) < 1) {
    cat("Usage: Rscript myscript.R <input_file>\n")
    quit(save="no", status=1)
}
input_file <- commandArgs(trailingOnly = TRUE)[1]

# rest of the script...
```
*In this example, the script expects at least one argument, for example an argument for input_file. If it's not provided, the usage message will be displayed and the script will exit.*

* **PYTHON**

In a simple Python script *(with not many options)*, a usage message can be crafted using the `print()` function and the `sys` module to display a message that informs the user about the correct way to use the script.

```
import sys

if len(sys.argv) < 2:
    print("Usage: python myscript.py <input_file>")
    sys.exit(1)

input_file = sys.argv[1]

# rest of the script...
```
*In this example, the script expects at least one argument, in this case an argument for input_file. If it's not provided, the usage message will be displayed and the script will exit.*

In Python, the `argparse` module provides a convenient way to define and handle command-line arguments, and it automatically generates a usage message based on the defined arguments.

Here's a practical example to craft a usage message for a script that takes multiple arguments:

```
import argparse

# Initialize the parser
parser = argparse.ArgumentParser(description="A tool to demonstrate something.")

# Define arguments
parser.add_argument('-i', '--input', required=True, help='Input file path')
parser.add_argument('-o', '--output', required=True, help='Output file path')

# Parse the arguments
args = parser.parse_args()

# rest of the script...
```

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
In the <b>parser.add_argument()</b> method, apart from required and help, you can set several other parameters, including but not limited to:

<li><b>type:</b> Specifies the type of the argument, like int, float, or any callable function.</li>
<li><b>default:</b> Specifies a default value if the argument is not provided.</li>
<li><b>choices:</b> A container of the allowable values for the argument.</li>
<li><b>action:</b> The basic type of action to be taken when the argument is encountered, e.g., 'store', 'append', 'store_true', etc.</li>
<li><b>nargs:</b> Specifies the number of command-line arguments that should be consumed, e.g., '?', '*', +, or an integer.</li>
<li><b>const:</b> A constant value required by some action and nargs selections.</li>
<li><b>metavar:</b> A name for the argument in usage messages.</li>
</span>
</div>

Assuming your code was saved in `my_script.py` script file, when you run:
```
python script.py --help
```
the `argparse` module will automatically generate a usage message for your script. The message will be based on the arguments and descriptions you've added to your parser. <br>
*For the provided code, the usage message would look something like:*
```
usage: script.py [-h] -i INPUT -o OUTPUT

Process some files.

optional arguments:
  -h, --help            show this help message and exit
  -i INPUT, --input INPUT
                        Input file path
  -o OUTPUT, --output OUTPUT
                        Output file path
```
**NOTE:** *The* `-h` *or* `--help` *option is added by default by* `argparse`, *and it displays the help message for the script.*



* **C++**

Here's how you can craft and display a usage message: <br>
**- Identify the Tool's Requirements:** Clearly understand what arguments your tool requires. *For instance, let's say your program requires two arguments: a filename and an operation (either "read" or "write").* <br>
**- Craft the Usage Message:** Based on the requirements, create a concise yet descriptive usage message. <br>
**- Check the Input Arguments:** When your program starts *(see the main(){} function)*, check the passed arguments to see if they fit the requirements. If not, display the usage message and exit.

```
#include <iostream>
#include <cstring>

void displayUsage(const char* programName) {
    std::cerr << "Usage: " << programName << " <filename> <operation>\n";
    std::cerr << "  <filename>: The name of the file to be processed.\n";
    std::cerr << "  <operation>: Either 'read' or 'write'.\n";
}

int main(int argc, char* argv[]) {
    if (argc != 3) {
        displayUsage(argv[0]);
        return 1;
    }

    // rest of your code...

    return 0;
}
```
*In this example, if the number of arguments is not 3, then the condition if (argc != 3) will be true and the usage message is displayed. The* `argv[0]` *value (the first argument) is the program name, in this case, "my_program". The* `displayUsage()` *function provides the general format of the command as well as detailed explanations for each argument.*

Assuming the program is compiled and named `my_program`, you can run in by calling its name followed by the arguments. Here's what the output will look like when run without arguments:

```
Usage: my_program <filename> <operation>
  <filename>: The name of the file to be processed.
  <operation>: Either 'read' or 'write'.
```


**Tips for creating effective help messages**

* **be clear but comprehensive** <br>
<i>Detail all necessary options and parameters without overloading the user.</i>

* **organize systematically** <br>
<i>If there are many options, group them logically to improve readability.</i>

* **use consistent terminology** <br>
<i>If you refer to them as "options" in one place, avoid switching to "flags" elsewhere.</i>

* **provide defaults, differentiate optional and mandatory params** <br>
<i>If some options have default values, clearly mention them. <br>Commonly, square brackets ([]) indicate optional elements, and angle brackets (<>) denote required elements.</i>

* **give examples** <br>
<i>A practical example can clarify a tool's functionality faster than a descriptive paragraph.</i>

* **update as necessary** <br>
<i>Whenever the software's functionality changes, update the usage message accordingly.</i>

* **consistency is key** <br>
<i>If you're creating multiple tools or utilities, maintain a consistent structure and style across all usage messages.</i>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Remember, the key of usage message is to make it as easy as possible for a user, whether they're a newbie or an expert, to understand and use your software effectively.
When crafting a usage message for your program, design it as if you're leaving instructions for your future self, detailing both its purpose and usage instructions.
</span>
</div>


## **Documentation for pipelines**

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span><br>
Pipelines and workflows refer to a <b>series of automated processes</b> that allow code to move from development to production. This can encompass various stages, such as code compilation, testing, deployment, execution, and monitoring. <br>
<li><b>Pipelines</b> are typically sequences of tasks, often represented as code, that transform and process data. Pipelines are common in data processing. </li>
<li><b>Workflows</b> usually refer to higher-level orchestrations of tasks, which might include decision-making processes, loops, and conditional operations. Workflows are prevalent in workflow management systems and platforms that coordinate execution of various software.</li>
</div>

Pipelines and workflows represent automated sequences of tasks in software and data processing. They require detailed documentation to ensure clarity in their operations, dependencies, and error handling, ensuring smooth execution and maintenance. The documentation of computational pipelines is a critical aspect of modern data-intensive sciences and software development.

**TOOLS:**
* **Interactive notebooks**, such as <a href="https://jupyter.org/" target="_blank">Jupyter</a> and <a href="https://observablehq.com/" target="_blank">Observable</a>, offer a dynamic environment for step-by-step documentation, merging code execution with data visualizations, and narrative text to tell a comprehensive story of the data analysis process.
* In parallel, **workflow managers & monitors** such as <a href="https://tower.nf/" target="_blank">Nextflow Tower</a> provide robust, scalable, and reproducible computational framework for organizing and documenting complex bioinformatics and data analysis processes, ensuring consistency and scalability across platforms.


| tool | description | license | supported languages |
|------|-------------|---------|---------------------|
| <a href="https://jupyter.org/" target="_blank">Jupyter Notebook</a> | Supports over 40 languages, with `interactive computing` and rich media integrations; popular in data science and research. | Open Source | Python, R, Julia, and 40+ others |
| <a href="https://tower.nf/" target="_blank">Nextflow Tower</a> | Monitors and manages `workflow pipelines`; a choice tool for bioinformatics and genomics. | Open Source (enterprise edition available) | N/A |
| <a href="https://rmarkdown.rstudio.com/" target="_blank">R Markdown</a>  (RStudio) | Allows dynamic document creation with R, integrating prose, code, and output; `popular among statisticians`. | Open Source | R |
| <a href="https://www.bioconductor.org/" target="_blank">Bioconductor</a> | Tools for analysis and comprehension of high-throughput genomic data; often paired with R Markdown in bioinformatics. | Open Source | R |
| <a href="https://zeppelin.apache.org/" target="_blank">Apache Zeppelin</a> | Designed for data engineering, supports multiple backends like Spark, and offers built-in visualizations.       | Open Source | Apache Spark, Python, SQL, and others |
| <a href="https://observablehq.com/" target="_blank">Observable</a> | Focused on interactive visualizations with D3.js and other JS libraries; allows real-time collaboration. | Partially Free (with paid features) | JavaScript |


## Interactive Notebooks

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Interactive notebooks are <b>web-based platforms that allow for the combination of live code, visualizations, and narrative text in a single document</b>. They facilitate an exploratory approach to data analysis and are particularly popular in data science and machine learning fields. For code documentation, they offer an intuitive way to <b>document and demonstrate code functionality in real-time</b>, enhancing clarity and comprehensibility.
</span>
</div>

**Interactive notebooks excel in documenting computational pipelines**, where multiple steps and varied tools come into play, providing a cohesive and **step-by-step demonstration of the entire process**. Their format allows for real-time execution, visualization, and annotation, making them ideal for capturing complex workflows in detail.  These platforms **enhance the understandability and reproducibility of computational work**, bridging the gap between code development and data storytelling. Interactive Notebooks deliver specialized collaborative environments that adapt to diverse programming and analytical needs.

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
For large-scale software documentation, where comprehensive architectural details, API references, and broader system interactions are crucial, traditional documentation tools might be more suitable.
</span>
</div>

<span style="color: #ff3870;font-weight: 500;">
For a comprehensive understanding and hands-on experience with <b>interactive notebooks</b>, I highly encourage you to delve into the tutorials presented in section <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/00-DevelopmentEnvironment-LandingPage" target="_blank">04. Development Environment</a> / <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01B-jupyter-basics" target="_blank">Jupyter: Interactive Web-Based Multi-Kernel DE</a>, specifically tailored for the <a href="https://jupyter.org/" target="_blank">Jupyter</a> interface.
</span>

## Nextflow workflows

Combining tools or steps into a workflow, especially using platforms like <a href="https://www.nextflow.io" target="_blank">Nextflow</a>, is a form of **documentation for the computing process**. In essence, while traditional documentation (like `README` files, user manuals, or online guides) is critical for understanding and using a software or pipeline, the structured, explicit nature of workflow scripts, especially in platforms like Nextflow, provides a form of `executable documentation`. This not only describes the computing process but also enables and ensures its reproducibility across different scenarios and platforms.

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Nextflow is a workflow management system designed for <b>scalable and reproducible scientific workflows</b> using software containers. It simplifies the process of writing, deploying, and sharing complex data analysis pipelines across different computing environments.
</span>
</div>

<a href="https://www.nextflow.io" target="_blank">Nextflow</a> is a workflow management system for writing and running scalable and reproducible scientific workflows. <a href="https://tower.nf/" target="_blank">Nextflow Tower</a> is an associated web-based application that provides a user interface for monitoring, managing, and scaling Nextflow workflows, offering enhanced visualization, logging, and collaboration capabilities for Nextflow runs.

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
<b>Nextflow is NOT restricted to any particular discipline.</b> It is a versatile workflow management system that can be used to script, organize, and execute workflows for a wide range of applications across various fields. While it has gained significant popularity in bioinformatics and genomics (due to the complex, multi-step computational analyses often required in these fields) it is fundamentally designed to be domain-agnostic.
</span>
</div>


## Documentation Generators

Inline code documentation tools assist developers in adding explanatory comments directly within the source code, enhancing readability and maintainability. These tools **automatically generate well-structured and navigable documentation from the comments**, making it easier for team members to understand the code's functionality and purpose. By embedding the documentation within the codebase, these tools ensure that explanations remain closely tied to the relevant code segments, promoting clarity and ease of reference.

## Version Control Platforms with Documentation

Version control platforms with documentation offer tools to **track, manage, and collaborate on code changes** while simultaneously providing features for detailed documentation. They enable users to maintain a history of code modifications, branch and merge projects, and integrate wikis or readme files to guide collaborators.



___
# Further Reading
* [4. Collaboration & Communication](../03-COMMUNICATION/00-collaboration-communication)
* [5. Resource Management & Productivity](../04-PRODUCTIVITY/00-resources-productivity)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-ProjectManagement-LandingPage){: .btn  .btn--primary}
[Previous](03-project_documentation){: .btn  .btn--primary}
[Next](../03-COMMUNICATION/00-collaboration-communication){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
