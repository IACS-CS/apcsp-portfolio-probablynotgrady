// src/scripts/router.js
import { renderWelcome } from "./pages/welcome.js";
import { renderBinarySearch } from "./pages/binarySearch.js";

/* route takes a path and chooses which page to render.
It is called each time the user clicks on a navigation link */
export function route(path) {
  if (path === "" || path === "/") {
    return renderWelcome();
  } else if (path === "/binary-search") {
    return renderBinarySearch();
  } else {
    return `<h1>404 Not Found</h1><a href="#/">Back Home</a>`;
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
