const setTimeoutPromisified = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
    return console.log("hello");
  });
};

const solve = async () => {
  console.log("start");
  const result1 = await setTimeoutPromisified(3000);
  const result2 = await setTimeoutPromisified(3000);
};

solve();
