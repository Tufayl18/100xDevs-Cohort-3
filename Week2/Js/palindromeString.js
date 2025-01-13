const palindrome = (string) => {
  const lowerCase = string.toLowerCase();

  let left = 0;
  let right = lowerCase.length - 1;
  while (left < right) {
    if (lowerCase[left] !== lowerCase[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(palindrome("Hello"));
console.log(palindrome("Madam"));
