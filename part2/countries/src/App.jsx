import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import { getAllCountries } from "./services/countries";

const App = () => {
  const [newValue, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  const hook = () => {
    getAllCountries().then((countries) => setCountries(countries));
  };

  useEffect(hook, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(newValue.toLowerCase()),
  );

  const countriesToShow = newValue != "" ? getCountries : [];

  return (
    <div>
      find countries <input value={newValue} onChange={handleChange}></input>
      <Countries countries={countriesToShow}></Countries>
    </div>
  );
};

export default App;
