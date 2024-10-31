import express, { Request, Response } from "express";
import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";
import cors from "cors";

const app = express();
// Configuração do CORS
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  return res.send({ message: "Hello World" });
});

app.post("/createUser", UserController.createUser);
app.post("/login", UserController.login);
app.post("/createPost", PostController.createPost);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
