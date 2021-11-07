const express = require("express"),
  app = express(),
  PORT = 8080;
  app.get("*", (req, res) => {
    res.send(`<h1>welcome!!!</h1>`);
  });
  app.listen(PORT, () => {
    console.log(`app is listening on: ${PORT}`);
  });