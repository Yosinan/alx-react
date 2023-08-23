import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import CourseList from "../CourseList/CourseList";
import { StyleSheet, css } from "aphrodite";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { user, AppContext } from "./AppContext";

export default class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, value: "New course available", type: "default" },
    { id: 2, value: "New resume available", type: "urgent" },
    { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
  ];

  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: user,
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
        }}
      >
        <React.Fragment>
          <div className="root-notifications">
            <Notifications
              listNotifications={this.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
          </div>
          <div className="App">
            <Header />
            <div className={css(bodyStyle.App)}>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={this.listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>Lorem ipsum ...</p>
              </BodySection>
            </div>
            <div className={css(footerStyle.footerStyle)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const bodyStyle = StyleSheet.create({
  App: {
    marginLeft: "90px",
    marginTop: "70px",
    position: "relative",
  },
});

const footerStyle = StyleSheet.create({
  footerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    width: "100%",
    borderTop: "3px solid #ce314b",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "17px",
  },
});

App.propTypes = {
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

App.defaultProps = {
  logIn: () => {},
  logOut: () => {},
};
