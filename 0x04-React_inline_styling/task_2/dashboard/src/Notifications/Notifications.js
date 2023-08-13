import React, { Component } from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

export class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div className={css(styles.mainNotifications)}>
          {this.props.displayDrawer && (
            <div className={css(styles.Notifications)}>
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

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed #e01d3f",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "100px",
    paddingBottom: "5px",
  },
  menuItem: {
    position: "absolute",
    top: "7px",
    right: "12px",
  },

  mainNotifications: {
    padding: "6px 12px",
    position: "absolute",
    top: "7px",
    right: " 2px",
    marginTop: "25px",
  },

  img: {
    width: "20px",
    position: "absolute",
    right: "20px",
    top: "20px",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
