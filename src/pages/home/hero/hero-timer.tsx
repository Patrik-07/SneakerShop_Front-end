type InputProps = {
  percent: number;
};

export const HeroTimer = ({ percent }: InputProps) => {
  return (
    <div className="relative">
      <div className="absolute top-[132px] right-[420px] transform">
        <div
          className={`xl:px-10 xl:py-1 rounded-full bg-white shadow-xl bg-opacity-30`}
        >
          <div
            className={`absolute top-0 left-0 h-full bg-opacity-100 bg-white rounded-full`}
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
