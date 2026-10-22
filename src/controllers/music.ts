import { Request, Response } from "express";
import { Music } from "../entities/music.model";

// Buscar todos
export async function listAllMusics(req: Request, res: Response) {
	const musics = await Music.findAll();

    return res.json(musics);
}