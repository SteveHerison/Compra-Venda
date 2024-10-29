import { Request, Response } from "express"; // Certifique-se de importar Request e Response do express
import { prisma } from "../database";

interface CreateUserRequest {
  name: string;
  email: string;
}

export default {
  async createUser(req: Request<{}, {}, CreateUserRequest>, res: Response) {
    try {
      const { name, email } = req.body;

      // Verifica se o usuário já existe
      const userExist = await prisma.user.findUnique({ where: { email } });

      if (userExist) {
        return res.status(400).json({
          // Retorna um status 400 para erro de solicitação
          error: true,
          message: "Erro: Usuário já existe!",
        });
      }

      // Criação do novo usuário
      const user = await prisma.user.create({
        data: {
          name,
          email,
        },
      });

      // Retornando o usuário criado com status 201
      return res.json({
        error: false,
        message: "Sucesso: Usuário cadastrado com sucesso!",
        user,
      });
    } catch (error) {
      // Tratamento de erro
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message }); // Retorna 500 em caso de erro interno do servidor
      }
      return res.status(500).json({ message: "Erro inesperado." });
    }
  },
};
