import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  className?: string;
  iconDefinition: IconDefinition;
};

export const Icon = ({ className, iconDefinition }: InputProps) => {
  return (
    <FontAwesomeIcon
      color="#142C3E"
      icon={iconDefinition}
      className={`text-2xl ${className}`}
    />
  );
};
