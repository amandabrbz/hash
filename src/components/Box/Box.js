import React, { useState, createContext } from "react";
import "./Box.css";
import Form from "../Form/Form";
import Results from "../Results/Results";

export const Context = createContext({ data: null, setData: () => {} });

const Box = () => {
  const [data, setData] = useState({});
  
  return (
    <div className="box">
      <Context.Provider value={{ data, setData }}>
        <Form />
        <Results />
      </Context.Provider>
    </div>
  );
};

export default Box;
