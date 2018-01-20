'use strict';
class QuantityUpdate {
  constructor(selector) {
    this.plus  = document.querySelector(`${selector} .quantity-update__button--plus`);
    this.minus = document.querySelector(`${selector} .quantity-update__button--minus`);
    this.input = document.querySelector(`${selector} .quantity-update__input`);
    this.events();
  }
  events() {
    this.plus.addEventListener('click', () => {
      this.increment();
    });
    this.minus.addEventListener('click', () => {
      this.decrement();
    });
  }
  increment() {
    this.input.value = Number(this.input.value) + 1;
  }
  decrement() {
    if (this.input.value >= 1) {
      this.input.value = Number(this.input.value) - 1;
    }
  }
}
new QuantityUpdate('.quantity-update');
