import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [smallInfo, setSmallInfo] = useState(false);

  fetch("https://hash-front-test.herokuapp.com/", {
    method: "POST",
    body: JSON.stringify({
      amount: amount,
      installments: installments,
      mdr: mdr,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      alert("Não foi possível fazer o cálculo, tente novamente.");
      console.warn("Não foi possível fazer o cálculo, tente novamente.", error);
    });

  return (
    <div className="box__form">
      <h1 className="box__form--title">Simule sua Antecipação</h1>
      <form className="box__form--form" autoComplete="off">
        <fieldset>
          <label htmlFor="amount">Informe o valor da venda*</label>
          <input
            type="text"
            name="amount"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="installments">Em quantas parcelas*</label>
          <input
            type="number"
            name="installments"
            max="12"
            min="0"
            step="1"
            value={installments}
            required
            onChange={(e) => setInstallments(e.target.value)}
            onClick={() => setSmallInfo(true)}
          />
          {smallInfo && <small>Máximo de 12 parcelas</small>}
        </fieldset>
        <fieldset>
          <label htmlFor="mdr">Informe o percentual de MDR*</label>
          <input
            type="text"
            name="mdr"
            value={mdr}
            required
            onChange={(e) => setMdr(e.target.value)}
          />
        </fieldset>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
