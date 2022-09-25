const app = document.getElementById("app");
const highScore = window.localStorage.getItem("highScore") || 0;
const highScoreElement = document.querySelector(".high-score");
highScoreElement.textContent = highScore;
const scoreElement = document.querySelector(".score");
scoreElement.textContent = 0;
const canvas = document.createElement("canvas");
canvas.classList.add("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
canvas.style.width = canvas.width / 2 + "px";
canvas.style.height = canvas.height / 2 + "px";
app.append(canvas);

// GAME LOGIC
class Snake {
  constructor () {
    this.bufferedInputs = [];
    this.direction = "right";
    this.scale = 40;
    this.body = [
      [canvas.width / (2 * this.scale), canvas.width / (2 * this.scale), "right"],
      [canvas.width / (2 * this.scale) - this.scale, canvas.width / (2 * this.scale), "right"],
      [canvas.width / (2 * this.scale) - this.scale - this.scale, canvas.width / (2 * this.scale), "right"]
    ];
    this.score = 0;
    this.updateFoodPosition();
    this.style = "thin";
    this.init();
  }
  init() {
    this.drawSnake();
  }
  drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (this.style) {
      case "retro":
        ctx.fillStyle = "green";
        this.body.forEach((el) => {
          ctx.fillRect(el[0] * this.scale, el[1] * this.scale, this.scale, this.scale);
        });
        ctx.strokeStyle = "aquamarine";
        this.body.forEach((el) => {
          ctx.strokeRect(el[0] * this.scale, el[1] * this.scale, this.scale, this.scale);
        });
        break;
      case "thin":
        const unit = this.scale / 4;
        ctx.fillStyle = "green";
        this.body.forEach((el, i) => {
          if (el[2] === "right") {
            if (i === 0) {
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                this.scale,
                this.scale - (unit * 2)
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "up") {
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "down") {
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "right") {
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
          }
          if (el[2] === "left") {
            if (i === 0) {
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                this.scale,
                this.scale - (unit * 2)
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "up") {
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "down") {
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "left") {
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
          }
          if (el[2] === "up") {
            if (i === 0) {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                this.scale - (unit * 2),
                this.scale
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "right") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "left") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "up") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
            }
          }
          if (el[2] === "down") {
            if (i === 0) {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                this.scale - (unit * 2),
                this.scale
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "right") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit * 3,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "left") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale,
                el[1] * this.scale + unit,
                unit,
                unit * 2
              );
            }
            if (i !== 0 && this.body[i - 1][2] === "down") {
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale,
                unit * 2,
                unit
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit,
                unit * 2,
                unit * 2
              );
              ctx.fillRect(
                el[0] * this.scale + unit,
                el[1] * this.scale + unit * 3,
                unit * 2,
                unit
              );
            }
          }
        });
    }
  }
  updateSnake() {
    const head = this.body[0];
    switch (this.direction) {
      case "right":
        this.body.unshift([head[0] + 1, head[1], "right"]);
        if (this.body[0][0] === canvas.width / this.scale) {
          this.body[0][0] = 0;
        }
        break;
      case "left":
        this.body.unshift([head[0] - 1, head[1], "left"]);
        if (this.body[0][0] === -1) {
          this.body[0][0] = (canvas.width / this.scale) - 1;
        }
        break;
      case "up":
        this.body.unshift([head[0], head[1] - 1, "up"]);
        if (this.body[0][1] === -1) {
          this.body[0][1] = (canvas.height / this.scale) - 1;
        }
        break;
      case "down":
        this.body.unshift([head[0], head[1] + 1, "down"]);
        if (this.body[0][1] === canvas.height / this.scale) {
          this.body[0][1] = 0;
        }
        break;
    }
    this.body.pop();
  }
  drawFood() {
    switch (this.style) {
      case "retro":
        ctx.fillStyle = "red";
        ctx.fillRect(this.foodPosition[0] + this.scale / 4, this.foodPosition[1] + this.scale / 4, this.scale - (this.scale / 2), this.scale - (this.scale / 2));
        break;
      case "thin":
        ctx.fillStyle = "red";
        ctx.fillRect(this.foodPosition[0] + this.scale / 4, this.foodPosition[1] + this.scale / 4, this.scale - (this.scale / 2), this.scale - (this.scale / 2));
    }
  }
  updateFoodPosition() {
    this.foodPosition = [~~(Math.random() * canvas.width / this.scale) * this.scale, ~~(Math.random() * canvas.height / this.scale) * this.scale];
    if (this.body.some((el) => el[0] * this.scale === this.foodPosition[0] && el[1] * this.scale === this.foodPosition[1])) {
      this.updateFoodPosition();
    }
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
