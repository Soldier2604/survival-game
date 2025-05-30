// Benutzeroberfläche (Balken, Minimap)
export function drawUI(ctx, state) {
  drawBar(ctx, 20, 20, 'Hunger', state.player.hunger, 'green');
  drawBar(ctx, 20, 50, 'Durst', state.player.thirst, 'blue');
  drawBar(ctx, 20, 80, 'Energie', state.player.energy, 'yellow');
  drawMinimap(ctx, state);
}

function drawBar(ctx, x, y, label, value, color) {
  ctx.fillStyle = '#333';
  ctx.fillRect(x, y, 100, 12);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, Math.max(0, value), 12);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, 100, 12);
  ctx.fillStyle = 'white';
  ctx.fillText(label, x + 105, y + 10);
}

function drawMinimap(ctx, state) {
  const mapX = 700, mapY = 10, mapW = 180, mapH = 180;
  ctx.fillStyle = '#222';
  ctx.fillRect(mapX, mapY, mapW, mapH);
  const px = mapX + (state.player.x / state.world.width) * mapW;
  const py = mapY + (state.player.y / state.world.height) * mapH;
  ctx.fillStyle = 'white';
  ctx.fillRect(px - 2, py - 2, 4, 4);
}
