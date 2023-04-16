export interface ShoePrice {
  original: number;
  withDiscount?: number;
}

type InputProps = {
  shoePrice: ShoePrice;
};

export const CardPriceContainer = ({ shoePrice }: InputProps) => {
  return (
    <h1 className="pl-2">
      {shoePrice.withDiscount ? (
        <>
          <s className="pr-2">{`$${shoePrice.original}`}</s>
          <span className="font-semibold">{`$${shoePrice.withDiscount}`}</span>
        </>
      ) : (
        <span>{`$${shoePrice.original}`}</span>
      )}
    </h1>
  );
};
