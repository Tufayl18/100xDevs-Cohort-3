const largestElement = (numberArray) => {
  let max = numberArray[0];

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > max) {
      max = numberArray[i];
    }
  }
  return max;
};

const input = [7, 10, 56, 19, 4];
// output = 56
const result = largestElement(input);
console.log("Largest Element is ", result);
