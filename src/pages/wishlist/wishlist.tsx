import { exampleShoes } from "../../assets/shoes/sampleShoes";
import { Card } from "../home/card/card";

const WishList = () => {
  return (
    <div className="flex flex-col px-14 min-h-[704px]">
      <p className="text-4xl font-bold pl-1 pb-6">Whislist</p>
      <div className="grid grid-cols-4 col-span-2 gap-4">
        <Card shoeData={exampleShoes[2]} color="bg-[#7BE498]" />
        <Card shoeData={exampleShoes[1]} color="bg-[#F5E6FF]" />
      </div>
    </div>
  );
};

export default WishList;
