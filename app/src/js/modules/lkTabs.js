/* eslint-disable class-methods-use-this */
class LkTabs {
  constructor() {
    this.init();
  }

  init() {
    if (document.querySelector(".js-tab-wrap")) {
      const wraps = document.querySelectorAll(".js-tab-wrap");
      wraps.forEach(function (wrap) {
        const btns = wrap.querySelectorAll(".js-tab-btn");
        btns.forEach((i) => i.addEventListener("click", function () {
          btns.forEach((j) => j.classList.remove("active"));
          i.classList.add("active");
          const btnTabId = i.dataset.tab;
          const tabs = wrap.querySelectorAll(".js-tab");
          tabs.forEach(function (tab) {
            tab.classList.add("tab-hidden");
            const tabId = tab.dataset.tab;
            if (tabId === btnTabId) {
              tab.classList.remove("tab-hidden");
            }
          });
        }));
      });

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

export default LkTabs;