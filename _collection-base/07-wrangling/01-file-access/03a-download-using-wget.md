---
title: "Downloading Online Data using WGET"
layout: single
author: Arun Seetharam
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 07-wrangling/assets/images/07_data_acquisition_banner.png
type: "tutorial"
order: 713.1
level: 3
categories: ["HPC, computing", "data-management", "data-transfer", "command-line", "computing-tools"]
tags: ["wget", "command"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Downloading files using `wget`

<div class="note" markdown="1">
[Wget](https://en.wikipedia.org/wiki/Wget), short for "World Wide Web get," is a command-line utility used to download files from websites or web servers. It supports <a class="t-links" href="713" section="#what-is-an-http-request">downloading via HTTP, HTTPS, and FTP protocols</a> and can resume interrupted downloads. This tool is favored for its ability to retrieve files recursively and is commonly used in scripts and automated tasks.
</div>


## Learning Objective
Upon completion of this section the learner will be able to:

* Utilize wget to download a files
* Download multiple files using regular expressions
* Download an entire website


Here is a generic example of how to use `wget` to download a file:

<code class="code-block bc-template">wget http://link.edu/filename</code>


And, here you have a few specific examples:

<table class="mb-">
  <tr> <td width="25%">Photo of a kitten in Rizal Park</td> <td width="27%">Photo of Arabidopsis</td> <td>text file: UniProt reference_proteomes</td></tr>
  <tr>
       <td class="no-border"><p class="mb-0" markdown="1"> ![Photo of a kitten in Rizal Park](https://upload.wikimedia.org/wikipedia/commons/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg "Photo of a kitten in Rizal Park")</p></td>
       <td class="no-border"><p class="mb-0" markdown="1"> ![Photo of Arabidopsis](https://upload.wikimedia.org/wikipedia/commons/6/6f/Arabidopsis_thaliana.jpg "Photo of Arabidopsis")</p></td>
       <td class="no-border"><p class="mb-0" markdown="1"> ![UniProt reference_proteomes]({{ images_path }}/wget-uniprot-ref-proteomes-readme.png)</p></td>
  </tr>
</table>

```bash
wget https://upload.wikimedia.org/wikipedia/commons/0/06/Kitten_in_Rizal_Park%2C_Manila.jpg
wget https://upload.wikimedia.org/wikipedia/commons/6/6f/Arabidopsis_thaliana.jpg
wget https://ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/reference_proteomes/README
```

<pre class="output">
<b class="prompt-2"></b>
Kitten_in_Rizal_Park,_Manila.jpg          100%[===============================>] 559.14K  1.84MB/s    in 0.3s
Arabidopsis_thaliana.jpg                  100%[===============================>]  39.73K  --.-KB/s    in 0.07s
README                                    100%[===============================>]   1.61M  3.83MB/s    in 0.4s
</pre>

<div class="warning" markdown="1">
Sometimes you may find a need to download an entire directory of files and downloading directory using `wget` is not straightforward. <br>
See [section below](#wget-for-multiple-files-and-directories) to learn more.
</div>


## wget for multiple files and directories


There are two options:

1. You can specify a regular expression to filter files by name.
2. Alternatively, you can embed a regular expression directly into the URL.

The first option is useful when you have a large number of files in a directory and you want to **download only those that match a specific format**, such as `.fasta` files. <br>
*For example:* to download `.tar.gz` files starting with "bar" from a specific directory:
```bash
wget -r --no-parent -A 'bar.*.tar.gz' http://url/dir/
```

The second option is beneficial when you need to download **files with the same name from different directories:**
```bash
wget -r --no-parent --accept-regex='/pub/current_fasta/*/dna/*dna.toplevel.fa.gz' ftp://ftp.ensembl.org
```
*This approach preserves the directory structure and prevents files from being overwritten.*

For downloading a **series of sequentially numbered files**, you can use UNIX `brace expansion`:

```bash
wget http://localhost/file_{1..5}.txt
```

*this will download:*
<pre class="output">
# |_ file_1.txt
# |_ file_2.txt
# |_ file_3.txt
# |_ file_4.txt
# |_ file_5.txt
</pre>

To download an entire website *(yes, every single file of that domain)* use the mirror option:

```bash
wget --mirror -p --convert-links -P ./LOCAL-DIR WEBSITE-URL
```

###  Other options to consider  

<table>
  <tr> <th width="17%">Option</th> <th width="22%">What it does?</th> <th>Use case</th> </tr>
  <tr> <td><code>-limit-rate=20k</code></td> <td>limits Speed to 20KiB/s</td> <td>Limit the data rate to avoid impacting other users' accessing the server.</td> </tr>
  <tr> <td><code>-spider</code></td>         <td>check if File Exists</td>    <td>For if you don't want to save a file but just want to know if it still exists.</td> </tr>
  <tr> <td><code>-w</code></td>              <td>wait Seconds</td>            <td>After this flag, add a number of seconds to wait between each request - again, to not overload a server.</td> </tr>
  <tr> <td><code>-user=</code></td>          <td>set Username</td>            <td>Wget will attempt to login using the username provided.</td> </tr>
  <tr> <td><code>-password=</code></td>      <td>use Password</td>            <td>Wget will use this password with your username to authenticate.</td> </tr>
  <tr> <td><code>-ftp-user=</code> <br><code>-ftp-password=</code></td> <td>FTP credentials</td>    <td>Wget can login to an FTP server to retrieve files.</td> </tr>
</table>


##  References

- [Stack-exchange thread](http://unix.stackexchange.com/questions/117988/wget-with-wildcards-in-http-downloads)
- [Blog](https://web.archive.org/web/20161024002305/http://blog.alastair.pro/2012/10/21/wget-regex-filter-by-file-type/)
- [Forum](http://www.linuxquestions.org/questions/linux-newbie-8/wget-with-regular-expressions-846368/)
