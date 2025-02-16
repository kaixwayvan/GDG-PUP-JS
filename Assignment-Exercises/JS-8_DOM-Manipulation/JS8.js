// your code starts here
const subtractButton = document.querySelector("#button-subtract");
const addButton = document.querySelector("#button-add");
const counterText = document.querySelector("#counter-text");

subtractButton.addEventListener("click", whenSubtract);
addButton.addEventListener("click", whenAdd);

let counterVal = 0;

function whenSubtract() {
  if (counterVal > 0) {
    counterVal--;
    counterText.textContent = counterVal;
  }
}

function whenAdd() {
  counterVal++;
  counterText.textContent = counterVal;
}
