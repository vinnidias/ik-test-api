import { Router } from "express";

import { taskRoutes } from "./tasks.routes";

const routes = Router();

routes.use("/task", taskRoutes);

export { routes };
