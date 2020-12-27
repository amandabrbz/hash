import React, { useState } from "react";
import "./Form.css";

const Form = ( { setData }) => {
  const [forms, setForms] = useState({
    amount: "",
    installments: "",
    mdr: "",
  });

  const [smallInfo, setSmallInfo] = useState(false);
  const [enter, setEnter] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;
    setForms({ ...forms, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://hash-front-test.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(forms),
    })
      .then(function (response) {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then(function (data) {
        setData({ ...data });
      })
      .catch(function (error) {
        alert("Não foi possível fazer o cálculo, tente novamente.");
      });
  }

  return (
    <>
      <div className="box__form">
        <h1 className="box__form--title">Simule sua Antecipação</h1>
        <form className="box__form--form" autoComplete="off" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="amount">Informe o valor da venda*</label>
            <input
              type="text"
              name="amount"
              value={forms.amount}
              onChange={handleChange}
              placeholder="R$ 0,00"
              required
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
              placeholder="0x"
              value={forms.installments}
              onChange={handleChange}
              onFocus={() => setSmallInfo(true)}
              required
            />
            {smallInfo && <small>Máximo de 12 parcelas</small>}
          </fieldset>
          <fieldset>
            <label htmlFor="mdr">Informe o percentual de MDR*</label>
            <input
              type="text"
              name="mdr"
              placeholder="0%"
              value={forms.mdr}
              onChange={handleChange}
              onFocus={() => setEnter(true)}
              required
            />
            {enter && <small>Aperte Enter</small>}
          </fieldset>
          <button type="submit" style={{"display": "none"}} >Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Form;
