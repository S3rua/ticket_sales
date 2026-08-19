const express = require("express")
const app = express()
app.use(express.json())


const ticketController = require("../controllers/ticket.controller")

// READ
app.get("/", ticketController.getAllTicket)
app.get("/:id", ticketController.ticketByID)

// CREATE
app.post("/", ticketController.addTicket)

module.exports = app