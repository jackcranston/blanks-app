/*
 * Nav functions
 */

const nav = {
  init: function () {
    const headerNav = document.querySelector(".header-nav");

    headerNav.addEventListener("click", this.headerNav);
  },

  headerNav: function (event) {
    event.preventDefault();
    // handle header nav here -> back / quit etc
  },
};
