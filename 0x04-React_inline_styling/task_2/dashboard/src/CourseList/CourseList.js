import React from "react";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length == 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
          />
        ) : null}
        {listCourses.map((val, idx) => {
          return (
            <CourseListRow
              isHeader={false}
              textFirstCell={val.name}
              textSecondCell={val.credit}
              key={val.id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  table: {
    width: "80%",
    border: "1.5px solid gray",
    margin: "auto",
    marginTop: "50px",
    padding: "0",
  },
  // th: {
  //   borderBottom: "1px solid gray",
  //   padding: "0px",
  //   margin: "0px",
  //   textAlign: "center",
  // },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
