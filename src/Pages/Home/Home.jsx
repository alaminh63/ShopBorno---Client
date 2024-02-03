import React from "react";
import Banner from "../../Components/Home/Banner";
import PhoneHome from "../../Components/Home/PhoneHome";
import Advertize from "../../Components/Home/Advertize";
import AllCategories from "../../Components/Home/AllCategories";
import TopElectronics from "../../Components/Home/TopElectronics";
import DailyNeeds from "../../Components/Home/DailyNeeds";

const Home = () => {
  return (
    <div>
      <Banner />
      <PhoneHome />
      <Advertize />
      <AllCategories />
      <TopElectronics />
      <DailyNeeds />
    </div>
  );
};

export default Home;
