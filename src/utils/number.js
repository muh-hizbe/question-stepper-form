export const _renderNumeric = (value = 0, maxFragtionDigits = 0) => {
  let number = Number(value);
  return number?.toLocaleString("id-ID", {
    maximumFractionDigits: maxFragtionDigits,
    minimumFractionDigits: 0,
    minimumIntegerDigits: 2
  });
};
