import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
        <button>{operator}</button>
    </div>
  );
};

export default OperatorButton;
