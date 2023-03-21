import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Icon } from "../../../../utils/icon";

export const ExampleHeroContent1 = () => {
  return (
    <div className="flex flex-row h-96 w-full">
      <div className="pl-10 py-6 grow">
        <h1 className="xl:text-7xl lg:text-6xl text-5xl xl:px-2 px-6 xl:py-2 py-4">
          Are you ready to
        </h1>
        <h1 className="xl:text-7xl lg:text-6xl text-5xl font-bold xl:px-2 px-6 xl:py-2 py-3">
          lead the way
        </h1>
        <h1 className="lg:text-2xl text-lg xl:px-2 px-6 py-6">
          Luxury meets ultimate sitting comfort
        </h1>
        <button className="flex items-center justify-center xl:text-4xl lg:text-4xl text-2xl font-bold xl:px-5 px-5 pt-2 pb-2 mt-4 lg:px-10 lg:pt-4 lg:pb-5 lg:mt-8 rounded-full overflow-hidden bg-black shadow-xl text-[#D0AD37]">
          <h1>Discover more</h1>
          <FontAwesomeIcon
            color="#D0AD37"
            icon={faArrowRight}
            className="text-4xl pl-4 pt-2"
          />
        </button>
      </div>
      <div className="md:block pt-10 pr-20 flex items-end grow-0">
        <img
          className="h-full w-full object-contain"
          src="src\assets\home\hero1\hero1.png"
          alt=""
        />
      </div>
    </div>
  );
};
