import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllTasksController = async (req: Request, res: Response) => {
  try {
    const tasks =  await prisma.task.findMany();
    res.status(200).json([...tasks]);
  } catch (error) {
    res.status(500).json({message: "Erro no servidor, tente mais tarde"});
  }
}