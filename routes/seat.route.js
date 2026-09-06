const express = require("express")
const app = express()

const seatController = require("../controllers/seat.controller")
const { authorize } = require('../controllers/auth.controller')
const {IsUser, IsAdmin} = require('../middlewares/role-validation');
const { validateSeat } = require('../middlewares/seat-validation');

app.get("/",authorize,seatController.getAllSeat)
app.get("/:key",authorize,seatController.findSeat)
app.post("/",authorize,IsAdmin,validateSeat,seatController.addSeat)
app.put("/:id",authorize,IsAdmin,validateSeat,seatController.updateSeat)
app.delete("/:id",authorize,IsAdmin,seatController.deleteSeat)

module.exports=app