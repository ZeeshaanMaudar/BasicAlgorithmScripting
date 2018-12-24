function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr = str;
  if(str.length > num) {
    newStr = str.slice(0, num) + '...';
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
