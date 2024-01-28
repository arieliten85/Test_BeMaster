function getOddNumbersUpTo(num) {
  if (num < 1) {
    return "Please enter a positive integer.";
  }

  let oddNumbers = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  return oddNumbers;
}
console.log(getOddNumbersUpTo(9));
