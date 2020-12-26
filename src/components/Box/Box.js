import React, { useState } from "react";
import "./Box.css";
import Form from "../Form/Form";
import Results from "../Results/Results";

const Box = () => {
  const [data, setData] = useState({});
  return (
    <div className="box">
      <Form setData={setData} />
      <Results data={data} />
    </div>
  );
};

export default Box;
