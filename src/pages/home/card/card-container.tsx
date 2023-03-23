type InputProps = {
  children: React.ReactNode;
};

export const CardContainer = ({ children }: InputProps) => {
  return (
    <div className="flex justify-between pt-12 pb-10 pl-14 pr-4">
      {children}
    </div>
  );
};
