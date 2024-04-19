---
title: "JSON module - encoding & decoding JSON data"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 05-programming/assets/images/05_programming_banner.png
type: "tutorial"
order: 534
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

<div class="required" markdown="1">
Before starting this tutorial, there are a few requirements that you should have in place.
* Firstly, you should be familiar with using the **command line in terminal** on your computer. <br>
<button class="btn more mr"></button> ...from the practical tutorials in section <a class="t-links" href="300"></a>

* Secondly, you should **have Python installed** on your local machine.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="423"></a>

* Thirdly, you should have a Python Integrated **Development Environment** (IDE) set up on your computer, e.g., PyCharm or JupyterLab or any text editor.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="420"></a>

* Finally, you should have a **basic understanding of Python** programming.  <br>
<button class="btn more mr"></button> ...from the practical tutorial <a class="t-links" href="531"></a>
</div>


# Introduction

JSON (JavaScript Object Notation) format is a **lightweight data storage format** based on a subset of the JavaScript programming language, but is **language independent** and can be used with any programming language.

<div class="note" markdown="1">
**JSON** is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for web APIs, configuration files, and other **data exchange purposes**.
</div>

<div class="more" markdown="1">
The official documentation for the JSON module in Python can be found at <a href="https://docs.python.org/3/library/json.html" target="_blank">https://docs.python.org/3/library/json.html  ⤴</a>
</div>

## JSON format

JSON format is built on two data structures: **objects** and **arrays**.

An **object** is an unordered collection of key:value pairs, where:
* the **keys** (also called names) are `strings` and
* the **values** can be any valid JSON data type <br>(`strings`, `numbers`, `booleans`, `objects`, or `arrays`).

An **array** is an ordered list of values, where each value can be any valid JSON data type.


In JSON, there are two main types of brackets used:
* square brackets `[]` to define arrays
* curly braces `{}` to define objects
These two types of brackets are the building blocks of JSON data structures.

### *A. Square brackets [ ]*

Square brackets are used to **define an array in JSON**. An array is an **ordered list** of values, where each value can be any valid JSON data type (*strings, numbers, booleans, objects, or arrays*). The **values in an array are separated by commas** and enclosed in square brackets.

Here's an example of a JSON array:
```json
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
```json
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
```json
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "traveling", "photography"]
}
```
*In this example, the object has four key:value pairs, where "hobbies" is an array of strings, which are enclosed in square brackets.*

Here's an example of a JSON array that contains objects as its elements:
```json
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
```json
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

<table>
  <tr> <th>web API</th> <td><i>JSON is often used as a data format for web APIs (Application Programming Interfaces), which are used to exchange data between web applications and servers. JSON is <b>easy to parse and generate</b> using JavaScript, making it a popular choice for building web APIs.</i></td> </tr>
  <tr> <th>configuration files</th> <td><i>JSON is often used to store configuration data for applications and systems. Because it is <b>easy to read and write</b>, and can be parsed by a variety of programming languages, JSON is a popular choice for storing configuration data.</i></td> </tr>
  <tr> <th>Big Data</th> <td><i>JSON is used to store and <b>exchange large amounts of data</b> in Big Data applications. Since JSON is lightweight and easily readable by both humans and machines, it can be used to store and exchange data in real-time between different parts of a Big Data system.</i></td> </tr>
  <tr> <th class="no-border">research data</th> <td class="no-border"><i>JSON can be used to <b>store and exchange research data in a standardized format</b>, making it easier to share and reuse data across different research projects and teams. JSON is also compatible with many popular data analysis tools and libraries, making it a flexible choice for storing and analyzing research data.</i></td> </tr>
</table>


# JSON in Python

The `json` module in Python is a built-in module that allows you to encode and decode data in JSON format. It is a powerful and easy-to-use tool for working with JSON data in Python.

The `json` module provides four main methods:

| method | usage | desription |
|--------|-------|------------|
|`json.dumps()`| `json.dumps(object)` | takes a Python object (such as a *dictionary* or *list*) and **converts it into a JSON string**|
|`json.dump()`| `json.dump(object, file)` | takes a Python object (such as a *dictionary* or *list*) and **writes the JSON data to a file**|
|`json.loads()`| `object=json.loads(JSON_string)` | **takes a JSON string** and converts it into a Python object|
|`json.load()`| `object=json.load(file)` | **reads the JSON data from a file** and converts it into a Python object.|

<div class="note before" data-before="" markdown="1">
In summary:
* `json.load()` and `json.dump()` deal with **file I/O** operations,
* while `json.loads()` and `json.dumps()` deal with **string I/O** operations.
</div>

The `json` module also provides other methods for more advanced use cases, such as:
* [encoding and decoding custom objects](#encode--decode-custom-objects),
* [pretty-printing JSON data](#pretty-printing-json-data),
* [controlling the encoding and decoding](#more-controlling-options) process through optional parameters.


## *Getting Started*

You can try out the `json` module on your **local machine** if you have Python installed.

<div class="required" markdown="1">
If you want to make up for the installation step, you can follow the installation guide provided in the tutorial <a class="t-links" href="423"></a>.
</div>

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
```python
import json

cities_array = ["New York", "London", "Warsaw"]

cities_json = json.dumps(cities_array)          # object to JSON string

print(cities_json)
print(type(cities_json))
```
**output type:** *string*
<pre class="output">
<b class="prompt-1"></b>print(cities_json)
["New York", "London", "Warsaw"]
<b class="prompt-1"></b>
<b class="prompt-1"></b>print(type(cities_json))
<class 'str'>
</pre>


## JSON string from Dictionary

To create a JSON object in Python, you can **use a dictionary** and the `json.dumps()` method to convert it to a formatted **JSON string**:
```python
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
**output type:** *string*
<pre class="output">
<b class="prompt-1"></b>print(person_json)
["name": "John", "age": 30, "city": "New York"]
<b class="prompt-1"></b>
<b class="prompt-1"></b>print(type(person_json))
<class 'str'>
</pre>


## Python object from JSON string

To convert JSON string data to a Python object, you can use the `json.loads()` method:
```python
import json

person_json = '{"name": "John", "age": 30, "city": "New York"}'

person_object = json.loads(person_json)          # object from JSON string

print(person_object)
print(type(person_object))
```
**output type:** *dictionary*
<pre class="output">
<b class="prompt-1"></b>print(person_object)
["name": "John", "age": 30, "city": "New York"]
<b class="prompt-1"></b>
<b class="prompt-1"></b>print(type(person_object))
<class 'dict'>
</pre>


## Accessing JSON Data

To access data in a JSON-based object or array in Python, you can use the square bracket notation:

```python
import json

person_json = '{"name": "John", "age": 30, "city": "New York"}'

person = json.loads(person_json)          # object from JSON string

print(person["name"])                     # take the element from object
```
**output type:** *string*
<pre class="output">
<b class="prompt-1"></b>print(person["name"])
John
<b class="prompt-1"></b>print(type(person["name"]))
<class 'str'>
</pre>


## Reading JSON Data from a File

To read JSON data from a file in Python, you can use the `json.load()` method.

*Assume we have a JSON file named "data.json" with the following content:*
<code class="code-block bc-data">{
    "name": "John",
    "age": 30,
    "city": "New York"
}
</code>

You can open the file and load its JSON string content directly to the Python object:
```python
import json

with open("data.json", "r") as file:
    data = json.load(file)                # object from JSON file

print(data)
```

<button class="btn more mr"></button> ...about File-Open-Close process from the  <a class="t-links" href="533" btn="true"><span class="c-good">HANDS-ON TUTORIAL</span></a>.

## Writing JSON Data to a File

To write JSON data to a file in Python, you can use the `json.dump()` method:
```python
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
```python
import json

person_json = '{"name": "John", "age": 30, "city": "New York"'        # invalid JSON string (missing closing curly brace)

try:
    person = json.loads(person_json)
    print(person)
except json.JSONDecodeError as e:
    print("Error decoding JSON:", e)
```
**output type:** *error message*
<pre class="output">
Error decoding JSON: Expecting ',' delimiter: line 1 column 47 (char 46)
</pre>


# Advanced JSON tasks

## Encode & Decode custom objects

By default, the `json` module can only encode and decode certain basic Python data types such as *strings, numbers, lists,* and *dictionaries*. However, you can also **encode and decode custom objects** using the **"default"** argument of the `json.dumps()` and `json.dump()` methods.

Here's an example:
```python
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

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>

In this example: <br>
(**#1**) We define a custom `Person class` with a *name* and *age* attributes. <br>
(**#2**) We also define a `encode_person()` function that takes an object and returns a dictionary with the name and age attributes if the object is an instance of the `Person` class. Otherwise, it raises a `TypeError`. <br>
(**#3**) We then create a `Person object` and <br>
(**#4**) encode it to a JSON string using the `json.dumps()` method with the **default argument** set to *encode_person*. This allows us to encode our custom `Person object` to JSON. <br>
(**#5**) We also decode the JSON string back to a *dictionary* using the `json.loads()` method, and create a new `Person object` from the *dictionary*.
</details>

<pre class="output">
<b class="prompt-1"></b>print(person_json)
{"name": "John", "age": 30}
<b class="prompt-1"></b>print(type(person_json))
<class 'str'>

<b class="prompt-1"></b>print(person_dict)
{'name': 'John', 'age': 30}
<b class="prompt-1"></b>print(type(person_dict))
<class 'dict'>

<b class="prompt-1"></b>print(person_obj.name, person_obj.age)
John 30
<b class="prompt-1"></b>print(type(person_obj))
<class '__main__.Person'>
</pre>


## Pretty-printing JSON data

The `json.dumps()` and `json.dump()` methods also allow you to **pretty-print JSON data using the "indent" parameter**. The `indent` parameter specifies the number of spaces to use for each level of indentation.

Here's an example:
```python
import json

# Create a Python object (e.g., dictionary)
person = {"name": "John", "age": 30, "city": "New York"}

# Encode Python object to pretty-printed JSON string
person_json_pretty = json.dumps(person, indent=4)

print(person_json_pretty)
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>

In this example, we create a Python *dictionary* with "name", "age", and "city" keys. We then encode the dictionary to a JSON string using the `json.dumps()` method with the **indent** argument set to 4. This formats the JSON string with 4 spaces for each level of indentation, making it more readable.
</details>

<pre class="output">
<b class="prompt-1"></b>print(person_json_pretty)
{
    "name": "John",
    "age": 30,
    "city": "New York"
}
</pre>


## More controlling options

The `json.dumps()` and `json.dump()` methods also provide several optional parameters to control the encoding and decoding process, including:

| option | default | description|
|--------|---------|------------|
|`ensure_ascii`| True | non-ASCII characters are escaped as `\uXXXX` sequences. <br>If **False**, non-ASCII characters are not escaped.|
|`sort_keys`   | False | If **False**, the order of keys is not guaranteed. <br>If **True**, the keys in JSON objects are sorted alphabetically.|
|`skipkeys`    | False | If **False**, a TypeError is raised if a key is not a basic Python type. <br>If **True**, keys that are not basic Python types (*str, int, float, bool, None*) are skipped.

Here's an example:
```python
import json

# Create a Python object (e.g., dictionary)
person = {"name": "John", "age": 30, "city": "New York"}

# Encode Python object to JSON string with custom parameters
person_json_custom = json.dumps(person, ensure_ascii=False, sort_keys=True, skipkeys=True)

print(person_json_custom)
```

<details class="l-frame" markdown="1"><summary class="c-header"><b><i>What the script does?</i></b></summary>

In this example, we create a Python *dictionary* with "name", "age", and "city" keys. We then encode the *dictionary* to a JSON string using the `json.dumps()` method with the **ensure_ascii**, **sort_keys**, and **skipkeys** arguments set to `False`, and `True`, respectively.

| argument             | description |
|----------------------|-------------|
| `ensure_ascii=False` | Ensures that non-ASCII characters are not escaped, which can make the JSON string more readable. |
| `sort_keys=True`     | Sorts the keys in the JSON object alphabetically, making it easier to compare and search for specific keys. |
| `skipkeys=True`      | Skips any keys in the dictionary that are not basic Python types (*str, int, float, bool, None*), which can prevent `TypeError` errors when encoding the dictionary to JSON. |

</details>

<pre class="output">
<b class="prompt-1"></b>print(person_json_custom)
{"age": 30, "city": "New York", "name": "John"}
</pre>
