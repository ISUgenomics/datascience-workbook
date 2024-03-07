
// A function (called for each single.html based content) reformatting default markdown behavior for target links
function adjustWrapperLinks() {
  console.log("here");
  var targetLinks = document.querySelectorAll('p.wrapper');
  targetLinks.forEach(function(targetLink) {
    var aTag = targetLink.querySelector('a');
    var next = targetLink.nextElementSibling;
    var previous = targetLink.previousElementSibling;
    if (next && next.tagName === 'P') {
      next.classList.add('wrapper-link');
    }
    if (previous && previous.tagName === 'P' && aTag) {
      previous.classList.add('wrapper-link');
      previous.appendChild(aTag);
    }
    if (previous && previous.tagName === 'UL') {
      var lastLi = previous.querySelector('li:last-child');
      if (lastLi) {
        lastLi.appendChild(aTag);
      }
    }
    if (!targetLink.innerHTML.trim()) {
      targetLink.parentNode.removeChild(targetLink);
    }
  });
}


// Event listener for custom.js functions
document.addEventListener('DOMContentLoaded', function() {
  adjustWrapperLinks();                                                         // reformatting target-links
});
