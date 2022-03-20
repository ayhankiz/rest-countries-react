export default function Country(props) {
  const showDetailedCountryHandler = function () {
    const singleCountryData = {
      name: props.country.name,
      flag: props.country.flag,
      nativeName: props.country?.nativeName,
      population: props.country?.population,
      region: props.country?.region,
      subRegion: props.country?.subregion,
      capital: props.country?.capital,
      topLevelDomain: props.country?.topLevelDomain[0],
      currencies: props.country?.currencies,
      languages: props.country?.languages,
    };
    props.onShowDetailedCountry(singleCountryData);
  };
  return (
    <div className="bg-slate-700 text-white flex-1 max-w-sm">
      <img
        src={props.country.flag}
        onClick={showDetailedCountryHandler}
        className="max-w-full h-auto cursor-pointer"
      />
      <div className="p-4">
        <h2 className="text-xl font-extrabold">{props.country.name}</h2>
        <span className="block pt-2">
          <span className="pr-4 font-medium">Population:</span>
          {props.country.population}
        </span>
        <span className="block pt-2">
          <span className="pr-4 font-medium">Region:</span>
          {props.country.region}
        </span>
        <span className="block pt-2">
          <span className="pr-4 font-medium">Capital:</span>
          {props.country.capital}
        </span>
      </div>
    </div>
  );
}
