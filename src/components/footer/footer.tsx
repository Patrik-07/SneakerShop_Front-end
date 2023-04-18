import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FooterIconButton } from "./footer-icon-button";

const Footer = () => {
  return (
    <div className="flex-grow relative h-60 drop-shadow-md">
      <div className="absolute top-0 bottom-0 left-0 right-0 px-14 pt-10 pb-8">
        <div
          className={`bg-red-300 rounded-t-[18px] rounded-[18px] w-full h-full z-0 flex flex-col justify-center items-center`}
        >
          <div className="w-full h-full flex justify-center items-center space-x-16">
            <FooterIconButton iconDefinition={faFacebook}></FooterIconButton>
            <FooterIconButton iconDefinition={faInstagram}></FooterIconButton>
            <FooterIconButton iconDefinition={faTiktok}></FooterIconButton>
            <FooterIconButton iconDefinition={faTwitter}></FooterIconButton>
          </div>
          <div className="flex pb-2 text-white">
            <p className="pr-60">
              © 2023 SneakerShop, Inc. All Rights Reserved
            </p>
            <div className="flex space-x-6">
              <button>
                <p>Terms of Use</p>
              </button>
              <button>
                <p>Privacy & Cookie Policy</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
