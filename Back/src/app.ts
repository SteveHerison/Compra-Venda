import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => res.send({ message: "Hello World" }));

// Rotas principais
app.use("/", userRoutes);
app.use("/post", postRoutes);

export default app;
