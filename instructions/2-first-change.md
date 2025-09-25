# Making Your First Changes

[Back to Overview](../README.md) | [Next: Your first library](./3-library-instructions.md)

Let's assume you've already got the project running by following
the instructions in the [overview](./1-overview.md).

A good next step is making sure you know how to make an edit to the file and see it change.

## src/scripts/pages/welcome.js

Let's start with the first page of your website, which is in `src/pages/welcome.js`

That file currently has a single `function` which returns `HTML` which is the markup for your webpage. You can change where it says `<h1>Student Portfolio</h1>`
so that it welcomes people to your own portfolio (for example: `<h1>Maria's Portfolio</h1>`).

## index.html

`welcome.js` is the page that is loaded by `JavaScript` when the function in `main.js` first runs. HOWEVER, there is also a static page that you can find in `index.html` which is the page that loads before your first JavaScript runs. You'll notice that it also has an `<h1>` tag that you can change to say something like "Welcome to My Portfolio".

To learn more about HTML, read my [About Markup](./A-about-markup.md) intro.

### About Astro Component's

`<Page title="Ava's Portfolio">` was your first use of a _component_, which is a way web programmers
speak about creating re-usable pieces of code. We use the _syntax_ of HTML which uses _attributes_ and _values_
with the structure `title="Ava's Portfolio"` as a way to pass data into a reusable component.

If you open `src/components/Page.astro` you can look for where the `title` property (like a variable) is
defined and you can look for where `{title}` is used in the source code. The bracket syntax is Astro's
way of allowing you to insert a property into a template: this is a common pattern in templating languages
and it's a way of allowing markup language designers to handle code reuse elgantly.

## Making Your First _Component_ Change

Let's go ahead and open up `Page.astro` and try
making a change to our Page template.

At the bottom of the file, just above the `</body>`
close tag, we can add a new footer, like this:

```astro
<footer>
  Page by <b>My Name</b>,
  last updated October, 2024.
  All rights reserved.
</footer>
```

Now if you look at your sample site, you'll notice
the footer will show up on _every_ page that uses
your `Page.astro` component.

This is the power of components: it prevents you having
to repeat yourself! Any time you find yourself copy/pasting a lot of code from one page to another, you should
think about using a component instead.

Next up: [Adding your first library](./3-library-instructions.md)

Ready for more on components right away?
Jump to: [Creating your own component](./5-create-component.md)
