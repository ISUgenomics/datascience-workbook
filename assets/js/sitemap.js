

// Table of Contents Collapsible Events
document.addEventListener('DOMContentLoaded', () => {
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
});


function showDiv(targetId) {
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
}
