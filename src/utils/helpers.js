export const formatMoney = (inpStr) => {
  const [currency] = parseFloat(inpStr).toFixed(2).toString().split('.');
  return `$ ${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};