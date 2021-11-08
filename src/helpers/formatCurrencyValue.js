export default function formatCurrencyValue(value) {

  let formatedValue = value + "";

  formatedValue = formatedValue.replace(/([0-9]{2})$/g, ",$1");

  if (formatedValue.length > 6)
    formatedValue = formatedValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  if (formatedValue.length === 3) {
    formatedValue = formatedValue.replace(/(\0),([0-9]{2}$)/g, ".$1,$2");
    return `R$ 0${formatedValue}`;
  }

  if (formatedValue.length === 1) {
    formatedValue = formatedValue.replace(/(\0),(\0[0-9]$)/g, ".$1,$2");
    return `R$ 0,0${formatedValue}`;
  }

  return `R$ ${formatedValue}`;
}
