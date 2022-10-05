import Snake from './snake.js';

export const highScore = window.localStorage.getItem("highScore") || 0;
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");
export const highScoreElement = document.querySelector(".high-score");
export const scoreElement = document.querySelector(".score");

const app = document.getElementById("app");
highScoreElement.textContent = highScore;
scoreElement.textContent = 0;
canvas.classList.add("canvas");
canvas.width = 800;
canvas.height = 800;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
app.append(canvas);

const snake = new Snake();

const speeds = {
  slow: 10,
  normal: 7,
  fast: 5,
  insane: 2,
};

// GAME LOOP
let currentSpeed = speeds.normal;
let counter = 0;
let previousTimestamp = 0;

function gameLoop(timestamp) {
  counter++;
  const elapsed = timestamp - previousTimestamp;
  previousTimestamp = timestamp;
  if (counter % ~~(16 * currentSpeed / elapsed) === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.updateSnake();
    snake.drawFood();
    snake.drawSnake();
    snake.eat();
    snake.checkCollision();
    snake.direction = snake.bufferedInputs[0] || snake.direction;
    snake.bufferedInputs.shift();
  }
  requestAnimationFrame(gameLoop);
}

gameLoop();

// KEYBOARD EVENTS
document.addEventListener("keydown", (e) => {
  if (snake.bufferedInputs.length > 2) return;
  switch (e.key) {
    case "ArrowUp":
      if (snake.bufferedInputs.length !== 0) {
        if (snake.bufferedInputs[snake.bufferedInputs.length - 1] === "down" ||
          snake.bufferedInputs[snake.bufferedInputs.length - 1] === "up") {
          return;
        };
        snake.bufferedInputs.push("up");
      } else {
        if (snake.direction !== "down" && snake.direction !== "up") {
          snake.bufferedInputs.push("up");
        }
      }
      break;
    case "ArrowDown":
      if (snake.bufferedInputs.length !== 0) {
        if (snake.bufferedInputs[snake.bufferedInputs.length - 1] === "up" ||
          snake.bufferedInputs[snake.bufferedInputs.length - 1] === "down") {
          return;
        };
        snake.bufferedInputs.push("down");
      } else {
        if (snake.direction !== "up" && snake.direction !== "down") {
          snake.bufferedInputs.push("down");
        }
      }
      break;
    case "ArrowLeft":
      if (snake.bufferedInputs.length !== 0) {
        if (snake.bufferedInputs[snake.bufferedInputs.length - 1] === "right" ||
          snake.bufferedInputs[snake.bufferedInputs.length - 1] === "left") {
          return;
        };
        snake.bufferedInputs.push("left");
      } else {
        if (snake.direction !== "right" && snake.direction !== "left") {
          snake.bufferedInputs.push("left");
        }
      }
      break;
    case "ArrowRight":
      if (snake.bufferedInputs.length !== 0) {
        if (snake.bufferedInputs[snake.bufferedInputs.length - 1] === "left" ||
          snake.bufferedInputs[snake.bufferedInputs.length - 1] === "right") {
          return;
        };
        snake.bufferedInputs.push("right");
      } else {
        if (snake.direction !== "left" && snake.direction !== "right") {
          snake.bufferedInputs.push("right");
        }
      }
      break;
  }
});

// SPEED BUTTONS
const speedButtons = document.querySelectorAll("[data-speed]");
speedButtons.forEach((el) => {
  el.addEventListener("click", (e) => {
    currentSpeed = speeds[e.target.dataset.speed];
  });
});

// PWA
if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}
