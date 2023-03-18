import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
  onClick?: () => void;
};

export const MenuButton = ({ onClick }: InputProps) => {
  return (
    <button className="bg-gray-200 rounded-[18px] p-2" onClick={onClick}>
      <div className="flex justify-items-end items-center pr-1 pl-1">
        <FontAwesomeIcon color="#142C3E" icon={faBars} className="mr-2" />
        <h1 className="text-[#142C3E]">Menu</h1>
      </div>
    </button>
  );
};

// const [isOpen, setIsOpen] = useState(false);

// function toggleDropdown() {
//   setIsOpen(!isOpen);
// }

// return (
//   <div className="relative">
//     <button
//       className="block text-gray-700 text-sm font-bold py-2 px-4 rounded"
//       onClick={toggleDropdown}
//     >
//       Menu
//     </button>
//     {isOpen && (
//       <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Item 1
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Item 2
//         </a>
//         <a
//           href="#"
//           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           Item 3
//         </a>
//       </div>
//     )}
//   </div>
// );
