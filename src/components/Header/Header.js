import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return <p className="result">{props.result}</p>;
}

Header.propTypes = {
  // value to be displayed
  result: PropTypes.string
};
