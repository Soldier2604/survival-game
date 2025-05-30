// Gegner, Angriff, Schaden
export function spawnEnemies(world) {
  world.enemies = [
    { type: "Wolf", x: 200, y: 200, hp: 20 },
    { type: "Bär", x: 800, y: 400, hp: 50 }
  ];
}

export function updateCombat(state) {
  const player = state.player;
  const enemies = state.world.enemies || [];

  enemies.forEach(enemy => {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 30) {
      player.health -= 0.2;
    }
  });
}
