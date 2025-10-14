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



// adds icon to links, so users can right-click or copy that link easily.
document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

  headings.forEach(heading => {
    // Skip headings inside an element with class="accordion"
    if (heading.closest(".accordion")) return;
    const fullUrl = `${window.location.origin}${window.location.pathname}#${heading.id}`;

    // Create the actual link (must exist in DOM as <a> for right-click menu)
    const anchor = document.createElement("a");
    anchor.href = fullUrl;
    anchor.classList.add("anchor-link");
    anchor.innerHTML = '<i class="bi bi-link-45deg"></i>';

    // Copy on click
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const urlToCopy = anchor.getAttribute("data-full-url");
      navigator.clipboard.writeText(urlToCopy).then(() => {
        anchor.classList.add("copied");
        setTimeout(() => anchor.classList.remove("copied"), 800);
      });
    });

    heading.appendChild(anchor);
  });
});

// adds tooltips for links (external/internal) and an icon for external links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");
  const currentPath = window.location.pathname.replace(/\/$/, ""); // normalize

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // Handle same-page anchor links
    if (href.startsWith("#")) {
      link.setAttribute("title", "Internal redirection to a section on this page");
      return;
    }

    // External link (different origin)
    if (!href.startsWith("/") && !href.startsWith(window.location.origin)) {
      link.classList.add("external-link");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("title", "Link to the external resource");
      link.setAttribute("aria-label", "Opens in new tab"); // accessibility

      // Add external icon
      if (!link.querySelector(".bi-box-arrow-up-right")) {
        if (link.closest(".social-icons")) return; 
        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-box-arrow-up-right", "ms-1");
        link.appendChild(icon);
      }

      return;
    }

    // Internal link (to another page or same page)
    const absoluteHref = href.startsWith("http") ? new URL(href).pathname : href;
    const linkPath = absoluteHref.replace(/\/$/, "");

    let tooltipText;
    if (linkPath === currentPath) {
      tooltipText = "Internal redirection to a section on this page";
    } else {
      const parts = linkPath.split("/").filter(Boolean);
      const lastPart = decodeURIComponent(parts[parts.length - 1]);
      tooltipText = `Internal redirection to ${lastPart.replace(/[-_]/g, " ")}`;
    }

    link.setAttribute("title", tooltipText);
  });
});