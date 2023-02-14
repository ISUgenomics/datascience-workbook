---
title: "Project Management Tools"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /09-ProjectManagement/assets/images/09_project_management_banner.png
---

{% include toc %}

# Overview

Project management involves a variety of tasks, that help to plan, organize, and manage the resources needed to successfully complete a project. The specific activities involved will vary depending on the nature of the project, the size and complexity of the organization, and other factors. By nformed and targeted managing different aspects of a project, organizations can increase the likelihood of project success and minimize the risk of delays, cost overruns, or other problems.

There are a few key sections of project management:

* **PROJECT PLANNING** <br>
This involves defining the project scope, goals, and objectives, creating a project timeline, and determining the resources required to complete the project. This helps to ensure that the project stays on track, that resources are allocated effectively, and that the project is completed on time and within budget.

* **RESOURCE MANAGEMENT** <br>
This involves allocating the people, materials, and equipment needed to complete the project, as well as managing and tracking the use of these resources.

* **DATA MANAGEMENT** <br>
This involves organizing and storing the data collected during a scientific project, and ensuring that the data is accessible, secure, and well-documented. This is essential for ensuring the reproducibility of scientific results and for maintaining the credibility of the research.

* **[VERSION CONTROL](#version-control)** <br>
This is a critical aspect of scientific project management, as it allows scientists to keep track of the changes made to their code or data over time. It helps to ensure that scientists can collaborate effectively, keep their work organized, and maintain the integrity of their research.

* **COLLABORATION & COMMUNICATION** <br>
Scientific projects often involve multiple researchers and institutions, and effective collaboration and communication are key to ensuring the success of the project. This includes using tools such as shared data repositories, wikis, and project management software to keep everyone informed and up-to-date on the project's progress.

* **QUALITY ASSURANCE** <br>
This involves ensuring that the data, code, and methods used in a scientific project meet the highest standards for quality and accuracy. This includes regular code and data reviews, audits, and other quality control measures, which help to minimize the risk of errors and improve the overall quality of the research.

* **PROJECT CLOSING** <br>
This involves finalizing the project and making the data and results accessible to the wider scientific community. This includes publishing the results in peer-reviewed journals or online repositories, ensuring that the data is properly documented, and making it available for long-term access and use. This helps to promote transparency, encourage collaboration, and ensure that the results of the project are accessible to future generations of scientists.


# Version Control

Version control is a system for **managing changes to software projects, documents, or any other set of files**. It provides a history of changes, so you can track who made changes and when, and it allows multiple people to collaborate on a project while ensuring that changes are properly managed and coordinated.

## Popular Tools

In general, <a href="https://git-scm.com" target="_blank">Git  ⤴</a> is considered to be the most popular version control system today, due to its wide adoption, powerful features, and active community of users. There are a few other version control tools available, including <a href="https://subversion.apache.org/" target="_blank">Subversion (SVN)  ⤴</a> and <a href="https://www.mercurial-scm.org/" target="_blank">Mercurial  ⤴</a>, that are used for managing code and data in software development and other projects.

### • *GIT*

<a href="https://git-scm.com" target="_blank">Git  ⤴</a> is a **distributed version control system**, which means that each user has a full copy of the code repository on their own computer, rather than relying on a central repository. **Git is widely used by software developers and organizations.** This makes it ideal for teams working on large projects or for individuals who need to work offline. It was created by Linus Torvalds in 2005, and it has since become one of the most popular version control systems in use today. Git is known for its speed, reliability, and flexibility, and it is used by organizations of all sizes, from small open-source projects to large multinational corporations.

If you are planning to contribute to any GIT-based repository, it is worthwhile for you to learn more about the useful options offered by git. In this case, use the hands-on tutorials that provide **instructions for more advanced git commands**:

* <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/02A-github-commands" target="_blank">Tutorial: Git commands (part 1)  ⤴</a>
* <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/02B-github-commands" target="_blank">Tutorial: Git commands (part 2)  ⤴</a>

In the next [section: Types of GIT-based repositories](#types-of-GIT-based-repositories), you will learn which popular **online platforms hosting repositories** use Git-based version control.


### • *Subversion (SVN)*

<a href="https://subversion.apache.org/" target="_blank">Subversion (SVN)  ⤴</a> is a **centralized version control system**, which means that all data is stored in a central repository. It is designed to be easy to use and provides a number of features that make it a popular choice for many teams, including:
* version history,
* branching and merging,
* and easy collaboration between multiple users.

Subversion is also known for its **stability, scalability, and compatibility** with a wide range of platforms and tools.

### • *Mercurial*

<a href="https://www.mercurial-scm.org/" target="_blank">Mercurial  ⤴</a> s a **distributed version control system** that is similar to Git. It was created in 2005, and it is widely used by software developers and organizations, especially those who host their projects at <a href="https://bitbucket.org" target="_blank">Bitbucket  ⤴</a>. Mercurial is designed to be **fast and lightweight**, and provides a number of **features for managing complex development workflows**, such as branching, merging, and issue tracking. It is also highly customizable and can be extended through the use of plugins and extensions. **Mercurial is known for its simplicity, performance, and ease of use.**


## Types of GIT-based repositories

<a href="https://git-scm.com" target="_blank">Git  ⤴</a> can be used to manage and version control any type of resource that is stored in a file and changes over time, whether it's code, data, documentation, or something else. The key benefit of using Git is that it allows you to **keep track of changes over time & revert back to previous versions** if needed, and collaborate with others on a project.

Git can be used to manage and version control a wide variety of online resources, including:



* **CODE** <br>
Git is primarily used for version control of software code and applications. This includes source code written in a variety of programming languages such as Python, Java, C++, etc.<br>
<i><b>Example:</b> <a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">ISUgenomics/data_wrangling  ⤴</a> repo hosted on GitHub, contains mini python apps for common tasks in data processing</i>

* **WEB DEVELOPMENT** <br>
Git can be used to manage changes to HTML, CSS, and JavaScript files that make up a website or web application.<br>
<i><b>Example:</b> <a href="https://github.com/ISUgenomics/datascience-workbook" target="_blank">ISUgenomics/datascience-workbook  ⤴</a> repo hosted on GitHub, contains source code of this workbook (rendered as GitHub Pages)</i>

* **DATA** <br>
Git can be used to manage and version control data files, such as CSV, JSON, or Excel files. This is particularly useful in data science projects where you might want to keep track of changes to your data sets over time.<br>
<i><b>Example:</b> <a href="https://github.com/ISUgenomics/ideogram_db" target="_blank">ISUgenomics/ideogram_db  ⤴</a> repo hosted on GitHub, contains database of chromosome bands data files </i>

* **DOCUMENTATION** <br>
Git can be used to manage documentation, such as project reports, user manuals, and technical specifications.<br>
<i><b>Example:</b> <a href="https://github.com/ISUgenomics/2021_workshop_transcriptomics" target="_blank">ISUgenomics/2021_workshop_transcriptomics  ⤴</a> repo hosted on GitHub, contains transcriptomic analyses presented during workshop </i>

* **CONFIGURATION FILES** <br>
Git can be used to manage configuration files for servers, applications, and other types of systems. This allows you to keep track of changes to your configuration files and collaborate with other people on the configuration of a system.<br>
<i><b>Example:</b> <a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank">ohmyzsh/ohmyzsh  ⤴</a> repo hosted on GitHub, contains community-driven framework for managing your zsh configuration </i>

* **BINARY FILES** <br>
Git can also be used to manage and version control binary files, such as images, videos, and audio files.<br>
<i><b>Example:</b> <a href="https://github.com/Tencent/tencent-ml-images" target="_blank">Tencent/tencent-ml-images  ⤴</a> repo hosted on GitHub, contains open-source multi-label image database </i>

* **BOOKS** <br>
<i><b>Example:</b> <a href="https://github.com/christophM/christophm.github.io" target="_blank">christophM/christophm.github.io  ⤴</a> repo hosted on GitHub, contains a book "Interpretable Machine Learning" rendered via <a href="https://christophm.github.io/interpretable-ml-book/" target="_blank">GitHub Pages  ⤴</a></i>

## Online hosting of Git repos

Git repositories do NOT have to be hosted on online platforms. Git is a distributed version control system, which means that a Git repository can be stored and managed locally on a single machine or on a network of machines.

However, hosting Git repositories on an online platform such as <a href="https://github.com" target="_blank">GitHub  ⤴</a>, <a href="https://gitlab.com" target="_blank">GitLab  ⤴</a>, or <a href="https://bitbucket.org" target="_blank">Bitbucket  ⤴</a> provides several benefits. For example, **hosting your repository on an online platform makes it easier to collaborate with others**, as you can give other people access to your repository and work on it together. Additionally, **online platforms provide a backup** of your repository in case your local machine fails, which helps to ensure that **your content is safe and secure**.

Each platform provides its own set of features and tools for working with Git, and the choice of platform often depends on the specific needs of your project and organization. For example, **GitHub and BitBucket are popular choices for open-source projects**, while GitLab and VSTS are more commonly used for enterprise-level projects.

**Not all repositories in your account need to be public.** It depends on the online platform you use and your account type. <br>
<i>For example, in <b>GitHub</b>, you have the option to make repositories <b>public or private</b>. If you have a free account, you can create unlimited public repositories, but you are limited to a certain number of private repositories. If you have a paid account, you can create unlimited private repositories as well.<br>
Similarly, in <b>GitLab and Bitbucket</b>, you have the option to make repositories public or private. In these platforms, <b>private repositories</b> are usually only available <b>with paid accounts</b>.</i>

### • *GitHub*

<a href="https://github.com" target="_blank">GitHub  ⤴</a> is a web-based platform that provides hosting for Git repositories. It allows you to **create public or private repositories**, collaborate with other people on a project, and track changes over time. GitHub is **widely used by developers and organizations** to manage their code and is one of the most popular Git hosting services available.

Learn more from the **hands-on tutorial** <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/02-intro-to-github" target="_blank">Introduction to GitHub  ⤴</a>, provided in this section of the workbook.

### • *Bitbucket*

<a href="https://bitbucket.org" target="_blank">Bitbucket  ⤴</a> is a code hosting service that **supports multiple version control systems**, including both Git and Mercurial. It provides a range of tools for managing teams and projects, including permissions management, role-based access control, support for large files & binary files, and collaboration features. Bitbucket is **part of the Atlassian suite of tools**, and it integrates well with other Atlassian products such as <a href="https://www.atlassian.com/software/jira" target="_blank">Jira  ⤴</a> *(issue tracking tool)* and <a href="https://www.atlassian.com/software/confluence" target="_blank">Confluence  ⤴</a> *(collaboration and documentation platform)*.

Learn more from the **hands-on tutorial** <a href="https://datascience.101workbook.org/09-ProjectManagement/01-SOURCE-CODE/03-intro-to-bitbucket" target="_blank">Introduction to BitBucket  ⤴</a>, provided in this section of the workbook.

### • *GitLab*

<a href="https://gitlab.com" target="_blank">GitLab  ⤴</a> is another web-based platform for hosting Git repositories. It provides similar features to GitHub and is popular for its integration with Continuous Integration/Continuous Deployment (CI/CD) pipelines.

### • *SourceForge*

<a href="https://sourceforge.net" target="_blank">SourceForge  ⤴</a> is a web-based platform that provides hosting for Git and other types of version control systems. It is **popular among open-source projects** and provides a variety of tools for project management and collaboration, with a focus on community support. SourceForge **supports a wide range of programming languages**, including C/C++, Java, Python, and more.

### • *GitKraken*

<a href="https://www.gitkraken.com" target="_blank">GitKraken  ⤴</a> is a Git client that **provides a graphical user interface** for working with Git repositories. It integrates with a variety of Git hosting services and provides features for collaboration, code review, and project management.

### • *Visual Studio Team Services*

<a href="https://visualstudio.microsoft.com/team-services/" target="_blank">Visual Studio Team Services (VSTS)  ⤴</a> is a cloud-based development platform **provided by Microsoft**. It provides Git version control, continuous integration, and a variety of other tools for software development teams.

### • *AWS CodeCommit*

<a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html" target="_blank">AWS CodeCommit  ⤴</a> is a Git-based source control service that is **part of the Amazon Web Services** (AWS) cloud platform. It provides a secure, scalable, and managed solution for version control that integrates with other AWS services.



___
# Further Reading
* [Introduction to GitHub](02-intro-to-github)
* [Introduction to BitBucket](03-intro-to-bitbucket)
* [Introduction to ZenHub](04-intro-to-zenhub)

* [Documentation Improvement Tools](../02-DOCUMENTATION/01-documentation-improvement-tools)
* [Team Communication Tools](../03-COMMUNICATION/01-team-communication-tools)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-ProjectManagement-LandingPage){: .btn  .btn--primary}
[Previous](../01-intro-to-project-management){: .btn  .btn--primary}
[Next](02-intro-to-github){: .btn  .btn--primary}
