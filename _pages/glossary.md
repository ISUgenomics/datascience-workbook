---
title: "Glossary"

permalink: /glossary.html
layout: single
header:
  overlay_color: "444444"
  overlay_image: /assets/images/data_science_about_banner.png
---

{% include toc_horizontal.html %}



<!-- glossary starts here -->
{% assign current_letter = "" %}
{% for item in site.data.glossary %}
  {% assign first_letter = item.name | slice: 0, 1 | upcase %}
  {% if current_letter != first_letter %}
    {% assign current_letter = first_letter %}
## {{ current_letter }}
  {% endif %}
<h4 id="{{ item.name }}"> <a href="https://en.wikipedia.org/wiki/{{ item.wiki }}" target="_blank" class="glossary-term" data-term="{{ item.name }}">{{ item.name | replace: '-', ' ' | upcase }}</a>
  {% assign name_lower = item.name | replace: '-', ' ' | downcase %}
  {% assign wiki_lower = item.wiki | replace: '_', ' ' | downcase %}
  {% if name_lower != wiki_lower and wiki_lower != "" %}
    <em class="c-gray pl-2 font-08">alt. {{ item.wiki | replace: '_', ' ' | replace: '#', ': ' }}</em>
  {% endif %}
</h4>
  <span class="c-glossary">{{ item.definition }}</span>

{% endfor %}
