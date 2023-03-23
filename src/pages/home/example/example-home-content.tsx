import { CustomItem } from "../custom-item/custom-item";
import { ExampleCardContainer } from "./example-card-container";
import { ExampleHeroContainer } from "./example-hero-container";

export const ExampleHomeContent = () => {
  return (
    <>
      <ExampleHeroContainer />
      <ExampleCardContainer />
      <CustomItem></CustomItem>
    </>
  );
};
