const divide = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b == 0) {
      reject("Error");
    } else {
      resolve(a / b);
    }
  });
};

const promise = divide(10, 2).then((result) => {
  console.log(result);
});

//-------------------------------------------------------------------------------//

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (!a && !b) {
      reject("Provide input");
    } else {
      resolve(a + b);
    }
  });
};

const callAdd = add(1, 2).then((result) => {
  console.log(result);
});
