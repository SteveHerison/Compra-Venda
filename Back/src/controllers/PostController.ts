import { Request, Response } from "express"; // Certifique-se de importar Request e Response do express
import { prisma } from "../database";

interface CreateUserRequest {
  title: string;
  content: string;
  userId: number;
}

export default {
  async createPost(req: Request<{}, {}, CreateUserRequest>, res: Response) {
    try {
      const { title, content, userId } = req.body;

      // Criação do novo usuário
      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId,
        },
      });

      // Retornando o usuário criado com status 201
      return res.json({
        error: false,
        message: "Sucesso: Post cadastrado com sucesso!",
        post,
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
