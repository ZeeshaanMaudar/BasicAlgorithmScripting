function factorialize(num) {
  let factorialized = 1;
  for (let i = 2; i <= num; i++) {
    factorialized *= i;
  }
  return factorialized;
}

factorialize(5);
