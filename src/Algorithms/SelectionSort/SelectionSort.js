export const selectionSort = (elements) => {
  const animations = [];

  for (let i = 0; i < elements.length; i++) {
    let min = i;
    for (let j = i + 1; j < elements.length; j++) {
      if (elements[j] < elements[min]) {
        min = j;
      }
      animations.push([i, min, false, elements[i], elements[min]]);
    }
    if (min != i) {
      let tmp = elements[i];
      elements[i] = elements[min];
      elements[min] = tmp;
      animations.push([i, min, true, elements[i], elements[min]]);
    }
  }
  return animations;
};
