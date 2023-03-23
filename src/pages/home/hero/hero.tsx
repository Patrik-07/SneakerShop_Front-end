type InputProps = {
  color: string;
  children?: React.ReactNode;
};

export const Hero = ({ color, children }: InputProps) => {
  return (
    <div className="top-0 left-0 w-full h-80 relative flex items-center drop-shadow-md">
      <div className={`${color} rounded-[18px] relative w-full h-full z-0`}>
        {children}
      </div>
    </div>
  );
};
