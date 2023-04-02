import {
  faArrowLeft,
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../utils/icon";

type InputProps = {
  className?: string;
  iconDefinition: IconDefinition;
  onClick?: () => void;
};

const HeroButton = ({ iconDefinition, className, onClick }: InputProps) => {
  return (
    <button
      onClick={onClick}
      className={`${"flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-xl z-10"} ${className}`}
    >
      <Icon iconDefinition={iconDefinition} />
    </button>
  );
};

type ButtonInputProps = {
  onClick?: () => void;
};

export const LeftHeroButton = ({ onClick }: ButtonInputProps) => {
  return (
    <HeroButton
      onClick={onClick}
      iconDefinition={faArrowLeft}
      className="absolute"
    />
  );
};

export const RightHeroButton = ({ onClick }: ButtonInputProps) => {
  return (
    <HeroButton
      onClick={onClick}
      iconDefinition={faArrowRight}
      className="absolute"
    />
  );
};
