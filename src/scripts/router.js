// src/scripts/router.js
import { renderWelcome } from "./pages/welcome.js";
import { renderBinarySearch } from "./pages/binarySearch.js";
import { renderPortfolio } from "./pages/portfolio.js"

/* route takes a path and chooses which page to render.
It is called each time the user clicks on a navigation link */
export function route(path) {
  if (path === "" || path === "/") {
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
    if (path === "/binary-search") {
      return renderBinarySearch();
    } else if (path === "/portfolio-project") {
      return renderPortfolio();
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
