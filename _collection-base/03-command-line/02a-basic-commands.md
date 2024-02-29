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

[DataScience Workbook](https://datascience.101workbook.org/) / [02. Introduction to the Command Line](00-IntroToCommandLine-LandingPage.md) / [2. Introduction to UNIX Shell](02-intro-to-unix-shell.md) / **2.1 Basic Commands: Navigation, File Creation & Preview**

---

# Introduction

The Unix Shell has several built-in text commands, which once executed force the computing machine to perform speific task. <br>In this tutorial you will learn how to use commands to:
* navigate in the file system using paths
* create/copy/move/remove folders and files
* list contents of the folder
* preview file contents
* modify text files manually in the terminal editors

First, open Terminal window and download the working directory of this tutorial by copying and pasting the following commnands to your terminal:

```
wget XXX
```


---
# 1. The Unix manual pages and history of used commands

#### `man` -- <span style="color:Blue">man</span>ual, gives a guide of asked command

The `man` command will provide a description of a unix command and list the parameters that can be used to modify its behavior. To exit the manual for a command you press `q` on your keyboard.

```
man ls
man less
```

#### `history` -- gives a history of recently used Unix commands

Browse all your previously used commands by typing `history` on your terminal (typically, last 500 commands will be saved in this file).

It is often convenient to find a command or oneliner by searching your history. Try these oneliners.

```
history | grep man | tail -n 5
```

`NOTE:` You can also recall your previous commands by pressing &#8593; or &#8595; arrow keys.

# 2. The Unix special characters

| <span style="color:Green">_Character_</span>|<span style="color:Green">_Function_</span>|<span style="color:Green">_Syntax_</span> |<span style="color:Green">_Example usage_</span> |
|--|--|--|--|
|`?`|replaces single character|| *m?_file.txt* to replace 'y' in the *my_file.txt*|
|`*`|replaces multiple characters|| \*file.txt to replace 'my_' in the *my_file.txt*|
|`\|`|executes commands in order |command_1 \| command_2| cat *my_file.txt* \| tail -5 |
|`>`|save standard stream to the output file |command_1 > output_file| cat *my_file.txt* > output.txt |
|`>>`|append standard stream to the end of the output file |command_1 >> output_file| cat *my_file.txt* >> output.txt |
|`2>`|save error stream to the output file |command_1 > output_file| cat *my_file.txt* 2> output.txt |
|`2>>`|append error stream to the end of the output file |command_1 2>> output_file| cat *my_file.txt* 2>> output.txt |
|`2>&1`|redirects standard error to standard output |command_1 2>&1 output_file| cat *my_file.txt* 2>&1 output.txt |
|`/dev/null`|discard output from saving |command_1 > /dev/null| cat *my_file.txt* > /dev/null |
|`\n`|breaks text into next line || echo "text \n text in the next line" |
|`\t`|inserts tabulator space || echo "text \t text after tabulator space" |

#### `?` and `*` -- variables to represent one or many chracters in filenames

First, let's display all text files with the .txt extension located on current path.

```
ls ./*.txt
```
We can use the `?` variable to represent any single character.  Therefore, all the Number files will have this pattern: `?.txt` and all the Letter text files will have this pattern: `??.txt`

First, verify this with the `ls` command
```
ls ??.txt
ls ?.txt
```

#### `|` -- pipe to execute commands in the ordered sequence



# 3. Command-line navigation in the file system

## 3.1 Paths

You can use absolute path or abbreviated path.

### *Checking current path*

#### pwd -- <span style="color:Blue">P</span>ath of <span style="color:Blue">W</span>orking <span style="color:Blue">D</span>irectory

At this point you might be feeling like you are completely blind because you can't see the result of what you did.  So let me teach you a few more commands and change that.  This command will tell you where you are.

```
pwd
```
In my case this returns the following to standard out where severin is my username that I used to log in.
```
/home/severin
```

What this is telling me is that I am in a directory named severin which is in a directory named home.

### *Changing the path*

#### `cd` -- <span style="color:Blue">C</span>hange <span style="color:Blue">D</span>irectory

You will recall we made a directory called unixTutorial above. We can change to that directory using the `cd` command.

```
cd unixTutorial
```
Now if we type the path of working directory command `pwd` we get the following
```
pwd
/home/severin/unixTutorial
```
We are now in a directory called unixTutorial which is a subdirectory of severin which is a subdirectory of home.

To change back to the previous directory we can type in the full path like so.

```
cd /home/severin/
```

or we can use `..` which refers to the directory above the one you are in and type this.


```
cd ..
```

**NOTE:** Present directory is represented as `.` (dot) and parent directory is represented as `..` (dot dot).

Try this out with the following commands

```
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

### *Creating an empty dir*

This section will introduce you to some basic file/directory navigation

#### mkdir -- <span style="color:Blue">M</span>a<span style="color:Blue">k</span>e <span style="color:Blue">Dir</span>ectory Command
Let's make a new directory (folder) called unixTutorial.  To create a directory, the `mkdir` (`m`a`k`e `dir`ectory) command can be used. Type in the next command and hit the &#8629; (`Enter`) key. Notice there is a space between the mkdir command and the filename we supply to the mkdir command

```
mkdir unixTutorial
```

**NOTE:** Unlike PC/Mac folders, in Unix it is better to not include spaces in names for directories. (the underscore "\_" can be used to replace any spaces you might want).

Once you hit return, you will not see anything it will just give you a new prompt and if you try to type it again you will get an error message. Go ahead and try this if you want.

```
mkdir unixTutorial
mkdir: cannot create directory ‘unixTutorial’: File exists
```


### *Copying a dir*

#### `cp` -- <span style="color:Blue">c</span>o<span style="color:Blue">p</span>y command

The `cp` command can be used to duplicate a folder. To copy a folder you have to add the `-r` parameter to copy recursively

```
cp -r Letters Letters_copy
```


### *(Re)Moving a dir*

#### `rmdir` or `rm -r` -- <span style="color:Blue">R</span>e<span style="color:Blue">m</span>ove <span style="color:Blue">Dir</span>ectory
This command can remove an empty directory

Let's remove the extra Deleteme2 directory using this command

```
rmdir Deleteme3
```

### Warning about deleting files and directories

In Unix there is no undo command.  If you delete a file it is gone.  There is no trash bin.  The next two commands are very powerful commands and cna lead to unfortunate losses if not used with care. With that said you can only delete files you have created.  So it is impossible to delete someone else files without permission.

## 4.2 Folder Preview

#### `ls` (<span style="color:Blue">l</span>i<span style="color:Blue">s</span>t) command

|| ||
|--|--|--|
| <span style="color:Green">_Command_</span>|<span style="color:Green">_Function_</span>|<span style="color:Green">_Syntax/example usage_</span> |
|`ls` 	|list contents	|`ls` <span style="color:Red">[OPTIONS] DIRECTORY</span>|

Now that we know how to move between directories, The contents of a directory can be viewed using `ls`. If no directory name is provided then `ls` will list all the contents of the present directory.
```
ls
ls .
ls DIRECTORY
```
Everyone should currently be in their unixTutorial directory that they just created, which is empty so the `ls` command will return you to a new prompt without anything written to standard out. To exit nano you type this series of keys -- hit `ctr x` press `y` for yes to save and hit `enter`.  Nano tells you how to exit along with many of the following shortcuts at the bottom of your screen and will step you through how to exit and save.

There are useful parameters for `ls` command that include:

```
ls –l #Lists all the files in lengthy or detailed view
ls –t #Lists all the files, sorted based on creation time
ls –S #Lists all the files, sorted based on size
```



# 5. Command-line file operations

|File operations | | |
|--|--|--|
| <span style="color:Green">_Command_</span>|<span style="color:Green">_Function_</span>|<span style="color:Green">_Syntax/example usage_</span> |
|`touch`|	create file	|`touch` <span style="color:Red">FILE</span>|
|`rm`	|remove file(s)	|`rm` <span style="color:Red">FILE</span>|
|`cp`|copy files/directories	|`cp `<span style="color:Red">SOURCE DESTINATION</span>|
|`mv`	|move files/directories	|`mv` <span style="color:Red">SOURCE DESTINATION</span>|

## 5.1 File creation

### *Creating an empty file*

#### `touch` command

This command is used to quickly create many empty files.

```
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
```
touch DD.txt EE.txt GG.txt 4.txt 5.txt 6.txt
ls
```

The standard output now returns
```
1.txt 2.txt 3.txt 4.txt 5.txt 6.txt AA.txt BB.txt CC.txt DD.txt EE.txt GG.txt
```

### *Copying a file*

#### `cp` -- <span style="color:Blue">c</span>o<span style="color:Blue">p</span>y command

The `cp` command can be used to duplicate a file

```
ls  
cp myFirstFile.txt mySecondfile.txt
ls
```

### *(Re)Moving a file*

#### `rm` -- <span style="color:Blue">R</span>e<span style="color:Blue">m</span>ove file

In this example, we will remove the file deleteme3.txt in the Deleteme2 directory.

```
rm Deleteme2/deleteme3.txt
```

The `-r` is a parameter that attempts to remove directories as well as other types of files

```
ls
rm -r Deleteme Deleteme2/deleteme3.txt
ls
```

#### `mv` -- <span style="color:Blue">m</span>o<span style="color:Blue">v</span>e command

Move is used to move files to a different location and to rename a file.

```
mv 1.txt Numbers
```

The second function for the mv command is to rename a file.  If you look inside the Letters directory, you will see that one of the letter.txt files is not in sequence.
If we wanted to rename GG.txt to FF.txt we would do the following.

```
mv GG.txt FF.txt
```


## 5.2 File Preview

Easy to remember these commands using this sentence.

A `cat` has a `head` and a `tail`, `more` or `less`

|File/Directory operations | | |
|--|--|--|
|`cat`	|catalog file contents	|`cat` <span style="color:Red">FILE</span>|
|`head`|show first few lines of a file	|`head` <span style="color:Red">FILE</span>|
|`tail`	|show last few lines of a file	|`tail` <span style="color:Red">FILE</span>|
|`more`|view file (with less options)	|`more` <span style="color:Red">FILE</span>|
|`less`	|view file (with more options)	|`less` <span style="color:Red">FILE</span>|

### *Viewing file without edition*

#### `more` -- command to step through a file one screen length at a time using the spacebar. hit `q` to quit the file before reaching the end.

```
more numSeq.txt
```

#### `less` -- similar to the more command but lets you scroll backwards as well.

```
less numSeq.txt
```

|less navigation | |
|--|--|
|`q` | quit|
|`u` | up one screen|
|`d` or `space bar`| down one screen|
|`g` <span style="color:Red">NUM</span>| go to line NUM|


### *Streaming file content*

#### `cat` -- con<span style="color:Blue">cat</span>enate and print files

This command will print out the entire file. Try it out with the numSeq.txt file.  You should see all 100 numbers print to the screen.

#### `head` -- head of the file.

This command will give you the first 10 lines of a file. Try it out with the numSeq.txt file.

```
head numSeq.txt
head -n 5 numSeq.txt
```
The `-n` parameter tells the `head` function to printout in this case 5 lines instead of the default 10 lines.

#### `tail` -- tail of the file

This command will give you the last 10 lines of a file.  Try it out with the numSeq.txt file.

```
tail numSeq.txt
tail -n 5 numSeq.txt
```

### *Modifying file in the text editor*

To learn about Terminal Text Editors see another tutorial: [Text Files Editors](02B-text-files-editors.md).
