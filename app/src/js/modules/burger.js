/* eslint-disable class-methods-use-this */
class Burger {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-popup-burger")) {
      const btns = document.querySelectorAll(".js-burger-open");
      const popup = document.querySelector(".js-popup-burger");
      const btnClose = popup.querySelector(".js-popup-close");
      btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          const popups = document.querySelectorAll(".popup-open");
          popups.forEach((i) => i.classList.remove("popup-open"));
          popup.classList.add("popup-open");
          document.body.classList.add("no-overflow");
        });
      });
      btnClose.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.remove("popup-open");
        document.body.classList.remove("no-overflow");
      });
    }
  }
}

export default Burger;