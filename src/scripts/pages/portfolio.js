// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderPortfolio() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1>Portfolio Project</h1>    
    ${renderMenu()}
    <article>
      <p>Assignment: Create a program that functions as a portfolio, and include links to all of your APCSP projects.</p>
      <hr>
      <p>My project was super fun, I worked hard on it!</p>
      ${renderIframe(
        "https://iacs-cs.github.io/apcsp-portfolio-probablynotgrady/",
        "Linux Terminal Portfolio"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}