import { Router } from "express";
import {
	createMusic,
	deleteMusic,
	listAllMusics,
	listById
} from "../controllers/music";

const musicRouter = Router();

musicRouter.get("/musics", listAllMusics);
musicRouter.post("/musics", createMusic);

musicRouter.get("/musics/:id", listById);
musicRouter.delete("/musics/:id", deleteMusic);

export default musicRouter;