/* eslint-disable class-methods-use-this */
class ProductDropdown {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-product-more")) {
      const wraps = document.querySelectorAll(".type--open");
      console.log(wraps);
      wraps.forEach(function (wrap) {
        const btn = wrap.querySelector(".js-product-more");
        const inners = wrap.querySelectorAll(".js-type-dropdown");
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          btn.classList.toggle("hide");
          inners.forEach((j) => j.classList.toggle("dropdown-hidden"));
        });
      });
    }
  }
}

export default ProductDropdown;