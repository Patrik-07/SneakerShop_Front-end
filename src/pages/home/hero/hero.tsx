import { LeftHeroButton, RightHeroButton } from "./hero-button";

type InputProps = {
  color: string;
  children?: React.ReactNode;
};

export const Hero = ({ color, children }: InputProps) => {
  return (
    <div className="top-0 left-0 w-full h-fit relative flex items-center px-14">
      <LeftHeroButton />
      <div className={`${color} rounded-[18px] relative w-full h-full z-0`}>
        {children}
      </div>
      <RightHeroButton />
    </div>
  );
};
