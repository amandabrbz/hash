import React, { useState, useEffect, useContext } from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import { POST } from "../../API/api";
import { currencyConfig } from "../../config/CurrencyConfig";
import { Context } from "../Box/Box";
import "./Form.css";

const Form = () => {
  const { setData } = useContext(Context);

  const [showInfo, setShowInfo] = useState(false);
  const [forms, setForms] = useState({
    amount: 0,
    installments: "",
    mdr: "",
    days: [],
  });

  useEffect(() => {
    if (forms.amount !== "" && forms.installments !== "" && forms.mdr !== "") {
      handlePOST(forms);
    }
    // eslint-disable-next-line
  }, [forms]);

  function handleChecked(value) {
    forms.days.push(value);
    console.log(forms.days);
  }

  function handleChange({ target }, maskValue) {
    let { name, value } = target;

    if (name === "amount") value = maskValue;

    setForms({ ...forms, [name]: value });
  }

  async function handlePOST(forms) {
    const { url, options } = POST(forms);

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      setData({ ...json });
    } catch (error) {
      alert("Não foi possível realizar o cálculo tente novamente.");
      console.error(error);
    }
  }

  return (
    <div className="box__form">
      <h1 className="box__form--title">Simule sua Antecipação</h1>
      <form className="box__form--form" autoComplete="off">
        <fieldset>
          <label htmlFor="amount">Informe o valor da venda*</label>
          <IntlCurrencyInput
            currency="BRL"
            config={currencyConfig}
            name="amount"
            id="amount"
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
            id="installments"
            max="12"
            min="0"
            step="1"
            placeholder="0x"
            value={forms.installments}
            onChange={handleChange}
            onFocus={() => setShowInfo(true)}
            required
          />
          {showInfo && <small>Máximo de 12 parcelas</small>}
        </fieldset>
        <fieldset>
          <label htmlFor="mdr">Informe o percentual de MDR*</label>
          <input
            type="number"
            name="mdr"
            id="mdr"
            className="mdr"
            min="0"
            step="0.1"
            placeholder="0%"
            value={forms.mdr}
            onChange={handleChange}
            required
          />
        </fieldset>
        <fieldset>
          <h6 className="box__form--subtitle">Período que quer receber:</h6>
          <div className="box__form--checkfield">
            <label htmlFor="1">
              Amanhã
              <input
                type="checkbox"
                name="1"
                id="1"
                value={1}
                onChange={handleChange}
                checked={handleChecked(1)}
              />
            </label>
            <label htmlFor="15">
              15 dias
              <input
                type="checkbox"
                name="15"
                id="15"
                value={15}
                onChange={handleChange}
                checked={handleChecked(15)}
              />
            </label>
            <label htmlFor="30">
              30 dias
              <input
                type="checkbox"
                name="30"
                id="30"
                value={30}
                onChange={handleChange}
                checked={handleChecked(30)}
              />
            </label>
            <label htmlFor="90">
              90 dias
              <input
                type="checkbox"
                name="90"
                id="90"
                value="90"
                checked={handleChecked(90)}
                onChange={handleChange}
              />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
