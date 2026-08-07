const express = require("express")
const app = express()

const seatController = require("../controllers/seat.controller")

app.get("/",seatController.getAllSeat)
app.get("/:key",seatController.findSeat)
app.post("/",seatController.addSeat)
app.put("/:id",seatController.updateSeat)
app.delete("/:id",seatController.deleteSeat)

module.exports=app