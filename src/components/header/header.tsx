import {
  userIconButton,
  wishlistIconButton,
  cartIconButton,
} from "./icon-button";
import { MenuButton } from "./menu-button";
import { SearchInput } from "./search-input";

import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-items-end p-4">
        <MenuButton></MenuButton>
        <SearchInput></SearchInput>
      </div>
      <div className="flex-wrap justify-items-end p-4">
        {userIconButton}
        {wishlistIconButton}
        {cartIconButton}
      </div>
    </div>
  );
};

export default Header;
