/*
 * Menu
 */

const menu = {
  init: function (ui, categories, stories) {
    ui.update(menu.build(categories, stories));

    const menuButtons = document.querySelectorAll(".menu__link");

    menuButtons.forEach((button) => {
      button.addEventListener("click", this.menuButtonClicked);
    });

    state.menuPosition = 1;
  },

  build: function (categories, stories) {
    return `<ul class="menu__list">
              ${this.loadMain(categories, stories)}
            </ul>`;
  },

  loadMain: function (categories, stories) {
    return `<li class="menu__item">
              <button class="menu__link" data-type="main" data-id="1">Play</button>
              <ul class="menu__list hidden">${this.loadCategories(
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
                <ul class="menu__list hidden">${this.loadItems(
                  stories,
                  category
                )}</ul>
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

  menuButtonClicked: function (event) {
    event.preventDefault();
    const { type, id } = event.target.dataset;

    if (type === "main") {
      const innerList = event.target.nextElementSibling;

      innerList.classList.remove("hidden");
      state.menuPosition = 2;
    } else if (type === "category") {
      const innerList = event.target.nextElementSibling;

      innerList.classList.remove("hidden");
      state.menuPosition = 3;
    } else {
      state.menuPosition = 0;
      // open story
    }
  },
};
