export function updateCrafting(state) {
  const inventory = state.inventory;
  const hasWood = inventory.find(item => item.name === 'Holz' && item.quantity >= 2);
  const hasBerries = inventory.find(item => item.name === 'Beere' && item.quantity >= 2);
  const hasStone = inventory.find(item => item.name === 'Stein' && item.quantity >= 3);
  const hasMeat = inventory.find(item => item.name === 'Rohes Fleisch' && item.quantity >= 1);
  const hasFireplace = inventory.find(item => item.name === 'Feuerstelle');
  const hasFur = inventory.find(item => item.name === 'Fell' && item.quantity >= 3);
  const hasPelt = inventory.find(item => item.name === 'Fell' && item.quantity >= 5);

  if (hasWood && hasBerries) {
    hasWood.quantity -= 2;
    hasBerries.quantity -= 2;
    const existing = inventory.find(i => i.name === 'Snack-Pack');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Snack-Pack', quantity: 1, stackable: true, usable: true, effect: s => s.hunger += 25 });
  }

  if (hasWood && hasStone) {
    hasWood.quantity -= 2;
    hasStone.quantity -= 3;
    const existing = inventory.find(i => i.name === 'Feuerstelle');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Feuerstelle', quantity: 1, stackable: false, usable: false });
  }

  if (hasStone && hasWood) {
    hasStone.quantity -= 2;
    hasWood.quantity -= 1;
    const existing = inventory.find(i => i.name === 'Messer');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Messer', quantity: 1, stackable: false, usable: true, effect: s => { s.attackPower = (s.attackPower || 1) + 1; } });
  }

  if (hasMeat && hasFireplace) {
    hasMeat.quantity -= 1;
    const existing = inventory.find(i => i.name === 'Gebratenes Fleisch');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Gebratenes Fleisch', quantity: 1, stackable: true, usable: true, effect: s => s.hunger += 40 });
  }

  if (hasFur) {
    hasFur.quantity -= 3;
    const existing = inventory.find(i => i.name === 'Fellkleidung');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Fellkleidung', quantity: 1, stackable: false, usable: true, effect: s => { s.health += 10; s.warmth = (s.warmth || 0) + 1; } });
  }

  if (hasPelt) {
    hasPelt.quantity -= 5;
    const existing = inventory.find(i => i.name === 'Warme Kleidung');
    if (existing) existing.quantity++;
    else inventory.push({ name: 'Warme Kleidung', quantity: 1, stackable: false, usable: true, effect: s => { s.health += 20; s.warmth = (s.warmth || 0) + 3; } });
  }
}