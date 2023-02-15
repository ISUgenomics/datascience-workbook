---
title: "Viewing PDF Files using X11 SSH connection"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [07. Data Acquisition and Wrangling](../00-DataParsing-LandingPage.md) / [1. Remote Data Access](01-remote-data-access.md) / [1.3 Remote Data Preview without Downloading](04-0-remote-data-preview.md) / **1.3.2 Viewing PDF Files using X11 SSH connection**

---


# Introduction

### PDF files ###

Most HPC's allows X11 forwarding. You can enable this when you are logging in to the remote host using the `-X` option. For eg.,
```
ssh -X arnstrm@condodtn.its.iastate.edu
```
Once logged in, you can now open any GUI interface programs on the remote-host and it appears as a new window in your local machine. Although, there are plenty of program options to open a `pdf` file, you can almost always find the `firefox` browser in every machine. This should be sufficient to open a `PDF` file. To get started, type:
```
firefox
```

A new window will open, then go to ```file``` >> ```open file``` >> _select the pdf file you want to open_ .
If you don't find the menu tab, pressing ```alt``` + ```f``` should bring up the ```file``` menu


### PNG files ###

Again, you need X11 forwarding enabled to do this. If your machine has ```imagemagick``` module installed, load it:

```
module load imagemagick
```
To open any picture files, you can just do:

```
display filename.png
```

If you don't have this program installed, you can try the ```firefox``` method. Although, to view ```png``` files, you may have to install the addon before you open the file. Addons are easy to add, once the firefox is opened, press ```ctrl``` + ```shift``` + ```A```, that will open ```add-ons``` page (you can also just type ```about:addons``` to open this). Search for [_Perfect View_](https://addons.thunderbird.net/en-us/firefox/addon/perfect-view/?src=dp-dl-othersby) add-on, and add it to your ```firefox```. Now you can open the file normally as you opened the ```pdf``` files.







___
# Further Reading
* [1.3.3 Mounting Remote Folder on Local Machine](04-3-tutorial-mount-remote-folder)

* [2. Data Manipulation](../02-DATA-MANIPULATION/01-data-manipulation)
* [3. Data Wrangling: ready-made apps](../03-DATA-WRANGLING-APPS/00-data-wrangling-apps)

___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](04-1-tutorial-view-text-files-unix){: .btn  .btn--primary}
[Next](04-3-tutorial-mount-remote-folder){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
