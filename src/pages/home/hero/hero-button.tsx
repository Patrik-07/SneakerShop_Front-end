import {
  faArrowLeft,
  faArrowRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../utils/icon";

type InputProps = {
  className?: string;
  iconDefinition: IconDefinition;
};

const HeroButton = ({ iconDefinition, className }: InputProps) => {
  return (
    <button
      className={`${"flex items-center justify-center h-10 w-10 rounded-full overflow-hidden bg-white shadow-xl z-10"} ${className}`}
    >
      <Icon iconDefinition={iconDefinition} />
    </button>
  );
};

export const LeftHeroButton = () => {
  return (
    <HeroButton iconDefinition={faArrowLeft} className="absolute left-10" />
  );
};

export const RightHeroButton = () => {
  return (
    <HeroButton iconDefinition={faArrowRight} className="absolute right-10" />
  );
};
