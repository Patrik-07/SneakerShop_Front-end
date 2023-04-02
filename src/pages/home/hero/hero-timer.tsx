type InputProps = {
  percent: number;
};

export const HeroTimer = ({ percent }: InputProps) => {
  return (
    <div className="absolute bottom-10 right-1/2 z-10 transform translate-x-20">
      <div
        className={`px-20 py-1 rounded-full bg-white shadow-xl bg-opacity-30`}
      >
        <div
          className={`absolute top-0 left-0 h-full bg-opacity-100 bg-white rounded-full`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};
