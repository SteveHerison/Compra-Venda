import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/createUser", UserController.createUser);
router.post("/", UserController.login);

export default router;
