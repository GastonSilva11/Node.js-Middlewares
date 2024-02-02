const express = require("express");
const routes = express.Router();
const frutas = ["Manzana", "Peras", "Frutillas"];

routes.get("/", (req, res) => {
  res.redirect("/frutas"); //para que nos lleve a la vista de /frutas, ya que no tiene
});

routes.get("/frutas", (req, res) => {
  res.render("frutas", { titulo: "Frutas", frutas });
});

routes.post("/frutas", (req, res) => {
  frutas.push(req.body.fruta);
  console.log(frutas);
  return res.redirect("/frutas");
});

module.exports = routes;
