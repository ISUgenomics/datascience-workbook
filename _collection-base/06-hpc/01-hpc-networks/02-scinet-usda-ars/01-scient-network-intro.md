---
title: "SCINet Scientific Computing: HPC, high-speed networking and training"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "intro"
order: 612.1
level: 2
categories: ["hpc", "computing-tools", "documentation"]
tags: ["HPC-system", "SCINet", "super-computer", "computer-power", "hpc-cluster", "ceres-cluster", "atlas-cluster", "juno-storage", "HPC-tasks", "scientific-computing"]
attributes: ["user-guide"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# What is SCINet?

The SCINet initiative is an effort by the USDA Agricultural Research Service (<a href="https://www.ars.usda.gov/" target="_blank">ARS  ⤴</a>) to grow USDA’s research capacity by providing scientists with access to
1. high-performance computing clusters [**SCINet HPC Systems**]
2. high-speed networking for data transfer
3. training in scientific computing
4. virtual research support


### *Website*

An official **SCINet website** is hosted on the United States government domain at <b><a href="https://scinet.usda.gov" target="_blank">https://scinet.usda.gov  ⤴</a></b>

<div class="protip" markdown="1">
Use the SCINet website to request SCINet accounts, access user guides, get technical support, and find out about upcoming and previous training events.
</div>

*This introduction to SCINet features much of its material sourced from the SCINet website. <br>
The SCINet homepage is shown on the screenshoot below.*

![Scinet website]({{ images_path }}/01_hpc_scinet_web.png)


### *Cite SCINet*

Add the following sentence as an acknowledgment **for using CERES** as a resource in your manuscripts meant for publication:

<div class="note before" data-before="" markdown="1">
“This research used resources provided by the SCINet project of the USDA Agricultural Research Service, ARS project number 0500-00093-001-00-D.”
</div>


# **Before you get started**

Before you get started actively using the SCINet resources, perform the A, B, and C steps to familiarize yourself with the SCINet initiative.

**A.** <a class="t-links" href="612.1" section="#a-sign-up-for-a-scinet-account">Sign up for a SCINet account</a>

**B.** <a class="t-links" href="612.1" section="#b-read-the-scinet-policy">Read the SCINet Policy</a>

**C.** <a class="t-links" href="612.1" section="#c-know-where-to-find-help">Know where to find help</a>


### *A. Sign up for a SCINet account*

The **SCINet account is required** to get an access to the SCINet HPC Systems and specialized content of the SCINet resources, such as trainings, recorded workshops, or <a href="https://forum.scinet.usda.gov/login" target="_blank">SCINet Forum  ⤴</a>.

To obtain a SCINet account, a SCINet Account Request must be submitted:
* for ARS-affiliated users: <a href="https://scinet.usda.gov/about/signup#ars-employees" target="_blank">SCINet Account Request  ⤴</a>
* for non-ARS users: <a href="https://scinet.usda.gov/about/signup#non-ars-employees" target="_blank">Non-ARS SCINet Account Request  ⤴</a>

*The approval process depends on the affiliation of the requester:*

![SCINet account]({{ images_path }}/01_hpc_scinet_account.png)

<div class="protip" markdown="1">
Once your request is approved you should get the <i>"Welcome to SCINet"</i> email with further instructions. <br>
<button class="btn more"></button> ...from the official <a href="https://scinet.usda.gov/about/signup#sign-up-for-a-scinet-account" target="_blank">Sign up for a SCINet account  ⤴</a> guide.
</div>


### *B. Read the SCINet Policy*

Reading the SCINet Policy before you get started using the SCINet resources is important for several reasons. The SCINet policy is concise and contain important information about how the resource may be used, including any restrictions or limitations on use. This can help you understand what you can and cannot do with the resource. In particular, you can learn about:
* <a href="https://scinet.usda.gov/about/policies#accounts" target="_blank">Accounts  ⤴</a>
* <a href="https://scinet.usda.gov/about/policies#software" target="_blank">Storage  ⤴</a>
* <a href="https://scinet.usda.gov/about/policies#job-queues" target="_blank">Job Queues  ⤴</a>
* <a href="https://scinet.usda.gov/about/policies#software" target="_blank">Software  ⤴</a>
* <a href="https://scinet.usda.gov/about/policies#data-management" target="_blank">Data Management  ⤴</a>

### *C. Know where to find help*

<table>
  <tr>
    <th><a href="https://scinet.usda.gov/support/faq#faqs" target="_blank">1. read FAQs  ⤴</a></th>
    <th><a href="https://scinet.usda.gov/guides/#scinet-guides-list" target="_blank">2. read GUIDEs  ⤴</a></th>
  </tr>
  <tr>
    <td><img src="{{ images_path }}/01_hpc_scinet_faq.png" width="600px" style="vertical-align: top;"></td>
    <td><img src="{{ images_path }}/01_hpc_scinet_guides.png" width="600px" style="vertical-align: top;"></td>
  </tr>
  <tr>
    <th><a href="https://" target="_blank">3. contact VRSC  ⤴</a></th>
    <th><a href="https://" target="_blank">4. use FORUM  ⤴</a></th>
  </tr>
  <tr>
    <td><img src="{{ images_path }}/01_hpc_scinet_contact.png" width="600px" style="vertical-align: top;"></td>
    <td><img src="{{ images_path }}/01_hpc_scinet_forum2.png" width="600px" style="vertical-align: top;"></td>
  </tr>
</table>


## <em class="level-1">1. read FAQs</em>

It is generally a good idea to **browse the Frequently Asked Questions** (<a href="https://scinet.usda.gov/support/faq#faqs" target="_blank">SCINet FAQ  ⤴</a>) section first because it can save you time and effort. The FAQ section is designed to provide answers to common questions that users may have about the SCINet service.

<div class="protip" markdown="1">
By browsing the FAQ section, you may be able to **quickly find the answer to your question** without having to contact SCINet support team or search through other parts of the website. Overall, browsing the FAQ section can be a useful first step in getting the information you need and can help you save time and effort in the process.
</div>

<i><b>Quick preview of <a href="https://scinet.usda.gov/support/faq#faqs" target="_blank">SCINet FAQ  ⤴</a>below:</b></i>

<details><summary>General Information</summary>

<a href="https://scinet.usda.gov/support/faq#what-is-the-difference-between-ceres-and-scinet" target="_blank">What is the difference between Ceres and SCINet?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#who-is-eligible-for-a-scinet-account" target="_blank">Who is eligible for a SCINet account?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-find-documentation-on-ceres-and-scinet" target="_blank">How do I find documentation on Ceres and SCINet?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-much-does-a-ceres-account-cost" target="_blank">How much does a Ceres account cost?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-much-does-amazon-web-services-aws-cost" target="_blank">How much does Amazon Web Services (AWS) cost?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#who-manages-scinet" target="_blank">Who manages SCINet?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#who-can-i-contact-for-help-using-scinet" target="_blank">Who can I contact for help using SCINet?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-use-basecamp" target="_blank">How do I use Basecamp?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-acknowledge-scinet-in-my-publications" target="_blank">How do I acknowledge SCINet in my publications?  ⤴</a><br>
</details>

<details><summary>Accounts & Login</summary>

<a href="https://scinet.usda.gov/support/faq#how-do-i-get-an-account-i-am-an-ars-employee" target="_blank">How do I get an account (I am an ARS employee)?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-get-an-account-for-non-ars-collaborators-students-or-postdocs" target="_blank">How do I get an account for non-ARS collaborators, students, or postdocs?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-reactivate-my-account" target="_blank">How do I reactivate my account?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-reset-or-change-my-password" target="_blank">How do I reset or change my password?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#what-are-the-scinet-password-requirements" target="_blank">What are the SCINet password requirements?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-login-to-ceres" target="_blank">How do I login to Ceres?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#i-took-my-onboarding-a-long-time-ago-how-do-i-get-a-refresher-course" target="_blank">I took my onboarding a long time ago, how do I get a refresher course?  ⤴</a><br>
</details>

<details><summary>Software</summary>

<a href="https://scinet.usda.gov/support/faq#what-software-is-available-on-scinet" target="_blank">What software is available on SCINet?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-request-software-to-be-loaded-onto-ceres" target="_blank">How do I request software to be loaded onto Ceres?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-install-my-own-software-programs" target="_blank">How do I install my own software programs?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-compile-software" target="_blank">How do I compile software?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#what-is-galaxy" target="_blank">What is Galaxy?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-login-to-scinet-galaxy" target="_blank">How do I login to SCINet Galaxy?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-request-software-to-be-loaded-onto-scinet-galaxy" target="_blank">How do I request software to be loaded onto SCINet Galaxy?  ⤴</a><br>
</details>

<details><summary>Storage Space</summary>

<a href="https://scinet.usda.gov/support/faq#how-much-data-can-i-store-on-ceres" target="_blank">How much data can I store on Ceres?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-request-an-increase-in-storage-space" target="_blank">How do I request an increase in storage space?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-request-access-to-a-project-directory" target="_blank">How do I request access to a project directory?  ⤴</a><br>
</details>

<details><summary>Data Transfer</summary>

<a href="https://scinet.usda.gov/support/faq#how-do-i-get-my-data-onto-and-off-of-ceres" target="_blank">How do I get my data onto and off of Ceres?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-get-my-data-onto-ceres-via-scinet-galaxy" target="_blank">How do I get my data onto Ceres via SCINet Galaxy?  ⤴</a><br>
</details>

<details><summary>Support, Policy, O&M</summary>

<a href="https://scinet.usda.gov/support/faq#what-is-the-virtual-research-support-core-vrsc" target="_blank">What is the Virtual Research Support Core (VRSC)?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-contact-the-vrsc-for-assistance" target="_blank">How do I contact the VRSC for assistance?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#who-is-the-scinet-program-manager" target="_blank">Who is the SCINet program manager?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#what-is-the-scientific-advisory-committee-sac" target="_blank">What is the Scientific Advisory Committee (SAC)?  ⤴</a><br>
</details>

<details><summary>Parallel Computing</summary>

<a href="https://scinet.usda.gov/support/faq#how-do-i-write-a-batch-script-to-submit-a-compute-job" target="_blank">How do I write a batch script to submit a compute job?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#how-do-i-compile-mpi-codes" target="_blank">How do I compile MPI codes?  ⤴</a><br>
</details>

<details><summary>Technical Issues</summary>

<a href="https://scinet.usda.gov/support/faq#my-terminal-window-keeps-freezing-is-there-something-i-can-do-to-stop-this" target="_blank">My terminal window keeps freezing. Is there something I can do to stop this?  ⤴</a><br>
<a href="https://scinet.usda.gov/support/faq#i-log-in-at-the-command-line-but-the-system-keeps-logging-me-out-is-there-something-i-can-do-to-stop-this" target="_blank">I log in at the command line but the system keeps logging me out. Is there something I can do to stop this?  ⤴</a><br>
</details>
<br>

## <em class="level-1">2. read GUIDEs</em>

Reading **user guides** can be a good starting point to get an overview on how to use the SCINet services. You can easily find the links to the User Guides in the top dropdown menu on the <a href="https://scinet.usda.gov" target="_blank">SCINet website  ⤴</a>.

![Scinet website]({{ images_path }}/01_hpc_scinet_guides_menu.png)

* <a href="https://scinet.usda.gov/guides/start" target="_blank">Quick Start  ⤴</a>, to getting started with SCINet
* <a href="https://scinet.usda.gov/guides/" target="_blank">All User Guides  ⤴</a>, to open a grouped list of guides in categories:
  * <a href="https://scinet.usda.gov/guides/#access-guides" target="_blank">Access Guides  ⤴</a> *(login, authentication, VPN, command line, Open OnDemand, nomenclature)*
  * <a href="https://scinet.usda.gov/guides/#resources-guides" target="_blank">Resources Guides  ⤴</a> *(clusters: Ceres & Atlas, cite SCINet, external computing resources)*
  * <a href="https://scinet.usda.gov/guides/#data-guides" target="_blank">Data Guides  ⤴</a> *(data & storage, storage quotas, data transfer including cloud resources)*
  * <a href="https://scinet.usda.gov/guides/#software-guides" target="_blank">Software Guides  ⤴</a> *(loading modules, loading containers, preinstalled software, user-installed software)*
  * <a href="https://scinet.usda.gov/guides/#analysis-guides" target="_blank">Analysis Guides  ⤴</a> *(CLC server; R, Rstudio, Python, Perl; SMRTLINK/Analysis, Galaxy, Geneious)*
  * <a href="https://scinet.usda.gov/guides/#aws-guides" target="_blank">AWS Guides  ⤴</a>


## <em class="level-1">3. contact VRSC</em>

If your question is not on the FAQs list or the answer in the guide is not comprehensive, please **contact the VRSC support team**. <br>
Email is a good way to contact SCINet support team for information or direct help. There are two addresses assigned to different needs:
* **scinet_vrsc@usda.gov**
  * use it for questions or feedback about the website, SCINet newsletter or to contribute content
  * to get technical assistance with your SCINet account
  * to get broad HPC support from the <a href="https://scinet.usda.gov/about/vrsc#the-scinet-virtual-research-support-core" target="_blank">Virtual Research Support Core  ⤴</a> (**VRSC**)
  * Learn more about <a href="https://scinet.usda.gov/support/contact#how-and-when-to-contact-the-vrsc" target="_blank">How and When to Contact the VRSC  ⤴</a>


* **scinet-training@usda.gov**
  * use it for all inquires for help from the SCINet Office


## <em class="level-1">4. use SCINet Forum</em>

Finally, contact other SCINet users on the <b><a href="https://forum.scinet.usda.gov/login" target="_blank">SCINet Forum  ⤴</a></b> to get a quick response to your question.

![Scinet forum]({{ images_path }}/01_hpc_scinet_forum.png)

*The forum is actively monitored by community members who are willing to help others, so you may be able to get an answer to your question in a short amount of time. Another benefit is that you can get a variety of perspectives on your question. By asking your question on a forum, you can get input from multiple people who may have different experiences and expertise. Finally, the SCINet forum can be a good resource for learning more about a particular topic. By reading through previous discussions and questions on the forum, you may be able to learn more about the issue and get ideas for your own questions.*


# SCINet HPC System

A High Performance Computing (HPC) system offers a computational environment that can quickly process data and perform intricate computations at high speeds. To learn more, see the <a class="t-links" href="610"></a>.

The SCINet HPC System is three-component, including:
* **computing nodes** that are connected together and configured to a consistent system environment:
  * <a href="https://scinet.usda.gov/guides/resources/ceres#scinet-ceres" target="_blank">Ceres cluster  ⤴</a>, located in Ames (IA), with more than 9000 compute cores (18000 logical cores) with 110 terabytes (TB) of total RAM, 500TB of total local storage, and 3.7 petabyte (PB) of shared storage.
  * <a href="https://www.hpc.msstate.edu/computing/atlas/" target="_blank">Atlas cluster  ⤴</a>, located in Starkville (MS), with 8260 processor cores, 101 terabytes of RAM, 8 NVIDIA V100 GPUs, and a Mellanox HDR100 InfiniBand interconnect.
* **data storage** to manage and store the data and results:
  * short-term storage on each computing cluster
  * <a href="https://scinet.usda.gov/guides/data/data-management" target="_blank">Juno storage  ⤴</a>, located in Beltsville (MD), with a large, multi-petabyte ARS long-term storage, periodically backed up to tape device.
* **high-speed network** that facilitates efficient data transfer across compute nodes and communication between network components

> In addition to the Ceres and Atlas clusters, there are <a href="https://scinet.usda.gov/guides/resources/external-computing-resources#external-computing-resources" target="_blank">external computing resources  ⤴</a> available to the SCINet community, including <a href="https://scinet.usda.gov/guides/resources/external-computing-resources#amazon-web-services" target="_blank">Amazon Web Services  ⤴</a>, <a href="https://scinet.usda.gov/guides/resources/external-computing-resources#xsede/" target="_blank">XSEDE  ⤴</a>, and the <a href="https://scinet.usda.gov/guides/resources/external-computing-resources#open-science-grid" target="_blank">Open Science Grid  ⤴</a>.

To fully understand the user guides, first familiarize yourself with the <a href="https://scinet.usda.gov/guides/access/glossary#scinet-nomenclature" target="_blank">SCINet nomenclature  ⤴</a>.

## Access Guides

Explore comprehensive user guides in category: <a href="https://scinet.usda.gov/guides/#access-guides" target="_blank">Access Guides  ⤴</a>
* <b><a href="https://scinet.usda.gov/guides/access/login#logging-in-to-scinet" target="_blank">Logging in to SCINet  ⤴</a></b>
  * <a href="https://scinet.usda.gov/guides/access/login#using-ssh-to-connect" target="_blank">Using ssh to Connect  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/login#password-requirements" target="_blank">Password Requirements  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/login#frequently-asked-questions" target="_blank">Frequently Asked Questions  ⤴</a> :
    * *It didn’t ask me for the Verification Code from Google Authenticator. What do I do?*
    * *I can’t find the .ssh folder when saving my config file. Where is it located?*
    * *My password/Google Authenticator Verification Code isn’t showing up when I type it. What is wrong?*
    * *After creating my account and changing my temporary password, I was prompted for my cell phone. Should I include this?*


* <b><a href="https://scinet.usda.gov/guides/access/mfa#what-is-multifactor-authentication" target="_blank">What is Multifactor Authentication?  ⤴</a></b>
  * <a href="https://scinet.usda.gov/guides/access/mfa#google-authenticator-ga-on-android" target="_blank">Google Authenticator (GA) on Android  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/mfa#google-authenticator-ga-on-apple-ios-iphones-and-ipads" target="_blank">Google Authenticator (GA) on Apple iOS iPhones and iPads  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/mfa#authentication-on-your-computer-using-authy" target="_blank">Authentication on your computer using Authy  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/mfa#ga-account-reset" target="_blank">GA account reset  ⤴</a>


* <b><a href="https://scinet.usda.gov/guides/access/vpn#scinet-vpn" target="_blank">SCINet VPN  ⤴</a></b>
  * <a href="https://scinet.usda.gov/guides/access/vpn#anyconnect-vpn" target="_blank">AnyConnect VPN  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/vpn#openconnect-vpn" target="_blank">OpenConnect VPN  ⤴</a>


## **Ceres vs. Atlas clusters**

**General settings**

| feature                    | Ceres                      | Atlas |
|----------------------------|----------------------------|-------|
|login node                  | @ceres.scinet.usda.gov     | @atlas-login.hpc.msstate.edu |
|transfer node               | @ceres-dtn.scinet.usda.gov | @atlas-dtn.hpc.msstate.edu |
|Open OnDemand               | <a href="http://ceres-ood.scinet.usda.gov" target="_blank">http://ceres-ood.scinet.usda.gov</a> | <a href="https://atlas-ood.hpc.msstate.edu" target="_blank">https://atlas-ood.hpc.msstate.edu</a> |
|**home** directory quota    | displayed at login ; <br>type `my_quotas` | type `quota -s` |
|**project** directory quota | displayed at login ; <br>type `my_quotas` | default 1TB ; <br>type `/apps/bin/reportFSUsage -p proj1,proj2,proj3`|
|preinstalled **software** <img width="160"/> | <a href="https://scinet.usda.gov/guides/software/preinstalled#software-preinstalled-on-ceres" target="_blank">Software preinstalled on Ceres  ⤴</a> <br><a href="https://scinet.usda.gov/guides/software/singularity#ceres-container-repository/" target="_blank">Ceres Container Repository  ⤴</a> <img width="300"/>| Singularity container image files in the Ceres Container Repository are synced to Atlas daily. <br>For more information about software on Atlas, see <a href="https://www.hpc.msstate.edu/computing/atlas/" target="_blank">Atlas Documentation  ⤴</a>. |

**Submitting jobs**

| feature   | Ceres               | Atlas               | notes |
|-----------|---------------------|---------------------|-------|
|job scheduler | slurm | slurm | <a href="https://slurm.schedmd.com/quickstart.html" target="_blank">documentation  ⤴</a> ; <a href="https://scinet.usda.gov/guides/use/running-jobs#useful-slurm-commands" target="_blank">Useful SLURM Commands  ⤴</a> ; <br><a href="https://scinet.usda.gov/guides/use/running-jobs#interactive-mode" target="_blank">Interactive Mode (use node live) ⤴</a> ; <br><a href="https://scinet.usda.gov/guides/use/running-jobs#batch-mode" target="_blank">Batch Mode (submit job) ⤴</a> |
|default walltime | partition’s max <br>simulation time | 15 min | see *partitions* row in this table to learn about partition’s max simulation time on Ceres <br> on Atlas max walltime depends on the selected queues|
|default allocation | 2 cores on 1 node | 1 core on 1 node | on Ceres hyper-threading is turned on (the smallest allocation is 2 logical cores) |
|valid account  <img width="100"/> | required <img width="420"/> | required <img width="360"/> | To see which <a href="https://scinet.usda.gov/guides/use/running-jobs#interactive-mode" target="_blank">accounts  ⤴</a> you are on, along with valid QOS's for that account, use <br>on Atlas: <br><code>sacctmgr show associations where user=$USER format=account%20,qos%50</code> <br> on Ceres: <br><code>sacctmgr -Pns show user format=account,defaultaccount </code>|
|queues <br> *[max_walltime]*| see *partitions* row | **normal** *[14d]* <br> **debug** *[30 min]* <br> **special** <br> **priority** | on Atlas, *special* and *priority* queues must be requested and approved <br> on Ceres queues are replaced by the functional groups of nodes called partitions |
|cores <br>per node | 72 or 80 or 96 | 48 | see <a href="https://scinet.usda.gov/guides/use/running-jobs#partitions-or-queues" target="_blank">Partitions or Queues  ⤴</a> and <a href="https://scinet.usda.gov/guides/resources/ceres#technical-overview" target="_blank">Ceres Technical Overview  ⤴</a> to learn details about logical cores per specific groups of nodes on Ceres <br>see <a href="https://scinet.usda.gov/guides/use/running-jobs#requesting-the-proper-number-of-nodes-and-cores" target="_blank">Requesting the Proper Number of Nodes and Cores  ⤴</a> |
|partitions <br> *[nodes/mem GB/time]* | **short** *[41/384/48h]* <br> **medium** *[32/384/7d]* <br> **long** *[11/384/21d]* <br> **long60** *[2/384/60d]* <br> **debug** *[2/384/1h]* <br> **mem** *[4/1250/7d]* <br> **mem768** *[1/768/7d]* <br> **longmem** *[1/1250/1000h]* <br><br> + priority nodes* | **atlas** *[228/384]* <br> **bigmem** *[8/1536]* <br> **gpu** *[4/384]* <br> **service** *[2/192]* <br> **development** *[2/768]* <br> **development-gpu** *[2/384]* <br><br> | see <a href="https://scinet.usda.gov/guides/use/running-jobs#partitions-or-queues" target="_blank">Partitions or Queues  ⤴</a> to learn details about ***priority nodes on Ceres** |


To dive in a more comprehensive description, see detailed SCINet guides about
<b><a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#differences-between-ceres-and-atlas" target="_blank">Differences between Ceres and Atlas  ⤴</a></b>, including sections:
* <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#quotas" target="_blank">Quotas [project & home directories]  ⤴</a>
* <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#software" target="_blank">Preinstalled software  ⤴</a>
* <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#submitting-a-job" target="_blank">Submitting a Job  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#internet-connection" target="_blank">Internet Connection  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#slurm-account" target="_blank">Slurm account  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#partitions" target="_blank">Partitions  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#nodes" target="_blank">Nodes  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/resources/ceresatlasdifferences#salloc" target="_blank">salloc command ⤴</a>


### *Ceres Guides*

<div class="required before" data-before="" markdown="1">
Ceres login node: <b>@ceres.scinet.usda.gov</b> <br>
Ceres transfer node: <b>@ceres-dtn.scinet.usda.gov</b> <base class="mb">
Ceres Open OnDemand: <b><a href="http://ceres-ood.scinet.usda.gov" target="_blank">http://ceres-ood.scinet.usda.gov  ⤴</a></b> <br>
**Ceres Getting started tutorial**: <a class="t-links" href="612.3"></a> *(in this workbook)*
</div>

<details class="l-frame" markdown="1"><summary class="c-header"><b>Ceres computing cluster User Guides <a href="https://scinet.usda.gov/guides/resources/ceres#scinet-ceres" target="_blank">by SCINet:</a></b></summary>

* <a href="https://scinet.usda.gov/guides/resources/ceres#onboarding-videos" target="_blank">Onboarding Videos  ⤴</a>
* <a href="https://scinet.usda.gov/guides/resources/ceres#technical-overview" target="_blank">Technical Overview  ⤴</a>
* <a href="https://scinet.usda.gov/guides/resources/ceres#system-configuration" target="_blank">System Configuration  ⤴</a>


* *see* <a href="https://scinet.usda.gov/guides/access/login#logging-in-to-scinet" target="_blank">Logging in to SCINet  ⤴</a><br>
  * <b>Ceres login node:</b> @ceres.scinet.usda.gov
  * <a href="https://scinet.usda.gov/guides/access/cli#using-linux-command-line-interface" target="_blank">Using Linux Command Line Interface  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">Using web-based Open OnDemand Interface  ⤴</a>
    * Access **Ceres OpenOnDemand** at <a href="http://ceres-ood.scinet.usda.gov/" target="_blank">http://ceres-ood.scinet.usda.gov</a> and see the <a href="https://scinet.usda.gov/guides/access/open-ondemand#access" target="_blank">tutorial  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/access/open-ondemand#using-ood" target="_blank">Explore OOD guides  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#shell-access" target="_blank">Open Shell  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#files" target="_blank">Open File Manager  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#interactive-apps" target="_blank">Launch Interactive Apps  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#logging-out" target="_blank">Log out  ⤴</a>


* <b>Software on Ceres:</b>
  * <a href="https://scinet.usda.gov/guides/software/preinstalled#software-preinstalled-on-ceres" target="_blank">Software preinstalled on Ceres  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/software/preinstalled#graphical-software" target="_blank">Software with a graphical interface (GUI)  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/software/preinstalled#command-line-software-on-scinet-clusters" target="_blank">Command-line Software  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/software/preinstalled#ceres-command-line-software-managed-by-the-module-system" target="_blank">Ceres Command-line Software Managed by the Module System  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/software/preinstalled#the-command-line-software-i-need-is-not-on-the-list" target="_blank">The command-line software I need is not on the list!  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/software/conda#user-installed-software-on-ceres-with-conda" target="_blank">User-Installed Software on Ceres with Conda  ⤴</a>
  * learn more from the universal <a href="https://scinet.usda.gov/guides/#software-guides" target="_blank">Software guides  ⤴</a> section:
    * <a href="https://scinet.usda.gov/guides/software/modules#environment-modules" target="_blank">Environment Modules  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/software/singularity#singularity-containers" target="_blank">Singularity Containers  ⤴</a>
</details>

### *Atlas Guides*

<div class="required before" data-before="" markdown="1">
Atlas login node: <b>@atlas-login.hpc.msstate.edu</b> <br>
Atlas transfer node: <b>@atlas-dtn.hpc.msstate.edu</b> <base class="mb">
Atlas Open OnDemand: <b><a href="https://atlas-ood.hpc.msstate.edu" target="_blank">https://atlas-ood.hpc.msstate.edu  ⤴</a></b> <br>
**Atlas Getting started tutorial**: <a class="t-links" href="612.2"></a> *(in this workbook)*
</div>

<details class="l-frame" markdown="1"><summary class="c-header"><b>Atlas computing cluster User Guides <a href="https://www.hpc.msstate.edu/computing/atlas/" target="_blank">by SCINet:</a></b></summary>

In the one-page documentation you will find the sections listed below. To navigate to the selected topic, press `CTRL + F` on your keyboard (on macOS use `COMMAND + F`), and copy-paste the name of the section.
* Node Specifications
* Accessing Atlas
* File Transfers
* Internet Connectivity
* Modules
* Quota
  * Project Space
  * Local Scratch Space
* Arbiter
* Slurm
  * Available Atlas QOS's
  * Available Atlas Partitions
  * Nodesharing
  * Job Dependencies and Pipelines
  * Atlas Job Script Generator
* Open OnDemand access
  * Virtual Desktops
  * RStudio Server and Jupyter Notebooks


* *see* <a href="https://scinet.usda.gov/guides/access/login#logging-in-to-scinet" target="_blank">Logging in to SCINet  ⤴</a><br>
  * <b>Atlas login node:</b> @atlas-login.hpc.msstate.edu
  * <a href="https://scinet.usda.gov/guides/access/cli#using-linux-command-line-interface" target="_blank">Using Linux Command Line Interface  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/access/open-ondemand#open-ondemand-interface-guide" target="_blank">Using web-based Open OnDemand Interface  ⤴</a>
    * Access **Atlas OpenOnDemand** at <a href="https://atlas-ood.hpc.msstate.edu/" target="_blank">https://atlas-ood.hpc.msstate.edu</a>
    * <a href="https://scinet.usda.gov/guides/access/open-ondemand#using-ood" target="_blank">Explore OOD guides  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#shell-access" target="_blank">Open Shell  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#files" target="_blank">Open File Manager  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#interactive-apps" target="_blank">Launch Interactive Apps  ⤴</a>
      * <a href="https://scinet.usda.gov/guides/access/open-ondemand#logging-out" target="_blank">Log out  ⤴</a>


* <b>Software on Atlas:</b>
  * learn more from the universal <a href="https://scinet.usda.gov/guides/#software-guides" target="_blank">Software guides  ⤴</a> section:
    * <a href="https://scinet.usda.gov/guides/software/modules#environment-modules" target="_blank">Environment Modules  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/software/singularity#singularity-containers" target="_blank">Singularity Containers  ⤴</a>
</details>

# SCINet Data Transfer & Storage

The SCINet HPC infrastructure contains data storage distributed among locations and intended for various purposes:
* Tier 1 Storage on each HPC cluster (*Ceres, Atlas*), is a **local storage** for code, data, and intermediate results that are NOT backed up.
* Juno storage, is a multi-petabyte ARS storage device used for **long-term storage** of data and results and periodically backed up to tape device.
* Tape backup, is an off-site **backup** of Juno, NOT accessible directly by regular SCINet users.

To learn on how to manage data on SCINet, explore comprehensive user guides offered <a href="https://scinet.usda.gov/guides/#data-guides" target="_blank">by SCINet</a>:
<details class="l-frame" markdown="1"><summary class="c-header"><b>Data Guides</b></summary>

* <a href="https://scinet.usda.gov/guides/data/storage#scinet-storage" target="_blank">SCINet Storage  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/storage#quotas" target="_blank">Quotas  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/data/quotas#storage-quotas" target="_blank">my_quotas  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/storage#home-directories" target="_blank">Home Directories  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/storage#project-directories" target="_blank">Project Directories  ⤴</a>
    * <b><a href="https://forms.office.com/g/wD9rYarVyn" target="_blank">Request a PROJECT directory  ⤴</a></b>
  * <a href="https://scinet.usda.gov/guides/data/storage#temporary-local-node-storage" target="_blank">Temporary Local Node Storage: $TMPDIR (~1.5TB)  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/storage#large-short-term-storage" target="_blank">Large Short-term Storage: /90daydata/  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/storage#juno-archive-storage" target="_blank">Long-term Juno Archive Storage (backed up)  ⤴</a>


* <a href="https://scinet.usda.gov/guides/data/data-management" target="_blank">Recommended procedures (SOP) for managing data on SCINet ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/data-management#detailed-instructions-using-globus-preferred" target="_blank">Data transfer using Globus (preferred)  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/data-management#alternative-instructions-not-using-globus" target="_blank">Data transfer using ssh protocol  ⤴</a>
    * <a href="https://scinet.usda.gov/guides/data/datatransfer#small-data-transfer-using-scp-and-rsync" target="_blank">Small Data Transfer Using scp and rsync  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/datatransfer#large-data-transfer-by-shipping-hard-drives" target="_blank">Large Data Transfer by Shipping Hard Drives  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/datatransfer#other-ways-to-transfer-data" target="_blank">Other Ways to Transfer Data  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/datatransfer#data-transfer-to-ncbi" target="_blank">Data Transfer to NCBI  ⤴</a>
  * <a href="https://scinet.usda.gov/guides/data/rclone#rclone-moving-data-to-and-from-cloud-resources" target="_blank">Rclone: Moving Data To and From Cloud Resources  ⤴</a>
</details>
