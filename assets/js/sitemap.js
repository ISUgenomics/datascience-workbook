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
    dropdown.style.display = 'block';
  });
});

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
}

function showTags(category, button) {
  var tags = document.querySelectorAll(`#${category} .tag-container`);
  var dropdown = document.getElementById(`tag-dropdown-${category}`);
  var areVisible = Array.from(tags).some(tag => tag.style.display === 'block');

  tags.forEach(tag => {
    tag.style.display = areVisible ? 'none' : 'block';
  });

  button.textContent = areVisible ? 'show tags' : 'hide tags';
}

function filterByTag(selectElement, category) {
  var selectedTag = selectElement.value;
  var tutorialList = document.querySelector(`#${category} .tutorial-list`);
  var tutorials = tutorialList.querySelectorAll('li');

  tutorials.forEach(function(tutorial) {
    var tags = tutorial.dataset.tags.split(',');
    if (selectedTag === "" || tags.includes(selectedTag)) {
      tutorial.style.display = 'list-item';
    } else {
      tutorial.style.display = 'none';
    }
  });
}
