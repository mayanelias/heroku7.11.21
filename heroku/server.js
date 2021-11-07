const express = require("express"),
  app = express();
  require("dotenv").config();  
  const PORT = process.env.PORT;
  app.get("*", (req, res) => {
    res.send(`<h1>welcome!!!</h1>`);
  });
  app.listen(PORT, () => {
    console.log(`app is listening on: ${PORT}`);
  });