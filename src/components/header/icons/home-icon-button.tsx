import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../utils/icon";

export const HomeIconButton = () => {
  return (
    <Link to="/">
      <button className="mt-2 pl-1 pr-4">
        <div className="flex items-center">
          <Icon iconDefinition={faHome} />
        </div>
      </button>
    </Link>
  );
};
