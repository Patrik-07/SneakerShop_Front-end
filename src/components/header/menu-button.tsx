import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuButton = () => {
  return (
    <button className="bg-gray-200 rounded-[18px] p-2">
      <div className="flex justify-items-end items-center pr-1 pl-1">
        <FontAwesomeIcon color="#142C3E" icon={faBars} className="mr-2" />
        <h1 className="text-[#142C3E]">Menu</h1>
      </div>
    </button>
  );
};
