export const quickSort = (elements) => {
  const animations = [];

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        animations.push([i, j, arr[i], arr[j]]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    animations.push([i + 1, high, arr[i + 1], arr[high]]);
    return i + 1;
  };

  const quickSortHelper = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSortHelper(arr, low, pivotIndex - 1);
      quickSortHelper(arr, pivotIndex + 1, high);
    }
  };

  const newElementsArr = elements.slice();
  quickSortHelper(newElementsArr, 0, newElementsArr.length - 1);
  console.log(animations);
  return animations;
};
