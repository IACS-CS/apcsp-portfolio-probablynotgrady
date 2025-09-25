# Getting Started: File Structure and Running in Debug Mode

[Back to Overview](../README.md) | [Next: Your first change](./2-first-change.md)

## Project Structure Overview

First, a warning: this project has a _lot_ of folders! I haven't hidden any of the folders from you this time because as you troubleshoot the various phases of the project, you made need access to all the different configuration files that help your project run.

That said, you can _ignore_ most files and folders here: if a folder or file starts with a `.`, that's a sign it's what's called a "configuration file" and probably can be ignored for now.

Here’s a breakdown of the files you need:

### `src/` Folder

- **Purpose**: Contains all your source code—the heart of your project.

### `src/scripts/` Folder

Contains all the JavaScript files that make your website work.

#### `src/scripts/main.js`

The entry point for your application. This file initializes the app and sets up routing. This file will have to **import** any other files that you create (such as new pages or utilities that you add to your website).

#### `src/scripts/pages/` Folder

This is where you can add new code that is customized for different pages of your portfolio. To start, there is a `welcome.js` file that contains the code for the home page of your portfolio and a `binarySearch.js` file the contains a template for putting your first project in your portfolio. You can add more files here for additional pages.

### `src/scripts/utils/` Folder

- **Purpose**: Contains utility functions that can be used across different pages.
- **Details**: This is where you can add helper functions that are not specific to a single page but are used by multiple pages.
  - Example: The `renderMenu.js` file contains a function to render the navigation menu on each page. You could add more utility functions here as needed.

### src/styles/ Folder

This contains CSS which powers your project. You could add more CSS files here if you end up wanting to customize the _appearance_ of your portfolio, though you can also use libraries for that (more on that later).

## Getting Started

1. **Install dependencies**:
   _You can probably skip this step: Codespaces usually does it for you. But if you are running this on your own computer, you will need to run this command once to install the necessary packages._

```bash
npm install
```

2. **Start the dev server**:

```bash
  npm run dev
```

Or you can use the `play/debug` button in Codespaces.

3. **Open your browser** to [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

4. **Edit pages and utilities** in the `src/scripts/` folder. The site will reload automatically.

## Next Steps

1. [First Change](2-first-change.md): Make your first edit.
2. [Using Libraries](3-library-instructions.md): Learn how to add JavaScript libraries.
3. [Create a Component](5-create-component.md): Build your own reusable code.
4. [Deploy](7-urls-and-publishing.md): Publish your site online.

---
