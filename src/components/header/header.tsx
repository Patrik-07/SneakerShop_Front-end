import { useState } from "react";

import { MenuButton } from "./menu/menu-button";
import { SearchInput } from "./menu/search-input";

import { UserIconButton } from "./icons/user";
import { WishlistIconButton } from "./icons/wishlist";
import { ShoppingCartIconButton } from "./icons/shoppingcart";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 pt-2">
      <div className="flex justify-items-end p-4">
        <MenuButton></MenuButton>
        <SearchInput></SearchInput>
      </div>
      <div className="flex flex-wrap justify-items-end p-4">
        <UserIconButton />
        <WishlistIconButton />
        <ShoppingCartIconButton itemCount={2} />
      </div>
    </div>
  );
};

export default Header;
