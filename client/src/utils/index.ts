export const removeUnit = (str: string, numChar: number = 2) => {
  return parseFloat(str.substring(0, str.length - numChar));
};
