import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

type InputProps = {
  iconDefinition: IconDefinition;
  className?: string;
};

const IconButton = ({ iconDefinition, className }: InputProps) => {
  return (
    <button className={`${"mt-2 p-1 ml-10"} ${className}`}>
      <FontAwesomeIcon
        color="#142C3E"
        icon={iconDefinition}
        className="text-xl"
      />
    </button>
  );
};

export const userIconButton = <IconButton iconDefinition={faUser}></IconButton>;

export const wishlistIconButton = (
  <IconButton iconDefinition={faHeart}></IconButton>
);

export const cartIconButton = (
  <IconButton iconDefinition={faShoppingCart} className="mr-2"></IconButton>
);
