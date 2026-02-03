/**
 * Sort
 */
class SortContainer extends HTMLElement {
  static attrs = {};

  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "sort-container", SortContainer);
    }
  }

  connectedCallback() {
    this.buttons = document.querySelectorAll("button[data-sort-key]");
    this.items = document.querySelector("[data-sort-items] > *");

    this.buttons.forEach((button) => {
      button.setAttribute(
        "aria-sort",
        button.getAttribute("aria-sort") || "none",
      );
      button.addEventListener("click", () => this.handleButtonClick(button));
    });
  }

  /**
   * Methods of sorting.
   * @type {object}
   */
  sortingMethods = {
    title: (a, b) => this.compareBy(b, a, "data-name"),
    author: (a, b) => this.compareBy(b, a, "data-author"),
    date: (a, b) => this.compareBy(a, b, "data-date"),
  };
}
SortContainer.register();
