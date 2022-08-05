const router = require("express").Router();

import { createTaskController } from "../controllers/createTaskController"

export const createTask = router.post("/", createTaskController)

