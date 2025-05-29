const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Evolution API funcionando com Express!");
});

// Servir o painel manager
app.use("/manager", express.static("public/manager"));

const port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});