import { Request, Response } from "express";
import { prisma } from "../database/database";

interface CreatePostRequest {
  title: string;
  content: string;
  userId: number;
}

export default {
  async createPost(req: Request<{}, {}, CreatePostRequest>, res: Response) {
    try {
      const { title, content, userId } = req.body;

      const post = await prisma.post.create({
        data: { title, content, userId },
      });

      return res.json({
        error: false,
        message: "Sucesso: Post cadastrado com sucesso!",
        post,
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
