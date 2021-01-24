import React, { useContext } from "react";
import "./Results.css";
import { Context } from "../Box/Box";
import Loading from "../Loading/Loading";
import formatString from "../../helpers/tools";

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
          Amanhã: <strong>R${formatString(data[1])}</strong>
        </p>
      ) : null}
      {data && data[15] ? (
        <p className="box__result--text">
          Em 15 dias: <strong>R${formatString(data[15])}</strong>
        </p>
      ) : null}
      {data && data[30] ? (
        <p className="box__result--text">
          Em 30 dias: <strong>R${formatString(data[30])}</strong>
        </p>
      ) : null}
      {data && data[90] ? (
        <p className="box__result--text">
          Em 90 dias: <strong>R${formatString(data[90])}</strong>
        </p>
      ) : null}
    </div>
  );
};

export default Results;
