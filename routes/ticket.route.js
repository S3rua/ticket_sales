const express = require("express")
const app = express()
app.use(express.json())


const ticketController = require("../controllers/ticket.controller")

// READ
app.get("/", ticketController.getAllTicket)
app.get("/:id", ticketController.findTicket)

// CREATE
app.post("/", ticketController.addTicket)

// UPDATE
app.put("/:id", ticketController.updateTicket)

// DELETE
app.delete("/:id", ticketController.deleteTicket)

module.exports = app