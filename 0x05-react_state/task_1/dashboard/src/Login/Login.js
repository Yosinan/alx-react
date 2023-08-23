import React, { useState, useEffect } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  }, [email, password]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  
  return (
    <>
      <div className={css(styles.container)}>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChangeEmail}
            value={email}
            className={css(styles.input)}
          ></input>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handleChangePassword}
            value={password}
            name="password"
            className={css(styles.input)}
          ></input>
          <input
            type="submit"
            disabled={!enableSubmit}
            value="OK"
            className={css(styles.button)}
          ></input>
        </form>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "36px 24px",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      width: "100px",
    },
  },

  input: {
    margin: "0 16px 0 8px",
  },

  button: {
    "@media (max-width: 900px)": {
      textAlign: "center",
      width: "40px",
    },
  },
});
