const Countries = (props) => {
  if (props.countries.length == 0) {
    return <div>Please enter a valid filter</div>;
  }

  if (props.countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <>
      {props.countries.map((country) => {
        let index;
        if (
          (index = props.detailedCountries.findIndex(
            (detailedCountry) =>
              country.name.common === detailedCountry.countryName,
          )) != -1 ||
          props.countries.length === 1
        ) {
          return (
            <div key={country.name.common}>
              <h1>{country.name.common}</h1>

              <div>Capital {country.capital}</div>

              <div>Area {country.area}</div>

              <h2>Languages</h2>

              <ul>
                {Object.values(country.languages).map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>

              <img
                src={country.flags.png}
                alt={country.flags.alt}
                width="200px"
              ></img>

              <h2>Weather in {country.capital}</h2>

              <div>
                Temprature{" "}
                {props.detailedCountries[index]?.countryWeather?.main?.temp}{" "}
                Celcius
              </div>
              <img
                src={`https://openweathermap.org/payload/api/media/file/${props.detailedCountries[index]?.countryWeather?.weather[0]?.icon}.png`}
                alt={
                  props.detailedCountries[index]?.countryWeather?.weather[0]
                    ?.description
                }
                title={
                  props.detailedCountries[index]?.countryWeather?.weather[0]
                    ?.description
                }
              ></img>
              <div>
                Wind{" "}
                {props.detailedCountries[index]?.countryWeather?.wind?.speed}{" "}
                m/s
              </div>
            </div>
          );
        } else {
          return (
            <div key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => props.onClick(country)}>Show</button>
            </div>
          );
        }
      })}
    </>
  );
};

export default Countries;
