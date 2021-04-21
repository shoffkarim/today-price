/* eslint-disable class-methods-use-this */
class CustomFile {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-custom-file")) {
      const wraps = document.querySelectorAll(".js-custom-file");
      wraps.forEach(function (wrap) {
        const input = wrap.querySelector(".js-custom-file-input");
        console.log(input);
        input.addEventListener("change", function () {
          wrap.classList.add("loaded");
          const files = input.files;
          const length = input.files.length;
          let loadedWrap = wrap.querySelector(".custom-file__loaded");
          for (let i = 0; i < length; i++) {
            let name = files[i].name;
            let item = document.createElement("div");
            item.classList.add("custom-file__item");
            let templateItem = document.querySelector(".custom-file__item");
            item.innerHTML = templateItem.innerHTML;
            item.querySelector("span").innerHTML = name;
            loadedWrap.append(item);
          }
        });
      });
    }
  }
}

export default CustomFile;