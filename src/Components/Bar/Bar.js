import React from "react";
import "./Bar.css";

const Bar = ({ size, numberOfElements, idx }) => {
  const binSize = 100 / numberOfElements;
  return (
    <div
      id={`bar-${idx}`}
      style={{
        height: `${size}%`,
        width: `${binSize}%`,
      }}
      className="bar"
    ></div>
  );
};

export default Bar;
