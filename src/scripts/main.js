import { applyTheme, TextInterface, themes } from "text-interface";
import "../styles/styles.css";
import { startRouter } from "./router.js";
import "@picocss/pico/css/pico.min.css";

/* Start the router (this lets us show different pages -- see 
router.js) */
startRouter();

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
    terminal.output("Available commands: help, clear, load");
// loading command, navigates to different pages
  } else if (cmd === "load") {
    if (args.length === 0) {
      terminal.output("You need to specify what to load");
    } else if (args[0] === "binary-search" || args[0] === "binary") {
      window.location.href = "/#/binary-search";
    } else if (args[0] === "portfolio" || args[0] === "portfolio-project") {
      window.location.href = "/#/portfolio-project";
    } else if (args[0] === "help" || args[0] === "/?" || args[0] === "?") {
      terminal.output("Syntax: load [page]");
      terminal.output("Available pages: binary-search, portfolio");
      terminal.output("Example: load binary-search");
    } else {
      terminal.output("Page " + args[0] + " does not exist.");
    }
  } else if (cmd === "ls" || cmd === "dir") {
    terminal.output("Guests are not allowed to view directory contents.")
  } else if (cmd === "cd") {
    terminal.output("Guests are not allowed to change directories.")
  } else {
    terminal.output("Command not found: " + cmd);
  }
}
