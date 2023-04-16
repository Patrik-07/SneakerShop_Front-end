type InputProps = {
  name: string;
  color: string;
};

const CardFirstTag = ({ name, color }: InputProps) => {
  return (
    <div
      className={`absolute top-0 left-0 ${color} h-6 w-12 rounded-tl-[18px] rounded-br-[20px] flex items-center justify-center z-10`}
    >
      <span className="text-white text-[10px] font-bold">{name}</span>
    </div>
  );
};

export default CardFirstTag;
