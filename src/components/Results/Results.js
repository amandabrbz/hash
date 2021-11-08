import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";
import Loading from "../Loading/Loading";
import formatCurrencyValue from "../../helpers/formatCurrencyValue";

const Results = () => {
  const { data, loading } = useContext(Context);

  return (
    <aside className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>

      {loading ? <Loading /> : null }

      {!data && (
        <p className="box__result--text">Digite os campos obrigatórios</p>
      )}
      
      {data && Object.entries(data).map(([key, value]) => (
        <p className="box__result--text">
          {key === '1' ? `Amanhã` :  `Em ${key} dias`}: <strong>{formatCurrencyValue(value)}</strong>
        </p>
      ))}

    </aside>
  );
};

export default Results;
