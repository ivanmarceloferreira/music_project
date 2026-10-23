import { Router } from "express";
import {
	listAllMusics,
	listById
} from "../controllers/music";

const router = Router();

router.get("/musics", listAllMusics);
router.get("/musics/:id", listById);

export default router;