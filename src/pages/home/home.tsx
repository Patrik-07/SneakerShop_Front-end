import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ExampleHomeContent } from "./example/example-home-content";
import { LeftHeroButton, RightHeroButton } from "./hero/hero-button";
import { Autoplay, Navigation } from "swiper";
import { useRef, useState } from "react";

import "swiper/css";
import { Hero } from "./hero/hero";
import { HeroTimer } from "./hero/hero-timer";

type HomeContentInputProps = {
  children: React.ReactNode;
};

const HomeContent = ({ children }: HomeContentInputProps) => {
  return <div className="flex flex-col">{children}</div>;
};

const Home = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [percent, setPercent] = useState(0);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    console.log(progress);
    setPercent((percent) => (1 - progress) * 100);
  };

  return (
    <HomeContent>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-[400px] w-full m-0 relative flex items-center"
      >
        <SwiperSlide className="px-14">
          <Hero color="bg-[#FFE2B5]"></Hero>
        </SwiperSlide>
        <SwiperSlide className="px-14">
          <Hero color="bg-[#FFDC62]"></Hero>
        </SwiperSlide>
        <SwiperSlide className="px-14">
          <Hero color="bg-[#142C3E]"></Hero>
        </SwiperSlide>
        <div className="swiper-button-prev absolute top-1/2 w-[44px] h-[44px] left-10 transform -translate-y-[22px] z-10">
          <LeftHeroButton />
        </div>
        <div className="swiper-button-next absolute top-1/2 w-[44px] h-[44px] right-8 -translate-y-[22px] z-10">
          <RightHeroButton />
        </div>
        <HeroTimer percent={percent}></HeroTimer>
      </Swiper>
    </HomeContent>
  );
};

export default Home;

//<HomeContent>
//  <ExampleHomeContent />
//</HomeContent>;
