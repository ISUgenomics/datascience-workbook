
// A function (called for each single.html based content) reformatting default markdown behavior for target links
function adjustWrapperLinks() {

  var targetLinks = document.querySelectorAll('p.wrapper');
  targetLinks.forEach(function(targetLink) {
    var aTag = targetLink.querySelector('a');
    var next = targetLink.nextElementSibling;
    var previous = targetLink.previousElementSibling;
    if (next && next.tagName === 'P') {
      next.classList.add('wrapper-link');
    }

    if (previous) {
      if (previous.tagName === 'P' && aTag) {
        previous.classList.add('wrapper-link');
        previous.appendChild(aTag);
      }
      else if (previous.tagName === 'UL') {
        var lastLi = previous.querySelector('li:last-child');
        if (lastLi) {
          lastLi.appendChild(aTag); // Append the targetLink to the last <li>
        }
      }
    }

    if (!targetLink.innerHTML.trim()) {
      targetLink.parentNode.removeChild(targetLink);
    }
  });
}


// A function to copy order to clipboard
function copyOrderToClipboard(orderValue) {
    var tempInput = document.createElement('input');
    tempInput.value = orderValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Feedback to the user
    alert('Order ' + orderValue + ' copied to clipboard!');
}


// Event listener for custom.js functions
document.addEventListener('DOMContentLoaded', function() {
  adjustWrapperLinks();                                                         // reformatting target-links

  var copyButton = document.getElementById('copyOrderBtn');                     // Find and setup the button for copying order
  if (copyButton) {
    copyButton.addEventListener('click', function() {
        var orderValue = this.getAttribute('data-order');
        copyOrderToClipboard(orderValue);
    });
  }
});
