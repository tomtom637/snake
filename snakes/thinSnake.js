export default function renderThinSnake(ctx, canvas, body, scale) {
  const unit = scale / 4;
  ctx.fillStyle = "green";
  ctx.strokeStyle = "aquamarine";
 body.forEach((el, i) => {
    if (i === 0) {
      ctx.fillRect(el[0] * scale + unit / 2, el[1] * scale + unit / 2, scale - unit, scale - unit);
      ctx.strokeRect(el[0] * scale + unit / 2, el[1] * scale + unit / 2, scale - unit, scale - unit);
    }
    if (i !== 0) {
      if (el[2] === "right" && body[i - 1][2] === "up") {
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "right" && body[i - 1][2] === "down") {
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "right" && body[i - 1][2] === "right") {
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "left" && body[i - 1][2] === "up") {
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "left" && body[i - 1][2] === "down") {
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "left" && body[i - 1][2] === "left") {
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "up" && body[i - 1][2] === "right") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "up" && body[i - 1][2] === "left") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "up" && body[i - 1][2] === "up") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "down" && body[i - 1][2] === "right") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit * 3, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "down" && body[i - 1][2] === "left") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale, el[1] * scale + unit, unit, unit * 2);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
      if (el[2] === "down" && body[i - 1][2] === "down") {
        ctx.fillRect(el[0] * scale + unit, el[1] * scale, unit * 2, unit);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
        ctx.fillRect(el[0] * scale + unit, el[1] * scale + unit * 3, unit * 2, unit);
        ctx.strokeRect(el[0] * scale + unit, el[1] * scale + unit, unit * 2, unit * 2);
      }
    }
  });
}