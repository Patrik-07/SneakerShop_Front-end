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
    <div className="flex items-center justify-between px-10">
      <div className="flex justify-items-end p-4">
        <MenuButton onClick={incrementItemCount}></MenuButton>
        <SearchInput></SearchInput>
      </div>
      <div className="flex flex-wrap justify-items-end p-4">
        <UserIconButton />
        <WishlistIconButton />
        <ShoppingCartIconButton itemCount={itemCount} />
      </div>
    </div>
  );
};

export default Header;

// <img
// className="h-10 w-auto pl-4"
// src="src\assets\header\logo.png"
// alt=""
// />
