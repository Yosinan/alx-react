import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.selectedStyle =
      this.props.type === "urgent" ? styles.items.urgent : styles.items.default;
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    if (value)
      return (
        <li
          data-priority={type}
          onClick={markAsRead(id)}
          className={css(this.selectedStyle)}
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
          className={css(this.selectedStyle)}
        ></li>
      );
    return <li data-priority={type}></li>;
  }
}

const styles = StyleSheet.create({
  urgent: {
    backgroundColor: "#FF0000",
  },
  default: {
    backgroundColor: "#00FF00",
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
