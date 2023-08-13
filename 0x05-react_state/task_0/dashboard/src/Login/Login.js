import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <>
      <div className={css(styles.container)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={css(styles.input)}
        ></input>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          className={css(styles.input)}
        ></input>

        <button className={css(styles.button)}>OK</button>
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
