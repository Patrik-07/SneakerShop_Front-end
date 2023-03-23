interface ShoeData {
  name: string;
  price: string;
  image: string;
}

type InputProps = {
  shoeData: ShoeData;
  color: string;
  children?: React.ReactNode;
  className?: string;
};

export const Card = ({ color, children, className, shoeData }: InputProps) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <button
        className={`${color} rounded-[18px] w-48 h-52 flex items-center pl-2 pr-5 drop-shadow-md`}
      >
        <div className="absolute top-0 left-6 bg-[#E76300] h-6 w-16 rounded-br-[20px] flex items-center">
          <span className="text-white text-[10px] absolute left-7">NEW</span>
        </div>
        <div className="absolute top-0 left-0 bg-[#0077FF] h-6 w-12 rounded-tl-[18px] rounded-br-[20px] flex items-center justify-center">
          <span className="text-white text-[10px]">NEW</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black drop-shadow-[0_25px_25px_rgba(0,0,0,1)]"></div>
        <img className="transform -rotate-[25deg]" src={shoeData.image} />
      </button>
      <h1 className="text-lg font-bold pt-3 pl-2">{shoeData.name}</h1>
      <h1 className="pl-2">{shoeData.price}</h1>
    </div>
  );
};
