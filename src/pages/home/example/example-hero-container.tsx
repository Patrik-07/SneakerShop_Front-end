import { Hero } from "../hero/hero";
import { HeroContainer } from "../hero/hero-container";
import { ExampleHeroContentOne } from "./example-hero-content-one";

export const ExampleHeroContainer = () => {
  return (
    <>
      <HeroContainer>
        <Hero color="bg-[#FFE2B5]">
          <ExampleHeroContentOne></ExampleHeroContentOne>
        </Hero>
        <Hero color="bg-[#FFDC62]" />
        <Hero color="bg-[#142C3E]" />
      </HeroContainer>
    </>
  );
};
