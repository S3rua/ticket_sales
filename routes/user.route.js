/** load library express */
const express = require(`express`);
const app = express();
const { authorize } = require('../controllers/auth.controller')
const {IsUser, IsAdmin, IsUserOrAdmin} = require('../middlewares/role-validation')

app.use(express.json());

const userController = require(`../controllers/user.controller`);
const { midOne } = require("../middlewares/simple-middleware");
const { validateUser } = require("../middlewares/user-validation")


app.get("/", authorize, userController.getAllUser)
app.get("/:key", authorize, IsAdmin, userController.findUser)
app.post("/", authorize, IsAdmin, validateUser, userController.addUser)
app.put("/:id", authorize,IsUserOrAdmin, validateUser, userController.updateUser)
app.delete("/:id", authorize, IsAdmin, userController.deleteUser)


/** export app in order to load in another file */
module.exports = app;
