const fs = require("fs");

const readFile = (fileName, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const result = readFile("AsyncJs/exp.txt", "utf-8");
result.then((response) => {
  console.log(response);
});

// -------------------------------------------------------------

const readFileAsync = async () => {
  const output = await readFile("AsyncJs/exp.txt", "utf-8");
  console.log("Async output : ", output);
};

readFileAsync();
