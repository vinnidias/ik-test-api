import { Task } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { AppError } from "../../error/AppError";

export class GetAllTasksUseCase {
  async execute(): Promise<Task[]> {
    const tasks = await prisma.task.findMany();

    return tasks;
  }
}
