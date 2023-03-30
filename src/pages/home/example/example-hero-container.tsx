import { Hero } from "../hero/hero";
import { HeroContainer } from "../hero/hero-container";
import { ExampleHeroContentOne } from "./example-hero-content-one";

// <ExampleHeroContentOne></ExampleHeroContentOne>;

export const ExampleHeroContainer = () => {
  return (
    <>
      <HeroContainer>
        <Hero color="bg-[#FFE2B5]"></Hero>
        <Hero color="bg-[#FFDC62]" />
        <Hero color="bg-[#142C3E]" />
      </HeroContainer>
    </>
  );
};
