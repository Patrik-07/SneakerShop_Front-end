import { Outlet } from "react-router-dom";
import { UserBanner } from "./user-banner";
import UserNewsLetter from "./user-newsletter";

const User = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full flex justify-start items-center pt-2 pl-14 drop-shadow-md space-x-20">
        <Outlet />
        <UserBanner />
      </div>
      <UserNewsLetter />
    </div>
  );
};

export default User;
