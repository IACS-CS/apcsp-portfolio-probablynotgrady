import { applyTheme, TextInterface, themes } from "text-interface";
import "../styles/styles.css";
import { startRouter } from "./router.js";
import "@picocss/pico/css/pico.min.css";

/* Start the router (this lets us show different pages -- see 
router.js) */
startRouter();

window.location.href = "./#/";
let terminal = new TextInterface(document.querySelector("#terminal"));
applyTheme(themes.greenTerminal);
terminal.setPrompt("guest@Chase-DeLuca-Portfolio:~$");
terminal.hideTitle();
terminal.outputAnimationLength = 0;
terminal.shouldStealFocus = true;
terminal.setPlaceholder("");
terminal.output("type 'help' for a list of commands");
terminal.output("type 'load /?' or 'load help' for help loading pages");
while (true) {
  const prompt = await terminal.readText();
  const [cmd, ...args] = prompt.split(" ");
  if (cmd === "clear") {
    terminal.clear();
  } else if (cmd === "help") {
    terminal.output("Available commands: help, clear, load, ls, dir, cd");
// loading command, navigates to different pages
  } else if (cmd === "load") {
    if (args.length === 0) {
      terminal.output("You need to specify what to load");
    } else if (args[0] === "binary-search" || args[0] === "binary") {
      terminal.output("Loading Binary Search Project, Please Wait...");
      setTimeout(function() {
      window.location.href = "./#/binary-search";
      }, 1800);
    } else if (args[0] === "portfolio" || args[0] === "portfolio-project") {
      terminal.output("Loading Portfolio Project, Please Wait...");
      setTimeout(function() {
      window.location.href =
        "./#/portfolio-project";
      }, 1800);
    } else if (args[0] === "citations" || args[0] === "cite") {
      terminal.output("Loading Citations Page, Please Wait...");
      setTimeout(function() {
      window.location.href = "./#/citations";
      }, 1800);
    } else if (args[0] === "help" || args[0] === "/?" || args[0] === "?") {
      terminal.output("Syntax: load [page]");
      terminal.output("Available pages: binary-search, portfolio, citations");
      terminal.output("Example: load binary-search");
    } else {
      terminal.output("Page " + args[0] + " does not exist.");
    }
  } else if (cmd === "dir") {
    terminal.output("Guests are not allowed to view directory contents.");
  } else if (cmd === "ls") {
    terminal.output("Use 'dir' like a real computer user, none of this Linux nonsense here.");
  } else if (cmd === "cd") {
    terminal.output("Guests are not allowed to change directories.");
  } else if (cmd === "reload") {
    terminal.output("Reloading, Please Wait...")
    window.location.reload();
  } else if (cmd === "aboutme") {
    terminal.output("Hello, I am Chase DeLuca, a high schoool junior and a computing hobbyist. I have always been fascinated by technology, whether it be modern or vintage. As an example of this, my current daily use OS is Windows 8.1, which released not that long ago in 2013.");
    terminal.output("This portfolio website represents my abilites so far in coding, and is also a way to access my other projects for AP Computer Science.");
    terminal.output("Thank you for visiting!");
  } else if (cmd == "license") {
    terminal.output("CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike 4.0 International). You are free to see this website's source code, use it for both personal and commercial use, and redistribue it. You are rquired to give credit to me, and any derivave works must be licensed under the same terms.");
  } else {
    terminal.output("Command not found: " + cmd);
  }
}
