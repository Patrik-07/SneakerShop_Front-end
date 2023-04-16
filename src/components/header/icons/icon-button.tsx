import { Link } from "react-router-dom";
import { Icon } from "../../../utils/icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type InputProps = {
  iconDefinition: IconDefinition;
  children?: React.ReactNode;
  linkTo: string;
};

export const IconButton = ({
  iconDefinition,
  children,
  linkTo,
}: InputProps) => {
  return (
    <Link to={linkTo}>
      <button>
        <div className="flex items-center">
          <Icon iconDefinition={iconDefinition} />
          {children}
        </div>
      </button>
    </Link>
  );
};
