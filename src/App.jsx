// Layout wrapper ensures consistent Navbar across all pages

import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
