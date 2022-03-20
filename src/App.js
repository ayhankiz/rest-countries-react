import { useState } from "react";

import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Countries from "./components/Countries/Countries";
import DetailedCountry from "./components/Countries/DetailedCountry";
import Form from "./components/Form/Form";

import Header from "./Layout/Header";

import { JSON_URL_ALL, JSON_URL_NAME } from "./Helpers/helpers";

function App() {
  const [url, setUrl] = useState(JSON_URL_ALL);
  const [singleCountry, setSingleCountry] = useState({});
  const [isSingleCountryActive, setIsSingleCountryActive] = useState(false);

  const searchCountryHandler = function (country) {
    if (country === "") {
      setUrl(JSON_URL_ALL);
      return;
    }
    setUrl(`${JSON_URL_NAME}/${country}`);
  };

  const ShowDetailedCountryHandler = function (data) {
    setIsSingleCountryActive(true);
    setSingleCountry(data);
    setUrl(undefined);
  };

  return (
    <>
      <Header></Header>
      <section className="countries py-12">
        <Container>
          <Form onSearchCountry={searchCountryHandler}></Form>
          {isSingleCountryActive && (
            <DetailedCountry data={singleCountry}></DetailedCountry>
          )}
          {url !== undefined && (
            <Countries
              classes="py-12"
              url={url}
              onShowDetailedCountry={ShowDetailedCountryHandler}
            ></Countries>
          )}
          {url !== JSON_URL_ALL && (
            <Button
              type="button"
              onClick={() => {
                setUrl(JSON_URL_ALL);
                setIsSingleCountryActive(false);
              }}
            ></Button>
          )}
        </Container>
      </section>
    </>
  );
}

export default App;
