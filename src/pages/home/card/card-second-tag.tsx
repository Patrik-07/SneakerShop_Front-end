type InputProps = {
  name: string;
  color: string;
};

const CardSecondTag = ({ name, color }: InputProps) => {
  return (
    <div
      className={`absolute top-0 left-6 ${color} h-6 w-16 rounded-br-[20px] flex items-center`}
    >
      <span className="text-white text-[10px] absolute left-7 font-bold">
        {name}
      </span>
    </div>
  );
};

export default CardSecondTag;
