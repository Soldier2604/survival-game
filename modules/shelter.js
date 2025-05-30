// Shelter platzieren, schlafen, schützen
export function useShelter(state) {
  state.player.energy = Math.min(100, state.player.energy + 30);
  state.player.health = Math.min(100, state.player.health + 20);
}
