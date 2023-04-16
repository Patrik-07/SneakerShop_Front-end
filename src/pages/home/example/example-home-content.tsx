import { NikeFreak } from "../custom-item/custom-item";
import { ExampleCardContainer } from "./example-card-container";
import { ExampleHeroContainer } from "./example-hero-container";

export const ExampleHomeContent = () => {
  return (
    <div className="flex flex-col">
      <ExampleHeroContainer />
      <ExampleCardContainer />
      <NikeFreak />
    </div>
  );
};
