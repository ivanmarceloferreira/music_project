import { Router } from "express";
import {
	createMusic,
	deleteMusic,
	listAllMusics,
	listById
} from "../controllers/music";

const router = Router();

router.get("/musics", listAllMusics);
router.post("/musics", createMusic);

router.get("/musics/:id", listById);
router.delete("/musics/:id", deleteMusic);

export default router;