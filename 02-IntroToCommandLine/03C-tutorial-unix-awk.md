---
title: "AWK Command"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /02-IntroToCommandLine/assets/images/02_command_line_banner.png
---

{% include toc %}

## <span style="color: #ff3870;">New content coming soon!</span>

```
$ cat > marksheet.txt
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```
Enter Ctrl-C
```
$ cat marksheet.txt
```
### Output
```
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```
cat-like (Default) behavior of Awk:
```
$ awk '{print}' marksheet.txt
```
### output
```
Allan Lamb 78
Graeme Hick 56
David Gower 83

Graham Gooch 43
```

The file marksheet.txt has five lines including and empty line. Each line is a __record__. Each __record__ is split into fields (separated by whitespace character, which is the default behavior). Each field can be accessed by the __$__ sign followed by a number denoting the field. In the example below, each __record__ has three words separated by a single space character. We can access the first and third fields of the file by,
```
$ awk '{print $1,$3}' marksheet.txt
```
### output
```
Allan 78
Graeme 56
David 83

Graham 43
```
The first field (First name) and the third field (Marks scored) are returned. The empty line is also returned as it is also a __record__.

grep-like Awk
```
$ awk '/G/ {print}' marksheet.txt
```
### output
```
Graeme Hick 56
David Gower 83
Graham Gooch 43
```
There are three records with the letter G. Now if we needed all Gs in the beginning of a record or line, then we might do
```
awk '/^G/ {print}' marksheet.txt
```

### output
```
Graeme Hick 56
Graham Gooch 43
```
There are just two records in this case.

Doing Arithmetic \
Let us get the average marks scored by the candidates. For that we do:
```
awk '{sum+=$3} END {print sum}' marksheet.txt
```

### Output
```
260
```
We can get the average scores by:
```
awk '{sum+=$3} END {print sum/NR}' marksheet.txt
```

### output
```
52
```
There are a couple of things to notice. One, the introduction of a new variable NR; and two, the output is incorrect. The average should be 65 and not 52. The NR command stores the number of current records, which is our example is five, including the empty and thus explains the error in the output. To remove the empty line:

```
awk NF marksheet.txt > marksheet2.txt
```
The NF variable contains the number of fields in a line and is positive when the line is non-empty and prints it. Awk does nothing when the line is empty.


```
cat marksheet2.txt
```

### output
```
Allan Lamb 78
Graeme Hick 56
David Gower 83
Graham Gooch 43
```
Now,
```
awk '{sum+=$3} END {print sum/NR}' marksheet2.txt
```

### output
```
65
```

___

# Further Reading
* [Tutorial: BIOAWK – biological data manipulation](03D-tutorial-unix-bioawk.md)
* [Summary of Unix Commands](04-unix-cheat-sheet.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-IntroToCommandLine-LandingPage.md){: .btn  .btn--primary}
[Previous](03B-tutorial-unix-sed.md){: .btn  .btn--primary}
[Next](03D-tutorial-unix-bioawk.md){: .btn  .btn--primary}
