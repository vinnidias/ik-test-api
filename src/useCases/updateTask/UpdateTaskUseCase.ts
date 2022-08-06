import { Task } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { UpdateTaskDTO } from "../../dtos/UpdateTaskDTO";

export class UpdateTaskUseCase {
  async execute({
    id,
    name,
    title,
    description,
    date,
    hour,
  }: UpdateTaskDTO): Promise<Task | null> {
    const updateTask = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        name,
        title,
        description,
        date,
        hour,
      },
    });

    const result = await prisma.task.findUnique({
      where: {
        id: id,
      },
    });

    return result;
  }
}
