import { Card } from "../pages/home/card/card";

const Footer = () => {
  return (
    <div className="flex bottom-0 px-12 pt-10">
      <div className={`w-full h-full flex`}>
        <div
          className={`bg-red-300 rounded-t-[18px] rounded-rl-[18px] w-full h-44 z-0 flex justify-center items-center`}
        >
          <span className="text-8xl text-white font-bold">
            Ez lesz a FOOTER
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
