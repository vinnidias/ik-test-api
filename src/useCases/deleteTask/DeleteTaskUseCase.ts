import { Task } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { DeleteTaskDTO } from "../../dtos/DeleteTaskDTO";
import { AppError } from "../../error/AppError";

export class DeleteTaskUseCase {
  async execute({ id }: DeleteTaskDTO): Promise<Task> {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    const deleteTask = await prisma.task.delete({
      where: {
        id,
      },
    });

    return deleteTask;
  }
}
