// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const country = localStorage.getItem("country");
const select = document.querySelector("select");

function handleSelect() {
  const selectedOption = select.value;
  localStorage.setItem("country", selectedOption);
}

function init() {
  if (country) {
    const option = document.querySelector(`option[value=${country}]`);
    option.selected = true;
  }

  select.addEventListener("change", handleSelect);
}

init();
