import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../../../utils/icon";

type InputProps = {
  iconDefinition: IconDefinition;
  children?: React.ReactNode;
};

export const IconButton: React.FC<InputProps> = ({
  iconDefinition,
  children,
}) => {
  return (
    <button className="mt-2 p-1 ml-10">
      <div className="flex items-center">
        <Icon iconDefinition={iconDefinition} />
        {children}
      </div>
    </button>
  );
};
