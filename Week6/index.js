const express = require("express");
require("dotenv").config();
const app = express();
const router = require("./routes/routes.js");

app.use(express.json());
app.use("/api/", router);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log("Running at", PORT);
});
