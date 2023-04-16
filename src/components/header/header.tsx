import { MenuButton } from "./menu/menu-button";
import { SearchInput } from "./menu/search-input";

import { UserIconButton } from "./icons/user-icon-button";
import { WishlistIconButton } from "./icons/wishlist-icon-button";
import { ShoppingCartIconButton } from "./icons/shoppingcart-icon-button";
import { HomeIconButton } from "./icons/home-icon-button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 pt-2 z-20">
      <div className="flex justify-items-end p-4">
        <HomeIconButton />
        <MenuButton></MenuButton>
        <SearchInput></SearchInput>
      </div>
      <div className="flex flex-wrap justify-items-end pt-3 pr-6 space-x-14">
        <UserIconButton />
        <WishlistIconButton />
        <ShoppingCartIconButton itemCount={2} />
      </div>
    </div>
  );
};

export default Header;
