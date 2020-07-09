/*
 * Menu
 */

const menu = {
  init: function (categories, stories) {
    return `<ul class="menu__list">
              ${this.loadMain(categories, stories)}
            </ul>`;
  },

  loadMain: function (categories, stories) {
    return `<li class="menu__item">
              <button class="menu__link" data-type="main">Play</button>
              <ul class="menu__list">${this.loadCategories(
                categories,
                stories
              )}</ul>
            </li>`;
  },

  loadCategories: function (categories, stories) {
    return categories
      .map((category) => {
        return `<li class="menu__item">
                <button class="menu__link" data-type="category" data-id="${
                  category.id
                }">
                ${category.title}
                </button>
                <ul class="menu__list">${this.loadItems(stories, category)}</ul>
              </li>`;
      })
      .join("");
  },

  loadItems: function (stories, category) {
    return stories
      .map((story) => {
        if (story.category === category.id) {
          return `<li class="menu__item">
                  <button class="menu__link" data-type="story" data-id="${story.id}">${story.title}</button>
                </li>`;
        }
      })
      .join("");
  },
};
