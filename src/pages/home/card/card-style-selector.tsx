export interface ShoeStyle {
  color?: string;
  image: string;
}

type InputProps = {
  shoeStyles: ShoeStyle[];
  onMouse: (index: number) => void;
};

export const CardStyleSelector = ({ shoeStyles, onMouse }: InputProps) => {
  return (
    <>
      {shoeStyles.length > 1 && (
        <div className="absolute inset-0 z-10 bg-white opacity-0 hover:opacity-100">
          <h2 className="text-lg font-bold pt-3 pl-2">Colors</h2>
          <div className="pl-2 pt-1 flex space-x-1">
            {shoeStyles.map((shoeStyle, index) => (
              <div
                className="h-5 w-5 rounded-full bg-gray-300 flex justify-center items-center"
                onMouseOver={() => onMouse(index)}
                onMouseLeave={() => onMouse(0)}
              >
                <div
                  className={`h-4 w-4 rounded-full ${shoeStyle.color}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
