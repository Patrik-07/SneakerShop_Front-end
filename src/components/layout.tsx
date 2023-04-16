import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-w-screen mx-auto max-w-screen-lg bg-white shadow-2xl min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
