/* eslint-disable class-methods-use-this */
class Anchor {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(`a[href^="#"]`)) {
      const anchorList = document.querySelectorAll(`a[href^="#"]`);
      anchorList.forEach((i) => i.addEventListener("click", function (e) {
        e.preventDefault();
        const id = i.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
      }));
    }
  }
}

export default Anchor;