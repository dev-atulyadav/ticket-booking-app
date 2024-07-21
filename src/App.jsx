import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SelectCity from "./components/Home/SelectCity";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const App = () => {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const [showAlert, setShowAlert] = useState(false);
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
  useEffect(() => {
    if (isLoggedIn && localStorage.getItem("isLogged") === null) {
      setShowAlert(true);
      localStorage.setItem("isLogged", true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  }, [user, isLoggedIn]);
  return (
    <>
      <div className="flex justify-center items-center">
        <Header />
        {isLoggedIn && showAlert && (
          <Alert
          className="absolute  top-14 bg-[#4fc14f]"
          sx={{
            bgcolor: "#4ade80",
            borderRadius: "30px",
          }}
          variant="filled"
          severity="success"
          >
            You logged successfully!
          </Alert>
        )}
      </div>
      {showLocOption && (
        <SelectCity handleShowLocOption={handleShowLocOption} />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
