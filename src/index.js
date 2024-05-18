import getWeatherPromise from "./temp-fetch";
import "./style.css";
import { displayWeather } from "./display-weather";

displayWeather(getWeatherPromise("adsadsadsadsads"));
displayWeather(getWeatherPromise("toronto"));
displayWeather(getWeatherPromise("london"));

displayWeather(getWeatherPromise("sydney"));
displayWeather(getWeatherPromise("dhaka"));
