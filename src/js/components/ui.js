/*
 * Controls UI
 */

const ui = {
  app: document.getElementById("app"),

  update: function (contents) {
    this.app.innerHTML = contents;
  },

  clear: function () {
    this.app.innerHTML = "";
  },
};
