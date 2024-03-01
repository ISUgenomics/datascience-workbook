---
title: "Accessing pre-installed modules"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 642
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Software on HPC - overview

The software available on a High-Performance Computing system can vary depending on the specific system and its intended use. However, HPC systems typically have a wide range of software available, including:
* operating systems
* cluster management software, including job schedulers
* programming languages
* development tools, including compilers and debuggers
* scientific libraries to accelerate computations
* applications, including numerical simulations, data analysis, and visualization tools

Explore the <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC" target="_blank">Software Available on HPC  ⤴</a> tutorial in this workbook, to learn more about:

* <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC#how-to-find-available-software" target="_blank">How to find available software?  ⤴</a>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC#software-as-built-in-commands" target="_blank">Software as built-in commands  ⤴</a>
  * <b>[Software as built-in modules](#software-as-built-in-modules)</b> *(see below)*
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC#software-via-package-manager" target="_blank">Software via package manager  ⤴</a>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC#check-the-documentation" target="_blank">Check the documentation  ⤴</a>
  * <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/01-software-available-on-HPC#ask-the-system-administrator" target="_blank">Ask the system administrator  ⤴</a>


* <a href="https://datascience.101workbook.org/06-IntroToHPC/04-SOFTWARE/03-installing-custom-programs" target="_blank">How to get new software installed?  ⤴</a>


# Software as built-in modules

Many HPC systems use a **system of software modules** to manage and organize the software that is available for all users. The <a href="https://modules.sourceforge.net" target="_blank">Environment Modules  ⤴</a> package is a powerful tool that can help to **simplify the management** and use of software on HPC systems (*benefit for cluster admins*), and to **improve the efficiency and reproducibility** of research and development (*benefit for users*). Modules are useful in managing **different versions of applications**. They **can be loaded and unloaded** easily, dynamically, and atomically. And, a single module (*copy of the package*) **can be used by many users** at the same time.

### *Benefits of using Environment Modules*

The Environment Modules package provides several benefits for both, users and system administrators .

**A. For you as a user:**

* **Easy access to a wide range of software** <br>
Environment Modules allows users to access a wide range of software that is installed on the system, without having to worry about dependencies or conflicts. This can help to make the system more accessible and user-friendly, especially for users who are not experts in the field.

* **Easy access to multiple versions of software** <br>
Environment Modules allows users to easily switch between different versions of software that are installed on the system, and to use the version of the software that is most appropriate for their needs. This is particularly useful when different versions of a software package have different dependencies or are compiled with different options.

* **Improved reproducibility** <br>
Using environment modules allows users to specify the version of the software they used in their computations, which can help to improve reproducibility and collaboration among researchers.

* **Improved portability of software (and collaboration)** <br>
Environment Modules allows users to use the same software on different systems, without having to worry about compatibility issues. This can be especially useful for users who need to use the same software on multiple systems or who need to share their work with other users.

* **Efficient use of system resources** <br>
Environment Modules allows users to only load the software that they need, rather than having all the software available all the time. This can help to save resources and improve the performance of the system, which is especially important for large HPC systems with many users.


**A. For HPC administrators:**

* **Simplified management of software and environment variables** <br>
nvironment Modules allows system administrators to easily manage the software that is available on the system, and to set environment variables such as paths and library paths automatically. This can reduce the amount of work that needs to be done by users to set up their environment, and can help to ensure that the software is used correctly.

* **Compatibility with batch job systems** <br>
Environment Modules can be used in conjunction with batch job systems, such as LSF, PBS, and SLURM, to ensure that the correct version of software is used when a job is run. This can help to avoid conflicts and errors when running jobs.

* **Flexibility in supporting different users with different needs** <br>
Many HPC systems support multiple users with different needs, Environment Modules allows System administrator to make available different version of software for different user or group of users.

# `module` command
The `module` command is a way to manage and access software packages on HPC systems that use the Environment Modules package. This package allows users to **easily switch between different versions of software** that are installed on the system, and to set environment variables such as paths and library paths.

<div style="background: #cff4fc; padding: 15px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">
Note that some modules might have dependencies on other modules, so <b>loading one module may automatically load other modules</b>, or unloading a module might unload other dependent modules. The module command can be complex and have additional functionality. <br>
System administrators and the module documentation will provide information on the dependencies and best practice for using the modules.
</span>
</div><br>

## How to **find a module**?
Here are some common `module` commands that can be used to **list and search for available software** on an HPC system:

### • *list all modules*
To list all of the available modules on the system, use:
```
module avail
```
*The output will show the name of each module, as well as a short description of what the module does.*

### • *list loaded modules*
To show the modules that are currently loaded in the user's environment, use:
```
module list
```

### • *search for a specific module*
To search for a specific module by name, use:
```
module spider <name>
```
*It will show all the versions of that module that are available on the system, along with information about the module, such as dependencies and conflicts.*

### • *details of a specific module*
To display the details of a specific module, use:
```
module show <name>
```
*It will show the version, the dependencies, and the environment variables that the module sets.*


## How to **load a module**?
Here are some common `module` commands that can be used to **load and unload the module** on an HPC system:

### • *load a specific module*
To load a specific module into the user's environment, use:
```
module load <name>
```
*It will load the module, making the software that the module provides available to use.*

### • *unload a specific module*
To unload a specific module from the user's environment, use:
```
module unload <name>
```
*This command will remove a module that has been loaded into user's environment.*

### • *swap one with another module*
To easily switch between different versions of the same software, use:
```
module swap <name1> <name2>
```
*This command will swap one module that is currently loaded in the user's environment with another module.*

### • *unload all modules*
To unload all modules from your environment, use:
```
module purge
```


## **Examples of software modules**
A wide range of software can be made available as modules on an HPC system. Some examples of the types of software that are commonly made available as modules include:

* [1. Compilers and interpreters](#1-compilers-and-interpreters)
* [2. Scientific libraries](#2-scientific-libraries)
* [3. Applications](#3-applications) : *numerical simulations, data analysis*
* [4. Deep learning framework](#4-deep-learning-framework)
* [5. Visualization tool](#5-visualization-tools)
* [6. Interoperability packages](#6-interoperability-packages)

<div style="background: mistyrose; padding: 15px; margin-bottom: 20px;">
<span style="font-weight:800;">WARNING:</span>
<br><span style="font-style:italic;">
It's worth noting that the specific syntax and <b>names of the modules may vary depending on the HPC system</b> and the naming conventions used by the system administrator. <br>In general, you can use the <code>module avail</code> command to see the list of available modules, and the <code>module show {name}</code> command to see the details of a specific module, such as its dependencies and conflicts.
</span>
</div>

### *1. Compilers and interpreters*
Compilers and interpreters for languages such as C, C++, Fortran, Python, and R can be made available as modules, along with libraries and tools for those languages.

*Example: Loading a specific version of GCC compiler:*
```
module load gcc/8.3.0
```

### *2. Scientific libraries*
Libraries such as <a href="http://www.netlib.org/blas/" target="_blank">BLAS  ⤴</a> (*Basic Linear Algebra Subprograms*), <a href="http://www.netlib.org/lapack/" target="_blank">LAPACK  ⤴</a> (*Linear Algebra PACKage*), and <a href="http://www.fftw.org/" target="_blank">FFTW  ⤴</a> (*Fastest Fourier Transform in the West*), which are commonly used in scientific computing, can be made available as modules.

*Example: Loading a specific version of OpenBLAS library:*
```
module load openblas/0.3.9
```

### *3. Applications*
A wide range of applications, such as numerical simulations [ <a href="http://www.gromacs.org/" target="_blank">GROMACS  ⤴</a>, <a href="http://www.ks.uiuc.edu/Research/namd/" target="_blank">NAMD  ⤴</a>, <a href="http://ambermd.org/" target="_blank">AMBER  ⤴</a>, <a href="http://www.gaussian.com/" target="_blank">Gaussian  ⤴</a>, <a href="https://www.ansys.com/" target="_blank">ANSYS  ⤴</a> ] and data analysis [ <a href="https://www.r-project.org/" target="_blank">R  ⤴</a>, <a href="https://www.scipy.org/" target="_blank">SciPy  ⤴</a>, <a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB  ⤴</a>, <a href="https://www.gnu.org/software/octave/" target="_blank">Octave  ⤴</a>, <a href="https://pypi.org" target="_blank">Python Data Science Libraries  ⤴</a> ] tools can be made available as modules.

*Example: Loading a specific version of of the <a href="http://www.ks.uiuc.edu/Research/vmd/" target="_blank">VMD  ⤴</a> (Visual Molecular Dynamics) simulation application:*
```
module load vmd/1.9.4
```
Typical **module names** for other simulation tools: `gromacs`, `namd`, `amber`, `gaussian`, `ansys`.

*Example: Loading a specific version of a data analysis application:*
```
module load R/4.0.3-openblas-0.3.9
```
*This will load the version 4.0.3 of R programming language along with OpenBLAS version 0.3.9.*

Typical **module names** for other data analysis tools: `scipy`, `matlab`, `octave`, and for python: `pandas`, `numpy`, `matplotlib`, `seaborn`, `plotly`.

### *4. Deep learning framework*
Many popular deep learning frameworks can be made available as modules on an HPC system, including <a href="https://www.tensorflow.org/" target="_blank">TensorFlow  ⤴</a>, <a href="https://pytorch.org/" target="_blank">PyTorch  ⤴</a>, <a href="http://caffe.berkeleyvision.org/" target="_blank">Caffe  ⤴</a>, <a href="http://www.deeplearning.net/software/theano/" target="_blank">Theano  ⤴</a>, and <a href="https://keras.io/" target="_blank">Keras  ⤴</a>.

*Example: Loading a specific version of a `pytorch` deep learning framework:*
```
module load pytorch/1.6-cuda-11.0-python-3.8
```
*This will load the version 1.6 of PyTorch deep learning framework that is built for CUDA 11.0 and python 3.8.*

Typical **module names** for other frameworks: `tensorflow`, `pytorch`, `caffe`, `theano`, `keras`.

### *5. Visualization tools*
Many visualization tools can be made available as modules on an HPC system, including <a href="https://www.paraview.org/" target="_blank">ParaView  ⤴</a>, <a href="https://wci.llnl.gov/simulation/computer-codes/visit" target="_blank">VisIt  ⤴</a>, <a href="http://www.gnuplot.info/" target="_blank">Gnuplot  ⤴</a>, <a href="https://matplotlib.org/" target="_blank">matplotlib  ⤴</a>, and <a href="https://docs.enthought.com/mayavi/mayavi/" target="_blank">Mayavi  ⤴</a>.

*Example: Loading a specific version of a `paraview` visualization tool:*
```
module load paraview/5.9-mpi-4.0.3-python-3.8
```
*This will load version 5.9 of ParaView visualization tool that is built with MPI 4.0.3 and python 3.8*

Typical **module names** for other tools: `paraview`, `visit`, `gnuplot`, `matplotlib`, `mayavi`.

### *6. Interoperability packages*
Environment Modules can be used to set environment variable or path for some specialized software that require different version of libraries or have different dependencies, such as MPI libraries.

*Example: Loading a specific version of of <a href="https://www.open-mpi.org/" target="_blank">OpenMPI  ⤴</a> library:*
```
module load openmpi/4.1.3
```

## **SCINet HPC modules**
Both <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/01-scient-network-intro" target="_blank">SCINet HPC  ⤴</a> clusters, <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/02-scinet-atlas-cluster" target="_blank">Atlas  ⤴</a> and <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/02-SCINET/03-scinet-ceres-cluster" target="_blank">Ceres  ⤴</a> use the Environment Modules package. <br>Learn more from SCINet resources:
* <a href="https://scinet.usda.gov/guides/software/modules#environment-modules" target="_blank">Environment Modules on SCINet HPC  ⤴</a>
* <a href="https://scinet.usda.gov/guides/software/preinstalled#ceres-command-line-software-managed-by-the-module-system" target="_blank">Ceres Command-line Software Managed by the Module System  ⤴</a>

## **ISU HPC modules**
Both <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/01-isu-hpc-intro" target="_blank">ISU HPC  ⤴</a> clusters, <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/03-isu-hpc-nova-cluster" target="_blank">Nova  ⤴</a> and <a href="https://datascience.101workbook.org/06-IntroToHPC/01-HPC-NETWORKS/03-ISUHPC/02-isu-hpc-condo-cluster" target="_blank">Condo  ⤴</a> use the Environment Modules package. <br>Learn more from ISU resources:
* <a href="https://www.hpc.iastate.edu/guides/nova/software" target="_blank">Environment Modules on Nova  ⤴</a>
* <a href="https://www.hpc.iastate.edu/guides/condo-2017/software" target="_blank">Environment Modules on Condo  ⤴</a>
