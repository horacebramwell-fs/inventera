/* FORMULA CALCULATION */
export const formulaCalc = (formData) => {
  const { containerFill, fragranceLoad } = formData;

  let waxAmount = 0;
  let fragranceAmount = 0;

  // convert fragrance load to decimal
  const fragranceLoadDecimal = fragranceLoad / 100;

  // calculate fragrance amount
  fragranceAmount = containerFill * fragranceLoadDecimal;

  // calculate wax amount
  waxAmount = containerFill - fragranceAmount;

  return {
    fragranceAmount,
    waxAmount,
  };
};
