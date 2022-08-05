import express from "express";

import { allTasks } from "./routes/allTasks";
import { createTask } from "./routes/createTask";
import { updateTask } from "./routes/updateTask";
import { deleteTask } from "./routes/deleteTask";

const app = express();

const port = 3330

app.listen(port, ()=> console.log(`server is runnig on port: ${port}`))

app.use(express.json());

app.use("/task", createTask)

app.use("/task", updateTask)

app.use("/task", deleteTask)

app.use("/", allTasks)