const router = require("express").Router();

import { deleteTaskById } from "../controllers/deleteTaskByIdController";

export const deleteTask = router.delete("/:id", deleteTaskById);

