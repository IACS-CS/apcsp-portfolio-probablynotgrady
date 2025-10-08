// src/scripts/utils/renderIframe.js
export function renderIframe(url, title = "Project", height = 400) {
  /* html */
  return `
      <!-- code generated in renderIframe.js -->
    <iframe 
      src="${url}"
      title="${title}"
      width="100%"
      height="${height}px"
      allowfullscreen
    ></iframe>
    <a href="${url}" target="_blank" rel="noopener" role="button" button class="outline">Open ${title} in new tab</a>
    <!-- end code generated in renderIframe.js -->
  `;
}
