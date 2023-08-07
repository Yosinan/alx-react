import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

const NotificationItem = ({ type, value, html }) => {
  if (value) return <li data-priority={type}>{value}</li>;
  if (html)
    return <li data-priority={type} dangerouslySetInnerHTML={html}></li>;
  return <li data-priority={type}></li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
