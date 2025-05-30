import { updateCrafting } from './crafting.js';
import { updateTemperatureEffects } from './temperatureEffects.js';

export function startGame() {
  const state = {
    inventory: [],
    hunger: 100,
    thirst: 100,
    health: 100,
    warmth: 0,
    weather: 'clear'
  };

  console.log("Spiel gestartet", state);

  updateCrafting(state);
  updateTemperatureEffects(state);
}
