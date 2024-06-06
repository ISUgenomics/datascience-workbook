---
title: "GitHub - getting started (class exercise)"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "tutorial"
order: 932.42
level: 4
categories: ["project-management", "resources", "version-control", "documentation", "code-development"]
tags: ["standards", "source-code", "code-storage", "data-storage", "code-sharing", "git", "repository", "GitHub", "hosting-platform"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


<!--
# Git Conceptual Road Map

<div style="text-align:center"><img src="http://blog.podrezo.com/wp-content/uploads/2014/09/git-operations.png" alt="gource" width="700" /></div>

(image source [http://blog.podrezo.com/git-introduction-for-cvssvntfs-users](http://blog.podrezo.com/git-introduction-for-cvssvntfs-users/))
-->

# Git GUIs

## Graphical user interfaces for Git

There are several [GUI tools](https://git-scm.com/download/gui/linux) for working with Git.

These tools may be very helpful for doing things that you don't do every day (when it's difficult to remember the command).

They also provide nice ways to visualize your repository tree and `diff` commits, etc. *I like [SourceTree](https://www.sourcetreeapp.com/).*

<div class="example" markdown="1">
* The [website for our course](https://eeob-biodata.github.io/BCB546X-Fall2017/) is rendered in HTML by GitHub Pages, too. We do this by simply enabling GitHub Pages in the _settings_ of our repository. Then we chose a theme for our pages (i.e., the Minimal theme). These themes run [Jekyll](https://jekyllrb.com/) and there are some nice [Jekyll pages](http://jekyllthemes.org/) out there.
</div>


# <button class="btn exercise">Your First Repository</button>

<div class="exercise" markdown="1">

* Create a new repository on GitHub

* Write a description of the repository in the README.md Markdown file

* Create a new text or Markdown file that says "Hello world" or anything else you'd like to say

* Add this file to your repository and push all the changes to the remote

*Let's take some time to make sure everyone can create a repository. If you have been successful, please help your classmates.*
</div>

<div class="protip" markdown="1">
If your problem is unique, you can always submit a question on Stack Overflow
</div>



# Git Collaboration

<em class="c-header">Now that we all have repositories on GitHub, let's collaborate!</em>

* Get into groups of 2-3.

* Give your collaborators access (push rights) to your repository by inviting them on the GitHub page for your repository.

* Clone your collaborator's repository.

* Add and edit files in your collaborator's repository.

* Commit and push those changes to the remote.


## Working with Others

Once you start working with other people on the same repository, you will encounter some scenarios that we haven't yet covered.

* *What happens when two people commit changes to the repository at the same time?* ???

* *What happens when two people commit changes to the same part of the same file at the same time?!?*

* *What if I really disagree with the changes someone made to the repository?*

<!--
Let's demonstrate what happens when we merge...

???

to revert (hard) use `git reset`

can checkout previous commits temporarily.
-->

## Git can be challenging

* What do you find confusing?

* What did you struggle with when creating a repository?

* What do you think would be helpful to overcome these challenges?
