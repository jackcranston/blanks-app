/*
 * Menu component
 */
import state from "../state";
import form from "./form";

const menu = {
  // initialise menu
  init: (ui, categories, stories, wordtypes) => {
    ui.update(this.menuElement(categories, stories));

    const menuButtons = document.querySelectorAll(".menu__link");

    menuButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        menu.menuItemClicked(event, stories, wordtypes);
      });
    });

    state.menuPosition = 1;
  },

  // wrapper for menu
  menuElement: (categories, stories) => {
    return `<ul class="menu__list">
              ${this.mainMenuElement(categories, stories)}
            </ul>`;
  },

  // top menu items
  mainMenuElement: (categories, stories) => {
    return `<li class="menu__item">
              <button class="menu__link" data-type="main" data-id=1>Play</button>
              <ul class="menu__list hidden">${this.categoryElements(
                categories,
                stories
              )}</ul>
            </li>`;
  },

  // middle / category menu items
  categoryElements: (categories, stories) => {
    return categories
      .map((category) => {
        return `<li class="menu__item">
                <button class="menu__link" data-type="category" data-id=${
                  category.id
                }>
                ${category.title}
                </button>
                <ul class="menu__list hidden">${this.storyElements(
                  stories,
                  category
                )}</ul>
              </li>`;
      })
      .join("");
  },

  // bottom / story menu items
  storyElements: (stories, category) => {
    return stories
      .map((story) =>
        story.category === category.id
          ? `<li class="menu__item">
                <button class="menu__link" data-type="story" data-id=${story.id}>${story.title}</button>
             </li>`
          : ""
      )
      .join("");
  },

  // fired when user clicks a menu item
  menuItemClicked: (event, stories, wordtypes) => {
    event.preventDefault();

    const { type } = event.target.dataset;
    const id = Number(event.target.dataset.id);

    if (type === "main") {
      // main menu click
      const innerList = event.target.nextElementSibling;

      innerList.classList.remove("hidden");
      state.menuPosition = 2;
    } else if (type === "category") {
      // category menu click
      const innerList = event.target.nextElementSibling;

      innerList.classList.remove("hidden");
      state.menuPosition = 3;
    } else if (type === "story") {
      // story menu click
      form.init(id, stories, wordtypes);
      state.menuPosition = 0;
    }
  },
};

export default menu;
