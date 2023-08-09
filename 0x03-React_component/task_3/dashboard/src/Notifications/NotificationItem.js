import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

class NotificationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, value, html, markAsRead, id } = this.props;
    if (value)
      return (
        <li data-priority={type} onClick={markAsRead(id)}>
          {value}
        </li>
      );
    if (html)
      return (
        <li
          data-priority={type}
          dangerouslySetInnerHTML={html}
          onClick={markAsRead(id)}
        ></li>
      );
    return <li data-priority={type}></li>;
  }
}

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
