import { useState, useEffect } from "react";
import { Hero } from "../hero/hero";

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
    const intervalId = setInterval(update, 3000);
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

  return <div>{getPrevCurrNext(heroes)}</div>;
};

export const ExampleHeroes = () => {
  return (
    <Heroes
      heroes={[
        <Hero color="bg-[#FFE2B5]"></Hero>,
        <Hero color="bg-[#FFDC62]"></Hero>,
        <Hero color="bg-[#142C3E]"></Hero>,
      ]}
    ></Heroes>
  );
};
