import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
  const name =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  class wrappingComponent extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  wrappingComponent.displayName = `WithLogging(${name})`;
  return wrappingComponent;
};

export default WithLogging;
