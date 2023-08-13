import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <>
      <div className={css(styles.margin)}>
        <div className={css(styles.AppInput)}>
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className={css(styles.AppInput)}>
          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <input type="password" id="password" name="password"></input>
        </div>
        <button>OK</button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  margin: {
    display: "flex",
    margin: "50px",
  },
  AppInput: {
    marginLeft: "10px",
    marginRight: "10px",
  },
});
