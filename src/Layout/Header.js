import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";

import Container from "../components/Container/Container";

library.add(faCloudMoon);

const crescent = <FontAwesomeIcon icon="fa-solid fa-cloud-moon" />;

export default function Header() {
  return (
    <header className="bg-slate-700 text-white">
      <Container classes="flex justify-between py-6">
        <h1 className="text-2xl font-extrabold">Where in the World?</h1>
        <button className="text-lg">
          <span className="pr-2">{crescent}</span>
          <span>Light mode</span>
        </button>
      </Container>
    </header>
  );
}
