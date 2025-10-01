// src/scripts/utils/renderIframe.js
export function renderIframe(url, title = "Project", height = 400) {
  /* html */
  return `
      <!-- code generated in renderIframe.js -->
    <iframe 
      src="${url}"https://iacs-cs.github.io/binary-search-chase-and-ava/
      title="${title}"
      width="100%"
      height="${height}px"
      allowfullscreen
    ></iframe>
    <a href="${url}" target="_blank" rel="noopener">Open ${title} in new tab</a>
    <!-- end code generated in renderIframe.js -->
  `;
}
