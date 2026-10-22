import { Router } from "express";
import {
	listAllMusics
} from "../controllers/music";

const router = Router();

router.get("/musics", listAllMusics);

export default router;