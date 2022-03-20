import useFetch from "../../Hooks/useFetch";
import Spinner from "../Spinner/Spinner";

import Country from "./Country";

export default function Countries(props) {
  const { data, loading, error } = useFetch(`${props.url}`);

  if (error) return <h1 className="text-white text-lg">{error.toString()}</h1>;

  const showDetailedCountryHandler = (data) => {
    props.onShowDetailedCountry(data);
  };

  const classes = `flex flex-wrap gap-16 ${props.classes}`;
  return (
    <>
      {loading && <Spinner></Spinner>}
      <div className={classes}>
        {data?.map((country) => {
          return (
            <Country
              key={Math.random()}
              country={country}
              onShowDetailedCountry={showDetailedCountryHandler}
            ></Country>
          );
        })}
      </div>
    </>
  );
}
