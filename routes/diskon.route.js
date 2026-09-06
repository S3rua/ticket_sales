const express = require("express");
const router = express.Router();

const diskonController = require("../controllers/diskon.controller");
const { authorize } = require('../controllers/auth.controller')
const {IsUser, IsAdmin} = require('../middlewares/role-validation');
const { validateDiskon } = require('../middlewares/diskon-validation');

router.get("/", authorize, diskonController.getAllDiskon);
router.post("/", authorize, IsAdmin, validateDiskon, diskonController.addDiskon);
router.put("/:id", authorize, IsAdmin, validateDiskon, diskonController.updateDiskon);
router.delete("/:id", authorize, IsAdmin, diskonController.deleteDiskon);

module.exports = router;