export default function formateAmount(amout) {
  return parseFloat(amout).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
}
