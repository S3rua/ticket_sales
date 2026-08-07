const express = require("express")
const app = express()

const ticketController = require("../controllers/ticket.controller")

// READ
app.get("/", ticketController.getAllTicket)

// CREATE
app.post("/", ticketController.addTicket)

// UPDATE
app.put("/:id", ticketController.updateTicket)

// DELETE
app.delete("/:id", ticketController.deleteTicket)

module.exports = app