import React from "react";
import logo from "../assets/Holberton_logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">School dashboard</h1>
      </div>
    </>
  );
}
