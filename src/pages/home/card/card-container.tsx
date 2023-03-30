type InputProps = {
  children: React.ReactNode;
};

export const CardContainer = ({ children }: InputProps) => {
  return (
    <div className="grid py-5 md:grid-cols-4 md:grid-rows-none xs:grid-cols-2 xs:grid-rows-2 grid-row-4 gap-x-10 sm:px-14 px-6 md:h-[310px] h-fit justify-items-center">
      {children}
    </div>
  );
};
