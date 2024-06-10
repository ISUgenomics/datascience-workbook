---
title: "Browse the workbook contents"

permalink: /sitemap.html
layout: single
header:
  overlay_color: "444444"
  overlay_image: /assets/images/data_science_about_banner.png
---


Collection size: {{ site['collection-base'] | size }}

<!-- Buttons to switch views -->
<button class="btn choice mr" onclick="showDiv('toc')">Table of Contents</button>
<button class="btn choice mr" onclick="showDiv('index')">Site Index</button>
<button class="btn choice" onclick="showDiv('categories')">By Category</button>

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
              <a href="{{ tutorial.url | relative_url }}" class="prefix-{{ tutorial.level }}">{{ tutorial.title | default: 'Untitled' }}</a> <i><span style="color: #a9bbd1;">{{ tutorial.note | default: '' }}</span></i>
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
      <li><a href="{{ tutorial.url | relative_url }}" class="">{{ tutorial.title | default: "Untitled" }}</a></li>
    {% endfor %}
  </ul>
</div>


<!-- Category List -->
<div id="categories" style="display: none;">
  <h2 id="category-heading">Filter by Category: <span id="category-name"></span></h2>
  {% assign categories = content | map: 'categories' | default: "" | compact | flatten | uniq | sort %}

  {% for category in categories %}
    {% assign sanitized_category = category | replace: ' ', '-' | replace: ',', '-' %}
    <button class="category btn choice" onclick="showDiv('{{ sanitized_category }}', '{{ category }}')">{{ category }}</button>
  {% endfor %}

  <div class="selected-content">
    {% for category in categories %}
      {% assign sanitized_category = category | replace: ' ', '-' | replace: ',', '-' %}
      {% assign tutorials = site['collection-base'] | where: 'categories', category %}
      {% assign unique_tags = tutorials | map: 'tags' | flatten | uniq | sort %}

      <div id="{{ sanitized_category }}" class="category-content" style="display: none;"><hr>
        <button class="btn choice" onclick="showTags('{{ sanitized_category }}', this)">show tags</button>

        <select id="tag-dropdown-{{ sanitized_category }}" class="tag-dropdown btn" style="display: none;" onchange="filterByTag(this, '{{ sanitized_category }}')">
          <option value="">Filter by tag</option>
          {% for tag in unique_tags %}
            <option value="{{ tag }}">{{ tag }}</option>
          {% endfor %}
        </select>

        <div id="selected-tags-{{ sanitized_category }}"></div>
        <ul class="tutorial-list">
          {% for tutorial in tutorials %}
            <li data-tags="{{ tutorial.tags | join: ',' }}" data-attributes="{{ tutorial.attributes | join: ',' }}">
              <a href="{{ tutorial.url | relative_url }}" class="">{{ tutorial.title }}</a>
              <div class="tag-container" style="display: none;">
                {% for tag in tutorial.tags %}
                  <button class="btn-s bc-warning choice" onclick="filterByTagButton('{{ tag }}', '{{ sanitized_category }}')">{{ tag }}</button>
                {% endfor %}
                {% for attr in tutorial.attributes %}
                  <button class="btn-s bc-protip choice" onclick="filterByTagButton('{{ attr }}', '{{ sanitized_category }}')">{{ attr }}</button>
                {% endfor %}
                {% for cat in tutorial.categories %}
                  <button disabled class="btn-s" style="cursor: not-allowed;" title="Select this tag in the Category Filter section (above).">#{{ cat }}</button>
                {% endfor %}
              </div>
            </li>
          {% endfor %}
        </ul>
      </div>

    {% endfor %}
  </div>
</div>
