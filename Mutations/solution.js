function mutation(arr) {
  let str1 = arr[0].toLowerCase(); 
  let str2 = arr[1].toLowerCase();
  for (let i in str2) {
    if(str1.indexOf(str2[i]) < 0) {
      return false
    }
  }
  return true;
}

mutation(["hello", "hey"]);
