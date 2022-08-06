import { Request, Response } from "express";

import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

export class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const deletTaskUseCase = new DeleteTaskUseCase();

    const result = await deletTaskUseCase.execute({
      id,
    });

    res.status(200).json({ message: "Task deleted sucefully!", deleted: result });
  }
}
