import { Card } from "../card/card";

export const Cards = () => {
  return (
    <div className="flex justify-between py-10 pl-12">
      <Card color="bg-[#7BE498]" />
      <Card color="bg-[#F5E6FF]" />
      <Card color="bg-[#F7C29B]" />
      <Card color="bg-[#68EAEB]" />
    </div>
  );
};
