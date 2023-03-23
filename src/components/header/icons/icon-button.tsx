import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "../../../utils/icon";

type InputProps = {
  iconDefinition: IconDefinition;
  children?: React.ReactNode;
  to: string;
};

export const IconButton = ({ iconDefinition, children, to }: InputProps) => {
  return (
    <Link to={to}>
      <button className="mt-2 p-1 ml-4 md:ml-12">
        <div className="flex items-center">
          <Icon iconDefinition={iconDefinition} />
          {children}
        </div>
      </button>
    </Link>
  );
};
