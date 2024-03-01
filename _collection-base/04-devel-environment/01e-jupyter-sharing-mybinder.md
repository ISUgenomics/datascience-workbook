---
title: "Sharing Jupyter-based reproducible pipline via MyBinder"
layout: single
author: Jennifer Chang
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 04-devel-environment/assets/images/04_development_envir_banner.png
type: "tutorial"
order: 415
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

# Sharing Jupyter Notebooks via MyBinder

**Last Update:** 9 Dec 2020

Learn how to publish Jupyter Notebooks on MyBinder. Launch an example of a shared Jupyter Notebook in binder here:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/j23414/test_binder.git/HEAD?filepath=tutorials)

## Introduction

Analysis pipelines written in Python can be shared in an interactive document called a [Jupyter Notebook](https://jupyter.org/). Notebook sections are usually one of two types:

* **Markdown** - text/documentation of your analysis
* **Code** - Python code chunks that run the analysis

![JupyterNotebook]({{ images_path }}/04_jupyterNtbk.png)

Providing one document (notebook) of executable code and documentation eases reproducible research, where other scientists can verify, understand, and possibly extend your analysis.

To demonstrate these benefits, this tutorial will walk you through:

* creating a minimal Jupyter Notebook
* pushing it to a public github
* and linking the notebook to a mybinder.org to be shared

We will assume you have a GitHub account and are using `conda` to manage python environments.

**More Information**

* [https://jupyter.org/](https://jupyter.org/)
* [https://mybinder.org/](https://mybinder.org/)

## Step 1: GitHub

We will assume you have a GitHub account. If not, please register a free account.

1. Sign in to Github - [https://github.com/](https://github.com/)
2. Create a `jupyter_binder` repository

  ![Jupyter Repo]({{ images_path }}/04_jupyter_repo.png)

3. Clone the repo, to create a copy on your local compuer.

  ![git clone]({{ images_path }}/04_jupyter_clone_from_git.png)

  Click on `Code` and the clipboard icon, to copy the git repo path. That way you can type `git clone` and paste the git repo path.

  ```
  git clone https://github.com/YOUR_USER_NAME/jupyter_binder.git
  cd jupyter_binder
  ```

  We will be adding a basic notebook to this folder, and pushing (publishing) it to GitHub.

## Step 2: Create a minimal Jupyter Notebook

<!--
### A note about Python Environments

Since there are often conflicts between different versions of python modules, we highly recommend you use a envirnoment manager (`venv` or `conda`). For this tutorial, we will assume you are using `conda`.
-->

Creating and hosting a local Jupyter Notebook requires the `jupyter` package.

* Use your favorite Text Editor and copy the following file, saving it as a **environment.yml** file. Notice how we've named the environment `ntbk_env`.

  ```yml
  name: ntbk_env
  channels:
    - conda-forge
    - bioconda
    - defaults
  dependencies:
    - python=3.8        #<= python version
    - jupyter           #<= list any python packages here
  ```

* Create the python environment. From terminal, we can use `conda env create` to create a python environment. The `-f` flag means we are reading in dependencies from a file `environment.yml`. Creating an environment may take several minutes.

  ```bash
  conda env create -f environment.yml
  ```

* Activate the environment.

  ```bash
  conda env list             # List all created environments
  #> conda environments:
  #> ntbk_env                 /Users/User_Name/miniconda/envs/ntbk_env

  conda activate ntbk_env    # Start the ntbk_env
  conda deactivate           # Stop the ntbk_env
  ```

* Start the local Jupyter Notebook

  ```bash
  cd jupyter_binder/         # Navigate to git repo
  mkdir tutorials            # Create a folder
  conda activate ntbk_env    # Start ntbk_env
  jupyter notebook           # Starts notebook, should open a browser window
  ```

* Create a Jupyter Notebook via `New/Python 3`

  ![Jupyter Local]({{ images_path }}/04_jupyter_start_notebook.png)

* We will try to recreate the Jupyter Notebook shown in the figure.

  ![JupyterNotebook]({{ images_path }}/04_jupyterNtbk.png)

  For the moment, create one Markdown section and paste the following. It doesn't matter what it says right now since we are testing the system out.

  ```Markdown
  ## Hello Jupyter Notebook

  This is a quick introduction to Jupyter Notebooks.

  * Markdown
  * Code
  ```

  Hit the `Run` button to render the markdown.

  Now let's create a Code section and paste the following.

  ```python
  print("Hello World")
  ```

  Hit the `Run` button and the words "Hello World" should show up under the Code section. Now save this Notebook (ipynb file) by going to `File/Save As`. Put the notebook in a `tutorials` folder.

  At this point, your `jupyter_binder` folder should look similar to:

  ```text
  jupyter_binder/
    |_ tutorials/
    |    |_ Intro_to_Jupyter_Notebooks.ipynb
    |_ environment.yml
    |_ README.md
  ```

* Save and commit to GitHub

  ```bash
  git add tutorials/Intro_to_Jupyter_Notebooks.ipynb
  git add environment.yml
  git commit -m "minimal notebook" tutorials/Intro_to_Jupyter_Notebooks.ipynb environment.yml
  git push origin main
  ```

  Check GitHub to make sure the new files are online.

## Link to binder

* Visit [https://mybinder.org/](https://mybinder.org/)
* Input the github name and any subfolder if ipynb files are in a subfolder. Note: Instead of `test_binder`, your repo will be called `jupyter_binder`.

![My Binder]({{ images_path }}/04_jupyter_MyBinder.png)

  Click `Launch` and you should see your jupyter notebook in the browser. Congratulations, your binder is published!

## Add the "Launch Binder" badge

  The last thing is to add a badge that launches the binder. Notice in the above image, before you hit launch, there's a "Copy the text, then paste into your README...", expand that section and copy the badge code...which will look similar to:

  ```Markdown
  [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/j23414/test_binder.git/HEAD?filepath=tutorials)
  ```

  Replace `j23414` with your GitHub username, and `test_binder` with `jupyter_binder`. Then when you add it to the README.md, you should have a working binder launch badge.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/j23414/test_binder.git/HEAD?filepath=tutorials)

Congratulations! You have completed the Jupyter Notebook + Binder Tutorial.

## Your Turn to Explore

From here on you are free to explore modifying the jupyter notebook. We recommend looking at some tutorials in Markdown and Python.

* [Markdown CheatSheet](https://www.markdownguide.org/cheat-sheet/)
* [Python 3 CheatSheet](https://www.codecademy.com/learn/learn-python-3/modules/learn-python3-syntax/cheatsheet)

### Note: About Python Module Dependencies

Remember that `environment.yml` file we used earlier? MyBinder will look for an `environment.yml` or a `requirements.txt` to find a list of python modules to install and make available in the notebook. This file needs to be at the base of the github repo (can't find it inside of subfolder `tutorials`).

For example, if you want to use the Python package `numpy` then the `environment.yml` should look like:

```yml
  name: ntbk_env
  channels:
    - conda-forge
    - bioconda
    - defaults
  dependencies:
    - python=3.8        
    - jupyter           
    - numpy        #<= new numpy package
```

This installs `numpy` into the docker container, and you'll be able to load the `numpy` package in a Code section:

```{python}
import numpy as np
```

Together, the Jupyter Notebook + MyBinder + environment.yml provides a way to sharing a reproducible Python analysis pipeline.
