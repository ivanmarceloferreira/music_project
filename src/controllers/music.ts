import { Request, Response } from "express";
import { Music } from "../entities/music.model";

// Buscar todos
export async function listAllMusics(req: Request, res: Response) {
	const musics = await Music.findAll();

    return res.json(musics);
}

// Buscar por ID
export async function listById(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const music = await Music.findByPk(id);

    if (!music) {
        return res.status(400).json("Musica não encontrada");
    }

    return res.json(music);
}

// Criar uma música
export async function createMusic(req: Request, res: Response) {
    console.log('body', req.body);

    const music: Music = await Music.create({
        nome: req.body.nome
    });
    
    res.status(200).json(music);
}

// Deletar uma música
export async function deleteMusic(req: Request, res: Response) {

    const id: number = Number(req.params.id);
    const music = await Music.findByPk(id);

    if (!music) {
        return res.status(400).json("Musica não encontrada");
    }

    music.destroy();
    return res.status(204).send();

}