---
title: "Open On Demand (OOD) Connection"
note: (web-based GUI)
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 624
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

<a href="https://openondemand.org/" target="_blank">Open on Demand  ⤴</a> (OOD) is a **web-based graphical interface for accessing remote computing resources**, such as high-performance computing (HPC) clusters. OOD is a flexible and user-friendly solution that **makes HPC more accessible** to a broader range of users, **including those unfamiliar with the command line** interface (CLI).

## How OOD works?

OOD provides a convenient way for users to **access remote resources through a web browser**. <br>

So, first open your favorite web-browser (e.g., Chrome, Firefox, Safari) and **visit the URL specific to the HPC system** you want to access.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
This URL address for the OOD interface should be available in the documentation or on your organization's website. <br>
For example, you can open the OOD interface for: <br>
<p> - {% include target_link href=612.2 text="Atlas" %} <p>cluster (part of {% include target_link href=612.1 text="SCINet Scientific Computing" %}) </p>at <a href="https://atlas-ood.hpc.msstate.edu/" target="_blank">https://atlas-ood.hpc.msstate.edu/  ⤴</a></p>
<p> - {% include target_link href=612.3 text="Ceres" %} <p>cluster (part of {% include target_link href=612.1 text="SCINet Scientific Computing" %}) </p>at <a href="http://ceres-ood.scinet.usda.gov" target="_blank">http://ceres-ood.scinet.usda.gov  ⤴</a></p>
<p> - {% include target_link href=613.3 text="Nova" %} <p>cluster (part of {% include target_link href=613.1 text="Iowa State University HPC" %}) </p>at <a href="http://nova-ondemand.its.iastate.edu/" target="_blank">http://nova-ondemand.its.iastate.edu/  ⤴</a></p>
</span>
</div><br>

Most resources probably require a login and allow access only to authorized users. Yet the good news is that logging into the OOD interface will require the same user credentials (`username` & `password`) as command-line access. To add an extra layer of security to the user authentication process, you may be asked for a **multi-factor authentication** (MFA). <br>
<i>Typically, it is a several-digit code generated in time intervals in the application (e.g., <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&gl=US&pli=1" target="_blank">Google Authenticator  ⤴</a>, <b>GA</b>) on your mobile device. <br>* You need to install the required app on one of your own devices.</i>

![02_remote_ood_login_ceres.png]({{ images_path }}/02_remote_ood_login_ceres.png)

<div style="background: #dff5b3; padding: 15px;">
<span style="font-weight:800;">NOTE:</span>
<br><span style="font-style:italic;">
Multi-factor authentication is a security mechanism that requires users to provide multiple forms of identification to verify their identity. It adds an extra layer of security to the authentication process, making it more difficult for an unauthorized user to gain access to a system. To ensure that only authorized users can access the resources, the <b>OOD interface typically requires multi-factor authentication</b>.
</span>
</div><br>



When you **log in to the OnDemand website for a given HPC system**, you'll see a graphical interface with different options to choose from, such as launching software applications or accessing data. You can select the tool or application you need by clicking on the corresponding icon or link. Once you've selected an option, OnDemand will launch the requested service in the new tab in your web browser window. You can monitor the list and staus of all your active applications in the `My Interactive Sessions` section of the OOD interface.

![01_hpc_scinet_atlas_ood_options.png]({{ images_path }}/01_hpc_scinet_atlas_ood_options.png)

## What you get with OOD?

The OOD interface is designed to be user-friendly, while providing classic command line operations and broad new features which comes with the graphical interface. All of that in any web browser, without the need to install additional software or manage complex configurations. This can reduce the barrier to entry for HPC and make it easier for researchers and students to access computing resources and perform research.

With Open on Demand, **users can log into a remote cluster** and access its computing resources through a web-based portal. They can **submit jobs, run applications, and access data** stored on the cluster, **all from within their web browser**.


| Command Line Features^                    | Graphical Interface Features                              |
|-------------------------------------------|-----------------------------------------------------------|
| all command line operations               | remote graphical Desktop for the user account             |
| - command line file management            | graphical browsing of the file system                     |
| - command line file transfer              | drag-and-drop file uploads                                |
| - installing and managing software        | opening a terminal in the web browser^                    |
| - scripting, code debugging & compilation | job generator and job scheduling with graphical interface |
| - submitting batch jobs                   | graphical monitoring/management of job status             |
| - managing user permissions               | running software that only operates in the GUI            |
| - accessing compute nodes and storage     | - access to interactive web applications                  |
| - automation of computational tasks       | - access to Jupyter notebooks and RStudio                 |
| - selecting software version/module       | - visualization and data analysis tools |

^ *Command Line Features in the OOD web-based interface are available once you launch `Shell Access` as an interactive session or open a terminal window available in the interactive Desktop.*

---

# Atlas Open OnDemand

Follow the intrutions in the section: {% include target_link href=612.2 section="#open-ondemand-login" text="The web-browser access: Open OnDemand login" %} in the {% include target_link href=612.2 text="SCINet: Atlas Computing Cluster" %} tutorial in this workbook.

---

# Ceres Open OnDemand

Follow the intrutions in the section: <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">Open OnDemand Interface Guide  ⤴</a> at the **SCINet** website.
