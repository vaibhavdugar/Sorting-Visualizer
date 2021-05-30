export const insertionSort = (elements) => {
  const animations = [];
  for (let i = 1; i < elements.length; i++) {
    let current = elements[i];
    let j = i - 1;
    while (j > -1 && current < elements[j]) {
      elements[j + 1] = elements[j];
      animations.push([j, j + 1, current, elements[j + 1]]);
      j--;
    }
    elements[j + 1] = current;
  }
  return animations;
};
