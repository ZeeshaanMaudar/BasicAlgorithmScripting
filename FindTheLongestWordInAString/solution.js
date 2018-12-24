function findLongestWordLength(str) {
  let longestStr = 0;
  let newArr = str.split(' ');
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i].length > longestStr) {
      longestStr = newArr[i].length;
    }
  }
  return longestStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
