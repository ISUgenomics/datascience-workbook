---
title: "Tutorials Index"

permalink: /list.html
layout: single
header:
  overlay_color: "444444"
  overlay_image: /assets/images/data_science_about_banner.png
---


Collection size: {{ site['collection-base'] | size }}

<!-- Buttons to switch views -->
<button onclick="showList('toc')">Table of Contents</button>
<button onclick="showList('index')">Site Index</button>
<button onclick="showList('categories')">By Category</button>

{% assign content = site['collection-base'] %}

<!-- Structured List -->
{% assign tutorials_by_module = content | group_by_exp: "tutorial", "tutorial.path | remove: '_collection-base/' | split: '/' | first" %}

<div id="toc">
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
<div id="index">
  <h2>Alphabetical List</h2>
  <ul>
    {% assign tutorials = content | sort: 'title' %}
    {% for tutorial in tutorials %}
      <li><a href="{{ tutorial.url | relative_url }}">{{ tutorial.title | default: "Untitled" }}</a></li>
    {% endfor %}
  </ul>
</div>


<!-- Category List -->
<div id="categories">
  <h2>Filtered by Category</h2>
  {% assign categories = content | map: 'categories' | flatten | uniq | sort %}
  {% for category in categories %}
    <button class="collapsible">{{ category }}</button>
    <div class="content">
      <ul>
        {% for tutorial in site['collection-base'] %}
          {% if tutorial.categories contains category %}
            <li>
              <a href="{{ tutorial.url | relative_url }}">{{ tutorial.title }}</a>
            </li>
          {% endif %}
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>


<script>
function showList(listId) {
  document.getElementById('toc').style.display = 'none';
  document.getElementById('index').style.display = 'none';
  document.getElementById('categories').style.display = 'none';
  document.getElementById(listId).style.display = 'block';
}
</script>
