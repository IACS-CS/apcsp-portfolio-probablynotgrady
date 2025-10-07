import {applyTheme, TextInterface, themes} from "text-interface";
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
while (true) {
  const prompt = await terminal.readText();
  const [cmd, ...args] = prompt.split(" ");
  if (cmd === "clear") {
    terminal.clear();
 } else if (cmd === "help"){
  terminal.output("Available commands: help, clear.");
 } else if (cmd === "binary-search") {
  terminal.output("Loading Binary Search project page...");
  terminal.output("Loading failed!");
 } else {
  terminal.output("command nout found: " + cmd);
 }
}
