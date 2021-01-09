import React, { useState, createContext } from "react";
import "./Box.css";
import Form from "../Form/Form";
import Results from "../Results/Results";

export const Context = createContext({ data: null, setData: () => {}, loading: false, setLoading: () => {} });

const Box = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false)
  
  return (
    <div className="box">
      <Context.Provider value={{ data, setData, loading, setLoading  }}>
        <Form />
        <Results />
      </Context.Provider>
    </div>
  );
};

export default Box;
