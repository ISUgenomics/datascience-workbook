---
title: "Modifying existing containers"
layout: single
author: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 671.4
level: 4
categories: []
tags: []
---

{% include toc %}
{% include images_path %}

[DataScience Workbook](https://datascience.101workbook.org/) / [06. High-Performance Computing (HPC)](../../00-IntroToHPC-LandingPage.md) / [7. Introduction to Containers](../00-introduction-to-containers.md) / [7.1 Singularity](01-singularity-basics.md) / **7.1.2 Modifying Existing Containers**

---

<span style="color: #ff3870;font-weight: 800;">NOTE:</span>
In late 2021, **Singularity underwent a rebranding to Apptainer**, changing the command keyword from`singularity` to `apptainer`, though the majority of subsequent commands and options retained their functionality. *(Learn more about the changes in the tutorial [Apptainer, the container system for secure HPC](00-apptainer-introduction).)*

Before diving into container tasks on HPC infrastructure:
* ensure you checked the available module using the commands:
```
module avail apptainer
module avail singularity
```
* load a module of your choice:
```
module load apptainer/<version>       # e.g., module load apptainer/1.1.9-py310-wsbt4ge
```
* and consistently use the appropriate keyword for your commands *(in this example: apptainer)*.

<span style="color: #ff3870;font-weight: 500;"><b>Apptainer is the recommended module</b> for container management, and users are advised to transition to it for enhanced functionality and support.</span>

# Introduction

# Modifying Existing Containers

First off, it is important that modifying existing containers should only be done to avoid having to rebuild a container from scratch while optimizing the recipe file.  The ultimate goal is for the container to be fully reproducible from the recipe file.  However, there are some containers that can take 2 hours to build and if you forgot to add a folder to the PATH directory or other similarly simple mistakes, 2 hours is a long time to wait to verify the container is working properly.

With that said, this is how you can take a squashed non-writable container and create a writable version that you can modify.  

```
sudo singularity build --writable utilities2.simg utilities.simg
```

In my case, I had installed many programs but they were not in the PATH so the container while had these programs installed didn't know where to find them!  The solution was to load modules in the shell or add the modules to the environment section of the recipe file.

```
sudo singularity shell --writable utilities2.simg
for d in /opt/spack/opt/spack/linux-centos7-x86_64/gcc-4.8.5/*/bin; do export PATH="$PATH:$d"; done
```

Unfortunately, doing this in a writable image did not provide the desired result


#### Modifying Environmental variables that were set up in the recipe file

Going into a writable image and changing an environmental variable on the command line will not create a permanent change in the environmental variable.   Changes you make will be lost the next time the container is used unless you modify the /environment file within the image.  Below is an example of the /environment file from snpphylo prior to modifying the PATH variable.

##### Method 1

You can modify/update each section individually

```
sudo singularity build --writable snpphylo3.simg snpphylo.simg
sudo singularity build --section environment snpphylo3.simg ../recipe
```
More information can be found on the [singularity wiki](http://singularity.lbl.gov/docs-build-container)


##### Method 2
You can also modify/install/update from within a container.  For the environment, it is easier to do method 1 above.

```
more /environment
```

```
# Custom environment shell code should follow

SPACK_ROOT=/opt/spack
export SPACK_ROOT
export PATH=$SPACK_ROOT/bin:$PATH
source /etc/profile.d/modules.sh
source $SPACK_ROOT/share/spack/setup-env.sh
export PATH=$SPACK_ROOT/isugif/snpphylo/bin:$PATH
```


More information about this can be found in this [singularity issue](https://github.com/singularityware/singularity/issues/119)


#### Building over an existing image.

If you change something in a recipe you can just re-execute the build command and it will build only the changes you made in the recipe file.

```
sudo singularity build container.simg recipe
```

Once you have made all the changes and your image is working the way you want then you can make those changes in your original recipe file and recreate it from scratch for full reproducibility.


___
# Further Reading
* [7.1.3 Singularity on your Mac via Vagrant](04-singularity-3-tutorial-vagrant)

* [7.2 Docker](../02-DOCKER/01-docker-basics)

___

[Homepage](../../../index.md){: .btn  .btn--primary}
[Section Index](../../00-IntroToHPC-LandingPage){: .btn  .btn--primary}
[Previous](02-singularity-1-tutorial-creating-containers){: .btn  .btn--primary}
[Next](04-singularity-3-tutorial-vagrant){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
