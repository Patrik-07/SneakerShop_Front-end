import { Hero } from "../../hero/hero";
import { ExampleHeroContent } from "./example-hero-content";

export const HeroExampleOne = () => {
  return (
    <Hero
      colors={{
        prev: "bg-[#FFDC62]",
        current: "bg-[#FFE2B5]",
        next: "bg-[#142C3E]",
      }}
    >
      <ExampleHeroContent></ExampleHeroContent>
    </Hero>
  );
};

export const HeroExampleTwo = () => {
  return (
    <Hero
      colors={{
        prev: "bg-[#FFE2B5]",
        current: "bg-[#142C3E]",
        next: "bg-[#FFDC62]",
      }}
    >
      <ExampleHeroContent></ExampleHeroContent>
    </Hero>
  );
};

export const HeroExampleThree = () => {
  return (
    <Hero
      colors={{
        prev: "bg-[#142C3E]",
        current: "bg-[#FFDC62]",
        next: "bg-[#FFE2B5]",
      }}
    >
      <ExampleHeroContent></ExampleHeroContent>
    </Hero>
  );
};

const heroExamples = [
  <HeroExampleOne />,
  <HeroExampleTwo />,
  <HeroExampleThree />,
];
