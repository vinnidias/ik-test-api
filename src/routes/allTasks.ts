const router = require("express").Router();

import { getAllTasksController } from "../controllers/getAllTasksController";

export const  allTasks = router.get("/", getAllTasksController)