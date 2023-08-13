import React from "react";
import logo from "../assets/Holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";

export default function Header() {
  return (
    <>
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className="title">School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#e01d3f",
    fontSize: "20px",
    borderBottom: "3px solid #e01d3f",
  },
  logo: {
    width: "200px",
  },
});
