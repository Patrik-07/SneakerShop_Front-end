import CardFirstTag from "./card-first-tag";
import CardSecondTag from "./card-second-tag";

export interface ShoeTags {
  isNew?: boolean;
  isHot?: boolean;
}

type InputProps = {
  shoeTags?: ShoeTags;
};

export const CardTagContainer = ({ shoeTags }: InputProps) => {
  return (
    <>
      {(() => {
        if (shoeTags?.isNew && shoeTags?.isHot) {
          return (
            <>
              <CardFirstTag name="HOT" color="bg-[#0077FF]"></CardFirstTag>
              <CardSecondTag name="NEW" color="bg-[#E76300]"></CardSecondTag>
            </>
          );
        } else if (shoeTags?.isNew) {
          return (
            <>
              <CardFirstTag name="NEW" color="bg-[#E76300]"></CardFirstTag>
            </>
          );
        } else if (shoeTags?.isHot) {
          return (
            <>
              <CardFirstTag name="HOT" color="bg-[#0077FF]"></CardFirstTag>
            </>
          );
        }
      })()}
    </>
  );
};
