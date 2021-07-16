export const getNumberStringFromPhoneString = (stringNumber: string): string =>
  stringNumber.replace("(", "").replace(")", "").replace("+", "").replace("-", "").split(" ").join("");
