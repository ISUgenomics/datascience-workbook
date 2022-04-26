---
title: "Introduction to Regular Expression"
layout: single
author:
author_profile: false
header:
  overlay_color: "444444"
  overlay_image: /assets/images/pattern.png
---


{% include toc %}

Imagine, rather than typing all the file names, you could represent them with a single word.  This word or a pattern used to represent files/directories are called regular expression (regex for short).
* **Simple examples:**
*  to represent any word: eg. \*.txt means all files with txt extension
  * ? to represent a single letter: eg. ?????.txt matches all files with exactly 5 letters, with txt extension.
  * ^ beginning and $ for the end of the word:  eg  ^text* forces the match for the beginning letters only.


  ___
  # Further Reading
  * [SLURM Cheatsheet](05A-slurm-1-cheatsheet)
  * [Tutorial: Creating SLURM Job Submission Scripts](05A-slurm-2-tutorial-job-submission)
  * [Tutorial: Submitting Dependency Jobs using SLURM](05A-slurm-3-tutorial-submitting-dependency-jobs)

  * [PBS: Portable Batch System](05B-pbs-0-basics.md)
  * [Introduction to GNU Parallel](06-introduction-to-gnu-parallel)
  * [Introduction to Containers](07-introduction-to-containers)
  * [Example HPC Infrastructure](08-example-hpc-infrastructure)

  ___

  [Homepage](../index.md){: .btn  .btn--primary}
  [Section Index](00-IntroToHPC-LandingPage){: .btn  .btn--primary}
  [Previous](05-introduction-to-job-scheduling){: .btn  .btn--primary}
  [Next](05A-slurm-1-cheatsheet){: .btn  .btn--primary}
