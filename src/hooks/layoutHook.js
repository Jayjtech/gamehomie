import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const layoutHook = () => {
  const [pathSuffix1, setPathSuffix1] = useState(null);
  const [pathSuffix2, setPathSuffix2] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const pathSegment = location.pathname.split("/");
    setPathSuffix1(pathSegment[1]);
    setPathSuffix2(pathSegment[2]);
  }, [location.pathname]);

  return { pathSuffix1, pathSuffix2 };
};

export default layoutHook;
