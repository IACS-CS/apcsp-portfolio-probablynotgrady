// src/scripts/router.js
import { renderWelcome } from "./pages/welcome.js";
import { renderBinarySearch } from "./pages/binarySearch.js";
import { renderPortfolio } from "./pages/portfolio.js"
import { renderCitations } from "./pages/citations.js";

/* route takes a path and chooses which page to render.
It is called each time the user clicks on a navigation link */
export function route(path) {
  if (path === "apcsp-portfolio-probablynotgrady/" || path === "/") {
    // show terminal on home page
    document.getElementById("terminal-container").classList.add("active");
    // hide "app"
    document.getElementById("app").classList.remove("active");
    return renderWelcome();
  } else {
    // hide terminal on other pages
    document.getElementById("terminal-container").classList.remove("active");
    // show "app"
    document.getElementById("app").classList.add("active");
    if (path === "/apcsp-portfolio-probablynotgrady/binary-search") {
      return renderBinarySearch();
    } else if (path === "/apcsp-portfolio-probablynotgrady/portfolio-project") {
      return renderPortfolio();
    } else if (path === "/apcsp-portfolio-probablynotgrady/citations") {
      return renderCitations();
    } else {
      return `<h1>404 Not Found</h1><a href="#/">Back Home</a>`;
    }
  }
}

export function startRouter() {
  function render() {
    const hash = window.location.hash.replace(/^#\/?/, "/");
    document.getElementById("app").innerHTML = route(hash);
  }
  window.addEventListener("hashchange", render);
  render();
}
