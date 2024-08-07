import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";
import Cards from "../Cards/Cards";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Score</h3>
        <Cards />
      </div>
    </div>
  );
};

export default RightSide;
