import React from "react";
import { LeftHeroButton, RightHeroButton } from "./hero-button";

type InputProps = {
  children?: React.ReactNode;
};

export const Hero = ({ children }: InputProps) => {
  return (
    <div className="relative flex items-center top-0 left-0 w-full h-full">
      <LeftHeroButton />
      <div className="bg-[#FFE2B5] rounded-[18px] p-10 mr-4 ml-4 relative w-full h-full z-0">
        {children}
      </div>
      <RightHeroButton />
    </div>
  );
};
