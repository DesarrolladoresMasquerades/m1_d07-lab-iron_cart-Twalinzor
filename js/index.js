// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotalPrice = product.querySelector('.subtotal span');
  subTotalPrice.textContent = price.textContent * quantity.value;
  return subTotalPrice.textContent;
}

function calculateAll() {
  // ITERATION 2
  const totalPrice = document.querySelectorAll('.product');
  let total = 0;
  totalPrice.forEach((element) => {
    total += parseInt(updateSubtotal(element));
  });
  // ITERATION 3
  document.querySelector('#total-value span').textContent = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const removeBtn = target.parentNode.parentNode;
  removeBtn.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const newProdName = document.querySelector(
    '.create-product input[type=text]'
  ).value;
  const newProdPrice = document.querySelector(
    '.create-product input[type=number]'
  ).value;
  const newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name span').innerText = newProdName;
  newProduct.querySelector('.price span').innerText = newProdPrice;
  console.log(newProduct);
  const tab = document.querySelector('table');
  tab.appendChild(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll('.btn-remove');
  btnRemove.forEach((cap) => cap.addEventListener('click', removeProduct));

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});
