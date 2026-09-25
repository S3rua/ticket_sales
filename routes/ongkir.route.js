/** load library express */
const express = require(`express`);
const app = express();

app.use(express.json());

const ongkirController = require(`../controllers/ongkir.controller`);


app.get("/",ongkirController.getAllOngkir)
app.post("/",ongkirController.addOngkir)
app.put("/:id",ongkirController.updateOngkir)
app.delete("/:id", ongkirController.deleteOngkir)


/** export app in order to load in another file */
module.exports = app;
