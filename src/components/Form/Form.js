import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="box__form">
      <h1 className="box__form--title">Simule sua Antecipação</h1>
      <form className="box__form--form" autoComplete="off">
        <fieldset>
          <label htmlFor="sellValue">Informe o valor da venda*</label>
          <input type="text" name="sellValue" id="sellValue" required />
        </fieldset>
        <fieldset>
          <label htmlFor="quote">Em quantas parcelas*</label>
          <input type="number" name="quote" id="quote" max="12" min="0" step="1" required />
          <small>Máximo de 12 parcelas</small>
        </fieldset>
        <fieldset>
          <label htmlFor="percentage">Informe o percentual de MDR*</label>
          <input type="text" name="percentage" id="percentage" required />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
