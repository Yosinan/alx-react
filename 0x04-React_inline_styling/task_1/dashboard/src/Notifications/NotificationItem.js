import React, { Component } from "react";
import PropTypes from "prop-types";
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

// const styles = StyleSheet.create({
//   items: {
//     width: "100%",
//     borderBottom: "1px solid black",
//     fontSize: "20px",
//     padding: "10px 8px",
//     boxSizing: "border-box",
//     urgent: {
//       backgroundColor: "#FF0000",
//     },
//     normal: {
//       backgroundColor: "#00FF00",
//     },
//     // backgroundColor: type === "urgent" ? "#FF0000" : "#00FF00",
//   },
// });

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
