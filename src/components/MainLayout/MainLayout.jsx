import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../Breadcrumbs";
import NavBar from "../NavBar";
import Navtop from "../Navtop";
import ScrollToTops from "../ScrollToTop/ScrollToTops";
import Slider from "../Slider";


const MainLayout = () => {
  return (
    <main>
      <ScrollToTops />
      <Navtop />
      <NavBar />
      <Slider />
      <Breadcrumb />
      <Outlet />
    </main>
  );
};

export default MainLayout;
