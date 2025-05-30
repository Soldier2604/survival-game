// Inventarsystem
export function addItemToInventory(inventory, item) {
  const existing = inventory.find(i => i.name === item.name && i.stackable);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    inventory.push({ ...item });
  }
}
