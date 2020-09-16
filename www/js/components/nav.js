/*
 * Nav functions
 */

const nav = {
  init: () => {
    const headerNav = document.querySelector(".header-nav");

    headerNav.addEventListener("click", this.headerNav);
  },

  headerNav: (event) => {
    event.preventDefault();
    // handle header nav here -> back / quit etc
  },
};

export default nav;
