import { exampleShoes } from "../../../assets/shoes/sampleShoes";
import { Card } from "../card/card";
import { CardContainer } from "../card/card-container";

export const ExampleCardContainer = () => {
  return (
    <CardContainer>
      <Card shoeData={exampleShoes[0]} color="bg-[#7BE498]" />
      <Card shoeData={exampleShoes[1]} color="bg-[#F5E6FF]" />
      <Card shoeData={exampleShoes[2]} color="bg-[#F7C29B]" />
      <Card shoeData={exampleShoes[3]} color="bg-[#68EAEB]" />
    </CardContainer>
  );
};
