import "./styles.css";
import Snake from "./snake";

const storedHighScore = window.localStorage.getItem("highScore");
export const highScore = storedHighScore ? parseInt(storedHighScore) : 0;
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");
export const highScoreElement = document.querySelector(".high-score");
export const scoreElement = document.querySelector(".score");

const app = document.getElementById("app");
if (highScoreElement) {
  highScoreElement.textContent = highScore.toString();
}
if (scoreElement) {
  scoreElement.textContent = "0";
}
canvas.classList.add("canvas");
canvas.width = 800;
canvas.height = 800;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";

if (app) {
  app.append(canvas);
}

const gameOverScreen = document.querySelector(".game-over");
const gameOverMessageElement = document.querySelector(".game-over__message");
const gameOverButtonElement = document.querySelector(".game-over__btn");

if (gameOverButtonElement) {
  gameOverButtonElement.addEventListener("click", playAgain);
}


function playAgain() {
  if (!gameOverScreen || !scoreElement) return;
  gameOverScreen.classList.add("hidden");
  scoreElement.textContent = "0";
  snake = new Snake();
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === "Enter") {
    document.removeEventListener("keydown", handleKeyDown);
    playAgain();
  }
}
let sentenceCounter = 0;
function handleGameOverAction() {
  if (!ctx || !gameOverMessageElement || !gameOverScreen) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  sentenceCounter++;
  if (sentenceCounter % 4 === 0) {
    Math.random() > 0.5
      ? gameOverMessageElement.textContent += "s"
      : gameOverMessageElement.textContent += "S";
    if (gameOverMessageElement.textContent) {
      gameOverMessageElement.textContent = gameOverMessageElement.textContent.slice(1);
    }
  }
  gameOverScreen.classList.remove("hidden");
  document.addEventListener("keydown", handleKeyDown);
}

let snake = new Snake();

const speeds: Record<string, number> = {
  slow: 12,
  normal: 7,
  fast: 5,
  insane: 2,
};

// GAME LOOP
let currentSpeed = speeds.normal;
let previousTimestamp = 0;
let elapsed = 0;

function gameLoop(timestamp: number) {
  if (!ctx) return;
  elapsed += timestamp - previousTimestamp;
  previousTimestamp = timestamp;
  if (snake.dead) {
    handleGameOverAction();
  } else if (elapsed >= currentSpeed * 16) {
    elapsed = 0;
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

requestAnimationFrame(gameLoop);

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
    if (
      e.target instanceof HTMLButtonElement
      && e.target.dataset.speed
    ) {
      currentSpeed = speeds[e.target.dataset.speed];
    }
  });
});

// MOBILE CONTROLS
canvas.addEventListener("touchstart", (e: TouchEvent) => {
  e.preventDefault();
  const canvasRect = canvas.getBoundingClientRect();
  const xRatio = (e.touches[0].clientX - canvasRect.left) / canvasRect.width;
  const yRatio = (e.touches[0].clientY - canvasRect.top) / canvasRect.height;
  if (snake.direction === "up" || snake.direction === "down") handleMovement(xRatio, "horizontal");
  if (snake.direction === "left" || snake.direction === "right") handleMovement(yRatio, "vertical");
});

function handleMovement(ratio: number, direction: "horizontal" | "vertical") {
  if (ratio < 0.5) {
    if (direction === "horizontal") {
      snake.bufferedInputs.push("left");
    } else {
      snake.bufferedInputs.push("up");
    }
  }
  if (ratio > 0.5) {
    if (direction === "horizontal") {
      snake.bufferedInputs.push("right");
    } else {
      snake.bufferedInputs.push("down");
    }
  }
}