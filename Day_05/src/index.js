import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime(now) {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const dDay = xmasDay - now;

  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hour = Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((dDay % (1000 * 60)) / 1000);

  return { day, hour, minute, second };
}

function utcToKst() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;

  return new Date(utc + NINE_HOURS_MILLISECONDS);
}

function formatDate(num) {
  return num < 9 ? "0" + num : num;
}

function syncElement() {
  const element = document.querySelector("h2");
  const now = utcToKst();
  const dDayObject = getTime(now);

  const showTime =
    `${formatDate(dDayObject.day)}d ` +
    `${formatDate(dDayObject.hour)}h ` +
    `${formatDate(dDayObject.minute)}m ` +
    `${formatDate(dDayObject.second)}s`;

  element.innerHTML = showTime;
}

function init() {
  const body = document.querySelector("body");
  body.innerHTML = "<h1>Time Until Christmas</h1>";
  body.innerHTML += "<h2></h2>";

  setInterval(syncElement, 1000);
}

init();
