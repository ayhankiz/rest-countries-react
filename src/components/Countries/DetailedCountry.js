import { data } from "autoprefixer";

export default function DetailedCountry(props) {
  const dataObj = {
    languages: [],
    currencies: [],
  };
  for (const [entry, value] of Object.entries(props.data)) {
    if (entry === "currencies") {
      value.forEach((currency) => {
        dataObj.currencies.push(currency.code);
      });
    }

    if (entry === "languages") {
      value.forEach((lang) => {
        console.log(lang);
        dataObj.languages.push(lang.name);
      });
    }
  }
  console.log(dataObj.languages);
  return (
    <section className="py-12 flex">
      <div className="max-w-lg">
        <img src={props.data.flag} alt="bild"></img>
      </div>
      <div className="text-white px-12">
        <h1 className="text-3xl">{props.data.name}</h1>
        <ul className="mt-2 columns-2">
          <li className="py-2">
            Native name: <span>{props.data.nativeName}</span>
          </li>
          <li className="py-2">
            Population: <span>{props.data.population}</span>
          </li>
          <li className="py-2">
            Region: <span>{props.data.region}</span>
          </li>
          <li className="py-2">
            Sub Region: <span>{props.data.subRegion}</span>
          </li>
          <li className="py-2">
            Capital: <span>{props.data.capital}</span>
          </li>
          <li className="py-2">
            Top Level Domain: <span>{props.data.topLevelDomain}</span>
          </li>
          <li className="py-2">Currencies:{dataObj.currencies.join()}</li>
          <li className="py-2">Languages:{dataObj.languages.join()}</li>
        </ul>
      </div>
    </section>
  );
}
