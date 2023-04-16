import { IconButton } from "./icon-button";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const WishlistIconButton = () => {
  return <IconButton linkTo="/wishlist" iconDefinition={faHeart}></IconButton>;
};
