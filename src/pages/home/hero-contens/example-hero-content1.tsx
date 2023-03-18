import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Icon } from "../../../utils/icon";

export const ExampleHeroContent1 = () => {
  return (
    <div className="flex ">
      <div className="mr-10 ml-4">
        <h1 className="text-7xl p-2">Are you ready to</h1>
        <h1 className="text-7xl font-bold p-2">lead the way</h1>
        <h1 className="text-2xl p-2 mt-5">
          Luxury meets ultimate sitting comfort
        </h1>
        <div>
          <button className="flex items-center justify-center text-3xl pb-3 pt-2 px-4 mt-8 rounded-full overflow-hidden bg-black shadow-xl text-amber-300">
            <h1>Discover more</h1>
          </button>
        </div>
      </div>
      <div className="relative top-10">
        <img src="src\assets\home\hero1\hero1.png" alt="" />
      </div>
    </div>
  );
};
