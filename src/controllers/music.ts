import { Request, Response } from "express";
import { Music } from "../entities/music.model";

// Buscar todos
export async function listAllMusics(req: Request, res: Response) {
	const musics = await Music.findAll();

    return res.json(musics);
}

export async function listById(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const music = await Music.findByPk(id);

    if (!music) {
        return res.status(400).json("Musica não encontrada");
    }

    return res.json(music);
}