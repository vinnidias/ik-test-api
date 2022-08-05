import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTaskController = async (req: Request, res: Response) => {
  try {
    const { name, title, description, date, hour } = req.body;

    if (!name) {
      return res.status(422).json({ message: "O nome é um dado obrigatório" });
    }
    if (!title) {
      return res
        .status(422)
        .json({ message: "O título é um dado obrigatório" });
    }
    if (!description) {
      return res
        .status(422)
        .json({ message: "A descrição é um dado obrigatório" });
    }
    if (!date) {
      return res.status(422).json({ message: "A data é um dado obrigatório" });
    }
    if (!hour) {
      return res
        .status(422)
        .json({ message: "O horário é um dado obrigatório" });
    }

    await prisma.task.create({
      data: {
        name, title, description, date, hour
      }
    })

    res.status(201).json({message: "Compromisso criado com sucesso", })
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor, tente mais tarde" });
    console.log(error);
  }
};
