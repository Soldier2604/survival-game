// Spielersteuerung und -zustände
export function initPlayer() {
  return {
    x: 100,
    y: 100,
    hunger: 100,
    thirst: 100,
    energy: 100,
    health: 100,
    warmth: 0,
    inventory: [],
    equipped: {
      weapon: null,
      clothes: null
    }
  };
}

export function updatePlayer(player, input, world) {
  // Bewegung mit Energieverbrauch
  const speed = 2;
  let dx = 0, dy = 0;

  if (input.left) dx -= speed;
  if (input.right) dx += speed;
  if (input.up) dy -= speed;
  if (input.down) dy += speed;

  if (dx !== 0 || dy !== 0) {
    player.x += dx;
    player.y += dy;
    player.energy -= 0.05;
    player.hunger -= 0.01;
    player.thirst -= 0.01;
  }

  // Wetter- & Kleidungseffekt hier ergänzen
}
