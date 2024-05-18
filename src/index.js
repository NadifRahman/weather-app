import getWeatherPromise from "./temp-fetch";
import "./style.css";
import { displayWeather } from "./display-weather";

displayWeather(getWeatherPromise("toronto"));
let form = document.querySelector("#form");
let cityInput = document.querySelector("#cityInput");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayWeather(getWeatherPromise(cityInput.value));
});
