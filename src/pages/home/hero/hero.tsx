import React from "react";
import { LeftHeroButton, RightHeroButton } from "./hero-button";

type InputProps = {
  colors: { prev: string; current: string; next: string };
  children?: React.ReactNode;
};

export const Hero = ({ colors, children }: InputProps) => {
  return (
    <div className="relative flex top-0 w-full h-full overflow-hidden">
      <div
        className={`${colors.next} absolute rounded-[18px] p-10 mr-4 ml-4 left-[1235px] w-full h-full z-10 opacity-60`}
      ></div>
      <div className="relative flex top-0 w-full h-full overflow-hidden px-10">
        <div className="relative flex items-center top-0 left-0 w-full h-full">
          <LeftHeroButton />
          <div
            className={`${colors.current} rounded-[18px] p-10 mr-4 ml-4 relative w-full h-full z-0`}
          >
            {children}
          </div>
          <RightHeroButton />
        </div>
        <div
          className={`${colors.prev} absolute rounded-r-[18px] top-0 -left-10 w-7 h-full z-10`}
        ></div>
      </div>
    </div>
  );
};
