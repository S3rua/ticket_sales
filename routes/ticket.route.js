const express = require("express")
const app = express()
app.use(express.json())


const ticketController = require("../controllers/ticket.controller")
const { authorize } = require("../controllers/auth.controller")
const { validateTicket } = require("../middlewares/ticket-validation")


app.get("/", authorize, ticketController.getAllTicket)
app.get("/:id", authorize, ticketController.ticketByID)
app.post("/", authorize, validateTicket, ticketController.addTicket)

module.exports = app