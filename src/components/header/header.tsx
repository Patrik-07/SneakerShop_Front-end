import { useState } from "react";

import { MenuButton } from "./menu/menu-button";
import { SearchInput } from "./menu/search-input";

import { UserIconButton } from "./icons/user";
import { WishlistIconButton } from "./icons/wishlist";
import { ShoppingCartIconButton } from "./icons/shoppingcart";

const Header = () => {
  const [itemCount, setCount] = useState<number>(0);

  const incrementItemCount = () => {
    setCount((prevItemCount) => prevItemCount + 1);
  };

  return (
    <div className="flex justify-between">
      <div className="flex justify-items-end p-4">
        <MenuButton onClick={incrementItemCount}></MenuButton>
        <SearchInput></SearchInput>
      </div>
      <div className="flex-wrap justify-items-end p-4">
        <UserIconButton />
        <WishlistIconButton />
        <ShoppingCartIconButton itemCount={itemCount} />
      </div>
    </div>
  );
};

export default Header;
