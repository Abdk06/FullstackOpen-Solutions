import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import { getAllCountries, getWeather } from "./services/countries";

const App = () => {
  const [newValue, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [detailedCountries, setDetailedCountries] = useState([]);

  const hook = () => {
    getAllCountries().then((countries) => setCountries(countries));
  };

  useEffect(hook, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setDetailedCountries([]);
  };

  const getCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newValue.toLowerCase()),
  );

  const countriesToShow = newValue != "" ? getCountries : [];

  const showCountry = (country) => {
    getWeather(country).then((response) => {
      setDetailedCountries(
        detailedCountries.concat({
          countryName: country.name.common,
          countryWeather: response,
        }),
      );
    });
  };

  useEffect(() => {
    if (countriesToShow.length === 1) {
      showCountry(countriesToShow[0]);
    }
  }, [newValue]);

  return (
    <div>
      find countries <input value={newValue} onChange={handleChange}></input>
      <Countries
        countries={countriesToShow}
        onClick={showCountry}
        detailedCountries={detailedCountries}
      ></Countries>
    </div>
  );
};

export default App;
