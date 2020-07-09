/*
 * Load required modules
 */

requirejs.config({
  baseUrl: "src",
  paths: {
    text: "js/text",
  },
});

requirejs(["js/main"]);

/* OLD CODE BACKUP
    <script src="assets/data.js" type="text/javascript"></script>
    <script src="assets/scripts.js" type="text/javascript"></script>
    <script src="cordova.js" type="text/javascript"></script>
    <script src="js/admob.js" type="text/javascript"></script>

    */
