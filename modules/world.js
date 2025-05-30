// Weltobjekte, Ressourcen und Interaktionen
export function generateWorld() {
  return {
    width: 1000,
    height: 1000,
    objects: [
      { type: 'Baum', x: 300, y: 200 },
      { type: 'Beerenbusch', x: 500, y: 400 },
      { type: 'Fels', x: 700, y: 300 },
      { type: 'Wasserquelle', x: 600, y: 100 },
      { type: 'Tier', x: 400, y: 500 }
    ]
  };
}

export function updateWorld(world, player) {
  // Noch leer – Dynamik bei Bedarf
}
