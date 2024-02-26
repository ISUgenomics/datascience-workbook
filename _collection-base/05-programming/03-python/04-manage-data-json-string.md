---
title: "JSON module - encoding & decoding JSON data"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [05. Introduction to Programming](../00-IntroToProgramming-LandingPage.md) / [3. Introduction to Python Programming](01-introduction-to-python.md) / **3.3 JSON Module - Encoding & Decoding JSON Data**

---

<span style="color: #ff3870;font-weight: 500;">Before starting this tutorial, there are a few requirements that you should have in place.</span>
* Firstly, you should be familiar with using the **command line in terminal** on your computer. <br>
<i>Learn more from the practical turtorials in section <a href="https://datascience.101workbook.org/02-IntroToCommandLine/00-IntroToCommandLine-LandingPage" target="_blank">02. Introduction to the Command Line  ⤴</a></i>
* Secondly, you should **have Python installed** on your local machine.  <br>
<i>Learn more from the practical turtorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine  ⤴</a></i>
* Thirdly, you should have a Python Integrated **Development Environment** (IDE) set up on your computer, e.g., PyCharm or JupyterLab or any text editor.  <br>
<i>Learn more from the practical turtorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02-python-programming-environment" target="_blank">Python Programming Environment(s)  ⤴</a></i>
* Finally, you should have a **basic understanding of Python** programming.  <br>
<i>Learn more from the practical turtorial <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/01-introduction-to-python" target="_blank">Introduction to Python Programming  ⤴</a></i>

# Introduction

JSON (JavaScript Object Notation) format is a **lightweight data storage format** based on a subset of the JavaScript programming language, but is **language independent** and can be used with any programming language.

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for web APIs, configuration files, and other data exchange purposes.
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;">The official documentation for the JSON module in Python can be found at <a href="https://docs.python.org/3/library/json.html" target="_blank">https://docs.python.org/3/library/json.html  ⤴</a></span>

## JSON format

JSON format is built on two data structures: objects and arrays. <br>
**An object is an unordered collection of key:value pairs**, where:
* the **keys** (also called names) are `strings` and
* the **values** can be any valid JSON data type (`strings`, `numbers`, `booleans`, `objects`, or `arrays`).

**An array is an ordered list of values**, where each value can be any valid JSON data type.

In JSON, there are two main types of brackets used: <br>
**A.** square brackets `[]` to define arrays <br>
**B.** curly braces `{}` to define objects <br>
These two types of brackets are the building blocks of JSON data structures.

### *A. Square brackets [ ]*

Square brackets are used to **define an array in JSON**. An array is an **ordered list** of values, where each value can be any valid JSON data type (*strings, numbers, booleans, objects, or arrays*). The **values in an array are separated by commas** and enclosed in square brackets.

Here's an example of a JSON array:
```
[
  "New York",
  "London",
  "Warsaw"
]
```
*In this example, the array contains three values: "apple", "banana", and "cherry". The values are separated by commas and enclosed in square brackets.*

### *B. Curly braces { }*

Curly braces are used to **define an object in JSON**. An object is an **unordered collection** of key-value pairs, where the keys are *strings* and the values can be any valid JSON data type (*strings, numbers, booleans, objects, or arrays*). The **key:value pairs in an object are separated by commas** and enclosed in curly braces.

Here's an example of a JSON object:
```
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
*In this example, the object has three key:value pairs: "name": "John", "age": 30, and "city": "New York". The keys are strings, and the values are a string, a number, and another string, respectively. The name/value pairs are separated by commas and enclosed in curly braces.*

### *C. Flexibility to use both*

In practice, JSON data structures can be more complex and often contain both types of brackets, **[ ]** and **{ }**, in order to represent more sophisticated data structures. The **flexibility of JSON format** allows for the creation of customized data structures that can represent complex and nested data in a human-readable and machine-parseable format.

For example, a JSON object may contain an array as one of its values:
```
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "traveling", "photography"]
}
```
*In this example, the object has four key:value pairs, where "hobbies" is an array of strings, which are enclosed in square brackets.*

Here's an example of a JSON array that contains objects as its elements:
```
[
  {
    "name": "John",
    "age": 30,
    "city": "New York"
  },
  {
    "name": "Jane",
    "age": 25,
    "city": "Los Angeles"
  },
  {
    "name": "Bob",
    "age": 40,
    "city": "Chicago"
  }
]
```
*In this example, the array has three elements, where each element is a JSON object that contains three key:value pairs. The objects are enclosed in curly braces {}, which are enclosed in square brackets [].*


Here's an example of a JSON object that contains array of objects for its "pets" property:
```
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "pets": [
    {
      "name": "Fido",
      "species": "dog"
    },
    {
      "name": "Fluffy",
      "species": "cat"
    }
  ]
}
```
*This JSON data represents an object with four properties: name, age, city, and pets. The name, age, and city properties are simple values (a* `string`, *a* `number`, *and a* `string`, *respectively), while the pets property is an* `array` *of objects, each representing a pet with a name and a species.*

## *Pros & Cons of JSON*

| PROS | CONS |
|------|------|
|Lightweight and easy to read and write for both humans and machines|Does not support comments, which can make it difficult to annotate or document complex JSON files|
|Supports a wide range of data types, including numbers, strings, booleans, arrays, and objects|Limited support for metadata, such as data types and units, which can make it difficult to ensure data integrity and consistency|
|Can represent complex and nested data structures using a combination of objects and arrays|Can be vulnerable to security issues, such as cross-site scripting (XSS) attacks, if not properly sanitized and validated|
|Widely supported across different programming languages and platforms|May not be suitable for very large datasets or applications that require real-time data processing, due to its text-based format and potential for high network traffic.|
|Can be easily converted to and from other data formats, such as XML and CSV||

## *Where JSON is used?*

JSON format is widely used in a variety of contexts where data needs to be exchanged between different applications and systems. **Its ease of use, readability, and flexibility make it a popular choice for data exchange and storage.**

Some common applications of JSON format include:

* **web API** <br>
<i>JSON is often used as a data format for web APIs (Application Programming Interfaces), which are used to exchange data between web applications and servers. JSON is <b>easy to parse and generate</b> using JavaScript, making it a popular choice for building web APIs.</i>

* **configuration files** <br>
<i>JSON is often used to store configuration data for applications and systems. Because it is <b>easy to read and write</b>, and can be parsed by a variety of programming languages, JSON is a popular choice for storing configuration data.</i>

* **Big Data** <br>
<i>JSON is used to store and <b>exchange large amounts of data</b> in Big Data applications. Since JSON is lightweight and easily readable by both humans and machines, it can be used to store and exchange data in real-time between different parts of a Big Data system.</i>

* **research data** <br>
<i>JSON can be used to <b>store and exchange research data in a standardized format</b>, making it easier to share and reuse data across different research projects and teams. JSON is also compatible with many popular data analysis tools and libraries, making it a flexible choice for storing and analyzing research data.</i>



# JSON in Python

The `json` module in Python is a built-in module that allows you to encode and decode data in JSON format. It is a powerful and easy-to-use tool for working with JSON data in Python.

The `json` module provides four main methods:

| method | usage | desription |
|--------|-------|------------|
|`json.dumps()`| `json.dumps(object)` | takes a Python object (such as a *dictionary* or *list*) and **converts it into a JSON string**|
|`json.dump()`| `json.dump(object, file)` | takes a Python object (such as a *dictionary* or *list*) and **writes the JSON data to a file**|
|`json.loads()`| `object=json.loads(JSON_string)` | **takes a JSON string** and converts it into a Python object|
|`json.load()`| `object=json.load(file)` | **reads the JSON data from a file** and converts it into a Python object.|

^ *In summary,* `json.load()` *and* `json.dump()` *deal with* ***file I/O*** *operations,* <br> *while* `json.loads()` *and* `json.dumps()` *deal with* ***string I/O*** *operations.*

The json module also provides other methods for more advanced use cases, such as:
* [encoding and decoding custom objects](#encode--decode-custom-objects),
* [pretty-printing JSON data](#pretty-printing-json-data),
* [controlling the encoding and decoding](#more-controlling-options) process through optional parameters.

## *Getting Started*

You can try out the `json` module on your **local machine** if you have Python installed. <br>
<span style="color: #ff3870;font-weight: 500;"> If you want to make up for the installation step, you can follow the installation guide provided in the tutorial <a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/02A-python-setup-locally" target="_blank">Local Python setup on your computing machine   ⤴</a>.</span>


Alternatively, if you prefer to **work online**, you can use various online Python interpreters such as <a href="https://repl.it/" target="_blank">Repl.it  ⤴</a>, <a href="https://www.pythonanywhere.com/" target="_blank">PythonAnywhere  ⤴</a>, or <a href="https://colab.research.google.com/" target="_blank">Colab  ⤴</a>. These online interpreters provide a Python shell and allow you to run Python code without installing Python on your local machine.


For example, you can **use online Python shell** immediately available at <a href="https://www.python.org/shell/" target="_blank">https://www.python.org/shell/  ⤴</a> to experiment with the `json` module. <br> *Simply type in your Python code in the shell and hit enter to see the output.*

<img src="{{ images_path }}/03_python-online-console.png" alt="03_python-online-console.png">


## Import JSON module

The `json` module is built into Python and **does NOT require any installation**.

To use the `json` module in your Python script, you simply need to import it using the `import` statement:
```
import json
```
After importing the `json` module, you can use its various methods, such as:
* `json.load()`, object created from a JSON file
* `json.loads()`, object created from a JSON string
* `json.dump()`, object written to a file
* `json.dumps()`, object converted to a JSON string

## JSON string from Array

To create a JSON array in Python, you can **use a list** and the `json.dumps()` method to convert it to a formatted **JSON string**:
```
import json

cities_array = ["New York", "London", "Warsaw"]

cities_json = json.dumps(cities_array)          # object to JSON string

print(cities_json)
print(type(cities_json))
```
**OUTPUT:** *string*
![03_python-module-json-o0.png]({{ images_path }}/03_python-module-json-o0.png)


## JSON string from Dictionary

To create a JSON object in Python, you can **use a dictionary** and the `json.dumps()` method to convert it to a formatted **JSON string**:
```
import json

person_object = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

person_json = json.dumps(person_object)          # object to JSON string

print(person_json)
print(type(person_json))
```
**OUTPUT:** *string*
![03_python-module-json-o1.png]({{ images_path }}/03_python-module-json-o1.png)


## Python object from JSON string

To convert JSON string data to a Python object, you can use the `json.loads()` method:
```
import json

person_json = '{"name": "John", "age": 30, "city": "New York"}'

person_object = json.loads(person_json)          # object from JSON string

print(person_object)
print(type(person_object))
```
**OUTPUT:** *dictionary*
![03_python-module-json-o2.png]({{ images_path }}/03_python-module-json-o2.png)


## Accessing JSON Data

To access data in a JSON-based object or array in Python, you can use the square bracket notation:

```
import json

person_json = '{"name": "John", "age": 30, "city": "New York"}'

person = json.loads(person_json)          # object from JSON string

print(person["name"])                     # take the element from object
```
**OUTPUT:** *string*
![03_python-module-json-o3.png]({{ images_path }}/03_python-module-json-o3.png)

## Reading JSON Data from a File

To read JSON data from a file in Python, you can use the `json.load()` method.

*Assume we have a JSON file named "data.json" with the following content:*
<code style="background-color: #d9d9e3;  padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:0.8em;">
{ <br>
 &nbsp; &nbsp; "name": "John", <br>
 &nbsp; &nbsp; "age": 30, <br>
 &nbsp; &nbsp; "city": "New York" <br>
}
</code><br>

You can open the file and load its JSON string content directly to the Python object:
```
import json

with open("data.json", "r") as file:
    data = json.load(file)                # object from JSON file

print(data)
```

<span style="color: #ff3870;font-weight: 500;">Learn more about File-Open-Close process from the practical tutorial <a href="https://datascience.101workbook.org/05-IntroToProgramming/03-PYTHON/03-tutorial-read-write-files" target="_blank">Open-Close & Read-Write of Data Files  ⤴</a></span>.

## Writing JSON Data to a File

To write JSON data to a file in Python, you can use the `json.dump()` method:
```
import json

person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

with open("person.json", "w") as file:
    json.dump(person, file)                # write object to JSON file
```

## Handling Errors

When working with JSON in Python, you may encounter errors if the JSON data is invalid. To handle these errors, you can use the `json.JSONDecodeError` exception:
```
import json

person_json = '{"name": "John", "age": 30, "city": "New York"'          # invalid JSON string (missing closing curly brace)

try:
    person = json.loads(person_json)
    print(person)
except json.JSONDecodeError as e:
    print("Error decoding JSON:", e)
```
**OUTPUT:** *error message*
![03_python-module-json-o4.png]({{ images_path }}/03_python-module-json-o4.png)


# Advanced JSON tasks

## Encode & Decode custom objects

By default, the `json` module can only encode and decode certain basic Python data types such as *strings, numbers, lists,* and *dictionaries*. However, you can also **encode and decode custom objects** using the **"default"** argument of the `json.dumps()` and `json.dump()` methods.

Here's an example:
```
import json

#1 Declare a class for a custom Python object
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

#2 Define function for JSON encoding
def encode_person(obj):
    if isinstance(obj, Person):
        return {'name': obj.name, 'age': obj.age}
    else:
        raise TypeError('Object of type Person is not JSON serializable')

#3 Create an instance of the custom Python object
person = Person('John', 30)

#4 Encode custom object to JSON string
person_json = json.dumps(person, default=encode_person)         # use "default" parameter

print(person_json)
print(type(person_json))

#5 Decode JSON string to custom object
person_dict = json.loads(person_json)
person_obj = Person(person_dict['name'], person_dict['age'])

print(person_obj.name, person_obj.age)
```

<details><summary><b>What the code does?</b></summary>

In this example, (<b>#1</b>) we define a custom `Person class` with a <i>name</i> and <i>age</i> attributes. (<b>#2</b>) We also define a `encode_person()` function that takes an object and returns a dictionary with the name and age attributes if the object is an instance of the `Person` class. Otherwise, it raises a `TypeError`. <br><br>
(<b>#3</b>) We then create a `Person object` and (<b>#4</b>) encode it to a JSON string using the `json.dumps()` method with the <b>default argument</b> set to <i>encode_person</i>. This allows us to encode our custom `Person object` to JSON. <br><br>
(<b>#5</b>) We also decode the JSON string back to a <i>dictionary</i> using the `json.loads()` method, and create a new `Person object` from the <i>dictionary</i>.
</details><br>

**OUTPUT:**
![03_python-module-json-o5.png]({{ images_path }}/03_python-module-json-o5.png)


## Pretty-printing JSON data

The `json.dumps()` and `json.dump()` methods also allow you to **pretty-print JSON data using the "indent" parameter**. The `indent` parameter specifies the number of spaces to use for each level of indentation.

Here's an example:
```
import json

# Create a Python object (e.g., dictionary)
person = {"name": "John", "age": 30, "city": "New York"}

# Encode Python object to pretty-printed JSON string
person_json_pretty = json.dumps(person, indent=4)

print(person_json_pretty)
```

<details><summary><b>What the code does?</b></summary>

In this example, we create a Python <i>dictionary</i> with "name", "age", and "city" keys. We then encode the dictionary to a JSON string using the `json.dumps()` method with the <b>indent</b> argument set to 4. This formats the JSON string with 4 spaces for each level of indentation, making it more readable.
</details><br>

**OUTPUT:**
![03_python-module-json-o6.png]({{ images_path }}/03_python-module-json-o6.png)


## More controlling options

The `json.dumps()` and `json.dump()` methods also provide several optional parameters to control the encoding and decoding process, including:

| option | default | description|
|--------|---------|------------|
|`ensure_ascii`| True | non-ASCII characters are escaped as `\uXXXX` sequences. <br>If **False**, non-ASCII characters are not escaped.|
|`sort_keys`   | False | If **False**, the order of keys is not guaranteed. <br>If **True**, the keys in JSON objects are sorted alphabetically.|
|`skipkeys`    | False | If **False**, a TypeError is raised if a key is not a basic Python type. <br>If **True**, keys that are not basic Python types (*str, int, float, bool, None*) are skipped.

Here's an example:
```
import json

# Create a Python object (e.g., dictionary)
person = {"name": "John", "age": 30, "city": "New York"}

# Encode Python object to JSON string with custom parameters
person_json_custom = json.dumps(person, ensure_ascii=False, sort_keys=True, skipkeys=True)

print(person_json_custom)
```

<details><summary><b>What the code does?</b></summary>

In this example, we create a Python <i>dictionary</i> with "name", "age", and "city" keys. We then encode the <i>dictionary</i> to a JSON string using the `json.dumps()` method with the <b>ensure_ascii</b>, <b>sort_keys</b>, and <b>skipkeys</b> arguments set to <i>False</i>, <i>True</i>, and <i>True</i>, respectively.

<li><b>ensure_ascii=False</b> ensures that non-ASCII characters are not escaped, which can make the JSON string more readable.</li>
<li><b>sort_keys=True</b> sorts the keys in the JSON object alphabetically, making it easier to compare and search for specific keys.</li>
<li><b>skipkeys=True</b> skips any keys in the dictionary that are not basic Python types (<i>str, int, float, bool, None</i>), which can prevent `TypeError` errors when encoding the dictionary to JSON.</li>
</details><br>

**OUTPUT:**
![03_python-module-json-o7.png]({{ images_path }}/03_python-module-json-o7.png)




___
# Further Reading
* [3.4 Math Module - Various Mathematical Functions](05-tutorial-python-round-abs-data-math-module.md)
* [3.5 Pandas Library - Data Structure Manipulation Tool](06-tutorial-python-data-manipulation-pandas.md)
* [3.6 Numpy Library - Multi-Dimensional Arrays Parser](07-tutorial-python-array-manipulation-numpy.md)
* [3.7 SciPy Library - Algorithms for Scientific Computing](08-tutorial-python-apply-statistics-scipy.md)

* [4. Introduction to R programming](../04-R/01-introduction-to-R)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](03-tutorial-read-write-files){: .btn  .btn--primary}
[Next](05-tutorial-python-round-abs-data-math-module){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
