import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";

// TODO:
// remove layout padding bottom 10

const Layout = () => {
  return (
    <div className="min-w-screen mx-auto max-w-screen-lg bg-white shadow-2xl">
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
