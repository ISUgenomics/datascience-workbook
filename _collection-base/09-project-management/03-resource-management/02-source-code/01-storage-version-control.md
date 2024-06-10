---
title: "<b>Storage & Version Control</b>"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "intro"
order: 932.1
level: 2
categories: ["project-management", "resources", "version-control", "documentation", "code-development", "developer-tools"]
tags: ["standards", "source-code", "code-storage", "git", "subversion", "SVN", "Mercurial", "repository"]
attributes: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Version control is a system for **managing changes to software projects, documents, or any other set of files**. It provides a history of changes, so you can track who made changes and when, and it allows multiple people to collaborate on a project while ensuring that changes are properly managed and coordinated.


## Version Control Tools

In general, <a href="https://git-scm.com" target="_blank">Git  ⤴</a> is considered to be the most popular version control system today, due to its wide adoption, powerful features, and active community of users. There are a few other version control tools available, including <a href="https://subversion.apache.org/" target="_blank">Subversion (SVN)  ⤴</a> and <a href="https://www.mercurial-scm.org/" target="_blank">Mercurial  ⤴</a>, that are used for managing code and data in software development and other projects.

## <b class="prefix-2"></b>GIT

<a href="https://git-scm.com" target="_blank">Git  ⤴</a> is a **distributed version control system**, which means that each user has a full copy of the code repository on their own computer, rather than relying on a central repository. **Git is widely used by software developers and organizations.** This makes it ideal for teams working on large projects or for individuals who need to work offline. It was created by Linus Torvalds in 2005, and it has since become one of the most popular version control systems in use today. Git is known for its speed, reliability, and flexibility, and it is used by organizations of all sizes, from small open-source projects to large multinational corporations.

If you are planning to contribute to any GIT-based repository, it is worthwhile for you to learn more about the useful options offered by git. In this case, follow the hands-on tutorials: <br>

<button class="btn c-good mr">TUTORIAL</button> <a class="t-links" href="932.2"></a> <br>
<button class="btn c-alert mr">CHEATSHEET</button> <a class="t-links" href="932.21"></a>

In the next [section: Types of GIT-based repositories](#types-of-git-based-repositories), you will learn which popular **online platforms hosting repositories** use Git-based version control.


## <b class="prefix-2"></b>Subversion (SVN)

<a href="https://subversion.apache.org/" target="_blank">Subversion (SVN)  ⤴</a> is a **centralized version control system**, which means that all data is stored in a central repository. It is designed to be easy to use and provides a number of features that make it a popular choice for many teams, including:
* version history,
* branching and merging,
* and easy collaboration between multiple users.

Subversion is also known for its **stability, scalability, and compatibility** with a wide range of platforms and tools.

## <b class="prefix-2"></b>Mercurial

<a href="https://www.mercurial-scm.org/" target="_blank">Mercurial  ⤴</a> s a **distributed version control system** that is similar to Git. It was created in 2005, and it is widely used by software developers and organizations, especially those who host their projects at <a href="https://bitbucket.org" target="_blank">Bitbucket  ⤴</a>. Mercurial is designed to be **fast and lightweight**, and provides a number of **features for managing complex development workflows**, such as branching, merging, and issue tracking. It is also highly customizable and can be extended through the use of plugins and extensions. **Mercurial is known for its simplicity, performance, and ease of use.**


## Types of `GIT`-based repositories

<a href="https://git-scm.com" target="_blank">Git  ⤴</a> can be used to manage and version control any type of resource that is stored in a file and changes over time, whether it's code, data, documentation, or something else. The key benefit of using Git is that it allows you to **keep track of changes over time & revert back to previous versions** if needed, and collaborate with others on a project.

Git can be used to manage and version control a wide variety of online resources, including:

<table>
  <tr> <th>resource</th> <td width="50%">DESCRIPTION</td> <td class="example"></td></tr>
  <tr> <th>CODE</th> <td>Git is primarily used for version control of software code and applications. This includes source code written in a variety of programming languages such as Python, Java, C++, etc.</td> <td class="bc-example"><a href="https://github.com/ISUgenomics/data_wrangling" target="_blank">ISUgenomics/data_wrangling</a> repo hosted on GitHub, contains mini python apps for common tasks in data processing</td></tr>
  <tr> <th>WEB DEVELOPMENT</th> <td>Git can be used to manage changes to HTML, CSS, and JavaScript files that make up a website or web application.</td> <td class="bc-example"><a href="https://github.com/ISUgenomics/datascience-workbook" target="_blank">ISUgenomics/datascience-workbook</a> repo hosted on GitHub, contains source code of this workbook (rendered as GitHub Pages)</td></tr>
  <tr> <th>DATA</th> <td>Git can be used to manage and version control data files, such as CSV, JSON, or Excel files. This is particularly useful in data science projects where you might want to keep track of changes to your data sets over time.</td> <td class="bc-example"><a href="https://github.com/ISUgenomics/ideogram_db" target="_blank">ISUgenomics/ideogram_db</a> repo hosted on GitHub, contains database of chromosome bands data files</td></tr>
  <tr> <th>DOCUMENTATION</th> <td>Git can be used to manage documentation, such as project reports, user manuals, and technical specifications.</td> <td class="bc-example"><a href="https://github.com/ISUgenomics/2021_workshop_transcriptomics" target="_blank">ISUgenomics/2021_workshop_transcriptomics</a> repo hosted on GitHub, contains transcriptomic analyses presented during workshop</td></tr>
  <tr> <th>CONFIGURATION FILES</th> <td>Git can be used to manage configuration files for servers, applications, and other types of systems. This allows you to keep track of changes to your configuration files and collaborate with other people on the configuration of a system.</td> <td class="bc-example"><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank">ohmyzsh/ohmyzsh</a> repo hosted on GitHub, contains community-driven framework for managing your zsh configuration</td></tr>
  <tr> <th>BINARY FILES</th> <td>Git can also be used to manage and version control binary files, such as images, videos, and audio files.</td> <td class="bc-example"><a href="https://github.com/Tencent/tencent-ml-images" target="_blank">Tencent/tencent-ml-images</a> repo hosted on GitHub, contains open-source multi-label image database</td></tr>
  <tr> <th>BOOKS</th> <td>Git can be used to manage book projects, academic publications and technical manuals. This helps in tracking changes, collaborating with multiple authors, and maintaining versions of the manuscript.</td> <td class="bc-example"><a href="https://github.com/christophM/christophm.github.io" target="_blank">christophM/christophm.github.io</a> repo hosted on GitHub, contains a book "Interpretable Machine Learning" rendered via <a href="https://christophm.github.io/interpretable-ml-book/" target="_blank">GitHub Pages</a></td></tr>
</table>
