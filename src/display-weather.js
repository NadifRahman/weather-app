let weatherData;

export async function displayWeather(weatherPromise) {
  weatherData = await weatherPromise;
  if (weatherData === null) {
    console.log("cannot change UI");
    return;
  }

  //let weatherBox = document.querySelector(".weatherBox");
  //let top = document.querySelector(".top");
  let city = document.querySelector("#city");
  let toggleTempBtn = document.querySelector("#toggleTemp");
  let region = document.querySelector("#region");
  let weatherDescription = document.querySelector("#weatherDescription");
  //let tempbox = document.querySelector(".tempbox");
  let icon = document.querySelector("img");
  let temperature = document.querySelector("#temperature");

  city.textContent = weatherData.location.city;
  region.textContent = weatherData.location.region;
  weatherDescription.textContent = weatherData.description;
  icon.src = weatherData.icon;
  temperature.textContent = `${weatherData.celTemp}°C`;
  toggleTempBtn.textContent = "°F";

  if (!toggleTempBtn.onclick) {
    //if the button doesnt already have the on click
    toggleTempBtn.addEventListener("click", toggleTemp);
  }
}

function toggleTemp() {
  let toggleTempBtn = document.querySelector("#toggleTemp");
  let temperature = document.querySelector("#temperature");

  if (toggleTempBtn.textContent === "°F") {
    toggleTempBtn.textContent = "°C";
    temperature.textContent = `${weatherData.farTemp}°F`;
  } else {
    toggleTempBtn.textContent = "°F";
    temperature.textContent = `${weatherData.celTemp}°C`;
  }
}
