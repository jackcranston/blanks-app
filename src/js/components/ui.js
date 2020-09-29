/*
 * Controls UI
 */

const ui = {
  app: document.getElementById("app"),

  update: (contents) => {
    this.app.innerHTML = contents;
  },

  clear: () => {
    this.app.innerHTML = "";
  },

  back: () => {
    // return user to previous view
  },

  quit: () => {
    // return user to main menu / quit app
  },
};

export default ui;
