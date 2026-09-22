const express = require(`express`);
const app = express();
const eventController = require(`../controllers/event.controller`);
const { authorize } = require('../controllers/auth.controller')
const {IsUser, IsAdmin} = require('../middlewares/role-validation');
const { validateEvent } = require('../middlewares/event-validation');

app.use(express.json());


app.get("/", authorize, eventController.getAllEvent);
app.get("/:key",authorize,  eventController.findEvent);
app.post("/",authorize,IsAdmin, eventController.addEvent);
app.put("/:id", authorize, IsAdmin, validateEvent,eventController.updateEvent);
app.delete("/:id", authorize, IsAdmin, eventController.deleteEvent);

module.exports = app;
