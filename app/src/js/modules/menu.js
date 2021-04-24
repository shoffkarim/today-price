/* eslint-disable class-methods-use-this */
class Menu {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-menu")) {
      const menu = document.querySelector(".js-menu");
      const btns = document.querySelectorAll(".js-btn-menu");
      const btnClose = document.querySelector(".js-close-menu");
      btns.forEach((i) => i.addEventListener("click", function () {
        menu.classList.add("js-open-menu");
        document.body.classList.add("no-overflow");
      }));
      btnClose.addEventListener("click", function () {
        menu.classList.remove("js-open-menu");
        document.body.classList.remove("no-overflow");
      });
    }
  }
}

export default Menu;