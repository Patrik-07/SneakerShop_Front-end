import { useState, useEffect } from "react";
import { Hero } from "../hero/hero";
import { ExampleHeroContent1 } from "../heroes/hero-contens/example-hero-content1";

type InputProps = {
  heroes: React.ReactElement[];
};

const Heroes = ({ heroes }: InputProps) => {
  const [currentState, setCurrentState] = useState(0);

  function update() {
    setCurrentState((currentState) => {
      if (currentState < heroes.length - 1) {
        return currentState + 1;
      } else {
        return 0;
      }
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {}, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const getPrevCurrNext = (heroes: React.ReactElement[]) => {
    const prevIndex = currentState === 0 ? heroes.length - 1 : currentState - 1;
    const nextIndex = currentState === heroes.length - 1 ? 0 : currentState + 1;
    return (
      <>
        {heroes[prevIndex]} {heroes[currentState]} {heroes[nextIndex]}
      </>
    );
  };

  // return <div className="flex w-full">{getPrevCurrNext(heroes)}</div>;
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 text-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap">
        <Hero color="bg-[#FFE2B5]"></Hero>
        <Hero color="bg-[#FFDC62]"></Hero>
        <Hero color="bg-[#142C3E]"></Hero>
      </div>
    </div>
  );
};

export const ExampleHero = () => {
  return (
    <Hero color="bg-[#FFE2B5]">
      <ExampleHeroContent1></ExampleHeroContent1>
    </Hero>
  );
};
