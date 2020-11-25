// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function handleMouseEnter() {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[superEventHandler.randInt(0, colors.length)];
  },
  mouseLeave: function handleMouseLeave() {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[superEventHandler.randInt(0, colors.length)];
  },
  resize: function handleResized() {
    title.innerHTML = "You just resized!";
    title.style.color = colors[superEventHandler.randInt(0, colors.length)];
  },
  contextMenu: function handleContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = colors[superEventHandler.randInt(0, colors.length)];
  },
  randInt: function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);