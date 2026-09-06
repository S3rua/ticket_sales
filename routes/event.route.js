const express = require(`express`);
const app = express();
const eventController = require(`../controllers/event.controller`);
const { authorize } = require('../controllers/auth.controller')
const {IsUser, IsAdmin} = require('../middlewares/role-validation');
const { validateEvent } = require('../middlewares/event-validation');

app.use(express.json());


app.get("/", IsUser,eventController.getAllEvent);
app.get("/:key",IsUser, eventController.findEvent);
app.post("/",authorize,IsAdmin,validateEvent, eventController.addEvent);
app.put("/:id", authorize, IsAdmin, validateEvent,eventController.updateEvent);
app.delete("/:id", authorize, IsAdmin, eventController.deleteEvent);

module.exports = app;
