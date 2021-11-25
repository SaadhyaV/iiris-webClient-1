import React from "react";
import PropTypes from "prop-types";

const LinearGradient = (props) => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: "auto",
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20,
  };
  return (
    <div className="">
      <div style={boxStyle} className="flex flex-row">
        <span className="flex-1">{data.min}</span>
        <span className="fill"></span>
        <span className="items-end justify-end">{data.max}</span>
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className="mt-8"></div>
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LinearGradient;
