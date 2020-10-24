export default function formateDate(dateFormat) {
  const data = new Date(dateFormat);

  return data.toLocaleDateString('pt-BR');
}
