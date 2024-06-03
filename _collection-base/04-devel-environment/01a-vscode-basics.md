---
title: "Visual Studio Code: multi-language integrated DE (VSC)"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 411
level: 2
categories: ["developer-tools", "version-control", "programming", "bash-scripting", "installation"]
tags: ["IDE", "code-editor", "debugger", "terminal", "R", "python", "markdown"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<table>
  <tr>
    <td class="pl-0 font-1r no-border">VSCode is an editor made for coding and debugging. It supports multiple programming languages and includes features such as syntax highlighting, autocomplete, and debugging tools. In addition to its powerful editing capabilities, VSCode also offers integrated support for Git, the popular version control system. This allows user to manage code and collaborate with other team members. In this tutorial, I will get you started with using Visual Studio Code and using some of its useful features.</td>
    <td class="no-border" width=200><p markdown="1">![logo]({{ images_path }}/VSC_logo.png)</p></td>
  </tr>
</table>


## Installation
VSCode can be downloaded from <a href="https://code.visualstudio.com/download" target="_blank">VSCode website ⤴</a>. Once the download is complete, run the installer to install VSCode on your system and run the application once installed. <br>


## Shortcuts
The most useful shortcut you need to learn is `Ctrl+Shift+p` (or `Cmd+Shift+p` on mac) which opens the search bar for all commands. You can search for all available commands and their shortcuts. Some commands do not have shortcuts but can still be selected from this search bar. Open Keyboard Shortcuts with `Ctrl+k Ctrl+s` to get the whole list and configure/add shortcut keys to commands you use. Below is a list of some useful default shortcuts and the commands on windows (change `Ctrl` with `Cmd` on mac):

| Shortcut      |            Command                |
|---------------|-----------------------------------|
|`Ctrl+k Ctrl+r`| Keyboard shortcuts reference      |
|`Ctrl+k v`     | Open markdown preview to the side |
|`Ctrl+Shift+v` | Open Markdown preview             |
|`Shift+Alt+c`  | Copy path of active file          |
|`Ctrl+s`       | File: Save                        |
|`Ctrl+Shift+s` | File: Save as..                   |
|`Ctrl+Shift+f` | Search                            |
|`Ctrl+Shift+g` | Source Control                    |
|`Ctrl+`        | Terminal                          |
|`Ctrl+Shift+`  | New Terminal                      |
|`Ctrl+Shift+y` | Debug Console                     |
|`Ctrl+Shift+u` | Output                            |
|`F5`           | Start Debugging                   |
|`Ctrl+F5`      | Run without Debugging             |
|`Ctrl+k Ctrl+t`| Change Theme                      |

<div class="protip" markdown="1">
Using a web browser, log in to your Github, go to your repository and press the period `.` key. You can now use VSCode in the browser (without installing VSCode).
</div>

## Select a Theme
VSCode has several inbuilt color themes (dark and light background) which can be selected by pressing `Ctrl+k Ctrl+t` shortcut keys or from the 'Manage' icon at lower left corner. A list of theme options will open up and you can select the one you like. I am using Dark High Contrast theme for pictures in this tutorial. <br>

![theme]({{ images_path }}/VSC_theme.png)

## Open a Project
To open a project, go to `File` menu and select the `Open Folder` option. Select the folder containing your project files.

![open]({{ images_path }}/VSC_open.png)

The project folder, subfolders and files appear in the `Explorer` pane on the left side of the editor.

![explorer]({{ images_path }}/VSC_explorer.png)

You can select a file from the opened folder, or create a new file.

![newfile]({{ images_path }}/VSC_newfile.png)

A new file opens up and you can start writing in it. VSCode is Markdown compatible. Check out the <a class="t-links" href="933.5"></a> page to learn more about Markdown. VSCode supports multiple programming languages such as Python, R, Java, C++, JavaScript etc.


Check out the <a href="https://code.visualstudio.com/docs/languages/overview" target="_blank">official documentation ⤴</a> about programming language support and download the extensions for language(s) of your choice. When you open a file, VSCode detects the language used automatically, but you can also manually change the language mode from lower right corner or by using `Ctrl+k m` shortcut keys.

![text]({{ images_path }}/VSC_text.png)


## Terminal
The integrated terminal allows you to run command-line tools and scripts directly within the editor. If the terminal does not appear automatically at the bottom of the editor, it can be opened from the "View" menu and selecting "Terminal" or using the  ``ctrl+` `` shortcut keys.

![terminal]({{ images_path }}/VSC_terminal.png)


## Debugging
VSCode has powerful tools to help you find and fix errors in your code. To start debugging, open the file containing the code, click `Run and Debug` button on the left side. This will open the `Debug` pane that lets you configure your debug settings and start the process.

![debug]({{ images_path }}/VSC_debug.png)


## Version Control
If you are not familiar with Git, check out these tutorials about <a class="t-links" href="932.2"></a> and <a class="t-links" href="932.4"></a>. It is possible to work with Git repositories directly from the VSC editor. You can clone a repo, or initialize a repo for your project from the terminal. `Source Control` pane on the left is used to manage your Git repositories. You will need to log in to your GitHub account the first time you use Git. The common Git operations such as Pull, Push, Clone, Commit, and Create Branch can be performed from here. Check this page for a list of <a class="t-links" href="932.21" section="#vs-code-git-commands">Git commands</a> on VSCode.

![VC]({{ images_path }}/VSC_sourcecontrol.png)

You can clone an existing repo after clicking Source Control, if you have no files/folders open the following option appears:

![Clone1]({{ images_path }}/VSC_clone1.png)

If you have something open already, you can still clone from `...` options drop down menu.

![Clone2]({{ images_path }}/VSC_clone2.png)

Another option is to use the shortcut to find all commands mentioned earlier, `Ctrl+Shift+p` and search for `Git Clone`. Alternatively, you can always use the Terminal within VSCode to perform functions like Clone.

```bash
git clone <Github Repo> <Local Directory>
```

If you open a new file or folder from your local computer which is not a cloned Git repo, VSC will give you an option to initialize the repository in Source Control.

![init]({{ images_path }}/VSC_initialize.png)

Once you initialize or clone, the contents of the open project folder will appear. You can start working on your project now, `Ctrl+s` to save progress, and stage changes by clicking on the plus sign next to your file.

![stage]({{ images_path }}/VSC_stage.png)

You can also stage all changed files together by clicking on plus sign next to `Changes`.

![Allstage]({{ images_path }}/VSC_Allchanges.png)

You can now either first Commit and then Push the staged changes or do both steps together by clicking on the dropdown menu.

![commit]({{ images_path }}/VSC_commit.png)
