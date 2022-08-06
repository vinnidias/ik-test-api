import { Task } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";
import { AppError } from "../../error/AppError";

export class CreateTaskUseCase {
  async execute({
    name,
    title,
    description,
    date,
    hour,
  }: CreateTaskDTO): Promise<Task> {
    
    if (!name) {
      throw new AppError("O nome é um dado obrigatório", 422);
    }
    if (!title) {
      throw new AppError("O título é um dado obrigatório", 422);
    }
    if (!description) {
      throw new AppError("A descrição é um dado obrigatório", 422);
    }
    if (!date) {
      throw new AppError("A data é um dado obrigatório", 422);
    }
    if (!hour) {
      throw new AppError("O horário é um dado obrigatório", 422);
    }

    const task = await prisma.task.create({
      data: {
        name,
        title,
        description,
        date,
        hour,
      },
    });

    return task
  }
}
