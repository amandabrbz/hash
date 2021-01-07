import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";

const Results = () => {
  const { data } = useContext(Context);

  function formatString(value) {
    let cleanValue = value + "";
    cleanValue = cleanValue.replace(/([0-9]{2})$/g, ",$1");
    if (cleanValue.length > 6)
      cleanValue = cleanValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return cleanValue;
  }

  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>
      {data[1] ? (
        <p className="box__result--text">
          Amanhã: <strong>R${formatString(data[1])}</strong>
        </p>
      ) : null}
      {data[15] ? (
        <p className="box__result--text">
          Em 15 dias: <strong>R${formatString(data[15])}</strong>
        </p>
      ) : null}
      {data[30] ? (
        <p className="box__result--text">
          Em 30 dias: <strong>R${formatString(data[30])}</strong>
        </p>
      ) : null}
      {data[90] ? (
        <p className="box__result--text">
          Em 90 dias: <strong>R${formatString(data[90])}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default Results;
