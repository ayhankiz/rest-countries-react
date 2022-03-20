import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

export default function Spinner() {
  return (
    <div className="relative">
      <div className="text-white absolute top-2 left-1 text-lg animate-spin">
        <FontAwesomeIcon icon="fa-solid fa-spinner" />
      </div>
    </div>
  );
}
