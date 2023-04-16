import { useState, useEffect, ReactNode } from "react";
import { Hero } from "./hero";
import { LeftHeroSide, RightHeroSide } from "./hero-side";
import { LeftHeroButton, RightHeroButton } from "./hero-button";
import { HeroTimer } from "./hero-timer";

type InputProps = {
  children: React.ReactElement[];
};

export const HeroContainer = ({ children }: InputProps) => {
  const [currentState, setCurrentState] = useState(0);
  const [percent, setPercent] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // in ms
  const timeForChange = 6000;
  const timerSmooth = 100;

  const timeForOneTick = 100 / (timeForChange / 1000);
  const deltaForUpdate = timeForOneTick / (1000 / timerSmooth);

  useEffect(() => {
    let interval = 0;
    if (isActive) {
      interval = setInterval(() => {
        update();
      }, timerSmooth);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercent((percent) => percent + deltaForUpdate);
    }, timerSmooth);
    return () => clearInterval(intervalId);
  }, []);

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const update = () => {
    setSeconds((seconds) => seconds + 1);
    if (percent >= 100 - deltaForUpdate) {
      switchToIndex(currentState);
      // switchToNext();
    }
  };

  const getPrevindex = () => {
    return currentState === 0 ? children.length - 1 : currentState - 1;
  };

  const getNextindex = () => {
    return currentState === children.length - 1 ? 0 : currentState + 1;
  };

  const switchToIndex = (index: number) => {
    reset();
    setCurrentState(index);
    setPercent(0);
    setIsActive(true);
  };

  const switchToPrev = () => {
    switchToIndex(getPrevindex());
  };

  const switchToNext = () => {
    switchToIndex(getNextindex());
  };

  const getCurrentHero = () => {
    return children[currentState];
  };

  const getNextHero = () => {
    return children[getNextindex()];
  };

  const getPrevHero = () => {
    return children[getPrevindex()];
  };

  return (
    <div className="top-0 left-0 w-full h-full relative flex items-center px-14">
      <LeftHeroSide color={getNextHero().props.color} />
      <LeftHeroButton onClick={switchToNext} />
      {getCurrentHero()}
      <RightHeroButton onClick={switchToPrev} />
      <HeroTimer percent={percent}></HeroTimer>
      <RightHeroSide color={getPrevHero().props.color} />
    </div>
  );
};
