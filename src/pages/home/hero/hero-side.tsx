type HeroSideInputProps = {
  className: string;
  color: string;
};

const HeroSide = ({ className, color }: HeroSideInputProps) => {
  return (
    <div
      className={`absolute ${className} ${color} h-full w-8 hidden sm:block`}
    ></div>
  );
};

type SpecifiedHeroSideInputProps = {
  color: string;
};

export const RightHeroSide = ({ color }: SpecifiedHeroSideInputProps) => {
  return (
    <HeroSide
      className="right-0 rounded-tl-[18px] rounded-bl-[18px]"
      color={color}
    ></HeroSide>
  );
};

export const LeftHeroSide = ({ color }: SpecifiedHeroSideInputProps) => {
  return (
    <HeroSide
      className="left-0 rounded-tr-[18px] rounded-br-[18px]"
      color={color}
    ></HeroSide>
  );
};
