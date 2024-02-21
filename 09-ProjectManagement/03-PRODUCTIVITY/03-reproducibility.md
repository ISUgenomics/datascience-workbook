---
title: "Research Reproducibility"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: /09-ProjectManagement/assets/images/09_project_management_banner.png
---


{% include toc %}

[DataScience Workbook](https://datascience.101workbook.org/) / [09. Project Management](../00-ProjectManagement-LandingPage.md) / [4. Quality Assurance](00-quality-assurance) / **4.3 Research Reproducibility**

---

# Introduction

At its core, **reproducibility is the ability to repeat a research study's processes and obtain the same results**. It's a hallmark of high-quality scientific work, ensuring that findings are not just a one-time miracle but a reliable outcome that others can achieve independently. This involves everything from the initial hypothesis to the methodologies, data analysis, and even the presentation of results. Decent documentation plays a crucial role in this process, serving as the foundation that enables others to understand, evaluate, and replicate the research findings accurately.


<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">Related Terms:</span><br>
<br><span style="font-style:italic;">
<b>Replicability</b> refers to the ability to achieve similar outcomes by conducting the same study but with different methods, data sets, or conditions. While it sounds similar, replicability extends the idea of reproducibility to test the universality of findings across various contexts. <br><br>
<b>Transparency</b> is the openness with which researchers share their methods, data, and findings, enabling others to scrutinize and understand their work fully.
</span>
</div>

**Why does reproducibility matter so much?** <br>
Reproducibility is not just a technical requirement. It's a commitment to scientific excellence and integrity.
* Reproducibility is the bedrock upon which the **trustworthiness of research** is built.
* When studies are reproducible, they contribute to a body of **knowledge that is reliable and actionable**.
* It also ensures that research funds and efforts are utilized effectively, paving the way for **standardized approaches** and genuine advancements in science.
* This fosters further investigation, innovation, and **application of research findings in real-world scenarios**, from healthcare to environmental policy.

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">PRO TIP:</span>
<br><span style="font-style:italic;">Practically, reproducibility enhances the credibility and impact of your research, establishing you as a trustworthy figure in your field. For your future research, it opens doors to collaboration and increases the likelihood of funding. It also allows you to efficiently revisit and extend your own work in the future, whether it's applying the methodology to new datasets or refining your analysis as new information becomes available. </span>
</div>


### Common Challenges

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

<div style="background: #cff4fc; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-style:italic;">
<b>The key to overcoming these challenges lies in adopting a new approach and mindset</b>, seeing reproducibility not as a hurdle but as an integral part of the research process. By shifting our perspective, we can start <b>to see the value in the extra steps involved</b>, recognizing them as investments in the credibility and longevity of our work.
</span>
</div>


# Key Principles and Best Practices

In a research project, reproducibility is not just a goal but a guiding principle. It ensures that research can be trusted, built upon, and extended by the scientific community. By embedding `transparency`, `accessibility`, and adherence to `standards` into our research practices, we not only enhance the reproducibility of our work but also its impact and credibility. Adopting these principles requires a shift in mindset: a commitment to conducting research that is as open and accessible as well as systematic and comprehensively documented.


## Transparency in Methodology

The first cornerstone of reproducible research is transparency in methodology. This means providing a clear, detailed account of how research is conducted, from the initial hypothesis through to data collection and analysis. Every step should be documented so thoroughly that `fellow researchers can follow the same path without ambiguity`. This includes specifying the software and tools used, the versions of those tools, and any custom code or algorithms developed.

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-style:italic;">Transparency is the bridge that allows others to walk in your scientific footsteps, ensuring that your work can be critically assessed, validated, or refuted. </span>
</div>

This table provides clear examples of practices that promote transparency in the methodology versus those that hinder it, helping to guide you toward more reproducible research practices.

<table>
  <tr><th style="width:15%;">Methodology</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;"">Recommendations</th></tr>
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

<div style="background: #ffd7b5;  padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">A Personalized Methodology Transparency Checklist</span>
<br><br><span style="font-style:italic;"><b>Objective:</b><br>
Create a customized checklist that ensures transparency in the methodology of your projects.
<br><br><b>Instructions:</b><br>
<b>1.</b> List all steps of your typical research process.<br>
<b>2.</b> Next to each step, jot down specific questions that ensure transparency.</br>
<b>3.</b> Use this checklist as a guide when documenting your methodology in future projects.
</span><br><br>
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

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-style:italic;">The aim is to remove barriers to accessing the building blocks of your research, enabling others to reproduce or build upon your findings. </span>
</div>

This table aims to guide you toward best practices in making your data and materials accessible, while also highlighting common pitfalls. It also offers actionable advice to improve accessibility and long-term preservation to ensure that data remains usable for future research endeavors.

<table border="1">
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;"">Recommendations</th></tr>
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

<div style="background: #ffd7b5;  padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">Data Management Plan Drafting</span>
<br><br><span style="font-style:italic;"><b>Objective:</b><br>
Draft a data management plan (DMP) that outlines how data and materials will be handled, stored, and shared. Following this plan enhances the accessibility of your data and materials.
<br><br><b>Instructions:</b><br>
<b>1.</b> Identify the types of data you typically generate and list them.<br>
<b>2.</b> For each data type, write down how you will store, archive, and share this data, considering data formats, platforms for sharing, and any privacy concerns.<br>
<b>3.</b> Include a section on the tools and software you'll use, ensuring they align with open standards.
</span><br><br>
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

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-style:italic;">The aim of adhering to standards and building robust protocols is to ensure consistency, reliability, and quality in your research.  </span>
</div>

This table highlights the importance of adhering to standards and developing robust protocols to enhance the reproducibility of research.

<table border="1">
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;"">Recommendations</th></tr>
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

<div style="background: #ffd7b5;  padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">Standards and Protocols Assessment</span>
<br><br><span style="font-style:italic;"><b>Objective:</b><br>
Evaluate and document the standards and protocols you currently use or plan to use in your research. In a result, you will get the assessment document that outlines your commitment to standards and protocols, ensuring reproducibility.
<br><br><b>Instructions:</b><br>
<b>1.</b> Make a list of the main standards and protocols relevant to your field of research (e.g., data formats, metadata standards).<br>
<b>2.</b> Assess how well your current or planned research practices align with these standards.<br>
<b>3.</b> For each standard or protocol, write a brief plan on how you will ensure compliance in your research.
</span><br><br>
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

<div style="background: #dff5b3; padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-style:italic;">Documentation acts as the blueprint of your research, detailing every choice made and every step taken. </span>
</div>

<table border="1">
  <tr><th style="width:15%;">Category</th><th style="background-color:#e6f0f0; color: #0ba37f; width:30%;">Good Practices</th><th style="background-color:#fae7e7; color: red;width:25%;">Bad Practices</th><th style="background-color:#e6f0f0; color: #0ba37f;"">Recommendations</th></tr>
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

<div style="background: #ffd7b5;  padding: 15px; margin-bottom: 20px; font-size: 20px;">
<span style="font-weight:800;">Documentation Template Development</span>
<br><br><span style="font-style:italic;"><b>Objective:</b><br>
Develop a comprehensive documentation template tailored to your research process.
<br><br><b>Instructions:</b><br>
<b>1.</b> Outline the sections needed to fully document a project, including background, methodology, data collection and analysis, results, and deviations.<br>
<b>2.</b> For each section, add prompts or questions that guide you to provide detailed information. <br>
<b>3.</b> Integrate a section for notes on deviations or unexpected challenges encountered during the project.
</span><br><br>
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

<!--
# Tools and Technologies


# Real-life Examples


# Practical Exercises
-->

___
# Further Reading
* [4.3.1 Research Reproducibility Guideline](03-tutorial-research-reproducibility)

* [5. Project Closing](../04-PUBLICATION/01-project-closing)


___

[Homepage](../../index.md){: .btn  .btn--primary}
[Section Index](../00-ProjectManagement-LandingPage){: .btn  .btn--primary}
[Previous](02-productivity){: .btn  .btn--primary}
[Next](03-tutorial-research-reproducibility){: .btn  .btn--primary}
[top of page](#introduction){: .btn  .btn--primary}
