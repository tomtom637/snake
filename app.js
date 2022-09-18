const app = document.getElementById("app");
const highScore = window.localStorage.getItem("highScore") || 0;
const highScoreElement = document.querySelector(".high-score");
highScoreElement.textContent = highScore;
const scoreElement = document.querySelector(".score");
scoreElement.textContent = 0;
const canvas = document.createElement("canvas");
canvas.classList.add("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
app.append(canvas);

// GAME LOGIC
class Snake {
  constructor () {
    this.bufferedInputs = [];
    this.direction = "right";
    this.scale = 10;
    this.body = [[25, 25], [24, 25], [23, 25]];
    this.foodPosition = [~~(Math.random() * 50) * this.scale, ~~(Math.random() * 50) * this.scale];
    this.foodIsEaten = false;
    this.score = 0;
    this.init();
  }
  init() {
    this.drawSnake();
  }
  drawSnake() {
    if (this.foodIsEaten) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    this.body.forEach((el) => {
      ctx.fillRect(el[0] * this.scale, el[1] * this.scale, this.scale, this.scale);
    });
  }
  updateSnake() {
    const head = this.body[0];
    switch (this.direction) {
      case "right":
        this.body.unshift([head[0] + 1, head[1]]);
        if (this.body[0][0] === 50) {
          this.body[0][0] = 0;
        }
        break;
      case "left":
        this.body.unshift([head[0] - 1, head[1]]);
        if (this.body[0][0] === -1) {
          this.body[0][0] = 49;
        }
        break;
      case "up":
        this.body.unshift([head[0], head[1] - 1]);
        if (this.body[0][1] === -1) {
          this.body[0][1] = 49;
        }
        break;
      case "down":
        this.body.unshift([head[0], head[1] + 1]);
        if (this.body[0][1] === 50) {
          this.body[0][1] = 0;
        }
        break;
    }
    this.body.pop();
  }
  drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.foodPosition[0], this.foodPosition[1], this.scale, this.scale);
  }
  updateFoodPosition() {
    this.foodPosition = [~~(Math.random() * 50) * this.scale, ~~(Math.random() * 50) * this.scale];
  }
  eat() {
    if (this.body[0][0] === this.foodPosition[0] / this.scale && this.body[0][1] === this.foodPosition[1] / this.scale) {
      this.body.push(this.body[this.body.length - 1]);
      this.updateFoodPosition();
      this.drawFood();
      this.score += 5;
      scoreElement.textContent = this.score;
    }
  }
  checkCollision() {
    const head = this.body[0];
    const tail = this.body.slice(1);
    tail.forEach((el) => {
      if (el[0] === head[0] && el[1] === head[1]) {
        if (this.score > highScore) {
          window.localStorage.setItem("highScore", this.score);
          highScoreElement.textContent = this.score;
          alert(`Game over!\n\nYou've just set a new high score of ${this.score}, Congratulations!`);
        } else {
          alert(`Game over!\nYour score: ${this.score}\nHigh score: ${highScore}`);
        }
        location.reload();
      }
    });
  }
}

const snake = new Snake();

const speeds = {
  slow: 7,
  medium: 5,
  fast: 2,
  madness: 1,
};

let currentSpeed = speeds.medium;

let counter = 0;

// GAME LOOP
function gameLoop() {
  counter++;
  if (counter % currentSpeed === 0) {
    snake.updateSnake();
    snake.drawSnake();
    snake.drawFood();
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
