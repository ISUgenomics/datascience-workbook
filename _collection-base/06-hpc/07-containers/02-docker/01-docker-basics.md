---
title: "Docker - accelerated container application development"
layout: single
author: Sharu Paul
author_profile: TRUE
header:
  overlay_color: "444444"
  overlay_image: 06-hpc/assets/images/06_hpc_banner.png
type: "tutorial"
order: 672.1
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

# Introduction

## What are Containers?
Containers are executable units of software containing anything from a small process to a larger application, along with its libraries and dependencies. Start with the {% include target_link href=671.1 text="Apptainer: the container system for secure HPC" %} tutorial to get to know about using containers. <br>


## Docker setup
Docker is a lightweight platform for automating the deployment of applications within containers. The platform also offers a centralized repository for sharing and storing containers. Download Docker Desktop from the <a href="https://www.docker.com/" target="_blank">Docker Website ⤴</a>. Follow the default installation process and open the Docker Desktop app after finishing installation.


## Finding Containers
Singularity is commonly used for High-Performance Computing (HPC) clusters environments whereas Docker is usually run locally as it needs admin privileges. Docker container images can be searched from the <a href="https://hub.docker.com/search?q=" target="_blank">Docker Hub ⤴</a> or directly from the Docker Desktop app. <br>

<div class="note" markdown="1">
Singularity is able to support Docker containers, which means that **you can run Docker containers using Singularity**. But, Docker does not natively support Singularity containers. However, there are some workarounds that allow you to run Singularity containers inside a Docker container, such as using Singularity as an entry point for the Docker container.
</div>

## Pulling a container image
The simplest way to pull (download) a container image is using the Docker Desktop app.
Open the app: <br>
<br>
![d1]({{ images_path }}/06_docker_start.png) <br>
<br>

Let's try pulling image of the `ncbi-blast-plus` container through the app. The app is connected to docker hub and you can directly search for images from the search bar at the top. Click on `images` to see the list of search results. <br>
<br>
![d2]({{ images_path }}/06_search.png) <br>
<br>

Pull the image by clicking on the desired container and then `Pull` button. Alternatively, you can copy the pull command by clicking on the copy button and run it in a terminal. You need to do any one of the two. <br>
<br>
![d3]({{ images_path }}/06_pull1.png) <br>
<br>

You can also search for the Docker containers online from the <a href="https://www.docker.com/" target="_blank">Docker Website ⤴</a>. Use the search bar at the top to search and then click on the desired container. <br>
<br>
![d4]({{ images_path }}/06_Docker_Hub.png) <br>
<br>
Now copy the pull command by clicking on it. <br>
<br>
![d5]({{ images_path }}/06_Docker_Hub_pull.png) <br>
<br>
Open a terminal and paste the command, press enter. The image will be downloaded.
<br>
<br>

## Using Docker containers
Docker can be used through the app or via command line (use any terminal). Open the terminal and enter the following to check the version of docker (and if it installed properly).

```bash
docker --version
```

Run following command to see full list of commands for docker.

```bash
docker --help
```

### Run Docker container using Singularity
If you are unable to use Docker, for example you may be on an HPC, you can run Docker containers through Singularity.

```bash
singularity pull docker://user/image:tag
```

Check out the <a href="https://docs.sylabs.io/guides/3.2/user-guide/cli/singularity_pull.html" target="blank">official guide ⤴</a> to Singularity for more details.
<br>


## Working Example
Let's test the blast-plus container image we pulled by doing a simple blast between two fasta files. I put my fasta files in a folder named `blast` on my desktop. First we need to `run` the image to convert it into a container. This can be done via the Docker Desktop app. <br>
<br>
![d6]({{ images_path }}/06_run_image.png) <br>
<br>
A dialogue box will open; click on the optional settings and add path to your data in `host path` and type `\data` in `container path` under `Volumes`. Click `Run` to initiate a new container. <br>
<br>
![d7]({{ images_path }}/06_new_container.png) <br>
<br>
Go to the containers and find the running container. Click on it to open details about the container. <br>
<br>
![d8]({{ images_path }}/06_run_container.png) <br>
<br>
Make sure the container is running, you should see a stop button, if not click on the run button. Then go to the terminal to use the blast and all its functions <br>
<br>
![d9]({{ images_path }}/06_container_terminal.png) <br>
<br>
I had trouble at container `run` step as it would not run and exit immediately. This could happen due to a number of reasons including memory problems or problems with path. There is an easy fix for this problem, make the container i.e. run the image via a terminal. You will need the image ID for this, copy it from images section. <br>
<br>
![d10]({{ images_path }}/06_imageID.png) <br>
<br>
You can also find images and their details including image ID from the terminal. Open a terminal (for example, PowerShell on windows) and enter `docker images` to list all images. To initiate a container enter following:

```bash
docker run -v path-to-your-blast-files:/data -it image-ID bash
```

Add path to your input files and the image-ID, it might look something like:

```bash
docker run -v C:\Users\abc\Desktop\blast:/data -it eaeed4320e5as0b1d136533f02 bash
```

The `:/data` after your path is the default container path (keep it as is) and the image-ID is usually a long string of numbers and alphabets. This will initiate an interactive run of the docker container. You can now use the blast programs in this terminal directly. <br>
<br>
![d11]({{ images_path }}/06_Blastn.png) <br>
<br>
Running this command generated the desired output file I named Blast_out. You should now see the container running in the Docker Desktop as well, and you can use the terminal within the app as well for running blast now. <br>
<br>
