import { Router } from "express";
import PostController from "../controllers/PostController";

const router = Router();

router.post("/createPost", PostController.createPost);

export default router;
