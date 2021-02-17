import React from "react";
import { connect } from "react-redux";
import { addFeat } from "../action";
const AdditionalFeature = (props) => {
  const { feature } = props;
  const handleAddClick = () => {
    props.addFeat(feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddClick}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeat })(AdditionalFeature);
