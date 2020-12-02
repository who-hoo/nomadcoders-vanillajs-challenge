// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numberRange = document.querySelector("#number-range"),
  rangeInput = document.querySelector("input[name=range-input]"),
  gameForm = document.querySelector("form[name=game-form"),
  numberResult = document.querySelector("#number-result"),
  gameResult = document.querySelector("#game-result");

const MIN = rangeInput.min;
let MAX = rangeInput.value;

function setRange(maxNumber) {
  numberRange.innerText = `Generate a number between 0 and ${MAX}`;
}

function handleChange() {
  MAX = rangeInput.value;
  setRange(MAX);
}

function setNumberResult(inputNumber, randomNumber) {
  numberResult.innerText = `You chose: ${inputNumber}, the machine chose: ${randomNumber}`;
}

function setGameResult(inputNumber, randomNumber) {
  if (inputNumber === randomNumber) {
    gameResult.innerHTML = `<strong>You won!</strong>`;
  } else {
    gameResult.innerHTML = `<strong>You lose!</strong>`;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const inputNumber = parseInt(gameForm["number-input"].value, 10);

  if (!inputNumber) {
    return alert("Guess the number !");
  }

  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  setNumberResult(inputNumber, randomNumber);
  setGameResult(inputNumber, randomNumber);
}

function init() {
  setRange();
  rangeInput.addEventListener("change", handleChange);
  gameForm.addEventListener("submit", handleSubmit);
}

init();
