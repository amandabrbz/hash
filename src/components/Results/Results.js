import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";

const Results = () => {
  const { data } = useContext(Context);

  function formatString(value) {
    return Number(value).toLocaleString("pt-br");
  }

  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>

      {data[1] && (
        <p className="box__result--text">
          Amanhã: <strong>R$ {formatString(data[1])},00</strong>
        </p>
      )}
      {data[15] && (
        <p className="box__result--text">
          Em 15 dias:
          <strong>R$ {formatString(data[15])},00</strong>
        </p>
      )}
      {data[30] && (
        <p className="box__result--text">
          Em 30 dias:
          <strong>R$ {formatString(data[30])},00</strong>
        </p>
      )}
      {data[90] && (
        <p className="box__result--text">
          Em 90 dias:
          <strong>R$ {formatString(data[90])},00</strong>
        </p>
      )}
      
    </div>
  );
};

export default Results;
