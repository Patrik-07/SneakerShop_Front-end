import { useState } from "react";
import { CardPriceContainer, ShoePrice } from "./card-price-container";
import { CardTagContainer, ShoeTags } from "./card-tag-container";
import { CardStyleSelector, ShoeStyle } from "./card-style-selector";

export interface ShoeData {
  name: string;
  price: ShoePrice;
  tags?: ShoeTags;
  styles: ShoeStyle[];
}

type InputProps = {
  shoeData: ShoeData;
  color: string;
};

export const Card = ({ color, shoeData }: InputProps) => {
  const [shoeStyleIndex, setShoeStyle] = useState(0);

  function setCurrentShoeStyle(f_shoestyle: number): void {
    setShoeStyle(f_shoestyle);
  }

  return (
    <div className={`w-full h-full flex flex-col`}>
      <button
        className={`${color} rounded-[18px] w-48 h-52 flex items-center pl-2 pr-5 drop-shadow-md z-20`}
      >
        <CardTagContainer shoeTags={shoeData.tags}></CardTagContainer>
        <img
          className="pt-2 pl-3 drop-shadow-[0_15px_15px_rgba(0,0,0,0.65)]"
          src={shoeData.styles[shoeStyleIndex].image}
        />
      </button>
      <div className="relative w-full h-16">
        <div className="absolute inset-0 z-10">
          <h1 className="text-lg font-bold bg-white pt-3 pl-2">
            {shoeData.name}
          </h1>
          <CardPriceContainer shoePrice={shoeData.price}></CardPriceContainer>
        </div>
        <CardStyleSelector
          shoeStyles={shoeData.styles}
          onMouse={setShoeStyle}
        ></CardStyleSelector>
      </div>
    </div>
  );
};
