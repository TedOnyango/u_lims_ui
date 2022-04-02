import React from "react";

export default function NavBar(){
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check"/>
    <div className="nav-header">
      <div className="nav-title">
        U-LIMS
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <a href="//github.io/jo_geek" target="_blank">Home</a>
      <a href="http://stackoverflow.com/users/4084003/" target="_blank">Login</a>
      <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank"></a>
      <a href="https://codepen.io/jo_Geek/" target="_blank">Logout</a>
      <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">Lab</a>
    </div>
  </div>
  )
}