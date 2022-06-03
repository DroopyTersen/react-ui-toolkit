export const truncateCurrencyNumber = (value: string | number): string | number => {
  return truncateNumber(value, 2);
};

export const truncatePercentNumber = (value: string | number): string | number => {
  return truncateNumber(value, 2);
};

export const truncateNumber = (value: string | number, digits: number): string | number => {
  const regex = new RegExp("^[+-]?\\d*\\.\\d{1," + digits + "}");
  const rv = value.toString().match(regex);
  return rv ? rv[0] : value;
};
