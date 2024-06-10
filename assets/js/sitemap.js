// Table of Contents Collapsible Events
document.addEventListener('DOMContentLoaded', () => {
  // Initialize collapsible elements
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // Set 'toc' to display block by default
  document.getElementById('toc').style.display = 'block';

  // Show tag dropdowns
  var dropdowns = document.querySelectorAll('.tag-dropdown');
  dropdowns.forEach(function(dropdown) {
    dropdown.style.display = 'inline-block';
  });
});

let selectedTags = {};

function showDiv(targetId, categoryName) {
  // Define the main views
  const mainViews = ['toc', 'index', 'categories'];

  // Hide all main views
  mainViews.forEach(viewId => {
    document.getElementById(viewId).style.display = 'none';
  });

  // Hide all category-content divs if the target is not a category content
  if (!mainViews.includes(targetId)) {
    var contents = document.getElementsByClassName('category-content');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
  }

  // Show the target view or category content
  var selected = document.getElementById(targetId);
  if (selected) {
    selected.style.display = 'block';
  }

  // Keep 'categories' view displayed when selecting a category
  if (!mainViews.includes(targetId)) {
    document.getElementById('categories').style.display = 'block';
  }

  // Update the heading with the clicked category name
  if (categoryName) {
    document.getElementById('category-heading').innerHTML = 'Filtered by Category: <span style="color: #4a9fc2;">' + categoryName + '</span>';
  }

  // Reset selected tags
  selectedTags[targetId] = [];
  updateSelectedTags(targetId);
}

function showTags(category, button) {
  var tags = document.querySelectorAll(`#${category} .tag-container`);
  var dropdown = document.getElementById(`tag-dropdown-${category}`);
  var areVisible = Array.from(tags).some(tag => tag.style.display === 'flex');

  tags.forEach(tag => {
    tag.style.display = areVisible ? 'none' : 'flex';
  });

  button.textContent = areVisible ? 'show tags' : 'hide tags';
}

function filterByTag(selectElement, category) {
  var selectedTag = selectElement.value;
  if (selectedTag) {
    // Reset selected tags when a new tag is selected from the dropdown
    selectedTags[category] = [selectedTag];
    updateSelectedTags(category);
    filterTutorials(category);
  }
}

function filterByTagButton(tag, category) {
  if (!selectedTags[category].includes(tag)) {
    selectedTags[category].push(tag);
    updateSelectedTags(category);
    filterTutorials(category);
  }
}

function updateSelectedTags(category) {
  var selectedTagsContainer = document.getElementById(`selected-tags-${category}`);
  selectedTagsContainer.innerHTML = '';
  selectedTags[category].forEach(tag => {
    var tagButton = document.createElement('button');
    tagButton.innerHTML = tag + ' <span class="c-bad">×</span>';
    tagButton.classList.add('btn-s');
    tagButton.style.marginRight = '0.2em';
    tagButton.onclick = function() {
      removeTag(tag, category);
    };
    selectedTagsContainer.appendChild(tagButton);
  });
}

function removeTag(tag, category) {
  selectedTags[category] = selectedTags[category].filter(t => t !== tag);
  updateSelectedTags(category);
  filterTutorials(category);
}

function filterTutorials(category) {
  var tutorialList = document.querySelector(`#${category} .tutorial-list`);
  var tutorials = tutorialList.querySelectorAll('li');

  tutorials.forEach(function(tutorial) {
    var tags = tutorial.dataset.tags.split(',');
    var attributes = tutorial.dataset.attributes.split(',');
    var allTags = tags.concat(attributes);
    if (selectedTags[category].every(tag => allTags.includes(tag))) {
      tutorial.style.display = 'list-item';
    } else {
      tutorial.style.display = 'none';
    }
  });
}
