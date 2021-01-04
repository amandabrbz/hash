import React, {useContext} from "react";
import "./Results.css";
import { Context } from '../Box/Box';

const Results = () => {
  const {data} = useContext(Context);
  
  return (
    <div className="box__result">
      <h2 className="box__result--title">Você receberá:</h2>
      <p className="box__result--text">
        Amanhã: <strong>R$ {data[1] ? Number((data[1])).toLocaleString('pt-br') : 0},00</strong>
      </p>
      <p className="box__result--text">
        Em 15 dias: <strong>R$ {data[15] ? Number((data[15])).toLocaleString('pt-br') : 0},00</strong>
      </p>
      <p className="box__result--text">
        Em 30 dias: <strong>R$ {data[30] ? Number((data[30])).toLocaleString('pt-br') : 0},00</strong>
      </p>
      <p className="box__result--text">
        Em 90 dias: <strong>R$ {data[90] ? Number((data[90])).toLocaleString('pt-br') : 0},00</strong>
      </p>
    </div>
  );
};

export default Results;
