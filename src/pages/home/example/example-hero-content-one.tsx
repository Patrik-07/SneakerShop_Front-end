import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExampleHeroContentOne = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="xl:pl-12 pl-10 py-6 grow">
        <h1 className="xl:text-6xl lg:text-5xl px-2 xl:py-2 py-4">
          Are you ready to
        </h1>
        <h1 className="text-6xl font-bold px-2 xl:py-2 py-3">lead the way</h1>
        <h1 className="xl:text-2xl text-lg px-2 xl:pb-5">
          Luxury meets ultimate sitting comfort
        </h1>
        <button className="flex items-center justify-center xl:text-2xl lg:text-4xl text-2xl font-bold xl:px-6 xl:pb-2 xl:pt-1 rounded-full overflow-hidden bg-black shadow-xl text-[#D0AD37]">
          <h1>Discover more</h1>
          <FontAwesomeIcon
            color="#D0AD37"
            icon={faArrowRight}
            className="text-3xl pl-4 pt-1"
          />
        </button>
      </div>
      <div className="md:block pt-10 xl:pr-10 pr-10 flex items-end grow-0 z-10">
        <img
          className="h-full w-full object-contain"
          src="src\assets\home\hero1\hero1.png"
          alt=""
        />
      </div>
      <div className="relative sm:block hidden">
        <div className="absolute right-0 top-0 bottom-0 left-0 text-center">
          <div className="text-[210px] font-bold text-black absolute right-5 top-1/2 transform -translate-y-1/2 opacity-10">
            HOT
          </div>
        </div>
      </div>
    </div>
  );
};
