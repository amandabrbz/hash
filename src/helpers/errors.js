export default function validate(values) {
  let errors = {};

  if (values.installments > 12) {
    errors.installments = "Valor máximo de 12 parcelas";
  } else if (values.installments <= 0) {
    errors.installments = "Valor mínimo de 1 parcela";
  } else if (!values.installments) {
    errors.mdr = "Não pode estar em branco";
  }

  if (values.amount > 100000000) {
    errors.amount = "Valor máximo de um milhão";
  } else if (values.amount <= 0) {
    errors.amount = "Não pode ser zero reais";
  } else if (!values.amount) {
    errors.mdr = "Não pode estar em branco";
  }

  if (!values.mdr) {
    errors.mdr = "Não pode estar em branco";
  }

  return errors;
}
