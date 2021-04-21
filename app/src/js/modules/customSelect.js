/* eslint-disable class-methods-use-this */
class CustomSelect {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-custom-select")) {
      const wraps = document.querySelectorAll(".js-custom-select");
      wraps.forEach(function (wrap) {
        const input = wrap.querySelector(".js-custom-select-input");
        const active = wrap.querySelector(".custom-select__active");
        const items = wrap.querySelectorAll(".custom-select__item");
        active.addEventListener("click", function () {
          wrap.classList.toggle("dropdown-open");
        });
        items.forEach((j) => j.addEventListener("click", function () {
          input.value = j.dataset.value;
          active.innerHTML = j.innerHTML;
          wrap.classList.remove("dropdown-open");
        }));
      });
    }
  }
}

export default CustomSelect;