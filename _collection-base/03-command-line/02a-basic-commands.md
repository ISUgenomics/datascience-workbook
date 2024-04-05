---
title: "Basic Commands: navigation, file creation & preview"
layout: single
author: Andrew Severin
author1: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "tutorial"
order: 321
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

The Unix Shell has several built-in text commands, which once executed force the computing machine to perform speific task. <br>In this tutorial you will learn how to use commands to:
* navigate in the file system using paths
* create/copy/move/remove folders and files
* list contents of the folder
* preview file contents
* modify text files manually in the terminal editors

First, open Terminal window and download the working directory of this tutorial by copying and pasting the following commnands to your terminal:

```bash
wget XXX
```


# 1. The Unix manual pages and history of used commands

### `man` -- <b class="c-alert">man</b>ual, gives a guide of asked command

The `man` command will provide a description of a unix command and list the parameters that can be used to modify its behavior. To exit the manual for a command you press `q` on your keyboard.

```bash
man ls
man less
```

### `history` -- gives a history of recently used Unix commands

Browse all your previously used commands by typing `history` on your terminal (typically, last 500 commands will be saved in this file).

It is often convenient to find a command or oneliner by searching your history. Try these oneliners.

```bash
history | grep man | tail -n 5
```

<span class="c-alert"><b>NOTE:</b> You can also recall your previous commands by pressing <button class="btn">&#8593;</button> or <button class="btn">&#8595;</button> arrow keys.</span>


# 2. The Unix special characters

| character | function                                            | syntax                   | example usage                       |
|-----------|-----------------------------------------------------|--------------------------|-------------------------------------|
|`?`        |replaces single character                            |             | *m?_file.txt* to replace 'y' in the *my_file.txt*|
|`*`        |replaces multiple characters                         |             | \*file.txt to replace 'my_' in the *my_file.txt* |
|`\|`       |executes commands in order                           |command_1 \| command_2    | cat *my_file.txt* \| tail -5        |
|`>`        |save standard stream to the output file              |command_1 > output_file   | cat *my_file.txt* > output.txt      |
|`>>`       |append standard stream to the end of the output file |command_1 >> output_file  | cat *my_file.txt* >> output.txt     |
|`2>`       |save error stream to the output file                 |command_1 > output_file   | cat *my_file.txt* 2> output.txt     |
|`2>>`      |append error stream to the end of the output file    |command_1 2>> output_file | cat *my_file.txt* 2>> output.txt    |
|`2>&1`     |redirects standard error to standard output          |command_1 2>&1 output_file| cat *my_file.txt* 2>&1 output.txt   |
|`/dev/null`|discard output from saving                           |command_1 > /dev/null     | cat *my_file.txt* > /dev/null       |
|`\n`       |breaks text into next line                           |             | echo "text \n text in the next line"             |
|`\t`       |inserts tabulator space                              |             | echo "text \t text after tabulator space"        |

### `?` and `*` -- variables to represent one or many chracters in filenames

First, let's display all text files with the .txt extension located on current path.

```bash
ls ./*.txt
```
We can use the `?` variable to represent any single character.  Therefore, all the Number files will have this pattern: `?.txt` and all the Letter text files will have this pattern: `??.txt`

First, verify this with the `ls` command
```bash
ls ??.txt
ls ?.txt
```

### `|` -- pipe to execute commands in the ordered sequence


# 3. Command-line navigation in the file system

## 3.1 Paths

You can use absolute path or abbreviated path.

## *Checking current path*

### pwd -- <b class="c-alert">P</b>ath of <b class="c-alert">W</b>orking <b class="c-alert">D</b>irectory

At this point you might be feeling like you are completely blind because you can't see the result of what you did.  So let me teach you a few more commands and change that.  This command will tell you where you are.

```bash
pwd
```
In my case this returns the following to standard out where severin is my username that I used to log in.
```bash
/home/severin
```

What this is telling me is that I am in a directory named severin which is in a directory named home.

## *Changing the path*

### `cd` -- <b class="c-alert">C</b>hange <b class="c-alert">D</b>irectory

You will recall we made a directory called unixTutorial above. We can change to that directory using the `cd` command.

```bash
cd unixTutorial
```
Now if we type the path of working directory command `pwd` we get the following
```bash
pwd
/home/severin/unixTutorial
```
We are now in a directory called unixTutorial which is a subdirectory of severin which is a subdirectory of home.

To change back to the previous directory we can type in the full path like so.

```bash
cd /home/severin/
```

or we can use `..` which refers to the directory above the one you are in and type this.


```bash
cd ..
```

**NOTE:** Present directory is represented as `.` (dot) and parent directory is represented as `..` (dot dot).

Try this out with the following commands

```bash
cd
cd unixTutorial
pwd
cd ..
pwd
cd ..
pwd
cd ..
pwd
cd
cd unixTutorial
pwd
```
**TIP**: You can type in first few letters of the directory name and then press `Tab` to auto complete rest of the name (especially useful when the file/directory name is long). This only works when there are unique matches for the starting letters you have typed. If there is more than one matching files/directories, pressing `Tab` twice will list all the matching names.


# 4. Command-line directory operations

## 4.1 Folder creation

## *Creating an empty dir*

This section will introduce you to some basic file/directory navigation

### mkdir -- <b class="c-alert">M</b>a<b class="c-alert">k</b>e <b class="c-alert">Dir</b>ectory Command
Let's make a new directory (folder) called unixTutorial.  To create a directory, the `mkdir` (`m`a`k`e `dir`ectory) command can be used. Type in the next command and hit the &#8629; (`Enter`) key. Notice there is a space between the mkdir command and the filename we supply to the mkdir command

```bash
mkdir unixTutorial
```

**NOTE:** Unlike PC/Mac folders, in Unix it is better to not include spaces in names for directories. (the underscore "\_" can be used to replace any spaces you might want).

Once you hit return, you will not see anything it will just give you a new prompt and if you try to type it again you will get an error message. Go ahead and try this if you want.

```bash
mkdir unixTutorial
mkdir: cannot create directory ‘unixTutorial’: File exists
```


## *Copying a dir*

### `cp` -- <b class="c-alert">c</b>o<b class="c-alert">p</b>y command

The `cp` command can be used to duplicate a folder. To copy a folder you have to add the `-r` parameter to copy recursively

```bash
cp -r Letters Letters_copy
```


## *(Re)Moving a dir*

### `rmdir` or `rm -r` -- <b class="c-alert">R</b>e<b class="c-alert">m</b>ove <b class="c-alert">Dir</b>ectory
This command can remove an empty directory

Let's remove the extra Deleteme2 directory using this command

```bash
rmdir Deleteme3
```

### <span class="c-alert">WARNING:</span> about deleting files and directories

<div class="warning before" markdown="1" data-before="">
**In Unix there is no undo command.** If you delete a file it is gone. There is no trash bin. The next two commands are very powerful commands and can lead to unfortunate losses if not used with care. With that said you can only delete files you have created. So it is impossible to delete someone else files without permission.
</div>


## 4.2 Folder Preview

### `ls` (<b class="c-alert">l</b>i<b class="c-alert">s</b>t) command

| command | function | syntax/example usage |
|--|--|--|
|`ls` 	|list contents	|`ls` <span class="c-bad">[OPTIONS] DIRECTORY</span>|

Now that we know how to move between directories, The contents of a directory can be viewed using `ls`. If no directory name is provided then `ls` will list all the contents of the present directory.
```bash
ls
ls .
ls DIRECTORY
```
Everyone should currently be in their unixTutorial directory that they just created, which is empty so the `ls` command will return you to a new prompt without anything written to standard out. To exit nano you type this series of keys -- hit `ctr x` press `y` for yes to save and hit `enter`.  Nano tells you how to exit along with many of the following shortcuts at the bottom of your screen and will step you through how to exit and save.

There are useful parameters for `ls` command that include:

```bash
ls –l #Lists all the files in lengthy or detailed view
ls –t #Lists all the files, sorted based on creation time
ls –S #Lists all the files, sorted based on size
```


# 5. Command-line file operations

| command | function | syntax/example usage |
|--|--|--|
|`touch`|	create file	|`touch` <span class="c-bad">FILE</span>|
|`rm`	|remove file(s)	        |`rm` <span class="c-bad">FILE</span>|
|`cp`   |copy files/directories	|`cp `<span class="c-bad">SOURCE DESTINATION</span>|
|`mv`	|move files/directories	|`mv` <span class="c-bad">SOURCE DESTINATION</span>|

## 5.1 File creation

## *Creating an empty file*

### `touch` command

This command is used to quickly create many empty files.

```bash
touch AA.txt
touch BB.txt
touch CC.txt
touch 1.txt
touch 2.txt
touch 3.txt
```

Now if you use the `ls` command the standard output will be

```
1.txt 2.txt 3.txt AA.txt BB.txt CC.txt
```
You can also create multiple files using this command.
```bash
touch DD.txt EE.txt GG.txt 4.txt 5.txt 6.txt
ls
```

The standard output now returns
```
1.txt 2.txt 3.txt 4.txt 5.txt 6.txt AA.txt BB.txt CC.txt DD.txt EE.txt GG.txt
```

## *Copying a file*

### `cp` -- <b class="c-alert">c</b>o<b class="c-alert">p</b>y command

The `cp` command can be used to duplicate a file

```bash
ls
cp myFirstFile.txt mySecondfile.txt
ls
```

## *(Re)Moving a file*

### `rm` -- <b class="c-alert">R</b>e<b class="c-alert">m</b>ove file

In this example, we will remove the file deleteme3.txt in the Deleteme2 directory.

```bash
rm Deleteme2/deleteme3.txt
```

The `-r` is a parameter that attempts to remove directories as well as other types of files

```bash
ls
rm -r Deleteme Deleteme2/deleteme3.txt
ls
```

### `mv` -- <b class="c-alert">m</b>o<b class="c-alert">v</b>e command

Move is used to move files to a different location and to rename a file.

```bash
mv 1.txt Numbers
```

The second function for the mv command is to rename a file.  If you look inside the Letters directory, you will see that one of the letter.txt files is not in sequence.
If we wanted to rename GG.txt to FF.txt we would do the following.

```bash
mv GG.txt FF.txt
```


## 5.2 File Preview

Easy to remember these commands using this sentence.

A `cat` has a `head` and a `tail`, `more` or `less`

| command | function | syntax/example usage |
|--|--|--|
|`cat`	|catalog file contents	|`cat` <span class="c-bad">FILE</span>|
|`head`|show first few lines of a file	|`head` <span class="c-bad">FILE</span>|
|`tail`	|show last few lines of a file	|`tail` <span class="c-bad">FILE</span>|
|`more`|view file (with less options)	|`more` <span class="c-bad">FILE</span>|
|`less`	|view file (with more options)	|`less` <span class="c-bad">FILE</span>|

## *Viewing file without edition*

### `more` -- command to step through a file one screen length at a time using the spacebar.

Hit `q` to quit the file before reaching the end.

```bash
more numSeq.txt
```

### `less` -- similar to the more command but lets you scroll backwards as well.

```bash
less numSeq.txt
```

|less navigation | |
|--|--|
|`q` | quit|
|`u` | up one screen|
|`d` or `space bar`| down one screen|
|`g` <span class="c-bad">NUM</span>| go to line NUM|


### *Streaming file content*

#### `cat` -- con<span style="color:Blue">cat</span>enate and print files

This command will print out the entire file. Try it out with the numSeq.txt file.  You should see all 100 numbers print to the screen.

#### `head` -- head of the file.

This command will give you the first 10 lines of a file. Try it out with the numSeq.txt file.

```bash
head numSeq.txt
head -n 5 numSeq.txt
```
The `-n` parameter tells the `head` function to printout in this case 5 lines instead of the default 10 lines.

#### `tail` -- tail of the file

This command will give you the last 10 lines of a file.  Try it out with the numSeq.txt file.

```bash
tail numSeq.txt
tail -n 5 numSeq.txt
```

### *Modifying file in the text editor*

To learn about Terminal Text Editors see another tutorial: {% include target_link href=322 text="Command Line text files editors." %}
