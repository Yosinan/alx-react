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
        {!this.props.displayDrawer ? (
          <div className={css(styles.menuItem)}>Your notifications</div>
        ) : (
          <div className={css(styles.Notifications)}>
            <button
              style={{
                float: "right",
                backgroundColor: "#fff",
                border: "none",
                outline: "none",
                cursor: "pointer",
                marginTop: "-70px",
              }}
              aria-label="Close"
              onClick={console.log("Close button has been clicked")}
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.img)}
              />
            </button>
            {this.props.listNotifications.length != 0 ? (
              <p>Here is the list of notifications</p>
            ) : null}
            <ul className={css(styles.ul)}>
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
      </>
    );
  }
}

const opacityAnimation = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnimation = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px dashed #e01d3f",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "100px",
    paddingBottom: "5px",
    top: "21px",
    right: "7px",
    marginTop: "12px",
    zIndex: 100,
    fontSize: "20px",
    "@media (max-width: 900px)": {
      width: "100%",
      height: "100%",
      padding: "0px",
      fontSize: 20,
      position: "relative",
      right: 0,
      left: 0,
      border: "none",
    },
  },
  menuItem: {
    position: "relative",
    // top: "7px",
    // right: "12px",
    textAlign: "right",
    zIndex: 100,
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover ": {
      cursor: "pointer",
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  // mainNotifications: {
  //   padding: "6px 12px",
  //   position: "absolute",
  //   top: "7px",
  //   right: " 2px",
  //   marginTop: "25px",
  // },
  ul: {
    "@media (max-width: 900px)": {
      padding: 0,
    },
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
