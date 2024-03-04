---
title: "Browse the workbook contents"

permalink: /list.html
layout: single
header:
  overlay_color: "444444"
  overlay_image: /assets/images/data_science_about_banner.png
---


Collection size: {{ site['collection-base'] | size }}

<!-- Buttons to switch views -->
<button onclick="showDiv('toc')">Table of Contents</button>
<button onclick="showDiv('index')">Site Index</button>
<button onclick="showDiv('categories')">By Category</button>

{% assign content = site['collection-base'] | sort: 'order' %}

<!-- Structured List -->
{% assign tutorials_by_module = content | group_by_exp: "tutorial", "tutorial.path | remove: '_collection-base/' | split: '/' | first" %}

<div id="toc" style="display: none;">
<h2>Structured List</h2>
{% for module in tutorials_by_module %}
  {% unless module.name == '' %}
    <div class="collapsible-content">
      {% assign tutorial = module.items[0] %}
      <button class="collapsible"><a href="{{ tutorial.url | relative_url }}" class="prefix-{{ tutorial.level }}">MODULE {{ tutorial.title | default: 'Untitled' }}</a></button>
      <div class="content" style="display:block;">
          {% for tutorial in module.items offset:1 %}
            <div>
              <div class="toc-type {{ tutorial.type }}">{{ tutorial.type }}</div>
              <a href="{{ tutorial.url | relative_url }}" class="no-decoration prefix-{{ tutorial.level }}">{{ tutorial.title | default: 'Untitled' }}</a> <i><span style="color: #a9bbd1;">{{ tutorial.note | default: '' }}</span></i>
            </div>
          {% endfor %}
      </div>
    </div>
  {% endunless %}
{% endfor %}
</div>



<!-- Alphabetical List -->
<div id="index" style="display: none;">
  <h2>Alphabetical List</h2>
  <ul>
    {% assign tutorials = content | sort: 'title' %}
    {% for tutorial in tutorials %}
      <li><a href="{{ tutorial.url | relative_url }}" class="no-decoration">{{ tutorial.title | default: "Untitled" }}</a></li>
    {% endfor %}
  </ul>
</div>


<!-- Category List -->
<div id="categories" style="display: none;">
  <h2>Filtered by Category</h2>
  {% assign categories = content | map: 'categories' | flatten | uniq | sort %}
  {% for category in categories %}
    <button class="category" onclick="showDiv('{{ category }}')">{{ category }}</button>
  {% endfor %}
  <div class="selected-content">
    {% for category in categories %}
      <div id="{{ category }}" class="category-content" style="display: none;">
        <ul>
          {% for tutorial in site['collection-base'] %}
            {% if tutorial.categories contains category %}
              <li>
                <a href="{{ tutorial.url | relative_url }}" class="no-decoration">{{ tutorial.title }}</a>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endfor %}
  </div>
</div>
