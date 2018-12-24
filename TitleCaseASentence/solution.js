function titleCase(str) {
  let lowerCase = str.toLowerCase();
  let newArr = lowerCase.split(' ');
  let transformedArr = [];
  for(let i = 0; i < newArr.length; i++) {
    transformedArr.push(newArr[i].replace(newArr[i][0], newArr[i].charAt(0).toUpperCase()))
  }
  return transformedArr.join(' ');
}

titleCase("I'm a little tea pot");
