---
title: "Data Wrangling: examples of ready-made apps"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /07-DataParsing/assets/images/07_data_acquisition_banner.png
---

{% include toc %}

This section provides a highly verbose guide for the contents of the [ISUgenomics](https://github.com/ISUgenomics)/<b>[data_wrangling](https://github.com/ISUgenomics/data_wrangling)</b> GitHub repository. The **data_wrangling** repo collects ready-made mini-apps for popular tasks in data processing.<br>
<i>Most of the apps are <span style="color: #ff3870;"> developed in Python3</span> programming language.</i>

In the <b>[data_wrangling](https://github.com/ISUgenomics/data_wrangling)</b> repo, each application is placed in a separate directory for tidy organization. Each folder contains:
- the python script (.py) of the application
- the example inputs
- the documentation in the README.md file, including some usage variations (*sample commands that run the program in different option configurations*)

All the applications have a **built-in set of options** provided as in-line arguments from the command line. Thanks to that, there is **no need to modify source code** by the user (*e.g., to replace input filename or tune params*). Also, it makes the apps more universal, comprehensive, and robust.

More advanced (multi-purpose or multi-options) applications have a **built-in logger** which reports the analysis progress with the details depending on the **selected verbosity level**.

Right here, in the [Data Science Workbook](https://datascience.101workbook.org): [07-DataParsing](https://datascience.101workbook.org/07-DataParsing/00-DataParsing-LandingPage)/<b>[03-DATA-WRANGLING-APPS](https://datascience.101workbook.org/07-DataParsing/03-DATA-WRANGLING-APPS/00-data-wrangling-apps)</b> section, you can follow the <span style="color: #ff3870;">hands-on tutorials</span> to learn how to run the ready-made applications <span style="color: #ff3870;">using example datasets</span> and further employ them to support your own research.

Browse available tutorials in the **Further Reading** paragraph (*just below*).

___
# Further Reading
* [Merge files by common column (python)](01-merge-data-py)
* [Aggregate data over slicing variations (python)](02-slice-or-bin-data-py)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-DataParsing-LandingPage){: .btn  .btn--primary}
[Previous](../02-DATA-MANIPULATION/02-PYTHON/07-tutorial-python-apply-statistics-scipy){: .btn  .btn--primary}
[Next](01-merge-data-py){: .btn  .btn--primary}
