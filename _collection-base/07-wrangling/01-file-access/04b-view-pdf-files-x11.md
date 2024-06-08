---
title: "Viewing PDF and PNG files using X11 SSH connection"
layout: single
author: Aleksandra Badaczewska
author2: Andrew Severin
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 714.2
level: 3
categories: ["data-preview", "data-types", "computing-tools", "hpc", "remote-access", "command-line"]
tags: ["graphics", "file-format", "PDF", "PNG", "data-exploration", "ImageMagic", "gnuplot", "in-browser", "firefox"]
attributes: ["example", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

<div class="note before" markdown="1" data-before="PDF">
PDF (**Portable Document Format**) is a widely used file format designed to present documents consistently across multiple devices and platforms, preserving fonts, images, graphics, and layout. It is ideal for distributing read-only documents that need to maintain exact formatting for printing or professional presentation.
</div>

<div class="note before" markdown="1" data-before="PNG">
PNG (**Portable Network Graphics**) is a popular image file format known for its lossless compression, allowing for detailed, high-quality images without data loss. It supports transparency and is commonly used for web graphics, digital art, and anywhere image clarity and fidelity are important. PNG is ideal for storing line drawings, text, and iconic graphics at a small file size.
</div>

<div class="note before" markdown="1" data-before="X11 forwarding">
X11 forwarding **in an SSH connection** allows users to run software on a remote machine while forwarding the graphical output to their local machine's display. This technique is especially useful for viewing or interacting with graphical applications, like PDF viewers, on a server where no direct graphical user interface is available.
</div>

## **PDF files**

Most <a class="t-links" href="610">HPC infrastructures</a> allows X11 forwarding. You can enable this when you are logging in to the remote host using the `-X` option. <br>
*For example:*
```bash
ssh -X username@nova.its.iastate.edu
```
<pre class="output">
(username@nova.its.iastate.edu) Verification code:
(username@nova.its.iastate.edu) Password:
Last login: Tue May 14 11:31:09 2024 from 173.22.227.6
<b class="prompt-1 before" data-before="[username@nova ~]$ "></b>
</pre>

<div class="protip" markdown="1">
Use the SSH command to connect to your remote server with X11 forwarding enabled. <br>
Include the `-Y` **flag, which is more secure than** `-X` for enabling trusted X11 forwarding:
```bash
ssh -Y username@nova.its.iastate.edu
```
</div>

Once logged in, you can now open any GUI interface programs on the remote-host and it appears as a new window in your local machine.

Although, there are plenty of program options to **open a PDF file**, you can almost always find the `firefox` browser in every machine. This should be sufficient to open a `PDF` file. <br>
To get started, type:
```bash
firefox
```

<div class="warning" markdown="1">
Please note that you may be prompted to install or update **XQuartz** on your local machine, especially if you are using a Mac. XQuartz is essential for handling the X11 forwarding process, allowing graphical data from the remote server to be displayed properly on your computer. Ensure that you have the latest version of XQuartz installed to avoid compatibility issues.
</div>

Finally, a new window of web browser will open:

![]({{ images_path }}/x11_forwarding_firefox.png)

You can use a few approaches to open a specific file in Firefox:
1. Go to `File` >> `Open file` >> *and select the pdf file you want to open*.
2. If you don't find the menu tab, pressing `alt` + `f` should bring up the `file` menu.
3. You can also replace your starting URL with the `file:///`. This will render the graphical interface of the remote file system, enabling you to easily navigate through it until you locate your PDF file.
    <img width="1000" src="{{ images_path }}/x11_file_browser.png">
    <div class="warning mt-" markdown="1">
    Remember, performance and responsiveness might vary depending on your network speed and the graphical demands of applications being forwarded. Also, ensure that network permissions and firewall settings allow for X11 forwarding.
    </div>
4. If you know the file path, you can open a file directly in a terminal by typing:
    ```bash
firefox file:///path/to/your/file.pdf
    ```
    <pre class="output"><b class="prompt-1 before" data-before="[username@nova ~]$ "></b><br><b class="prompt-1 before" data-before="[username@nova ~]$ "></b>firefox file:////project/geospatial/ODM/RESULTS/odm_report/report.pdf</pre>
    *The file will be opened in a new pop-up window or as a new tab in your browser, providing a convenient and isolated view of the content.*
    <img width="800" src="{{ images_path }}/x11_viewing_pdf_file.png">

If you don’t have a PDF file readily available on your remote cluster, you can quickly download a sample PDF file from Wikipedia:
```bash
# download the PDF file
wget https://en.wikipedia.org/api/rest_v1/page/pdf/List_of_PDF_software
# make sure the file has .pdf extension
mv List_of_PDF_software List_of_PDF_software.pdf
# preview the PDF in Firefox web browser
firefox List_of_PDF_software.pdf
```

<div class="protip" markdown="1">
Due to the limited responsiveness often associated with X11 forwarding, it is recommended to directly open a file from a known path in the terminal for a more efficient and reliable experience.
</div>


## **PNG files**

Again, you need X11 forwarding enabled to do this.

Let's try a few approaches. If you don't have a PNG image readily available, navigate to the desired location in the remote file system and download the Linux logo:
```
wget https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png
mv 800px-Tux.svg.png example.png
```
<pre class="output">
<b class="prompt-3"></b>ls
example.png
</pre>

### ImageMagic

1. If your machine/HPC infrastructure has `imagemagick` module installed, load it:
```bash
module load imagemagick
```

2. To open any picture files, you can just do:
```bash
display example.png
```

### Gnuplot

GNU Plot, primarily a plotting utility, is not directly used for simply displaying PNG files like a conventional image viewer. However, you can easily trick it to display your PNG file in a pop-up preview.

1. If your machine/HPC infrastructure has `gnuplot` module installed, load it:
    ```bash
module load gnuplot
    ```

2. Launch interactive `gnuplot` session directly in your terminal:
    ```bash
gnuplot
    ```
    <pre class="output">
<b class="prompt-1 before" data-before="[username@nova ~]$ "></b>gnuplot

	G N U P L O T
	Version 5.4 patchlevel 8    last modified 2023-06-01

	Copyright (C) 1986-1993, 1998, 2004, 2007-2023
	Thomas Williams, Colin Kelley and many others

	gnuplot home:     http://www.gnuplot.info
	faq, bugs, etc:   type "help FAQ"
	immediate help:   type "help"  (plot window: hit 'h')

    Terminal type is now 'x11'</pre>
    <div class="warning" markdown="1">
    You need to ensure that GNU Plot uses a terminal type that supports displaying graphical output, such as `wxt`, `qt`, or `x11` depending on what is available on your system. <base class="mb">
    In the interactive gnuplot session, set terminal to 'wxt' or 'x11' for enabling pop-up GUI window:
    <pre class="output plain mb-0">
<b class="prompt-1 before" data-before="[username@nova ~]$ "></b>gnuplot
<b class="prompt-1 before" data-before="gnuplot> "></b>set terminal wxt size 800,600 enhanced font 'Verdana,10' persist</pre>
    </div>

3. Then, load the PNG image into the plot area:
    ```bash
    plot 'path/to/your/image.png' binary filetype=png with rgbimage
    ```
    <pre class="output">
<b class="prompt-1 before" data-before="gnuplot> "></b>plot 'example.png' binary filetype=png with rgbimage</pre>
    <img width="400" src="{{ images_path }}/x11_gnuplot_png_preview.png">

### Firefox

If you don't have any other program installed, you can try the [firefox method](#pdf-files). <br>
Although, to view **PNG** files, you may have to install the addon before you open the file. Addons are easy to add, once the firefox is opened, press `ctrl` + `shift` + `A`, that will open `add-ons` page (you can also just type `about:addons` to open this). Search for <a href="https://addons.thunderbird.net/en-us/firefox/addon/perfect-view/?src=dp-dl-othersby" target="_blank">Perfect View  ⤴</a> add-on, and add it to your `firefox`.
<img width="800" src="{{ images_path }}/x11_firefox_addons.png">

Now you can open the file normally as you opened the PDF files:
```bash
firefox example.png
```
<img width="400" src="{{ images_path }}/x11_firefox_viewing_png.png">
