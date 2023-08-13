import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const headerBgColor = { backgroundColor: "#deb5b545" };
  const rowBgColor = { backgroundColor: "#f5f5f5ab" };

  return (
    <tr style={isHeader ? headerBgColor : rowBgColor}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className={css(rowsStyles.thCenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(rowsStyles.th)}>{textFirstCell}</th>
            <th className={css(rowsStyles.td)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(rowsStyles.td)}>{textFirstCell}</td>
          <td className={css(rowsStyles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const rowsStyles = StyleSheet.create({
  thCenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: " 1.5px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
  },
  td: {
    paddingLeft: "2px",
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
