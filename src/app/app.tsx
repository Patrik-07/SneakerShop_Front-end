import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
