import { Router } from "express";
import { GetAllTasksController } from "../useCases/getAllTasks/GetAllTasksController";
import { CreateTaskController } from "../useCases/createTask/CreateTaskController";
import { UpdateTaskController } from "../useCases/updateTask/UpdateTaskController";
import { DeleteTaskController } from "../useCases/deleteTask/DeleteTaskController";

const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.patch("/:id", updateTaskController.handle);
taskRoutes.get("/", getAllTasksController.handle);
taskRoutes.delete("/:id", deleteTaskController.handle);

export { taskRoutes };
