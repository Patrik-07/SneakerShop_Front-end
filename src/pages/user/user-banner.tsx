export const UserBanner = () => {
  return (
    <>
      <img
        className="w-2/5 h-2/5 drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] z-10"
        src="src/assets/shoes/nike-airmax-270/270.png"
      />
      <div className="flex flex-col">
        <div className="text-[200px] font-bold text-red-500 absolute right-4 transform -translate-y-[100%] opacity-25 tracking-[.25em] pb-12">
          AIR
        </div>
        <div className="text-[200px] font-bold text-red-500 absolute right-14 transform -translate-y-1/2 opacity-20 pb-6">
          MAX
        </div>
        <div className="text-[200px] font-bold text-red-500 absolute right-4 opacity-25 tracking-[.25em] pt-6">
          270
        </div>
      </div>
    </>
  );
};
