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

  back: function () {
    // return user to previous view
  },

  quit: function () {
    // return user to main menu / quit app
  },
};
