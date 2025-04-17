import { addItem } from './shoplist.js';
import { renderList } from './render.js';

const formElement = document.querySelector('.newitem-form');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.querySelector('#input-name');
  const amountInput = document.querySelector('#input-amount');
  addItem(nameInput.value, amountInput.value);
  renderList();

  nameInput.value = '';
  amountInput.value = '';
});

renderList();