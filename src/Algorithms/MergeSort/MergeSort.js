export const mergeSort = (elements) => {
  const animations = [];

  const merge = (arr, left, middle, right) => {
    const n1 = middle - left + 1;
    const n2 = right - middle;
    const leftArr = new Array(n1);
    const rightArr = new Array(n2);

    for (let i = 0; i < n1; i++) {
      leftArr[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
      rightArr[j] = arr[middle + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        animations.push([k, leftArr[i]]);
        i++;
      } else {
        arr[k] = rightArr[j];
        animations.push([k, rightArr[j]]);
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = leftArr[i];
      animations.push([k, leftArr[i]]);
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = rightArr[j];
      animations.push([k, rightArr[j]]);
      j++;
      k++;
    }
  };

  const mergeSortHelper = (arr, left, right) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      mergeSortHelper(arr, left, middle);
      mergeSortHelper(arr, middle + 1, right);
      merge(arr, left, middle, right);
    }
  };

  const newElementsArr = elements.slice();
  mergeSortHelper(newElementsArr, 0, newElementsArr.length - 1);
  console.log(animations);
  return animations;
};
