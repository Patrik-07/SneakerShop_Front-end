import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  iconDefinition: IconDefinition;
};

export const Icon = ({ iconDefinition }: InputProps) => {
  return (
    <FontAwesomeIcon
      color="#142C3E"
      icon={iconDefinition}
      className="text-xl"
    />
  );
};
