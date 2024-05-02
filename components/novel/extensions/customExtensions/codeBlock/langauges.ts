import { common, createLowlight } from "lowlight";
const gdscript = require("@exercism/highlightjs-gdscript");

const lowlight = createLowlight(common);
lowlight.register({ gdscript });

const languages = lowlight.listLanguages();
export { lowlight, languages };
