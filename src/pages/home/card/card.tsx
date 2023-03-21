type InputProps = {
  color: string;
  children?: React.ReactNode;
  className?: string;
};

export const Card = ({ color, children, className }: InputProps) => {
  return (
    <div className={`w-full h-full flex ${className}`}>
      <div className={`${color} rounded-[18px] w-48 h-60 z-0`}>{children}</div>
    </div>
  );
};
