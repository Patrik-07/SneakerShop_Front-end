import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout";
import { About } from "../pages/about";
import Home from "../pages/home/home";

const App = () => {
  return (
    <div className="bg-[#e7e9eb]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/about" element={<Layout />}>
            <Route element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
