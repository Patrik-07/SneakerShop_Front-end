import { Card } from "../card/card";
import { CardContainer } from "../card/card-container";

const exampleShoes = [
  {
    name: "Nike Luka 1",
    price: "$119",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
  {
    name: "Nike React Infinity 3",
    price: "$179",
    image: "src\\assets\\shoes\\nike-react-infinity-3\\01.png",
  },
  {
    name: "Nike Infinity Pro 2",
    price: "$129",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
  {
    name: "Nike Luka 1",
    price: "$120",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
];

export const ExampleCardContainer = () => {
  return (
    <>
      <CardContainer>
        <Card shoeData={exampleShoes[0]} color="bg-[#7BE498]" />
        <Card shoeData={exampleShoes[1]} color="bg-[#F5E6FF]" />
        <Card shoeData={exampleShoes[2]} color="bg-[#F7C29B]" />
        <Card shoeData={exampleShoes[3]} color="bg-[#68EAEB]" />
      </CardContainer>
    </>
  );
};
