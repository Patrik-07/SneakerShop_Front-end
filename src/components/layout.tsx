import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";

// TODO:
// remove layout padding bottom 10

const Layout = () => {
  return (
    <div className="flex flex-col min-w-screen mx-auto max-w-screen-2xl bg-white shadow-2xl min-h-screen overflow-x-hidden">
      <Header></Header>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
