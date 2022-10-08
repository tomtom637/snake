import { highScore, highScoreElement, scoreElement, canvas, ctx } from "./app.js";
import renderRetroSnake from "./snakes/retroSnake.js";
import renderThinSnake from "./snakes/thinSnake.js";

export default class Snake {
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
  }
  drawSnake() {
    switch (this.style) {
      case "retro":
        renderRetroSnake(ctx, canvas, this.body, this.scale);
        break;
      case "thin":
        renderThinSnake(ctx, canvas, this.body, this.scale);
        break;
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
        ctx.fillStyle = "#f00";
        ctx.fillRect(this.foodPosition[0] + this.scale / 4, this.foodPosition[1] + this.scale / 4, this.scale - (this.scale / 2), this.scale - (this.scale / 2));
        break;
      case "thin":
        ctx.fillStyle = "#b00";
        ctx.fillRect(this.foodPosition[0] + this.scale / 3, this.foodPosition[1] + this.scale / 3, this.scale - (this.scale / 1.5), this.scale - (this.scale / 1.5));
        break;
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