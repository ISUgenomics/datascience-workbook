---
title: "ISU HPC: LSS system"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 613.4
level: 3
categories: ["HPC, computing", "command-line", "computing-tools", "data-storage"]
tags: ["ISU-HPC", "lss-storage"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Large Scale Storage (LSS)
The LSS is a storage service for Iowa State faculty and staff. It is useful for research labs that need to store large amounts of data including sequencing data, images, and other large files.


## Access

Space on LSS can be requested from <a href="https://lss.apps.it.iastate.edu/" target="_blank">ISU LSS website ⤴</a>. <base class="mb">
Once you have purchased space on LSS, folders can be mounted to your computer directly. Check out this guide on <a href="https://researchit.las.iastate.edu/guides/lss/mount_folders/" target="_blank">how to mount folders from LSS ⤴</a>.


## Data Transfer
LSS is mounted on data transfer nodes of each cluster meaning you can use data transfer node of the cluster you are using to transfer data from that cluster to LSS. Other options can be found on the data transfers section of the <a class="t-links" href="613.1" section="#data-transfers">ISU HPC Network</a> intro page.


### *How to copy data from Nova to LSS?*

```bash
# Login to novadtn:
ssh <ISU-NetID>@novadtn.its.iastate.edu
```
*The* `/lss/research` *directory contains directories of different research groups/labs. <br>Store files in your lab directory.*

```bash
# Copy your files to LSS:
scp /home/$USER/myfile /lss/research/your-lab/
```

The same method applies to other clusters as well, move data to LSS using data transfer node of the cluster in use.
