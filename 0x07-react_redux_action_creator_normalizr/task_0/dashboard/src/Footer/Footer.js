import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { AppContext } from "../App/AppContext";

export default function Footer() {
  const { user } = React.useContext(AppContext);
  return (
    <>
    {user.isLoggedIn && <p id="logoutSection"><a href="#">Contact us</a></p>}
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </>
  );
}
