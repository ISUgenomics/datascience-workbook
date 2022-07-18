---
title: ".bashrc"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /06-IntroToHPC/assets/images/06_hpc_banner.png
---

The `.bashrc` for bash shell is one of the most useful files for a unix user. It is read every time a new shell is created (for example when submitting jobs).  In many HPC systems, the `.bash_profile` will also contain a line that will source the `.bashrc` upon login.  Below is a `.bashrc` example that has examples of useful features you may want to include in your own `.bashrc` file.

* Exports
* Singularity
* Aliases
* Never ending history
* Functions

1. Make a backup of your original `.bashrc` file

```
cp .bashrc .bashrc.orig
```

2\. Copy the .bashrc file contained inside the code block below to a new `.bashrc` file

3\. Update the following lines with the correct information

```
export PROJECTFOLDER=/PATH/To/Working/Directory
alias gclone='git clone git clone git@github.com:GITHUBID/$1'  # update your gitorganization or ID here
```

```bash
# /etc/skel/.bashrc
# Source global definitions

if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=


###############################
## Exports: When you need a variable every time you login.
###############################
# Extend your PATH to find locally installed programs or scripts
export PATH="~/bin:$PATH"
export PATH="$PATH:/home/$USER/.local/bin"



# corrects for Error:  E437: terminal capability "cm" required
export TERM=xterm

# Project Directory  Be sure to update this path
export PROJECTFOLDER=/PATH/To/Working/Directory


# User defined Modules
  # this is where you might put modules you always load or modules you have installed yourself
    # module load singularity

    # Give others in your group read but (no write or execute) permissions upon file/folder creation
      umask 0022

###############################
## Singularity
###############################
## Singularity Variables added to your path
if !  [ -d $PROJECTFOLDER/NXFContainers ]; then
    mkdir $PROJECTFOLDER/NXFContainers
fi
  export NXF_SINGULARITY_CACHEDIR=$PROJECTFOLDER/NXFContainers





###############################
## Aliases:  Make your most commonly used commands shorter!
###############################
  alias table='column  -t | less -S'  # this produces better columns for output cat file | table
  alias whitespace="sed 's/ /·/g;s/\t/￫/g;s/\r/§/g;s/$/¶/g'"  # show the whitespaces in a file

  alias pwd='pwd -P'  # always show the full path and not softlinked path to folder


  # add color to grep and ls
  alias grep='grep --color=auto'
  alias fgrep='fgrep --color=auto'
  alias egrep='egrep --color=auto'
  alias ls='ls --color=auto -v'

  # File and folder size
  alias du='du -kh'          # Makes a more readable output.
  alias df='df -kTh'
  alias dd='du -sch *'
  alias dG='du -hs * | awk '$1~"G"'' #show all files/folders with a size in the Gigabytes
  alias dT='du -hs * | awk '$1~"T"'' #show all files/folders with a size in the Terabytes

  # shortcuts for ls
  alias lh='ls -lh'          # sort in readable way
  alias la='ls -AlL'         # show hidden files and show size of files that are softlinked
  alias lx='ls -lXB'         # sort by extension
  alias lk='ls -lSr'         # sort by size, biggest last
  alias lc='ls -ltcr'        # sort by and show change time, most recent last
  alias lu='ls -ltur'        # sort by and show access time, most recent last
  alias lt='ls -ltr'         # sort by date, most recent last
  alias lm='ls -al |more'    # pipe through 'more'
  alias lr='ls -lR'          # recursive ls
  alias ld='ls -d */'        # list directories only
  alias ll='ls -l'
  alias lsr='tree -Csu'     # nice alternative to 'recursive ls'
  alias dirtree="ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/ /' -e 's/-/|/'"

  #git shortcuts
  alias git-commit-count="git log --pretty=format:'' | wc -l"
  alias gc='git commit -m'
  alias gpom='git push origin main'
  alias gpomr='git push origin master'
  alias ga='git add'
  alias gpr='find . -type d -name .git -exec sh -c "cd \"{}\"/../ && pwd && git pull" \;'
  alias gclone='git clone git clone git@github.com:GITHUBID/$1'  # update your gitorganization or ID here
  alias gittree="git log --all --decorate --oneline --graph"  # commandline push history

  # HPC
  alias si="sinfo -o \"%20P %5D %14F %8z %10m %10d %11l %16f %N\""
  alias sq="squeue -o \"%8i %30j %4t %10u %20q %20a %10g %20P %10Q %5D %11l %11L %R %Z\""

###############################
## Never ending history:  never lose a command due to a history limit.
###############################

# Making never ending history!
  export HISTFILESIZE=
  export HISTSIZE=
  export HISTTIMEFORMAT="[%F %T] "
  export HISTFILE=~/.bash_eternal_history
  PROMPT_COMMAND="history -a; $PROMPT_COMMAND"
  # Avoid duplicates
  export HISTCONTROL=ignoredups:erasedups
  # When the shell exits, append to the history file instead of overwriting it
  shopt -s histappend
  # After each command, append to the history file and reread it and also add the pwd
  #export PROMPT_COMMAND='hpwd=$(history 1); hpwd="${hpwd# *[0-9]*  }"; if [[ ${hpwd%% *} == "cd" ]]; then cwd=$OLDPWD; else cwd=$PWD; fi; hpwd="${hpwd% ### *} ### $cwd"; history -s "$hpwd"; history -a; history -c; history -r'
  #export PROMPT_COMMAND="${PROMPT_COMMAND:+$PROMPT_COMMAND$'\n'}history -a; history -c; history -r"




###############################
## FUNCTIONS: Scripts can be added as functions in this file so you don't have to add it to your path.
###############################

pathadd()  # When you are in a hurry and want to add the current path to your PATH variable; not perminent
  { export PATH=$PATH:$1; }

function extract()      # Handy Extract Program that will extract any file
  {
       if [ -f $1 ] ; then
           case $1 in
               *.tar.bz2)   tar xvjf $1     ;;
               *.tar.gz)    tar xvzf $1     ;;
               *.bz2)       bunzip2 $1      ;;
               *.rar)       unrar x $1      ;;
               *.gz)        gunzip $1       ;;
               *.tar)       tar xvf $1      ;;
               *.tbz2)      tar xvjf $1     ;;
               *.tgz)       tar xvzf $1     ;;
               *.zip)       unzip $1        ;;
               *.Z)         uncompress $1   ;;
               *.7z)        7z x $1         ;;
               *.tar.xz)    tar xJvf $1     ;;
               *)           echo "'$1' cannot be extracted via >extract<" ;;
           esac
       else
           echo "'$1' is not a valid file"
       fi
  }

# Find a file with a pattern in name:
function ff() { find $(pwd -P) -type f -iname '*'$*'*' -ls ; }
function fd() { find $(pwd -P) -type d -iname '*'$*'*' -ls ; }

#it puts line number for grep matches, but only when it is at the end of the pipe
function grep()
  {
      if [[ -t 1 ]]; then
          command grep -n "$@"
      else
          command grep "$@"
      fi
  }

function body()
  {
  # print the header (the first line of input)
  # and then run the specified command on the body (the rest of the input)
  # use it in a pipeline, e.g. ps | body grep somepattern
      IFS= read -r header
      printf '%s\n' "$header"
      "$@"
  }
```
