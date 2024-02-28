---
title: "GIT Commands"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "cheatsheet"
order: 932.21
level: 4
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [09. Project Management](../../00-ProjectManagement-LandingPage.md) / [3. Resource Management](../00-intro-resource-management) / [3.3. Storage & Version Control](01-storage-version-control.md) / [3.3.1 GIT - a distributed version control system](02-intro-to-git.md) / **GIT Commands CheatSheet**

---


This is a list of the most commonly used Git commands in command line and VSCode with their functions.


# Git Commands for Command Line

| Category  | Command |  Function  |
|------------|-----------|-----------|
| Creation    | `git init`  | Creates a new local repository  |
|   | `git clone [url]`  | Clones a repository into a newly created directory  |
|   | `git remote add origin [url]` | Sets the origin remote for the repository  |
| Branching  | `git branch`  | Lists all branches in the repository  |
|      | `git branch [branch-name]`   | Creates a new branch  |
|      | `git checkout [branch-name]`     | Switches to the specified branch |
|      | `git merge [branch]`   | Merges the specified branch into the current branch  |
| Updating   | `git push origin [branch]`   | Pushes the branch to the remote repository  |
|     | `git pull` | Fetches and merges changes from the remote repository |
|     | `git fetch` | Retrieves the latest changes from the remote repository without merging |
|    | `git remote -v`   | Lists all the remote repositories  |
| Snapshotting     | `git add [file]` | Adds a file to the staging area    |
|  | `git commit -m "[message]"` | Commits the staged changes with a descriptive message |
|  | `git status` | Shows the status of files in the working directory |
| Configuration  | `git config --global user.name "[name]"`   | Sets the name you want attached to your commit transactions  |
|   | `git config --global user.email "[email address]"` | Sets the email you want attached to your commit transactions   |
| Tagging | `git tag`  | Lists all tags in the repository  |
|   | `git tag [tag-name]`  | Creates a new tag at the current commit  |
|   | `git push --tags`   | Pushes all tags to the remote repository |
| Working with Changes  | `git diff`   | Shows the differences between the working directory and the staging area  |
|   | `git diff --staged`  | Shows the differences between the staging area and the last commit  |
|  | `git restore [file]` | Discards changes in the working directory and restores the file to the last commit    |
|   | `git rm [file]`  | Removes a file from both the working directory and the staging area |
|   | `git mv [old-path] [new-path]`  | Renames or moves a file  |
| Commit History        | `git log`   | Displays the commit history in chronological order   |
|   | `git log --oneline` | Displays the simplified one-line commit history   |
|   | `git show [commit]`   | Shows the details of a specific commit      |
|   | `git blame [file]`  | Displays the commit and author information for each line of a file  |
| Stashing Changes | `git stash` | Temporarily saves changes that are not ready to be committed |
|   | `git stash list`  | Lists all the stashes in the repository     |
|   | `git stash apply [stash]` | Applies a specific stash to the working directory  |
|   | `git stash drop [stash]` | Discards a specific stash |
|  | `git stash pop` | Applies the most recent stash and removes it from the stash list |
| Reverting Changes | `git revert [commit]`| Creates a new commit that undoes the changes made in a specific commit |
|  | `git reset [commit]`  | Moves the current branch to a specific commit, discarding commits after it |
| Remote Repositories | `git remote add [name] [url]` | Adds a new remote repository  |
|   | `git remote remove [name]` | Removes a remote repository |
|   | `git remote rename [old-name] [new-name]` | Renames a remote repository  |
|  | `git fetch [remote]` | Retrieves the latest changes from a remote repository |
|  | `git pull [remote] [branch]` | Fetches changes from a remote repository and merges them into the current branch |



<br>

# VS Code Git Commands

<a href="https://datascience.101workbook.org/04-DevelopmentEnvironment/01A-tutorial-VSCode" target="_blank">VSCode ⤴</a> has its internal terminal where you can use the command line Git commands. In addition, VSCode also has a command palette `Ctrl+Shift+P` which can be used for Git and other commands. Following is a list of most common commands in that palette, additional commands can be searched for within the palette.

| Category | Command        |  Function   |
|------|----------------|-------------|
| Creation | `Git: Initialize Repository` | Initializes a Git repository in the current workspace |
| | `Git: Clone`  | Clones a remote repository into the current workspace |
| Updating | `Git: Add`    | Adds changes in the working directory to the staging area |
| | `Git: Commit` | Commits the staged changes with a descriptive message |
| | `Git: Push`   | Pushes the committed changes to the remote repository |
| | `Git: Pull`   | Fetches and merges changes from the remote repository |
| | `Git: Fetch`  | Retrieves the latest changes from the remote repository without merging |
| Branching | `Git: Switch Branch`  | Switches to the specified branch   |
| | `Git: Create Branch` | Creates a new branch  |
| | `Git: Merge Branch`  | Merges the specified branch into the current branch  |
| | `Git: Pull from...`  | Pulls changes from a specific remote branch  |
| Stashing Changes  | `Git: Stash Changes`  | Temporarily saves changes that are not ready to be committed  |
|  | `Git: Apply Stashed Changes` | Applies the most recent stash to the working directory  |
| | `Git: Stashed Changes`    | Lists all the stashes in the repository  |
| | `Git: Drop Stashed Changes`   | Discards the most recent stash  |
| Reverting Changes | `Git: Revert Changes`  | Reverts the changes made in the selected commit |
| | `Git: Reset Changes` | Discards changes in the working directory since the last commit |
| Remote Repositories   | `Git: Add Remote`  | Adds a new remote repository   |
| | `Git: Remove Remote`   | Removes a remote repository    |
| | `Git: Rename Remote`  | Renames a remote repository  |



<br>
<br>

___
# Further Reading
* [3.3.2 Online Hosting Platforms for GIT Repositories](03-repo-hosting-platforms)
  * [Introduction to GitHub](04-intro-to-github)
  * [GitHub for advanced users](04A-github-advanced)
  * [Introduction to BitBucket](05-intro-to-bitbucket)

* [3.4 Documentation Improvement Tools](../02-DOCUMENTATION/01-documentation-improvement-tools)

* [4. Quality Assurance](../../03-PRODUCTIVITY/00-quality-assurance)
* [5. Project Closing](../../04-PUBLICATION/01-project-closing)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-ProjectManagement-LandingPage){: .btn  .btn--primary}
[Previous](02-intro-to-git){: .btn  .btn--primary}
[Next](03-repo-hosting-platforms){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
