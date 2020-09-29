/*
 * Global config TODO: NEED TO FETCH DATA TO BE USED
 */

import ui from "./components/ui";
import menu from "./components/menu";
import state from "./state";

const deviceLoaded = () => {
  if (state.deviceLoaded === false) {
    state.deviceLoaded = true;

    menu.init(ui, categories, stories, wordtypes);
  }
};

window.addEventListener("DOMContentLoaded", deviceLoaded);
document.addEventListener("deviceready", deviceLoaded);
