import { Router } from "express";
import { createUser, deleteUser, listAllUsers, listById } from "../controllers/user";

const userRouter = Router();

userRouter.get("/users", listAllUsers);
userRouter.post("/users", createUser);

userRouter.get("/users/:id", listById);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;