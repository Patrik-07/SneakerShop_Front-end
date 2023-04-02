type InputProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardContainer = ({ children, className }: InputProps) => {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-6 pr-14 ${className}`}
    >
      {children}
    </div>
  );
};

// <div className="text-3xl font-bold pb-5">New comers</div>
