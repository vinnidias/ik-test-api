import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteTaskById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const task = await prisma.task.findUnique({
      where: {
        id: id,
      },
    });

    if (!task) {
      return res.status(422).json({ message: "Compromisso não encontrado!" });
    }

    await prisma.task.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Compromisso deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor, tente mais tarde" });
  }
};
