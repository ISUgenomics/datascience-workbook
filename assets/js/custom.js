// A function showing the temporary notification (e.g., after copying to clipboard)
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


// A function moving toc outside page__content section to facilitate its availability on page scrolling
function moveToc() {
  const sidebarRight = document.querySelector('.sidebar__right');
  const pageInnerWrapper = document.querySelector('.page');
  if (sidebarRight && pageInnerWrapper) {
    pageInnerWrapper.appendChild(sidebarRight);
    console.log("item moved");
  }
};


// A function (called for each single.html based content) replacing order to URL of the tutorial # include target-link
function updateTargetLinks() {
    var links = document.querySelectorAll('a.t-links');
    links.forEach(function(link) {
      var hrefValue = link.getAttribute('href');
      var sectionValue = link.getAttribute('section');
      if (urlDict[hrefValue]) {
        var url = urlDict[hrefValue].url + (sectionValue || '');
        link.setAttribute('href', url);
        if (!link.textContent.trim() || link.getAttribute('title') === 'true') {
          link.textContent = urlDict[hrefValue].title.replace(/<[^>]*>/g, '');
        }
        if (link.getAttribute('btn') === 'true') {
          link.classList.add('btn');
        }
        link.setAttribute('target', '_blank');
      }
    });
}


// A function that derives parent background color for custom collapsible <details>
function getParentColor() {
  document.querySelectorAll('details').forEach(details => {
    let parent = details.parentNode;
    let color = getComputedStyle(parent).backgroundColor;
    while (color === 'rgba(0, 0, 0, 0)' && parent !== null) {
      parent = parent.parentNode;
      color = getComputedStyle(parent).backgroundColor;
    }
    details.style.setProperty('--parent-color', color);
    const bc = Array.from(details.classList).some(className => className.startsWith('bc-'));
    if (bc) {
      details.querySelectorAll(':scope > summary ~ *').forEach(elem => {elem.style.padding = '0 0.8em 0.3em 0.8em';});
    }
  });
}


// A function to wrap custom HTML code blocks into default structure
function wrapCodeBlocks() {
  document.querySelectorAll('code.code-block').forEach((codeBlock) => {
    const divExternal = document.createElement('div');
    divExternal.className = 'language-html highlighter-rouge';
    const divParent = document.createElement('div');
    divParent.className = 'highlight';
    const preH = document.createElement('pre');
    preH.className = 'highlight';

    const bgColor = window.getComputedStyle(codeBlock).backgroundColor;
    preH.style.backgroundColor = bgColor;

    // Nest the elements
    divExternal.appendChild(divParent);
    divParent.appendChild(preH);
    preH.appendChild(codeBlock.cloneNode(true));

    // Replace the original code block with the new structure
    codeBlock.parentNode.replaceChild(divExternal, codeBlock);
  });
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
    btn.style.backgroundColor = "#eee";
    parentDiv.parentNode.appendChild(btn);

    btn.onclick = function() {
      navigator.clipboard.writeText(codeBlock.innerText).then(function() {
        showNotification('Content copied to clipboard!', codeBlock.parentNode);
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    };

  });
}

// A set of functions to download (as a file) text content of the copyable box
function downloadContent() {
    document.querySelectorAll('.details-save').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const codeBlock = this.closest('details').querySelector('pre code');
            if (codeBlock) {
                const textToCopy = codeBlock.textContent;
                console.log(textToCopy);
                download(textToCopy);
            }
        });
    });
};

function download(content) {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = timestamp();
    link.href = url;
    link.download = `DSW_download_${stamp}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function timestamp() {
    const now = new Date();
    const timestamp = now.toISOString().replace(/:\s*/g, "-").replace(/\.\d+/, "").replace("T", "_");
    return timestamp;
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
  moveToc();
  updateTargetLinks();
  wrapCodeBlocks();
  copyCodeButton();
  downloadContent();
  addTextToBefore();
  getParentColor();

  var copyButton = document.getElementById('copyOrderBtn');                     // find and setup the button for copying order
  if (copyButton) {
    copyButton.addEventListener('click', function() {
        var orderValue = this.getAttribute('data-order');
        copyOrderToClipboard(orderValue, copyButton);
    });
  }
});
