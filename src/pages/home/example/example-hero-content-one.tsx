import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExampleHeroContentOne = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="pl-12 py-6 grow">
        <h1 className="text-6xl px-2 py-2">Are you ready to</h1>
        <h1 className="text-6xl font-bold px-2 py-2">lead the way</h1>
        <h1 className="text-2xl px-3 pt-2 pb-5">
          Luxury meets ultimate sitting comfort
        </h1>
        <button className="flex items-center justify-center text-2xl font-bold px-6 pb-2 pt-1 rounded-full overflow-hidden ml-1 bg-black shadow-xl text-[#D0AD37]">
          <h1>Discover more</h1>
          <FontAwesomeIcon
            color="#D0AD37"
            icon={faArrowRight}
            className="text-3xl pl-4 pt-1"
          />
        </button>
      </div>
      <div className="pt-10 pr-10 flex items-end grow-0 z-10">
        <img
          className="h-full w-full object-contain"
          src="src\assets\home\hero1\hero1.png"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="absolute right-0 top-0 bottom-0 left-0 text-center">
          <div className="text-[210px] font-bold text-black absolute right-5 top-1/2 transform -translate-y-1/2 opacity-10">
            HOT
          </div>
        </div>
      </div>
    </div>
  );
};
