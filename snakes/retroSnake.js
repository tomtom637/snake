export default function RetroSnake(ctx, canvas, body, scale) {
  ctx.fillStyle = "green";
  body.forEach((el) => {
    ctx.fillRect(el[0] * scale, el[1] * scale, scale, scale);
  });
  ctx.strokeStyle = "aquamarine";
  body.forEach((el) => {
    ctx.strokeRect(el[0] * scale, el[1] * scale, scale, scale);
  });
}