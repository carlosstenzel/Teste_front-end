export default function formateAmout(amout) {
  return parseFloat(amout).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
}
