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
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Large Scale Storage (LSS)
The LSS is a storage service for Iowa State faculty and staff. It is useful for research labs that need to store large amounts of data including sequencing data, images, and other large files.
<br>

## Access
Space on LSS can be requested from <a href="https://lss.apps.it.iastate.edu/" target="_blank">ISU LSS website ⤴</a>.
<br>
Once you have purchased space on LSS, folders can be mounted to your computer directly. Check out this guide on <a href="https://researchit.las.iastate.edu/guides/lss/mount_folders/" target="_blank">how to mount folders from LSS ⤴</a>.
<br>

## Data Transfer
LSS is mounted on data transfer nodes of each cluster meaning you can use data transfer node of the cluster you are using to transfer data from that cluster to LSS. Other options can be found on the data transfers section of the <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro#data-transfers" target="_blank">ISU HPC ⤴</a> intro page.

### *How to copy data from Nova to LSS?*

```
# Login to novadtn:
ssh <ISU-NetID>@novadtn.its.iastate.edu
The /lss/research directory contains directories of different research groups/labs. Store files in your lab directory.

# Copy your files to LSS:
scp /home/$USER/myfile /lss/research/your-lab/
```

The same method applies to other clusters as well, move data to LSS using data transfer node of the cluster in use.
<br>
<br>
