import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout";
import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import WishList from "../pages/wishlist/wishlist";
import User from "../pages/user/user";
import SignInForm from "../pages/user/user-signin-form";
import SignUpForm from "../pages/user/user-signup-form";

const App = () => {
  return (
    <div className="bg-[#e7e9eb]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/user" element={<User />}>
              <Route index element={<SignInForm />}></Route>
              <Route path="/user/signup" element={<SignUpForm />}></Route>
            </Route>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
