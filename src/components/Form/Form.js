import React, { useState, useEffect, useContext } from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import { POST } from "../../API/api";
import { currencyConfig } from "../../config/CurrencyConfig";
import { Context } from "../Box/Box";
import "./Form.css";

const Form = () => {
  const { setData } = useContext(Context);

  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState({});
  const [forms, setForms] = useState({
    amount: 0,
    installments: "",
    mdr: "",
  });

  useEffect(() => {
    if (forms.amount !== "" && forms.installments !== "" && forms.mdr !== "") {
      handlePOST(forms);
    }
    // eslint-disable-next-line
  }, [forms]);

  function handleChange({ target }) {
    let { name, value } = target;

    if (name === "amount") {
      const cleanValue = value
        .replaceAll(".", "")
        .replaceAll(",", "")
        .replace("R$ ", "");
      value = cleanValue;
    }
    setForms({ ...forms, [name]: value });
  }

  function handleOnBlur() {
    setError(validate(forms));
  }

  function validate(values) {
    let errors = {};

    if (values.installments > 12) {
      errors.installments = "Máximo de 12 parcelas";
    } else if (values.installments <= 0) {
      errors.installments = "Mínimo de 1 parcela";
    } else if (!values.installments) {
      errors.installments = "Não pode estar em branco";
    }

    if (values.amount > 100000000) {
      errors.amount = "Máximo de um milhão";
    } else if (values.amount <= 0) {
      errors.amount = "Campo inválido";
    } else if (!values.amount) {
      errors.amount = "Não pode estar em branco";
    }

    if (!values.mdr) {
      errors.mdr = "Não pode estar em branco";
    }

    return errors;
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
              id="amount"
              value={forms.amount}
              onChange={handleChange}
              onBlur={handleOnBlur}
              placeholder="R$ 0,00"
              className={error.amount && "error"}
              autoFocus
              required
            />
            {error.amount && <small className="error">{error.amount}</small>}
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
              onBlur={handleOnBlur}
              onFocus={() => setShowInfo(true)}
              className={error.installments && "error"}
              required
            />
            {showInfo && <small>Máximo de 12 parcelas</small>}
            {error.installments && (
              <small className="error">{error.installments}</small>
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="mdr">Informe o percentual de MDR*</label>
            <input
              type="number"
              name="mdr"
              id="mdr"
              min="0"
              step="0.1"
              placeholder="0%"
              value={forms.mdr}
              onChange={handleChange}
              onBlur={handleOnBlur}
              className={error.mdr ? "error mdr" : "mdr"}
              required
            />
            {error.mdr && <small className="error">{error.mdr}</small>}
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
