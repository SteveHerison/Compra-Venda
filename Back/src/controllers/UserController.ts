import { Request, Response } from "express";
import { prisma } from "../database";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { hash } from "bcryptjs"; //
interface LoginRequest {
  email: string;
  password: string;
}

export default {
  async login(req: Request<{}, {}, LoginRequest>, res: Response) {
    try {
      const { email, password } = req.body;

      // Verifique se o e-mail e a senha foram recebidos
      console.log("E-mail fornecido:", email);
      console.log("Senha fornecida:", password);
      console.log("Requisição de login recebida"); // Adicione este log

      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          password: true, // Certifique-se de que a senha está sendo buscada
        },
      });

      // Se o usuário não for encontrado
      if (!user) {
        console.log("Usuário não encontrado.");
        return res.status(400).json({
          error: true,
          message: "Erro: Usuário não encontrado!",
        });
      }

      console.log("Usuário encontrado:", user); // Log do usuário encontrado

      const isPasswordValid = await compare(password, user.password);
      console.log("Comparando senha, resultado:", isPasswordValid); // Log do resultado da comparação

      // Se a senha for inválida
      if (!isPasswordValid) {
        console.log("Senha incorreta.");
        return res.status(400).json({
          error: true,
          message: "Erro: Senha incorreta ou E-mail incorreto!",
        });
      }

      const token = sign({ id: user.id, email: user.email }, "SEU_SEGREDO", {
        expiresIn: "1h",
      });

      return res.json({
        error: false,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro no login:", error.message); // Log de erro
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro inesperado." });
    }
  },

  async createUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      console.log("Dados recebidos para criação do usuário:", {
        name,
        email,
        password,
      });

      // Verifique se os dados foram recebidos corretamente
      if (!name || !email || !password) {
        return res.status(400).json({
          error: true,
          message: "Erro: Todos os campos são obrigatórios!",
        });
      }

      // Hash da senha antes de salvar
      const hashedPassword = await hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      return res.json({
        error: false,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro inesperado." });
    }
  },
};
