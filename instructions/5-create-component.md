# Two Ways to Customize Your Portfolio

[Back to Overview](../README.md) | [Next: Licensing](./6-licensing.md)

In this tutorial, you'll learn two ways to make your portfolio more personal and useful: by creating a new project page and by improving a utility function.

---

## 1. Create a Portfolio Project Page

You can add a page to your portfolio that describes your portfolio itself as a project. This is a great way to show off your work and explain what you've built.

You could start by _copying_ the `binarySearch.js` file in `src/scripts/pages/` and renaming it to `portfolio.js`. Next up, you can _edit_ the page to describe **this project** itself. When you're done, it might look like this:

**src/scripts/pages/portfolio.js**

```js
// src/scripts/pages/portfolio.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderPortfolio() {
  return `
    <h1>Portfolio Project</h1>
    ${renderMenu()}
    <article>
      <p>Assignment: Create a portfolio to contain all your projects</p>      
      <p>This project is actually <i>this page itself!</i></p>
      <p>I had to learn a lot of new skills to build this portfolio, including...</p>
      <ul>
        <li>Using template strings in JavaScript</li>
        <li>Understanding HTML</li>
        <li>Using functions in JavaScript to render HTML</li>
        <li>Installing and researching custom libraries.</li>
      </ul>
    </article>
  `;
}
```

Now that we've written a function for the project, we'll have to make sure it is _run_ each time the user visits the correct page. We can take two more steps to do that:

1. Import the new function into `router.js` and add a new if statement to call it whenever the user visits the page `#/portfolio/`.

**Add to the top of the file**

```js
import renderPortfolio from "./pages/portfolio.js";
```

**Add into the route function a new else-if case**

```js
else if (path === "/portfolio/") {
  return renderPortfolio();
}
```

And finally...

**Add a link to the new page into our menu function**

**utils/renderMenu.js**

```js
<li>
  <a href="#/portfolio">Binary Search Project</a>
</li>
```

---

## 2. Improve the Menu Utility Function

Your project uses a menu function everywhere to show navigation links. Let's make it smarter by letting it highlight the current page.

Suppose your menu function is in `src/scripts/utils/renderMenu.js` and looks like this:

```js
export function renderMenu() {
  return `
    <nav>
      <a href="/">Home</a>
      <a href="/binary-search/">Binary Search</a>
      <a href="/portfolio/">Portfolio</a>
    </nav>
  `;
}
```

Let's update it to take a `currentPage` argument and highlight the active page:

```js
export function renderMenu(currentPage) {
  function link(url, text) {
    if (url === currentPage) {
      return `<a href="${url}" class="active">${text}</a>`;
    } else {
      return `<a href="${url}">${text}</a>`;
    }
  }
  return `
    <nav>
      ${link("/", "Home")}
      ${link("/projects/binary-search/", "Binary Search")}
      ${link("/projects/portfolio/", "Portfolio")}
    </nav>
  `;
}
```

Now, when you call `renderMenu("/projects/portfolio/")`, the Portfolio link will look different (using the `active` class). You can style `.active` in your CSS to make it stand out.

---

These two examples show how you can add new features and improve existing code in your portfolio. Try making your own pages and customizing your utilities!
