function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for (let key in arr) {
    console.log(!false)
    if (!!arr[key]) {
      newArr.push(arr[key]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
