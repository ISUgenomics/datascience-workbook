---
title: "DIFF, COMM, CMP – comparing and collating two files with Unix"
layout: single
author: Rick Masonbrink
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 03-command-line/assets/images/02_command_line_banner.png
type: "tutorial"
order: 335
level: 2
categories: []
tags: []
---


{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}

---


# Introduction

<!-- Intro section is required for page navigation
you can use it somehow
-->

# Comparing and Collating Two Files with Unix

The `diff`, `comm`, and `cmp` commands are powerful utilities in Unix systems for comparing and analyzing differences between multiple files. `diff` highlights discrepancies line by line, making it ideal for pinpointing changes between two text files. It provides a detailed output, showing added, removed, and modified lines. Conversely, `comm` is perfect for comparing sorted files, displaying lines unique to each file and those common to both. Its structured output simplifies identifying differences and similarities between files, particularly in sorted datasets. Meanwhile, `cmp` offers a byte-level comparison, efficiently highlighting differences in binary files. It displays the first differing bytes and their offsets, making it invaluable for verifying the integrity of binary data or identifying discrepancies in large files. These commands collectively provide versatile solutions for comparing files, catering to various use cases from text to binary comparisons in Unix environments.

**The two input files used to demonstrate the tutorial, note: they are tab separated.**
</break>

Sample files to demonstrate the usefullness of the below commands

<details>
<summary>File1.txt</summary>

```
##gff-version 3
##sequence-region   Chromosome_4 10612335 10618026
Chromosome_4    gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
Chromosome_4    Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
Chromosome_4    Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616191        10616666        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616667        10616725        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616667        10616725        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616726        10616766        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616767        10616850        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616767        10616850        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616851        10617972        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10617973        10618026        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10617973        10618026        .       -       0       Parent=mRNA1
###
##sequence-region   Chromosome_2 6725589 6726696
Chromosome_2    gffcl   gene    6725589 6726696 .       +       .       ID=gene2;Alias=RLOC_00001404
Chromosome_2    Mikado_loci     mRNA    6725589 6726696 21      +       .       ID=mRNA2;Parent=gene2;Alias=mikado.Scaffold_1G2094.1
Chromosome_2    Mikado_loci     exon    6725589 6725716 .       +       .       Parent=mRNA2
Chromosome_2    Mikado_loci     CDS     6725629 6725716 .       +       0       Parent=mRNA2
Chromosome_2    .       intron  6725717 6725773 .       +       .       Parent=mRNA2
Chromosome_2    Mikado_loci     CDS     6725774 6725941 .       +       2       Parent=mRNA2
Chromosome_2    Mikado_loci     exon    6725774 6725941 .       +       .       Parent=mRNA2
Chromosome_2    .       intron  6725942 6725986 .       +       .       Parent=mRNA2
Chromosome_2    Mikado_loci     exon    6725987 6726307 .       +       .       Parent=mRNA2
Chromosome_2    Mikado_loci     CDS     6725987 6726307 .       +       2       Parent=mRNA2
Chromosome_2    .       intron  6726308 6726382 .       +       .       Parent=mRNA2
Chromosome_2    Mikado_loci     CDS     6726383 6726606 .       +       2       Parent=mRNA2
Chromosome_2    Mikado_loci     exon    6726383 6726696 .       +       .       Parent=mRNA2
###
```

</details>

<details>
<summary>File2.txt</summary>

```
##gff-version 3
##sequence-region   Chromosome_4 10612335 10618026
Chromosome_4    gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
Chromosome_4    Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
Chromosome_4    Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616191        10616666        .       -       .       Parent=mRNA1
Chromosome_9    Mikado_loci     exon    10818058        10818082        .       -       .       Parent=Hetgly20664.t1
Chromosome_9    Mikado_loci     CDS     10818058        10818082        .       -       0       Parent=Hetgly20664.t1
Chromosome_9    gffcl   gene    10818169        10823373        .       +       .       ID=Hetgly20665;Alias=RLOC_00024670
Chromosome_9    Mikado_loci     mRNA    10818169        10823373        19      +       .       ID=Hetgly20665.t1;Parent=Hetgly20665;Alias=mikado.Scaffold_9G3402.1
Chromosome_9    Mikado_loci     exon    10818169        10818212        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818169        10818212        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818855        10818906        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10818855        10818906        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819113        10819217        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819113        10819217        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819271        10819295        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819271        10819295        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819541        10819617        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819541        10819617        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819664        10819732        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819664        10819732        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819815        10819904        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819815        10819904        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820027        10820149        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820027        10820149        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820510        10820594        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820510        10820594        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820645        10820714        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820645        10820714        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822063        10822254        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822063        10822254        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822759        10822892        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822759        10822892        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10823285        10823373        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10823285        10823373        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    gffcl   gene    10824580        10826264        .       +       .       ID=Hetgly20666;Alias=RLOC_00024671
Chromosome_9    Mikado_loci     mRNA    10824580        10826264        19      +       .       ID=Hetgly20666.t1;Parent=Hetgly20666;Alias=mikado.Scaffold_9G3403.1
Chromosome_9    Mikado_loci     CDS     10824580        10824850        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10824580        10824850        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10825921        10826126        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10825921        10826126        .       +       2       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10826178        10826264        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10826178        10826264        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    gffcl   gene    10844215        10844802        .       +       .       ID=Hetgly20667;Alias=RLOC_00024672
Chromosome_9    Mikado_loci     mRNA    10844215        10844805        22      +       .       ID=Hetgly20667.t1;Parent=Hetgly20667;Alias=mikado.Scaffold_9G3409.1
Chromosome_9    Mikado_loci     exon    10844215        10844242        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844287        10844521        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844574        10844805        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     CDS     10844574        10844801        .       +       0       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     mRNA    10846322        10846912        22      -       .       ID=Hetgly20668.t1;Parent=Hetgly20668;Alias=mikado.Scaffold_9G3413.1
Chromosome_9    Mikado_loci     exon    10846322        10846553        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    gffcl   gene    10846325        10846912        .       -       .       ID=Hetgly20668;Alias=RLOC_00024673
Chromosome_9    Mikado_loci     CDS     10846326        10846553        .       -       0       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846606        10846840        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846885        10846912        .       -       .       Parent=Hetgly20668.t1
```
</details>

# The diff command
diff is a command that will immediately tell you the differences and commonalities in each line between two sorted files.
```
diff File1.txt File2.txt

Using process substitutions we can sort them in place if needed
diff <(sort File1.txt) <(sort File2.txt)
```

<details>
<summary>Output</summary>

```
< Chromosome_4  Mikado_loci     CDS     10616667        10616725        .       -       0       Parent=mRNA1
< Chromosome_4  Mikado_loci     exon    10616667        10616725        .       -       .       Parent=mRNA1
< Chromosome_4  .       intron  10616726        10616766        .       -       .       Parent=mRNA1
< Chromosome_4  Mikado_loci     CDS     10616767        10616850        .       -       0       Parent=mRNA1
< Chromosome_4  Mikado_loci     exon    10616767        10616850        .       -       .       Parent=mRNA1
< Chromosome_4  .       intron  10616851        10617972        .       -       .       Parent=mRNA1
< Chromosome_4  Mikado_loci     exon    10617973        10618026        .       -       .       Parent=mRNA1
< Chromosome_4  Mikado_loci     CDS     10617973        10618026        .       -       0       Parent=mRNA1
< ###
< ##sequence-region   Chromosome_2 6725589 6726696
< Chromosome_2  gffcl   gene    6725589 6726696 .       +       .       ID=gene2;Alias=RLOC_00001404
< Chromosome_2  Mikado_loci     mRNA    6725589 6726696 21      +       .       ID=mRNA2;Parent=gene2;Alias=mikado.Scaffold_1G2094.1
< Chromosome_2  Mikado_loci     exon    6725589 6725716 .       +       .       Parent=mRNA2
< Chromosome_2  Mikado_loci     CDS     6725629 6725716 .       +       0       Parent=mRNA2
< Chromosome_2  .       intron  6725717 6725773 .       +       .       Parent=mRNA2
< Chromosome_2  Mikado_loci     CDS     6725774 6725941 .       +       2       Parent=mRNA2
< Chromosome_2  Mikado_loci     exon    6725774 6725941 .       +       .       Parent=mRNA2
< Chromosome_2  .       intron  6725942 6725986 .       +       .       Parent=mRNA2
< Chromosome_2  Mikado_loci     exon    6725987 6726307 .       +       .       Parent=mRNA2
< Chromosome_2  Mikado_loci     CDS     6725987 6726307 .       +       2       Parent=mRNA2
< Chromosome_2  .       intron  6726308 6726382 .       +       .       Parent=mRNA2
< Chromosome_2  Mikado_loci     CDS     6726383 6726606 .       +       2       Parent=mRNA2
< Chromosome_2  Mikado_loci     exon    6726383 6726696 .       +       .       Parent=mRNA2
< ###
---
> Chromosome_9  Mikado_loci     exon    10818058        10818082        .       -       .       Parent=Hetgly20664.t1
> Chromosome_9  Mikado_loci     CDS     10818058        10818082        .       -       0       Parent=Hetgly20664.t1
> Chromosome_9  gffcl   gene    10818169        10823373        .       +       .       ID=Hetgly20665;Alias=RLOC_00024670
> Chromosome_9  Mikado_loci     mRNA    10818169        10823373        19      +       .       ID=Hetgly20665.t1;Parent=Hetgly20665;Alias=mikado.Scaffold_9G3402.1
> Chromosome_9  Mikado_loci     exon    10818169        10818212        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10818169        10818212        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10818855        10818906        .       +       1       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10818855        10818906        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10819113        10819217        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10819113        10819217        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10819271        10819295        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10819271        10819295        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10819541        10819617        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10819541        10819617        .       +       2       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10819664        10819732        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10819664        10819732        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10819815        10819904        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10819815        10819904        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10820027        10820149        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10820027        10820149        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10820510        10820594        .       +       0       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10820510        10820594        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10820645        10820714        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10820645        10820714        .       +       2       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10822063        10822254        .       +       1       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10822063        10822254        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10822759        10822892        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10822759        10822892        .       +       1       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     exon    10823285        10823373        .       +       .       Parent=Hetgly20665.t1
> Chromosome_9  Mikado_loci     CDS     10823285        10823373        .       +       2       Parent=Hetgly20665.t1
> Chromosome_9  gffcl   gene    10824580        10826264        .       +       .       ID=Hetgly20666;Alias=RLOC_00024671
> Chromosome_9  Mikado_loci     mRNA    10824580        10826264        19      +       .       ID=Hetgly20666.t1;Parent=Hetgly20666;Alias=mikado.Scaffold_9G3403.1
> Chromosome_9  Mikado_loci     CDS     10824580        10824850        .       +       0       Parent=Hetgly20666.t1
> Chromosome_9  Mikado_loci     exon    10824580        10824850        .       +       .       Parent=Hetgly20666.t1
> Chromosome_9  Mikado_loci     exon    10825921        10826126        .       +       .       Parent=Hetgly20666.t1
> Chromosome_9  Mikado_loci     CDS     10825921        10826126        .       +       2       Parent=Hetgly20666.t1
> Chromosome_9  Mikado_loci     exon    10826178        10826264        .       +       .       Parent=Hetgly20666.t1
> Chromosome_9  Mikado_loci     CDS     10826178        10826264        .       +       0       Parent=Hetgly20666.t1
> Chromosome_9  gffcl   gene    10844215        10844802        .       +       .       ID=Hetgly20667;Alias=RLOC_00024672
> Chromosome_9  Mikado_loci     mRNA    10844215        10844805        22      +       .       ID=Hetgly20667.t1;Parent=Hetgly20667;Alias=mikado.Scaffold_9G3409.1
> Chromosome_9  Mikado_loci     exon    10844215        10844242        .       +       .       Parent=Hetgly20667.t1
> Chromosome_9  Mikado_loci     exon    10844287        10844521        .       +       .       Parent=Hetgly20667.t1
> Chromosome_9  Mikado_loci     exon    10844574        10844805        .       +       .       Parent=Hetgly20667.t1
> Chromosome_9  Mikado_loci     CDS     10844574        10844801        .       +       0       Parent=Hetgly20667.t1
> Chromosome_9  Mikado_loci     mRNA    10846322        10846912        22      -       .       ID=Hetgly20668.t1;Parent=Hetgly20668;Alias=mikado.Scaffold_9G3413.1
> Chromosome_9  Mikado_loci     exon    10846322        10846553        .       -       .       Parent=Hetgly20668.t1
> Chromosome_9  gffcl   gene    10846325        10846912        .       -       .       ID=Hetgly20668;Alias=RLOC_00024673
> Chromosome_9  Mikado_loci     CDS     10846326        10846553        .       -       0       Parent=Hetgly20668.t1
> Chromosome_9  Mikado_loci     exon    10846606        10846840        .       -       .       Parent=Hetgly20668.t1
> Chromosome_9  Mikado_loci     exon    10846885        10846912        .       -       .       Parent=Hetgly20668.t1
```
</details>


# The comm command
```
Print only lines that are common between the two files
comm -1 -2  <(sort File1.txt) <(sort File2.txt) |less

Using process substitutions we can sort them in place if needed
comm <(sort File1.txt) <(sort File2.txt)
```
<details>
<summary>Output</summary>

```
Chromosome_4    gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
Chromosome_4    .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616191        10616666        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
##gff-version 3
##sequence-region   Chromosome_4 10612335 10618026
```
</details>

# The cmp command
What is the first difference between two files? cmp will print which byte and which line contains this first difference. Extremely useful when verifying the contents of binary or large files.
```
cmp File1.txt File2.txt
```
<details>
<summary>Output</summary>
```
/dev/fd/63 /dev/fd/62 differ: byte 1, line 1
#These files are different at the first byte and line.
```

</details>


# The join command

The join command in Unix is a versatile tool for combining lines from two different files based on a common field or key. It merges lines with matching field values from both files, producing a unified output that incorporates data from both sources. join is particularly useful for relational operations, such as database-style joins, where you need to merge data sets based on a shared attribute. join is based on whitespace delimiters, which can also be changed.


This command sorts both files based on their ninth field, then performs a join operation on the sorted data using the ninth field as the key.
```
join -1 9 -2 9  <(sort -k9,9 File1.txt) <(sort -k9,9 File2.txt) |less
```
<details>
<summary>Output</summary>

```
 ### ##gff-version 3
 ### ##sequence-region Chromosome_4 10612335 10618026
 ### ##gff-version 3
 ### ##sequence-region Chromosome_4 10612335 10618026
 ##gff-version 3 ##gff-version 3
 ##gff-version 3 ##sequence-region Chromosome_4 10612335 10618026
 ##sequence-region Chromosome_2 6725589 6726696 ##gff-version 3
 ##sequence-region Chromosome_2 6725589 6726696 ##sequence-region Chromosome_4 10612335 10618026
 ##sequence-region Chromosome_4 10612335 10618026 ##gff-version 3
 ##sequence-region Chromosome_4 10612335 10618026 ##sequence-region Chromosome_4 10612335 10618026
ID=gene1;Alias=RLOC_00010436 Chromosome_4 gffcl gene 10612335 10618026 . - . Chromosome_4 gffcl gene 10612335 10618026 . - .
ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1 Chromosome_4 Mikado_loci mRNA 10612335 10618026 19 - . Chromosome_4 Mikado_loci mRNA 10612335 10618026 19 - .
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 . intron 10612437 10616129 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 . intron 10616191 10616666 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 . intron 10616726 10616766 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 . intron 10616851 10617972 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0 Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616667 10616725 . - 0 Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10616767 10616850 . - 0 Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci CDS 10617973 10618026 . - 0 Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10612335 10612436 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616130 10616190 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616667 10616725 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 . intron 10616191 10616666 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 Mikado_loci CDS 10612335 10612436 . - 0
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 Mikado_loci CDS 10616130 10616190 . - 1
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 Mikado_loci exon 10612335 10612436 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10616767 10616850 . - . Chromosome_4 Mikado_loci exon 10616130 10616190 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10617973 10618026 . - . Chromosome_4 . intron 10612437 10616129 . - .
Parent=mRNA1 Chromosome_4 Mikado_loci exon 10617973 10618026 . - . Chromosome_4 . intron 10616191 10616666 . - .
```
</details>

# Using Awk to compare two files

Awk stands out as a robust utility for comparing two files in Unix environments due to its text-processing prowess and simplicity. Its primary strength lies in its ability to handle structured data efficiently. Awk processes input line by line, making it ideal for comparing files containing records or lines with similar structures. By specifying field delimiters and comparison criteria, users can precisely identify differences or similarities between corresponding fields in the two files.


**This command compares the combinations of the first and second fields in both files. It outputs lines from File2.txt where these combinations are unique, meaning they do not occur in File1.txt.**
```
awk  'NR==FNR { c[$1$2]++; next} c[$1$2]++ == 0' File1.txt File2.txt
```

<details>
<summary>Output</summary>
This command prints the first occurence of a line from file2 if file2's column1 and 2 match column 1 and 2 from file 1
```
Chromosome_9    Mikado_loci     exon    10818058        10818082        .       -       .       Parent=Hetgly20664.t1
Chromosome_9    gffcl   gene    10818169        10823373        .       +       .       ID=Hetgly20665;Alias=RLOC_00024670
```
</details>

**This command outputs lines from File2.txt where the value of the ninth field is not present in File1.txt, effectively showing differences or unique values between the two files based on the ninth field.**
```
awk 'FNR==NR{a[$9];next}!($9 in a)' File1.txt File2.txt
```
<details>
<summary>Output</summary>

This command added all of column 9 from file 1 to the array (a), and if there is not a column 9 from file2 that matches, print the line
```
Chromosome_9    Mikado_loci     exon    10818058        10818082        .       -       .       Parent=Hetgly20664.t1
Chromosome_9    Mikado_loci     CDS     10818058        10818082        .       -       0       Parent=Hetgly20664.t1
Chromosome_9    gffcl   gene    10818169        10823373        .       +       .       ID=Hetgly20665;Alias=RLOC_00024670
Chromosome_9    Mikado_loci     mRNA    10818169        10823373        19      +       .       ID=Hetgly20665.t1;Parent=Hetgly20665;Alias=mikado.Scaffold_9G3402.1
Chromosome_9    Mikado_loci     exon    10818169        10818212        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818169        10818212        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818855        10818906        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10818855        10818906        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819113        10819217        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819113        10819217        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819271        10819295        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819271        10819295        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819541        10819617        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819541        10819617        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819664        10819732        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819664        10819732        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819815        10819904        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819815        10819904        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820027        10820149        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820027        10820149        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820510        10820594        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820510        10820594        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820645        10820714        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820645        10820714        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822063        10822254        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822063        10822254        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822759        10822892        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822759        10822892        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10823285        10823373        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10823285        10823373        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    gffcl   gene    10824580        10826264        .       +       .       ID=Hetgly20666;Alias=RLOC_00024671
Chromosome_9    Mikado_loci     mRNA    10824580        10826264        19      +       .       ID=Hetgly20666.t1;Parent=Hetgly20666;Alias=mikado.Scaffold_9G3403.1
Chromosome_9    Mikado_loci     CDS     10824580        10824850        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10824580        10824850        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10825921        10826126        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10825921        10826126        .       +       2       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10826178        10826264        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10826178        10826264        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    gffcl   gene    10844215        10844802        .       +       .       ID=Hetgly20667;Alias=RLOC_00024672
Chromosome_9    Mikado_loci     mRNA    10844215        10844805        22      +       .       ID=Hetgly20667.t1;Parent=Hetgly20667;Alias=mikado.Scaffold_9G3409.1
Chromosome_9    Mikado_loci     exon    10844215        10844242        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844287        10844521        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844574        10844805        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     CDS     10844574        10844801        .       +       0       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     mRNA    10846322        10846912        22      -       .       ID=Hetgly20668.t1;Parent=Hetgly20668;Alias=mikado.Scaffold_9G3413.1
Chromosome_9    Mikado_loci     exon    10846322        10846553        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    gffcl   gene    10846325        10846912        .       -       .       ID=Hetgly20668;Alias=RLOC_00024673
Chromosome_9    Mikado_loci     CDS     10846326        10846553        .       -       0       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846606        10846840        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846885        10846912        .       -       .       Parent=Hetgly20668.t1
```

</details>

**Likewise, we can do the opposite of the above just by removing the "!".  If column 9 from file 1 is found in column 9 from file2, print the line**
```
awk 'FNR==NR{a[$9];next}($9 in a)' File1.txt File2.txt
```
<details>
<summary>Output</summary>

```
##gff-version 3
##sequence-region   Chromosome_4 10612335 10618026
Chromosome_4    gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
Chromosome_4    Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
Chromosome_4    Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616191        10616666        .       -       .       Parent=mRNA1
```
</details>

**Attach column1 and 2 to an array and match these with column 1 and 2 from file 2.  If there is a difference (true), print line from File2.txt that maches.**
```
awk  'NR==FNR{c[$1$2];next};c[$1$2] > 0' File1.txt File2.txt
```

<details>
<summary>Output</summary>

```
##gff-version 3
##sequence-region   Chromosome_4 10612335 10618026
Chromosome_4    gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
Chromosome_4    Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
Chromosome_4    Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Chromosome_4    Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Chromosome_4    Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Chromosome_4    .       intron  10616191        10616666        .       -       .       Parent=mRNA1
```

</details>


**If column 9 from file 1 does not match column 9 from file 2, print the line from file 2**
```
awk 'NR==FNR { a[$9]; next } !($9 in a) { print $0 }' File1.txt File2.txt
```

<details>
<summary>Output</summary>

```
Chromosome_9    Mikado_loci     exon    10818058        10818082        .       -       .       Parent=Hetgly20664.t1
Chromosome_9    Mikado_loci     CDS     10818058        10818082        .       -       0       Parent=Hetgly20664.t1
Chromosome_9    gffcl   gene    10818169        10823373        .       +       .       ID=Hetgly20665;Alias=RLOC_00024670
Chromosome_9    Mikado_loci     mRNA    10818169        10823373        19      +       .       ID=Hetgly20665.t1;Parent=Hetgly20665;Alias=mikado.Scaffold_9G3402.1
Chromosome_9    Mikado_loci     exon    10818169        10818212        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818169        10818212        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10818855        10818906        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10818855        10818906        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819113        10819217        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819113        10819217        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819271        10819295        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819271        10819295        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819541        10819617        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819541        10819617        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819664        10819732        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819664        10819732        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10819815        10819904        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10819815        10819904        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820027        10820149        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820027        10820149        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820510        10820594        .       +       0       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820510        10820594        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10820645        10820714        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10820645        10820714        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822063        10822254        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822063        10822254        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10822759        10822892        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10822759        10822892        .       +       1       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     exon    10823285        10823373        .       +       .       Parent=Hetgly20665.t1
Chromosome_9    Mikado_loci     CDS     10823285        10823373        .       +       2       Parent=Hetgly20665.t1
Chromosome_9    gffcl   gene    10824580        10826264        .       +       .       ID=Hetgly20666;Alias=RLOC_00024671
Chromosome_9    Mikado_loci     mRNA    10824580        10826264        19      +       .       ID=Hetgly20666.t1;Parent=Hetgly20666;Alias=mikado.Scaffold_9G3403.1
Chromosome_9    Mikado_loci     CDS     10824580        10824850        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10824580        10824850        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10825921        10826126        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10825921        10826126        .       +       2       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     exon    10826178        10826264        .       +       .       Parent=Hetgly20666.t1
Chromosome_9    Mikado_loci     CDS     10826178        10826264        .       +       0       Parent=Hetgly20666.t1
Chromosome_9    gffcl   gene    10844215        10844802        .       +       .       ID=Hetgly20667;Alias=RLOC_00024672
Chromosome_9    Mikado_loci     mRNA    10844215        10844805        22      +       .       ID=Hetgly20667.t1;Parent=Hetgly20667;Alias=mikado.Scaffold_9G3409.1
Chromosome_9    Mikado_loci     exon    10844215        10844242        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844287        10844521        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     exon    10844574        10844805        .       +       .       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     CDS     10844574        10844801        .       +       0       Parent=Hetgly20667.t1
Chromosome_9    Mikado_loci     mRNA    10846322        10846912        22      -       .       ID=Hetgly20668.t1;Parent=Hetgly20668;Alias=mikado.Scaffold_9G3413.1
Chromosome_9    Mikado_loci     exon    10846322        10846553        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    gffcl   gene    10846325        10846912        .       -       .       ID=Hetgly20668;Alias=RLOC_00024673
Chromosome_9    Mikado_loci     CDS     10846326        10846553        .       -       0       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846606        10846840        .       -       .       Parent=Hetgly20668.t1
Chromosome_9    Mikado_loci     exon    10846885        10846912        .       -       .       Parent=Hetgly20668.t1
```
</details>

**Like the above example, if column 9 from file 1 does match column 9 from file2, print the column 9 from file 1 and the matching line from file 2. Note that this time I am naming the array's key $9 and making the key value $9 as well.**
```
awk 'NR==FNR { a[$9]=$9; next } ($9 in a) { print a[$9],$0 }' File1.txt File2.txt
```

<details>
<summary>Output</summary>

```
 ##gff-version 3
 ##sequence-region   Chromosome_4 10612335 10618026
ID=gene1;Alias=RLOC_00010436 Chromosome_4       gffcl   gene    10612335        10618026        .       -       .       ID=gene1;Alias=RLOC_00010436
ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1 Chromosome_4       Mikado_loci     mRNA    10612335        10618026        19      -       .       ID=mRNA1;Parent=gene1;Alias=mikado.Scaffold_4G3148.1
Parent=mRNA1 Chromosome_4       Mikado_loci     CDS     10612335        10612436        .       -       0       Parent=mRNA1
Parent=mRNA1 Chromosome_4       Mikado_loci     exon    10612335        10612436        .       -       .       Parent=mRNA1
Parent=mRNA1 Chromosome_4       .       intron  10612437        10616129        .       -       .       Parent=mRNA1
Parent=mRNA1 Chromosome_4       Mikado_loci     CDS     10616130        10616190        .       -       1       Parent=mRNA1
Parent=mRNA1 Chromosome_4       Mikado_loci     exon    10616130        10616190        .       -       .       Parent=mRNA1
Parent=mRNA1 Chromosome_4       .       intron  10616191        10616666        .       -       .       Parent=mRNA1
```
</details>
