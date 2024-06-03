---
title: "XSEDE supercell storage"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 611.2
level: 3
categories: ["HPC, computing", "command-line", "computing-tools", "data-transfer"]
tags: ["ACCESS", "XSEDE", "access-supercell"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="warning" markdown="1">
**XSEDE has been replaced by ACCESS.** Check the [ACCESS guide ⤴](01-supercomputer-intro.md) for more information.
</div>


## Using Supercell-Storage server for backing up and restoring data from PSC servers

 This guide will help you getting started and using the Supercell. If you haven't already gotten a username/password for PSC systems (eg., Blacklight), you need to do it now. Use the [password reset link](http://psc.edu/index.php/resources-for-users/allocations "password reset link").

### *Accessing Supercell*

SFTP is the best method to browse the files and create the directory structure you want.
```bash
sftp username@data.psc.xsede.org
```

<pre class="output">
Warning: Permanently added the RSA host key for IP address '128.182.112.126'
to username@data.psc.xsede.org's password:
Connected to data.psc.xsede.org.
</pre>

<code class="code-block"><span class="prompt-1 before nb" data-before="sftp> ">ls</span></code>

<pre class="output">
TIL11_FULL
</pre>

<code class="code-block"><span class="prompt-1 before nb" data-before="sftp> ">cd</span> TIL11_FULL/
<span class="prompt-1 before nb" data-before="sftp> ">exit</span>
</code>


### Transferring files

Use  `rsync` to sync the directories that you need to keep in sync.

```bash
rsync -e 'ssh -c aes128-ctr' -avP source_dir username@data.psc.xsede.org:target_dir
```

<div class="protip" markdown="1">
You can retrieve the data anytime by reversing the  `rsync` command.
</div>
