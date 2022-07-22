import React from "react";
import "./style.css";

import NavBar from "./components/NavBar/NavBar";
import TestRequestRegister from "./components/TestRequestRegister/TestRequestRegister";
import DensityChart from "./components/Analytics/DensityChart";
import HeaderComponent from "./components/TestReport/HeaderComponent/HeaderComponent";
import TestDetails from "./components/TestReport/TestDetails/TestDetails";
import TestResults from "./components/TestReport/TestResults/TestResults";
import Remarks from "./components/TestReport/Remarks/Remarks";
import TestDoneBy from "./components/TestReport/DoneBy/TestDoneBy";



export default function App() {
  return (
    <div>
      <NavBar />
      {/* <TestRequestRegister /> */}
      {/* <DensityChart /> */}
      {/* <Login /> */}
      <HeaderComponent />
      <TestDetails />
      <TestResults />
      <Remarks />
      <TestDoneBy />
    
    </div>
  );
}
