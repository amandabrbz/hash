import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";
import Loading from "../Loading/Loading";
import formatIntoCurrency from "../../helpers/tools";

const Results = () => {
  const { data, loading } = useContext(Context);

  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>

      {data && Object.keys(data).length === 0 ? (
        <p className="box__result--text">Digite os campos obrigatórios</p>
      ) : null}

      {loading ? <Loading /> : null }

      {data && data[1] ? (
        <p className="box__result--text">
          Amanhã: <strong>{formatIntoCurrency(data[1])}</strong>
        </p>
      ) : null}
      {data && data[15] ? (
        <p className="box__result--text">
          Em 15 dias: <strong>{formatIntoCurrency(data[15])}</strong>
        </p>
      ) : null}
      {data && data[30] ? (
        <p className="box__result--text">
          Em 30 dias: <strong>{formatIntoCurrency(data[30])}</strong>
        </p>
      ) : null}
      {data && data[90] ? (
        <p className="box__result--text">
          Em 90 dias: <strong>{formatIntoCurrency(data[90])}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default Results;
