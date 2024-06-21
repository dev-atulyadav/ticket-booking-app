import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectCity from "./components/Home/SelectCity";

const App = () => {
  const [showLocOption, setShowLocOption] = useState(
    localStorage.getItem("userLocation") === null ? true : false
  );
  const handleShowLocOption = (city) => {
    if (city === localStorage.getItem("userLocation")) {
      setShowLocOption(false);
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <Header />
      {showLocOption && (
        <SelectCity handleShowLocOption={handleShowLocOption} />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
