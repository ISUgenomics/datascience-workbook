---
title: "SCINet: Juno storage"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 612.4
level: 3
categories: ["HPC, computing", "command-line", "computing-tools", "data-storage"]
tags: ["SCINet", "juno-storage"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Juno Archive Storage

**Juno is a Storage Device** located in Beltsville (MD), being part of **SCINet HPC System**, funded by USDA-ARS. The SCINet initiative's mission is to grow USDA’s research capacity by providing scientists with high-performance computing and professional training support. <br>
Explore the resources to learn more:
* SCINet website: <a href="https://scinet.usda.gov" target="_blank">https://scinet.usda.gov  ⤴</a>
* USDA-ARS website: <a href="https://www.ars.usda.gov/" target="_blank">https://www.ars.usda.gov/  ⤴</a>
* Introduction to SCINet HPC in this workbook: <a class="t-links" href="612.1">What is SCINet?</a>

### *What is Juno used for?*

In addition to its powerful computing capabilities, the SCINet HPC system also offers data storage solutions to efficiently manage and store data and results:
* **Tier 1 Storage**, short-term, <u>not backed up</u> storage on each computing cluster (<a class="t-links" href="612.2">Atlas</a>, <a class="t-links" href="612.3">Ceres</a>) for storing code, data, and intermediate results while performing a series of computational jobs
* **Juno storage**, with a large, multi-petabyte ARS long-term storage, periodically backed up to tape device.

<div class="more" markdown="1">
...about SCINet Data and Storage **recommended procedures** from the <a href="https://scinet.usda.gov/guides/data/data-management#data-and-storage-sop" target="_blank">guide  ⤴</a>, provided by SCINet VRSC.
</div>

## Benefits of using Juno

There are a few reasons why it is a good practice to move final results that are difficult to easily recreate to backed up **Juno archive storage**:

1. **Data security:** <br> *Archiving final results in a backed up storage system helps to protect against data loss due to hardware failure or other unforeseen events.*

2. **Data preservation:** <br> *Archiving final results ensures that the data will be preserved for long-term use and will not be lost due to changes in technology or file formats.*

3. **Collaboration:** <br> *Archiving final results allows for easier sharing and collaboration with other researchers, as the data will be stored in a centralized location that is easily accessible.*

4. **Reproducibility:** <br> *Archiving final results helps to ensure the reproducibility of research findings, as other researchers will be able to access the original data and results.*


# Juno access points

<div class="required" markdown="1">
Juno transfer node: <b>@nal-dtn.scinet.usda.gov</b> <br>
Juno end point via Globus: <b>“NAL DTN 0”</b> (*recommended*) <br>
<em class="footnote bold c-required">^ SCINet account is required to get access</em>
</div>

<div class="protip" markdown="1">
To obtain a SCINet account, a `SCINet Account Request` must be submitted. To learn more, visit the official <a href="https://scinet.usda.gov/about/signup#sign-up-for-a-scinet-account" target="_blank">Sign up for a SCINet account  ⤴</a> guide or use links provided below:
* for ARS-affiliated users: <a href="https://scinet.usda.gov/about/signup#ars-employees" target="_blank">SCINet Account Request  ⤴</a>
* for non-ARS users: <a href="https://scinet.usda.gov/about/signup#non-ars-employees" target="_blank">Non-ARS SCINet Account Request  ⤴</a>
</div>

## **Copy your data to Juno**

> <a href="https://www.globus.org/" target="_blank">Globus Online  ⤴</a> is the recommended method for transferring data to and from the SCINet clusters. It provides faster data transfer speeds compared to `scp`, has a graphical interface, and does not require a GA verification code for every file transfer.

### *using Globus (preferred)*

Follow the step-by-step guide: <a href="https://scinet.usda.gov/guides/data/data-management#detailed-instructions-using-globus-preferred" target="_blank">Globus Data Transfer  ⤴</a> to learn how to transfer data to and from Juno storage.

<b class="c-required">Juno end point via Globus:</b> <b>“NAL DTN 0”</b>

<iframe width="560" height="315" src="https://www.youtube.com/embed/I3lnsCAfx3Q" title="Globus File Transfer by SCINet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### *using command line*

For small datat transfers it is allowed to move data to Juno storage using command line approches, such as `scp` and `rsync`.

1. First, use terminal window on your local machine to **log in to the transfer node** on one of the SCINet clusters:
  * Atlas: `ssh <user.name>@atlas-login.hpc.msstate.edu`
  * Ceres: `ssh <user.name>@ceres-dtn.scinet.usda.gov`

2. Then, use `rsync` command to synchronize (move new content or update changes) in your `project_name` directory:
  ```bash
rsync -avz --no-p --no-g ttt nal-dtn.scinet.usda.gov:/LTS/project/<project_name>/
  ```

<div class="warning level-1" markdown="1">
Note, the organization of the file system is slightly different on: <br>
<u>computing clusters</u>: `/project/project_name` and <br>
<u>Juno storage</u>: `/LTS/project/project_name`.
</div>
