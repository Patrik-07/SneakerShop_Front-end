import { Swiper, SwiperSlide } from "swiper/react";
import { ExampleHomeContent } from "./example/example-home-content";
import { LeftHeroButton, RightHeroButton } from "./hero/hero-button";
import { Autoplay, Navigation } from "swiper";
import { useState } from "react";

import "swiper/css";
import { Hero } from "./hero/hero";
import { HeroTimer } from "./hero/hero-timer";
import { ExampleCardContainer } from "./example/example-card-container";
import { EffectCreative } from "swiper";
import { CardContainer } from "./card/card-container";
import { Card } from "./card/card";

const exampleShoes = [
  {
    name: "Nike Luka 1",
    price: "$119",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
  {
    name: "Nike React Infinity 3",
    price: "$179",
    image: "src\\assets\\shoes\\nike-react-infinity-3\\01.png",
  },
  {
    name: "Nike Infinity Pro 2",
    price: "$129",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
  {
    name: "Nike Luka 1",
    price: "$120",
    image: "src\\assets\\shoes\\nike-luka-1\\01.png",
  },
];

type HomeContentInputProps = {
  children: React.ReactNode;
};

const HomeContent = ({ children }: HomeContentInputProps) => {
  return <div className="flex flex-row">{children}</div>;
};

const Home = () => {
  const [percent, setPercent] = useState(0);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    console.log(progress);
    setPercent((1 - progress) * 100);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="px-14 z-0 col-span-2 pt-6 pb-16">
        <Swiper
          spaceBetween={50}
          loop={true}
          creativeEffect={{
            prev: {
              translate: ["-50%", 0, -500],
              opacity: 0,
            },
            next: {
              translate: ["50%", 0, -500],
              opacity: 0,
            },
          }}
          effect="creative"
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[EffectCreative, Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="h-full w-full !overflow-visible"
        >
          <SwiperSlide className="">
            <Hero color="bg-[#FFE2B5]"></Hero>
          </SwiperSlide>
          <SwiperSlide className="">
            <Hero color="bg-[#FFDC62]"></Hero>
          </SwiperSlide>
          <SwiperSlide className="">
            <Hero color="bg-[#142C3E]"></Hero>
          </SwiperSlide>
          <div className="swiper-button-prev absolute top-1/2 w-[44px] h-[44px] -left-4 transform -translate-y-[22px] z-10 sm:block hidden overflow-visible">
            <LeftHeroButton />
          </div>
          <div className="swiper-button-next absolute top-1/2 w-[44px] h-[44px] -right-6 transform -translate-y-[22px] z-10 sm:block hidden">
            <RightHeroButton />
          </div>
          <HeroTimer percent={percent}></HeroTimer>
        </Swiper>
      </div>
      <CardContainer className="pt-6">
        <Card shoeData={exampleShoes[0]} color="bg-[#7BE498]" />
        <Card shoeData={exampleShoes[1]} color="bg-[#F5E6FF]" />
        <Card shoeData={exampleShoes[2]} color="bg-[#F7C29B]" />
        <Card shoeData={exampleShoes[3]} color="bg-[#68EAEB]" />
      </CardContainer>
    </div>
  );
};

export default Home;

//<HomeContent>
//  <ExampleHomeContent />
//</HomeContent>;
