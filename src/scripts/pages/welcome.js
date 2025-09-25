// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Student Portfolio</h1>
    ${renderMenu()}
    <h2>About Me</h2>
    <p>All About me...</p>
    <!-- an example image: Notice that images live in public/ -->
    <img src="./example-circle.svg" alt="A blue circle" >

    <!-- end code generated in welcome.js -->
  `;
}
