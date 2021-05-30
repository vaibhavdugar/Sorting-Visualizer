export const generateElementsArr = (N) => {
  return Array.from({ length: N }, () => Math.floor(Math.random() * 100) + 1);
};
