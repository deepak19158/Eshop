import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="boxFrame">
        <span className="box1" style={{ "--i": 1 }}></span>
        <span className="box2" style={{ "--i": 2 }}></span>
        <span className="box3" style={{ "--i": 3 }}></span>
      </div>
    </div>
  );
};

export default Loader;
