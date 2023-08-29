import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    if (value)
      return (
        <li
          data-priority={type}
          onClick={markAsRead(id)}
          className={css(
            type === "urgent" ? styles.urgent : styles.default,
            styles.li
          )}
        >
          {value}
        </li>
      );
    if (html)
      return (
        <li
          data-priority={type}
          dangerouslySetInnerHTML={html}
          onClick={markAsRead(id)}
          className={css(
            type === "urgent" ? styles.urgent : styles.default,
            styles.li
          )}
        ></li>
      );
    return <li data-priority={type}></li>;
  }
}

const styles = StyleSheet.create({
  urgent: {
    color: "#e01d3f",
  },
  default: {
    color: "#0a0a54",
  },
  li: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      margin: " 0",
      width: "100%",
      fontSize: "20px",
      borderBottom: "1px solid black",
      padding: "10px 8px",
    },
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
