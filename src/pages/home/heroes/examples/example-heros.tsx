import { Hero } from "../../hero/hero";
import { ExampleHeroContent } from "./example-hero-content";

type InputProps = {
  color: string;
};

const ExampleHero = ({ color }: InputProps) => {
  return (
    <Hero color={color}>
      <ExampleHeroContent></ExampleHeroContent>
    </Hero>
  );
};

export const HeroExampleOne = () => {
  return <ExampleHero color="bg-[#FFE2B5]" />;
};

export const HeroExampleTwo = () => {
  return <ExampleHero color="bg-[#FFDC62]" />;
};

export const HeroExampleThree = () => {
  return <ExampleHero color="bg-[#FFDC62]" />;
};

const heroExamples = [
  <HeroExampleOne />,
  <HeroExampleTwo />,
  <HeroExampleThree />,
];
