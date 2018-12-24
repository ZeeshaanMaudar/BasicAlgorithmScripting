function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  let newArr = arr.sort((a, b) => a - b);
  let index = newArr.indexOf(num);
  return index;
}

getIndexToIns([40,50, 60, 30], 30);
