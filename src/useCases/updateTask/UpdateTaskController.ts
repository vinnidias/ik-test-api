import { Request, Response } from "express";

import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

export class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const { name, title, description, date, hour } = req.body;

    const updateTaskUseCase = new UpdateTaskUseCase();

    const result = await updateTaskUseCase.execute({
      id,
      name,
      title,
      description,
      date,
      hour,
    });

    return res.status(200).json({message: "Task updated sucefully!", task: result})
  }
}
