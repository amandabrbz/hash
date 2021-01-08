import React, { useState, useEffect, useContext } from "react";
import IntlCurrencyInput from "react-intl-currency-input";
import { POST } from "../../API/api";
import { currencyConfig } from "../../config/CurrencyConfig";
import { toastConfig } from "../../config/Toast";
import { Context } from "../Box/Box";
import { ToastContainer, toast } from "react-toastify";
import "./Form.css";
import "react-toastify/dist/ReactToastify.css";
import validate from "../../helpers/errors";

const Form = () => {
  const { setData } = useContext(Context);

  const [active, setActive] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [error, setError] = useState({});
  const [days, setDays] = useState([]);
  const [forms, setForms] = useState({
    amount: 0,
    installments: "",
    mdr: "",
  });

  useEffect(() => {
    if (
      (forms.amount !== 0) &
      (forms.installments !== "") &
      (forms.mdr !== "")
    ) {
      handlePOST(forms);
    }
    // eslint-disable-next-line
  }, [forms]);

  useEffect(() => {
    if (days.length !== -1) {
      setForms({ ...forms, days: days });

      if(days.length === 0) {
        const {days, ...withoutDays} = forms
        setForms(withoutDays)
      }
    }
    // eslint-disable-next-line
  }, [days]);

  function handleChecked({ target }) {
    const { value, checked } = target;

    if (checked) {
      if (!days.includes(value)) {
        setDays([...days, value]);
      }
    } else {
      setDays(days.filter((day) => day !== value));
    }
  }

  function handleChange({ target }) {
    let { name, value } = target;

    if (name === "amount") {
      const cleanValue = value.replaceAll(/[^0-9]/g, "");
      value = cleanValue;
    }

    if (error) validate(forms);
    setForms({ ...forms, [name]: value });
  }

  function handleOnBlur() {
    setError(validate(forms));
  }

  async function handlePOST(forms) {
    const { url, options } = POST(forms);

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      setData({ ...json });

      if (response.status === 404) {
        toast.error(
          "Não foi possível realizar o cálculo tente novamente.",
          toastConfig
        );
      }
    } catch (error) {
      toast.error(
        "Não foi possível realizar o cálculo tente novamente.",
        toastConfig
      );
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
            onBlur={handleOnBlur}
            placeholder="R$ 0,00"
            className={error.amount && "error"}
            inputMode="numeric"
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
            inputMode="numeric"
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
            inputMode="numeric"
            required
          />
          {error.mdr && <small className="error">{error.mdr}</small>}
        </fieldset>
        <fieldset>
          <dt
            onClick={(_) => setActive(!active)}
            className={active ? "active" : null}
          >
            Filtrar por período?
          </dt>
          <dd>
            <div className="box__form--checkfield">
              {[1, 15, 30, 90].map((item) => (
                <label htmlFor={item} key={item}>
                  {item === 1 ? "Amanhã" : item + " dias"}
                  <input
                    type="checkbox"
                    name={item}
                    id={item}
                    value={item}
                    onChange={handleChecked}
                  />
                </label>
              ))}
            </div>
          </dd>
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
