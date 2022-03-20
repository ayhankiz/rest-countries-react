import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

export default function Button(props) {
  return (
    <button
      className="bg-slate-700 px-4 py-2 rounded shadow-lg text-white hover:bg-slate-800 hover:border border-white"
      type={props.type}
      onClick={props.onClick}
    >
      <span className="pr-4">
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </span>
      Show All
    </button>
  );
}
