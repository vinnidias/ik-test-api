const router = require("express").Router();

import { updateTaskById } from "../controllers/updateTaskByIdController";

export const updateTask = router.patch("/:id", updateTaskById)

