import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type InputProps = {
  iconDefinition: IconDefinition;
};

export const FooterIconButton = ({ iconDefinition }: InputProps) => {
  const [hoverColor, setHoverColor] = useState("#142C3E");

  return (
    <button>
      <FontAwesomeIcon
        color={hoverColor}
        icon={iconDefinition}
        className={`text-4xl pt-3`}
        onMouseOver={() => {
          setHoverColor("#FFFFFF");
        }}
        onMouseLeave={() => {
          setHoverColor("#142C3E");
        }}
      />
    </button>
  );
};
