import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="bg-[#82DFE0] rounded-[18px] relative px-16 py-8 z-10">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-[#142C3E] font-bold pb-8">Sign in</h1>
        <form className="flex flex-col justify-center">
          <div className="pb-4">
            <div className="flex items-center rounded-full py-2 pl-4 pr-16 bg-white">
              <FontAwesomeIcon icon={faAt} color="#142C3E" />
              <input
                className="outline-none pl-2 py-1 w-full"
                placeholder="email"
                type="text"
                id="username"
                color="#142C3E"
              />
            </div>
          </div>
          <div className="pb-2">
            <div className="flex items-center rounded-full py-2 pl-4 pr-16 bg-white">
              <FontAwesomeIcon icon={faLock} color="#142C3E" />
              <input
                className="outline-none rounded-full pl-2 py-1 w-full"
                placeholder="password"
                type="password"
                id="password"
              />
            </div>
          </div>
          <div className="pl-2 pb-4">
            <a href="#" className="text-[#142C3E] underline font-bold">
              Forgot password?
            </a>
          </div>
          <button
            className="px-4 py-2 rounded-full bg-red-400 text-white font-bold text-xl"
            type="submit"
          >
            Sign in
          </button>
          <div className="py-4 flex justify-center items-center text-[#142C3E]">
            <div>
              <div className="bg-gray-500 px-14 pt-[1px]"></div>
            </div>
            <p className="px-4">or</p>
            <div>
              <div className="bg-gray-500 px-14 pt-[1px]"></div>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="px-4 py-2 rounded-full bg-white text-[#142C3E] text-xl"
              type="submit"
            >
              <div className="flex items-center justify-start">
                <FontAwesomeIcon
                  className="pl-4"
                  icon={faGoogle}
                  color="#142C3E"
                />
                <p className="pl-4"> Sign in with Google</p>
              </div>
            </button>
            <button
              className="px-4 py-2 rounded-full bg-white text-[#142C3E] text-xl"
              type="submit"
            >
              <div className="flex items-center justify-start">
                <FontAwesomeIcon
                  className="pl-4"
                  icon={faFacebook}
                  color="#142C3E"
                />
                <p className="pl-4"> Sign in with Facebook</p>
              </div>
            </button>
          </div>
          <div className="py-4 flex justify-center items-center text-[#142C3E]">
            <div>
              <div className="bg-gray-500 px-9 pt-[1px]"></div>
            </div>
            <p className="pl-2 pr-1">or </p>
            <Link to="/user/signup" className="underline">
              create
            </Link>
            <p className="pl-1 pr-2">one.</p>
            <div>
              <div className="bg-gray-500 px-9 pt-[1px]"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
