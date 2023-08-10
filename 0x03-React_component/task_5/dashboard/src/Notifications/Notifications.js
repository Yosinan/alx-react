import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

export class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        <div className="Notifications">
          {this.props.displayDrawer && (
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
                {this.props.listNotifications.length == 0 ? (
                  <NotificationItem
                    type="default"
                    value="No new notification for now"
                  />
                ) : null}
                {this.props.listNotifications.map((val, idx) => {
                  return (
                    <NotificationItem
                      type={val.type}
                      value={val.value}
                      html={val.html}
                      id={val.id}
                      key={val.id}
                      markAsRead={this.markAsRead}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
