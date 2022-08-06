import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { name, title, description, date, hour } = req.body;

    const createTaskUseCase = new CreateTaskUseCase();
    const result = await createTaskUseCase.execute({
      name,
      title,
      description,
      date,
      hour,
    });

    return res
      .status(201)
      .json({ message: "Task created successfully", task: result });
  }
}
