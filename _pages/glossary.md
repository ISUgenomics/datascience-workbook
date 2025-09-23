---
title: "Glossary"

permalink: /glossary.html
layout: splash
header:
  overlay_color: "444444"
  overlay_image: /assets/images/data_science_about_banner.png
---


<div class="glossary-container">
<!-- Sticky container for displaying tutorials -->
<div id="term-tutorials-container" class="sidebar-tutorials" style="display:none;"><div style="direction:ltr;">
  <span id="close-term-tutorials">x</span>
  <h4 id="term-tutorials-header" class="inline tutorials-header"></h4>
  <ul id="term-tutorials-list"></ul>
</div></div>

<!-- Data storage objects required for matching glossary terms and tags in tutorials -->
{% assign tutorials = site['collection-base'] | sort: 'order' %}
{% assign glossary_items = site.data.glossary %}

<!-- glossary starts here -->
<div class="glossary-content" markdown="1">
{% assign current_letter = "" %}
{% for item in glossary_items %}
  {% assign first_letter = item.name | slice: 0, 1 | upcase %}
  {% if current_letter != first_letter and first_letter != "." %}
    {% assign current_letter = first_letter %}
## {{ current_letter }}
<h3 class="visually-hidden">Glossary terms starting with {{ current_letter }}</h3>
  {% endif %}

<h4 id="{{ item.name }}">
  <span class="glossary-term" style="color: #24376b;" data-term="{{ item.name }}">{{ item.name | replace: '-', ' ' | upcase }}</span>
  {% if item.wiki and item.wiki != "" %}
    {% assign name_lower = item.name | replace: '-', ' ' | downcase %}{% assign wiki_lower = item.wiki | replace: '_', ' ' | downcase %}
    {% if name_lower != wiki_lower %}<em class="c-gray pl-2 font-08">alt. {{ item.wiki | replace: '_', ' ' | replace: '#', ': ' }}</em>{% endif %}
    &emsp;<a href="https://en.wikipedia.org/wiki/{{ item.wiki | escape }}" class="font-08" target="_blank" rel="noopener noreferrer">𝐖𝐢𝐤𝐢</a>
  {% endif %}
</h4>
  <span class="c-glossary" data-definition="{{ item.name }}">{{ item.definition }}</span><br>
  <div class="inline w-1">
    <button class="btn show-tutorials choice mr" data-term="{{ item.name }}" style="display:inline-block; vertical-align: top;">List tutorials</button>
    <div id="categories-{{ item.name }}" class="glossary-categories font-08"></div>
  </div>
{% endfor %}


<!-- Render all tutorials as hidden list items with data-term attributes -->
<div id="glossary-tutorials" style="display:none;">
  {% for tutorial in tutorials %}
    {% assign tutorial_categories = tutorial.categories  | downcase %}
    {% assign tutorial_tags = tutorial.tags | downcase %}

    {% for term in glossary_items %}
      {% assign wiki = term.wiki | replace: '_', '-' | downcase %}
      {% if tutorial_categories contains term.name or tutorial_tags contains term.name or tutorial_tags contains wiki %}
        <li data-term="{{ term.name }}" data-modules="{{ tutorial.categories | join: ',' }}">
          <a href="{{ tutorial.url }}" target="_blank">{{ tutorial.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>

</div> <!-- glossary-content -->
<div class="toc-vertical">
      <ul>
        {% assign letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" | split: ',' %}
        {% for letter in letters %}
          <li><a href="#{{ letter | downcase }}">{{ letter }}</a></li>
        {% endfor %}
      </ul>
    </div>
</div>

<!-- JavaScript to handle showing/hiding tutorials -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.show-tutorials');
    var termTutorialsContainer = document.getElementById('term-tutorials-container');
    var termTutorialsHeader = document.getElementById('term-tutorials-header');
    var termTutorialsList = document.getElementById('term-tutorials-list');
    var hiddenTutorials = document.getElementById('glossary-tutorials');
    var closeButton = document.getElementById('close-term-tutorials');

// Pre-populate categories for each term on page load
    var glossaryTerms = document.querySelectorAll('.glossary-term');
    glossaryTerms.forEach(function(termElement) {
      var term = termElement.getAttribute('data-term');
      var categoriesDiv = document.getElementById('categories-' + term);
      var matchingItems = hiddenTutorials.querySelectorAll('li[data-term="' + term + '"]');

      var categories = new Set();
      matchingItems.forEach(function(item) {
        var itemCategories = item.getAttribute('data-modules').split(',');
        itemCategories.forEach(function(cat) {
          if (cat) categories.add(cat.trim());
        });
      });

      categories.forEach(function(category) {
        var categoryLink = '<a class="c-header italic category-link" style="border-bottom: 0;" href="#' + category.replace(/\s+/g, '-').toLowerCase() + '" data-category="' + category + '">#' + category + '</a>';
        categoriesDiv.innerHTML += categoryLink + '<span style="color: #d7dadc;">&ensp;|&ensp;</span>';
      });
    });

// Function to hide term tutorials container
    function hideTermTutorials() {
      termTutorialsContainer.style.display = 'none';
    }
// Add event listener to the close button
    closeButton.addEventListener('click', hideTermTutorials);

// Add hover functionality to category links
    var categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(function(link) {
      link.addEventListener('mouseover', function() {
        var category = this.getAttribute('data-category');
        var tutorials = termTutorialsList.querySelectorAll('li[data-modules*="' + category + '"]');
        tutorials.forEach(function(tutorial) {
          tutorial.classList.add('highlight-tutorial');
        });
      });
      link.addEventListener('mouseout', function() {
        var category = this.getAttribute('data-category');
        var tutorials = termTutorialsList.querySelectorAll('li[data-modules*="' + category + '"]');
        tutorials.forEach(function(tutorial) {
          tutorial.classList.remove('highlight-tutorial');
        });
      });
    });

// Display the list of tutorials related with selected term in the glossary
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {

    // Clear existing list items
        termTutorialsList.innerHTML = '';

    // Get the term associated with the clicked button
        var term = this.getAttribute('data-term');

    // Update the header text
        termTutorialsHeader.textContent = 'Tutorials on ' + term.replace('-', ' ');

    // Get all tutorial list items that match the term
        var matchingItems = hiddenTutorials.querySelectorAll('li[data-term="' + term + '"]');

    // Append matching items to the list
        matchingItems.forEach(function(item) {
          termTutorialsList.appendChild(item.cloneNode(true));
        });

    // Show the container
        termTutorialsContainer.style.display = 'block';

      });
    });

// Function to escape regex special characters in a string
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

// Linking related terms in definitions
    var glossaryItems = document.querySelectorAll('.c-glossary');
    var termsMap = {};
    glossaryTerms.forEach(function(termElement) {
      var term = termElement.getAttribute('data-term');
      termsMap[term] = termElement.innerText.trim();
    });

    // Sort terms by length in descending order to prioritize longer matches
    var sortedTerms = Object.keys(termsMap).sort(function(a, b) {
      return b.length - a.length;
    });

    // Function to create regex patterns for each term
    function createTermPattern(term) {
      const escapedTerm = escapeRegExp(term);
      const pattern = `\\b${escapedTerm.replace('-', '[\\s-]')}(?:s|es)?\\b`;
      return new RegExp(pattern, 'gi');
    }

    glossaryItems.forEach(function(definitionElement) {
      var term = definitionElement.getAttribute('data-definition');
      var definition = definitionElement.innerHTML;

      // Split the definition by code blocks and anchor tags to avoid matching inside them
      var parts = definition.split(/(<code[^>]*>.*?<\/code>|<a[^>]*>.*?<\/a>)/gi);

      sortedTerms.forEach(function(key) {
        if (key !== term) {
          // Create regex pattern for the term
          var regex = createTermPattern(key);
          parts = parts.map(function(part, index) {
            // Skip code blocks and anchor tags
            if (index % 2 === 1) {
              return part;
            }
            // Split part again to ensure newly created <a> tags are not processed
            var subparts = part.split(/(<a[^>]*>.*?<\/a>)/gi);
            subparts = subparts.map(function(subpart, subindex) {
              // Skip all anchor tags
              if (subindex % 2 === 1) {
                return subpart;
              }
              // Replace terms with links
              return subpart.replace(regex, function(matched) {
                return `<a href="#${key.replace(/\s+/g, '-').toLowerCase()}">${matched}</a>`;
              });
            });
            return subparts.join('');
          });
        }
      });

      definitionElement.innerHTML = parts.join('');
    });

  });
</script>
