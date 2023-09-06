import React from "react";
// import logo from "../assets/Holberton_logo.jpg";
import { AppContext } from "../App/AppContext";
import { StyleSheet, css } from "aphrodite";

export default function Header() {
  const { user, logOut } = React.useContext(AppContext);

  return (
    <>
      <header className={css(styles.header)}>
        {/* <img src={logo} className={css(styles.logo)} alt="logo" /> */}
        <h1 className="title">School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section id="logoutSection">
          <p>
            Welcome<strong> {user.email} </strong>
            <em>
              <a href="#" onClick={logOut}>
                (logout)
              </a>
            </em>
          </p>
        </section>
      )}
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
    width: "100%",
  },
  logo: {
    width: "200px",
  },
});
