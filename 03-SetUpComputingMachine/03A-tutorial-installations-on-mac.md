---
title: "Installations on MacBook Pro"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /03-SetUpComputingMachine/assets/images/03_computer_setup_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [03. Setting Up Computing Machine](00-SetUpComputingMachine-LandingPage.md) / [3. Various Methods of Software Installation](03-various-methods-of-software-installation.md) / **3.1 Installations on MacBook Pro**

---


# Introduction

This guide is meant for the installation and setup of an M1 MacBook Pro for bioinformatics data analysis. I assume that this is a brand new MacBook and that no software has been installed beyond what is installed with IOS Monterey. A new MacBook is not required for the installation of this software but a clean installation of `conda` and `brew` is recommended.

Setting up your new Mac computing machine is an investment of time that you will quickly appreciate in your daily work. With the help of this tutorial, the process will be straightforward and successful.


## Install Basic Developer Tools

### Install Xcode
Xcode is Apple's integrated development environment for macOS, used to develop software. In order to get the most out of your MacBook, this developer's toolkit is required. Installing XCode at a minimum also installs `git` for *GitHub* commands. There are probably ways where you don't even have to install XCode developer tools and still get *GitHub* and the other functionality, but XCode installation seems to work well. You will mostly use the command line tools unless you want to learn swift and ios app development.

* The download takes a long time
* The unzipping takes a long time
* Move the Xcode App to your applications

Install the XCode Command line tools:

```
xcode-select --install
```

### Install Rosetta 2
For those applications that are still compiled for Intel processors, Apple has Rosetta 2, which is a translation environment for your favorite intel compiled programs.

Run the following command on the terminal:

```
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```

Then, restart your computer.


### Install Homebrew

Homebrew is a package manager that makes installing many useful packages really easy. In short, it installs the software you need that Apple didn’t. The tool installs packages into their own directory and then symlinks their files into `path:/usr/local` on macOS.

**Download HomeBrew:**
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Be sure to change *'YourNAME'* to your local username.
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/YourNAME/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"

```

**Create a brew file:**

I update this brew file as I add more programs with brew. That way, I will always know what I have installed and can quickly install it on a new machine.

Place the following text into a file called `brewfile`.

```
tap "homebrew/bundle"
tap "homebrew/core"
tap "homebrew/cask"
brew "zsh-completions"
brew 'bash-completion'
brew "gnu-sed"
brew "gnu-tar"
brew "gawk"
brew "gnu-which"
brew "gzip"
brew "unzip"
brew "coreutils"  #Adds a few extra commands typically found in Unix systems
brew "curl" #Updated curl
brew "dos2unix" #For those pesky dos line endings
brew "findutils" #find xargs locate updatedb
#brew "git" #if you installed XCODE then this is already installed
brew "go" #programming language
brew "jq" #https://stedolan.github.io/jq/ #like sed for JSON
brew "ruby", link: true #programming language
brew "rust" #programming language
brew "tree" #see your file structure
brew "wget" #like curl but better
cask "docker" #Not singularity but can be useful.
cask "iterm2" #An advanced Terminal.
cask "xquartz" #Required for some plotting programs like R
cask "figtree" #Visualize phylogenic trees
brew "tcl-tk" #Needed for some programs
tap "brewsci/bio/"
brew "brewsci/bio/pymol" #Visualize protein structures
brew "igv"  #Genome browser
cask "jbrowse" #A Better Genome browser
brew "htop"  #A different type of top for your mac
brew "pygments" #color syntax

brew "fastqc"
```

Execute the following command in the same folder as the `brew file` defined above and it will install all of the programs.

```
brew bundle
```

### Install Atom editor

Start the installation process by double-clicking on the file you downloaded to your Downloads folder.
<br>`TIPS:` Atom did not open for me the first time when I double-clicked on it. You may have to right-click on the application and select *'Open'*.

Here are some recommended packages, which can be easily incorporated into the editor's functionality by installing them using the built-in package manager.

* language-swift-89
* language-r
* markdownn-folding
* markdown-pdf
* minimap
* wordcount
* drag-relative-path
* markdown-scroll-sync
* autocomplete-python
* autocomplete-swift
* autocomplete-R

### Terminal setup

##### *Install iterm2*

It is a powerful terminal. I haven't utilized its features fully. One option I felt was missing was 'skip by the word' on the command line, but apparently, that is a really-easy fix since iterm2 is fully configurable.  

[How to skip by word in iterm2](https://coderwall.com/p/h6yfda/use-and-to-jump-forwards-backwards-words-in-iterm-2-on-os-x)
  * esc + f  
  * esc + b

##### *Add Oh-My-ZSH to make the terminal more useful*

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

This generates a new .zshrc file.  Change the line with plugins to the following.  Include what is useful to you.  I don't use sublime or vscode but they are quite popular.

```
plugins=(git z github history osx pip pyenv pylint python sublime vscode)
```

##### *Setting up .zshrc / .bashrc*

```
# Aliases
pcat='pygmentize -f terminal256 -O style=native -g'
```


##### *Giving Terminal Full Disk Access*

If you start using Terminal, Mac will now ask you every time if you change directories permission to change into that directory.  To give Terminal access to all folders:

* Settings
  * Security & Privacy
    * Full Disk Access

##### *Install midnight commander file menager*

Install midnight-commander with `brew`:
```
brew install midnight-commander
```
And run it calling `mc` command in the terminal. Use [mc cheat sheet](https://gist.github.com/sgergely/3793166) for Mac to familiarize yourself with keyboard shortcuts.

### Git setup

You will want to copy over the following files from your old machine to your new machine to make github and Atom work again with pushes and pulls.  Github does not allow username/password pushes/fetches anymore.

* .gitconfig
* .git-credentials

I also had to create a new ssh key in my github account for my new laptop. If you need a refresher on how to do this see this [GitHub tutorial](https://bioinformaticsworkbook.org/Appendix/github/introgithub.html#gsc.tab=0).

### Install VPN client

### File Transfer software

##### Install SSHFS

Download via terminal both `macfuse` and and `sshfs` from osxfuse GitHub repository.

```
wget https://github.com/osxfuse/osxfuse/releases/download/macfuse-4.2.4/macfuse-4.2.4.dmg
wget https://github.com/osxfuse/sshfs/releases/download/osxfuse-sshfs-2.5.0/sshfs-2.5.0.pkg
```
Then, find the files in your Downloads folder and run the executable files in the same order.


## Install Developer Libraries

### ### Install Conda

***Miniforge3 for both ARM and Intel chips.***


* https://github.com/conda-forge/miniforge
  * [Miniforge3](https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh)
  * [Miniforge3_x86](https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-x86_64.sh)

I installed the x86 version in a folder with `_x86` at the end of it. This will become important later.

```
                          ~/Software/miniforge3
base                  *   ~/Software/miniforge3_x86
```

This now gives us two base conda environments.  One for installations native to the ARM architecture and native to M1 macs and one for all the other programs that haven't made an ARM version. The x86 programs will run using `rosetta2` translation environment.

***How to change between base conda installations***

This website does a really good job explaining that we just need to change the code in the `.zshrc` file: [Changing base conda installs](https://stackoverflow.com/questions/58131555/how-to-change-the-path-of-conda-base).
<br>I placed all of the next code at the very end of this file. Oh-My-ZSH has a lot of other text in this file.  Leave that alone.

* .zshrc

This file of course will look slightly different as you will have placed the miniforge3 folder in a different location then on my laptop.

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/andrewseverin/GIFNew/Software/miniforge3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/andrewseverin/GIFNew/Software/miniforge3/etc/profile.d/conda.sh" ]; then
        . "/Users/andrewseverin/GIFNew/Software/miniforge3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/andrewseverin/GIFNew/Software/miniforge3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

# this provides the prompt the conda env name you are in.  OH-My-ZSH doesn't do this automatically unfortunately.
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(anaconda ...ENVS)
```

The main point that the website above makes is that in order to change the base installation, all we have to do is change the folder name from `miniforge3` to `miniforge3_x86`.  Doing this every time we want to change between base installations would be a real pain so I modified the script to make this a lot easier.


```bash

if [[ $x86true -eq 1 ]]
then
x86="_x86"
else
x86=""
fi

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/andrewseverin/GIFNew/Software/miniforge3$x86/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/andrewseverin/GIFNew/Software/miniforge3$x86/etc/profile.d/conda.sh" ]; then
        . "/Users/andrewseverin/GIFNew/Software/miniforge3$x86/etc/profile.d/conda.sh"
    else
        export PATH="/Users/andrewseverin/GIFNew/Software/miniforge3$x86/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

# this provides the prompt the conda env name you are in.  OH-My-ZSH doesn't do this automatically unfortunately.
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(anaconda ...ENVS)
```

As you can see I added an if statement that changes a variable `$x86` which I placed at the the end of the folder name to modify the conda location. With this modification, we can create two new functions that will permit us to very quickly change between base conda installations.


* condaArm

```
x86true=0
source ~/.zshrc
conda info --envs
```

* condaX86

```
x86true=1
source ~/.zshrc
conda info --envs
```

To change between them all you have to do is source the file

```
source condaX86
```

or

```
source condaArm
```


### Install python

Most python libraries can be easily installed using `pip`.

```
pip install <module_name>

```
Key commonly used modules should be pre-installed on the HPC infrastructure. You can find and load them with the `module` command.

```
module avail <module_name>
module load <module_name>
```


### Install R

Install R from the package from R cran site.

* [Install R](https://mirror.las.iastate.edu/CRAN/)
  * [https://mirror.las.iastate.edu/CRAN/](https://mirror.las.iastate.edu/CRAN/)
    * [https://mirror.las.iastate.edu/CRAN/bin/macosx/big-sur-arm64/base/R-4.1.2-arm64.pkg](https://mirror.las.iastate.edu/CRAN/bin/macosx/big-sur-arm64/base/R-4.1.2-arm64.pkg)

`TIPS:` I got the following error when I tried to install from DMG so don't do that.
**Error** "R can't be opened because Apple cannot check it for malicious software"
  * [Monterey Arm version 4.2](https://mac.r-project.org/monterey/R-devel/R-GUI-8008-4.2-monterey-arm64-Release.dmg)

  ### Install R Studio
  Up your R desktop game by installing R studio.

  * [https://www.rstudio.com/products/rstudio/download/#download](https://www.rstudio.com/products/rstudio/download/#download)


  ***Check to see R is working***

  I use plot to quickly test the installation.

  ```
  plot(1:10)
  ```

  A window should pop up with a scatter plot along the diagonal.


  ### Install R Manager [Renv](https://cran.r-project.org/web/packages/renv/)

  I haven't explored this enough yet, but it would make sense to have a good package manager for all the potential R packages you might install. Since some can conflict, it can also be good to have separate conda environments for R packages.

  * https://cran.r-project.org/web/packages/renv/
  * https://6chaoran.wordpress.com/2020/07/20/introduction-of-renv-package/




___
# Further Reading
* [3.2 Installations on Windows](03B-tutorial-installations-on-windows.md)
* [3.3 Installations on Linux](03C-tutorial-installations-on-linux.md)

___

[Homepage](../index.md){: .btn  .btn--primary}
[Section Index](00-SetUpComputingMachine-LandingPage.md){: .btn  .btn--primary}
[Previous](03-various-methods-of-software-installation.md){: .btn  .btn--primary}
[Next](03B-tutorial-installations-on-windows.md){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
