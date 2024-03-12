
// A function (called for each single.html based content) reformatting default markdown behavior for target links
function adjustWrapperLinks() {

  var targetLinks = document.querySelectorAll('p.wrapper');
  targetLinks.forEach(function(targetLink) {
    var aTag = targetLink.querySelector('a');
    var parent = targetLink.parentNode;
    console.log(parent.tagName, aTag.text);

    var next = targetLink.nextElementSibling;
    var prev = targetLink.previousElementSibling;
    if (next) {console.log("Next: ", next.tagName)}
    if (prev) {console.log("Prev: ", prev.tagName)}
    if (parent) {
      if (parent.tagName === 'SECTION') {
        if (next && !(/^H[1-6]$/).test(next.tagName)) {next.classList.add('inline');}
        if (prev) {
          if (prev.tagName === 'P') {prev.classList.add('inline');}

          else if (prev.tagName === 'UL') {
            var lastLi = prev.querySelector('li:last-child');
            lastLi.appendChild(targetLink);
            var current = next;
            var nextUlFound = false;
            while (current && !nextUlFound) {
              console.log("HERE: ", current.tagName, current);
              if (current.textContent) {
                if (/^[a-zA-Z]/.test(current.textContent)) {current.textContent = ' ' + current.textContent;}
              }
              lastLi.appendChild(current);
              var next2 = current.nextSibling;
              if (!next2 || next2.tagName === 'UL') {nextUlFound = true;}
              else {current = next2;}
            }
          }

        }
      }
      else if (parent.tagName === 'LI') {
        if (prev) {prev.classList.add('inline');}
        tmp = parent.parentNode.nextElementSibling;
        if (tmp && tmp.tagName === 'P') {
          tmp.classList.add('inline');
          parent.appendChild(tmp);
        }
      }

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

  var copyButton = document.getElementById('copyOrderBtn');                     // find and setup the button for copying order
  if (copyButton) {
    copyButton.addEventListener('click', function() {
        var orderValue = this.getAttribute('data-order');
        copyOrderToClipboard(orderValue);
    });
  }
});
