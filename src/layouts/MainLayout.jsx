import { Outlet, useLocation } from "react-router-dom";
import WebFooter from "../website/components/WebFooter";
import WebNavbar from "../website/components/WebNavbar";
import WebSidebar from "../website/components/WebSidebar";
import { useEffect, useState } from "react";
import layoutHook from "../hooks/layoutHook";

const MainLayout = () => {
  const { pathSuffix1, pathSuffix2 } = layoutHook();

  const reserveUrl = ["user", "admin"];

  return (
    <>
      {!reserveUrl.includes(pathSuffix1) && <WebNavbar />}
      <Outlet />
      {!reserveUrl.includes(pathSuffix1) && <WebFooter />}
    </>
  );
};

export default MainLayout;
