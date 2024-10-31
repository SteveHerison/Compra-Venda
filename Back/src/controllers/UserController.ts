import { Request, Response } from "express";
import { prisma } from "../database/database";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginRequest {
  email: string;
  password: string;
}

export default {
  async login(req: Request<{}, {}, LoginRequest>, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
        },
      });

      if (!user) {
        return res
          .status(400)
          .json({ error: true, message: "Erro: Usuário não encontrado!" });
      }

      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ error: true, message: "Erro: Senha incorreta!" });
      }

      const token = sign({ id: user.id, email: user.email }, "SEU_SEGREDO", {
        expiresIn: "1h",
      });
      return res.json({
        error: false,
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: error instanceof Error ? error.message : "Erro inesperado",
        });
    }
  },

  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({
            error: true,
            message: "Erro: Todos os campos são obrigatórios!",
          });
      }

      const hashedPassword = await hash(password, 10);

      const user = await prisma.user.create({
        data: { name, email, password: hashedPassword },
      });

      return res.json({
        error: false,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      return res
        .status(500)
        .json({
          message: error instanceof Error ? error.message : "Erro inesperado",
        });
    }
  },
};
