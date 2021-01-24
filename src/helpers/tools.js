export default function formatIntoCurrency(value) {
  let cleanValue = value + "";
  cleanValue = cleanValue.replace(/([0-9]{2})$/g, ",$1");
  if (cleanValue.length > 6) {
    cleanValue = cleanValue.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  } else if (cleanValue.length === 3) {
    cleanValue = cleanValue.replace(/(\0),([0-9]{2}$)/g, ".$1,$2");
    return `R$ 0${cleanValue}`;
  } else if (cleanValue.length === 1) {
    cleanValue = cleanValue.replace(/(\0),(\0[0-9]$)/g, ".$1,$2");
    return `R$ 0,0${cleanValue}`;
  }

  return `R$ ${cleanValue}`;
}
