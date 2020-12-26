import React from "react";
import "./Results.css";

const Results = () => {
  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>
      <p className="box__result--text">
        Amanhã: <strong>R$ 0,00</strong>
      </p>
      <p className="box__result--text">
        Em 15 dias: <strong>R$ 0,00</strong>
      </p>
      <p className="box__result--text">
        Em 30 dias: <strong>R$ 0,00</strong>
      </p>
      <p className="box__result--text">
        Em 90 dias: <strong>R$ 0,00</strong>
      </p>
    </div>
  );
};

export default Results;
