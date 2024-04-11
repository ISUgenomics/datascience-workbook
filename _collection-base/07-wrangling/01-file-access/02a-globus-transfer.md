---
title: "Copying Data using Graphical Interface: <b>Globus</b>"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 712.1
level: 3
categories: []
tags: []
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

# File Transfer Using Globus Connect Personal (GCP)

This tutorial explains how to transfer files to/from GIF server. You will need [Global Connect Personal](https://www.globus.org/globus-connect-personal) application to facilitate the file transfer.
Globus Connect Personal turns your laptop or other personal computer into a Globus endpoint and allows you to transfer and share files easily. Follow the instructions to set up a Globus account and transfer files to/from GIF server.

### 1.	Create Globus account and endpoint ###
Go to [https://www.globus.org/SignIn](https://www.globus.org/SignIn) and log in to your Globus account. If you do not have an account already, click `sign up with Globus` and follow the instructions to create an account.

![]({{ images_path }}/1.png)# File Transfer Using Globus Connect Personal (GCP)


After signing in, click on `Globus Connect Personal` to manage endpoints.

![]({{ images_path }}/2.png)

Next,
![]({{ images_path }}/3.png)


Enter a desired endpoint name in the `Display Name` box and click `Generate Setup Key`. A unique setup key associated with the newly created endpoint will be generated.

![]({{ images_path }}/4.png)

Copy this key, since you will need it for next step. Download and install Globus Connect Personal (GCP) to your computer or laptop. During installation, you will be prompted to enter the setup key.

![]({{ images_path }}/5.png)

In Windows OS, the default folder for GCP access is Documents. If you would like to change that, click on `Yes, modify settings` and select the desired folder. For Mac users, the home directory is the default folder for GCP access. To modify the preferences, click on GCP icon from the menu extras (upper right corner of the Mac screen) and select preferences. You will see options to change the default folder settings in Access tab.

![]({{ images_path }}/6a.png) ![]({{ images_path }}/6b.png)

Add the folder by clicking `+` and select the desired folder. To remove access to a folder, select the line and click `-`button at the bottom.   Click `Save` to complete configuration

![]({{ images_path }}/7a.png) ![]({{ images_path }}/7b.png)
You are now ready to transfer and share files only from/to this directory. Place the files you want to share in this directory.

![]({{ images_path }}/8.png)

### 2.	Transferring Files ###
Once you have successfully installed and set up GCP, you can initiate file transfers using a web browser. Log in to https://www.globus.org/ .Click on `Transfer files` (under `Manage Data` as shown below)

 ![]({{ images_path }}/9.png)

The left window is the source and right window is the destination/target to copy files.  Click on left window `Endpoint` box, and select `My Endpoints`. Choose the one that you just created in the previous step. Click on the folder to display its contents. NOTE: If you do not see the entire contents, click on `refresh list` icon at the top of the left window.

![]({{ images_path }}/10.png)
![]({{ images_path }}/11.png)
Now go the destination/target `Endpoint` and search for `arnstrm#isugif`, it should appear as a suggestion below.

![]({{ images_path }}/12.png)

Select that, you will be asked for a username and password.

![]({{ images_path }}/13.png)

Enter the Username and Password, you received from us. Once the authentication is successful, you will see a folder in your name. Double click the folder to display its contents. Note that the folder may be empty.

![]({{ images_path }}/14a.png) ![]({{ images_path }}/14b.png)

Select the files you want to transfer (or slect all) and click the blue directional button to start the transfer.

![]({{ images_path }}/15.png)

You will see a confirmation saying that the request has been submitted. It might take a few hours to completely transfer the data. The computer must stay on while the transfer is in progress. You may close the browser, if you wish. You will get an email when the transfer is complete.

![]({{ images_path }}/16.png)

Once you get the email, you can shut down the computer or exit the Globus application running in the background.
