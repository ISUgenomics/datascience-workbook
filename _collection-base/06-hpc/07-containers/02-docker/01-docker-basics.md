---
title: "Docker - accelerated container application development"
layout: single
author: Sharu Paul
author2: Aleksandra Badaczewska
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


# Docker setup

<a href="https://www.docker.com/" target="_blank">Docker ⤴</a> is a lightweight platform for automating the deployment of applications within containers. The platform also offers a centralized repository for sharing and storing containers. Download <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker Desktop ⤴</a> from the Docker Website. Follow the default installation process and open the Docker Desktop app after finishing installation.


## *What are Containers?*

Containers are executable units of software containing anything from a small process to a larger application, along with its libraries and dependencies. Start with the <a class="t-links" href="671.1">Apptainer: the container system for secure HPC</a> tutorial to get to know about using containers.


## Finding Containers

Apptainer *(previous Singularity)* is commonly used for High-Performance Computing (HPC) environments whereas Docker is usually run locally as it needs <a class="t-links" href="324">admin privileges</a>. Docker container images can be searched from the <a href="https://hub.docker.com/search?q=" target="_blank">Docker Hub ⤴</a> or directly from the Docker Desktop app. <br>

<div class="note" markdown="1">
Apptainer *(previous Singularity)* is able to support Docker containers, which means that **you can run Docker containers using Apptainer**. But, Docker does not natively support Apptainer/Singularity containers. However, there are some workarounds that allow you to run Apptainer containers inside a Docker container, such as using Apptainer as an entry point for the Docker container.
</div>


## Pulling a container image

The simplest way to pull (download) a container image is using the Docker Desktop app. <br>
**A. Open the app:**
![d1]({{ images_path }}/06_docker_start.png)

**Let's try pulling image of the** `ncbi-blast-plus` **container through the app.** <br>
The app is connected to docker hub and you can directly search for images from the search bar at the top. Click on `Images` tab to see the list of search results.
![d2]({{ images_path }}/06_search.png)

**Pull the image by clicking on the desired container and then** <button class="btn">Pull</button> **button.** <br>
Alternatively, you can copy the pull command by clicking on the <button class="btn">copy</button> icon and run it in a terminal.
![d3]({{ images_path }}/06_pull1.png)

<div class="warning" markdown="1">
When you pull an image in Docker, it downloads a snapshot of the filesystem and configuration settings that make up the application environment. This image is stored in your Docker host's local storage. <br>**The image alone is inert – it doesn’t run or do anything by itself.**
</div>
<div class="protip" markdown="1">
The `Run` button is used to create and start a container from an image. <br>When you run the image, Docker does the following:
* It creates a **new container instance**. This is a runnable instance of the image with its own isolated environment.
* It sets up an **isolated filesystem** for the container, which is derived from the image but <u>allows for changes</u> without affecting the underlying image.
* It **initializes the environment** according to any configurations specified in the Dockerfile *(like environment variables)* or provided in the run command *(like port mapping, volume attachment, etc.)*.
* It **executes the default command** specified in the image or any command you specify in the run command.
</div>


<base class="mt">
**B.** You can also **search for the Docker containers online** from the <a href="https://hub.docker.com/" target="_blank">Docker Hub website ⤴</a>. <br>
Use the search bar at the top to search and then click on the desired container.
![d4]({{ images_path }}/06_Docker_Hub.png)

**Now copy the pull command by clicking on it.**
![d5]({{ images_path }}/06_Docker_Hub_pull.png)

**Open a terminal and paste the command:** *(assuming you have [docker installed](#docker-setup) already)*
```
docker pull biocontainers/ncbi-blast-plus
```
Press <button class="btn">enter</button>. *The image will be downloaded.*


# Using Docker containers in command line

*Docker can be used through the app or via command line (use in terminal).*

Open the terminal and enter the following to check the version of docker (and if it [installed](#docker-setup) properly).
```bash
docker --version
```
<pre class="output">
Docker version 20.10.16, build aa7e414
</pre>

Run following command to see full list of commands for `docker`.
```bash
docker --help
```
<details class="l-frame" markdown="1"><summary class="c-header"><b><i>see the expected output (Docker help message)</i></b></summary>
<pre class="output">
Usage:  <span class="c-alert">docker</span> <span class="c-good">[OPTIONS]</span> <span class="c-example">COMMAND</span>

A self-sufficient runtime for containers

Options:
<span class="c-good">      --config string</span>      Location of client config files (default "/Users/abadacz/.docker")
<span class="c-good">  -c, --context string</span>     Name of the context to use to connect to the daemon (overrides DOCKER_HOST env var and default
                                                       context set with "docker context use")
<span class="c-good">  -D, --debug</span>              Enable debug mode
<span class="c-good">  -H, --host list</span>          Daemon socket(s) to connect to
<span class="c-good">  -l, --log-level string</span>   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
<span class="c-good">      --tls</span>                Use TLS; implied by --tlsverify
<span class="c-good">      --tlscacert string</span>   Trust certs signed only by this CA (default "/Users/abadacz/.docker/ca.pem")
<span class="c-good">      --tlscert string</span>     Path to TLS certificate file (default "/Users/abadacz/.docker/cert.pem")
<span class="c-good">      --tlskey string</span>      Path to TLS key file (default "/Users/abadacz/.docker/key.pem")
<span class="c-good">      --tlsverify</span>          Use TLS and verify the remote
<span class="c-good">  -v, --version</span>            Print version information and quit

Management Commands:
  <span class="c-example">builder</span>     Manage builds
  <span class="c-example">buildx*</span>     Docker Buildx (Docker Inc., v0.8.2)
  <span class="c-example">compose*</span>    Docker Compose (Docker Inc., v2.2.3)
  <span class="c-example">config</span>      Manage Docker configs
  <span class="c-example">container</span>   Manage containers
  <span class="c-example">context</span>     Manage contexts
  <span class="c-example">image</span>       Manage images
  <span class="c-example">manifest</span>    Manage Docker image manifests and manifest lists
  <span class="c-example">network</span>     Manage networks
  <span class="c-example">node</span>        Manage Swarm nodes
  <span class="c-example">plugin</span>      Manage plugins
  <span class="c-example">sbom*</span>       View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc., 0.6.0)
  <span class="c-example">scan*</span>       Docker Scan (Docker Inc., v0.17.0)
  <span class="c-example">secret</span>      Manage Docker secrets
  <span class="c-example">service</span>     Manage services
  <span class="c-example">stack</span>       Manage Docker stacks
  <span class="c-example">swarm</span>       Manage Swarm
  <span class="c-example">system</span>      Manage Docker
  <span class="c-example">trust</span>       Manage trust on Docker images
  <span class="c-example">volume</span>      Manage volumes

Commands:
  <span class="c-example">attach</span>      Attach local standard input, output, and error streams to a running container
  <span class="c-example">build</span>       Build an image from a Dockerfile
  <span class="c-example">commit</span>      Create a new image from a container's changes
  <span class="c-example">cp</span>          Copy files/folders between a container and the local filesystem
  <span class="c-example">create</span>      Create a new container
  <span class="c-example">diff</span>        Inspect changes to files or directories on a container's filesystem
  <span class="c-example">events</span>      Get real time events from the server
  <span class="c-example">exec</span>        Run a command in a running container
  <span class="c-example">export</span>      Export a container's filesystem as a tar archive
  <span class="c-example">history</span>     Show the history of an image
  <span class="c-example">images</span>      List images
  <span class="c-example">import</span>      Import the contents from a tarball to create a filesystem image
  <span class="c-example">info</span>        Display system-wide information
  <span class="c-example">inspect</span>     Return low-level information on Docker objects
  <span class="c-example">kill</span>        Kill one or more running containers
  <span class="c-example">load</span>        Load an image from a tar archive or STDIN
  <span class="c-example">login</span>       Log in to a Docker registry
  <span class="c-example">logout</span>      Log out from a Docker registry
  <span class="c-example">logs</span>        Fetch the logs of a container
  <span class="c-example">pause</span>       Pause all processes within one or more containers
  <span class="c-example">port</span>        List port mappings or a specific mapping for the container
  <span class="c-example">ps</span>          List containers
  <span class="c-example">pull</span>        Pull an image or a repository from a registry
  <span class="c-example">push</span>        Push an image or a repository to a registry
  <span class="c-example">rename</span>      Rename a container
  <span class="c-example">restart</span>     Restart one or more containers
  <span class="c-example">rm</span>          Remove one or more containers
  <span class="c-example">rmi</span>         Remove one or more images
  <span class="c-example">run</span>         Run a command in a new container
  <span class="c-example">save</span>        Save one or more images to a tar archive (streamed to STDOUT by default)
  <span class="c-example">search</span>      Search the Docker Hub for images
  <span class="c-example">start</span>       Start one or more stopped containers
  <span class="c-example">stats</span>       Display a live stream of container(s) resource usage statistics
  <span class="c-example">stop</span>        Stop one or more running containers
  <span class="c-example">tag</span>         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  <span class="c-example">top</span>         Display the running processes of a container
  <span class="c-example">unpause</span>     Unpause all processes within one or more containers
  <span class="c-example">update</span>      Update configuration of one or more containers
  <span class="c-example">version</span>     Show the Docker version information
  <span class="c-example">wait</span>        Block until one or more containers stop, then print their exit codes

Run <span class="c-alert">docker</span> <span class="c-example">COMMAND --help</span> for more information on a command.

To get more help with docker, check out our guides at https://docs.docker.com/go/guides/
</pre></details>


## Run Docker container using Apptainer or Singularity

If you are unable to use Docker, for example you may be on an HPC, you can run Docker containers through Apptainer/Singularity.

```bash
module load apptainer
apptainer pull docker://user/image:tag
```
or
```bash
module load singularity
singularity pull docker://user/image:tag
```

<div class="more" markdown="1">
Check out the <a href="https://apptainer.org/docs/user/latest/cli/apptainer_pull.html" target="blank">official guide ⤴</a> to `apptainer pull` command for more details. <br>
Check out the <a href="https://docs.sylabs.io/guides/3.2/user-guide/cli/singularity_pull.html" target="blank">official guide ⤴</a> `singularity pull` command for more details.
</div>


# <button class="btn example mr">hands-on with Docker containers</button>

Let's test the `blast-plus` container image we pulled by doing a simple `blast` between two fasta files. I put my fasta files in a folder named `blast` on my desktop.

### *Run the image in the Docer Desktop*

First we need to `Run` the image to convert it into a container.
<div class="warning" markdown="1">
When you `Run` an image in Docker, you're not just making a local copy of the container; you're actually initializing and starting a new container instance based on the image's blueprint, ready to serve whatever application or task the image is set up to perform. **This step is critical** because it translates the static image into an active process capable of performing tasks or serving applications.
</div>
This can be done via the Docker Desktop app.
![d6]({{ images_path }}/06_run_image.png)

A dialogue box will open; click on the optional settings and add path to your data in `Host path` and type `\data` in `Container path` under **Volumes** section.
Click `Run` to initiate a new container.
<img width="600" src="{{ images_path }}/06_new_container.png">

Go to the **Containers** tab *(top-left)* and find the running container. Click on it to open details.
![d8]({{ images_path }}/06_run_container.png)

**Make sure the container is running.** You should see a <button class="btn">stop</button> button, if not click on the <button class="btn">Run</button> button. Then go to the terminal to use the `blast` and all its options.
![d9]({{ images_path }}/06_container_terminal.png)

### *Run the image in the command line*

<div class="warning" markdown="1">
I had trouble at container <button class="btn">Run</button> step as it would not run and exit immediately. <br>
This could happen due to a number of reasons including <u>memory problems or problems with a path</u>.
</div>

There is an easy fix for in-GUI-related problems, i.e., make the container (run the image) in a terminal. You will need the `image ID` for this, so copy it from **Images** tab in the Docker Desktop.
![d10]({{ images_path }}/06_imageID.png)
<p class="footnote mt-">copied image-ID: eaeed4320e5as0b1d136533f02</p>

<div class="protip" markdown="1">
You can also find images and their details including image ID from the terminal. <br>
Open a terminal (for example, PowerShell on windows) and enter `docker images` to list all images.
</div>

To initiate a container in the command line, follow the syntax:
```bash
docker run -v path-to-your-blast-files:/data -it image-ID bash
```

by replacing the `path-to-your-blast-files` with the path to your input files and pasting the copied `image-ID`. It might look something like this:
```bash
docker run -v C:\Users\abc\Desktop\blast:/data -it eaeed4320e5as0b1d136533f02 bash
```

The `:/data` after your path is the default container path (keep it as is) and the `image-ID` is usually a long string of numbers and letters. *This will initiate an interactive run of the docker container.*

You can now use the `blast` programs in the terminal directly:
```bash
blastn -query testq.fa - subject testsub.fa -outfmt 6 -out Blast_out
```
*Running this command successfully generated the output file, which I named* `Blast_out`.
<pre class="output">
<b class="prompt-3"></b>ls
Blast_out testq.fa testsub.fa
</pre>

<div class="protip" markdown="1">
You should now see that the container is running in Docker Desktop. You can also use the app's built-in terminal to run the `blast` commands.
</div>
