export const currencyFormat = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const findCheckedValue = (arr, v) => {
  return arr.includes(v);
};

export const deleteChecked = (arr, v) => {
  return arr.filter((val) => val !== v);
};
