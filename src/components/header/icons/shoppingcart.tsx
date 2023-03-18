import { IconButton } from "./icon-button";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { counter } from "@fortawesome/fontawesome-svg-core";

type InputProps = {
  itemCount: number;
};

export const ShoppingCartIconButton = ({ itemCount }: InputProps) => {
  return (
    <IconButton iconDefinition={faShoppingCart}>
      {itemCount > 0 && (
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white font-bold text-sm ml-1">
          {itemCount}
        </div>
      )}
    </IconButton>
  );
};
