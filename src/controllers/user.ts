import { Request, Response } from "express";
import { User } from "../entities/user.model";
import bcrypt from "bcrypt";

// Buscar todos
export async function listAllUsers(req: Request, res: Response) {
  const users = await User.findAll();

  return res.json(users);
}

// Buscar por ID
export async function listById(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(400).json("User não encontrado");
  }

  return res.json(user);
}

// Criar uma música
export async function createUser(req: Request, res: Response) {
  console.log("body", req.body);

  // validações
  // if (req.body.nome = "") {

  // }

  const salt = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
  const passwordHashed = await bcrypt.hash(req.body.password, salt);

  const user: User = await User.create({
    nome: req.body.nome,
    email: req.body.email,
    password: passwordHashed,
  });

  res.status(200).json(user);
}

// Atualizar a senha do usuario
export async function updateUserPassword(req: Request, res: Response) {
  const params = req.params;
  const data = req.body;

  const id: number = Number(params.id);
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }

  const salt = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
  const passwordHashed = await bcrypt.hash(req.body.password, salt);

  await user.update(
    {
      password: passwordHashed,
    },
    {
      where: { id: user.id },
    },
  );

  return res.sendStatus(204);
}

// Deletar uma música
export async function deleteUser(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const user = await User.findByPk(id);

  if (!user) {
    return res.status(400).json("User não encontrado");
  }

  user.destroy();
  return res.status(204).send();
}
