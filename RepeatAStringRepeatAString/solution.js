function repeatStringNumTimes(str, num) {
  // repeat after me
  let newStr = '';
  if(num > 0) {
    for(let i = 1; i <= num; i++) {
      newStr += str;
    }
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
