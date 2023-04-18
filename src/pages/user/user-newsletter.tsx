import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserNewsLetter = () => {
  return (
    <div className="px-14 pt-8 drop-shadow-md">
      <div className="flex justify-start items-center bg-[#F0E68C] h-[100px] w-full rounded-[18px]">
        <div className="flex flex-row justify-start items-center pr-5">
          <p className="text-3xl text-[#142C3E] font-bold pl-5">
            Get exclusive updates.
          </p>
          <form className="flex flex-row text-2xl text-[#142C3E] font-bold pl-5 pt-2 space-x-6">
            <div className="flex items-center rounded-full pl-4 pr-4 bg-white">
              <FontAwesomeIcon icon={faAt} color="#142C3E" />
              <input
                className="outline-none pl-2 pb-1 w-[295px] text-xl"
                placeholder="email"
                type="text"
                id="username"
                color="#142C3E"
              />
            </div>
            <button
              className="px-8 py-2 rounded-full text-white bg-[#142C3E] text-xl"
              type="submit"
            >
              <div className="flex items-center justify-start">
                <p>Subscribe</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserNewsLetter;
