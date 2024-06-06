---
title: "Various methods of software installation"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "intro"
order: 230
level: 1
categories: ["system-setup", "office-tools", "graphic-tools", "collaboration-tools", "computing-tools", "developer-tools"]
tags: ["local-machine", ".dmg", ".pkg", ".exe", ".zip", "source-code", "GUI", "terminal", "linux", "windows", "macOS", "App Store", "package-manager"]
attributes: ["example", "installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

## Various Methods of Installation

Depending on how the software is distributed and how popular it is different installation methods are suitable. This guidebook will teach you how to install applications to MacBook Pro that are available in the Apple store or downloaded directly from the distributor's website from the Internet. You will also learn how to install various packages using commands in the terminal. For those who are part of the academic community, in particular Iowa State University, we will also show you how to take advantage of an academic license for software that usually requires a paid license.

### Installation via App Store

The **App Store** is an in-built store platform available on your MacBook Pro that allows you to browse and install the software. The App Store shortcut &nbsp;<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61Gy0FdwGsIx-u4Zu50BPt9ZxbFmsAbRNFApRrs1-zxoQnpAj6VnvXJ3iY3trykjn3Uc&usqp=CAU" alt="Mac App Store" height="22" width="22" class="inline mb-0 mt-0">&nbsp; is usually visible on your Dock (by default, it is a horizontal menu with icons of pre-installed apps). You can also easily use *Finder* &nbsp;<img src="https://images.macrumors.com/t/5BiCx6nBBb0fGUFWfLHjqaD1zFk=/1200x1200/smart/article-new/2018/02/macos-finder-icon.jpg" alt="Mac App Store" height="22" width="22" class="inline mb-0 mt-0">&nbsp; or *Launchpad* &nbsp;<img src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5fedaca4acad015c2de7b6a1_30_launchpad.png" alt="Mac App Store" height="32" width="32" class="inline mb-0 mt-0">&nbsp; to find the App Store on your system. Once you open the app, a search box is located in the upper left corner. After entering your query key, the matching applications will appear. Many of them are free. Then, click the <span style="background-color:#f2f2f2; color:blue;">&nbsp;get&nbsp;</span> button and then the <span style="background-color:green; color:white;">&nbsp;install&nbsp;</span> button. The newly installed program will appear in the Applications folder, easily accessible via the menu on the left side of the *Finder*. The latter is a graphical interface for browsing the disk contents.

### Installation with Dialog Box

Some programs are available for download on the distributor's website as an installation package. This is usually a single file with the extension *.dmg* (or *.pkg*, *.zip.download*, etc.), which can be run by double-clicking after downloading. Then a graphical interface for the installation appears. The user is asked to accept the license terms through a dialog box, and the installation process runs almost automatically. Often at the end, the user is asked to manually drag the new program into the Applications folder, which is a good thing to do for order and easy access.

### Installation using Terminal

The vast majority of packages and development modules are available for installation using the command line in the terminal. Stable versions of various programs can be automatically downloaded and installed using helper programs such as `brew`.
Once you get familiar with a coding terminal, you can easily install development packages. Many research groups release their software on code hosting platforms such as <a href="https://github.com" target="_blank">GitHub</a> or <a href="https://bitbucket.org/" target="_blank">BitBucket</a>. Such repositories can be downloaded and versioned using <a href="https://git-scm.com" target="_blank">Git</a>.
