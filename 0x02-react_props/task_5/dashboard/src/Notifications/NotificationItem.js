import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

const NotificationItem = ({ type, value, html }) => {
  if (value) return <li data-notification-type={type}>{value}</li>;
  if (html)
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  return <li data-notification-type={type}></li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  value: "default",
};

export default NotificationItem;
