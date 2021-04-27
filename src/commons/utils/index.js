import numbro from "numbro";

export const currencyFormat = (number) =>
  numbro(number).format({ thousandSeparated: true });

export const findCheckedValue = (arr, v) => {
  return arr.includes(v);
};

export const deleteChecked = (arr, v) => {
  return arr.filter((val) => val !== v);
};
