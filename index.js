const express = require("express");
const app = express(); // <- isso define o app
const port = process.env.SERVER_PORT || 8080;

app.get("/", (req, res) => {
  res.send("Evolution API funcionando com Express!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

