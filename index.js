const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(routes);

app.get("/", (req, res) => {
  res.render("frutas");
});

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
});
