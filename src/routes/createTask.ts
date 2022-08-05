const router = require("express").Router();

import { createTaskController } from "../controllers/createTaskController"

router.post("/", createTaskController)


module.exports = router