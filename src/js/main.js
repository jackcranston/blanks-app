/*
 * Global config
 */

const state = {
  deviceLoaded: false,
  menuPosition: 0,
  story: null,
};

const modules = [
  "text!data/categories.json",
  "text!data/stories.json",
  "text!data/wordtypes.json",
  "js/components/ui",
  "js/components/menu",
  "js/components/form",
];

define(modules, function (categoriesData, storiesDate, wordtypesData) {
  const categories = JSON.parse(categoriesData);
  const stories = JSON.parse(storiesDate);
  const wordtypes = JSON.parse(wordtypesData);

  const deviceLoaded = () => {
    if (state.deviceLoaded === false) {
      state.deviceLoaded = true;

      menu.init(ui, categories, stories, wordtypes);
    }
  };

  window.addEventListener("DOMContentLoaded", deviceLoaded);
  document.addEventListener("deviceready", deviceLoaded);
});
