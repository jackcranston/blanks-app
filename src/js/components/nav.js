/*
 * Nav functions
 */

const nav = {
  init: function () {
    const headerNav = document.querySelector(".header-nav");

    headerNav.addEventListener("click", function (event) {
      this.headerNav(event);
    });
  },

  headerNav: function () {
    event.preventDefault();
    // handle header nav here -> back / quit etc
  },
};
