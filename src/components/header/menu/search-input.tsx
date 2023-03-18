import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchInput = () => {
  return (
    <div className="hidden sm:flex sm:flex-1 justify-items-end items-center pr-3 pl-3 bg-gray-200 rounded-[18px] ml-2">
      <FontAwesomeIcon
        color="#142C3E"
        icon={faMagnifyingGlass}
        className="mr-2"
      />
      <input
        className="text-[#142C3E] border-none focus:outline-none bg-gray-200 w-20"
        type="text"
        id="text-input"
        placeholder="Search"
      />
    </div>
  );
};
