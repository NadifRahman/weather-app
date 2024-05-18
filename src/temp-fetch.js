/**
 * Returns null if fetch was not succesful, otherwise returns a resolved promise that
 * contains the relevent weather data as an object
 * @param {A city represented as a string} city
 */
export default async function getWeatherPromise(city) {
  let weatherResponse = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e64e8bd5d8694271854213446241605&q=${city}`,
    { mode: "cors" },
  );

  if (!weatherResponse.ok) {
    console.log("Couldnt fetch, returing null");
    return null;
  }

  let weatherData = await weatherResponse.json(); //parse the json
  console.log(weatherData);

  let refinedWeatherData = {
    location: {
      city: weatherData.location.name,
      region: weatherData.location.region,
    },
    description: weatherData.current.condition.text,
    icon: `https:${weatherData.current.condition.icon}`,
    celTemp: weatherData.current.temp_c,
    farTemp: weatherData.current.temp_f,
  };
  console.log(refinedWeatherData);
  return refinedWeatherData;
}
