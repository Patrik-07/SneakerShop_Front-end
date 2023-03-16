import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="min-w-screen mx-auto max-w-screen-xl">
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
