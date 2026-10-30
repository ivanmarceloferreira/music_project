import { Router } from "express";
import { createUser, deleteUser, listAllUsers, listById, updateUserPassword } from "../controllers/user";

const userRouter = Router();

userRouter.get("/users", listAllUsers);
userRouter.post("/users", createUser);
userRouter.patch("/users/:id/password", updateUserPassword);

userRouter.get("/users/:id", listById);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;