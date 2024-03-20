
// A function (called for each single.html based content) reformatting default markdown behavior for target links
function adjustWrapperLinks() {

  var targetLinks = document.querySelectorAll('p.wrapper');
  targetLinks.forEach(function(targetLink) {
    var aTag = targetLink.querySelector('a');                                   //
    if (targetLink.classList.contains('done')) {return;}
    var parent = targetLink.parentNode;
    console.log(parent.tagName, aTag.text);                                     //

    var next = targetLink.nextElementSibling;
    var prev = targetLink.previousElementSibling;
    if (prev) {console.log("Prev: ", prev.tagName)}                             //
    if (next) {console.log("Next: ", next.tagName)}                             //
    if (parent) {
      if (parent.tagName === 'SECTION' || parent.tagName === 'DIV') {
        var nextUlFound = true;
        if (next && next.tagName === 'P') {
          next.classList.add('inline');
          if (/^[a-zA-Z]/.test(next.textContent)) {next.textContent = ' ' + next.textContent;}
          nextUlFound = false;
        }
        if (prev) {
          if (prev.tagName === 'P') {prev.classList.add('inline');}

          else if (prev.tagName === 'UL') {
            var lastLi = prev.querySelector('li:last-child');
            lastLi.appendChild(targetLink);
            var current = next;
            while (current && current.tagName === 'P' && !nextUlFound) {
              console.log("HERE: ", current.tagName, current);                  //
              if (current.textContent) {
                if (/^[a-zA-Z]/.test(current.textContent)) {current.textContent = ' ' + current.textContent;}
                var nodes = current.childNodes
                if (nodes.length >= 2 && nodes[0].tagName === 'BR' && nodes[1].tagName === 'BR') {
                  current.removeChild(current.firstElementChild);
                  current.removeChild(current.firstElementChild);
                  console.log("YES");                                           //
                  break;
                }
              }
              if (current.classList.contains('wrapper')) {current.classList.add('done');}
              else {current.classList.add('inline');}
              var next2 = current.nextElementSibling;
              lastLi.appendChild(current);
              if (!next2 || next2.tagName === 'UL') {nextUlFound = true;}
              else {current = next2;}
            }

            if (parent.tagName === 'SECTION' && targetLink.classList.contains('level-1')) {
              console.log("FOUND");                                             //
              var n = prev.previousElementSibling;
              console.log(": ", n.tagName);                                     //
              if (n && n.tagName === 'UL' && !prev.classList.contains('level-1')) {
                n.appendChild(prev);
                prev.classList.add('level-1');
                console.log("prev: ", prev.tagName, prev.classList);            //
              }
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

function showNotification(message, parentElement) {
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'user-alert';
    parentElement.appendChild(notification);

    // Remove the notification after 2 seconds
    setTimeout(function() {
        notification.remove();
    }, 2000);
}


// A function to copy code block to clipboard
function copyCodeButton() {
  document.querySelectorAll('pre code').forEach((codeBlock) => {
    var btn = document.createElement('button');
    btn.textContent = 'copy';
    btn.className = 'code-btn';

    var parentDiv = codeBlock.parentNode;
    const style = window.getComputedStyle(codeBlock);
    const paddingTop = parseInt(style.paddingTop, 10);
    const paddingRight = parseInt(style.paddingRight, 10);
    btn.style.top = `${paddingTop}px`;
    btn.style.right = `${paddingRight}px`;
    parentDiv.parentNode.appendChild(btn);

    btn.onclick = function() {
      navigator.clipboard.writeText(codeBlock.innerText).then(function() {
        showNotification('Code block copied to clipboard!', codeBlock.parentNode);
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    };

  });
}



// A function to copy order to clipboard
function copyOrderToClipboard(orderValue, buttonElement) {
    var tempInput = document.createElement('input');
    tempInput.value = orderValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    buttonElement.parentNode.style.position = 'relative';
    showNotification('Order ' + orderValue + ' copied to clipboard!', buttonElement.parentNode);
}


//A function to customize the ::before of the color-coded boxes
function addTextToBefore() {
  document.querySelectorAll('.before').forEach(function(div) {
    var customText = div.getAttribute('data-before');
    div.style.setProperty('--custom-before', `"${customText}"`);
  });
}


// Event listener for custom.js functions
document.addEventListener('DOMContentLoaded', function() {
  adjustWrapperLinks();                                                         // reformatting target-links
  copyCodeButton();
  addTextToBefore();

  var copyButton = document.getElementById('copyOrderBtn');                     // find and setup the button for copying order
  if (copyButton) {
    copyButton.addEventListener('click', function() {
        var orderValue = this.getAttribute('data-order');
        copyOrderToClipboard(orderValue, copyButton);
    });
  }
});
