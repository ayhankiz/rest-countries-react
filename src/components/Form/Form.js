import { useRef } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const magnifyingGlass = <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />;

export default function Form(props) {
  const countryInput = useRef();

  const submitHandler = function (e) {
    e.preventDefault();

    const country = countryInput.current.value.toLowerCase().trim();

    props.onSearchCountry(country);

    countryInput.current.value = "";
  };

  return (
    <form className="flex justify-between" onSubmit={submitHandler}>
      <div className="bg-slate-600 relative rounded text-white shadow-lg">
        <span className="ml-6 absolute top-3">{magnifyingGlass}</span>
        <input
          ref={countryInput}
          type="search"
          placeholder="Search for a country..."
          className="pl-14 py-3 pr-6 bg-slate-600 w-96 rounded placeholder:text-white focus:bg-slate-800 appearance-none"
        />
      </div>
      <select
        className="bg-slate-600 text-white shadow-lg form-select appearance-none  px-3 py-1.5 text-base font-normal  bg-clip-padding bg-no-repeat  border-gray-300 rounded transition ease-in-out m-0 focus:bg-slate-800"
        aria-label="Default select example"
      >
        <option value="*" defaultValue={"Filter by Region"}>
          Filter by Region
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
      </select>
    </form>
  );
}
