// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const WIDE_CLASS = "wide";
const NARROW_CLASS = "narrow";

function handleResize() {
  const currentWidth = window.innerWidth;

  if (currentWidth > 700) {
    body.classList.add(WIDE_CLASS);
  } else if (currentWidth < 500) {
    body.classList.add(NARROW_CLASS);
  } else {
    body.classList.remove(WIDE_CLASS);
    body.classList.remove(NARROW_CLASS);
  }
}

window.addEventListener("resize", handleResize);
