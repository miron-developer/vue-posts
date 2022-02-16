export const randomNumber = (start = 0, end = 1) => {
  return parseInt(Math.random() * end) - start;
};
