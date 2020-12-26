import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = (props) => {
  const [forms, setForms] = useState({
    amount: "",
    installments: "",
    mdr: "",
  });

  const [smallInfo, setSmallInfo] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;
    setForms({ ...forms, [name]: value });
  }

  function handleSubmit() {
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
        props.setData({ ...data });
      })
      .catch(function (error) {
        alert("Não foi possível fazer o cálculo, tente novamente.");
      });
  }

  useEffect(() => {
    handleSubmit();
  }, [forms.mdr]);

  return (
    <>
      <div className="box__form">
        <h1 className="box__form--title">Simule sua Antecipação</h1>
        <form className="box__form--form" autoComplete="off">
          <fieldset>
            <label htmlFor="amount">Informe o valor da venda*</label>
            <input
              type="text"
              name="amount"
              value={forms.amount}
              onChange={handleChange}
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
              value={forms.installments}
              onChange={handleChange}
              required
              onFocus={() => setSmallInfo(true)}
            />
            {smallInfo && <small>Máximo de 12 parcelas</small>}
          </fieldset>
          <fieldset>
            <label htmlFor="mdr">Informe o percentual de MDR*</label>
            <input
              type="text"
              name="mdr"
              value={forms.mdr}
              onChange={handleChange}
              required
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
