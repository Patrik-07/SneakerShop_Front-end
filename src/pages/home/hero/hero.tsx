type InputProps = {
  color: string;
  children?: React.ReactNode;
};

export const Hero = ({ color, children }: InputProps) => {
  return (
    <div className="relative flex items-center top-0 left-0 w-full h-full">
      <div
        className={`${color} rounded-[18px] p-10 mr-4 ml-4 relative w-full h-full z-0`}
      >
        {children}
      </div>
    </div>
  );
};
