---
title: "Reproducibility in research"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 09-project-management/assets/images/09_project_management_banner.png
type: "tutorial"
order: 943
level: 2
categories: []
tags: []
---


{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---

# Introduction

At its core, **reproducibility is the ability to repeat a research study's processes and obtain the same results**. It's a hallmark of high-quality scientific work, ensuring that findings are not just a one-time miracle but a reliable outcome that others can achieve independently. This involves everything from the initial hypothesis to the methodologies, data analysis, and even the presentation of results. Decent documentation plays a crucial role in this process, serving as the foundation that enables others to understand, evaluate, and replicate the research findings accurately.


<div class="note before" markdown="1" data-before="Related Terms:">
**Replicability** refers to the ability to achieve similar outcomes by conducting the same study but with different methods, data sets, or conditions. While it sounds similar, replicability extends the idea of reproducibility to test the universality of findings across various contexts. <base class="mb">
**Transparency** is the openness with which researchers share their methods, data, and findings, enabling others to scrutinize and understand their work fully.
</div>

**Why does reproducibility matter so much?** <br>
Reproducibility is not just a technical requirement. It's a commitment to scientific excellence and integrity.
* Reproducibility is the bedrock upon which the **trustworthiness of research** is built.
* When studies are reproducible, they contribute to a body of **knowledge that is reliable and actionable**.
* It also ensures that research funds and efforts are utilized effectively, paving the way for **standardized approaches** and genuine advancements in science.
* This fosters further investigation, innovation, and **application of research findings in real-world scenarios**, from healthcare to environmental policy.

<div class="protip" markdown="1">
Practically, reproducibility enhances the credibility and impact of your research, establishing you as a trustworthy figure in your field. For your future research, it opens doors to collaboration and increases the likelihood of funding. It also allows you to efficiently revisit and extend your own work in the future, whether it's applying the methodology to new datasets or refining your analysis as new information becomes available.
</div>


## Common Challenges

Despite its importance, achieving reproducibility is not without its hurdles. Some of the common challenges include:

* **Data Accessibility** <br>
Limited access to the original data can impede the ability of other researchers to reproduce results.

* **Methodological Transparency** <br>
Without detailed documentation of research methodologies, reproducing studies becomes a game of guesswork.

* **Software and Tools** <br>
The use of proprietary software or specialized tools that are not widely available can restrict reproducibility.

* **Publication Bias** <br>
The tendency to publish positive results over negative or inconclusive ones can skew the understanding of a research area's reproducibility.

From a researcher's perspective, meeting reproducibility standards is challenging due to the extra time and effort required for detailed documentation, method sharing, and navigating data privacy  concerns. The rush to publish  quickly and the competitive academic landscape can push these tasks lower on the priority list. Without clear rewards or direct incentives for these efforts, motivation to invest in reproducibility can wane, despite its importance for scientific integrity. <br>

<div class="protip" markdown="1">
**The key to overcoming these challenges lies in adopting a new approach and mindset**, seeing reproducibility not as a hurdle but as an integral part of the research process. By shifting our perspective, we can start **to see the value in the extra steps involved**, recognizing them as investments in the credibility and longevity of our work.
</div>


## Lessons Learned from Real-Life Examples

The path toward reproducible research is illuminated by the lessons gleaned from both its triumphs and tribulations. From groundbreaking collaborations to eye-opening challenges, the real-life examples offer invaluable lessons on the critical importance of transparency, meticulous documentation, and community standards in ensuring research integrity and impact.

*Let's explore a few research stories to distill the wisdom gained from their experiences.*

<table>
  <tr><th style="background-color:#e6f0f0; color: #0ba37f; width:50%;">Successful Examples of Reproducible Research</th><th style="background-color:#fae7e7; color: red; width:50%;">Challenges Due to Lack of Reproducibility</th></tr>
  <tr>
    <td><b>The Polymath Project</b> [<a href="https://en.wikipedia.org/wiki/Polymath_Project" target="_blank">source  ⤴</a>]<br>An open collaboration among mathematicians to solve complex problems, the Polymath Project exemplifies reproducibility in action. By documenting every hypothesis, computation, and discussion in real time on a public blog and wiki, the project has not only solved significant problems but also set a standard for openness and reproducibility in mathematical research.<br><i>see also <a href="https://www.nature.com/articles/461879a" target="_blank">Massively collaborative mathematics, Nature volume 461, pages 879–881 (2009)</a></i></td>
    <td><b>Psychology</b> [<a href="https://osf.io/ezcuj/wiki/home/" target="_blank">source  ⤴</a>]<br>Spearheaded by the Center for Open Science, this project aimed to replicate 100 psychological studies. The findings, published in 2015, showed that less than half (~39%) of the original findings were replicated based on predefined criteria. This initiative revealed the complexity of reproducibility issues in psychological, prompting a widespread reevaluation of research practices in the field.<br><i>see also <a href="https://www.nature.com/articles/nature.2015.18248" target="_blank">Over half of psychology studies fail reproducibility test, Nature (2015)</a></i></td>
  </tr>
  <tr>
    <td><b>Human Microbiome Project (HMP)</b> [<a href="https://commonfund.nih.gov/hmp" target="_blank">source  ⤴</a>]<br>This project, aimed at understanding the microbial components of the human genetic and metabolic landscape, has been a model of reproducibility. By making all data and methodologies publicly available through the HMP DACC (Data Analysis and Coordination Center), researchers worldwide have been able to validate findings and further investigate the human microbiome, accelerating scientific discovery.<br><i>see also <a href="https://www.nature.com/articles/s41586-019-1238-8" target="_blank">The Integrative Human Microbiome Project, Nature volume 569, pages 641–648 (2019)</a></i></td>
    <td><b>Cancer Research</b> [<a href="https://elifesciences.org/collections/9b1e83d1/reproducibility-project-cancer-biology" target="_blank">source  ⤴</a>]<br>A notable study by researchers at Amgen attempted to replicate 53 landmark studies in cancer biology, only to find a reproducibility rate of about 6%. This stark revelation shed light on the reproducibility challenges within biomedical research, emphasizing the need for more stringent documentation, sharing practices and validation of experimental methods and findings. This initiative prompts calls for improved standards and transparency in research.<br><i>see also <a href="https://www.nature.com/articles/s41586-019-1238-8" target="_blank">Half of top cancer studies fail high-profile reproducibility effort, Nature (2021)</a></i></td>
  </tr>
</table>

<div class="warning" markdown="1">
Recent publications continue to highlight the `challenge of reproducibility` in research, underscoring the ongoing need for a shift in our research approach to embrace more transparent and rigorous practices.
</div>

**Lessons Learned** <br>
The lessons learned from both successes in reproducibility and the challenges faced due to its absence highlight the essential practices and mindset shifts needed to advance the reliability and validity of scientific findings.

* **Importance of Open Data and Methodologies**<br>
The successes and failures in reproducibility underscore the importance of open access to data and detailed documentation of methodologies. *Projects like HMP demonstrate how shared data can catalyze progress, while cases like the Reproducibility Project in Psychology reveal the pitfalls of insufficient transparency.*

* **Need for Robust Statistical Analysis** <br>
Many reproducibility issues arise from statistical misinterpretation or the use of inappropriate analysis methods. A critical lesson is the need for rigorous statistical scrutiny and the adoption of practices like pre-registration of studies to ensure clarity and integrity in research design.

* **Collaboration and Community Standards** <br>
Both successful and challenging examples highlight the role of community engagement and the establishment of standards in fostering reproducibility. *Collaborative efforts, such as the Polymath Project, illustrate how collective wisdom and open dialogue can lead to breakthroughs, while initiatives like the Reproducibility Project help set benchmarks for research practices.*

<div class="protip" markdown="1">
By reflecting on these real-life examples, you can better navigate the complexities of reproducibility, adopting practices that enhance the reliability, integrity, and impact of your work.
</div>

---

# Key Principles and Best Practices

In a research project, reproducibility is not just a goal but a guiding principle. It ensures that research can be trusted, built upon, and extended by the scientific community. By embedding `transparency`, `accessibility`, and adherence to `standards` into our research practices, we not only enhance the reproducibility of our work but also its impact and credibility. Adopting these principles requires a shift in mindset: a commitment to conducting research that is as open and accessible as well as systematic and comprehensively documented.


## Transparency in Methodology

The first cornerstone of reproducible research is transparency in methodology. This means providing a clear, detailed account of how research is conducted, from the initial hypothesis through to data collection and analysis. Every step should be documented so thoroughly that `fellow researchers can follow the same path without ambiguity`. This includes specifying the software and tools used, the versions of those tools, and any custom code or algorithms developed.

<div class="note" markdown="1">
Transparency is the bridge that allows others to walk in your scientific footsteps, ensuring that your work can be critically assessed, validated, or refuted.
</div>

This table provides clear examples of practices that promote transparency in the methodology versus those that hinder it, helping to guide you toward more reproducible research practices.

<table>
  <tr><th style="width:15%;">Methodology</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;">Recommendations</th></tr>
  <tr>
    <td>Documentation</td>
    <td>Creating comprehensive, step-by-step documentation of the research process, including hypothesis formulation, experimental design, and data analysis, in a publicly accessible format.</td>
    <td>Providing vague descriptions of the research process or omitting key steps such as data preprocessing or statistical analysis techniques.</td>
    <td>Adopt a standardized template for research documentation that includes sections for all critical stages of the research process. Use open platforms like GitHub or OSF to share documentation.</td>
  </tr>
  <tr>
    <td>Data Collection & Analysis</td>
    <td>Sharing raw data sets along with detailed explanations of data collection methods, including instruments used, settings, and calibration information.</td>
    <td>Failing to disclose specific data collection parameters or modifying data without transparently documenting changes and rationales.</td>
    <td>Utilize data repositories with metadata standards to share raw data and detailed collection methodologies. Document any data transformations or cleaning steps in a reproducible manner.</td>
  </tr>
  <tr>
    <td>Software & Tools</td>
    <td>Publishing the exact versions of software and libraries used, along with custom scripts or code in open repositories, including necessary comments for understanding.</td>
    <td>Using proprietary or custom software without providing access or sufficient detail for others to recreate the computational environment.</td>
    <td>Whenever possible, opt for open-source alternatives to proprietary software. Clearly document the setup of your computational environment, including software versions and settings.</td>
  </tr>
  <tr>
    <td>Methodological Choices</td>
    <td>Explaining the rationale behind methodological choices, including the selection of control variables, statistical models, and the handling of outliers.</td>
    <td>Making arbitrary methodological decisions without explanation or ignoring established protocols without justification.</td>
    <td>Provide a clear justification for each methodological choice, referencing existing literature or preliminary results. If deviating from standard protocols, explain why this approach better suits the research objectives.</td>
  </tr>
</table>

### <i><span style="color: #EC8000; ">EXERCISE</span></i>

This exercise is designed to enhance your awareness and implementation of transparency in research methodologies, fostering a culture of openness and replicability.

<div class="exercise before" markdown="1" data-before="A Personalized Methodology Transparency Checklist">
<base class="mt">
**Objective:** <br>
Create a customized checklist that ensures transparency in the methodology of your projects. <base class="mb">
**Instructions:** <br>
1. List all steps of your typical research process.
2. Next to each step, jot down specific questions that ensure transparency.
3. Use this checklist as a guide when documenting your methodology in future projects.
<details><summary style="background: #FFFACD; width:250px;">See General Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>Hypothesis Formulation</b>
<li>Have I clearly stated my research question or hypothesis?</li>
<br><b>Study Design</b>
<li>Is the design type (e.g., experimental, observational) and rationale explained?</li>
<br><b>Participant Selection</b>
<li>Have I described the criteria for participant selection?</li>
<br><b>Data Collection Procedures</b>
<li>Are the methods of data collection (surveys, measurements, questionnaires) explicitly described?</li>
<br><b>Statistical Analysis</b>
<li>Have I listed the statistical tests and software used, including version numbers?</li>
<li>Is the statistical analysis procedure detailed enough for replication?</li>
<br><b>Replicability Check</b>
<li>Does the documentation allow another researcher to replicate the study without additional information?</li>
<br><b>Ethical Considerations</b>
<li>Are any ethical approvals or consent procedures documented?</li>
</div>
</details>
<details style="margin-top: 5px;"><summary style="background: #FFFACD; width:250px;">See Specific Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b><i>Methodology Checklist for RNA-Seq Analysis</i></b><br><br>
<b>Project Context:</b>
A bioinformatics study aiming to identify novel drug targets in breast cancer by analyzing differential gene expression between tumor and normal tissue samples using RNA-Seq data.<br>
<br><b>Hypothesis Formulation</b><br>
Have I clearly stated the biological question?<br>
i.e., <i>Identifying potential drug targets by analyzing differential gene expression in breast cancer</i><br>
<br><b>Experimental Design</b><br>
Is the selection criteria for tumor vs. normal tissue samples fully described, including patient demographics and clinical criteria?<br>
<br><b>Data Collection</b><br>
Have I detailed:
<li>the RNA extraction methods,</li>
<li>sequencing platforms (e.g., Illumina HiSeq 4000),</li>
<li>library preparation protocols?</li>
<br><b>Data Analysis</b><br>
&emsp;&nbsp; <i><b>Preprocessing:</b></i>
<li>Is the process of quality control (using FastQC), trimming (using Trimmomatic), and alignment (using STAR aligner to the human genome GRCh38) clearly documented, including software versions?</li>
&emsp;&nbsp; <i><b>Differential Expression Analysis:</b></i>
<li>Have I described the use of DESeq2 for identifying differentially expressed genes, including parameter settings?</li>
<br><b>Statistical Methods</b><br>
Is the approach for adjusting p-values for multiple comparisons (using Benjamini-Hochberg correction) and defining significance thresholds described?<br>
<br><b>Replicability Check</b><br>
Does the documentation cover my customized visualization scripts in R and various mid-steps in Bash?<br>
<br><b>Ethical Considerations</b>
<li>Are any ethical approvals or consent procedures documented?</li>
<li>Is breast cancer data anonymized?</li>
</div>
</details>
</div>

## Accessibility of Data and Materials

Accessibility is the second key principle, focusing on the ease with which data and materials can be obtained and used by others. This involves not only `making your data available` but ensuring it is in a format that is understandable and usable. Sharing should be done through reputable, accessible platforms or repositories that ensure `data preservation and accessibility over time`. This principle also encompasses the sharing of materials used in the research, such as chemical compounds, biological specimens, or software code.

<div class="note" markdown="1">
The aim is to remove barriers to accessing the building blocks of your research, enabling others to reproduce or build upon your findings.
</div>

This table aims to guide you toward best practices in making your data and materials accessible, while also highlighting common pitfalls. It also offers actionable advice to improve accessibility and long-term preservation to ensure that data remains usable for future research endeavors.

<table>
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;">Recommendations</th></tr>
  <tr>
    <td>Data Sharing</td>
    <td>Making datasets publicly available in accessible, well-documented formats on platforms like Figshare or Dryad.</td>
    <td>Keeping datasets private or sharing them in formats that are difficult to access or use.</td>
    <td>Choose accessible, reputable data repositories that support long-term data preservation and provide clear documentation for datasets.</td>
  </tr>
  <tr>
    <td>Material Sharing</td>
    <td>Providing detailed protocols for experiments, along with information on how to access any physical or digital materials used.</td>
    <td>Withholding experimental materials or not providing detailed information on how they can be obtained.</td>
    <td>Utilize repositories for sharing biological materials, chemical compounds, or software code, ensuring all materials are accompanied by detailed usage protocols.</td>
  </tr>
  <tr>
    <td>License Selection</td>
    <td>Choosing open licenses that facilitate the reuse and reproduction of data and materials, such as Creative Commons for data and MIT or GPL for software.</td>
    <td>Applying restrictive licenses that limit the use, modification, or sharing of data and materials.</td>
    <td>Review and select licenses that support open science, clearly communicate these choices, and provide guidance on how to attribute and reuse materials.</td>
  </tr>
  <tr>
    <td>Documentation Quality</td>
    <td>Supplying comprehensive metadata and documentation for datasets and materials, including collection methods, conditions, and any preprocessing steps.</td>
    <td>Providing inadequate or no metadata, making it difficult for others to understand or use the shared resources effectively.</td>
    <td>Adopt standards for metadata and documentation within your field, and use tools that facilitate the creation of detailed, structured metadata.</td>
  </tr>
  <tr>
  <td>Data Preservation & Accessibility Over Time</td>
  <td>Ensuring long-term preservation and accessibility of data by using sustainable, stable platforms and adhering to best practices in digital preservation.</td>
  <td>Storing data in formats or locations that are prone to obsolescence, risking data loss or inaccessibility over time.</td>
  <td>Invest in durable, future-proof storage solutions and follow digital preservation guidelines to maintain data usability for the long haul. Regularly review and update storage practices to keep pace with technological advances.</td>
</tr>
</table>

### <i><span style="color: #EC8000; ">EXERCISE</span></i>

This example is designed to help you systematically think through and plan for the accessibility of your research data and materials, ensuring they can be shared and used by others in the scientific community.

<div class="exercise before" markdown="1" data-before="Data Management Plan Drafting">
<base class="mt">
**Objective:** <br>
Draft a data management plan (DMP) that outlines how data and materials will be handled, stored, and shared. Following this plan enhances the accessibility of your data and materials.  <base class="mb">
**Instructions:** <br>
1. Identify the types of data you typically generate and list them.
2. For each data type, write down how you will store, archive, and share this data, considering data formats, platforms for sharing, and any privacy concerns.
3. Include a section on the tools and software you'll use, ensuring they align with open standards.
<details><summary style="background: #FFFACD; width:250px;">See General Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>Data Types</b>
<li>Listing of all data types collected (e.g., numerical, text-based, images).</li>
<br><b>Data Formats</b>
<li>Commitment to use open, non-proprietary formats (e.g., CSV for tabular data, TIFF for images) for long-term accessibility.</li>
<br><b>Repositories</b>
<li>Selection of appropriate open-access repositories (e.g., Dryad, Zenodo) for data deposition.</li>
<br><b>Storage and Backup</b>
<li>Description of data storage solutions and backup procedures, including encryption for sensitive data.</li>
<br><b>Sharing and Licensing</b>
<li>Plans for sharing data, including timing (e.g., upon publication) and licenses (e.g., CC BY), facilitating reuse.</li>
<br><b>Privacy and Ethics</b>
<li>Measures to anonymize data and protect privacy, detailing the process for sensitive data.</li>
</div>
</details>
<details style="margin-top: 5px;"><summary style="background: #FFFACD; width:250px;">See Specific Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b><i>Data Management Plan for RNA-Seq Project</i></b><br><br>
<b>Data Types & Formats</b>
<li>raw sequencing files (FASTQ), </li>
<li>processed alignment files (BAM), </li>
<li>differential expression analysis results (CSV) </li>
<br><b>Data Storage and Archiving</b>
<li>All data stored on an institutional (SCINet HPC) secure server with encryption. </li>
<li>Processed data and final analysis results will be deposited in the GEO (Gene Expression Omnibus) database with appropriate metadata.</li>
<br><b>Sharing and Licensing</b>
<li>Detailed metadata for each dataset, </li>
<li>following the MINSEQE guidelines, </li>
<li>ensuring datasets are findable and usable. </li>
<li>GEO accession numbers will be provided in the publication.</li>
<li>Data licensed on the CDLA PERMISSIVE-2.0 (COMMUNITY DATA LICENSE AGREEMENT)</li>
<br><b>Tools and Software</b><br>
Documentation of all bioinformatics tools (e.g., STAR v2.7.3a, DESeq2 v1.28.1) used, including parameters, will be made available on GitHub and linked in the GEO submission.
</div>
</details>
</div>

## Standards and Protocols

The third principle, adherence to standards and protocols, serves as a shared language in the scientific community, enabling researchers to communicate their methods and findings more effectively. By `following established guidelines and practices`, researchers can create a common framework that provides a clear and accessible blueprint of the study. It facilitates the replication of their work by others and ensures that outcomes are verifiable. This includes `following established protocols` and standards within your field. It’s also about contributing to the community by potentially `setting new standards` that others can follow, enhancing the collective ability to achieve reproducible results. By `utilizing open-source tools` and platforms, you ensure that your methods are not only transparent but accessible to anyone with an interest in your work. This not only enhances the credibility and validity of the research but also fosters collaboration and innovation.

<div class="note" markdown="1">
The aim of adhering to standards and building robust protocols is to ensure `consistency`, `reliability` and `quality` in your research.
</div>

This table highlights the importance of adhering to standards and developing robust protocols to enhance the reproducibility of research.

<table>
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;">Recommendations</th></tr>
  <tr>
    <td>Adherence to Standards</td>
    <td>Following established international or discipline-specific standards for data formatting, analysis, and reporting.</td>
    <td>Ignoring existing standards or inconsistently applying them across different stages of research.</td>
    <td>Identify and educate yourself on the relevant standards for your field; integrate their use from the outset of your research project.</td>
  </tr>
  <tr>
    <td>Protocol Development</td>
    <td>Developing clear, detailed protocols based on best practices, and sharing these publicly for validation and reuse.</td>
    <td>Using ad-hoc or poorly documented protocols that are difficult for others to follow or replicate.</td>
    <td>Invest time in protocol development and documentation; consider peer review of protocols and sharing via platforms like protocols.io.</td>
  </tr>
  <tr>
    <td>Use of Open-Source Tools</td>
    <td>Utilizing open-source software and tools that are freely available, ensuring no barriers to accessing the computational resources needed to replicate research.</td>
    <td>Reliance on proprietary or custom-built software without providing access or alternatives for replication.</td>
    <td>Whenever possible, choose open-source options for your research tools and clearly document any necessary configurations or modifications.</td>
  </tr>
  <tr>
    <td>Interoperability</td>
    <td>Ensuring data and research outputs are interoperable, allowing seamless integration and use across different systems and platforms.</td>
    <td>Creating data or outputs in formats that are not widely supported, limiting their utility and accessibility.</td>
    <td>Adopt widely supported data formats and standards that enhance interoperability; test your outputs across different platforms to ensure compatibility.</td>
  </tr>
  <tr>
    <td>Reproducibility Checks</td>
    <td>Regularly conducting reproducibility checks of your own research to ensure that your methodologies and results are robust and transparent.</td>
    <td>Neglecting to verify the reproducibility of your own work, risking the publication of findings that cannot be independently validated.</td>
    <td>Implement reproducibility checks as a standard part of your research process, including third-party validations where feasible.</td>
  </tr>
</table>

### <i><span style="color: #EC8000; ">EXERCISE</span></i>

This exercise is intended to encourage you to actively engage with and adhere to the standards and protocols in your field, ensuring that your research practices meet global benchmarks for quality and reproducibility.

<div class="exercise before" markdown="1" data-before="Standards and Protocols Assessment">
<base class="mt">
**Objective:** <br>
Evaluate and document the standards and protocols you currently use or plan to use in your research. In a result, you will get the assessment document that outlines your commitment to standards and protocols, ensuring reproducibility. <base class="mb">
**Instructions:** <br>
1. Make a list of the main standards and protocols relevant to your field of research (e.g., data formats, metadata standards).
2. Assess how well your current or planned research practices align with these standards.
3. For each standard or protocol, write a brief plan on how you will ensure compliance in your research.
<details><summary style="background: #FFFACD; width:250px;">See General Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>Literature Review</b>
<li>Summary of standards and protocols commonly adopted in your field.</li>
<br><b>Current Practice Evaluation</b>
<li>Analysis of how your current methodologies align or diverge from these standards.</li>
<br><b>Action Plan</b>
<li>For each standard not currently met, a detailed plan for integration into your research process.</li>
&emsp; <i>For example, adopting FAIR (Findable, Accessible, Interoperable, and Reusable) data principles by ensuring metadata quality and data accessibility.</i><br>
<br><b>Training Needs</b>
<li>Identification of any skills or knowledge gaps, with plans for training or collaboration to meet standards.</li>
</div>
</details>
<details style="margin-top: 5px;"><summary style="background: #FFFACD; width:250px;">See Specific Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b><i>Standards and Protocols Assessment for Differential Gene Expression Analysis</i></b><br><br>
<b>Data Formats</b><br>
Use of FASTQ for raw data, BAM for alignments, adhering to the SAM/BAM format specifications.<br>
<br><b>Analysis Protocols</b><br>
Following the ENCODE project's best practices for RNA-Seq analysis, including quality control steps and alignment guidelines.<br>
<br><b>Documentation Standards</b>
<li>Adhering to the FAIR principles for all generated data and analysis code. </li>
<li>Ensuring all software and custom scripts are documented and shared under an MIT license for open use.</li>
<br><b>Plan for Compliance</b><br>
<li>A comprehensive README file accompanies the GitHub repository, detailing the workflow, software versions, and how to reproduce the analysis. </li>
<li>The use of Docker containers to ensure computational environments are replicable.</li>
</div>
</details>
</div>


## Comprehensive Documentation

Central to these principles is the need for comprehensive documentation. It's not enough to follow these principles in practice; each component must be meticulously recorded and shared. It should cover the `methodology`, `data sources`, `analysis techniques`, and any `challenges` or deviations encountered along the way. Comprehensive documentation ensures that your research is not a closed book but an open invitation for scrutiny, collaboration, and advancement.

<div class="note" markdown="1">
Documentation acts as the blueprint of your research, detailing every choice made and every step taken.
</div>

<table>
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;">Recommendations</th></tr>
  <tr>
    <td>Research Process Documentation</td>
    <td>Meticulously documenting each step of the research process, from hypothesis formation to data analysis and interpretation, in a clear and accessible manner.</td>
    <td>Offering only superficial descriptions of research steps or omitting details crucial for replication.</td>
    <td>Adopt a structured documentation framework that covers all research stages and ensure it's easily accessible, possibly through open repositories.</td>
  </tr>
  <tr>
    <td>Data Documentation</td>
    <td>Providing comprehensive metadata for all datasets, including context, collection methods, and any preprocessing steps.</td>
    <td>Leaving datasets without sufficient context or metadata, making them hard to interpret or reuse.</td>
    <td>Use standardized metadata formats and repositories that encourage detailed data documentation to enhance usability and discovery.</td>
  </tr>
  <tr>
    <td>Code and Software Documentation</td>
    <td>Thoroughly commenting code and documenting software environments, including versions and dependencies, to facilitate replication.</td>
    <td>Sharing code without comments or documentation, making it difficult for others to understand or execute.</td>
    <td>Incorporate comprehensive commenting within your code and use tools like virtual environments to document software dependencies.</td>
  </tr>
  <tr>
    <td>Methodological Justification</td>
    <td>Clearly explaining the rationale behind methodological choices, highlighting how they contribute to the research objectives.</td>
    <td>Making arbitrary methodological choices without transparent justification, confusing other researchers.</td>
    <td>Provide a detailed rationale for each methodological decision, including references to supporting literature or preliminary results.</td>
  </tr>
  <tr>
    <td>Challenges and Deviations</td>
    <td>Proactively documenting challenges, obstacles, or deviations from the planned methodology, including how they were addressed or why certain decisions were made.</td>
    <td>Ignoring or glossing over challenges and deviations, which can provide crucial context for understanding research outcomes.</td>
    <td>Maintain a detailed log of challenges and deviations as part of your project documentation, emphasizing transparency and the reasoning behind key decisions.</td>
  </tr>
  <tr>
    <td>Revision and Update Documentation</td>
    <td>Documenting any revisions or updates to the research process, data, or analysis, along with the reasons for these changes.</td>
    <td>Failing to update docs to reflect changes in the research process, leading to discrepancies between published work and actual practices.</td>
    <td>Establish a version control system for your documentation to track changes over time and ensure that the latest information is always available.</td>
  </tr>
</table>

### <i><span style="color: #EC8000; ">EXERCISE</span></i>

This task is designed to guide you in creating a detailed and structured approach to documenting your research, making it easier for others to understand, replicate, and build upon your work.

<div class="exercise before" markdown="1" data-before="Documentation Template Development">
<base class="mt">
**Objective:** <br>
Develop a comprehensive documentation template tailored to your research process. <base class="mb">
**Instructions:** <br>
1. Outline the sections needed to fully document a project, including background, methodology, data collection and analysis, results, and deviations.
2. For each section, add prompts or questions that guide you to provide detailed information.
3. Integrate a section for notes on deviations or unexpected challenges encountered during the project.
<details><summary style="background: #FFFACD; width:250px;">See General Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>Project Overview</b>
<li>Background, objectives, and significance of the research.</li>
<br><b>Methodology Detailed Description</b>
<li>Step-by-step processes for data collection, including equipment used, settings, calibration details, software (with versions), and algorithms.</li>
<br><b>Data Analysis</b>
<li>Clear explanation of data preprocessing, analysis pipeline, and rationale for chosen statistical methods.</li>
<br><b>Results Summary</b>
<li>Preliminary findings and how they relate to the hypothesis.</li>
<br><b>Deviations and Challenges</b>
<li>Log of any deviations from the original plan, including unexpected challenges and how they were addressed.</li>
<br><b>Conclusion and Future Directions</b>
<li>Summary of findings, limitations, and potential areas for further research.</li>
</div>
</details>
<details style="margin-top: 5px;"><summary style="background: #FFFACD; width:250px;">See Specific Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b><i>Documentation Template Development for Bioinformatics Analysis</i></b><br><br>
<b>Background</b><br>
Detailed introduction to the research question, including the significance of identifying novel drug targets in breast cancer.<br>
<br><b>Data Collection and Analysis</b><br>
A section dedicated to describing the data collection process, including:
<li> sequencing depth and criteria for sample selection.</li>
Detailed explanation of the:
<li> data preprocessing steps,</li>
<li>alignment, and</li>
<li>differential expression analysis, including thresholds for significance.</li>
<br><b>Methodology</b><br>
<li>Step-by-step documentation of the RNA-Seq workflow, from sample preparation to sequencing and bioinformatics analysis. </li>
<li>Each step includes specific software tools, versions, and command-line arguments used.</li>
<li>Including info about structure of the file system and specific location of important inputs & outputs from each step.</li>
<br><b>Results</b><br>
Guidelines for presenting gene expression differences, including:
<li>visualizations like volcano plots and heatmaps, and </li>
<li>statistical analysis summary,</li>
<br><b>Challenges</b><br>
Logging any deviations from the planned methodology, such as:
<li> changes in analysis software due to updates or </li>
<li>discoveries of new best practices during the project timeline.</li>
</div>
</details>
</div>

---

# Tools and Technologies

Digital tools are invaluable for ensuring that research is transparent, accessible, and collaborative. They help create a seamless workflow from data collection to analysis, enabling researchers to document each step of their process in a manner that is clear and reproducible.
* By leveraging [version control systems](#version-control-systems), researchers can track and manage changes over time, ensuring that every iteration of their work is preserved and accessible.
* [Repositories for sharing datasets and code](#shared-repositories) break down barriers to access, making it possible for scientists to build on each other's work and collaborate in ways previously unimaginable.
* [Open-source statistical and computational tools](#open-source-tools) democratize the process of data analysis, allowing researchers from around the globe to use, modify, and improve upon existing methods.

Together, these digital tools form a critical infrastructure for advancing reproducible research, ensuring that findings are robust, verifiable, and ready to contribute to the collective knowledge of the scientific community.

*Below, you can find tables summarizing essential tools for reproducible research, complete with quick links to practical tutorials to help you get started with each of them.*

## Version Control Systems

{% include target_link href=932.1 text="Version control systems" %} are essential for tracking changes in research projects, facilitating collaboration, and ensuring the integrity of research data and code over time.

<table>
<tr> <th>tool</th> <th>tutorial</th> <th>applications</th> </tr>
<tr> <td><a href="https://git-scm.com " target="_blank">Git</a></td> <td>{% include target_link href=932.2 %} <br> {% include target_link href=932.21 %}</td> <td>Distributed version control system widely used for source code management.</td> </tr>
<tr> <td><a href="https://subversion.apache.org" target="_blank">SVN</a></td> <td>{% include target_link href=932.1 section="#-subversion-svn" text="Subversion (SVN)" %}</td> <td>Centralized version control system designed to keep track of changes in files and directories.</td> </tr>
</table>



## Shared Repositories

{% include target_link href=932.3 %} are crucial for reproducibility, enabling researchers to access, use, and cite the exact datasets and software versions used in research studies.

<table>
<tr> <th>tool</th> <th>tutorial</th> <th>applications</th> </tr>
<tr> <td><a href="https://github.com" target="_blank">GitHub</a></td> <td>{% include target_link href=932.4 %} <br> {% include target_link href=932.41 %}</td> <td>Hosting for software development and version control using Git, with features for collaboration, issue tracking, and code review. <i>GitHub is the most commonly used platform for hosting and collaborating on open-source projects.</i></td> </tr>
<tr> <td><a href="https://zenodo.org" target="_blank">Zenodo</a></td> <td> </td> <td>General-purpose open-access repository developed under the European OpenAIRE program, for research data and software.</td> </tr>
<tr> <td><a href="https://osf.io" target="_blank">OSF</a></td> <td> </td> <td>Open Science Framework supports the entire research lifecycle: planning, execution, reporting, archiving, and discovery.</td> </tr>
</table>


## Open-source Tools

Open-source statistical and computational tools offer powerful, transparent, and community-validated methods for data analysis, contributing significantly to reproducible research practices.

<table>
<tr> <th>tool</th> <th>tutorial</th> <th>applications</th> </tr>
<tr> <td><a href="https://www.r-project.org" target="_blank">R</a></td> <td>{% include target_link href=541 %} and <a href="https://datascience.101workbook.org/sitemap.html" target="_blank">more  ⤴</a></td> <td>Statistical computing and graphics, with a wide range of packages for various data analysis tasks.</td> </tr>
<tr> <td><a href="https://www.python.org" target="_blank">Python</a></td> <td>{% include target_link href=531 %} and <a href="https://datascience.101workbook.org/sitemap.html" target="_blank">more  ⤴</a></td> <td>General-purpose programming language with extensive libraries for data analysis, machine learning, and scientific computing.</td> </tr>
<tr> <td><a href="https://julialang.org" target="_blank">Julia</a></td> <td>{% include target_link href=551 %} and <a href="https://datascience.101workbook.org/sitemap.html" target="_blank">more  ⤴</a></td> <td>High-level, high-performance dynamic programming language for technical computing, with syntax that is familiar to users of other technical computing environments.</td> </tr>
<tr> <td><a href="https://jupyter.org" target="_blank">Jupyter Notebooks</a></td> <td>{% include target_link href=412 %} and <a href="https://datascience.101workbook.org/sitemap.html" target="_blank">more  ⤴</a></td> <td>Open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.</td> </tr>
</table>
<br>


# Practice Your Skills

These exercises are crafted to provide you with practical skills and hands-on experience necessary for conducting reproducible research. By engaging with these tasks, you'll not only learn to use essential tools but also understand how each contributes to the overall reproducibility of your research projects.

### <i><span style="color: #EC8000; ">E1: Version Control Basics</span></i>

This exercise is designed to illustrate the critical role of version control in tracking and managing changes in research projects, promoting collaboration, and ensuring that all project versions are accessible and reproducible.

<div class="exercise before" markdown="1" data-before="Version Control Basics with Git">
<base class="mt">
**Objective:** <br>
Familiarize yourself with Git for version control to manage changes in your research project efficiently. <base class="mb">
**Instructions:** <br>
**1. Install Git:** Download and install Git from <a href="https://git-scm.com/" target="_blank">https://git-scm.com/</a>.<br>
**2. Create a Repository:**
* Open Terminal (Mac/Linux) or Git Bash (Windows).
* Navigate to your project folder and run <code>git init</code> to initialize a new Git repository on your local machine.

**3. Make Your First Commit:**
* Create a file in the repository (e.g., <b>README.md</b>) and edit it.
* Run `git add README.md` to stage the file for committing.
* Then, commit it using `git commit -m "Initial commit"`

**4. Explore History:**
* Make further changes to your file and commit them.
* Then, use `git log` to view the history of changes.
<div class="protip font-1 mb-0 before" markdown="1" data-before="PRO TIP">
To see a more detailed step-by-step guide with graphical aids to complete this exercise, navigate to tutorial {% include target_link href=932.2 %} and follow the steps in the hands-on sections:
* {% include target_link href=932.2 section="#1-install-git" text="Install Git" %}
* {% include target_link href=932.2 section="#working-with-local-repos" text="Working with local repos" %}
</div>
</div>


### <i><span style="color: #EC8000; ">E2: Documenting with Jupyter Notebooks</span></i>

This exercise is designed to underscore the importance of using open-source tools for data analysis, emphasizing clear, well-commented scripts that can be easily shared and replicated.

<div class="exercise before" markdown="1" data-before="Documenting Research with Jupyter Notebooks">
<base class="mt">
**Objective:** <br>
Create a Jupyter Notebook that integrates code, outputs, and narrative, showcasing how this tool can enhance research documentation. <base class="mb">
**Instructions:** <br>
**1. Install Jupyter:** Follow the instructions at <a href="https://jupyter.org/install" target="_blank">https://jupyter.org/install</a>.

**2. Create a New Notebook:**
* Navigate to your project folder.
* Launch Jupyter Notebook using command `jupyter lab`.
* Create a new notebook file using `File` option in the top menu bar. It will be saved in your **File System**.

**3. Document Your Process:**
* Write a brief introduction in a **markdown cell** explaining what the notebook will achieve.
* Add more **markdown cells** to explain each step, including your thought process and interpretation of results.
* Below each markdown cell include **code cells** to load a dataset and perform simple analyses. <br> *(you will use them in Exercise 3)*
<div class="protip before mb-0 font-1" markdown="1" data-before="PRO TIP">
To see a more detailed step-by-step guide with graphical aids to complete this exercise, navigate to tutorial {% include target_link href=412 %} and follow the installation steps in the {% include target_link href=412 section="#installing-jupyter" text="Installing Jupyter" %} hands-on section. Then jump to {% include target_link href=413 %} tutorial to launch Jupyter interface, learn about components in the GUI, create new notebook and add cells of various types. To start using rich text markup in your documentation, check out the {% include target_link href=933.5 %} tutorial.
</div>
</div>


### <i><span style="color: #EC8000; ">E3: Data Analysis in R or Python</span></i>

This exercise is designed to underscore the importance of using open-source tools for data analysis, emphasizing clear, well-commented scripts that can be easily shared and replicated.

<div class="exercise before" markdown="1" data-before="Data Analysis in R or Python">
<base class="mt">
**Objective:** <br>
Perform a basic data analysis using R or Python, focusing on making the script reproducible. <base class="mb">
**Instructions:** <br>
**1. Choose Your Tool**
* Install `R` *(programming language)* and `RStudio` *(develpment environment, DE)* <br>
**and/or**
* Insytall `Python` *(programming language)* and use `Jupyter Lab` *(develpment environment, DE)*
<base class="mb">
**2. Analysis Task:**
* Choose a simple dataset *(e.g.,* `Iris dataset` *is available in both R and Python).*
* Load the dataset.
<details style="margin: 5px 0;"><summary style="background: #FFFACD; width:250px;">See Code Example</summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>#1 Loading the Iris Dataset in R</b><br>
<i>The Iris dataset is available in R by default through the datasets package, which is part of the standard R distribution. No additional installation is required for this exercise.</i><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:16px; white-space: pre;"><i style="color: #8896c1;"># Load the Iris dataset</i>
data(iris)
<i style="color: #8896c1;"># View the first few rows of the dataset</i>
head(iris)
</code><br>
<b>#2 Loading the Iris Dataset in Python</b><br>
<i>The Iris dataset can be loaded using Pandas. While Pandas is not in the Python Standard Library, it is widely used for data manipulation and analysis tasks. If you don't have Pandas installed, you can install it using the following command in the terminal: </i><code>pip install pandas seaborn</code><br>
<i>Then, you can load the  the Iris dataset in a Jupyter Notebook or script file:</i>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:16px;  white-space: pre;"><i style="color: #8896c1;"># Import pandas and seaborn</i>
import pandas as pd
import seaborn as sns
<i style="color: #8896c1;"># Load the iris dataset</i>
iris = sns.load_dataset('iris')
<i style="color: #8896c1;"># View the first few rows of the dataset</i>
iris.head()
</code>
</div>
</details> <base class="mb">
**3. Perform Basic Analysis:**
* Perform simple statistical summaries (mean, median, standard deviation).
* Create a basic plot *(e.g., scatter plot or histogram)*.
<details style="margin: 5px 0;"><summary style="background: #FFFACD; width:265px;">See Code Example <i>(step 1)</i></summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<b>#1 Exploring the Iris Dataset in R</b><br>
<i>Using R's built-in functions, we can quickly generate summary statistics and species counts, providing insights into the dataset's composition without the need for additional packages.</i><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:16px; white-space: pre;"><i style="color: #8896c1;"># Summary statistics</i>
summary(iris)
<i style="color: #8896c1;"># Count of species</i>
table(iris$Species)
</code><br>
<b>#2 Exploring the Iris Dataset in Python</b><br>
<i>Exploring the Iris dataset in Python requires the use of Pandas for data manipulation and analysis. Pandas' functions, such as <code>describe()</code> for summary statistics and <code>value_counts()</code> for species counts, allow for an in-depth exploration of the dataset. (This step assumes Pandas is installed and imported.)</i><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px;font-size:16px;  white-space: pre;"><i style="color: #8896c1;"># Summary statistics</i>
iris.describe()
<i style="color: #8896c1;"># Count of species</i>
iris['species'].value_counts()
</code>
</div>
</details>
<details style="margin: 5px 0;"><summary style="background: #FFFACD; width:265px;">See Code Example <i>(step 2)</i></summary>

<div style="background: #FFFACD; padding: 15px; font-size: 18px;">
<i>This step enhances our exploratory data analysis by allowing us to observe the distribution of sepal lengths and widths across different species.</i><br><br>
<b>#1 Ploting the Iris Dataset in R</b><br>
<i>To visualize the Iris dataset in R, we utilize the <b>ggplot2</b> package, a powerful tool for creating complex plots from data in a dataframe. If ggplot2 is not already installed, it can be easily added.</i><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:16px; white-space: pre;"><i style="color: #8896c1;"># Install ggplot2 if not already installed</i>
if(!require(ggplot2)) install.packages("ggplot2")
library(ggplot2)
<i style="color: #8896c1;"># Scatter plot of Sepal.Length vs Sepal.Width colored by Species</i>
ggplot(iris, aes(x = Sepal.Length, y = Sepal.Width, color = Species)) + geom_point() +
    theme_minimal() + ggtitle("Sepal Length vs. Sepal Width")
</code><br>
<b>#2 Ploting the Iris Dataset in Python</b><br>
<i>To plot the Iris dataset in Python, both <b>matplotlib</b> and <b>seaborn</b> libraries are essential. These libraries are not part of the Python Standard Library but can be installed via pip. Together, they provide a comprehensive toolkit for creating a variety of visualizations, including scatter plots. If needed, use the following command in your terminal: </i><code>pip install matplotlib seaborn</code><br>
<code style="background-color: #e4f0f0; padding: 10px 10px; width:100%; display: block; margin-top: 10px; font-size:16px;  white-space: pre;"><i style="color: #8896c1;"># Import matplotlib for plotting</i>
import matplotlib.pyplot as plt
import seaborn as sns             <i style="color: #8896c1;"># optional here, if loaded earlier along with pandas</i>
<i style="color: #8896c1;"># Scatter plot of Sepal.Length vs Sepal.Width colored by Species</i>
sns.scatterplot(data=iris, x="sepal_length", y="sepal_width", hue="species")
plt.title("Sepal Length vs. Sepal Width")
plt.show()
</code>
</div>
</details> <base class="mb">
**4. Ensure Reproducibility:**
* Comment your code thoroughly.
* Include instructions for installing any required packages. Include info about used versions. <br>
*(You can draw inspiration from the code block instructions provided in the earlier steps of this exercise.)*
* Save your script or notebook file.
<div class="protip before mb-0 font-1" markdown="1" data-before="PRO TIP">
To see a more detailed step-by-step guide with graphical aids to complete this exercise, explore the following tutorials:
<table>
<tr> <td><li>{% include target_link href=413 %}</li></td>  <td><li>{% include target_link href=431 %} </li></td></tr>
<tr> <td><li>{% include target_link href=420 %}</li></td>  <td><li>{% include target_link href=430 %} </li></td></tr>
<tr> <td><li>{% include target_link href=531 %}</li></td>  <td><li>{% include target_link href=541 %} </li></td></tr>
<tr> <td><li>{% include target_link href=536 %}</li></td>  <td><li>{% include target_link href=544 %} </li></td></tr>
</table>
</div>
</div>


### <i><span style="color: #EC8000; ">E4: Share Your Work with Collaborators</span></i>

This exercise is designed to highlight the importance of collaboration and community engagement in ensuring reproducibility and quality in research.

<div class="exercise before" markdown="1" data-before="Community Standards and Collaboration using GitHub">
<base class="mt">
**Objective:** <br>
Explore collaborative features of GitHub, such as issues and pull requests, to understand community standards in code development. <base class="mb">
**Instructions:** <br>
**1. Create a GitHub Account online:** <br>
Sign up at <a href="https://github.com/" target="_blank">https://github.com/</a> if you haven't already. *(It is free.)* <base class="mb">
**2. Ceate Your Own Empty Repository:**
* Navigate to the Repositories tab and click the `"New"` button.
* Name your repository and add a brief description. Ensure the repository is set to public.
* Initialize the repository without a `README`, `.gitignore`, or `license` because you initialized your repo locally in the previous exercise.
* Navigate to your GitHub repository page, click the "Code" button, and then copy the URL of your repo to the clipboard. *(You will use it in the next step.)*
<base class="mb">
**3. Push Changes from Your Locally Created Git Repository:**
* Open terminal or Git Bash on your computing machine.
* Navigate to the folder containing your Jupyter Notebook.
* Link your local repository to the GitHub repository you created using:
```bash
git remote add origin [repository-URL]
```
* Push your changes to GitHub using:
```bash
git push -u origin master                   # or git push -u origin main
```
depending on your default branch name.
<base class="mb">
**4. Share Your Notebook via GitHub:**
* Ensure your Jupyter Notebook is clearly named and includes comments or markdown cells that explain the analysis steps.
* After pushing, navigate to your GitHub repository online to verify that your notebook is visible and accessible.
* Once your Jupyter Notebook is on GitHub, you can preview it directly in the browser and copy the URL to share it with your collaborators. For broader context, you can also send the link to the entire repository if needed, allowing others to access not only the notebook but any associated data and documentation.

**Optional Steps for Further Engagement:** <base class="mb">
**5. Fork a Repository:** Explore other users' repositories related to your research interests, fork one, and consider contributing by adding improvements or additional analysis. <base class="mb">
**6. Engage with the Community:** Participate in discussions, open issues for any bugs you find, or offer solutions to existing issues. Collaboration is key to advancing reproducible research.
<div class="protip before mb-0 font-1" markdown="1" data-before="PRO TIP">
To see a more detailed step-by-step guide with graphical aids to complete this exercise, navigate to tutorial {% include target_link href=932.2 %} and follow the steps in the {% include target_link href=932.2 section="#working-with-remote-repos" text="Working with remote repos" %} hands-on section. You can engage further by exploring the {% include target_link href=932.2 section="#collaborating-on-projects" text="Collaborating on projects" %}.
</div>
</div>
