import React from "react";
import "./BenefitItem.scss";

const BenefitItem = (props) => {
  return (
    <div className="benefitItem">
      <div className="serialNumber"> {props.sno}</div>
      <div className="details">
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <div className="promo">Promo Code: {props.promo}</div>
      </div>
    </div>
  );
};
export default BenefitItem;
