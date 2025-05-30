// Crafting-System mit Rezepten
export const recipes = [
  {
    name: "Feuerstelle",
    ingredients: { "Holz": 2, "Stein": 3 },
    result: { name: "Feuerstelle", quantity: 1, stackable: false }
  },
  {
    name: "Snack-Pack",
    ingredients: { "Beere": 2, "Holz": 1 },
    result: {
      name: "Snack-Pack", quantity: 1, stackable: true, usable: true,
      effect: (state) => { state.player.hunger += 25; }
    }
  }
];

export function tryCraftRecipe(state, recipe) {
  const inv = state.player.inventory;
  const hasAll = Object.entries(recipe.ingredients).every(([name, qty]) => {
    const entry = inv.find(i => i.name === name);
    return entry && entry.quantity >= qty;
  });
  if (!hasAll) return false;

  // Abziehen
  Object.entries(recipe.ingredients).forEach(([name, qty]) => {
    const entry = inv.find(i => i.name === name);
    entry.quantity -= qty;
  });

  // Ergebnis hinzufügen
  const existing = inv.find(i => i.name === recipe.result.name);
  if (existing && recipe.result.stackable) {
    existing.quantity += recipe.result.quantity;
  } else {
    inv.push({ ...recipe.result });
  }

  return true;
}
