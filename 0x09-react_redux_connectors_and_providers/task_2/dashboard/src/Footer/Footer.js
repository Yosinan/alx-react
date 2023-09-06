import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import { connect } from "react-redux";

export function Footer(props) {
  const user = props.user;
  return (
    <>
    {user.isLoggedIn && <p id="logoutSection"><a href="#">Contact us</a></p>}
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </>
  );
}


export function mapStateToProps(state) {
  return {
    user: state.get("user"),
  };
}

export default connect(mapStateToProps)(Footer);
