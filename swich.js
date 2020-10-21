const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

startBtn.addEventListener("click", swichStart);
stopBtn.addEventListener("click", swichStop);

function swichStart() {
  startBtn.setAttribute("disabled", true);
  colorSwich = setInterval(() => {
    let color = randomIntegerFromInterval(0, colors.length - 1);
    body.style.background = colors[color];
    console.log("swich colors");
  }, 1000);
}

function swichStop() {
  clearInterval(colorSwich);
  console.log("stop swich colors");
}
