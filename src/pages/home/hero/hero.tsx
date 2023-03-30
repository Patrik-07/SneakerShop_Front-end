type InputProps = {
  color: string;
  children?: React.ReactNode;
};

export const Hero = ({ color, children }: InputProps) => {
  return (
    <div className="w-full h-full relative flex items-center drop-shadow-md">
      <div className={`${color} rounded-[18px] relative w-full h-full z-0`}>
        {children}
      </div>
    </div>
  );
};
