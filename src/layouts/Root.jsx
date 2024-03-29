import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Root = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <NavBar />
      </div>
      <div className="md:min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
