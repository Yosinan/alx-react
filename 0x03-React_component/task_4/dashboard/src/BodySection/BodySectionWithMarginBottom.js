import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

export class BodySectionWithMarginBottom extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: "",
};

export default BodySectionWithMarginBottom;
