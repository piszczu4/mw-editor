import { StacksEditor } from "./src/stacks-editor/editor.ts";
// don't forget to include the styles as well
import "@stackoverflow/stacks-editor/dist/styles.css";
// include the Stacks js and css as they're not included in the bundle
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";

new StacksEditor(
    document.querySelector("#editor-container"),
    "tekst $siema$ co tam?"
);
