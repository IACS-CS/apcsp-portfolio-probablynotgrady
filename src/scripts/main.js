import { TextInterface } from "text-interface";
import "../styles/styles.css";
import { startRouter } from "./router.js";
import "@picocss/pico/css/pico.min.css";

/* Start the router (this lets us show different pages -- see 
router.js) */
startRouter();

let ti = new TextInterface(document.querySelector("#terminal"));
let response = await ti.prompt("guest@Chase-DeLuca-Portfolio ~ %");
if (response === "ls") {
  ti.output("Documents  Downloads  Music  Pictures  Videos");
}
