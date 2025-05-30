// Wettereffekte
export function updateWeather(state) {
  if (!state.weather) state.weather = "clear";

  if (Math.random() < 0.005) {
    const options = ["rain", "snow", "heat", "clear"];
    state.weather = options[Math.floor(Math.random() * options.length)];
  }

  // Auswirkungen
  if (state.weather === "rain" || state.weather === "snow") {
    state.player.energy -= 0.03;
  }
  if (state.weather === "heat") {
    state.player.thirst -= 0.05;
  }
}
