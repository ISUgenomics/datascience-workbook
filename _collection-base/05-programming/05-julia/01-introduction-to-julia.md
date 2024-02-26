---
title: "Introduction to Julia programming"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /05-IntroToProgramming/assets/images/05_programming_banner.png
type: "tutorial"
level: 1
categories: []
tags: []
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [05. Introduction to Programming](../00-IntroToProgramming-LandingPage.md) / **5. Introduction to Julia programming language**

---


# Introduction

Julia is a high-level, high-performance programming language for technical computing. Julia's main appeal is its ability to **run as fast as C and Fortran code** due to its LLVM-based just-in-time compilation, while remaining as **easy to write and understand as Python or MATLAB code**, making it a popular choice among researchers, engineers, and data scientists.

### Julia Resources

These resources can provide a wealth of information, tutorials, community support, and packages to help you get started and become proficient with Julia.

* Official Website: <a href="https://julialang.org/" target="_blank">https://julialang.org/</a>
* Documentation: <a href="https://docs.julialang.org/en/v1/" target="_blank">https://docs.julialang.org/en/v1/</a>
* Learning Resources: <a href="https://learnjulia.org/" target="_blank">https://learnjulia.org/</a>
* Tutorials: <a href="https://juliaacademy.com/" target="_blank">https://juliaacademy.com/</a>
* GitHub Repository: <a href="https://github.com/JuliaLang/julia" target="_blank">https://github.com/JuliaLang/julia</a>
* Packages:
  * <a href="https://juliaobserver.com/" target="_blank">Julia Observer</a>
  * <a href="https://juliahub.com/ui/Home" target="_blank">JuliaHub</a>
* Community and Forums:
  * <a href="https://discourse.julialang.org/" target="_blank">JuliaLang Discourse</a>
  * <a href="https://julialang.slack.com/" target="_blank">JuliaLang Slack</a>

## Julia features

Julia is designed for numerical and scientific computing, and provides a sophisticated compiler, distributed parallel execution, numerical accuracy, and an extensive mathematical function library. It has unique standing in the realm of programming languages, often blending the benefits of C++, Python, and R to offer a powerful tool for various computational needs.

**High Performance** <br>
Julia is designed for high performance and can achieve C++ and Fortran-like speed, which is significantly faster than traditional scripting languages like Python and R.

**Dynamic Typing** <br>
Like Python and R, Julia is dynamically typed, which makes it easier to use and faster to develop with compared to statically typed languages like C++.

**Type System** <br>
Julia has a powerful type system and supports multiple dispatch, which allows for more flexible and powerful code abstractions than typically available in C++ or Python.

**Metaprogramming** <br>
Julia supports metaprogramming like Lisp, allowing developers to write code that manipulates other code, a feature more powerful than what's available in C++ or Python.

**Parallel Computing** <br>
Julia has built-in support for parallel computing, which is more straightforward and integrated compared to parallel computing in Python, R, or C++.

**Interoperability** <br>
Julia can easily call C, Fortran, Python, and R libraries, which provides a high level of interoperability, similar to what's possible in Python but more than in C++.

**Just-In-Time Compilation (JIT)** <br>
Julia uses Just-In-Time (JIT) compilation to achieve its performance, which can cause a delay the first time a function is run, a common issue shared with some Python JIT compilers but not seen in pre-compiled languages like C++.

**(Limited) Ecosystem** <br>
While Julia has a growing ecosystem of libraries, it's not as extensive as the ecosystems of longer-established languages like Python, R, or C++.

**Ease of Learning and Use** <br>
Julia's syntax is clean and similar to that of Python and R, making it relatively easy to learn, especially for users who have prior experience with these languages.

**Numeric and Scientific Computing** <br>
Julia excels in numerical and scientific computing, with a similar scope to Python's SciPy/NumPy and R, but often with better performance.

**Community** <br>
The Julia community is active and growing, but not as large or well-established as the communities around Python, R, or C++.


## **Basic Concepts**

In this section, you can find the elementary code snippets that provide a basic understanding of various syntactical components in Julia, showcasing how to declare and use common constructs within this programming language.

### *Julia Syntax*

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
The syntax of a programming language refers to the set of rules that dictate how programs should be written in that language, encompassing the arrangement of words, symbols, and phrases.
</span>
</div>

Julia's syntax is expressive, readable, and easy to write. It's designed to be familiar to users of other technical computing languages, which aids in lowering the learning curve.

|component|syntax in Julia|definition|
|---------|---------------|----------|
|**Variables**   | are declared without a type. Type inference is employed to determine the data type based on the value assigned.|This is where you tell the program to reserve some space in memory to store a value, which you reference using a name you choose.|
|**Arrays**      | are defined using square brackets `[]`, and can be multidimensional.|Arrays are ordered collections of elements, which can be of various types (e.g., numbers, strings). They allow you to store and organize multiple values.|
|**Loops**       | `for` loops use the `in` keyword for iteration, and the `end` keyword marks the end of the loop block. |A `for` loop allows you to repeat a block of code a specified number of times, iterating over a range of values or elements in a collection.|
|**If-Else Statement**| `if`, `elseif`, and `else` keywords are used for conditional branching, and the end keyword marks the `end` of the block.|The `if-else` statement allows you to execute different blocks of code based on certain conditions being met.|
|**Dictionaries**| are created using the `Dict` keyword, with key-value pairs specified using `=>`.|Dictionaries (or maps) are collections of **key-value pairs** where each unique key maps to a value, allowing you to store and retrieve data in a key-indexed manner.|
|**Functions**   | are declared using the `function` keyword, and the `end` keyword marks the end of the function block.|Functions are reusable pieces of code that can be called with different values. They can take inputs and return outputs.|
|**Class/Struct**| Julia employs `struct` for creating user-defined types but lacks class-based OOP features.|Classes (or structs in Julia) are blueprints for creating objects, which are instances of classes. They encapsulate data and methods to operate on the data.|



<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
In Julia, the <b>end</b> keyword is commonly used to close various syntax components such as control flow blocks, functions, and structures, marking the conclusion of these code segments.
</span>
</div>



### *Variable Declaration*

In Julia, variables are declared without needing a type specification, although it's possible to specify a type. In Julia, the name of a variable is custom, meaning you can choose it based on your preference, adhering to certain naming rules like starting with a letter and avoiding reserved words. . The value is assigned to the variable using the `=` sign.

```
variable_name = value
```
*For instance, in the expression above, variable_name is the custom name you choose for the variable, and value is the data you are assigning to it.*

```
x = 10                          # Integer
y = 20.5                        # Float
z::Int = 30                     # Type-annotated declaration
```

<i>
A variable named x is being declared and assigned the integer value 10. <br>
A variable named y is being declared and assigned the floating-point value 20.5. <br>
A variable named z is being declared with a type annotation Int (integer), and is being assigned the integer value 30. The <b>::Int</b> part enforces that z must be an integer, providing a level of type safety.
</i><br><br>

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
In Julia, variable names should begin with a letter (uppercase or lowercase), underscore, or a Unicode character, and can be followed by letters, digits, underscores, or exclamation marks, but should <b>avoid using reserved words like function, for, or end</b>, as these have special meanings in the language.
</span>
</div>

### *Core Data Types*

Julia supports a variety of core data types including integers, floating-point numbers, complex numbers, strings, and characters. It also supports more complex types like arrays, tuples, dictionaries, sets, and user-defined types.

```
int_val = 10                   # integer
float_val = 20.5               # float
complex_val = 3 + 4im          # complex number
str_val = "Hello, Julia"       # string
char_val = 'J'                 # character
```

*Variables of different data types (integer, float, complex number, string, and character) are being defined. Note that in Julia, a character is a single Unicode character represented within single quotes (e.g., 'a'), while a string is a sequence of characters enclosed in double quotes (e.g., "hello"), allowing for representation of words, sentences, or any arbitrary text.*

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span><br>
In the given example of <b>complex_val</b>, <b>im</b> is used to represent the imaginary unit (often denoted as <i>i</i> or <i>j</i> in other contexts), which is the square root of -1. <b>In Julia, im is the built-in representation for the imaginary unit</b>, and it's used to define complex numbers. The expression 3 + 4im represents a complex number where 3 is the real part and 4 is the imaginary part, forming the complex number.
</span>
</div>

### *Unicode Support*

Julia has extensive Unicode support, allowing for the use of characters from many languages in identifiers, strings, and other parts of the program.

```
α = 3.14                         # Unicode variable name
println(α)                       # Output: 3.14
```

*A variable with a Unicode name α is defined and printed. This demonstrates Julia's support for Unicode characters in variable names.*


<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
Unicode support in Julia which allows for a more readable and math-friendly code by using familiar mathematical symbols. However, <b>simply writing equations using mathematical symbols won't automatically solve them.</b> <br>
You would typically use or write functions to solve equations. You can use Julia's own algebraic and numerical libraries like AlgebraicEquations.jl, Roots.jl, or NLsolve.jl to solve various types of equations. There are also libraries like SymPy.jl, which interfaces with Python's SymPy library, to symbolically solve equations.
</span>
</div>


### *String Interpolation*

In Julia, string interpolation is a handy feature that allows the **inclusion of variable values within strings** in a seamless manner. This is especially useful when you need to create strings that include dynamic values or when you want to format output in a readable way. <br>
Values of variables can be inserted into strings using `$`.

```
name = "Julia"                     # Define a variable
println("Hello, $name!")           # Use string interpolation; output: Hello, Julia!
```

*In this block of code, we utilize string interpolation to insert the value of name into a string, which is then printed to the console with the println function, resulting in the output Hello, Julia!.*

### *Dictionary*

In Julia, dictionaries are a type of **data structure that allows the storage of pairs of keys and values**, making it easy to look up a value by its corresponding key. This is particularly useful when you have a set of unique identifiers and associated values. <br>
Dictionaries are declared using `Dict` and **key-value pairs** are specified using `=>`.

```
d = Dict("a" => 1, "b" => 2)        # Create a dictionary 'd'
```

*In this block of code, we create a dictionary* `d` *using the* `Dict` *keyword. The dictionary is initialized with two key-value pairs, where the string "a" is the key for the value 1, and the string "b" is the key for the value 2. Each key-value pair is specified using the* `=>` *operator, which associates the key on the left with the value on the right.*

### *Arrays*

Arrays in Julia are mutable, ordered collections of elements that can be of any type, and they are used to store and manipulate data in a structured manner. They are used extensively for numerical computing tasks. <br>
Arrays can have any number of dimensions, making it possible to create `vectors`, `matrices`, and higher-dimensional `tensors`. Arrays are declared using square brackets `[]`. Commas are used to separate elements, and semicolons or spaces can be used to separate rows in a 2D array.

```
vec = [1, 2, 3]                     # 1D array: vector
mat = [1 2; 3 4]                    # 2D array: matrix
tensor = reshape(1:8, (2, 2, 2))    # 3D array: tensor
```

<i>Creating a vector, a matrix, and a 3D tensor (a multidimensional array) using Julia's array syntax. <br>
<b>- vec</b> is a 1-dimensional array, commonly referred to as a vector, containing three elements: 1, 2, and 3.<br>
<b>- mat</b> is a 2-dimensional array, or matrix, where elements are organized in rows and columns, with the semicolon ; indicating the start of a new row.<br>
<b>- tensor</b> is a 3-dimensional array, or tensor, created by reshaping a range of values from 1 to 8 into a 2x2x2 grid using the reshape function.
</i>

### *1-Based Indexing*

**Julia uses 1-based indexing**, similar to MATLAB and R (different from Python and C++ that are 0-based), which can be more intuitive to those coming from mathematical backgrounds as mathematical notation often starts counting from 1.

```
A = [1, 2, 3, 4, 5]
A[1]                           # Output: 1  (indexing starts at 1)
```

*An array A is created with five elements. The first element is accessed using index 1 since Julia uses 1-based indexing.*

### *Indentation*

Indentation in programming refers to the use of whitespace at the beginning of lines of code to visually structure the code, making it easier to read and understand. It is often used to **indicate blocks of code** under certain control structures, within functions, and other structured components of the syntax.

Unlike Python, **indentation is not required in Julia**. However, proper indentation is encouraged for readability.
* In Julia, indentation is not mandatory but is encouraged for readability. The `end` keyword is used to signify the end of the control structure.
* In Python, indentation and colons are crucial and required to indicate the blocks of code.

```
                Julia                 |                 Python
--------------------------------------------------------------------------------
if x > y                              | if x > y:
println("x is greater")               |     print("x is greater")
else                                  | else:
println("y is greater or equal")      |     print("y is greater or equal")
end                                   |
```

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span><br>
<i>In Julia, you can write the entire <b>if-else</b> block in a single line as follows:</i> <br>
<div style="background: #e6f0f0; padding: 5px; margin: 10px 0;">
if x > y println("x is greater") else println("y is greater or equal") end
</div>
<i>This will work correctly in Julia, although spreading the code out over multiple lines is often preferred for readability. The single-line if-else syntax in Julia is somewhat similar to that in R and Bash, though there are differences in syntax and keywords used.</i>
</div>

### *Control Flow*

Control flow statements in Julia, such as `if`, `else`, `for`, and `while`, are employed to dictate the **flow of execution in a program**, enabling the performance of different computations or actions based on conditions, or the repeated execution of a block of code. These control structures are utilized in a manner akin to their usage in many other programming languages, aiding in the **creation of well-organized and logically structured code**.

* **for loop** <br>
A `for` loop in Julia is used to **repeat a block of code for each value in a specified range or collection**. The syntax comprises the keyword `for`, a loop variable, the keyword `in`, a range or collection, followed by the block of code to be repeated, and the keyword `end` to signify the end of the loop block.
```
for i in 1:5                # the loop will iterate over the range
    println(i)                # in each iteration...
end                         # signifies the end of the loop
```
<i>In this for loop example, the loop variable i iterates over the range of values from 1 to 5, and the println(i) statement is executed in each iteration, printing the current value of i to the console.</i>

* **while loop** <br>
A `while` loop in Julia is used to **repeatedly execute a block of code as long as a specified condition is true**. The syntax comprises the keyword `while`, followed by the condition, the block of code to be repeated, and the keyword `end` to signify the end of the loop block.
```
n = 1
while n <= 5                # the loop will continue as long as 'n' is less than or equal to 5
    println(n)                # in each iteration...
    global n += 1             # increment 'n' by 1 in each iteration (to eventually meet the exit condition)
end                         # signifies the end of the loop
```
<i>In this while loop example, the loop will continue executing as long as the condition n \<= 5 is true. In each iteration, the current value of n is printed to the console, and n is then incremented by 1.</i>

* **if-else Statement** <br>
The `if-else` statement in Julia is used to **execute different blocks of code based on certain conditions**. The syntax comprises the keyword `if`, followed by the condition, the block of code to be executed if the condition is true, the keyword `else`, the block of code to be executed if the condition is false, and the keyword `end` to signify the end of the statement.
```
x = 10
y = 20
if x > y                                 # checks if 'x' is greater than 'y'
    println("x is greater")
else                                     # if the above condition is false, execute the following block
    println("y is greater or equal")
end                                      # signifies the end of the 'if-else' statement block
```
<i>In this if-else statement example, the condition x \> y is checked. If it's true, "x is greater" is printed to the console. If it's false, "y is greater or equal" is printed to the console.</i>

### *Functions*

In Julia, functions are fundamental building **blocks of reusable code**. They are declared using the `function` keyword, and their body is concluded with the `end` keyword. Arguments to the function are specified within parentheses `()`. Julia supports both: <br>
**- function overloading**, which allows multiple functions with the same name but different argument types, and <br>
**- anonymous functions**, which are functions without a name, thereby offering flexibility in how functions are defined and utilized.

* simple "print text" function:

```
# Function definition
function greet(name)
    println("Hello, $name!")
end

# Function call
greet("Julia")                      # Output: Hello, Julia!
```
<i>A function named greet is defined to print a greeting message. The function is then called with the argument "Julia".</i>

* simple "calculate" function:

```
function add(x, y)                  # declare a function named 'add'
    return x + y                    # the body of the function
end                                 # signifies the end of the function body

add(3, 4)                           # Output: 7
```

*In this example, a function named add is declared, which takes two arguments x and y. The return keyword is used to specify the value that the function should return, which in this case is the sum of x and y.*

**Anonymous Functions**

Julia supports anonymous functions (or lambda functions) which can be declared on a single line. They are defined using the -> symbol:

```
square = x -> x * x                 # define an anonymous function to square a value
square(5)                           # Output: 25
```
*In this example, an anonymous function is defined to square a value, and this function is assigned to the variable square, which can then be used like a regular function.*

**Function Overloading [Multiple Dispatch]**

Function overloading allows you to define multiple functions with the same name but with different argument types. The ability to define function behavior across many combinations of argument types (multiple dispatch) is a key feature in Julia, allowing for both flexibility and performance optimization.

* simple function overloading based on argument types:
```
foo(x::Int) = x^2
foo(x::Float64) = sqrt(x)
foo(4)                             # Output: 16
foo(4.0)                           # Output: 2.0
```
<i>The function foo is defined twice, each with a different method for different input types. Based on the type of the input, the appropriate method of foo is called.</i>

* function with multiple arguments:
```
# Function for integer arguments
function multiply(a::Int, b::Int)
    return a * b
end
#
# Function for floating-point arguments
function multiply(a::Float64, b::Float64)  
    return a * b
end
```
<i>Here, two functions named multiply are defined. One version of multiply works with integer arguments, and the other version works with floating-point arguments.</i>

**Built-in Functions**

Julia has a variety of built-in functions that facilitate numerous operations, ranging from mathematical computations to type inspections and more.

The built-in functions presented in a table below cover a variety of operations and are categorized based on the type of operation they perform. They are part of the standard library, so you don't need to install any extra packages to use them.

| Category | Function Name | Description                                                     | Example         | Output |
|----------|---------------|-----------------------------------------------------------------|-----------------|--------|
| Core     | `println()`   | Prints the argument followed by a newline                       | `println(5)`    | `5`    |
|          | `print()`     | Prints the argument without a newline                           | `print(5)`      | `5`    |
|          | `length()`    | Returns the number of elements in a collection                  | `length([1,2])` | `2`    |
| Math     | `abs()`       | Returns the absolute value of a number                          | `abs(-5)`       | `5`    |
|          | `sqrt()`      | Returns the square root of a number                             | `sqrt(9)`       | `3.0`  |
|          | `exp()`       | Computes the exponential function                               | `exp(1)`        | `2.718281828459045` |
|          | `log()`       | Computes the natural logarithm                                  | `log(10)`       | `2.302585092994046` |
|          | `sin()`       | Computes the sine of a number (in radians)                      | `sin(π/2)`      | `1.0`  |
|          | `cos()`       | Computes the cosine of a number (in radians)                    | `cos(π)`        | `-1.0` |
|          | `tan()`       | Computes the tangent of a number (in radians)                   | `tan(π/4)`      | `1.0`  |
| String   | `length()`    | Returns the number of characters in a string                    | `length("hello")` | `5`  |
|          | `uppercase()` | Converts all the characters in string to uppercase              | `uppercase("hello")` | `HELLO` |
|          | `lowercase()` | Converts all the characters in string to lowercase              | `lowercase("HELLO")` | `hello` |
|          | `split()`     | Splits a string into substrings                                 | `split("hello world")` | `["hello", "world"]` |
| Array    | `push!()`     | Adds an element to the end of an array                          | `push!([1, 2], 3)` | `[1, 2, 3]` |
|          | `pop!()`      | Removes and returns the last element of an array                | `pop!([1, 2, 3])` | `3`  |
|          | `sort()`      | Returns a sorted array                                          | `sort([3, 1, 2])` | `[1, 2, 3]` |
|          | `reverse()`   | Returns an array with the elements in reverse order             | `reverse([1, 2, 3])` | `[3, 2, 1]` |
| Dict     | `keys()`      | Returns an array of keys from a dictionary                      | `keys(Dict("a" => 1, "b" => 2))` | `["a", "b"]` |
|          | `values()`    | Returns an array of values from a dictionary                    | `values(Dict("a" => 1, "b" => 2))` | `[1, 2]` |
|          | `haskey()`    | Checks if a dictionary has a specific key                       | `haskey(Dict("a" => 1, "b" => 2), "a")` | `true` |
| Other    | `typeof()`    | Returns the data type of a value                                | `typeof(5)`     | `Int64`|
|          | `isa()`       | Checks if a value is of a specific type                         | `isa(5, Int)`   | `true` |
|          | `atexit()`    | Registers a function to be called at process exit&#8203;``【oaicite:1】``&#8203;. The example provided demonstrates how to print a message when exiting the Julia process. | `atexit(() -> println("Exiting..."))` | - |

*^ Note that the* `workspace` *function, which was commonly used to clear all variables from memory in Julia versions prior to 1.0, is not available in* ***Julia 1.0 and later versions***. *Instead, you would typically use a function like* `clear` *in a newer Julia environment.*

### *Type Declaration (Structs)*

In Julia, instead of classes as seen in many other languages, **composite types are utilized to bundle together related data**. These composite types are defined using the `struct` keyword. A struct is a collection of fields, and **each field has a name and a type**. This enables the organization of related data into a single entity, making code more organized and easier to understand.

* **Struct Declaration** <br>
Below is an example of how to declare a `struct` in Julia to represent a person, with fields for the person's name and age:
```
struct Person                       # declare a struct named 'Person'
    name::String                      # field 'name' with type annotation 'String'
    age::Int                          # field 'age' with type annotation 'Int'
end                                 # signifies the end of the struct declaration
```
<i>In this example, a struct named Person is declared with two fields: name, which is expected to be a string, and age, which is expected to be an integer. The :: operator is used to annotate the types of the fields.</i>

* **Creating Instances:** <br>
Creating an `instance` of a struct involves providing values for all of its fields in the same order as they were declared:
```
person = Person("Alice", 30)        # create an instance of 'Person' struct
```
<i>An instance of the Person struct is created with the name "Alice" and age 30, and this instance is assigned to the variable person.</i>

### *Metaprogramming*

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Metaprogramming in Julia refers to the ability to treat code as data and data as code, which facilitates the creation of complex coding constructs and the generation of code programmatically. This feature promotes code reuse, generalization, and performance optimizations. One of the primary tools used in metaprogramming is macros.
</span>
</div>

Julia supports metaprogramming, which allows the creation of complex coding constructs and the **generation of code programmatically**.

```
# Code generation
for op in (:+, :-, :*, :/)
    @eval ($op)(x, y) = Base.$op(x, y)
end

3 + 4                             # Output: 7
```

*A loop is used alongside the @eval macro to generate four functions (+, -, *, /) programmatically. A loop iterates over a tuple of operators (+, -, *, /). The @eval macro is utilized within the loop to generate four functions corresponding to these operators. This is a simplified illustration of metaprogramming in Julia, where code is generated and evaluated dynamically.*

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
The <b>@eval macro in Julia</b> is used for evaluating expressions in the global scope. It is often utilized in metaprogramming to <b>execute generated code</b>. When you have an expression that you want to evaluate, you can use the @eval macro to execute that expression and return the result.
</span>
<div style="background: #e6f0f0; padding: 5px; margin: 10px 0;">
expression = :(2 + 2)   &emsp; &emsp; &emsp; &emsp;&ensp; # Create an expression for the sum of 2 and 2 <br>
result = @eval($expression)  &emsp;&emsp; # Evaluate the expression using the @eval macro <br>
println(result)  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; # Output: 4
</div>
</div>

**Macros in Julia**

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Macros in Julia are a type of function that operates on the expression code passed to them, generating new code expressions which are then incorporated into the program. They are prefixed with the @ symbol and play a crucial role in metaprogramming. While <b>macros</b> are heavily used in metaprogramming, they are not the only tool; other features like <b>quoting</b>, <b>splicing</b>, and <b>reflection</b> also play significant roles.
</span>
</div>

Macros operate on the code itself before it's run, enabling powerful code-generation capabilities. Suppose you want to create a macro that automatically squares a given expression. You could define such a macro, `@square`, like so:

```
macro square(expr)
    return :( $expr * $expr )         # the expression to square the input
end
```

In this macro definition:
* The `macro` keyword is used to define a new macro.
* `square` is the name of the macro.
* `expr` is the argument to the macro, representing the expression to be squared.
* `:( ... )` is used to create a new expression, with `$expr` being used to interpolate the input expression into the new expression.

Now, you can use the `@square` macro to square an expression easily:

```
x = 5
result = @square(x + 1)               # this will expand to (x + 1)*(x + 1) before evaluation

println(result)                       # Output: 36
```

Here are some of the built-in macros in Julia and their use-cases:

|macro         |description|
|--------------|-----------|
|`@eval`       | Evaluates an expression in the global scope.|
|`@assert`     | Checks a condition and throws an error if it's false.|
|`@time`       | Measures the time a piece of code takes to run.|
|`@elapsed`    | Returns the time a piece of code takes to run.|
|`@allocated:` | Returns the amount of memory allocated by a piece of code.|
|`@spawn`      | Spawns a task to run a piece of code.|
|`@sync`       | Waits for all tasks in its scope to complete.|
|`@async`      | Runs a piece of code asynchronously as a task.|
|`@test:`      | Used in testing to check if an expression evaluates to true.|
|`@testset`    | Groups a set of tests together.|
|`@which`      | Indicates which method of a function is being called.|
|`@simd`       |  Indicates to the compiler to allow the use of SIMD instructions within a loop.|
|`@inbounds`   | Tells the compiler to skip bounds checking within a block of code.|
|`@views`      | Avoids copying data when indexing with arrays.|
|`@big`        | Allows for the use of arbitrary precision arithmetic.|
|`@b_str`      |Converts a binary string to a numeric value.|


### *Modules*

Julia uses modules for namespaces to **organize code into packages and projects**. This helps in structuring code in a clean and organized manner. Modules are declared using the `module` keyword, and packages can be imported using the `using` keyword.

```
module MyModule
    export myfunc
    myfunc(x) = x^2
end

using .MyModule
myfunc(5)                         # Output: 25
```

*A module named MyModule is defined with a function myfunc. The myfunc function is exported, then used after importing MyModule.*


Modules in Julia can be used across different files, not just within the same file where they are defined. When you create a module in a file, you can use the `include` function to include that file in other files, making the module available there. After including the file, you can use the `using` or `import` keyword to bring the module's exported names into scope.

Assuming your module "MyModule" was declared in a julia file `MyModule.jl`, in another file, say `main.jl`, you would do the following:

```
include("MyModule.jl")            # this includes the file and makes MyModule available
using .MyModule                   # this brings myfunc into scope

println(myfunc(5))                # Output: 25
```

### *Built-in Package Manager*

**Julia comes with a built-in package manager**, which simplifies the process of adding, removing, and managing packages. It also **supports environment management**, aiding in the creation of reproducible and well-organized project setups.

To install a package, you can use the Pkg module in the Julia interactive interpreter mode called REPL *(i.e. when you see julia> as a prompt)*.
```
julia                             # activate julia REPL in the command line
julia> using Pkg
julia> Pkg.add("DataFrames")      # installing the DataFrames package
```

*In this example, the using Pkg statement is used to load the Pkg module, followed by Pkg.add("DataFrames") to install the DataFrames package.*

Alternatively, you can activate the package manager mode by typing `]` at the Julia REPL *(the prompt will change from* `julia>` *to* `pkg>` *)*. Once in the package manager mode, you can add packages directly using the `add` command, as shown below:
```
julia                             # activate julia REPL in the command line
julia> ]                          # activate package manager mode
(v1.0) pkg> add DataFrames        # installing the DataFrames package
```
*In this mode, the add command is used directly.*

**To exit the package manager mo**de and return to the standard REPL, just press `backspace` at the beginning of the line.

### *Error Handling*

Julia provides a robust error handling mechanism, with the ability to define, catch, and handle exceptions in a manner similar to other high-level languages. The primary keywords and functions used for error handling in Julia are `throw`, `try`, `catch`, and `finally`.

* `throw` : This keyword is used to raise an exception.
* `try` / `catch` : These keywords are used together to catch and handle exceptions.
* `finally` : This keyword is used to execute code that should run irrespective of whether an exception occurred.

Here's a simple example of throwing error within a function:
```
function divide(x, y)
    y == 0 && throw(DivideError())
    return x / y
end

divide(10, 0)                    # throws DivideError
```
*A function named divide is defined to perform division, with error handling to throw a DivideError exception if an attempt is made to divide by zero.*

Here's an extended example illustrating how other keywords are used in practice:
1. A function named `safe_divide` is defined to perform division with error handling. <br>
2. A `try` block is used to attempt the division, with any exceptions that occur caught by the accompanying catch block. <br>
3. Within the `catch` block, we check if the exception is a `DivideError` (indicating division by zero) and handle it by printing an error message and returning `nothing`. <br>
4. Any other types of exceptions are re-thrown using the `rethrow()` function, allowing them to propagate up the call stack. <br>
5. A `finally` block is used to ensure that a message indicating the completion of execution is printed, regardless of whether an exception occurred.

```
function safe_divide(x, y)
    try                                          # attempt to perform division
        result = x / y
    catch ex
        if isa(ex, DivideError)                  # handle division by zero error
            println("Error: Division by zero")
            return nothing                       # indicates a failed operation in Julia
        else
            rethrow()                            # re-throw any other type of exception
        end
    finally                                      # this block executes regardless of what happened above
        println("Execution completed")
    end
end

# Example Usage:
safe_divide(10, 0)                               # Output: Error: Division by zero
                                                 #         Execution completed
```


### *Interoperability*

The Julia language is designed to easily interface with libraries from **C, Fortran, Python, R** and other languages, making it a versatile choice for diverse projects. Through packages like `PyCall`, `CxxWrap`, and `RCall`, Julia can invoke functions and access data types of these languages.

* **PYTHON**
```
# Using the PyCall package to call Python code
using PyCall
np = pyimport("numpy")
np.sin(np.pi / 4)                # Output: 0.7071067811865475
```
<i>The PyCall package is used to call a Python function (numpy.sin) from Julia. This demonstrates how Julia can interoperate with Python code.</i>

* **R**
```
# Using the RCall package to call R code
using RCall
R"""
print(sqrt(16))
"""                              # Output: [1] 4
```
<i>In this example, the RCall package is employed to execute R code from within Julia. A block of R code is defined using the R string macro, which is then executed to calculate and print the square root of 16, demonstrating interoperability with R code.</i>
```
# Using the RCall package to call R code
using RCall
#
# Importing a library from R (e.g., the base library)
@rimport base as rbase
#
# Now you can use functions from the R base library directly
rbase.sqrt(16)                  # Output: [1] 4
```
<i>In this example, the @rimport macro from the RCall package is used to import the base library from R, aliasing it as rbase. Then, functions from the R base library can be called directly from Julia.</i>


* **C++** <br>
Interfacing with C++ in Julia typically requires a more involved setup compared to interfacing with R or Python. This setup often includes wrapping the C++ code in a way that Julia can understand, possibly compiling it into a shared library, and then loading this library into Julia using packages like `CxxWrap`.
```
# Using the CxxWrap package to call C++ code
using CxxWrap
cxx""" #include <iostream>
void say_hello() {
    std::cout << "Hello from C++!" << std::endl;
}
"""
hello_cpp = CxxWrap.CxxPtr{Cvoid}(CxxWrap.@cxx_str "say_hello")
hello_cpp()                      # Output: Hello from C++!
```
<i>Here, the CxxWrap package enables calling a C++ function from Julia. A simple C++ function say_hello is defined within a cxx string block, and then called from Julia, demonstrating interoperability with C++ code.</i>



___
# Further Reading
* [5.1 Julia setup: installation, environments and Jupyter integration](/02-tutorial-setup-julia)

* [SECTION 6. High-Performance Computing (HPC)](../../06-IntroToHPC/00-IntroToHPC-LandingPage)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-IntroToProgramming-LandingPage){: .btn  .btn--primary}
[Previous](../04-R/ 04-tidyverse-R-advanced-data-analysis){: .btn  .btn--primary}
[Next](02-tutorial-setup-julia){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}