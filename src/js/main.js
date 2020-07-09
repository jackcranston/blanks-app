/*
 * Global config
 */

const state = {
  deviceLoaded: false,
  menuPosition: 0,
};

const modules = [
  "text!data/categories.json",
  "text!data/stories.json",
  "text!data/words.json",
  "js/components/ui",
  "js/components/menu",
];

define(modules, function (categoriesData, storiesDate, wordsData) {
  const categories = JSON.parse(categoriesData);
  const stories = JSON.parse(storiesDate);
  const words = JSON.parse(wordsData);

  const deviceLoaded = () => {
    if (state.deviceLoaded === false) {
      state.deviceLoaded = true;

      menu.init(ui, categories, stories);
    }
  };

  window.addEventListener("DOMContentLoaded", deviceLoaded());
  document.addEventListener("deviceready", deviceLoaded());
});
