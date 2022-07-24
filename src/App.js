import React from "react";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "./style.css";

import NavBar from "./components/NavBar/NavBar";
import TestRequestRegister from "./components/TestRequestRegister/TestRequestRegister";
import DensityChart from "./components/Analytics/DensityChart";

import Printing from "./components/Printing/Printing";



export default function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <NavBar />
      {/* <TestRequestRegister /> */}
      {/* <DensityChart /> */}
      {/* <Login /> */}

      <Printing ref={componentRef}/>
      <button onClick={ handlePrint }>GeneratePdf</button>
     
    </div>
  );
}
