const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Server is working good woooooofffff! :)" });
});

app.listen(3700, () => {
  console.log("Express is Connected on port 3000");
});
