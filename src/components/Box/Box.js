import React from "react";
import "./Box.css";
import Form from "../Form/Form";
import Results from "../Results/Results";

const Box = () => {
  return (
    <div className="box">
      <Form />
      <Results />
    </div>
  );
};

export default Box;
