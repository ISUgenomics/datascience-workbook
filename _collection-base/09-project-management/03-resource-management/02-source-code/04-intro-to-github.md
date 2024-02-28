---
title: "Introduction to GitHub"
layout: single
author: Andrew Severin
author2: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "tutorial"
order: 932.4
level: 4
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [09. Project Management](../../00-ProjectManagement-LandingPage.md) / [3. Resource Management](../00-intro-resource-management) / [3.3. Storage & Version Control](01-storage-version-control.md) / [3.3.2 Online Hosting Platforms for GIT Repositories](03-repo-hosting-platforms.md) / **Introduction to GitHub**

---


# Introduction

<a href="https://github.com/" target="_blank">GitHub  ⤴</a> is a cloud-based hosting platform that provides developers a space to store their projects, collaborate with others, and version-control their code.  There are three primary use cases for using a version control platform like GitHub in science:
  * Sharing of bioinformatics **scripts**
  * Bioinformatic **Program development**
  * **Documentation** of bioinformatic analyses

**Probably the most important use-case for new users is documentation.** <br>
For those transitioning from a wet-lab, GitHub repos can be thought of as the `equivalent to a web-lab notebook`, where every command performed in a bioinformatics analysis is recorded with an explanation as to why it was performed, when it was performed (date) and where it was performed (pwd).

**Github documents can be written using markdown.** <br>
See <a href="https://datascience.101workbook.org/09-ProjectManagement/02-DOCUMENTATION/02-intro-to-markdown" target="_blank">Introduction to Markdown  ⤴</a> tutorial as a good starting point.

**GitHub leverages  the power of Git distributed version control system.** <br>
`Git`, a distributed version control system, tracks changes to files over time, making it ideal for team-based work. Therefore, when used together, GitHub and Git create a robust system for code management, collaboration, and open-source contribution.

## Version Control Systems

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Version control systems are software tools that help manage changes to source code over time, allowing multiple contributors to work collaboratively and track modifications, enabling easy recovery of previous versions if needed.
</span>
</div><br>

<span style="color: #ff3870;font-weight: 500;"> To learn more about Version Control Systems, see the introduction to <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/01-storage-version-control" target="_blank">Storage & Version Control  ⤴</a> in the <a href="https://datascience.101workbook.org/09-ProjectManagement/00-ProjectManagement-LandingPage" target="_blank">09. Project Management  ⤴</a> section of this workbook.</span>

### What VCS allows you to do?

* Track changes made to each file
* Revert the entire project or a single file to a previous version
* Review changes made over time
* View who modified the file (and `blame` them for something if necessary)
* Collaborate with others without overwriting their work or risk file corruption, etc.
* Have multiple independent **_branches_** of the same repository and make changes without
effecting others' work.
* And more...

### GitHub uses `GIT` VCS

<a href="https://github.com/" target="_blank">GitHub  ⤴</a> utilizes <b><a href="https://git-scm.com/" target="_blank">Git  ⤴</a></b>, a distributed version control system that tracks changes in files over time, perfect for facilitating collaboration among multiple contributors. As a cloud-based hosting platform, GitHub provides a space for developers to store their `Git-initialized projects` and manage versions of their code. Thus, the combination of **GitHub** and **Git** forms a robust infrastructure for effective code management, team collaboration, and open-source contributions.

<span style="color: #ff3870;font-weight: 500;"> To learn more about <b>GIT</b>, see the practical tutorial <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/02-intro-to-git" target="_blank">GIT - a distributed version control system  ⤴</a> in the <a href="https://datascience.101workbook.org/09-ProjectManagement/00-ProjectManagement-LandingPage" target="_blank">09. Project Management</a> / <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/01-storage-version-control" target="_blank">Storage & Version Control  ⤴</a> section of this workbook.</span>

Before we delve into the specifics of [getting started with GitHub](#how-to-get-a-github-account), it's crucial to **first revisit a few fundamental concepts of Git**, the version control system used for synchronizing your local changes with the remote GitHub repository.


### Why to &#x2665; Git?

* **Git manages a filesystem as a set of snapshots.**

  * Snapshots are called _commits_

![](https://git-scm.com/book/en/v2/book/01-introduction/images/snapshots.png)

(image source:
[https://git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics))

* **Almost every interaction with Git happens locally.**

<div style="text-align:center"><img src="https://git-scm.com/book/en/v2/book/01-introduction/images/areas.png" alt="gource" width="650" /></div>

(image source [https://git-scm.com](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics))

* **A remote host adds an additional level to a Git repository.**

<div style="text-align:center"><img src="https://2.bp.blogspot.com/-w2Z0FGVzygM/WBoAt2kuuCI/AAAAAAAABtU/voWHlUobfl8jB5-5NuSZD0BlN3A9jdMtgCLcB/s1600/basic-remote-workflow.png" alt="Drawing" width="425" /></div>

(image source [https://www.git-tower.com](https://www.git-tower.com/learn/git/ebook/en/command-line/remote-repositories/introduction))


* **Also, Git allows for collaboration and back-up.**

---
# How to get a Github account

Signing up for an account is very easy.  Just go to the  [signup webpage](https://github.com/join?source=header-home) and fill out the form.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">Most choose the free Unlimited public repositories option and don't set up an organization right away.</span>
</div><br>

![01-github_website.png]({{ images_path }}/01-github_website.png)

After you have an account, and if you are a researcher or educator you can request a free upgrade at [about-github-education-for-educators-and-researchers/](https://help.github.com/articles/about-github-education-for-educators-and-researchers/).

---

# Setting up your Authentication key to streamline remote access

## Authentication with a SSH key

Passwords are not always secure and can be annoying to type.

* SSH keys are much more secure and allow you to log in without typing your password
(or just a different, simpler passphrase).
* When you generate a key, you create two things: a public key and a private key.
* You place the public key on any server and then unlock it by connecting to it with a client that already has the private key.
* When the two match up, the system unlocks without the need for a password.
* SSH keys are also very important for using Git with remote hosts (e.g., GitHub)
---

## Setup Authentication with a SSH key

Log in to the `Remotemachine`

```
ssh <yourID>@remoteMachine
```
or open a terminal on your local machine.

Create the key pair in your home directory:

```
$ ssh-keygen -t rsa
```

Once the `ssh-keygen` command has been issued, you will be asked a few questions:

```
Enter file in which to save the key (/home/yourID/.ssh/id_rsa):
```

You can just hit _enter_ here and it should save it to the file path given.

```
Enter passphrase (empty for no passphrase):
```

 Here is where you decide if you want to password-protect your key. The downside, to having a passphrase, is then having to type it in each time you use the Key Pair.

---
## Create the SSH key

```
$ ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/home/userid/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/userid/.ssh/id_rsa.
Your public key has been saved in /home/userid/.ssh/id_rsa.pub.
The key fingerprint is:
4a:dd:0a:c6:35:4e:3f:ed:27:38:8c:74:44:4d:93:67 userid@Arrow
The key's randomart image is:
+--[ RSA 2048]----+
|          .oo.   |
|         .  o.E  |
|        + .  o   |
|     . = = .     |
|      = S = .    |
|     o + = +     |
|      . o + o .  |
|           . o   |
|                 |
+-----------------+
```

---

## Copy SSH key to GitHub

You now have a file called `id_rsa.pub` in your `.ssh` folder.

```
cat id_rsa.pub
```

```
[userid@hpc-class ~]$ cat .ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8QgicqcpFPeyYZhJFW5lBTAdAjHBaYzLwH3l7+lrdmpEKMMMhXMZV5ucxN5WzWU/ERYviYQvQ8NBzkSuHo+SgNJkufF92UqeHIfI/KqgVEGbQn6NGfa5WFBgWZAJAjMzUUrAhJ2qsBez4M1f70os1S2SNcNfoFAJRdWEGE8SX2lpww8+VdCOY6ONw3AYbZbrZtn/ua2hJg+XjYb3T04ggV6TNyV4nnN5r2pRIjJA5OBX1TWcB9HOE4ZIGZoZlk5OYuUJ5rOfuzVLqanWayB3ujuPxW3IUmI6XJt7uDc1N5iVNs2FusjSZmuggWtzCw/pb7EExvNxYMYOxCsewjE0L userid@<remotehost>
```

Copy the entire contents of this file and add it to your GitHub account.

---

# How to Add SSH key to GitHub Repo

Add your new ssh key to your GitHub account by going to [_SSH and GPG keys_](https://github.com/settings/profile/keys) in your profile Settings.  You will need to be logged into GitHub for the above link to work.

Learn details from the most recent docs provided at the GitHub official website: <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account" target="_blank">Adding a new SSH key to your account  ⤴</a>


---

Contibutions for this markdown document came from Matt Hufford and was modified with permission from his [BCB546](https://github.com/EEOB-BioData/BCB546X-Fall2017/tree/master/Week_03/) course.  Check out his amazing power point he created at the above link.


___
# Further Reading
* [GitHub for advanced users](04A-github-advanced)
* [Introduction to BitBucket](05-intro-to-bitbucket)

* [3.4 Documentation Improvement Tools](../02-DOCUMENTATION/01-documentation-improvement-tools)

* [4. Quality Assurance](../../03-PRODUCTIVITY/00-quality-assurance)
* [5. Project Closing](../../04-PUBLICATION/01-project-closing)


___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-ProjectManagement-LandingPage){: .btn  .btn--primary}
[Previous](03-repo-hosting-platforms){: .btn  .btn--primary}
[Next](04A-github-advanced){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
