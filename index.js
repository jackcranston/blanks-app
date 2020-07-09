/*
 * Load required modules
 */

//import * as stories from "./src/data/stories.json";
//import * as categories from "./src/data/categories.json";
//import * as words from "./src/data/words.json";

requirejs.config({
  baseUrl: "src",
  paths: {
    text: "js/text",
  },
});

requirejs(["js/main"]);

/*
console.log(words);
require("js/global");
*/
/* OLD CODE BACKUP
    <script src="assets/data.js" type="text/javascript"></script>
    <script src="assets/scripts.js" type="text/javascript"></script>
    <script src="cordova.js" type="text/javascript"></script>
    <script src="js/admob.js" type="text/javascript"></script>

    */
