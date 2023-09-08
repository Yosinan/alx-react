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
import * as uiAC from "../actions/uiActionCreators";
import { connect } from "react-redux";

export class App extends React.Component {
  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ]
    };

  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
    const newList = this.state.listNotifications.filter((notification) =>
      notification.id !== id);
    console.log(newList)
    this.setState({ listNotifications: newList });
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
          logOut: this.props.logout,
        }}
      >
        <React.Fragment>
          <div className="root-notifications">
            <Notifications
              listNotifications={this.state.listNotifications}
              markNotificationAsRead={this.markNotificationAsRead}
              displayDrawer={this.props.displayDrawer}
              handleDisplayDrawer={this.props.displayNotificationDrawer}
              handleHideDrawer={this.props.hideNotificationDrawer}
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
                  <Login logIn={this.props.login} />
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


export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  }
};

const mapDispatchToProps = {
  displayNotificationDrawer: uiAC.displayNotificationDrawer,
  hideNotificationDrawer: uiAC.hideNotificationDrawer,
  login: uiAC.login,
  logout: uiAC.logout,

};


export default connect(mapStateToProps, mapDispatchToProps)(App);



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
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  logIn: () => { },
  logOut: () => { },
  displayDrawer: false,
  displayNotificationDrawer: () => { },
  hideNotificationDrawer: () => { },
  isLoggedIn: false,
};
