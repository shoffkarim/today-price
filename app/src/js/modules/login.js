/* eslint-disable class-methods-use-this */
class Login {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-popup-login")) {
      const btns = document.querySelectorAll(".js-login-open");
      const popup = document.querySelector(".js-popup-login");

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
    if (document.querySelector(".js-popup-reg")) {
      const btns = document.querySelectorAll(".js-reg-open");

      const popup = document.querySelector(".js-popup-reg");
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

export default Login;