import axios from "axios";
const api_key = import.meta.env.VITE_WEATHER_KEY;

const getAllCountries = () =>
  axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then((response) => response.data);

const getWeather = (country) =>
  axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}&limit=1&appid=${api_key}`,
    )
    .then((response) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&units=metric&appid=${api_key}`,
      ),
    )
    .then((finalResponse) => finalResponse.data);

export { getAllCountries };
export { getWeather };
