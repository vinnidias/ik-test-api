import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateTaskById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, title, description, date, hour } = req.body;

    await prisma.task.update({
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

    res.status(200).json({
      message: "Alterações feitas com sucesso!",
      updatedTask: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor, tente mais tarde" });
  }
};
