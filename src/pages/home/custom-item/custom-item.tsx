import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../../../utils/icon";
import { CircularArray } from "../../../utils/circular-array";
import { useState } from "react";

type InputProps = {
  images: CircularArray<string>;
};

const CustomItem = ({ images }: InputProps) => {
  const [currentImage, setCurrentImage] = useState(images.current());
  return (
    <div className="top-0 left-0 w-full h-[400px] relative flex items-center justify-center drop-shadow-md px-14 pb-2">
      <div
        className={`rounded-[18px] relative w-full h-full bg-blue-300 drop-shadow-sm`}
      >
        <div className="flex flex-row h-full w-full">
          <div className={`rounded-l-[18px] w-full h-full flex`}>
            <div className="absolute top-0 left-0 bg-[#0077FF] h-10 w-32 rounded-br-[20px] rounded-tl-[18px] flex items-center">
              <span className="text-white text-[16px] absolute left-4 font-bold">
                BRAND NEW
              </span>
            </div>
            <img className="rounded-l-[18px]" src={currentImage} />
            <div>
              <button
                onClick={() => {
                  setCurrentImage(images.next());
                }}
                className="absolute bottom-6 left-64 flex items-center justify-center h-8 w-8 rounded-full overflow-hidden bg-white ml-2"
              >
                <Icon className={"w-1/2 h-1/2"} iconDefinition={faArrowRight} />
              </button>
              <button
                onClick={() => {
                  setCurrentImage(images.prev());
                }}
                className="absolute bottom-6 left-56 flex items-center justify-center h-8 w-8 rounded-full overflow-hidden bg-white"
              >
                <Icon className={"w-1/2 h-1/2"} iconDefinition={faArrowLeft} />
              </button>
            </div>
          </div>
          <div className="absolute left-[340px] top-[30px] w-full h-full">
            <div className="text-white font-bold text-5xl">
              <span>NIKE ZOOM </span>
              <span className="text-blue-500 italic">FREAK </span>
              <span>4</span>
            </div>
            <div className="text-white text-2xl w-1/2 pt-10">
              <span>
                With a liquid-like fit, Zoom Air and a design that moves with
                you, this special{" "}
              </span>
              <span className="text-blue-500 italic font-bold">
                Freak 4 ASW{" "}
              </span>
              <span>
                celebrates a legacy that's still in the making but will be told
                over and over.
              </span>
            </div>
            <button className="flex items-center justify-center text-2xl font-bold px-6 pb-2 pt-1 rounded-full overflow-hidden bg-white shadow-xl text-[#0077FF] absolute bottom-[70px]">
              <h1>Get your freak on</h1>
              <FontAwesomeIcon
                color="#0077FF"
                icon={faArrowRight}
                className="text-3xl pl-4 pt-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const images = new CircularArray<string>([
  "src\\assets\\shoes\\nike-zoom-freak-4\\01.webp",
  "src\\assets\\shoes\\nike-zoom-freak-4\\02.webp",
  "src\\assets\\shoes\\nike-zoom-freak-4\\03.webp",
]);

export const NikeFreak = () => {
  return <CustomItem images={images}></CustomItem>;
};
