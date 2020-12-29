import React, { useState, useEffect } from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import "./Form.css";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

const Form = ({ setData }) => {
  const [smallInfo, setSmallInfo] = useState(false);
  const [forms, setForms] = useState({
    amount: "",
    installments: "",
    mdr: "",
  });

  function handleChange({ target }, maskValue) {
    let { name, value } = target;

    if (name === "amount") value = maskValue;
    setForms({ ...forms, [name]: value });
  }

  useEffect(() => {
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

        console.log(data);
      })
      .catch(function (error) {
        alert("Não foi possível fazer o cálculo, tente novamente.");
      });
    // eslint-disable-next-line
  }, [forms]);

  return (
    <>
      <div className="box__form">
        <h1 className="box__form--title">Simule sua Antecipação</h1>
        <form className="box__form--form" autoComplete="off">
          <fieldset>
            <label htmlFor="amount">Informe o valor da venda*</label>
            <IntlCurrencyInput
              currency="BRL"
              config={currencyConfig}
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
              type="number"
              name="mdr"
              className="mdr"
              min="0"
              step="0.1"
              placeholder="0%"
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
