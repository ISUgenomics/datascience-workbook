---
title: "Tools for research documentation"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "tutorial"
order: 933.3
level: 3
categories: ["project-management", "resources", "version-control", "documentation", "code-development", "data-management"]
tags: ["standards", "notebook", "jupyter", "eLabFTW", "SciNote", "knowledge-retention", "reproducibility", "productivity", "collaboration", "note-taking", "reference-manager"]
attributes: ["example"]
---


{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

*In the evolving research, maintaining meticulous and organized documentation of a project is pivotal for reproducibility, clarity, and collaboration. **This tutorial aims to introduce you to a variety of tools that can streamline your research process and lead a project to the success.** From note-taking and collaborative writing to data visualization and version control, we'll delve deep into each tool's functionalities, offering hands-on examples and tips to optimize your documentation efforts.*


## Unlocking the power of documentation

Documentation is a multifaceted pillar that supports more than just code — it's integral to the entire spectrum of research activities. A well-documented project **sheds light on the intricacies of the research process**, paving the way for success. It amplifies clarity, ensures repeatability, and garners increased credibility for the research undertaken. Beyond its immediate benefits, documentation acts as a reservoir of knowledge, allowing researchers to effortlessly revisit previous works, retrieve pivotal methodologies, and draw insights for subsequent projects. This archival quality not only conserves precious time but also acts as a catalyst for **elevating productivity and innovation in future endeavors**.


# Tools for Research Documentation

Tools for research documentation play an essential role in **streamlining and organizing the vast array of information generated during research project**. These tools encompass `note-taking applications`, `collaborative writing platforms`, `reference managers`, and `data visualization software`, among others. By facilitating precise documentation, they enhance the clarity, reproducibility, and dissemination of research findings. Moreover, **they act as repositories**, allowing researchers to effortlessly revisit past projects, thus fostering continuous learning and improvement. In essence, these tools are indispensable for modern researchers, aiming to maximize productivity and the impact of your work.

## Digital Laboratory Notebooks

<div class="note" markdown="1">
Digital Laboratory Notebooks (DLNs) provide an innovative solution for researchers to chronicle their experiments, observations, and findings in a digital format. They <u>replace traditional paper lab notebooks</u>, offering features like data integrity assurance, traceability, compliance with research standards, and enhanced collaboration. <br> By integrating with various lab equipment and software, DLNs simplify and elevate the process of <br> `research documentation`, making data transfer and management easier.
</div>

Digital Laboratory Notebooks (DLNs) have revolutionized the way scientists and researchers document their experimental processes and results.  The adoption of these platforms ensures enhanced reproducibility, compliance with research standards, and seamless collaboration among research teams. DLNs provide tailored solutions that cater to various scientific disciplines.

Open-source tools:

| tool      |description|
|-----------|-----------|
|<a href="https://www.elabftw.net/" target="_blank">ELabFTW</a>|eLabFTW is an open-source electronic lab notebook (ELN) and laboratory information management system (LIMS). It's made by researchers, for researchers, and aims to be flexible and user-friendly. `FREE`|
|<a href="https://openbis.ch/" target="_blank">OpenBIS</a>|OpenBIS is an open-source software framework for constructing user-friendly, scalable, and powerful information systems for data and metadata acquired in the life sciences. `FREE`|
|<a href="https://www.scinote.net/" target="_blank">SciNote</a>|SciNote offers practical solutions for researchers with features like electronic lab notebook functionalities, task management, and team collaboration. While SciNote offers premium versions, it does have a free version that can be quite useful for individual researchers or smaller teams.|
|<a href="https://jupyter.org/" target="_blank">Jupyter Notebooks</a>|While not a traditional ELN, Jupyter Notebooks are popular among researchers, especially in computational fields, for blending code, output, and documentation in a seamless manner. `FREE`|

<div class="protip" markdown="1">
If you're part of an academic institution or are comfortable with setting up and maintaining software, hosting an open-source tool on institutional servers or cloud services might be a viable option. However, always ensure data privacy, regular backups, and compliance with any institutional guidelines when doing so.
</div>

Commercial tools:

| tool      |description|
|-----------|-----------|
|<a href="https://www.labguru.com/" target="_blank">Labguru</a>|Labguru is favored among life science researchers for its intuitive interface and specialized features. *They provide packages for academia and industry*|
|<a href="https://www.benchling.com/" target="_blank">Benchling</a>|Benchling is extensively used in molecular biology and genetic engineering fields, given its adeptness at handling DNA sequences and related data. *Initially offered a free version for academics, but with limited features.*|
|<a href="https://www.labarchives.com/" target="_blank">LabArchives</a>|LabArchives offers versatility, catering to a wide array of scientific domains from physics to chemistry, ensuring structured and searchable documentation of research activities. *Has both a free version and professional versions; the free version is quite limited.*|

|feature|<a href="https://www.elabftw.net/" target="_blank">ELabFTW</a>|<a href="https://openbis.ch/" target="_blank">OpenBIS</a>|<a href="https://www.scinote.net/" target="_blank">SciNote</a>|<a href="https://jupyter.org/" target="_blank">Jupyter Notebooks</a>|<a href="https://www.labguru.com/" target="_blank">Labguru</a>|<a href="https://www.benchling.com/" target="_blank">Benchling</a>|<a href="https://www.labarchives.com/" target="_blank">LabArchives</a>|
|-------|----------|----------|----------|----------|----------|----------|----------|
|Platform Type                         |Open-source/Cloud-based | Open-source/Cloud-based | Open-source	Open-source/Cloud-based| Cloud-based | Cloud-based | Cloud & On-Premises |
|Target Audience                       |Academia & Research | Academia & Research | Life Sciences | Computational Fields| Academia & Industry | Academia & Industry | Academia & Industry |
|Molecular Biology Tools               |Basic | Basic | Advanced | Not Specific| Basic | Advanced (DNA/RNA sequencing) | Basic |
|Collaboration Tools                   |Yes | Yes | Yes | Yes| Yes | Yes | Yes |
|Integration with Lab Instruments      |Limited | Limited | Yes | Limited| Yes | Yes | Yes |
|Data Storage Limit                    |Varies by Hosting | Varies by Hosting/Plan | Varies by Hosting | Depends on Hosting| Varies by Plan | Varies (Unlimited for Academics) | Varies by Plan |
|Customizable Workflows & Templates    |Yes | Yes | Limited | Not Specific | Yes | Yes | Limited |
|API & Integration with Other Software |Yes | Yes | Yes | No (but has version control)| Yes | Yes | Yes |


## Note-taking Tools

Note-taking tools, such as <a href="https://www.evernote.com/" target="_blank">Evernote</a>, <a href="https://www.notion.so/" target="_blank">Notion</a>, and <a href="https://www.onenote.com/" target="_blank">Microsoft OneNote</a>, are versatile software solutions tailored to seamlessly capture, organize, and store a wide range of information. All of them offer free versions with basic features, but they also have premium tiers with additional functionalities. For **open-source alternatives**, consider tools like <a href="https://joplinapp.org/" target="_blank">Joplin</a>, <a href="https://zim-wiki.org/" target="_blank">Zim</a>, and <a href="https://standardnotes.org/" target="_blank">Standard Notes</a>. They cater to diverse needs, from jotting down lecture insights to brainstorming sessions, supporting multiple formats like text, images, and voice. Equipped with organizational features like tags and notebooks, they're indispensable for scientists aiming to methodically document their thoughts and findings.

Here's a table summarizing the features and applications of the selected note-taking tools:

| tool          | key features | applications |
|---------------|--------------|--------------|
|<a href="https://joplinapp.org/" target="_blank">Joplin</a>|`open-source`, end-to-end encryption, markdown support, web clipper, synchronization capabilities | note-taking, to-do lists, web clipping, journaling |
|<a href="https://zim-wiki.org/" target="_blank">Zim</a>| `open-source`, wiki-style linking, rich text formatting, plugins, desktop integration | personal wiki, note-taking, task management |
|<a href="https://standardnotes.org/" target="_blank">Standard Notes</a>| `open-source`, end-to-end encryption, extensible with editors and themes, cross-platform | secure note-taking, journaling, knowledge storage |
|<a href="https://www.evernote.com/" target="_blank">Evernote</a>| web clipper, OCR on images, templates, tags, integrations with third-party apps | note-taking, web clipping, project management, journaling |
|<a href="https://www.notion.so/" target="_blank">Notion</a>| blocks-based structure, templates, database capabilities, collaborative workspace | note-taking, project & task management, knowledge base, collaborative docs |
|<a href="https://www.onenote.com/" target="_blank">Microsoft OneNote</a>| free-form canvas, handwriting support, integration with Office suite, templates | digital note-taking, sketching, team collaboration, meeting notes |

## Collaborative Writing Platforms

Collaborative writing platforms, like the open-source tool <a href="https://etherpad.org/" target="_blank">Etherpad</a> and commercial solutions such as <a href="https://docs.google.com/" target="_blank">Google Docs</a> and <a href="https://www.office.com/launch/word?auth=1" target="_blank">Microsoft Word Online</a>, **enable multiple users to co-author, edit, and review documents in real-time**. These platforms, equipped with features like live `editing`, `commenting`, and `version control`, are essential in fostering teamwork and synchronicity in research projects. By simplifying collaborative efforts, they ensure the accuracy, consistency, and timely completion of research documentation.

*The table should offer a clearer and more concise view of each tool, their features, applications, and the nature of their accessibility and pricing.*

| tool          | key features | applications | access |
|---------------|--------------|--------------|--------|
|<a href="https://etherpad.org/" target="_blank">Etherpad</a>|real-time collaboration, lightweight, plugins | collaborative writing, note-taking | `open-source`, free, no account required |
|<a href="https://docs.google.com/" target="_blank">Google Docs</a>|real-time collaboration, commenting, integration with g suite, `version history`|collaborative document writing, academic papers, reports|free, account required |
|<a href="https://www.office.com/launch/word?auth=1" target="_blank">Microsoft Word Online</a>|real-time collaboration, integration with `Office 365`, templates|collaborative document writing, academic papers, reports|free with office 365 subscription, account required |
|<a href="https://www.overleaf.com/" target="_blank">Overleaf</a>|real-time LaTeX collaboration, error highlighting, publisher templates|technical & `academic papers`, theses, LaTeX projects|free & subscription tiers, account required |
|<a href="https://www.authorea.com/" target="_blank">Authorea</a>|supports LaTeX and rich text, integration with data repositories, commenting|scientific writing, academic papers, data visualization|free & subscription tiers, account required |
|<a href="https://papeeria.com/" target="_blank">Papeeria</a>|LaTeX editing, real-time collaboration, version control|LaTeX document creation, academic writing, theses|free & subscription tiers, account required |
|<a href="https://www.gitbook.com" target="_blank">GitBook</a>|collaborative writing, version control and Git integration, `markdown support`|technical documentation, `educational guides & tutorials`, handbooks|free & subscription tiers, account required, public & private visibility |

<div class="protip" markdown="1">
If you're affiliated with an academic or research institution, **Microsoft Word Online** might be included in your institution's Office 365 subscription, making it free for you to use. <base class="mb">
When drafting scientific papers, remember that many journals provide templates in either **Microsoft Word** or `LaTeX` formats; the latter can be conveniently edited using **Overleaf**. <base class="mb">
Additionally, **Google Docs**, with its `Paperpile` plugin, offers a seamless experience for collaborative writing by simplifying the online search and management of citations.
</div>


## Reference Managers

Reference managers, such as the popular and free-to-use <a href="https://www.zotero.org/" target="_blank">Zotero</a> and <a href="https://www.mendeley.com/" target="_blank">Mendeley</a>, streamline the process of collecting, organizing, and citing academic materials. These tools, often equipped with browser plugins, simplify the creation of bibliographies and annotations. Reference managers, are essential in academic and research settings, simplifying citation management and bibliography creation, thereby ensuring accuracy and consistency in scholarly writing.

*This table provides a quick glance at which word processors each reference manager can integrate with.*

| tool          | key features | compatible word_processor |
|---------------|--------------|---------------------------|
|<a href="https://www.zotero.org/" target="_blank">Zotero</a> | Zotero stands out for being both `free and open-source`, offering capabilities for easy source annotation, categorization, and consistent formatting. Its browser integration makes source capture straightforward, while its diverse citation styles cater to a myriad of academic requirements. | Microsoft Word, LibreOffice, Google Docs |
|<a href="https://www.mendeley.com/" target="_blank">Mendeley</a> | Mendeley is renowned for its integrated academic social network and cloud-based approach, ensuring researchers not only manage references but also collaborate and discover new research. Its functionality extends to PDF annotations, public and private groups, and consistent citation styles.| Microsoft Word, LibreOffice (`linux`) |
|<a href="https://endnote.com/" target="_blank">EndNote</a> | EndNote is a `widely-used commercial option`, known for its comprehensive features and integration with various word processors and comprehensive reference management capabilities. Paired with its ability to search international databases and retrieve full-text articles, it offers robust organization, synchronization across devices, and versatile formatting options. | Microsoft Word, Apple Pages, OpenOffice |
|<a href="https://www.paperpile.com/" target="_blank">Paperpile</a> | Paperpile shines with its deep integration into Google Workspace, especially Google Docs. Its straightforward and modern interface makes reference management, PDF annotations, and online citation search streamlined, catering specifically to the needs of collaborative researchers in the digital age. | `Google Docs`, Microsoft Word (via plugin) |

<div class="warning" markdown="1">
It's worth noting that while some integrations come built-in, others might require separate plugins or extensions to function properly. Always refer to the official documentation for specific integration details.
</div>


## Data Visualization Tools

Data visualization tools adeptly convert intricate datasets into clear and `interactive visuals`, offering diverse representations like `graphs`, `charts`, and `maps` to **aid in data interpretation and presentation**. These tools bridge the gap between raw data and comprehensible insights, making communication more effective.

<div class="more" markdown="1">
For detailed tutorials on **Data Visualization Tools** and methodologies, refer to section <a class="t-links" href="800"></a> which includes topics such as:
* <a class="t-links" href="811"></a> and
* <a class="t-links" href="820"></a> <base class="mb">
providing hands-on examples with tools like:
* <a class="t-links" href="814"></a>,
* <a class="t-links" href="821.1"></a> (creating plots in the UNIX shell),
* <a class="t-links" href="822.01"></a> (data processing & interactive plotting with Python), and
* <a class="t-links" href="823.01"></a> (data processing & plotting with R).
</div>
