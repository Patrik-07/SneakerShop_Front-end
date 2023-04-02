interface ShoeData {
  name: string;
  price: string;
  image: string;
}

type InputProps = {
  shoeData: ShoeData;
  color: string;
};

export const Card = ({ color, shoeData }: InputProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <button
        className={`${color} rounded-[18px] w-full h-full md:h-full md:w-full lg:w-full lg:h-full lg:max-h-full flex justify-center drop-shadow-md mb-3`}
      >
        <div className="absolute top-0 left-6 bg-[#E76300] h-6 w-16 rounded-br-[20px] flex items-center">
          <span className="text-white text-[10px] font-bold absolute left-7">
            NEW
          </span>
        </div>
        <div className="absolute top-0 left-0 bg-[#0077FF] h-6 w-12 rounded-tl-[18px] rounded-br-[20px] flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">NEW</span>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] sm:p-10 md:p-5 lg:p-10"
            src={shoeData.image}
          />
        </div>
      </button>
      <div className="lg:pl-2 self-start">
        <div>
          <h1 className="lg:text-lg md:text-[15px] text-xl font-bold">
            {shoeData.name}
          </h1>
          <h1>{shoeData.price}</h1>
        </div>
      </div>
    </div>
  );
};
