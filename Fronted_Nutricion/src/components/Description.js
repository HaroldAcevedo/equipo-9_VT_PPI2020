import React from "react";

function Description(props) {
  const { title, description } = props;
  return (
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{description}</p>
    </div>
  );
}
export default Description;
