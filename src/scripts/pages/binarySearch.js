// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderBinarySearch() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1>Binary Search Project</h1>    
    ${renderMenu()}
    <article>
      <p>Assignment: Create a program built on the concept of binary search</p>
      <hr>
      <p>This project was very fun to work on, and it gave me great practice on branching if statements.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-chase-and-ava/",
        "Chase + Ava's Binary Search Project"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
