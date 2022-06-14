import React from "react";
import "./style.css";

import NavBar from "./components/NavBar/NavBar";
import TestRequestRegister from "./components/TestRequestRegister/TestRequestRegister";
import DensityChart from "./components/Analytics/DensityChart";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <TestRequestRegister /> */}
      <DensityChart />
      {/* <Login /> */}
    
    </div>
  );
}
