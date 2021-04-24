import numbro from "numbro";

export const currencyFormat = (number) =>
  numbro(number).format({ thousandSeparated: true });
