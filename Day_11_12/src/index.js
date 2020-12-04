// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const calculator = document.querySelector(".calculator");
const result = document.querySelector(".result");
const clearBtn = document.querySelector("#clear");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const mulBtn = document.querySelector("#mul");
const divBtn = document.querySelector("#div");
const equBtn = document.querySelector("#equ");

let operator = null,
  befNum = null;

const operators = {
  add: function add(a, b) {
    return Number(a) + Number(b);
  },
  sub: function sub(a, b) {
    return Number(a) - Number(b);
  },
  mul: function mul(a, b) {
    return Number(a) * Number(b);
  },
  div: function div(a, b) {
    return Number(a) / Number(b);
  }
};

function handleNumBtnClick(e) {
  if (e.target.classList.value.includes("num-btn")) {
    let input = e.target.innerText;
    let temp = result.innerText;

    if (temp === "0") {
      temp = input;
    } else if (!befNum && operator) {
      befNum = temp;
      temp = input;
    } else {
      temp += input;
    }

    result.innerText = temp;
  }
}

function handleClearBtnClick() {
  result.innerText = "0";
}

function handleOperatorBtn(e) {
  let temp = result.innerText;

  if (operator) {
    result.innerText = operators[operator](befNum, temp);
    befNum = null;
  }

  operator = e.target.id;
}

function handleEquBtn() {
  const aftNum = result.innerText;

  result.innerText = operators[operator](befNum, aftNum);

  befNum = null;
  operator = null;
}

function init() {
  calculator.addEventListener("click", handleNumBtnClick);
  clearBtn.addEventListener("click", handleClearBtnClick);
  addBtn.addEventListener("click", handleOperatorBtn);
  subBtn.addEventListener("click", handleOperatorBtn);
  mulBtn.addEventListener("click", handleOperatorBtn);
  divBtn.addEventListener("click", handleOperatorBtn);
  equBtn.addEventListener("click", handleEquBtn);
}

init();
