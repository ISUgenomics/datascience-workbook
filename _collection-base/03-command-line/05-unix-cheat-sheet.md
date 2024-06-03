---
title: "UNIX Commands"
layout: single
author: Arun Seetharam
author1: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "cheatsheet"
order: 350
level: 1
categories: ["command-line", "text-manipulation", "bash-unix"]
tags: ["command", "manual-docs", "cheatsheet"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

# Introduction

## Navigation

| Command | Function                       | Syntax/example usage                                 |
|---------|--------------------------------|------------------------------------------------------|
|`ls`     |list contents                   |`ls` <span class="c-good">[OPTIONS] DIRECTORY</span>  |
|`pwd`    |print working directory         |`pwd`                                                 |
|`cd`     |change directory	           |`cd` ~ or `cd` &emsp; <em class="c-gray"># enter home directory</em>  |
|         |                                |`cd` .. &emsp;&emsp; <em class="c-gray"># go to parent directory</em> |

## File/Directory operations

| Command | Function                       | Syntax/example usage                                 |
|---------|--------------------------------|------------------------------------------------------|
|`mkdir`  | make directory                 |`mkdir` <span class="c-good">DIRECTORY</span>      |
|`cp`     | copy files/directories         |`cp `<span class="c-good">SOURCE DESTINATION</span>|
|`man`    | manual page (help)             |`man `<span class="c-good">COMMAND</span>          |
|`mv`     | move files/directories         |`mv` <span class="c-good">SOURCE DESTINATION</span>|
|`touch`  | create file                    |`touch` <span class="c-good">FILE</span>           |
|`nano`   | edit file                      |`nano` <span class="c-good">FILE</span>            |
|`less`   | view file (with more options)  |`less` <span class="c-good">FILE</span>            |
|`more`   | view file (with less options)  |`more` <span class="c-good">FILE</span>            |
|`cat`    | catalog file contents          |`cat` <span class="c-good">FILE</span>             |
|`head`   | show first few lines of a file |`head` <span class="c-good">FILE</span>            |
|`tail`   | show last few lines of a file  |`tail` <span class="c-good">FILE</span>            |
|`rmdir`  | remove empty directory         |`rmdir` <span class="c-good">DIRECTORY</span>      |
|`rm`     | remove file(s)                 |`rm` <span class="c-good">FILE</span>              |


## File manipulations

| Command | Function                               | Syntax/example usage                                             |
|---------|----------------------------------------|------------------------------------------------------------------|
|`grep`   | search a pattern                       |`grep` <span class="c-good">[OPTIONS] "PATTERN" FILENAME</span>   |
|`sed`    | stream edit a file                     |`sed 's/search/replace/g'` <span class="c-good">FILENAME</span>   |
|`awk`    | multi-purpose command                  |`awk 'PATTERN {ACTION}'` <span class="c-good">FILENAME</span>     |
|`tr`     | translate or transliterate a file      |`tr` <span class="c-good">[OPTIONS] "STRING1" "STRING2"</span>  `<` <span class="c-good">INFILE</span> |
|`wc`     | word count                             |`wc` <span class="c-good">FILENAME</span>                         |
|`sort`   | sort files                             |`sort` <span class="c-good">FILE1</span> `>` <span class="c-good">SORTED_FILE1</span>                  |
|`uniq`   | display unique lines                   |`uniq` <span class="c-good">[OPTIONS] INFILE</span> `>` <span class="c-good">OUTFILE</span>            |
|`diff`   | display difference                     |`diff` <span class="c-good">[OPTIONS] FILE1 FILE2</span>          |
|`comm`   | display common lines among files       |`comm` <span class="c-good">[OPTIONS] FILE1 FILE2</span>          |
|`cut`    | break files vertically based on fields |`cut` `–d` <span class="c-good">"DELIMITER"</span> `–f` <span class="c-good">NUMBER FILE</span>        |
|`split`  | break files horizontally               |`split` <span class="c-good">[OPTIONS] FILENAME</span>            |
|`paste`  | combine files side by side             |`paste` <span class="c-good">FILE1 FILE2</span> `>` <span class="c-good">FILE3</span>                  |
|`join`   | join files based on common field       |`join -t` <span class="c-good">'DELIMITER'</span> `-1` <span class="c-good">N</span> `-2` <span class="c-good">N FILE1 FILE2</span>|

## Compression/archiving

| Command | Function                 | Syntax/example usage                                              |
|---------|--------------------------|-------------------------------------------------------------------|
|`zip`    | zip compress             |`zip` <span class="c-good">OUTFILE.zip INFILE.txt</span>           |
|         |                          |`zip` `-r` <span class="c-good">OUTDIR.zip DIRECTORY</span>        |
|`unzip`  | decompress zipped file   |`unzip` <span class="c-good">ANYTHING.zip</span>                   |
|`tar`    | archive and compress files/directories |                                                     |
|         | # compress               |`tar` `-czvf` <span class="c-good">OUTFILE.tar.gz DIRECTORY</span> |
|         | # extract                |`tar` `-xzvf` <span class="c-good">OUTFILE.tar.gz</span>           |
|`gzip`   | gzip files               |`gzip` <span class="c-good">SOMEFILE</span>                        |
|`gunzip` | decompress gzipped files |`gunzip` <span class="c-good">SOMEFILE.gz</span>                   |

## File permissions

| Command | Function                                 | Syntax/example usage                              |
|---------|------------------------------------------|---------------------------------------------------|
|`chmod`  | change permissions for files/directories |`chmod` <span class="c-good">[OPTIONS] RELATIONS[+/-]PERMISSIONS FILE</span>|


## ADDITIONAL COMMANDS

| Command            | Function                       |
|--------------------|--------------------------------|
|`du –sh`            | DIR - show directory size      |
|`whoami`            | display username               |
|`date`              | system date/time               |
|`cal`               | calendar                       |
|`find . –name FILE` | find a file/directory          |
|`which CMD`         | display default cmd path       |
|`whereis CMD`       | show possible locations of cmd |
|`locate FILE`       | find instances of a file       |
|`clear`             | clear screen                   |
|`sleep 5`           | pause 5 (any) seconds          |
|`top`               | current running processes      |
|`ps`                | current running processes      |
|`wget`              | URL - download specified URL   |

## SHORTCUTS

| Command       | Function                      |
|---------------|-------------------------------|
|`TAB`          | autocomplete names            |
|`UP/DOWN`      | browse previous commands      |
|`ctrl+c`       | interrupt/kill anything       |
|`ctrl+l`       | clear screen                  |
|`ctrl+d`       | quit, exit                    |
|`ctrl+z`       | suspend (use fg to restore)   |
|`!!`           | repeat last command           |
|`alt+.`        | last argument of previous cmd |
|`ctrl+insert`  | copy selection                |
|`shift+insert` | paste copied text             |
|`ctrl+a`       | go to start of the line       |
|`ctrl+e`       | go to end of the line         |
|`ctrl+r`       | reverse search history        |
|`cd ~`         | go to home                    |

## NANO SHORTCUTS

| Command | Function                |
|---------|-------------------------|
|`ctrl+r` | read/insert file        |
|`ctrl+o` | save file               |
|`ctrl+x` | close file              |
|`alt+a`  | start selecting text    |
|`ctrl+k` | cut selection           |
|`ctrl+u` | uncut (paste) selection |
|`alt+/`  | go to end of the file   |
|`ctrl+a` | go to start of the line |
|`ctrl+e` | go to end of the line   |
|`ctrl+c` | show line number        |
|`ctrl+_` | go to line number       |
|`ctrl+w` | find matching word      |
|`alt+w`  | find next match         |
|`ctrl+\` | find and replace        |

## PIPES, REDIRECTS

| Command                                    | Function                      |
|--------------------------------------------|-------------------------------|
|cmd `<` <span class="c-good">file</span>    | use file as input             |
|cmd `>` <span class="c-good">file</span>    | write output to file          |
|cmd `>>` <span class="c-good">file</span>   | append output to file         |
|cmd `2>` <span class="c-good">stderr</span> | error output to file          |
|cmd `1>&2` <span class="c-good">file</span> | send output and error to file |
|cmd1 `\|` <span class="c-good">cmd2</span>  | send output of cmd1 to cmd2   |

## PRE-DECLARED VARIABLES

| Variable     | Description                 |
|--------------|-----------------------------|
|`$USER`       | username                    |
|`$HOME`       | home path                   |
|`$PWD`        | working directory path      |
|`$PATH`       | path for executables        |
|`$HOSTNAME`   | machine name                |
|`$SHELL`      | current shell               |
|`$SSH_CLIENT` | local client's IP address   |
|`$TERM`       | type of terminal            |

<p class="footnote c-alert" markdown="1">^ `env` command lists all the assigned variables</p>

## HPC-CLUSTER Commands for SLURM

| Command           | Function                         | Syntax/example usage                                   |
|-------------------|----------------------------------|--------------------------------------------------------|
|`sinfo -a`         | list all queues                  |`sinfo -a`                                              |
|`squeue`           | list all jobs                    |`squeue`                                                |
|`squeue -u userid` | list jobs for userid             |`squeue -u` <span class="c-good">[userid]</span>        |
|`squeue -t R`      | list running jobs                |`squeue -t R`                                           |
|`smap`             | show jobs, partitions and nodes in a graphical network topology|`smap`                    |
|`sbatch`           | submit a slurm job               |`sbatch` <span class="c-good">[script]</span>           |
|`scancel`          | delete slurm batch job           |`scancel` <span class="c-good">[job_id]</span>          |
|`scontrol hold`    | hold slurm batch jobs            |`scontrol hold` <span class="c-good">[job_id]</span>    |
|`scontrol release` | release hold on slurm batch jobs |`scontrol release` <span class="c-good">[job_id]</span> |

<button class="btn c-good">TUTORIAL</button> [SLURM commands](../HPC/SLURM/slurm-cheatsheat.md)

## HPC-CLUSTER Commands for TORQUE

| Command    | Function                                | Syntax/example usage                                      |
|------------|-----------------------------------------|-----------------------------------------------------------|
|`squeue`    | **show state of jobs**                  |`squeue` `–a`   <em class="c-gray"># current jobs on a cluster</em> |
|            | # current jobs by the user              |`squeue` `–u` <span class="c-good">username</span>         |
|            | # information about the job (id#)       |`squeue` `–j` <span class="c-good">jobid</span>            |
|            | # current jobs by the user              |`squeue` `-l –u` <span class="c-good">username</span>      |
|`scancel`   | delete job from the queue               |`scancel` <span class="c-good">jobid</span>                |
|`sbatch`    | submit job to the queue                 |`sbatch` <span class="c-good">submissionfile.sub</span>    |
|`scontrol`  | **control jobs**                        |                                                           |
|            | # hold the job                          |`scontrol hold` <span class="c-good">jobid jobid</span>    |
|            | # release the job                       |`scontrol release` <span class="c-good">jobid jobid</span> |
|            | # info on the job                       |`scontrol show` <span class="c-good">jobid jobid</span>    |
|`srun`      | run a job command                       |`srun` `-N 1 -n 16 -t 4:00:00 --pty bash` <br>&ensp;<em class="c-gray"># start an interactive job session</em> |
|`sinfo`     | show state of nodes and partitions      |`sinfo`                                                    |
|            | # show info on `tiny` partition         |`sinfo` `-p` <span class="c-good">tiny</span>              |
|`smap`      | show state of jobs, nodes and partitions (colored) |`smap`                                          |
|`module`    | **use preinstalled programs**           |                                                           |
|            | # loads program for use                 |`module load` <span class="c-good">PROGRAM</span>          |
|            | # lists all loaded modules              |`module list`                                              |
|            | # lists available modules               |`module avail`                                             |
|            | # unloads module                        |`module unload` <span class="c-good">PROGRAM</span>        |

<div class="protip" markdown="1">
An A-Z Index of the Bash commands for Linux can be found [here](http://ss64.com/bash/index.html).
</div>
