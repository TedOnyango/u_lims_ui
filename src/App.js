import React from "react";
import "./style.css";

import NavBar from "./components/NavBar/NavBar";
import TestRequestRegister from "./components/TestRequestRegister/TestRequestRegister"
import Login from "./components/Login/Login";
import Article from "./components/Article/AddArticle";

export default function App() {
  return (
    <div>
      <NavBar />
      {/* <TestRequestRegister /> */}
      {/* <Login /> */}
      <Article />
    
    </div>
  );
}
