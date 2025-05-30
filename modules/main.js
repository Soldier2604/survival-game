
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 100, y: 100, size: 20, color: "red" };
let keys = {};

const background = new Image();
background.src = "../assets/background.png";

background.onload = () => {
  requestAnimationFrame(gameLoop);
};

document.addEventListener("keydown", (e) => { keys[e.key] = true; });
document.addEventListener("keyup", (e) => { keys[e.key] = false; });

function update() {
  if (keys["ArrowUp"]) player.y -= 2;
  if (keys["ArrowDown"]) player.y += 2;
  if (keys["ArrowLeft"]) player.x -= 2;
  if (keys["ArrowRight"]) player.x += 2;
}

function draw() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}
