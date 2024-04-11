---
title: "Raster graphics tools"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 08-visualization/assets/images/08_data_visualization_banner.png
type: "tutorial"
order: 812
level: 2
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

Raster graphics, also known as `bitmap graphics`, are a type of digital image that is composed of a **grid of individual pixels**. Each pixel in a raster image carries specific color information, which collectively creates the overall image. Raster graphics are commonly used in various fields such as photography, digital art, web design, and video games.

### Pros & Cons of Raster

In the context of research visualization, raster graphics are commonly used for displaying images, photographs, and complex visualizations where detailed representation is essential. However, it is crucial to consider factors such as file size, resolution requirements, and the need for scalability when incorporating raster graphics into research visualizations.

| PROS | CONS |
|------|------|
|`Photo Editing and Manipulation` <br>Raster graphics tools offer a wide range of editing capabilities, enabling precise adjustments, retouching, and **enhancements to photographs** and images.|`Editing Constraints` <br>Once a raster image is saved and closed, it becomes **challenging to modify individual elements**, such as shapes or text, without affecting the entire image. This limitation can hinder flexibility and ease of editing.|
|`Detail and Realism` <br>Raster graphics excel in capturing intricate details, making them suitable for **realistic representations** of objects, textures, and natural scenes.|`Resolution Dependence` <br>Raster graphics have a fixed resolution, meaning they are composed of a specific number of pixels. Enlarging a raster image beyond its original resolution can lead to **pixelation and loss of quality**.|
|`Rich Color and Effects` <br>Raster graphics allow for a **broad spectrum of colors**, gradients, and visual effects, making them ideal for creating vibrant and visually appealing visuals.|`Limited Scalability` <br>Due to resolution dependence, raster graphics are **NOT easily scalable** without loss of quality. They are best suited for specific output sizes and may require recreating or resampling for different dimensions.|
|`Pixel-Level Control` <br>As raster images are composed of individual pixels, they provide fine-grained **control over every pixel**, allowing for precise editing and manipulation.|`Non-Ideal for Vector-Based Graphics` <br>Raster graphics are not the optimal choice for graphics that require infinite scalability, precise geometric shapes, or the ability to modify individual elements separately, which are better suited for vector graphics.|
|`Wide Software Support` <br>Numerous powerful raster graphics software tools are available, offering a variety of features and functionalities to cater to different needs and skill levels.|`File Size and Storage` <br>Raster graphics can **consume significant storage space**, especially for high-resolution images. This can pose challenges when dealing with large datasets or limited storage capacity.|


## Raster Graphics in Science

Raster graphics find extensive usage in various research disciplines for visualizing and analyzing data. In all scientific applications, raster graphics provide a means to represent complex data, visualize intricate structures, and facilitate data analysis. They enable scientists to communicate their findings effectively, discover insights, and advance knowledge in their respective fields.

Here are some notable applications of raster graphics in science:

| Graphics example | Discipline Applications |
|------------------|-------------------------|
|<img width="800" src="{{ images_path }}/01-raster_astronomical.jpeg">|**Astronomical Imaging** <br>Raster graphics are extensively used in astronomical imaging to capture and analyze images of celestial objects and phenomena. Raster images help scientists study distant galaxies, star formations, cosmic radiation, and other astronomical events, contributing to our understanding of the universe.|
|![]({{ images_path }}/01-raster_satelite.png)|**Remote Sensing and GIS** <br>Raster graphics play a crucial role in remote sensing and geographic information systems (GIS). Satellite imagery, aerial photographs, and sensor data are often represented as raster images to analyze land cover, monitor environmental changes, study ecosystems, and aid in urban planning.|
|![]({{ images_path }}/01-raster_microscopy.jpeg)|**Imaging and Microscopy** <br>Raster graphics are widely employed in medical imaging, microscopy, and other imaging techniques. They are used to represent and analyze detailed images of cells, tissues, and structures, allowing scientists to study biological processes, detect abnormalities, and aid in diagnoses.|
|![]({{ images_path }}/01-raster_nanomaterials.jpeg)|**Electron Microscopy** <br>In materials science and nanotechnology, raster graphics are utilized in electron microscopy to capture and analyze high-resolution images of materials at the atomic scale. Raster images enable scientists to examine the structural properties, surface morphology, and composition of various materials.|
|![]({{ images_path }}/01-raster_brain_mri.jpeg)|**Neuroscience Imaging** <br>Raster graphics are instrumental in brain imaging techniques such as functional magnetic resonance imaging (fMRI) and positron emission tomography (PET). Raster images derived from these techniques help scientists map brain activity, study brain connectivity, and investigate neurological disorders.|
|![]({{ images_path }}/01-raster_molecular.jpeg)|**Computational Simulations** <br>Raster graphics are used to visualize the results of computational simulations and modeling in various scientific fields. Whether it's fluid dynamics, climate modeling, or molecular dynamics, raster images help scientists observe and analyze complex data, facilitating a better understanding of complex systems and phenomena.|
|![]({{ images_path }}/01-raster_heatmap.jpeg)|**Data Visualization** <br>Raster graphics are essential for visualizing scientific data, particularly when dealing with multidimensional or continuous datasets. Heatmaps, contour plots, and color-coded representations are some common visualization techniques used to represent data in raster format, enabling scientists to identify patterns, trends, and relationships in the data.|


### Applications of editing raster graphics

<span style="color: #ff3870;font-weight: 500;"> Knowing editing techniques of raster graphics can be highly beneficial for scientists!</span><br>
Here are several examples of how proficiency in raster graphic editing can assist you in visualizing scientific results:
* **Annotation and Labeling** <br>*Adding annotations and labels to images is a common practice in scientific research. Scientists can use raster graphic tools to annotate images with text, arrows, and other graphical elements to provide context, highlight specific regions, or explain key findings. This helps in clearly communicating important information to peers or when publishing research.*

* **Composite Image Creation** <br>*In some cases, scientists need to combine multiple images or visual elements into a single composite image. This could involve merging images from different experiments or overlaying different layers of information. Proficiency in raster graphic editing allows scientists to seamlessly integrate and align these elements to create informative and visually appealing composite images.*

* **Image Segmentation and Analysis** <br>*In fields like medical imaging or biology, scientists often need to segment and analyze specific regions or structures within an image. Raster graphic tools provide tools and algorithms for image segmentation, allowing scientists to separate and study different components within an image, measure their characteristics, and perform quantitative analysis.*

* **Noise Reduction and Filtering** <br>*Scientific images may suffer from noise or unwanted artifacts due to various factors, such as equipment limitations or interference. Raster graphic tools offer techniques like denoising filters and image restoration algorithms to reduce noise and enhance image quality. This enables scientists to improve the accuracy and reliability of their analysis.*

* **Image Enhancement** <br>*Scientists often work with images captured from experiments, simulations, or observations. Having knowledge of editing techniques allows scientists to enhance these images for better visibility and clarity. They can adjust brightness, contrast, color balance, and sharpness to bring out important details or highlight specific features of interest.*

* **Data Visualization** <br>*Raster graphics can be used to create visual representations of scientific data. Scientists can apply visualization techniques to present ideas, concepts, and insights of their studies. This includes creating infographics and diagrams to depict patterns, trends, and correlations in the discovered findings.*

### Ethics of editing raster graphics

The scientific community relies on transparent and unbiased reporting of results to ensure the reproducibility and validity of research. Modifying data using raster editors undermines the trust and reliability of scientific investigations, potentially leading to misleading conclusions and hampering scientific progress.

<div class="warning" markdown="1">
**Modifying or artificially changing research results using a raster editor is strongly discouraged and considered unethical.** <br>
It is crucial to maintain the integrity and credibility of scientific research by presenting accurate and unaltered data. Altering or manipulating research results using raster graphic editing tools can lead to misrepresentation, distortion of findings, and a breach of scientific ethics.
</div>

## Common file formats: <br>PNG, JPEG, TIFF

<div class="note" markdown="1">
**Raster graphics formats** are image file formats that store and represent images as a grid of pixels, where each pixel contains color and intensity information. These formats are widely used for various applications, including digital photography, graphic design, and web graphics.
</div>

Each raster graphics format offers unique features and characteristics, catering to different needs and use cases. The choice of format depends on factors such as image complexity, desired image quality, transparency requirements, file size considerations, and compatibility with specific software or platforms.

**PNG** *(Portable Network Graphics)* <br>
PNG is a versatile format that **supports lossless compression**, preserving image quality without any loss of information. It also **supports alpha channel transparency**, allowing for the creation of images with irregular or non-rectangular shapes.

**JPEG** *(Joint Photographic Experts Group)* <br>
JPEG is a widely used format for storing digital photographs and complex images. It **uses lossy compression**, which reduces file size by selectively discarding image data. This can result in a **smaller file size** but may lead to a slight loss of image quality.

**TIFF** *(Tagged Image File Format)* <br>
TIFF is a versatile format used for storing high-quality images with **support for lossless compression**. It allows for multiple layers, color depths, and embedded metadata. TIFF files are commonly used in professional environments, such as printing and archiving. It also supports a **flexible metadata storage**.

**GIF** *(Graphics Interchange Format)* <br>
GIF **supports animation**, allowing multiple frames to be combined into a single file. It also **supports indexed color**, where a limited palette of colors is used **to reduce file size**. This makes GIF a popular choice for simple animations and graphics with solid colors.

**BMP** *(Bitmap)* <br>
BMP is a straightforward format that **stores images pixel by pixel without any compression**. It supports both color and grayscale images and is widely supported on various operating systems. However, the lack of compression results in **larger file sizes** compared to other formats.

**PSD** *(Photoshop Document)* <br>
PSD is **Adobe Photoshop's native file format**, supporting layers, masks, and other advanced features. It allows for **non-destructive editing** and retains all the information, making it suitable for complex graphic designs and professional workflows.


## Raster Graphics Tools

To work with raster graphics effectively, there are numerous powerful tools available that offer a wide range of features and functionalities. These raster graphic tools are designed to **manipulate and edit pixel-based images**, allowing users to create, enhance, and modify visuals in a versatile manner.

Let's explore some of the essential raster graphic tools that professionals and enthusiasts frequently employ. Depending on your specific requirements and skill level, you can choose the tool that suits your needs and budget.

Here's a table summarizing the features of selected raster graphics tools:

| tool           |features | supported formats | price |
|----------------|---------|-------------------|-------|
|GIMP            |image editing, composition, graphic design|JPEG, PNG, GIF, TIFF, PSD, BMP, and more|free and open-source|
|Adobe Photoshop |image editing, retouching, color correction|JPEG, PNG, GIF, TIFF, PSD, BMP, and more|subscription-based|
|CorelDRAW       |vector graphics, raster editing, design|JPEG, PNG, GIF, TIFF, PSD, BMP, and more|subscription-based|
|Pixlr           |basic image editing, resizing, color adjustments, AI images|JPEG, PNG, GIF, TIFF, BMP, and more|free and paid options|
|Affinity Photo  |professional-grade editing, advanced retouching|JPEG, PNG, GIF, TIFF, PSD, BMP, and more|one-time purchase|

### GIMP

<a href="https://www.gimp.org/" target="_blank">GIMP  ⤴</a> (GNU Image Manipulation Program) is a **free and open-source** raster graphic tool that offers functionality similar to Adobe Photoshop. It provides a powerful set of tools for image editing, composition, and graphic design. GIMP supports various file formats, features advanced selection tools, layers, masks, and customizable brushes. It is highly versatile and widely used by professionals and enthusiasts alike.

### Adobe Photoshop

<a href="https://www.adobe.com/products/photoshop.html" target="_blank">Adobe Photoshop  ⤴</a> is one of **the most popular and widely used** raster graphic tools. It provides a comprehensive suite of features for image editing, retouching, color correction, and digital painting. With Photoshop, users can adjust image properties, apply filters and effects, create layers, and work with various selection tools, brushes, and gradients.

### CorelDRAW

<a href="https://www.coreldraw.com/" target="_blank">CorelDRAW  ⤴</a> is a popular raster graphic tool specifically focused on vector graphics, but it also includes robust raster editing capabilities. It offers a comprehensive set of tools for illustration, photo editing, and design. CorelDRAW allows users to manipulate raster images, apply filters, work with layers, and create stunning compositions by **combining vector and raster elements**.

### Pixlr

<a href="https://pixlr.com/" target="_blank">Pixlr  ⤴</a> is a **web-based raster graphic** tool that provides a simple and accessible platform for image editing or **AI image generation**. It offers a user-friendly interface with **basic editing tools**, such as cropping, resizing, color adjustments, **and various effects**. Pixlr is suitable for quick image edits and is widely used by casual users, bloggers, and social media enthusiasts.

### Affinity Photo

<a href="https://affinity.serif.com/en-gb/photo/" target="_blank">Affinity Photo  ⤴</a> is a raster graphic tool known for its **professional-grade editing capabilities**. It offers a wide range of advanced features, including precise selection tools, non-destructive editing, advanced retouching options, and support for various file formats. Affinity Photo is favored by photographers, graphic designers, and other professionals who require sophisticated image editing tools.


# Getting started with GIMP

<a href="https://www.gimp.org/" target="_blank">GIMP  ⤴</a> is a powerful and versatile raster graphic editing software. GIMP is widely recognized as a popular **free and open-source** alternative to commercial software like Adobe Photoshop, providing a comprehensive set of tools for both casual users and professionals.

![01-raster_gimp_start.png]({{ images_path }}/01-raster_gimp_start.png)

## Features summary

**Cross-platform availability** <br>
One of the notable advantages of GIMP is its availability across multiple platforms, including Windows, macOS, and Linux, making it accessible to a broad user base.

**User-friendly interface** <br>
It boasts a user-friendly interface that is highly customizable, allowing users to tailor the workspace according to their preferences and workflow.

**Support for many formats** <br>
It supports a variety of file formats, including common formats such as JPEG, PNG, GIF, TIFF, and PSD (Adobe Photoshop's native format).

**Plethora of features for image manipulation and editing** <br>
* Users can perform tasks such as cropping, resizing, retouching, color correction, and applying a wide range of filters and effects to enhance their images.

* GIMP provides advanced tools for selections, layers, masks, and brushes, offering users greater control and flexibility over their editing process.

* The software supports non-destructive editing, allowing users to make changes to images without permanently altering the original data.

**Scripting and automation** <br>
GIMP also supports scripting and automation, enabling users to create custom scripts and plugins to enhance their workflow and automate repetitive tasks.

**Community support** <br>
Open-source nature of GIMP fosters a vibrant community of users and developers who actively contribute to its development and share resources, tutorials, and plugins, making it a robust and ever-evolving software.

## **Tutorial: Basics of GIMP**

<span style="color: #ff3870;font-weight: 500;">This tutorial covers installation and some basic functions in GIMP to get you started.</span> As you become more familiar with the software, you can explore its extensive capabilities, including advanced selection tools, masks, brushes, and more. <br>
Additionally, there are numerous online tutorials, forums, and resources available to further enhance your skills and explore GIMP's full potential. <b>A good starting point for more advanced tutorials is the <a href="https://www.gimp.org/tutorials/" target="_blank">official GIMP website ⤴</a>:</b>
* **BEGINNER**
  * <a href="https://www.gimp.org/tutorials/GIMP_Quickies/" target="_blank">GIMP Quickies  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/Floating_Logo/" target="_blank">Simple Floating Logo  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/CircleImage/" target="_blank">Making a Circle-Shaped Image  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/Layer_Masks/" target="_blank">Layer Masks  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/Basic_Color_Curves/" target="_blank">Basic Color Curves  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/ImageFormats/" target="_blank">Image Formats Overview  ⤴</a>
* **ADVANCED**
  * <a href="https://www.gimp.org/tutorials/Focus_Group/" target="_blank">Focus Group - Layer masking and creative filter applications  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/Parametric_Brush/" target="_blank">Painting - Parametric Brushes  ⤴</a>
  * <a href="https://www.gimp.org/unix/fonts.html" target="_blank">How to install fonts for use with GIMP  ⤴</a>
* **PROGRAMMING**
  * <a href="https://www.gimp.org/tutorials/Basic_Perl/" target="_blank">Basics of GIMP - Perl module  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/Automate_Editing_in_GIMP/" target="_blank">Automate Editing with GIMP - Python  ⤴</a>
  * <a href="https://www.gimp.org/tutorials/AutomatedJpgToXcf/" target="_blank">Automatic Creation of XCF from JPG  ⤴</a>


## Installation and Setup

Download GIMP from the <a href="https://www.gimp.org/downloads/" target="_blank">official website  ⤴</a> based on your operating system.

![01-raster_gimp_download.png]({{ images_path }}/01-raster_gimp_download.png)

On the same page, below the download buttons, are the detailed installation instructions - follow them to get GIMP on your local computing machine.

## Launch GIMP to start the GUI

After installing GIMP on different operating systems, you can find and launch the software using the following methods:

**WINDOWS**

**1.** `Start Menu:` Click on the `Start` button located in the lower-left corner of the screen. In the search bar, type "GIMP" and press `Enter`. The GIMP application should appear in the search results. Click on it to launch the program.

or

**2.** `Desktop Shortcut`: If you selected the option to create a desktop shortcut during the installation process, you can find the GIMP icon on your desktop. Double-click on the icon to open GIMP.

**macOS**

**1.** `Launchpad`: Click on the Launchpad icon in the Dock *(the rocket ship icon)*. Use the search bar at the top and type "GIMP." As you start typing, the search results will narrow down, and you should see the GIMP icon. Click on it to launch GIMP.

or

**2.** `Applications Folder`: Open a Finder window and navigate to the **Applications** folder. Scroll through the list of applications until you find GIMP. Double-click on the GIMP icon to open the program.

**Linux: Ubuntu**

**1.** `Dash/Search`: Click on the "Show Applications" button *(usually located at the bottom left or top left corner of the screen)*. In the search bar, type "GIMP" and press Enter. The GIMP application should appear in the search results. Click on it to launch GIMP.

or

**2.** `Terminal`: Open a terminal window and type "gimp" *(without quotes)* and press Enter. GIMP should start running in the terminal. You can also create a desktop shortcut or add GIMP to your application launcher for easier access.


## Opening an Image

1. Go to `File` in the menu bar and select `Open` or use the shortcut `Ctrl+O`.
2. Navigate to the location where your image is saved and select it.
3. Click on the `Open` button to load the image into GIMP.

![01-raster_gimp_open.png]({{ images_path }}/01-raster_gimp_open.png)

## Image Manipulation

### Adding Text

Select the **Text Tool** from the toolbox or press `T`. Click on the image and start typing to add text. Customize font, size, color, and alignment using the tool options.

![01-raster_gimp_text.png]({{ images_path }}/01-raster_gimp_text.png)

When adding text in GIMP, it automatically creates a new layer on the image, allowing the text to be moved or edited later if needed.

### Cropping

Select the **Crop Tool** from the toolbox on the left or press `Shift+C`. Click and drag to define the area you want to keep, and press `Enter` to crop the image.

![01-raster_gimp_crop.png]({{ images_path }}/01-raster_gimp_crop.png)

### Resizing

Go to **Image** tab in the menu bar, select `Scale Image` or right-click on the image to display the context menu, then select `Image -> Scale Image`. Specify the desired width and height in selected units *(e.g., pixels, inches, percentage)* and decide to keep proportion of the dimensions. Click `Scale` to resize the image.

![01-raster_gimp_resize1.png]({{ images_path }}/01-raster_gimp_resize1.png)

![01-raster_gimp_resize2.png]({{ images_path }}s/01-raster_gimp_resize2.png)

### Rotating

Select the **Rotate Tool** from the toolbox or press `Shift+R`. Click and drag to rotate the image. Use the `Angle` input in the tool options to set the desired rotation angle. Click `Rotate` to approve the rotation.

![01-raster_gimp_rotate.png]({{ images_path }}/01-raster_gimp_rotate.png)

### Adjusting Colors

Go to **Colors** tab in the menu bar and explore options like:
* `Color Balance` - adjust color distribution
* `Color Temperature`
* `Hue-Saturation` - adjust hue, saturation, and lightness
* `Brightness-Contrast`
* `Levels` - adjust color levels

to make adjustments to the image's color and tone.

<div class="warning" markdown="1">
Keep caution when editing layers in GIMP and ensure the correct layer is selected to avoid unintended modifications. To change the active layer in GIMP, go to the **Layers** dialog panel (typically on the bottom-right) and click on the layer intended for edition. The currently active layer is highlighted. See <a class="t-links" href="812" section="#layers">Layers section</a> for more details.
</div>

![01-raster_gimp_colors1.png]({{ images_path }}/01-raster_gimp_colors1.png)

In the pop-up window adjust values of the parameters and click `OK` to approve.

![01-raster_gimp_colors2.png]({{ images_path }}/01-raster_gimp_colors2.png)


## Layers and Effects

### Layers

Go to `Windows` in the menu bar and select `Dockable Dialogs` followed by `Layers`. The Layers dialog will appear. Click on the `New Layer` button at the bottom to add a new layer.

![01-raster_gimp_layer.png]({{ images_path }}/01-raster_gimp_layer.png)

Experiment with different `New Layer` options, including blending modes and opacity settings. You can also modify a new layer with using various toolbox options, e.g., you can use the `Bucket fill tool` to change a color of the background. Finally, arrange the stack of all layers to achieve desired transparency effects.

![01-raster_gimp_layer2.png]({{ images_path }}/01-raster_gimp_layer2.png)

### Filters

Go to `Filters` in the top menu bar and explore various filter categories like `Blur`, `Light and Shadow`, or `Artistic` to apply effects to your image.

![01-raster_gimp_filers.png]({{ images_path }}/01-raster_gimp_filters.png)

For example, experiment with different `Light and Shadow` filters such as `Lighting Effects` or `Long Shadow` and adjust their settings to achieve desired results.

![01-raster_gimp_shadow.png]({{ images_path }}/01-raster_gimp_shadow.png)

## Saving and Exporting

### Saving

Go to `File` in the menu bar and select `Save` or use the shortcut `Ctrl+S` to save your work in GIMP's native `.xcf` format, which preserves layers and allows further editing.

### Exporting

To save the image in a widely supported format, go to `File` and select `Export As` or use the shortcut `Shift+Ctrl+E`. Choose a format like JPEG or PNG, specify the file name and location, and click `Export`.
