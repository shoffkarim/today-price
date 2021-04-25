/* eslint-disable class-methods-use-this */
class PopupCallback {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-popup-callback")) {
      const btns = document.querySelectorAll(".js-popup-callback");
      const popup = document.querySelector(".js-popup");
      const btnClose = popup.querySelector(".js-popup-close");
      btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
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

export default PopupCallback;