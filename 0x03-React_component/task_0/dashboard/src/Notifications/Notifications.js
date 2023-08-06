import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      <div className="Notifications">
        {displayDrawer && (
          <div className="displayNotifications">
            <p>Here is the list of notifications</p>
            <button
              style={{
                float: "right",
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                marginTop: "-70px",
              }}
              onClick={console.log("Close button has been clicked")}
              aria-label="Close"
            >
              <img src={closeIcon} alt="close-icon" />
            </button>
            <ul>
            {
                listNotifications.length == 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
                })
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};
