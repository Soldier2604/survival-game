// Hauptlogik (modular)
import { initPlayer, updatePlayer } from './player.js';
import { generateWorld, updateWorld } from './world.js';
import { drawUI } from './ui.js';
import { spawnEnemies, updateCombat } from './combat.js';
import { updateWeather } from './weather.js';
import { tryCraftRecipe, recipes } from './crafting.js';

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const state = {
  player: initPlayer(),
  world: generateWorld(),
  input: {},
};

spawnEnemies(state.world);

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") state.input.left = true;
  if (e.key === "ArrowRight") state.input.right = true;
  if (e.key === "ArrowUp") state.input.up = true;
  if (e.key === "ArrowDown") state.input.down = true;
});
document.addEventListener("keyup", e => {
  if (e.key === "ArrowLeft") state.input.left = false;
  if (e.key === "ArrowRight") state.input.right = false;
  if (e.key === "ArrowUp") state.input.up = false;
  if (e.key === "ArrowDown") state.input.down = false;
});

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePlayer(state.player, state.input, state.world);
  updateWorld(state.world, state.player);
  updateCombat(state);
  updateWeather(state);
  drawUI(ctx, state);

  requestAnimationFrame(loop);
}
loop();
