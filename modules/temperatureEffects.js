export function updateTemperatureEffects(state) {
  if (state.weather === 'snow' || state.weather === 'hail') {
    const protection = state.warmth || 0;
    if (protection < 2) state.health -= 0.05;
  }
  if (state.weather === 'heat' && (!state.warmth || state.warmth < 1)) {
    state.thirst -= 0.05;
  }
}