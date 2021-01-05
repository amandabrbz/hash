import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";

const Results = () => {
  const { data } = useContext(Context);

  function formatString(value) {
    let cleanValue = value + "";
    cleanValue = cleanValue.replace(/([0-9]{2})$/g, ",$1");
    if (cleanValue.length > 6) cleanValue = cleanValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return cleanValue;
  }

  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>
      <p className="box__result--text">
        Amanhã:{" "}
        <strong>{data[1] ? "R$ " + formatString(data[1]) : "R$ 0,00"}</strong>
      </p>
      <p className="box__result--text">
        Em 15 dias:{" "}
        <strong>{data[15] ? "R$ " + formatString(data[15]) : "R$ 0,00"}</strong>
      </p>
      <p className="box__result--text">
        Em 30 dias:{" "}
        <strong>{data[30] ? "R$ " + formatString(data[30]) : "R$ 0,00"}</strong>
      </p>
      <p className="box__result--text">
        Em 90 dias:{" "}
        <strong>{data[90] ? "R$ " + formatString(data[90]) : "R$ 0,00"}</strong>
      </p>
    </div>
  );
};

export default Results;
