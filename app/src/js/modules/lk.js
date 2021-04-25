/* eslint-disable class-methods-use-this */
class Lk {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-request")) {
      const wraps = document.querySelectorAll(".js-request");
      wraps.forEach(function (wrap) {
        const btn = wrap.querySelector(".js-request-button");
        const inner = wrap.querySelector(".js-request-inner");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          inner.classList.toggle("request-hidden");
        });
      });
    }
  }
}

export default Lk;