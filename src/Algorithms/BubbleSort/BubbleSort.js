export const bubbleSort = (elements) => {
  const newElementsArr = elements.slice();
  const animations = [];
  for (var i = 0; i < newElementsArr.length; i++) {
    for (var j = 0; j < newElementsArr.length - i - 1; j++) {
      if (newElementsArr[j] > newElementsArr[j + 1]) {
        var temp = newElementsArr[j];
        newElementsArr[j] = newElementsArr[j + 1];
        newElementsArr[j + 1] = temp;
        animations.push([
          j,
          j + 1,
          true,
          newElementsArr[j],
          newElementsArr[j + 1],
        ]);
      } else {
        animations.push([
          j,
          j + 1,
          false,
          newElementsArr[j],
          newElementsArr[j + 1],
        ]);
      }
    }
  }
  console.log(animations);
  return animations;
};
