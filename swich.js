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

// вариант 2
let intervalId = null;

const swicher = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      const color = randomIntegerFromInterval(0, 5);
      body.style.background = colors[color];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    startBtn.disabled = false;
  },
};

startBtn.addEventListener("click", () => {
  swicher.start();
});
stopBtn.addEventListener("click", () => {
  swicher.stop();
});

// вариант 1й
// function swichStart() {
//   startBtn.setAttribute("disabled", true);
//   colorSwich = setInterval(() => {
//     const color = randomIntegerFromInterval(0, colors.length - 1);
//     body.style.background = colors[color];
//   }, 1000);
// }

// function swichStop() {
//   clearInterval(colorSwich);
// }
